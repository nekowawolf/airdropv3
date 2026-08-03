import { Airdrop } from '@/types/airdrop';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_ENDPOINTS = {
    airdrops: `${API_BASE_URL}/airdrops`,
    stats: `${API_BASE_URL}/airdrops/stats`,
};

const extractData = (data: any): any[] => {
    if (Array.isArray(data)) return data;
    if (data?.data && Array.isArray(data.data)) return data.data;
    if (data?.result && Array.isArray(data.result)) return data.result;
    if (data?.items && Array.isArray(data.items)) return data.items;
    return [];
};

const sortByCreatedAtDesc = (items: any[]) =>
    items.sort(
        (a, b) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
    );

const sortEndedByEndedAtDesc = (items: any[]) =>
    items.sort((a, b) => {
        const endA = a.ended_at ? new Date(a.ended_at).getTime() : 0;
        const endB = b.ended_at ? new Date(b.ended_at).getTime() : 0;

        if (endA !== endB) return endB - endA;

        return (
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        );
    });

export const fetchFreeAirdrops = async (): Promise<Airdrop[]> => {
    try {
        const res = await fetch(`${API_ENDPOINTS.airdrops}?is_paid=false`);
        if (!res.ok) throw new Error('Failed to fetch free airdrops');

        const items = extractData(await res.json());

        return sortByCreatedAtDesc(
            items
                .filter((item: any) => item.status === 'active')
                .map((item: any) => ({
                    ...item,
                    id: item._id || item.id,
                    type: 'Free',
                }))
        );
    } catch (error) {
        console.error('fetchFreeAirdrops error:', error);
        return [];
    }
};

export const fetchPaidAirdrops = async (): Promise<Airdrop[]> => {
    try {
        const res = await fetch(`${API_ENDPOINTS.airdrops}?is_paid=true`);
        if (!res.ok) throw new Error('Failed to fetch paid airdrops');

        const items = extractData(await res.json());

        return sortByCreatedAtDesc(
            items
                .filter((item: any) => item.status === 'active')
                .map((item: any) => ({
                    ...item,
                    id: item._id || item.id,
                    type: 'Paid',
                }))
        );
    } catch (error) {
        console.error('fetchPaidAirdrops error:', error);
        return [];
    }
};

export const fetchEndedAirdrops = async (): Promise<Airdrop[]> => {
    try {
        const res = await fetch(API_ENDPOINTS.airdrops);
        if (!res.ok) throw new Error('Failed to fetch ended airdrops');

        const items = extractData(await res.json());

        return sortEndedByEndedAtDesc(
            items
                .filter((item: any) => item.status === 'ended')
                .map((item: any) => ({
                    ...item,
                    id: item._id || item.id,
                    type: 'Ended',
                }))
        );
    } catch (error) {
        console.error('fetchEndedAirdrops error:', error);
        return [];
    }
};

export const fetchAirdropById = async (id: string): Promise<Airdrop | null> => {
    try {
        const res = await fetch(API_ENDPOINTS.airdrops);
        if (!res.ok) throw new Error('Failed to fetch airdrops for detail');

        const items = extractData(await res.json());
        const found = items.find((item: any) => item.id === id || item._id === id);

        if (found) {
             let type = 'Free';
             if (found.status === 'ended') type = 'Ended';
             else if (found.is_paid) type = 'Paid';
             return { ...found, id: found._id || found.id, type };
        }
        
        return null;
    } catch (error) {
        console.error('fetchAirdropById error:', error);
        return null;
    }
};

export const fetchAirdropStats = async (): Promise<{ total: number; active: number; ended: number } | null> => {
    try {
        const res = await fetch(API_ENDPOINTS.stats);
        if (!res.ok) throw new Error('Failed to fetch airdrop stats');

        const json = await res.json();
        return json?.data ?? null;
    } catch (error) {
        console.error('fetchAirdropStats error:', error);
        return null;
    }
};
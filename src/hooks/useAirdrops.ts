import { useState, useEffect } from 'react';
import { Airdrop } from '@/types/airdrop';
import {
    fetchFreeAirdrops,
    fetchPaidAirdrops,
    fetchEndedAirdrops,
} from '@/services/airdropService';

export const useAirdrops = () => {
    const [freeAirdrops, setFreeAirdrops] = useState<Airdrop[]>([]);
    const [paidAirdrops, setPaidAirdrops] = useState<Airdrop[]>([]);
    const [endedAirdrops, setEndedAirdrops] = useState<Airdrop[]>([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const [free, paid, ended] = await Promise.all([
                    fetchFreeAirdrops(),
                    fetchPaidAirdrops(),
                    fetchEndedAirdrops()
                ]);
                setFreeAirdrops(free);
                setPaidAirdrops(paid);
                setEndedAirdrops(ended);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch airdrops');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return {
        freeAirdrops,
        paidAirdrops,
        endedAirdrops,
        loading,
        error
    };
};
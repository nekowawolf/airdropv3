export interface Airdrop {
    id: string;
    name: string;
    task: string;
    website: string;
    level: string;
    status: string;
    backed: string;
    funds: string;
    supply: string;
    fdv: string;
    market_cap: string;
    is_vesting: boolean;
    is_paid: boolean;
    claim_url: string;
    discord: string;
    twitter: string;
    telegram: string;
    image_url: string;
    description: string;
    guide_url: string;
    created_at: string;
    ended_at?: string;
    type?: 'Free' | 'Paid' | 'Ended';
}

export type AirdropFree = Airdrop;
export type AirdropPaid = Airdrop;

export interface FilterOptions {
    levels?: string[];
    tasks?: string[];
    vesting?: string[];
}
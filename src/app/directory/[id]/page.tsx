import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DetailClient from './DetailClient';

import { airdropMetadata } from '@/constants/metadataTemplates';
import { fetchAirdropById } from '@/services/airdropService';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
    const resolvedParams = await params;
    const airdrop = await fetchAirdropById(resolvedParams.id);
    if (!airdrop) return airdropMetadata("Not Found", "Airdrop not found");
    return airdropMetadata(airdrop.name, airdrop.description);
}

export default function AirdropsPage() {
    return (
        <>
            <Header />
            <DetailClient />
            <Footer />
        </>
    );
}
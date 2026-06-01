import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DetailClient from './DetailClient';

import { dashboardMetadata } from '@/constants/metadataTemplates';
import { fetchAirdropById } from '@/services/airdropService';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
    const resolvedParams = await params;
    const airdrop = await fetchAirdropById(resolvedParams.id);
    if (!airdrop) return dashboardMetadata("Not Found", "Airdrop not found");
    return dashboardMetadata(airdrop.name, airdrop.description);
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
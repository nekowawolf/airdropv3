import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { airdropMetadata } from '@/constants/metadataTemplates';
import AddAirdropClient from './AddAirdropClient';

export const metadata = airdropMetadata('Add Airdrop', 'Submit an airdrop project to the directory.');

export default function AddAirdropPage() {
    return (
        <>
            <Header />
            <AddAirdropClient />
            <Footer />
        </>
    );
}
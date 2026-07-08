import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { airdropMetadata } from "@/constants/metadataTemplates";
import DetailClient from "./DetailClient";

export const metadata = airdropMetadata("Activity", "Web activity.");

export default function ActivityPage() {
  return (
    <>
      <Header />
      <DetailClient />
      <Footer />
    </>
  );
}
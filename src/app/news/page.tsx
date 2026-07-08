import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { airdropMetadata } from "@/constants/metadataTemplates";
import DetailClient from "./DetailClient";

export const metadata = airdropMetadata("News", "The latest news and updates.");

export default function NewsPage() {
  return (
    <>
      <Header />
      <DetailClient />
      <Footer />
    </>
  );
}

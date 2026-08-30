import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { airdropMetadata } from "@/constants/metadataTemplates";
import DetailClient from "./DetailClient";

export const metadata = airdropMetadata("Blog", "Articles, reviews, deep dives, and analysis.");

export default function BlogPage() {
  return (
    <>
      <Header />
      <DetailClient />
      <Footer />
    </>
  );
}

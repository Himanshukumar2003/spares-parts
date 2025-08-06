import BreadcrumbHeader from "@/componets/breadcrumbHeader";
import ProductPage from "./_compontents/componets";
import SwiperSection from "./_compontents/hero-section";

export default function Home(params) {
  return (
    <>
      <BreadcrumbHeader title="STEERING PARTS" />
      <SwiperSection></SwiperSection>
      <ProductPage></ProductPage>
    </>
  );
}

import BreadcrumbHeader from "@/componets/breadcrumbHeader";
import { ProductDetailPage } from "./_componets/product-deetiles";
import ProductDiscription from "./_componets/description";
import Fillter from "./_componets/filterbymarket";

export default function Page() {
  return (
    <main>
      <BreadcrumbHeader title="SMART KEY FOR CAR REMOTE FOR MONDEO" />

      <ProductDetailPage />
      <ProductDiscription></ProductDiscription>
      <Fillter></Fillter>
    </main>
  );
}

import { useEffect } from "react";
import SingleProduct from "../../../components/_ui/_product/single-product";
import UiBreadcrumb from "../../../components/common/UiBreadcrumb";
import { UiBreadcrumbItem } from "../../../types";
import DeliveryOptions from "../../../components/_ui/_product/delivery-options";
import ProductDescription from "../../../components/_ui/_product/product-description";

const breadcrumbItems: UiBreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Fashion", href: "/fashion" },
  { label: "Bra", href: "/bra" },
  {
    label: "New Rose Set Bra Panty",
    href: "/newrose-set-bra-panty",
    isCurrentPage: true,
  },
];

const ProductDetails: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-8">
      <UiBreadcrumb items={breadcrumbItems} />

      <div className="flex gap-5">
        <section className="w-[70%] py-5">
          <SingleProduct />
          <ProductDescription />
        </section>
        <section className="w-[30%] py-5">
          <DeliveryOptions />
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;

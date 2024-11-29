import CategoryBanner from "../../../components/_ui/_categories/category-banner";
import CategoryFilter from "../../../components/_ui/_categories/category-filter";
import CategoryProducts from "../../../components/_ui/_categories/category-product";
import UiBreadcrumb from "../../../components/common/UiBreadcrumb";
import { UiBreadcrumbItem } from "../../../types";

const breadcrumbItems: UiBreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Fashion", href: "/fashion" },
  { label: "Women", href: "/women" },
  { label: "Bra", href: "/bra", isCurrentPage: true },
];
const CategoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <UiBreadcrumb items={breadcrumbItems} />
      {/* Add your category page content here */}

      <section className="py-5">
        <CategoryBanner />
      </section>
      <section className="lg:flex gap-5">
        {/* category filter */}
        <div className="lg:w-[25%] lg:block hidden">
          <CategoryFilter />
        </div>
        {/* category products */}
        <div className="lg:w-[75%]">
          <CategoryProducts />
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;

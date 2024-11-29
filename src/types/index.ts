export interface HotDealProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  rating: number;
  reattingcount: number;
  image: string;
}
export interface HotDealProductTwo {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  rating: number;
}

export interface UiBreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

export interface CategoryFilterItem {
  name: string;
  options: (string | ColorOption)[];
}

export interface ColorOption {
  label: string;
  color: string;
}

export interface CategoryItems {
  name: string;
  subcategories?: CategoryItems[];
}

export interface DropdownProps {
  label: string;
  options: string[];
}

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  sku: string;
  stock: number;
  maxStock: number;
  price: string;
  rating: number;
  reviews: number;
  status: string;
}

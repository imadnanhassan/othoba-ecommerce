import images from "../assets/images/images";
import {
  AdminBrand,
  AdminCategory,
  AdminProduct,
  CategoryFilterItem,
  CategoryItems,
} from "../types";

export const categoriesData = [
  { id: 1, name: "Pharmacy", image: images.pharmacy },
  { id: 2, name: "Household Festival", image: images.householdfestival },
  {
    id: 3,
    name: "Special Weekly Offer",
    image: images.offer,
  },
  {
    id: 4,
    name: "Furniture Big Saving Days",
    image: images.furniture,
  },
  {
    id: 6,
    name: "Home & LIving",
    image: images.homeliving,
  },
  {
    id: 7,
    name: "Electronics",
    image: images.electronics,
  },
  {
    id: 8,
    name: "Food & Grocery",
    image: images.food,
  },
  {
    id: 9,
    name: "Fashion",
    image: images.fashion,
  },
  {
    id: 10,
    name: "Baby & Kids",
    image: images.babykids,
  },
  {
    id: 11,
    name: "Bags & Travel",
    image: images.travel,
  },
];

export const homepageBannerData = [
  { id: 1, images: images.homebanner },
  { id: 2, images: images.homebanner2 },
  { id: 3, images: images.homebanner3 },
  { id: 4, images: images.homebanner4 },
];

export const callAction = [
  {
    id: 1,
    title: "Cancellation & Returns",
    text: "If products not matched",
    icon: images.truck,
  },
  {
    id: 2,
    title: "Cancellation & Returns",
    text: "If products not matched",
    icon: images.truck,
  },
  {
    id: 3,
    title: "Cancellation & Returns",
    text: "If products not matched",
    icon: images.truck,
  },
  {
    id: 4,
    title: "Cancellation & Returns",
    text: "If products not matched",
    icon: images.truck,
  },
];

export const hotDealProductOne = [
  {
    id: 1,
    name: `Vision 43" LED TV Google Android 4K RN1 Galaxy Pro`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct,
  },
  {
    id: 2,
    name: `VISION 32" LED TV N10S Android Smart Infinity`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct1,
  },
  {
    id: 3,
    name: `Vision 55" QLED TV Google Android 4K PQ1Galaxy Pro`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct2,
  },
  {
    id: 4,
    name: `Vision 45" QLED TV Google Android 4K PQ1Galaxy Pro`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct3,
  },
];

export const hotDealProductTwo = [
  {
    id: 1,
    name: `Vision 43" LED TV Google Android 4K RN1 Galaxy Pro`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct,
  },
  {
    id: 2,
    name: `VISION 32" LED TV N10S Android Smart Infinity`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct1,
  },
  {
    id: 3,
    name: `Vision 55" QLED TV Google Android 4K PQ1Galaxy Pro`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct2,
  },
  {
    id: 4,
    name: `Vision 45" QLED TV Google Android 4K PQ1Galaxy Pro`,
    price: 86000,
    discount: 4000,
    rating: 5,
    reattingcount: 4,
    image: images.hotproduct3,
  },
];

// category page
export const categories: CategoryItems[] = [
  {
    name: "Fashion",
    subcategories: [
      {
        name: "Fashion Craze",
        subcategories: [],
      },
      {
        name: "Men",
        subcategories: [],
      },
      {
        name: "Women",
        subcategories: [
          {
            name: "Women's Clothing",
            subcategories: [
              { name: "Salwar Kameez", subcategories: [] },
              { name: "Kurti", subcategories: [] },
              { name: "Tops", subcategories: [] },
              { name: "Saree", subcategories: [] },
              { name: "Gowns", subcategories: [] },
              { name: "Leggings", subcategories: [] },
              { name: "Lehengas", subcategories: [] },
              { name: "Women's T-Shirt", subcategories: [] },
              { name: "Women’s Tank Top", subcategories: [] },
              { name: "Nightwears", subcategories: [] },
              { name: "Palazzo", subcategories: [] },
              { name: "Women's Pajamas", subcategories: [] },
              { name: "Women's Pants", subcategories: [] },
              { name: "Bra", subcategories: [] },
              { name: "Panties", subcategories: [] },
              { name: "Modest Wear", subcategories: [] },
              { name: "Maternity And Nursing Clothes", subcategories: [] },
              { name: "Socks & Stocking", subcategories: [] },
              { name: "Koti & Jackets", subcategories: [] },
              { name: "Women's Shorts", subcategories: [] },
              { name: "Skirt", subcategories: [] },
            ],
          },
          {
            name: "Footwear",
            subcategories: [],
          },
          {
            name: "Fashion Accessories",
            subcategories: [],
          },
          {
            name: "Women's Perfume",
            subcategories: [],
          },
          {
            name: "Islamic Zone",
            subcategories: [],
          },
          {
            name: "Boy's Clothing",
            subcategories: [],
          },
          {
            name: "Girl's Clothing",
            subcategories: [],
          },
          {
            name: "Baby Clothing",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "Islamic Zone",
    subcategories: [],
  },
  {
    name: "Boy's Clothing",
    subcategories: [],
  },
  {
    name: "Girl's Clothing",
    subcategories: [],
  },
  {
    name: "Baby Clothing",
    subcategories: [],
  },
];

export const filters: CategoryFilterItem[] = [
  {
    name: "Color",
    options: [
      { label: "Red", color: "bg-red-500" },
      { label: "Green", color: "bg-green-500" },
      { label: "Blue", color: "bg-blue-500" },
      { label: "Yellow", color: "bg-yellow-500" },
      { label: "Black", color: "bg-black" },
    ],
  },
  {
    name: "Size",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Discount Applied",
    options: ["10%", "20%", "30%", "40%", "50%", "60%"],
  },
  {
    name: "Filter By Brand",
    options: ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"],
  },
  {
    name: "Filter By Vendors",
    options: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"],
  },
  {
    name: "Filter By Rating",
    options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
  },
];

// products
export const products = [
  {
    productId: "1",
    image: images.product1,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Padded Push Up Lace Tube Strapless Bra For Women",
    oldPrice: 1196,
    newPrice: 299,
    discount: 75,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00363",
  },
  {
    productId: "2",
    image: images.product2,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Imported Padded Push Up Lace Tube Strapless Bra",
    oldPrice: 1196,
    newPrice: 299,
    discount: 75,
    rating: 5,
    category: "bra",
    SKU: "OIE00363",
  },
  {
    productId: "3",
    image: images.product3,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Strapless Padded Tube Silk Foam Bra For Women",
    oldPrice: 990,
    newPrice: 243,
    discount: 75,
    rating: 3.5,
    category: "bra",
    SKU: "OIE00363",
  },
  {
    productId: "4",
    image: images.product4,
    hoverImage: images.product7,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Silk Foam Tube Bra for Everyday Wear",
    oldPrice: 990,
    newPrice: 243,
    discount: 75,
    rating: 3.5,
    category: "bra",
    SKU: "OIE00364",
  },
  {
    productId: "5",
    image: images.product5,
    hoverImage: images.product1,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Seamless Wireless Bra For Women",
    oldPrice: 850,
    newPrice: 199,
    discount: 76,
    rating: 4.0,
    category: "bra",
    SKU: "OIE00365",
  },
  {
    productId: "6",
    image: images.product6,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Lace Bralette For Women",
    oldPrice: 950,
    newPrice: 249,
    discount: 74,
    rating: 4.7,
    category: "bra",
    SKU: "OIE00366",
  },
  {
    productId: "7",
    image: images.product7,
    hoverImage: images.product3,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Sports Bra For Women",
    oldPrice: 1200,
    newPrice: 399,
    discount: 67,
    rating: 4.8,
    category: "bra",
    SKU: "OIE00367",
  },
  {
    productId: "8",
    image: images.product8,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Comfortable Everyday Bra",
    oldPrice: 700,
    newPrice: 199,
    discount: 72,
    rating: 4.2,
    category: "bra",
    SKU: "OIE00368",
  },
  {
    productId: "9",
    image: images.product9,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Push Up Bra For Women",
    oldPrice: 1100,
    newPrice: 349,
    discount: 68,
    rating: 4.4,
    category: "bra",
    SKU: "OIE00369",
  },
  {
    productId: "10",
    image: images.product10,
    hoverImage: images.product6,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Cotton Bra For Women",
    oldPrice: 800,
    newPrice: 249,
    discount: 69,
    rating: 4.3,
    category: "bra",
    SKU: "OIE00370",
  },
  {
    productId: "11",
    image: images.product1,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Luxe Lace Underwire Bra",
    oldPrice: 1300,
    newPrice: 399,
    discount: 69,
    rating: 4.6,
    category: "bra",
    SKU: "OIE00371",
  },
  {
    productId: "12",
    image: images.product2,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Silk Sleep Bra For Ultimate Comfort",
    oldPrice: 900,
    newPrice: 229,
    discount: 74,
    rating: 4.2,
    category: "bra",
    SKU: "OIE00372",
  },
  {
    productId: "13",
    image: images.product3,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Adjustable Sports Bra for Active Women",
    oldPrice: 1100,
    newPrice: 399,
    discount: 64,
    rating: 4.9,
    category: "bra",
    SKU: "OIE00373",
  },
  {
    productId: "14",
    image: images.product4,
    hoverImage: images.product7,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Essential Cotton Bra",
    oldPrice: 850,
    newPrice: 199,
    discount: 76,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00374",
  },
  {
    productId: "15",
    image: images.product5,
    hoverImage: images.product1,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Lace Back Wireless Bra",
    oldPrice: 1200,
    newPrice: 399,
    discount: 67,
    rating: 4.8,
    category: "bra",
    SKU: "OIE00375",
  },
  {
    productId: "16",
    image: images.product6,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Silhouette Enhancing Bra",
    oldPrice: 1100,
    newPrice: 329,
    discount: 70,
    rating: 4.4,
    category: "bra",
    SKU: "OIE00376",
  },
  {
    productId: "17",
    image: images.product7,
    hoverImage: images.product3,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Cozy Cotton Blend Bra",
    oldPrice: 750,
    newPrice: 199,
    discount: 73,
    rating: 4.1,
    category: "bra",
    SKU: "OIE00377",
  },
  {
    productId: "18",
    image: images.product8,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Wireless Lace Back Bra",
    oldPrice: 950,
    newPrice: 299,
    discount: 68,
    rating: 4.6,
    category: "bra",
    SKU: "OIE00378",
  },
  {
    productId: "19",
    image: images.product9,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Plunge Bra for Deep Necklines",
    oldPrice: 1100,
    newPrice: 349,
    discount: 68,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00379",
  },
  {
    productId: "20",
    image: images.product10,
    hoverImage: images.product6,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Classic Black Underwire Bra",
    oldPrice: 800,
    newPrice: 249,
    discount: 69,
    rating: 4.3,
    category: "bra",
    SKU: "OIE00380",
  },
  {
    productId: "21",
    image: images.product1,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Luxury Lace Trim Bra",
    oldPrice: 1300,
    newPrice: 399,
    discount: 69,
    rating: 4.6,
    category: "bra",
    SKU: "OIE00381",
  },
  {
    productId: "22",
    image: images.product2,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Silk Sleep Bra for Comfort",
    oldPrice: 900,
    newPrice: 229,
    discount: 74,
    rating: 4.2,
    category: "bra",
    SKU: "OIE00382",
  },
  {
    productId: "23",
    image: images.product3,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Active Sports Bra for Comfort",
    oldPrice: 1100,
    newPrice: 399,
    discount: 64,
    rating: 4.9,
    category: "bra",
    SKU: "OIE00383",
  },
  {
    productId: "24",
    image: images.product4,
    hoverImage: images.product7,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Cotton Everyday Bra",
    oldPrice: 850,
    newPrice: 199,
    discount: 76,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00384",
  },
  {
    productId: "25",
    image: images.product5,
    hoverImage: images.product1,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Lace Wireless Bra",
    oldPrice: 1200,
    newPrice: 399,
    discount: 67,
    rating: 4.8,
    category: "bra",
    SKU: "OIE00385",
  },
  {
    productId: "26",
    image: images.product6,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Comfort Fit Wireless Bra",
    oldPrice: 1100,
    newPrice: 329,
    discount: 70,
    rating: 4.4,
    category: "bra",
    SKU: "OIE00386",
  },
  {
    productId: "27",
    image: images.product7,
    hoverImage: images.product3,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Classic Wireless Bralette",
    oldPrice: 750,
    newPrice: 199,
    discount: 73,
    rating: 4.1,
    category: "bra",
    SKU: "OIE00387",
  },
  {
    productId: "28",
    image: images.product8,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Stylish Lace Bra",
    oldPrice: 950,
    newPrice: 299,
    discount: 68,
    rating: 4.6,
    category: "bra",
    SKU: "OIE00388",
  },
  {
    productId: "29",
    image: images.product9,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Deep Plunge Push Up Bra",
    oldPrice: 1100,
    newPrice: 349,
    discount: 68,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00389",
  },
  {
    productId: "30",
    image: images.product10,
    hoverImage: images.product6,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Soft Cotton Underwire Bra",
    oldPrice: 800,
    newPrice: 249,
    discount: 69,
    rating: 4.3,
    category: "bra",
    SKU: "OIE00390",
  },
  {
    productId: "31",
    image: images.product1,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Elegant Lace Trim Wireless Bra",
    oldPrice: 1300,
    newPrice: 399,
    discount: 69,
    rating: 4.6,
    category: "bra",
    SKU: "OIE00391",
  },
  {
    productId: "32",
    image: images.product2,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Silk Comfort Bra for Sleep",
    oldPrice: 900,
    newPrice: 229,
    discount: 74,
    rating: 4.2,
    category: "bra",
    SKU: "OIE00392",
  },
  {
    productId: "33",
    image: images.product3,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "All-Day Comfort Sports Bra",
    oldPrice: 1100,
    newPrice: 399,
    discount: 64,
    rating: 4.9,
    category: "bra",
    SKU: "OIE00393",
  },
  {
    productId: "34",
    image: images.product4,
    hoverImage: images.product7,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Daily Cotton Bra",
    oldPrice: 850,
    newPrice: 199,
    discount: 76,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00394",
  },
  {
    productId: "35",
    image: images.product5,
    hoverImage: images.product1,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Wireless Lace Bralette",
    oldPrice: 1200,
    newPrice: 399,
    discount: 67,
    rating: 4.8,
    category: "bra",
    SKU: "OIE00395",
  },
  {
    productId: "36",
    image: images.product6,
    hoverImage: images.product2,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Comfort Fit Bralette",
    oldPrice: 1100,
    newPrice: 329,
    discount: 70,
    rating: 4.4,
    category: "bra",
    SKU: "OIE00396",
  },
  {
    productId: "37",
    image: images.product7,
    hoverImage: images.product3,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Essential Everyday Bralette",
    oldPrice: 750,
    newPrice: 199,
    discount: 73,
    rating: 4.1,
    category: "bra",
    SKU: "OIE00397",
  },
  {
    productId: "38",
    image: images.product8,
    hoverImage: images.product4,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Fashion Lace Bralette",
    oldPrice: 950,
    newPrice: 299,
    discount: 68,
    rating: 4.6,
    category: "bra",
    SKU: "OIE00398",
  },
  {
    productId: "39",
    image: images.product9,
    hoverImage: images.product5,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Push Up Lace Bralette",
    oldPrice: 1100,
    newPrice: 349,
    discount: 68,
    rating: 4.5,
    category: "bra",
    SKU: "OIE00399",
  },
  {
    productId: "40",
    image: images.product10,
    hoverImage: images.product6,
    gallery: [
      { image: images.product5 },
      { image: images.product6 },
      { image: images.product9 },
      { image: images.product10 },
    ],
    title: "Classic Comfort Bra",
    oldPrice: 800,
    newPrice: 249,
    discount: 69,
    rating: 4.3,
    category: "bra",
    SKU: "OIE00400",
  },
];

export const adminProduct: AdminProduct[] = [
  {
    id: "#P1001",
    name: "Tasty Metal Shirt",
    category: "Books",
    image: images.product5,
    sku: "SKU-52442",
    stock: 30,
    maxStock: 100,
    price: "$410.00",
    rating: 3.5,
    reviews: 14,
    status: "Pending",
  },
  {
    id: "#P1002",
    name: "Mystical Cooking Guide",
    category: "Books",
    image: images.product5,
    sku: "SKU-52443",
    stock: 25,
    maxStock: 80,
    price: "$200.00",
    rating: 4.0,
    reviews: 20,
    status: "publish",
  },
  {
    id: "#P1003",
    name: "Techniques of the Mind",
    category: "Books",
    image: images.product5,
    sku: "SKU-52444",
    stock: 50,
    maxStock: 150,
    price: "$320.00",
    rating: 4.5,
    reviews: 45,
    status: "publish",
  },
  {
    id: "#P1004",
    name: "Quantum Coding Secrets",
    category: "Books",
    image: images.product5,
    sku: "SKU-52445",
    stock: 40,
    maxStock: 120,
    price: "$350.00",
    rating: 4.2,
    reviews: 30,
    status: "Pending",
  },
  {
    id: "#P1005",
    name: "The Digital Artist's Toolkit",
    category: "Books",
    image: images.product5,
    sku: "SKU-52446",
    stock: 60,
    maxStock: 200,
    price: "$270.00",
    rating: 3.8,
    reviews: 60,
    status: "publish",
  },
  {
    id: "#P1006",
    name: "A Journey through Space",
    category: "Books",
    image: images.product5,
    sku: "SKU-52447",
    stock: 10,
    maxStock: 50,
    price: "$500.00",
    rating: 5.0,
    reviews: 100,
    status: "publish",
  },
  {
    id: "#P1007",
    name: "Ancient Mysteries Unveiled",
    category: "Books",
    image: images.product5,
    sku: "SKU-52448",
    stock: 15,
    maxStock: 60,
    price: "$180.00",
    rating: 4.0,
    reviews: 25,
    status: "Pending",
  },
  {
    id: "#P1008",
    name: "Deep Dive into History",
    category: "Books",
    image: images.product5,
    sku: "SKU-52449",
    stock: 45,
    maxStock: 130,
    price: "$290.00",
    rating: 4.3,
    reviews: 40,
    status: "publish",
  },
  {
    id: "#P1009",
    name: "The World of AI",
    category: "Books",
    image: images.product5,
    sku: "SKU-52450",
    stock: 12,
    maxStock: 70,
    price: "$220.00",
    rating: 4.7,
    reviews: 15,
    status: "Pending",
  },
  {
    id: "#P1010",
    name: "The Future of Space Exploration",
    category: "Books",
    image: images.product5,
    sku: "SKU-52451",
    stock: 35,
    maxStock: 90,
    price: "$410.00",
    rating: 3.9,
    reviews: 18,
    status: "publish",
  },
];

export const adminCategory: AdminCategory[] = [
  {
    id: "#C001",
    name: "Books",
    image: images.product6,
    category: "",
    status: "publish",
  },
  {
    id: "#C002",
    name: "Electronics",
    image: images.product7,
    category: "",
    status: "publish",
  },
  {
    id: "#C003",
    name: "Clothing",
    image: images.product8,
    category: "",
    status: "draft",
  },
  {
    id: "#C004",
    name: "Home Decor",
    image: images.product9,
    category: "Furniture",
    status: "publish",
  },
  {
    id: "#C005",
    name: "Beauty Products",
    image: images.product10,
    category: "",
    status: "publish",
  },
  {
    id: "#C006",
    name: "Toys & Games",
    image: images.product1,
    category: "Kids",
    status: "draft",
  },
  {
    id: "#C007",
    name: "Sports Equipment",
    image: images.product2,
    category: "",
    status: "publish",
  },
  {
    id: "#C008",
    name: "Automobiles",
    image: images.product3,
    category: "",
    status: "publish",
  },
  {
    id: "#C009",
    name: "Groceries",
    image: images.product4,
    category: "",
    status: "publish",
  },
  {
    id: "#C010",
    name: "Furniture",
    image: images.product5,
    category: "Home Decor",
    status: "draft",
  },
];

export const adminbrands: AdminBrand[] = [
  {
    id: "#B001",
    name: "Apple",
    logo: images.product6,

    status: "active",
  },
  {
    id: "#B002",
    name: "Samsung",
    logo: images.product6,

    status: "active",
  },
  {
    id: "#B003",
    name: "Nike",
    logo: images.product6,

    status: "active",
  },
  {
    id: "#B004",
    name: "Adidas",
    logo: images.product6,
    status: "active",
  },
  {
    id: "#B005",
    name: "Sony",
    logo: images.product6,

    status: "inactive",
  },
  {
    id: "#B006",
    name: "Coca-Cola",
    logo: images.product6,

    status: "inactive",
  },
  {
    id: "#B007",
    name: "Toyota",
    logo: images.product6,

    status: "active",
  },
  {
    id: "#B008",
    name: "Gucci",
    logo: images.product6,

    status: "active",
  },
  {
    id: "#B009",
    name: "Microsoft",
    logo: images.product6,

    status: "active",
  },
  {
    id: "#B010",
    name: "Tesla",
    logo: images.product6,

    status: "active",
  },
];

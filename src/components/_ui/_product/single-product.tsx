import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import {
  FaHeart,
  FaBalanceScale,
  FaShoppingCart,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { products } from "../../../db/fakeData";
import { useState } from "react";

const SingleProduct: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.productId === productId);



  if (!product) {
    return <div>Product not found</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const image = [
    { original: product.image, thumbnail: product.image },
    ...product.gallery.map((item) => ({
      original: item.image,
      thumbnail: item.image,
    })),
  ];
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-500" />
        ))}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <ImageGallery
            items={image}
            showFullscreenButton={true}
            showPlayButton={false}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <div>
            <h4>Category: {product.category}</h4>
            <span>SKU: {product.SKU}</span>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-red-500 text-3xl font-bold mb-4">
              Tk {product.newPrice}
            </h4>
            <h3 className="text-gray-500 line-through mb-2">
              Tk {product.oldPrice}
            </h3>
          </div>
          {/* <span className="mb-2">
            {product.rating} {""} Reviews
          </span> */}
          <span className="mb-2 flex items-center">
            {renderStars(product.rating)} {""} Reviews
          </span>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="size"
            >
              Select a size:
            </label>
            <div className="flex space-x-2">
              {["32", "34", "36", "38"].map((size) => (
                <button key={size} className="px-3 py-2 border rounded">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <p className="px-4">{quantity}</p>
              <button className="p-2 hover:bg-gray-100" onClick={decrement}>
                <LuMinus />
              </button>

              <button className="p-2 hover:bg-gray-100" onClick={increment}>
                <GoPlus />
              </button>
            </div>
            <button className="bg-blue-500 text-white text-sm py-[5px] px-4 rounded flex items-center hover:bg-blue-600">
              <FaShoppingCart className="mr-2 " />
              ADD TO CART
            </button>
            <button className="text-gray-500 hover:text-red-500">
              <FaHeart />
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <FaBalanceScale />
            </button>
          </div>
          <div className="mt-4 border-t border-b py-2">
            <a
              href="tel:09613-800800"
              className="text-black flex items-center gap-2"
            >
              <IoCallOutline size={20} /> Call For Order: 09613-800800
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineSwap,
} from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CategoryProductCardProps {
  productId: string;
  image: string;
  hoverImage: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  rating: number;
}

const CategoryProductCard: React.FC<CategoryProductCardProps> = ({
  productId,
  image,
  hoverImage,
  title,
  oldPrice,
  newPrice,
  discount,
  rating,
}) => {
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStars === 1 && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </div>
    );
  };

  return (
    <Link to={`/${productId}`}>
      <div className="border p-3 relative group shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
          />
          <img
            src={hoverImage}
            alt={title}
            className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
            {discount}% OFF
          </div>
        </div>
        <h2 className="mt-4 text-sm font-medium mb-2">{title}</h2>
        {renderRating(rating)}
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">Tk {oldPrice}</span>
          <span className="text-red-600 font-semibold">Tk {newPrice}</span>
        </div>
        <div className="absolute top-[50px] right-0 p-4 space-y-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white mb-2 rounded p-1">
            <AiFillHeart size="24" />
          </button>
          <button className="text-white mb-2 rounded p-1">
            <AiOutlineSwap size="24" />
          </button>
          <button className="text-white rounded p-1">
            <AiOutlineShoppingCart size="24" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryProductCard;

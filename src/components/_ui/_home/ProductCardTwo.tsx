import { HotDealProductTwo } from "../../../types";

interface ProductCardProps {
  product: HotDealProductTwo;
}
const ProductCardTwo: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <div className="flex items-center">
        <span className="text-xl font-bold">Tk {product.price}</span>
        <span className="text-gray-500 line-through ml-2">
          Tk {product.originalPrice}
        </span>
      </div>
      <div className="flex items-center">
        {/* Display star ratings */}
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.393 2.463a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.393-2.463a1 1 0 00-1.176 0l-3.393 2.463c-.785.57-1.84-.197-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-500">({product.rating})</span>
      </div>
    </div>
  );
};

export default ProductCardTwo;

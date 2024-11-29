import { HotDealProduct } from "../../../types";

const ProductCard: React.FC<HotDealProduct> = ({
  image,
  name,
  price,
  discount,
  rating,
  reattingcount,
}) => {
  const discountedPrice = price - discount;

  return (
    <div className="border rounded-lg p-4 flex gap-5 items-center">
      <div>
        <img src={image} alt={name} className="w-full mb-2" />

        <div className="text-center text-sm">
          00 Days 00 Hrs 00 Mins 00 Secs
        </div>
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold mb-2 text-left">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">{Array(rating).fill("⭐")}</span>
          <span className="ml-2 text-gray-500">({reattingcount} Reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold mb-2">Tk {discountedPrice}</p>
          <p className="text-sm text-gray-500 line-through mb-2">Tk {price}</p>
        </div>
        <div className="flex items-center gap-5 mb-2">
          <button className="flex items-center bg-transparent text-black hover:bg-primary hover:text-white transition-all duration-300 ease-linear border px-6 py-2 rounded ">
            BUY NOW
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="m480-173.85-30.31-27.38q-97.92-89.46-162-153.15-64.07-63.7-101.15-112.35-37.08-48.65-51.81-88.04Q120-594.15 120-634q0-76.31 51.85-128.15Q223.69-814 300-814q52.77 0 99 27t81 78.54Q514.77-760 561-787q46.23-27 99-27 76.31 0 128.15 51.85Q840-710.31 840-634q0 39.85-14.73 79.23-14.73 39.39-51.81 88.04-37.08 48.65-100.77 112.35Q609-290.69 510.31-201.23L480-173.85Zm0-54.15q96-86.77 158-148.65 62-61.89 98-107.39t50-80.61q14-35.12 14-69.35 0-60-40-100t-100-40q-47.77 0-88.15 27.27-40.39 27.27-72.31 82.11h-39.08q-32.69-55.61-72.69-82.5Q347.77-774 300-774q-59.23 0-99.62 40Q160-694 160-634q0 34.23 14 69.35 14 35.11 50 80.61t98 107q62 61.5 158 149.04Zm0-273Z" />
            </svg>
          </button>

          <button className="hover:text-primary ">
            <svg
              fill="#5f6368"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-between w-full text-sm mb-2">
          <span className="bg-blue-100 px-2 py-1 rounded">
            12 MONTHS 0% EMI
          </span>
          <span className="bg-red-100 px-2 py-1 rounded">FREE DELIVERY</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

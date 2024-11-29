import React, { useState } from "react";
import CustomerReviews from "./customer-reviews";

const ProductDescription: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="p-4 ">
            <p>New Rose Set Bra Panty</p>
            <p>Item code: BR-14</p>
            <p>Materials: Lace + Spandex +Cotton</p>
            <p>Style: Push up lace bra set</p>
            <p>Closer: Back closer</p>
            <p>Origin Country: China</p>
            <p>High quality material, Comfortable to wear</p>
            <p>Color: As given picture</p>
            <p>Available Size: 32,34,36,38</p>
            <p className="text-primary">
              N.B: Product delivery duration may vary due to product
              availability in stock.
            </p>
            <p className="text-primary">
              Disclaimer: The actual color of the physical product may slightly
              vary due to the deviation of lighting sources, photography or your
              device display settings.
            </p>
          </div>
        );
      case "specification":
        return (
          <div className="p-4  ">
            <p>Specification content goes here.</p>
          </div>
        );

      case "customerReviews":
        return (
          <div className="p-4">
            <CustomerReviews />
          </div>
        );
      case "qa":
        return (
          <div className="p-4">
            <p>Question & Answer content goes here.</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="py-3">
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 ${
            activeTab === "description"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "specification"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </button>

        <button
          className={`py-2 px-4 ${
            activeTab === "customerReviews"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("customerReviews")}
        >
          Customer Reviews (0)
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "qa"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("qa")}
        >
          Question & Answer
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductDescription;

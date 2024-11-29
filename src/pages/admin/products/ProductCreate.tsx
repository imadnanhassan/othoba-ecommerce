import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { TrashIcon } from "@radix-ui/react-icons";
import AdminBreadcrumbs from "../../../components/common/AdminBreadcrumbs";

interface LocationItem {
  location: string;
  charge: string;
}

interface VariantOption {
  name: string;
  price: string;
}

interface Variant {
  type: "color" | "size" | "";
  options: VariantOption[];
}


const ProductCreate = () => {
 const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
 const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [description, setDescription] = useState<string>("");
  const [isFreeShipping, setIsFreeShipping] = useState<boolean>(false);
  const [isLocationBased, setIsLocationBased] = useState<boolean>(false);
  const [shippingPrice, setShippingPrice] = useState<string>("00.00");
  const [locationItems, setLocationItems] = useState<LocationItem[]>([
    { location: "", charge: "150.00" },
  ]);

  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");




const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files) {
    const newFiles = Array.from(files);
    setUploadedFiles(newFiles);

    // Generate preview URLs
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(newPreviews);
  }
};

const handleRemoveFile = (index: number) => {
  const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
  const updatedPreviews = previewUrls.filter((_, i) => i !== index);

  setUploadedFiles(updatedFiles);
  setPreviewUrls(updatedPreviews);
};








  // variant
  const [selectedVariant, setSelectedVariant] = useState<Variant>({
    type: "",
    options: [],
  });

  const handleVariantTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const variantType = event.target.value as Variant["type"];
    setSelectedVariant({
      type: variantType,
      options: [],
    });
  };

  const handleAddOption = () => {
    setSelectedVariant((prevVariant) => ({
      ...prevVariant,
      options: [...prevVariant.options, { name: "", price: "" }],
    }));
  };

  const handleOptionChange = (
    index: number,
    field: keyof VariantOption,
    value: string
  ) => {
    const updatedOptions = [...selectedVariant.options];
    updatedOptions[index] = { ...updatedOptions[index], [field]: value };
    setSelectedVariant((prevVariant) => ({
      ...prevVariant,
      options: updatedOptions,
    }));
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = selectedVariant.options.filter(
      (_, i) => i !== index
    );
    setSelectedVariant((prevVariant) => ({
      ...prevVariant,
      options: updatedOptions,
    }));
  };

  const handleAddLocation = () => {
    setLocationItems([...locationItems, { location: "", charge: "150.00" }]);
  };

  const handleRemoveLocation = (index: number) => {
    const updatedItems = locationItems.filter((_, i) => i !== index);
    setLocationItems(updatedItems);
  };

  const handleLocationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedItems = [...locationItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setLocationItems(updatedItems);
  };

  const handleAddKeyword = () => {
    if (inputValue.trim() !== "" && !keywords.includes(inputValue.trim())) {
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    const updatedKeywords = keywords.filter((_, i) => i !== index);
    setKeywords(updatedKeywords);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      ["link"],
      ["image"],
      ["blockquote"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
    ],
  };

  return (
    <div className="p-6">
      <AdminBreadcrumbs
        pageTitle="Products List"
        iconTitle="<></>"
        parentTitle="Products"
        childTitle="Products List"
      />

      <div className=" p-6 bg-white dark:bg-[#1A1B1E] rounded transition-colors duration-300">
        <h1 className="text-2xl font-bold mb-4">Product Create</h1>

        {/* Summary Section */}
        <section id="summary" className="mb-8 mt-10">
          <div className="flex ">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
            </div>

            <div className="w-[60%]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-medium" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Product title"
                    className="mt-1 w-full  px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
                <div className="pr-7">
                  <label className="text-sm font-medium" htmlFor="sku">
                    SKU
                  </label>
                  <input
                    type="text"
                    id="sku"
                    placeholder="Product SKU"
                    className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="category">
                    Category
                  </label>
                  <select
                    id="category"
                    className="mt-1 w-full px-3  py-2 border-[1px] border-uxBgMenu  rounded-md text-sm bg-white dark:bg-transparent dark:border-gray-700"
                  >
                    <option className="bg-white dark:bg-[#141414]" value="">
                      Select category
                    </option>
                    <option
                      className="bg-white dark:bg-[#141414]"
                      value="electronics"
                    >
                      Electronics
                    </option>
                    <option
                      className="bg-white dark:bg-[#141414]"
                      value="apparel"
                    >
                      Apparel
                    </option>
                  </select>
                </div>
                <div className="pr-7">
                  <label className="text-sm font-medium" htmlFor="category">
                    Brands
                  </label>
                  <select
                    id="brand"
                    className="mt-1 w-full px-3  py-2 border-[1px] border-uxBgMenu  rounded-md text-sm bg-white dark:bg-transparent dark:border-gray-700"
                  >
                    <option className="bg-white dark:bg-[#141414]" value="">
                      Select Brand
                    </option>
                    <option
                      className="bg-white dark:bg-[#141414]"
                      value="electronics"
                    >
                      Apex
                    </option>
                    <option
                      className="bg-white dark:bg-[#141414]"
                      value="apparel"
                    >
                      Bata
                    </option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="text-sm font-medium" htmlFor="description">
                    Description
                  </label>
                  <ReactQuill
                    id="description"
                    value={description}
                    onChange={setDescription}
                    placeholder="Product description"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    modules={modules}
                    theme="snow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Upload Section */}
        <section id="imagesandgallery" className="mb-8 mt-10">
          <div className="flex">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">
                Upload New Product Images
              </h2>
            </div>
            <div className="w-[60%]">
              <div className=" bg-gray-200 dark:bg-[#1A1B1E] ">
                <div className="p-4 border border-dashed rounded-xl bg-gray-50 dark:bg-[#1A1B1E] ">
                  <div
                    className="cursor-pointer p-4 flex justify-center text-center"
                    role="button"
                  >
                    <label className="flex flex-col items-center">
                      <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
                        <svg
                          className="shrink-0 size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                      </span>
                      <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Drag & drop files here or{" "}
                        <span className="font-medium text-blue-600 underline">
                          browse
                        </span>
                      </span>
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>

                  {/* Preview Section */}
                  <div className="mt-4">
                    {previewUrls.length > 0 && (
                      <div className="space-y-4">
                        {previewUrls.map((url, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between border p-2 rounded-md bg-gray-100 dark:bg-gray-700"
                          >
                            <div className="flex items-center space-x-4">
                              <img
                                src={url}
                                alt={`Preview ${index}`}
                                className="h-12 w-12 object-cover rounded-md"
                              />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {uploadedFiles[index].name}
                              </span>
                            </div>
                            <button
                              onClick={() => handleRemoveFile(index)}
                              className="focus:outline-none transition-all duration-300 p-3 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-surface"
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricingandinventory" className="mb-8">
          <div className="flex">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            </div>
            <div className="w-[60%]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-medium" htmlFor="title">
                    Price
                  </label>
                  <input
                    type="number"
                    id="title"
                    placeholder="Product price"
                    className="mt-1 w-full  px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
                <div className="pr-7">
                  <label className="text-sm font-medium" htmlFor="sku">
                    Sale Price
                  </label>
                  <input
                    type="number"
                    id="sku"
                    placeholder="Sale Price"
                    className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="productidentifiersandcustomfields" className="mb-8">
          <div className="flex">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">Inventory Tracking</h2>
            </div>
            <div className="w-[60%]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-medium" htmlFor="title">
                    Current Stock Level
                  </label>
                  <input
                    type="number"
                    id="title"
                    placeholder="150"
                    className="mt-1 w-full  px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
                <div className="pr-7">
                  <label className="text-sm font-medium" htmlFor="sku">
                    Low Stock Level
                  </label>
                  <input
                    type="number"
                    id="sku"
                    placeholder="20"
                    className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Section */}
        <section id="productidentifiersandcustomfields" className="mb-8">
          <div className="flex">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">Shipping</h2>
            </div>
            <div className="w-[60%]">
              <div className="">
                {/* Free Shipping Toggle */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="free-shipping"
                    checked={isFreeShipping}
                    onChange={() => setIsFreeShipping(!isFreeShipping)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="free-shipping"
                    className="ml-2 text-gray-700 dark:text-gray-300"
                  >
                    Free Shipping
                  </label>
                </div>

                {/* Shipping Price Input */}
                {!isFreeShipping && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Shipping Price
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400">
                        $
                      </span>
                      <input
                        type="text"
                        value={shippingPrice}
                        onChange={(e) => setShippingPrice(e.target.value)}
                        className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Location Based Shipping Toggle */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="location-based"
                    checked={isLocationBased}
                    onChange={() => setIsLocationBased(!isLocationBased)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-transparent dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="location-based"
                    className="ml-2 text-gray-700 dark:text-gray-300"
                  >
                    Location Based Shipping
                  </label>
                </div>

                {/* Location-based Shipping Details */}
                {isLocationBased && (
                  <div className="space-y-4">
                    {locationItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 gap-8"
                      >
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Location Name
                          </label>
                          <input
                            type="text"
                            value={item.location}
                            onChange={(e) =>
                              handleLocationChange(
                                index,
                                "location",
                                e.target.value
                              )
                            }
                            className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                            placeholder="Location name"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Shipping Charge
                          </label>
                          <input
                            type="text"
                            value={item.charge}
                            onChange={(e) =>
                              handleLocationChange(
                                index,
                                "charge",
                                e.target.value
                              )
                            }
                            className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                          />
                        </div>

                        <button
                          onClick={() => handleRemoveLocation(index)}
                          className="focus:outline-none transition-all mt-6 duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-surface"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={handleAddLocation}
                      className="mt-4 flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
                    >
                      + Add Item
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section id="variantoptions">
          <div className="flex ">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">
                Search Engine Optimization
              </h2>
            </div>

            <div className="w-[60%]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-medium" htmlFor="title">
                    Page Title
                  </label>
                  <input
                    type="text"
                    id="page_title"
                    placeholder="Product title"
                    className="mt-1 w-full  px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>

                <div className="pr-7">
                  <label className="text-sm font-medium" htmlFor="sku">
                    Product URL
                  </label>
                  <input
                    type="text"
                    id="sku"
                    placeholder="https://"
                    className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="keywords">
                    Meta Keywords
                  </label>
                  <div className="flex items-center space-x-2 mt-1">
                    <input
                      type="text"
                      id="keywords"
                      placeholder="meta keywords"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                    />
                    <button
                      onClick={handleAddKeyword}
                      className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>

                  {/* Display Keywords */}
                  <div className="flex flex-wrap mt-4">
                    {keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded px-2 py-1 mr-2 mb-2"
                      >
                        {keyword}
                        <button
                          onClick={() => handleRemoveKeyword(index)}
                          className="ml-2 text-red-500 dark:text-red-400"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pr-7">
                  <label className="text-sm font-medium" htmlFor="description">
                    Meta Description
                  </label>
                  <input
                    type="text"
                    id="meta_description"
                    placeholder="meta description"
                    className="mt-1 w-full px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variant Section */}
        <section id="seo" className="mb-8 mt-10">
          <div className="flex ">
            <div className="w-[40%]">
              <h2 className="text-xl font-semibold mb-4">Variant Option</h2>
            </div>

            <div className="w-[60%]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-sm font-medium" htmlFor="variant">
                    Variant Name
                  </label>
                  <select
                    id="variant"
                    value={selectedVariant.type}
                    onChange={handleVariantTypeChange}
                    className="mt-1 w-full px-3 py-2 border-[1px] border-uxBgMenu rounded-md text-sm bg-white dark:bg-transparent dark:border-gray-700"
                  >
                    <option className="bg-white dark:bg-[#141414]" value="">
                      Select variant
                    </option>
                    <option
                      className="bg-white dark:bg-[#141414]"
                      value="color"
                    >
                      Color
                    </option>
                    <option className="bg-white dark:bg-[#141414]" value="size">
                      Size
                    </option>
                  </select>

                  {/* Dynamic Options for Selected Variant */}
                  {selectedVariant.type && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Add{" "}
                        {selectedVariant.type === "color" ? "Colors" : "Sizes"}{" "}
                        with Prices
                      </h3>
                      {selectedVariant.options.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center mb-4 space-x-4"
                        >
                          <input
                            type="text"
                            placeholder={
                              selectedVariant.type === "color"
                                ? "Color name"
                                : "Size name"
                            }
                            value={option.name}
                            onChange={(e) =>
                              handleOptionChange(index, "name", e.target.value)
                            }
                            className="w-1/3 px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Price"
                            value={option.price}
                            onChange={(e) =>
                              handleOptionChange(index, "price", e.target.value)
                            }
                            className="w-1/3 px-3 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                          />

                          <button
                            onClick={() => handleRemoveOption(index)}
                            className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-surface"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      ))}

                      <button
                        onClick={handleAddOption}
                        className="mt-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
                      >
                        + Add{" "}
                        {selectedVariant.type === "color" ? "Color" : "Size"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCreate;

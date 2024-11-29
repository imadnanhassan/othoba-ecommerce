import React, { useState } from "react";
import AdminBreadcrumbs from "../../../components/common/AdminBreadcrumbs";
import { TrashIcon } from "@radix-ui/react-icons";

const ProductCategoryCreate = () => {
  const [categoryIcon, setCategoryIcon] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [categoryBanner, setCategoryBanner] = useState<File[]>([]);
  const [bannerPreviews, setBannerPreviews] = useState<string[]>([]);
  const handleCategoryIconFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setCategoryIcon(newFiles);

      // Generate preview URLs
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(newPreviews);
    }
  };

  const handleCategoryIconRemoveFile = (index: number) => {
    const updatedFiles = categoryIcon.filter((_, i) => i !== index);
    const updatedPreviews = previewUrls.filter((_, i) => i !== index);

    setCategoryIcon(updatedFiles);
    setPreviewUrls(updatedPreviews);
  };

  const handleCategoryBannerFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(event.target.files || []);
    setCategoryBanner(files);
    setBannerPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleCategoryBannerRemoveFile = (index: number) => {
    setCategoryBanner((prev) => prev.filter((_, i) => i !== index));
    setBannerPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section>
      <AdminBreadcrumbs
        pageTitle="Products Category"
        iconTitle="<></>"
        parentTitle="Products"
        childTitle="Products Category"
      />
      <div className="px-6 rounded">
        <div className="bg-white dark:bg-[#1A1B1E] rounded">
          {/* Summary Section */}
          <section id="summary" className="mb-8 mt-10 p-6">
            <div className="w-[80%] mx-auto">
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

                <div className=" bg-gray-200 dark:bg-[#1A1B1E] ">
                  <label className="text-sm font-medium" htmlFor="category">
                    Category Icon
                  </label>
                  <div className="p-4 mt-2 border border-dashed rounded-xl bg-gray-50 dark:bg-[#1A1B1E] ">
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
                          onChange={handleCategoryIconFile}
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
                                  {categoryIcon[index].name}
                                </span>
                              </div>
                              <button
                                onClick={() =>
                                  handleCategoryIconRemoveFile(index)
                                }
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
                <div className="bg-gray-200 dark:bg-[#1A1B1E]">
                  <label
                    className="text-sm font-medium"
                    htmlFor="categoryBanner"
                  >
                    Category Banner
                  </label>
                  <div className="p-4 mt-2 border border-dashed rounded-xl bg-gray-50 dark:bg-[#1A1B1E]">
                    <div
                      className="cursor-pointer p-4 flex justify-center text-center"
                      role="button"
                    >
                      <label className="flex flex-col items-center">
                        <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 size-6"
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
                          onChange={handleCategoryBannerFile}
                        />
                      </label>
                    </div>

                    {/* Preview Section */}
                    <div className="mt-4">
                      {bannerPreviews.length > 0 && (
                        <div className="space-y-4">
                          {bannerPreviews.map((url, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between border p-2 rounded-md bg-gray-100 dark:bg-gray-700"
                            >
                              <div className="flex items-center space-x-4">
                                <img
                                  src={url}
                                  alt={`Banner Preview ${index}`}
                                  className="h-12 w-12 object-cover rounded-md"
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {categoryBanner[index]?.name}
                                </span>
                              </div>
                              <button
                                onClick={() =>
                                  handleCategoryBannerRemoveFile(index)
                                }
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
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryCreate;

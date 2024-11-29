import React from 'react';
import AdminBreadcrumbs from '../../../components/common/AdminBreadcrumbs';

const ProductCategoryCreate = () => {
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
            Product Category
          </div>
        </div>
      </section>
    );
};

export default ProductCategoryCreate;
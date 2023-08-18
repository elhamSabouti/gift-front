import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import API from "../../../Api/useApi";
const Products = () => {
    // const [data,setData]=useState({"data":[{"category_id":1,"title":"\u0645\u0648\u0632\u06cc\u06a9","title_en":"stream Music","products":[{"product_id":1,"period_title":"\u0633\u0647 \u0645\u0627\u0647\u0647","price":"200","brand":{"brand_id":1,"title":"\u0627\u0633\u067e\u0627\u062a\u06cc\u0641\u0627\u06cc","title_en":"spotify","logo":"https:\/\/nimaheidari.storage.iran.liara.space\/images\/spotify-logo.png","color":"#1ED760"}},{"product_id":2,"period_title":"\u0686\u0647\u0627\u0631 \u0645\u0627\u0647\u0647","price":"100","brand":{"brand_id":2,"title":"\u0633\u0648\u0648\u0646\u062f\u06a9\u0644\u0648\u062f","title_en":"soundcloud","logo":"https:\/\/nimaheidari.storage.iran.liara.space\/images\/soundcloud-logo.png","color":"#1ED760"}},{"product_id":2,"period_title":"\u0686\u0647\u0627\u0631 \u0645\u0627\u0647\u0647","price":"100","brand":{"brand_id":2,"title":"\u0633\u0648\u0648\u0646\u062f\u06a9\u0644\u0648\u062f","title_en":"soundcloud","logo":"https:\/\/nimaheidari.storage.iran.liara.space\/images\/soundcloud-logo.png","color":"#1ED760"}},{"product_id":2,"period_title":"\u0686\u0647\u0627\u0631 \u0645\u0627\u0647\u0647","price":"100","brand":{"brand_id":2,"title":"\u0633\u0648\u0648\u0646\u062f\u06a9\u0644\u0648\u062f","title_en":"soundcloud","logo":"https:\/\/nimaheidari.storage.iran.liara.space\/images\/soundcloud-logo.png","color":"#1ED760"}},{"product_id":2,"period_title":"\u0686\u0647\u0627\u0631 \u0645\u0627\u0647\u0647","price":"100","brand":{"brand_id":2,"title":"\u0633\u0648\u0648\u0646\u062f\u06a9\u0644\u0648\u062f","title_en":"soundcloud","logo":"https:\/\/nimaheidari.storage.iran.liara.space\/images\/soundcloud-logo.png","color":"#1ED760"}},{"product_id":3,"period_title":"6 \u0645\u0627\u0647\u0647","price":"320","brand":{"brand_id":1,"title":"\u0627\u0633\u067e\u0627\u062a\u06cc\u0641\u0627\u06cc","title_en":"spotify","logo":"https:\/\/nimaheidari.storage.iran.liara.space\/images\/spotify-logo.png","color":"#1ED760"}}]}]});
      const [products,setProducts]=useState(null);
      const  getProducts =async () => {
          try {
              const product= await API.get("product");
              setProducts(product.data.data)
          }catch (e) {
          }
      }
      useEffect(()=>{
          getProducts();
      },[]);

    return (
        <div className="w-auto h-auto flex gap-x-[23px] gap-y-[21px] flex-wrap mt-[27px] justify-center  ">
            {products && products.map((value )=>(
                <ProductCard value={value}/>
            ))}
        </div>
    );
};

export default Products;
import React,{useState,useEffect} from 'react';
import Dots from "../Home/Dots";
import Navigation from "./Navigation/Navigation";
import ProductCard from "../Home/Products/ProductCard";
import API from "../../Api/useApi";

const ProductsBox = () => {
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
        <div className="h-[538px]  w-full flex items-end ">
            <div className="w-[1061px] h-full  flex flex-col items-center justify-end ">
                <p className="text-[#01C38E] ml-[694px]  text-[28px] w-[130px] h-[40px] text-center border-r-2 border-r-[#01C38E]">محصولات</p>
                {/*ml is temporary*/}
                <div className="w-[822px] h-auto mt-[20px]  flex flex-wrap justify-end items-start gap-x-[24px] gap-y-[14px] ">
                    {/*height is temporary*/}
                    {products && products.map((value )=>(
                        <ProductCard value={value}/>
                    ))}
                </div>
                   <Dots/>
            </div>
           <Navigation/>
        </div>
    );
};

export default ProductsBox;
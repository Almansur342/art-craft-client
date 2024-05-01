import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";

const CategoryCards = () => {
  const [category, setCategory]= useState([]);
 useEffect(()=>{
  fetch('https://art-craft-server-orpin.vercel.app/categoryCraftItem')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    setCategory(data);
  })
 },[])

  return (
    <div className='py-8 lg:py-28 px-1 lg:px-12 bg-white'>
    <h1 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold text-[#34373f]'>Explore This Section</h1>
    <p className='text-base lg:text-xl font-medium text-center mb-6 lg:mb-16 mt-2'>Explore our Craft Items section for all  your DIY needs.</p>
    {/* <p>{category.length}</p> */}
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
     {
      category.map(product =><Category
         key={product._id}
         product = {product}
         ></Category>)
     }
   </div>
   </div>
  );
};

export default CategoryCards;
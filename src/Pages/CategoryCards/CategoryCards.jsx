import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";

const CategoryCards = () => {
  const [category, setCategory]= useState([]);
 useEffect(()=>{
  fetch('http://localhost:5000/categoryCraftItem')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    setCategory(data);
  })
 },[])

  return (
    <div className='py-28 px-12 bg-white'>
    <h1 className='text-4xl text-center font-semibold text-[#34373f]'>Explore This Section</h1>
    <p className='text-xl font-medium text-center mb-16 mt-2'>Explore our Craft Items section for all  your DIY needs.</p>
    {/* <p>{category.length}</p> */}
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
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
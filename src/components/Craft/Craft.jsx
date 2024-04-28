import { useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import AOS from 'aos';

import { Link } from "react-router-dom";
const Craft = ({ item }) => {
  useEffect(()=>{
    AOS.init();
  },[])
  const { image, item_name, subcategory_name, price, rating, short_description,_id } = item || {}
  return (
    <div data-aos="fade-up" data-aos-duration = '1000' className="card bg-[#f7f4ef] p-6 shadow-xl">
      <figure><img className="h-56 w-full rounded-lg object-cover" src={image} alt="Shoes" /></figure>
      <div className="mt-2">
        <h2 className="text-xl  text-[#34373f] font-semibold my-2">{item_name}</h2>
        <p className="text-lg font-medium"># {subcategory_name}</p>
        <hr className='my-4' />
        <div className='flex justify-between mb-4'>
          <div className="flex gap-1 items-center">
            <IoIosStarOutline />
            {rating}
          </div>
          <div>
            {price}
          </div>
        </div>
        <p className="mb-4">{short_description}</p>
        <div className="card-actions">
          <Link to={`/details/${_id}`} className="px-5 py-2 ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Craft;
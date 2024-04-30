import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import AOS from 'aos';

const RelatedCards = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  const { subcategory_name } = useParams();
  // console.log(subcategory_name)
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/relatedProduct/${subcategory_name}`)
    .then(res => res.json())
    .then(data=>{
      // console.log(data);
      setMatched(data);
    })
  },[subcategory_name])

  console.log(matched);
  
  // const { image, item_name, price, rating, short_description, customization, processing_time, stock_status,_id } = matched || {}
  // console.log(image)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-16">
      {
        matched.map(p=> <div key={p._id} data-aos="fade-up" data-aos-duration = '1000' className="card bg-[#f7f4ef] p-6 shadow-xl">
        <figure><img className="h-56 w-full rounded-lg object-cover" src={p.image} alt="Shoes" /></figure>
        <div className="mt-2">
          <h2 className="text-xl  text-[#34373f] font-semibold my-2">{p.item_name}</h2>
          <p className="text-lg font-medium"># {subcategory_name}</p>
          <hr className='my-4' />
          <div className='flex justify-between mb-4'>
            <div className="flex gap-1 items-center">
              <IoIosStarOutline />
              {p.rating}
            </div>
            <div>
              {p.price}
            </div>
            <div>
              {p.processing_time}
            </div>
          </div>
          <p className="mb-4">{p.short_description}</p>
          <div className="card-actions">
            <Link to={`/item/${p._id}`} className="px-5 py-2 ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded">View Details</Link>
          </div>
        </div>
      </div>)
      }
    </div>
    
  );
};

export default RelatedCards;
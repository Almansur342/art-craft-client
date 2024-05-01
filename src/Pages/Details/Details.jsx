import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import AOS from 'aos';
import { data } from "autoprefixer";


const Details = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const { id } = useParams();
  // console.log(id)
  // const craftDetails = useLoaderData();
  const [matched, setMatched] = useState({});

  // useEffect(()=>{
  //   if(craftDetails){
  //     const singleDetails = craftDetails.find(item => item._id == id);
  //     setMatched(singleDetails);
  //   }
  // },[craftDetails,id])
  useEffect(() => {
    fetch(`https://art-craft-server-orpin.vercel.app/singleItem/${id}`)
    .then(res => res.json())
    .then(data=>{
      // console.log(data);
      setMatched(data);
    })
  },[id])

  // console.log(matched);
  const { image, item_name, subcategory_name, price, rating, short_description, customization, processing_time, stock_status } = matched || {}

  return (
    <section className=" mb-16 my-10 rounded-lg max-w-6xl mx-auto">
      <div className="container gap-8 flex flex-col mx-auto md:flex-row  lg:flex-row">
        <div className="rounded-lg bg-[#f7f4ef] flex items-center justify-center p-10 lg:p-20 mt-8 lg:mt-0 :h-96">
          <img data-aos="zoom-in" data-aos-duration='1000' src={image} alt="" className="object-cover h-72 w-64" />
        </div>
        <div className="flex flex-col  rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-[#131313] font-bold mb-3">{item_name}</h1>
          <p className="text-[#131313CC] text-xl"># {subcategory_name}</p>
          <hr className="my-4" />
          <h1 className="text-base font-bold text-[#131313B3]"><span className="text-lg text-[#131313]"> description: </span>{short_description}</h1>
          <hr className="my-4" />
          <div className="flex items-center gap-10 mb-6">
            <div>
              <h1 className="text-[#131313B3] text-base">Processing time: {processing_time}</h1>
              <h1 className="text-[#131313B3] text-base">Customization: {customization}</h1>
              <h1 className="text-[#131313B3] text-base">Price: {price}</h1>
              <h1 className="text-[#131313B3] text-base">Stock status: {stock_status}</h1>
              <div className="">
                <h1 className="text-[#131313B3] text-base flex gap-1 items-center">Rating:<IoIosStarOutline /> {rating}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
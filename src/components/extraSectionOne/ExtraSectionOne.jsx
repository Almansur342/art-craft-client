import { useEffect } from 'react';
import img1 from '../../assets/01.jpg'
import img2 from '../../assets/02.jpg'
import img3 from '../../assets/04.jpg'
import img4 from '../../assets/05.jpg'
import AOS from 'aos';
const ExtraSectionOne = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className=" py-24 px-12 rounded  bg-[#f8f5ef]">
      <h1 className="text-4xl text-center font-semibold mb-16 text-[#34373f]">Designed by artists, made <br /> by us, just for you.</h1>
      <div className='flex items-center justify-between '>
      <div>
        <img data-aos="zoom-in" data-aos-duration = '2000' className='h-[222px] w-[222px] rounded-full object-cover' src={img1} alt="" />
        <h1 className='text-2xl font-medium ml-7 mt-2'>Basket Storage</h1>
      </div>
      <div className=''>
        <img data-aos="zoom-in" data-aos-duration = '2000' className='h-[222px] w-[222px] rounded-full object-cover' src={img2} alt="" />
        <h1 className='text-2xl mt-2 font-medium ml-7'>Home Decor</h1>
      </div>
      <div className=''>
        <img data-aos="zoom-in" data-aos-duration = '2000' className='h-[222px] w-[222px] rounded-full object-cover' src={img3} alt="" />
        <h1 className='text-2xl mt-2 font-medium ml-7'>Toys Craft</h1>
      </div>
      <div className=''>
        <img data-aos="zoom-in" data-aos-duration = '2000' className='h-[222px] w-[222px] rounded-full object-cover' src={img4} alt="" />
        <h1 className='text-2xl mt-2 font-medium ml-12'>Home Light</h1>
      </div>
      </div>
     
    </div>
  );
};

export default ExtraSectionOne;
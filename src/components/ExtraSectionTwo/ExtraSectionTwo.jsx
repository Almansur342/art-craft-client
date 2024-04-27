import img1 from '../../assets/logo01.png'
import img2 from '../../assets/logo02.png'
import img3 from '../../assets/logo04.png'
import img4 from '../../assets/03.png'
import { useEffect } from 'react';
import AOS from 'aos';

const ExtraSectionTwo = () => {

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="py-24 px-12 ">
      <h1 className='text-4xl text-center font-semibold mb-16 text-[#34373f]'>Our Services</h1>
      <div className='flex justify-between items-center gap-4'>
      <div>
        <img data-aos="flip-left" src={img1} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Free Shipping</h1>
         <p className="text-base text[#34373f]">Free Shipping for orders over £130</p>
      </div>
      <div>
        <img data-aos="flip-right" src={img2} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Free Shipping</h1>
         <p className="text-base text[#34373f]">Free Shipping for orders over £130</p>
      </div>
      <div>
        <img data-aos="flip-left" src={img3} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Free Shipping</h1>
         <p className="text-base text[#34373f]">Free Shipping for orders over £130</p>
      </div>
      <div>
        <img data-aos="flip-right" src={img4} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Free Shipping</h1>
         <p className="text-base text[#34373f]">Free Shipping for orders over £130</p>
      </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
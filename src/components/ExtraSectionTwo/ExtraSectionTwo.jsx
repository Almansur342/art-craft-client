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
      <h1 className='text-4xl text-center font-semibold mb-14 text-[#34373f]'>Our Services</h1>
      <div className='flex justify-between items-center gap-4'>
      <div>
        <img data-aos="flip-left" src={img1} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Free Shipping</h1>
         <p className="text-base text[#34373f]">Free Shipping for orders over £130</p>
      </div>
      <div>
        <img data-aos="flip-right" src={img2} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Money Guarantee</h1>
         <p className="text-base text[#34373f]">Within 30 days for an exchange.</p>
      </div>
      <div>
        <img data-aos="flip-left" src={img4} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">24/7 online support</h1>
         <p className="text-base text[#34373f]">24 hours a day, 7 days a week</p>
      </div>
      <div>
        <img data-aos="flip-right" src={img3} alt="" />
        <h1 className="text-2xl font-medium text-[#34373f] my-1">Flexible Payment</h1>
         <p className="text-base text[#34373f]">Pay with multiple credit cards</p>
      </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
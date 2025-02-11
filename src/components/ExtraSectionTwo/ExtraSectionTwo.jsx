import img1 from '../../assets/logo01.png'
import img2 from '../../assets/logo02.png'
import img3 from '../../assets/logo04.png'
import img4 from '../../assets/03.png'
import { useEffect } from 'react';
import AOS from 'aos';

const ExtraSectionTwo = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="py-8 lg:pb-32 px-1 lg:px-12 ">
      <h1 className='text-3xl lg:text-4xl text-center font-semibold text-[#34373f]'>Our Services</h1>
      <p className='text-base lg:text-xl font-medium text-center mb-6 lg:mb-14 mt-2'>
        Explore our diverse range of services designed to meet your needs. From consultations <br /> to solutions, we're  here to support you every step of the way.</p>
      <div className='flex flex-col gap-6 lg:flex-row justify-between items-center'>
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
import img1 from '../../assets/pexels-cottonbro-3972105.jpg'
import img2 from '../../assets/pexels-chavdar-lungov-2332494-3996247.jpg'
import img3 from '../../assets/pexels-yankrukov-6611316.jpg'
import img4 from '../../assets/pexels-yankrukov-6611420.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..



const Banner = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="carousel w-full rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <img data-aos="zoom-in" data-aos-duration = '1000' src={img4} className="w-full h-[470px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Whimsical Artistry Collection</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Dive into a world of enchantment with our collection of whimsical art and craft creations, where imagination knows no bounds and every piece tells a magical story.</p>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img data-aos="zoom-in" data-aos-duration = '1000' src={img3} className="w-full h-[450px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '6000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Natural Inspirations Showcase</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Explore the beauty of the natural world translated into stunning works of art, celebrating the vibrant hues and intricate textures found in the great outdoors, bringing a touch of nature's splendor into your home.</p>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img data-aos="zoom-in" data-aos-duration = '1000' src={img2} className="w-full h-[450px] brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Vintage Craft Creations Corne</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Step back in time with our selection of vintage-inspired crafts, featuring timeless designs and nostalgic motifs that evoke a sense of bygone eras, adding a touch of classic elegance to any space.</p>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img data-aos="zoom-in" data-aos-duration = '1000' src={img1} className=" h-[450px] w-full object-center brightness-75" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className='w-2/5 absolute transform -translate-y-1/2 left-[100px] top-1/2'>
      <h1 data-aos="fade-right" data-aos-duration = '1000' className='text-white text-lg md:text-2xl lg:text-3xl font-bold '>Modern Artistic Expressions Gallery</h1>
      <p data-aos="fade-right" data-aos-duration = '1200' className='text-white text-xs md:text-base lg:text-lg mt-3 brightness-200'>Discover contemporary art and craft pieces that push the boundaries of creativity, blending innovation with artistic expression to inspire and captivate, showcasing the cutting-edge of modern design and craftsmanship.</p>
    </div>
  </div>
</div>
  );
};

export default Banner;
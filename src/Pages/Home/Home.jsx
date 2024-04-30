
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import ExtraSectionTwo from '../../components/ExtraSectionTwo/ExtraSectionTwo';
import ExtraSectionOne from '../../components/extraSectionOne/ExtraSectionOne';
import Craft from '../../components/Craft/Craft';
import CategoryCards from '../CategoryCards/CategoryCards';
// import CategoryCards from '../CategoryCards/CategoryCards';

const Home = () => {
  const craft = useLoaderData();
  return (
    <div>
     <Banner></Banner>
     <div className='py-10 lg:py-28 px-1 lg:px-12 bg-white'>
      <h1 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold text-[#34373f]'>Unleash Your Creativity!</h1>
      <p className='text-base lg:text-xl font-medium text-center mb-6 lg:mb-16 mt-2'>Explore our Craft Items section for all  your DIY needs. From fabrics to tools, find <br /> everything to fuel your creativity.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7'>
       {
        craft.map(item =><Craft
           key={item._id}
           item = {item}
           ></Craft>)
       }
     </div>
     </div>
     <ExtraSectionOne></ExtraSectionOne>
     <CategoryCards></CategoryCards>
     <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
};

export default Home;
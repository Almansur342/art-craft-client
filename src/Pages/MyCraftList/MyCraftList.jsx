import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import MyCard from "../../components/MyCard/MyCard";

const MyCraftList = () => {
  const { user } = useContext(AuthContext) || {};
  const [items,setItems] = useState([]);
  const email = user?.email;
  useEffect(()=>{
    fetch(`http://localhost:5000/myCraftProduct/${email}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setItems(data);
    })
  },[email])
  return (
    <div className="py-10 lg:py-28 px-2 lg:px-12 bg-white">
      <h1 className=' text-2xl lg:text-4xl text-center font-semibold text-[#34373f]'>Unleash Your Creativity!</h1>
      <p className='text-base lg:text-xl font-medium text-center mb-16 mt-2'>Explore our Craft Items section for all  your DIY needs. From fabrics to tools, find <br /> everything to fuel your creativity.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {
        items.map(item=><MyCard
           key={item._id}
           item={item}
           setItems={setItems}
           items={items}
           ></MyCard>)
      }
    </div>
    </div>
  );
};

export default MyCraftList;
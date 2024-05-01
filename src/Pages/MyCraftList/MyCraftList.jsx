import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import MyCard from "../../components/MyCard/MyCard";

const MyCraftList = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);
  const email = user?.email;
  const handleYes = () =>{
    const matched = items.filter(item => item.customization.toLowerCase() === "yes");
    console.log(matched);
    setItems(matched);
  }
  const handleNo = () =>{
    const matched = items.filter(item => item.customization.toLowerCase() === "no");
    console.log(matched);
    setItems(matched);
  }
  useEffect(() => {
    fetch(`https://art-craft-server-orpin.vercel.app/myCraftProduct/${email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setItems(data);
      })
  }, [email])
  return (
    <div className="py-10 lg:py-16 px-2 lg:px-12 bg-white">
      <h1 className=' text-2xl lg:text-4xl text-center font-semibold text-[#34373f]'>Unleash Your Creativity!</h1>
      <p className='text-base lg:text-xl font-medium text-center mb-10 mt-2'>Explore our Craft Items section for all  your DIY needs. From fabrics to tools, find <br /> everything to fuel your creativity.</p>
      <div className="flex justify-center mb-8">
        <ul className="menu w-40 rounded-box">
          <li>
            <details >
              <summary className="bg-[#b18b5e] text-white hover:bg-[#23BE0A] text-lg font-semibold">Filter by</summary>
              <ul className="text-sm w-40 space-y-0 border-2 p-0">
                <li onClick={handleYes} className="hover:bg-[#b18b5e] hover:rounded"><a>Yes</a></li>
                <li onClick={handleNo} className="hover:bg-[#b18b5e] hover:rounded"><a>No</a></li>
              </ul>
            </details>
          </li>
        </ul>
        {/* <button className="btn">Sort By</button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          items.map(item => <MyCard
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

import { IoIosStarOutline } from "react-icons/io";
import AOS from 'aos';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
const MyCard = ({ items,item,setItems }) => {
  
  // console.log(deleteData);
  // console.log(item);
  useEffect(() => {
    AOS.init();
  }, [])
  const { image, item_name, subcategory_name, price, rating, short_description,_id,stock_status,customization} = item || {};

  const handleDelete = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-craft-server-orpin.vercel.app/delete/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remaining = items.filter(p => p._id !== id)
        setItems(remaining);
      }
    }
    )
      }
    });

    
  }

  return (
    <div data-aos="fade-up" data-aos-duration = '1000' className="card bg-[#f7f4ef] p-6 shadow-xl">
      <figure><img className="h-56 w-full rounded-lg object-cover" src={image} alt="Shoes" /></figure>
      <div className="mt-2">
        <h2 className="text-xl  text-[#34373f] font-semibold my-2">{item_name}</h2>
        <p className="text-lg font-medium"># {subcategory_name}</p>
        <hr className='my-4' />
        <div className='flex justify-between mb-4'>
          <div className="flex gap-1 items-center">
            <IoIosStarOutline />
            {rating}
          </div>
          <div>
           ${price}
          </div>
        </div>
        <div  className='flex justify-between mb-4'>
          <div>{stock_status}</div>
          <div>{customization}</div>
        </div>
        <p className="mb-4">{short_description}</p>
        <div className="card-actions">
          <Link to={`/update/${_id}`} className=" px-2 lg:px-5 py-2 ml-1 lg:ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded">Update</Link>
          <button onClick={()=>handleDelete(_id)} className="px-2 lg:px-5 py-2 ml-1 lg:ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded">Delete</button>
          {/* <Link to={`/details/${_id}`} className="px-5 py-2 ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded">View Details</Link> */}
        </div>
      </div>
    </div>
  );
};

export default MyCard;
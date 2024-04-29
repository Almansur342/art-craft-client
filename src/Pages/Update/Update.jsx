// import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const Update = () => {
  const { id } = useParams();
  console.log(id)
  // const [matched, setMatched] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/singleItem/${id}`)
  //   .then(res => res.json())
  //   .then(data=>{
  //     // console.log(data);
  //     setMatched(data);
  //   })
  // },[id]);


  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  // console.log(user);
  const {  handleSubmit, formState: { errors }, } = useForm();
  const [subcategory_name, setSelectedSubcategory] = useState('');
  const onSubmit = data => {
    const { image, item_name, short_description, price, rating, customization, processing_time, stock_status } = data;
    // const email = user?.email
    // console.log(user?.email, selectedSubcategory,image,itemName,description,price,rating,customization,time,stockStatus);
    const info = {image,item_name,subcategory_name, short_description, price, rating, customization, processing_time, stock_status}
    console.log(info);
    fetch(`http://localhost:5000/updateProduct/${id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount>0){
        Toast.fire({
          icon: 'success',
          title: 'Product Updated successfully',
        })
      }
    })
  }
  

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3  rounded py-10 px-16 bg-[#f8f5ef] mt-6">
      <h1 className="text-3xl text-center font-semibold text-[#34373f] ">Update Your Collection</h1>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Image:</span>
          </label>
          <input type="text" placeholder="Image" name="image" className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Item Name:</span>
          </label>
          <input type="text" placeholder="Item name" name="item_name" className="input input-bordered"
           
          />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Subcategory Name:</span>
          </label>
          <select className="select" value={subcategory_name} onChange={handleSubcategoryChange}>
            <option disabled value="">Pick your sub category</option>
            <option value="ClaySculpture">Clay Sculpture
            </option>
            <option value="StoneSculpture">Stone Sculpture</option>
            <option value="MetalSculpture">Metal Sculpture</option>
            <option value=" FoodCarving"> Food carving</option>
            <option value="NaturalMaterialSculpture">Natural Material Sculpture</option>
            <option value="BeadedSculpture">Beaded Sculpture</option>
          </select>

         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Short Description:</span>
          </label>
          <input type="text" placeholder="short description" name="short_description" className="input input-bordered"
           
          />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Price:</span>
          </label>
          <input type="number" placeholder="Price" name="price" className="input input-bordered"
           
          />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Rating:</span>
          </label>
          <input type="number" placeholder="Rating" name="rating" className="input input-bordered"
            
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Customization:</span>
          </label>
          <input type="text" placeholder="Yes/No" name="customization" className="input input-bordered"
            
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Processing time:</span>
          </label>
          <input type="text" placeholder="Processing time" name="processing_time" className="input input-bordered"
          />
        </div>

        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold text-base">StockStatus:</span>
          </label>
          <input
            type="text"
            placeholder="StockStatus"
            name="stock_status"
            className="input input-bordered" 
          />  
        </div>
     </div>

      <div className="form-control">
        <button className="btn mt-6 bg-[#b18b5e] text-white text-base lg:text-lg mb-3 uppercase">Update</button>
      </div>
    </form>
  );
};

export default Update;
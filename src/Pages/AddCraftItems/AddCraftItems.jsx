import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddCraftItems = () => {
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
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const onSubmit = data => {
    const { image, itemName, description, price, rating, customization, time, stockStatus } = data;
    const email = user?.email
    // console.log(user?.email, selectedSubcategory,image,itemName,description,price,rating,customization,time,stockStatus);
    const info = {email,image, itemName,selectedSubcategory, description, price, rating, customization, time, stockStatus,}
    console.log(info);
    fetch('http://localhost:5000/addProduct',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Toast.fire({
          icon: 'success',
          title: 'Product added successfully',
        })
      }
    })
  }
  

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3  rounded py-10 px-16 bg-[#f8f5ef] mt-6">
      <h1 className="text-3xl text-center font-semibold text-[#34373f] ">Craft Your Collection</h1>
      <p className="text-xl font-medium text-center">Welcome to the Add Craft Item page, where creativity <br /> meets curation.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Image:</span>
          </label>
          <input type="text" placeholder="Image" name="image" className="input input-bordered"
            {...register("image", { required: true })}
          />
          {errors.image && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Item Name:</span>
          </label>
          <input type="text" placeholder="Item name" name="itemName" className="input input-bordered"
            {...register("itemName", { required: true })}
          />
          {errors.itemName && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Subcategory Name:</span>
          </label>
          <select className="select" value={selectedSubcategory} onChange={handleSubcategoryChange}>
            <option disabled value="">Pick your sub category</option>
            <option value="ClaySculpture">Clay Sculpture
            </option>
            <option value="StoneSculpture">Stone Sculpture</option>
            <option value="MetalSculpture">Metal Sculpture</option>
            <option value=" FoodCarving"> Food carving</option>
            <option value="NaturalMaterialSculpture">Natural Material Sculpture</option>
            <option value="BeadedSculpture">Beaded Sculpture</option>
          </select>

          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Short Description:</span>
          </label>
          <input type="text" placeholder="short description" name="description" className="input input-bordered"
            {...register("description", { required: true })}
          />
          {errors.description && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Price:</span>
          </label>
          <input type="number" placeholder="Price" name="price" className="input input-bordered"
            {...register("price", { required: true })}
          />
          {errors.price && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Rating:</span>
          </label>
          <input type="number" placeholder="Rating" name="rating" className="input input-bordered"
            {...register("rating", { required: true })}
          />
          {errors.rating && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Customization:</span>
          </label>
          <input type="text" placeholder="Yes/No" name="customization" className="input input-bordered"
            {...register("customization", { required: true })}
          />
          {errors.customization && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Processing time:</span>
          </label>
          <input type="text" placeholder="Processing time" name="time" className="input input-bordered"
            {...register("time", { required: true })}
          />
          {errors.time && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold text-base">StockStatus:</span>
          </label>
          <input
            type="text"
            placeholder="StockStatus"
            name="stockStatus"
            className="input input-bordered"
            {...register("stockStatus", { required: true })}
          />
          {errors.stockStatus && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold text-base">Name:</span>
          </label>
          <input
            type="text"

            value={user?.displayName}
            // placeholder={user?.displayName}

            className="input input-bordered appearance-none focus:outline-none"
            
          />
          {errors.password && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold text-base">Email:</span>
          </label>
          <input
            type="email"
            value={user?.email}

            className="input input-bordered  appearance-none focus:outline-none"
           
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
      </div>

      <div className="form-control">
        <button className="btn mt-6 bg-[#b18b5e] text-white text-base lg:text-lg mb-3 uppercase">Add</button>
      </div>
    </form>
  );
};

export default AddCraftItems;
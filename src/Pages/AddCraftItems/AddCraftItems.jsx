import { useForm } from "react-hook-form";

const AddCraftItems = () => {
  const { register, handleSubmit, formState: { errors },} = useForm();
  const onSubmit = data =>{
    const {email,password} = data;
    console.log(email,password);
  }
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
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Item Name:</span>
      </label>
      <input type="text" placeholder="Item name" name="name" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Subcategory Name:</span>
      </label>
      <input type="text" placeholder="Subcategory Name" name="subcategory" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Short Description:</span>
      </label>
      <input type="text" placeholder="short description" name="description" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Price:</span>
      </label>
      <input type="number" placeholder="Price" name="price" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Rating:</span>
      </label>
      <input type="number" placeholder="Rating" name="rating" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Customization:</span>
      </label>
      <input type="text" placeholder="Yes/No" name="customization" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">Processing time:</span>
      </label>
      <input type="text" placeholder="Processing time" name="time
" className="input input-bordered"
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
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
           {...register("password", { required: true })}
           />
        {errors.password && <span className="text-red-500">This field is required</span>}
      </div>
    <div className="form-control relative">
        <label className="label">
          <span className="label-text font-semibold text-base">Name:</span>
        </label>
        <input
         type="text"
          defaultValue="St"
          
           className="input input-bordered"
           {...register("password", { required: true })}
           />
        {errors.password && <span className="text-red-500">This field is required</span>}
      </div>

    <div className="form-control relative">
        <label className="label">
          <span className="label-text font-semibold text-base">Email:</span>
        </label>
        <input
         type="email"
          defaultValue="he"
           
           className="input input-bordered"
           {...register("password", { required: true })}
           />
        {errors.password && <span className="text-red-500">This field is required</span>}
      </div>
    </div>
    
    <div className="form-control">
      <button className="btn mt-6 bg-[#b18b5e] text-white text-base lg:text-lg mb-3 uppercase">Add</button>
    </div>
  </form>
  );
};

export default AddCraftItems;
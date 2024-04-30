import { Link } from "react-router-dom";

const Category = ({product}) => {
  const { image,subcategory_name,short_description } = product || {}
  return (
    <div data-aos="fade-up" data-aos-duration = '1000' className="card bg-[#f7f4ef] p-6 shadow-xl">
    <figure><img className="h-56 w-full rounded-lg object-cover" src={image} alt="Shoes" /></figure>
    <div className="mt-2">
      <p className="text-lg font-medium"># {subcategory_name}</p>
      <hr className='my-4' />
      <p className="mb-4">{short_description}</p>
      <div className="card-actions">
        <Link to={`/relate/${subcategory_name}`} className="px-5 py-2 ml-2 font-semibold text-base text-white bg-[#b18b5e] rounded">Explore</Link>
      </div>
    </div>
  </div>
  );
};

export default Category;
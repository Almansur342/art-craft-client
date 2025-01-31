import { Link, useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
<div className="lg:overflow-x-auto my-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Subcategory</th>
        <th className="hidden md:block lg:block">Stock Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loadedData.map((item,idx) => <tr key={item._id}>
          <th>{idx + 1}</th>
          <td>{item.item_name}</td>
          <td>{item.subcategory_name}</td>
          <td className="hidden md:block lg:block">{item.stock_status}</td>
          <td><Link to={`/item/${item._id}`} className="px-1 lg:px-5 lg:py-2 ml-0 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#b18b5e] rounded">View Details</Link></td>
        </tr>)
      }
    </tbody>
  </table>
</div>
  );
};

export default AllCraftItems;
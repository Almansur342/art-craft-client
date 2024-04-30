import { useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
<div className="overflow-x-auto my-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Subcategory</th>
        <th>Stock Status</th>
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
          <td>{item.stock_status}</td>
          <td><button>View Details</button></td>
        </tr>)
      }
    </tbody>
  </table>
</div>
  );
};

export default AllCraftItems;
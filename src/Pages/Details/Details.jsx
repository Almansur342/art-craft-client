import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const {id} = useParams();
  const craftDetails = useLoaderData();
  const [matched, setMatched] = useState({});

  useEffect(()=>{
    if(craftDetails){
      const singleDetails = craftDetails.find(item => item._id == id);
      setMatched(singleDetails);
    }
  },[craftDetails,id])
  console.log(matched);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Details;
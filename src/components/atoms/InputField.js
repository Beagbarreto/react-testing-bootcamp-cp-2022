import React, { useEffect, useState } from "react";
// import currentDate from "../../../utils/date";
// import dateSearchServices from "../../../utils/services/dateSearchServices";
// import PictureData from "../PictureData/PictureData";

const InputField = () => {
  //   const [spaceData, setSpaceData] = useState(null);
  //   const [queryDate, setQueryDate] = useState(currentDate);
  //   // const [error, setError] = useState("");
  //   // const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       console.log("before try");
  //       try {
  //         const spaceDataByDate = await dateSearchServices(queryDate);
  //         console.log("The request was made");
  //         setSpaceData(spaceDataByDate.data);
  //         console.log("The data: ", spaceDataByDate.data);
  //       } catch {
  //         alert("No results were found");
  //       }
  //     };
  //     fetchData();
  //   }, [queryDate]);

  return (
    <>
      <div>
        <input
          type="text"
          id="queryDate"
          name="queryDate"
          placeholder="DD/MM/YYYY"
          //onChange={(e) => setQueryDate(e.target.value)}
          //value={queryDate}
        />
      </div>
    </>
  );
};

export default InputField;

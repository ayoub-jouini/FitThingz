"use client";

import { useSelector } from "react-redux";
import NutritionTable from "../../../../components/Table/nutritionTable/NutritionTable";
import { useEffect, useState } from "react";
import axios from "axios";

function Nutrition() {
  let auth: any = useSelector((state: any) => state.auth);

  const [programs, setPrograms] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/regime/creator/${auth.id}`,
      };

      try {
        const response = await axios.request(options);
        setPrograms(response.data.regimes);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="">
      <NutritionTable programs={programs} />
    </div>
  );
}

export default Nutrition;

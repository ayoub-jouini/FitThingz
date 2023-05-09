"use client";

import axios from "axios";
import NutritionTableRow from "./NutritionTableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {}

const NutritionTable: React.FC<Props> = (props) => {
  const auth: any = useSelector((state: any) => state.auth);

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
    <div className=" ">
      <div className="w-full grid grid-cols-5 px-10 h-24 content-center justify-items-center">
        <div className="text-textPrimary">Name</div>
        <div className="text-textPrimary">Type</div>
        <div className="text-textPrimary">Duree</div>
        <div className="text-textPrimary">Tags</div>
        <div className=""></div>
      </div>
      {programs &&
        programs.map((program: any, key: any) => (
          <NutritionTableRow
            key={key}
            id={program._id}
            name={program.nom}
            type={program.type}
            duree={program.duree}
            tags={program.tags}
          />
        ))}
    </div>
  );
};

export default NutritionTable;
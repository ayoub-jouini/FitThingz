"use client";

import axios from "axios";
import AthleteNutritionTableRow from "./AthleteNutritionTableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {}

const AthleteNutritionTable: React.FC<Props> = (props) => {
  let auth: any = useSelector((state: any) => state.auth);

  const [programs, setPrograms] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/sporif/user/${auth.id}`,
      };

      try {
        const response = await axios.request(options);
        setPrograms(response.data.sportif.regime);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div className=" ">
      <div className="w-full grid grid-cols-4 px-10 h-24 content-center justify-items-center">
        <div className="text-textPrimary">Name</div>
        <div className="text-textPrimary">Type</div>
        <div className="text-textPrimary">Duree</div>
        <div className="text-textPrimary">Tags</div>
      </div>
      {programs && (
        <AthleteNutritionTableRow
          id={programs._id}
          name={programs.nom}
          type={programs.type}
          duree={programs.duree}
          tags={programs.tags}
        />
      )}
    </div>
  );
};

export default AthleteNutritionTable;

"use client";

import axios from "axios";
import ProgramsTableRow from "./ProgramsTableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {}

const ProgramsTable: React.FC<Props> = (props) => {
  let auth: any = useSelector((state: any) => state.auth);

  const [programs, setPrograms] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/creator/${auth.id}`,
      };

      try {
        const response = await axios.request(options);
        setPrograms(response.data.programmes);
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
          <ProgramsTableRow
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

export default ProgramsTable;

"use client";

import axios from "axios";
import AthleteProgramsTableRow from "./AthleteProgramsTableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {}

const AthleteProgramsTable: React.FC<Props> = (props) => {
  let auth: any = useSelector((state: any) => state.auth);

  const [programs, setPrograms] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/sporif/id/${auth.id}`,
      };

      try {
        const response = await axios.request(options);
        setPrograms(response.data.sportif.programme);
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
      {programs &&
        programs.map((program: any, key: any) => (
          <AthleteProgramsTableRow
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

export default AthleteProgramsTable;

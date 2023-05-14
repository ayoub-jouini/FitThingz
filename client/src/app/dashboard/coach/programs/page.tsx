"use client";

import { useSelector } from "react-redux";
import ProgramsTable from "../../../../components/Table/programsTable/ProgramsTable";
import ProgramsNavigation from "../../../../components/navigation/ProgramsNavigation";
import { useEffect, useState } from "react";
import axios from "axios";

function Programs() {
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
    <div className="">
      <ProgramsNavigation />
      <ProgramsTable programs={programs} />
    </div>
  );
}

export default Programs;

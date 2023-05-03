"use client";

import { useSelector } from "react-redux";
import ProgramsTable from "../../../../components/Table/programsTable/ProgramsTable";
import ProgramsNavigation from "../../../../components/navigation/ProgramsNavigation";

function Programs() {
  let auth: any = useSelector((state: any) => state.auth);

  return (
    <div className="">
      <ProgramsNavigation />
      <ProgramsTable creator={auth.id} />
    </div>
  );
}

export default Programs;

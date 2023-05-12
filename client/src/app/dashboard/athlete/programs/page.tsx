import AthleteProgramsTable from "../../../../components/Table/programsTable/AthleteProgramsTable";
import ProgramsNavigation from "../../../../components/navigation/ProgramsNavigation";

function Programs() {
  return (
    <div className="">
      <div className="h-14 rounded-[45px] w-52 flex items-center justify-center bg-tertiary text-textPrimary border-2 border-grisPrimary">
        Programs
      </div>
      <AthleteProgramsTable />
    </div>
  );
}

export default Programs;

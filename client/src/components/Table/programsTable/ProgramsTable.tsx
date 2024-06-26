import ProgramsTableRow from "./ProgramsTableRow";

interface Props {
  programs: any;
}

const ProgramsTable: React.FC<Props> = (props) => {
  const { programs } = props;
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
            description={program.description}
            tags={program.tags}
          />
        ))}
    </div>
  );
};

export default ProgramsTable;

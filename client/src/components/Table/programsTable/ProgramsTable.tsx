import ProgramsTableRow from "./ProgramsTableRow";

interface Props {}

const data = [
  {
    id: 1,
    name: "program 1",
    type: "lose weight",
    duree: "14 days",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 1,
    name: "program 1",
    type: "lose weight",
    duree: "14 days",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 1,
    name: "program 1",
    type: "lose weight",
    duree: "14 days",
    tags: ["tag1", "tag2", "tag3"],
  },
];

const ProgramsTable: React.FC<Props> = (props) => {
  return (
    <div className=" ">
      <div className="w-full grid grid-cols-5 px-10 h-24 content-center justify-items-center">
        <div className="text-textPrimary">Name</div>
        <div className="text-textPrimary">Type</div>
        <div className="text-textPrimary">Duree</div>
        <div className="text-textPrimary">Tags</div>
        <div className=""></div>
      </div>
      {data.map((d, key) => (
        <ProgramsTableRow
          key={key}
          id={d.id}
          name={d.name}
          type={d.type}
          duree={d.duree}
          tags={d.tags}
        />
      ))}
    </div>
  );
};

export default ProgramsTable;

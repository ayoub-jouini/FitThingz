import ExercicesTableRow from "./ExercicesTableRow";

interface Props {
  page: string;
  exercises: any;
}

const ExercicesTable: React.FC<Props> = (props) => {
  const { page, exercises } = props;

  return (
    <div className=" ">
      <div
        className={`w-full grid  px-10 h-24 content-center justify-items-center ${
          page === "myexercices" ? "grid-cols-5" : "grid-cols-4"
        }`}
      >
        <div className="text-textPrimary">Name</div>
        <div className="text-textPrimary">BodyPart</div>
        <div className="text-textPrimary">Target</div>
        <div className="text-textPrimary">Equipment</div>
        {page === "myexercices" && <div className=""></div>}
      </div>
      {exercises.map((d: any, key: number) => (
        <ExercicesTableRow
          key={key}
          id={d.id}
          page={page}
          name={d.name}
          bodyPart={d.bodyPart}
          target={d.target}
          equipment={d.equipment}
          gifUrl={d.gifUrl}
        />
      ))}
    </div>
  );
};

export default ExercicesTable;

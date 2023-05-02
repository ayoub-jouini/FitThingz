import MyExercisesTable from "../../../../../../components/Table/myExercisesTable/MyExercisesTable";

export default async function MyExercices({ params }: { params: any }) {
  return (
    <div className="mx-5">
      <MyExercisesTable bodypart={params.bodypart} />
    </div>
  );
}

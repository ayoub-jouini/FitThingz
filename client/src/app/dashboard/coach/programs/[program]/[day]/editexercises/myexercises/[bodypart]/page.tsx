import MyExercisesList from "../../../../../../../../../components/Table/exercisesList/MyExercisesList";

export default async function BodyPart({ params }: { params: any }) {
  return (
    <div className="w-full h-full  scrollbar-hide">
      <MyExercisesList bodypart={params.bodypart} />
    </div>
  );
}

import ExercisesList from "../../../../../../../../../components/Table/exercisesList/ExercisesList";

export default async function BodyPart({ params }: { params: any }) {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hide">
      <ExercisesList bodypart={params.bodypart} />
    </div>
  );
}

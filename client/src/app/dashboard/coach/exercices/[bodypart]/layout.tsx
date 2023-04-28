import ExercicesNavigation from "../../../../../components/navigation/ExercicesNavigation";

export default function ExercicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="m-5">
      <ExercicesNavigation bodypart={params.bodypart} />
      <div className="font-bold text-primary text-2xl inline-flex justify-center items-center rounded-[28px] p-3 shadow ">
        {params.bodypart}
      </div>
      {children}
    </div>
  );
}

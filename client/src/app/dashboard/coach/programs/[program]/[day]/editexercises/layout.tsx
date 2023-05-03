import EditProgramNavigation from "../../../../../../../components/navigation/EditProgramNavigation";

export default async function programLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex flex-col">
        <EditProgramNavigation program={params.program} day={params.day} />
        <div className="border-2 border-grisPrimary rounded-[45px] mt-5 w-full h-[32.813rem] p-5">
          {children}
        </div>
      </div>
      <div className="border-2 border-grisPrimary rounded-[45px] col-span-2 flex flex-col justify-center items-center h-[37.5rem]">
        <p className="text-textPrimary text-base">
          Drag here to create a Program
        </p>
      </div>
    </div>
  );
}

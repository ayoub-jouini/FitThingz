import NutritionDragAndDropProvider from "../../../../../../../components/providers/NutritionDragAndDropProvider";

export default async function editDietLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="grid grid-cols-3 gap-5">
      <NutritionDragAndDropProvider regime={params.diet} day={params.day}>
        <div className="flex flex-col">
          <div className="w-full border-2 border-grisPrimary h-14 rounded-[45px] flex">
            <p className="h-full rounded-[45px] flex items-center justify-center w-full text-center">
              Food
            </p>
          </div>
          <div className="border-2 border-grisPrimary rounded-[45px] mt-5 w-full h-[32.813rem] p-5">
            {children}
          </div>
        </div>
      </NutritionDragAndDropProvider>
    </div>
  );
}

import axios from "axios";
import DietHeader from "../../../../../../components/nutrition/DietHeader";

const getData = async (id: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/regime/id/${id}`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function DietLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const dietId = params.diet;

  const diet = await getData(dietId);

  return (
    <div className="m-5">
      {diet && (
        <DietHeader
          day={params.day}
          days={diet.data.regime.duree}
          selectedDay={params.day}
          diet={params.diet}
        />
      )}
      {children}
    </div>
  );
}

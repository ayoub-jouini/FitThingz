import axios from "axios";
import AthleteDietHeader from "../../../../../../components/nutrition/AthleteDietHeader";

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
        <AthleteDietHeader
          day={params.day}
          days={diet.data.regime.duree}
          selectedDay={params.day}
          diet={params.diet}
          title={diet.data.regime.nom}
          description={diet.data.regime.description}
        />
      )}
      {children}
    </div>
  );
}

import RepasItem from "../../../../../../components/program/RepasItem";
import axios from "axios";

const getData = async (diet: string, day: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/regime/repas/${diet}/${day}`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function Day({ params }: { params: any }) {
  const nutrition = await getData(params.diet, params.day);
  return (
    <div className="my-5">
      <div className="border-2 border-grisPrimary rounded-[45px] p-14">
        {nutrition &&
          nutrition.data.repas.map((diet: any, key: any) => (
            <RepasItem key={key} aliment={diet.aliment} title={diet.titre} />
          ))}
      </div>
    </div>
  );
}

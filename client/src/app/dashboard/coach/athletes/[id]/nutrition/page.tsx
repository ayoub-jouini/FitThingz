import axios from "axios";
import NutritionTable from "../../../../../../components/Table/nutritionTable/NutritionTable";

const getData = async (id: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/sporif/user/${id}`,
  };

  let response;

  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

async function Programs({ params }: { params: any }) {
  const programs = await getData(params.id);
  return (
    <div className="">
      {programs?.data.sportif.regime && (
        <NutritionTable programs={[programs.data.sportif.regime]} />
      )}
    </div>
  );
}

export default Programs;

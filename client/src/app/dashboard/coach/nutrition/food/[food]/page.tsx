import FoodTable from "../../../../../../components/Table/foodTable/FoodTable";
import axios from "axios";

const getData = async (page: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/aliment/category/${page}`,
  };

  let response;

  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function BodyPart({ params }: { params: any }) {
  const food = await getData(params.food);
  return (
    <div className="mx-5">
      {food && <FoodTable page={params.food} food={food.data.aliment} />}
    </div>
  );
}

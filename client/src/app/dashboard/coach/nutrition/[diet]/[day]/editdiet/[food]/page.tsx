import axios from "axios";
import FoodItem from "../../../../../../../../components/Table/foodItem/FoodItem";

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

export default async function Food({ params }: { params: any }) {
  const food = await getData(params.food);

  return (
    <div className="w-full h-full  scrollbar-hide">
      {food &&
        food.data.aliment.map((exercise: any, key: any) => (
          <FoodItem
            name={exercise.titre}
            key={key}
            _id={exercise._id}
            number={10}
          />
        ))}
    </div>
  );
}

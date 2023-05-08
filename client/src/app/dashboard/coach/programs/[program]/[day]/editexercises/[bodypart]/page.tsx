import MyExercisesItem from "../../../../../../../../components/Table/exercisesList/MyExercisesItem";
import axios from "axios";

const getData = async (page: string) => {
  const options = {
    method: "GET",
    url: `https://${process.env.X_RAPIDAPI_HOST}/exercises/bodyPart/${page}`,
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
    },
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
  const exercises = await getData(params.bodypart);

  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hide">
      {exercises &&
        exercises.data.map((exercise: any, key: any) => (
          <MyExercisesItem
            name={exercise.name}
            key={key}
            _id={exercise.id.toString()}
            number={10}
            type="library"
          />
        ))}
    </div>
  );
}

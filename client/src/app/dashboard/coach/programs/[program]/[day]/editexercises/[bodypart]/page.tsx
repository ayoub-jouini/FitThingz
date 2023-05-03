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
          <div
            key={key}
            className="border-2 border-grisPrimary rounded-[54px] px-5 py-2 flex justify-between items-center my-2 "
          >
            <p className="">{exercise.name}</p>
            <img alt="" src="/icons/menuicon.svg" />
          </div>
        ))}
    </div>
  );
}

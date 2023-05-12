import Link from "next/link";
import axios from "axios";

const getData = async () => {
  const options = {
    method: "GET",
    url: `https://${process.env.X_RAPIDAPI_HOST}/exercises/bodyPartList`,
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

async function Exercices() {
  const bodyParts = await getData();

  return (
    <div className="m-5">
      <div className="grid grid-cols-4 ju gap-5">
        {bodyParts &&
          bodyParts.data.map((bodyPart: string, key: number) => (
            <Link
              href={`/dashboard/athlete/exercises/${bodyPart}`}
              key={key}
              className="w-64 h-44 bg-cover rounded-[55px] "
              style={{ backgroundImage: `url("/images/${bodyPart}.jpg")` }}
            >
              <div className="bg-black/40 rounded-[55px] w-full h-full text-tertiary flex justify-center items-center font-bold text-xl">
                {bodyPart}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Exercices;

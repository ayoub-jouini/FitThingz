import axios from "axios";
import Link from "next/link";

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

export default async function MyExercises({ params }: { params: any }) {
  const bodyParts = await getData();

  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {bodyParts &&
        bodyParts.data.map((bodyPart: string, key: number) => (
          <Link
            href={`/dashboard/coach/programs/${params.program}/${params.day}/editexercises/myexercises/${bodyPart}`}
            key={key}
            className="bg-cover rounded-[21px] h-20 bg-center"
            style={{ backgroundImage: `url("/images/${bodyPart}.jpg")` }}
          >
            <div className="bg-black/40 rounded-[21px] w-full h-full text-tertiary flex justify-center items-center font-bold text-sm">
              {bodyPart}
            </div>
          </Link>
        ))}
    </div>
  );
}

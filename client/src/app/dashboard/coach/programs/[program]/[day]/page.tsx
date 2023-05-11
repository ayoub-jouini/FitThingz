import ExerciseItem from "@/components/program/ExerciseItem";
import axios from "axios";

const getData = async (program: string, day: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/exercices/${program}/${day}`,
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
  const exercises = await getData(params.program, params.day);
  return (
    <div className="my-5">
      <div className="border-2 border-grisPrimary rounded-[45px] p-14">
        {exercises &&
          exercises.data.exercices.map((exercise: any, key: any) => (
            <ExerciseItem number={exercise.number} title={exercise.name} />
          ))}
      </div>
    </div>
  );
}

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  bodypart: string;
}

const ExercisesList: React.FC<Props> = (props) => {
  const { bodypart } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const [exercises, setExercises] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/exercice/bodypart/${bodypart}/${auth.id}`,
      };

      let response;

      try {
        response = await axios.request(options);
        setExercises(response.data.exercices);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {exercises &&
        exercises.map((exercise: any, key: any) => (
          <div
            key={key}
            className="border-2 border-grisPrimary rounded-[54px] px-5 py-2 flex justify-between items-center my-2 "
          >
            <p className="">{exercise.name}</p>
            <img alt="" src="/icons/menuicon.svg" />
          </div>
        ))}
    </>
  );
};

export default ExercisesList;

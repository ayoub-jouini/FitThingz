"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyExercisesItem from "./MyExercisesItem";

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
  console.log(exercises);

  return (
    <>
      {exercises &&
        exercises.map((exercise: any, key: any) => (
          <MyExercisesItem name={exercise.name} key={key} id={exercise._id} />
        ))}
    </>
  );
};

export default ExercisesList;

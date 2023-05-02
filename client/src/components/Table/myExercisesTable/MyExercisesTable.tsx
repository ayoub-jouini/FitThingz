"use client";

import axios from "axios";
import ExercicesTable from "../exercicesTable/ExercicesTable";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  bodypart: string;
}

const MyExercisesTable: React.FC<Props> = (props) => {
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
      {exercises && <ExercicesTable page="myexercices" exercises={exercises} />}
    </>
  );
};

export default MyExercisesTable;

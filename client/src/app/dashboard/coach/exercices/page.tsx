"use client";

import Link from "next/link";
import Button from "../../../../components/global/button/Button";

const exercicesData = [
  {
    bodyPart: "Abs",
    image: "/images/Abs.png",
  },
  {
    bodyPart: "Bicep",
    image: "/images/Bicep.png",
  },
  {
    bodyPart: "Chest",
    image: "/images/Chest.png",
  },
  {
    bodyPart: "Calf",
    image: "/images/Calf.png",
  },
  {
    bodyPart: "Glute",
    image: "/images/Glute.png",
  },
  {
    bodyPart: "Hamstring",
    image: "/images/Hamstring.png",
  },
  {
    bodyPart: "IT Band",
    image: "/images/ITBand.png",
  },
  {
    bodyPart: "Abductors",
    image: "/images/Abductors.png",
  },
  {
    bodyPart: "Lower Back",
    image: "/images/LowerBack.png",
  },
  {
    bodyPart: "Lats",
    image: "/images/Lats.png",
  },
  {
    bodyPart: "Lower Back",
    image: "/images/LowerBack.png",
  },
  {
    bodyPart: "Traps",
    image: "/images/Traps.png",
  },
];

function Exercices() {
  const handleCreateExercise = () => {};

  return (
    <div className="mx-5">
      <div className="flex justify-end my-7">
        <Button
          text="Create Exercice"
          type="button"
          handleButton={handleCreateExercise}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {exercicesData.map((exercice, key) => (
          <Link
            href={`/dashboard/coach/exercices/${exercice.bodyPart}`}
            key={key}
            className="w-60 h-44 bg-cover rounded-[55px] "
            style={{ backgroundImage: `url(${exercice.image})` }}
          >
            <div className="bg-black/40 rounded-[55px] w-full h-full text-tertiary flex justify-center items-center font-bold text-xl">
              {exercice.bodyPart}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Exercices;

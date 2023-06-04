"use client";

import EditFoodModal from "../../../components/modals/EditFoodModal";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  id: string;
  titre: string;
  category: string;
  description: string;
  dosage: string;
  calories: string;
  carbs: string;
  fats: string;
  proteins: string;
  image: string;
}

const FoodTableRow: React.FC<Props> = (props) => {
  const {
    id,
    titre,
    dosage,
    calories,
    carbs,
    fats,
    proteins,
    image,
    category,
    description,
  } = props;

  let auth: any = useSelector((state: any) => state.auth);

  const [display, setDisplay] = useState(true);

  const [showEditFoodModal, setShowEditFoodModal] = useState<boolean>(false);

  const handleEditFoodModal = () => {
    setShowEditFoodModal(!showEditFoodModal);
  };

  const handleRemove = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/aliment/${id}`,
      {
        headers: {
          authorization: "Bearer " + auth.accessToken,
        },
      }
    );

    setDisplay(false);
  };

  return (
    <>
      {display && (
        <div
          className={`rounded-[45px] pr-10 flex h-32 border-2 border-grisPrimary my-5`}
        >
          <div
            className="w-1/4 h-full bg-cover rounded-[45px] "
            style={{ backgroundImage: `url("${image}")` }}
          >
            <div className="bg-black/40 rounded-[45px] w-full h-full text-tertiary flex justify-center items-center font-bold text-xl">
              {titre}
            </div>
          </div>
          <div className="w-3/4 grid grid-cols-6 justify-items-center content-center">
            <div className="text-textPrimary">{dosage}</div>
            <div className="text-textPrimary">{calories}</div>
            <div className="text-textPrimary">{carbs}</div>
            <div className="text-textPrimary">{fats}</div>
            <div className="text-textPrimary">{proteins}</div>

            <div className="flex ">
              <div
                className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer"
                onClick={handleEditFoodModal}
              >
                <img alt="" src="/icons/editicon.svg" />
              </div>
              <div
                className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer"
                onClick={handleRemove}
              >
                <img alt="" src="/icons/trashcanicon.svg" />
              </div>
              <EditFoodModal
                handleCreateProgramModal={handleEditFoodModal}
                showCreateProgramModal={showEditFoodModal}
                id={id}
                pName={titre}
                pCategory={category}
                pDescription={description}
                pDosage={Number(dosage)}
                pCalories={Number(calories)}
                pCarbs={Number(carbs)}
                pFats={Number(fats)}
                pProteins={Number(proteins)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodTableRow;

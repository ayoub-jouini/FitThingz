"use client";

import { useRef, useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import TextArea from "../global/textArea/TextArea";
import { useRouter } from "next/navigation";

interface Props {
  showCreateProgramModal: boolean;
  handleCreateProgramModal: () => void;
  id: string;
  pName: string;
  pCategory: string;
  pDescription: string;
  pDosage: number;
  pCalories: number;
  pCarbs: number;
  pFats: number;
  pProteins: number;
}

const EditFoodModal: React.FC<Props> = (props) => {
  const {
    showCreateProgramModal,
    handleCreateProgramModal,
    id,
    pName,
    pCalories,
    pCarbs,
    pCategory,
    pDescription,
    pDosage,
    pFats,
    pProteins,
  } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const router = useRouter();

  const [name, setName] = useState<string>(pName);
  const [category, setCategory] = useState<string>(pCategory);
  const [description, setDescription] = useState<string>(pDescription);
  const [dosage, setDosage] = useState<number>(pDosage);
  const [calories, setCalories] = useState<number>(pCalories);
  const [carbs, setCarbs] = useState<number>(pCarbs);
  const [fats, setFats] = useState<number>(pFats);
  const [proteins, setProteins] = useState<number>(pProteins);
  const [image, setImage] = useState<any>();

  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeCategory = (event: any) => {
    setCategory(event.target.value);
  };
  const changeDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const changeDosage = (event: any) => {
    setDosage(event.target.value);
  };
  const changeCalories = (event: any) => {
    setCalories(event.target.value);
  };
  const changeCarbs = (event: any) => {
    setCarbs(event.target.value);
  };
  const changeFats = (event: any) => {
    setFats(event.target.value);
  };
  const changeProteins = (event: any) => {
    setProteins(event.target.value);
  };

  const handleImage = (event: any) => {
    setImage(event.target.files[0]);
  };

  const uploadImage = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (uploadImage.current) uploadImage.current.click();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("titre", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("dosage", dosage.toString());
    formData.append("calories", calories.toString());
    formData.append("carbs", carbs.toString());
    formData.append("fats", fats.toString());
    formData.append("proteins", proteins.toString());
    formData.append("image", image);

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/aliment/${id}`,
        {
          titre: name,
          category: category,
          description: description,
          dosage: dosage,
          calories: calories,
          carbs: carbs,
          fats: fats,
          proteins: proteins,
        },
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
      handleCreateProgramModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {showCreateProgramModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className="my-3 grid grid-cols-5 w-full">
                  <h2 className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5">
                    Create Food
                  </h2>
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleCreateProgramModal}
                  >
                    X
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col items-center px-14"
                >
                  <div className=" w-full items-center">
                    <Input
                      type="text"
                      height="h-12 w-full"
                      width="w-full my-3"
                      label="Name"
                      placeholder="Name"
                      value={name}
                      handleChange={changeName}
                    />
                    <Input
                      type="text"
                      height="h-12 w-full"
                      width="w-full my-3"
                      label="Category"
                      placeholder="Category"
                      value={category}
                      handleChange={changeCategory}
                    />
                    <TextArea
                      height="w-full"
                      width="w-full my-3"
                      label="Description"
                      placeholder="Description"
                      value={description}
                      handleChange={changeDescription}
                    />
                    <div className="grid grid-cols-2 gap-5 justify-items-center ">
                      <Input
                        type="number"
                        height="h-12 w-full"
                        width="w-full "
                        label="Dosage"
                        placeholder="Dosage"
                        value={dosage}
                        handleChange={changeDosage}
                      />
                      <Input
                        type="number"
                        height="h-12 w-full"
                        width="w-full "
                        label="Calories"
                        placeholder="Calories"
                        value={calories}
                        handleChange={changeCalories}
                      />
                      <Input
                        type="number"
                        height="h-12 w-full"
                        width="w-full "
                        label="Carbs"
                        placeholder="Carbs"
                        value={carbs}
                        handleChange={changeCarbs}
                      />
                      <Input
                        type="number"
                        height="h-12 w-full"
                        width="w-full "
                        label="Fats"
                        placeholder="Fats"
                        value={fats}
                        handleChange={changeFats}
                      />
                      <Input
                        type="number"
                        height="h-12 w-full"
                        width="w-full "
                        label="Proteins"
                        placeholder="Proteins"
                        value={proteins}
                        handleChange={changeProteins}
                      />
                      <div className="self-end py-2">
                        <Button
                          type="button"
                          style="outlined"
                          text="Upload Image"
                          handleButton={handleUploadButtonClick}
                          size="l"
                        />
                        <input
                          type="file"
                          className="hidden"
                          ref={uploadImage}
                          onChange={handleImage}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-5 ">
                    <Button
                      type="submit"
                      text="Edit"
                      handleButton={handleSubmit}
                      size="xl"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default EditFoodModal;

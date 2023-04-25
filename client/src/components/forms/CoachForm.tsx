"use client";

import { useRef, useState } from "react";
import Button from "../global/button/Button";
import axios from "axios";
import Input from "../global/input/Input";
import { useSelector } from "react-redux";

const CoachForm: React.FC = () => {
  const auth: any = useSelector((state: any) => state.auth);

  const [college, setCollege] = useState<string>("");
  const [cin, setCin] = useState<any>([]);
  const [diplome, setDiplome] = useState<any>();

  const cinRef = useRef<HTMLInputElement>(null);
  const diplomeRef = useRef<HTMLInputElement>(null);

  const handleCinnButtonClick = () => {
    if (cinRef.current) cinRef.current.click();
  };
  const handleDiplomeButtonClick = () => {
    if (diplomeRef.current) diplomeRef.current.click();
  };

  const handleCollege = (event: any) => {
    setCollege(event.target.value);
  };

  const handleCinFiles = (event: any) => {
    let pickedFile = [];
    if (event.target.files && event.target.files.length === 2) {
      pickedFile.push(event.target.files[0]);
      pickedFile.push(event.target.files[1]);
      setCin(pickedFile);
    }
  };

  const handleDiplomeFiles = (event: any) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setDiplome(pickedFile);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    // formData.append("files[]", cin[0]);
    // formData.append("files[]", cin[1]);
    formData.append("file", diplome);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/`,
        formData,
        {
          headers: {
            authorization: "Bearer" + auth.accessToken,
          },
        }
      );
      console.log("c bon");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        handleChange={handleCollege}
        value={college}
        height="h-12"
        width="w-full"
        label="College"
        placeholder="College"
      />

      <div className=" flex justify-evenly w-full my-10">
        <div
          className="border-2 cursor-pointer border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5"
          onClick={handleCinnButtonClick}
        >
          <img alt="" src="/icons/Document.svg" className="" />
          <p className=" text-xs my-3">Copie CIN /passport</p>
        </div>
        <input
          type="file"
          multiple
          className="hidden"
          ref={cinRef}
          onChange={handleCinFiles}
        />
        <div
          className="border-2 cursor-pointer border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5"
          onClick={handleDiplomeButtonClick}
        >
          <img alt="" src="/icons/Document.svg" className="" />
          <p className=" text-xs my-3">Copie CIN /passport</p>
        </div>
        <input
          type="file"
          className="hidden"
          ref={diplomeRef}
          onChange={handleDiplomeFiles}
        />
      </div>
      <div className="">
        <Button
          size="xl"
          text="Submit"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default CoachForm;

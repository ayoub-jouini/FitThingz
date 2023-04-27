"use client";

import { useRef, useState } from "react";
import Button from "../global/button/Button";
import axios from "axios";
import Input from "../global/input/Input";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CoachForm: React.FC = () => {
  const auth: any = useSelector((state: any) => state.auth);

  const [college, setCollege] = useState<string>("");
  const [cin, setCin] = useState<any>();
  const [diplome, setDiplome] = useState<any>();

  const cinRef = useRef<HTMLInputElement>(null);
  const diplomeRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

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
    setCin(event.target.files[0]);
  };

  const handleDiplomeFiles = (event: any) => {
    setDiplome(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("college", college);
    formData.append("images", cin);
    formData.append("images", diplome);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/`,
        formData,
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
      if (response.status === 200) {
        router.push("/signup/coach/send");
      }
    } catch (err) {
      console.log(formData);
    }
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
      encType="multipart/form-data"
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
          className={`border-2 cursor-pointer border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5 ${
            cin && "bg-primary"
          }`}
          onClick={handleCinnButtonClick}
        >
          {cin ? (
            <img alt="" src="/icons/documentwhite.svg" className="" />
          ) : (
            <img alt="" src="/icons/Document.svg" className="" />
          )}
          <p className={`text-xs my-3 ${cin && "text-tertiary"}`}>
            CIN /passport
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          ref={cinRef}
          onChange={handleCinFiles}
        />
        <div
          className={`border-2 cursor-pointer border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5 ${
            diplome && "bg-primary"
          }`}
          onClick={handleDiplomeButtonClick}
        >
          {diplome ? (
            <img alt="" src="/icons/documentwhite.svg" className="" />
          ) : (
            <img alt="" src="/icons/Document.svg" className="" />
          )}

          <p className={`text-xs my-3 ${diplome && "text-tertiary"}`}>
            diploma
          </p>
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

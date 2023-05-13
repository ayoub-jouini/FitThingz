"use client";

import { useEffect, useState } from "react";
import Button from "../global/button/Button";
import { useSelector } from "react-redux";
import axios from "axios";

interface Props {
  showAthleteProgramModal: boolean;
  handleAthleteProgramModal: () => void;
  id: string;
}

const AthleteProgramModal: React.FC<Props> = (props) => {
  const { showAthleteProgramModal, handleAthleteProgramModal, id } = props;

  let auth: any = useSelector((state: any) => state.auth);

  const [programs, setPrograms] = useState<any>();

  const [selectedProgram, setSelectedProgram] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/creator/${auth.id}`,
      };

      try {
        const response = await axios.request(options);
        setPrograms(response.data.programmes);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleSelectedProgram = (id: string) => {
    setSelectedProgram(id);
  };

  const handleSave = async () => {
    console.log(id);
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/sporif/program/${id}`,
        { program: selectedProgram },
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showAthleteProgramModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className=" grid grid-cols-5 w-full">
                  <div className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5" />
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleAthleteProgramModal}
                  >
                    X
                  </div>
                </div>
                {programs &&
                  programs.map((program: any, key: any) => (
                    <div
                      onClick={() => handleSelectedProgram(program._id)}
                      key={key}
                      className={`border-2  rounded-[54px] w-full h-14 flex justify-between items-center px-5 my-3 cursor-pointer ${
                        selectedProgram === program._id
                          ? "border-primary"
                          : "border-grisPrimary"
                      }`}
                    >
                      <p className="">{program.nom}</p>
                      <img alt="" src="/icons/plusicon.svg" />
                    </div>
                  ))}
                <div className="my-5">
                  <Button handleButton={handleSave} text="Save" type="button" />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default AthleteProgramModal;

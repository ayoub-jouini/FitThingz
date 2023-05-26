"use client";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import axios from "axios";
import Button from "../../../../components/global/button/Button";
import AthleteProfilePersonalInfo from "../../../../components/userData/AthleteProfilePersonalInfo";
import EditAthleteData from "../../../../components/userData/EditAthleteData";

function Profile() {
  const auth: any = useSelector((state: any) => state.auth);

  const [coachData, setCoachData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/user/id/${auth.id}`,
      };

      let response;

      try {
        response = await axios.request(options);
        setCoachData(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const handleHideEdit = () => {
    setShowEdit(false);
  };

  return (
    <div className="m-5">
      {coachData && (
        <>
          <div className="flex justify-center">
            <div className="flex flex-col items-center rounded-[45px] border-2 border-grisPrimary w-1/3 py-5">
              <div
                className="bg-cover rounded-full h-32 w-32"
                style={{ backgroundImage: "url(/images/Group11234.png)" }}
              />
              <p className="text-xl text-textPrimary">{`${coachData.prenom} ${coachData.nom}`}</p>
              <p className="text-l text-grixSecondary">Athlete</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-2/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
              <div
                className={`cursor-pointer h-full rounded-[45px] flex items-center justify-center w-full bg-primary text-tertiary`}
              >
                Personal Informations
              </div>
            </div>
            <div
              onClick={handleShowEdit}
              className={`rounded-xl text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base justify-center items-center ${
                !showEdit ? "flex" : "hidden"
              }`}
            >
              <img alt="" src="/icons/editicon.svg" className="mx-2" />
              <p className="mx-2">Edit</p>
            </div>
            <div className={`${!showEdit ? "hidden" : "flex"}`}>
              <Button text="Save" type="button" handleButton={handleHideEdit} />
            </div>
          </div>

          <div className={`flex`}>
            <AthleteProfilePersonalInfo
              firstName={coachData.prenom}
              lastName={coachData.nom}
              email={coachData.email}
              phone={coachData.phone}
              gender={coachData.sexe}
              adress={coachData.lieu}
              birthDay={coachData.date_naiss}
              showEdit={showEdit}
            />
            <EditAthleteData
              firstName={coachData.prenom}
              lastName={coachData.nom}
              email={coachData.email}
              phone={coachData.phone}
              adress={coachData.lieu}
              showEdit={showEdit}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

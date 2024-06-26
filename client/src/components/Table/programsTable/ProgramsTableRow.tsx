"use client";

import EditProgramModal from "../../../components/modals/EditProgramModal";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  id: number;
  name: string;
  type: string;
  duree: string;
  description: string;
  tags: string[];
}

const ProgramsTableRow: React.FC<Props> = (props) => {
  const { id, name, type, duree, tags, description } = props;

  let auth: any = useSelector((state: any) => state.auth);

  const [showCreateProgramModal, setShowCreateProgramModal] =
    useState<boolean>(false);

  const handleCreateProgramModal = () => {
    setShowCreateProgramModal(!showCreateProgramModal);
  };

  const [display, setDisplay] = useState(true);

  const handleRemove = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/${id}`,
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
        <div className="grid grid-cols-5 rounded-[45px] px-10 content-center  items-center border-2">
          <Link
            href={`/dashboard/coach/programs/${id}/1`}
            className="grid grid-cols-4 col-span-4	content-center justify-items-center items-center h-32  border-grisPrimary my-5"
          >
            <div className="text-textPrimary">{name}</div>
            <div className="text-textPrimary">{type}</div>
            <div className="text-textPrimary">{duree} Days</div>
            <div className="text-textPrimary">
              {tags.map((tag, key) => (
                <div
                  key={key}
                  className="py-1 px-5 bg-textPrimary text-tertiary text-2xs rounded-[25px] my-2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </Link>
          <div className="flex col-span-1 justify-self-end">
            <div
              className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 "
              onClick={handleCreateProgramModal}
            >
              <img alt="" src="/icons/editicon.svg" />
            </div>
            <div
              className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer"
              onClick={handleRemove}
            >
              <img alt="" src="/icons/trashcanicon.svg" />
            </div>
          </div>
          <EditProgramModal
            showCreateProgramModal={showCreateProgramModal}
            handleCreateProgramModal={handleCreateProgramModal}
            pName={name}
            pType={type}
            pDescription={description}
            pTags={tags[0]}
            pDuration={Number(duree)}
            id={id}
          />
        </div>
      )}
    </>
  );
};

export default ProgramsTableRow;

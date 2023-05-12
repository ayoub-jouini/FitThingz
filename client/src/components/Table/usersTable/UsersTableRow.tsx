import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";

interface Props {
  avatar: string;
  name: string;
  phone: string;
  adress: string;
  date: string;
  id: string;
}

const UserTableRow: React.FC<Props> = (props) => {
  const { avatar, name, phone, adress, date, id } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const validAthlete = async () => {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/sportif/accept/${id}`,
      {},
      {
        headers: {
          authorization: "Bearer " + auth.accessToken,
        },
      }
    );
  };

  const deleteAthlete = () => {};

  return (
    <div className="w-full h-24 flex justify-between items-center content-center border-b-2">
      <Link
        className="grid grid-cols-5 gap-5 content-center w-11/12"
        href={`/dashboard/coach/athletes/${id}`}
      >
        <div className="">
          <div
            className="h-8 w-8 bg-cover"
            style={{ backgroundImage: `url(${avatar})` }}
          />
        </div>
        <div className="text-textPrimary break-words">{name}</div>
        <div className="text-textPrimary break-words">{phone}</div>
        <div className="text-textPrimary break-words">{adress}</div>
        <div className="text-textPrimary break-words">{date}</div>
      </Link>
      <div className="flex ">
        <div
          onClick={validAthlete}
          className="cursor-pointer w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2"
        >
          <img alt="" src="/icons/validicon.svg" />
        </div>
        <div
          onClick={deleteAthlete}
          className="cursor-pointer w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2"
        >
          <img alt="" src="/icons/deleteicon.svg" />
        </div>
      </div>
    </div>
  );
};

export default UserTableRow;

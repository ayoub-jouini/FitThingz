import Link from "next/link";

interface Props {
  avatar: string;
  name: string;
  phone: string;
  adress: string;
  date: string;
  id: string;
}

const CoachCard: React.FC<Props> = (props) => {
  const { avatar, name, phone, adress, date, id } = props;
  return (
    <Link
      href={`/dashboard/athlete/coaches/${id}`}
      className="py-5 h-64 w-56 shadow rounded-[45px] flex flex-col justify-between items-center"
    >
      <div
        className="bg-cover w-20 h-20 "
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="flex flex-col justify-between items-center h-1/2">
        <p className="text-lg text-textPrimary">{name}</p>
        <p className="text-l text-grixSecondary">Coach</p>
        <div className="flex">
          <img className="mx-1 w-4" alt="" src="/icons/containedstar.svg" />
          <img className="mx-1 w-4" alt="" src="/icons/containedstar.svg" />
          <img className="mx-1 w-4" alt="" src="/icons/containedstar.svg" />
          <img className="mx-1 w-4" alt="" src="/icons/containedstar.svg" />
          <img className="mx-1 w-4" alt="" src="/icons/outlinedstar.svg" />
        </div>
      </div>
    </Link>
  );
};

export default CoachCard;

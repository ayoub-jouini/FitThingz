interface Props {
  avatar: string;
  name: string;
  phone: string;
  adress: string;
  date: string;
}

const UsresTableRow: React.FC<Props> = (props) => {
  const { avatar, name, phone, adress, date } = props;
  return (
    <div className="w-full h-24 grid grid-cols-6 content-center border-b-2">
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
      <div className="flex ">
        <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
          <img alt="" src="/icons/eyeicon.svg" />
        </div>
        <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
          <img alt="" src="/icons/trashcanicon.svg" />
        </div>
      </div>
    </div>
  );
};

export default UsresTableRow;

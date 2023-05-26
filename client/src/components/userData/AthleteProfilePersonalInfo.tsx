interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: string;
  gender: string;
  birthDay: string;
  showEdit: boolean;
}

const AthleteProfilePersonalInfo: React.FC<Props> = (props) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    adress,
    gender,
    birthDay,
    showEdit,
  } = props;

  return (
    <div
      className={`w-full border-2 border-grisPrimary rounded-[45px] flex-col items-center px-20 py-7 ${
        !showEdit ? "flex" : "hidden"
      }`}
    >
      <div className="flex justify-between w-2/3">
        <div className="">
          <div className="flex my-6">
            <p className="text-xl text-textPrimary">First name :</p>
            <p className="text-xl text-grixSecondary mx-3">{firstName}</p>
          </div>
          <div className="flex my-6">
            <p className="text-xl text-textPrimary">Password :</p>
            <p className="text-xl text-grixSecondary mx-3">***********</p>
          </div>
          <div className="flex my-6">
            <p className="text-xl text-textPrimary">Gender :</p>
            <p className="text-xl text-grixSecondary mx-3">{gender}</p>
          </div>
        </div>
        <div className="">
          <div className="flex my-6">
            <p className="text-xl text-textPrimary">Last name :</p>
            <p className="text-xl text-grixSecondary mx-3">{lastName}</p>
          </div>
          <div className="flex my-6">
            <p className="text-xl text-textPrimary">date of birth :</p>
            <p className="text-xl text-grixSecondary mx-3">{birthDay}</p>
          </div>
          <div className="flex my-6">
            <p className="text-xl text-textPrimary">phone :</p>
            <p className="text-xl text-grixSecondary mx-3">{phone}</p>
          </div>
        </div>
      </div>
      <div className="flex w-2/3">
        <p className="text-xl text-textPrimary">Email :</p>
        <p className="text-xl text-grixSecondary mx-3">{email}</p>
      </div>
    </div>
  );
};

export default AthleteProfilePersonalInfo;

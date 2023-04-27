interface Props {}

const UserData: React.FC<Props> = (props) => {
  return (
    <div className="h-44 border-2 border-grisPrimary rounded-[45px] grid grid-cols-2 py-5 px-20 gap-20">
      <div className="border-r-2 border-grisPrimary flex justify-between items-center">
        <div
          className="bg-cover rounded-full h-24 w-24"
          style={{ backgroundImage: "url(/images/Group11234.png)" }}
        />
        <div className="w-9/12">
          <p className="text-lg text-textPrimary">Foulen el Fouleni</p>
          <p className="text-l text-grixSecondary">Sportif</p>
        </div>
      </div>
      <div className="h-full">
        <div className="h-full flex items-start flex-col justify-between">
          <div className="inline-flex items-center border-2 border-grisPrimary p-1 px-2 rounded-[12px] ">
            <img alt="" src="/icons/mailicon.svg" className="h-4 pr-2" />
            <p className="text-textPrimary text-l">Mail :</p>
            <p className="text-grixSecondary text-l px-5">
              Foulenelfouli@gmail.com
            </p>
          </div>
          <div className="inline-flex items-center border-2 border-grisPrimary p-1 px-2 rounded-[12px]">
            <img alt="" src="/icons/phoneicon.svg" className="h-5 pr-2" />
            <p className="text-textPrimary text-l">Phone :</p>
            <p className="text-grixSecondary text-l px-5">28726042</p>
          </div>
          <div className="inline-flex items-center border-2 border-grisPrimary p-1 px-2 rounded-[12px]">
            <img alt="" src="/icons/agendaicon.svg" className="h-5 pr-2" />
            <p className="text-textPrimary text-l">Date joined :</p>
            <p className="text-grixSecondary text-l px-5">2/4/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;

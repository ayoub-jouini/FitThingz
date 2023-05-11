"use client";

import CoachesTableRow from "./CoachesTableRow";

interface Props {
  coaches: any;
}

const CoachesTable: React.FC<Props> = (props) => {
  const { coaches } = props;

  return (
    <div className="">
      <div className="shadow rounded-[45px] px-10 flex flex-col justify-center items-center h-24">
        <p className="text-xl text-primary">{coaches.length}</p>
        <p className="text-sm text-textPrimary">Total Clients</p>
      </div>
      <div className=" ">
        <div className="w-full grid grid-cols-6 px-10 h-24 content-center">
          <div className=""></div>
          <div className="text-textPrimary">Name</div>
          <div className="text-textPrimary">Phone</div>
          <div className="text-textPrimary">Adress</div>
          <div className="text-textPrimary">Date joined</div>
          <div className=""></div>
        </div>
        <div className="shadow rounded-[45px] px-10">
          {coaches.map((data: any, key: any) => (
            <CoachesTableRow
              key={key}
              avatar={data.user.avatar}
              name={`${data.user.prenom} ${data.user.nom}`}
              phone={data.user.phone}
              adress={data.user.email}
              date={data.user.datejoined.substring(0, 9)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachesTable;

"use client";

import CoachesRequestsTableRow from "./CoachesRequestsTableRow";

interface Props {
  coaches: any;
}

const CoachesRequestsTable: React.FC<Props> = (props) => {
  const { coaches } = props;

  return (
    <div className="">
      <div className="shadow rounded-[45px] px-10 flex flex-col justify-center items-center h-24">
        <p className="text-xl text-primary">{coaches.length}</p>
        <p className="text-sm text-textPrimary">Total Requests</p>
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
            <CoachesRequestsTableRow
              key={key}
              id={data._id}
              avatar={data.user.avatar}
              name={`${data.user.prenom} ${data.user.nom}`}
              phone={data.user.phone}
              adress={data.user.email}
              date={data.user.datejoined.substring(0, 9)}
              cin={data.identite}
              college={data.conn_aca}
              diploma={data.experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachesRequestsTable;

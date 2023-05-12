"use client";

import CoachCard from "./CoachCard";

interface Props {
  coaches: any;
}

const CoachesGrid: React.FC<Props> = (props) => {
  const { coaches } = props;

  return (
    <div className="p-10 grid grid-cols-4 gap-5 ">
      {coaches.map((data: any, key: any) => (
        <CoachCard
          key={key}
          id={data._id}
          avatar={data.user.avatar}
          name={`${data.user.prenom} ${data.user.nom}`}
          phone={data.user.phone}
          adress={data.user.email}
          date={data.user.datejoined.substring(0, 9)}
        />
      ))}
    </div>
  );
};

export default CoachesGrid;

import UsresTableRow from "./UsersTableRow";

interface Props {}

const tableData = [
  {
    avatar: "/images/Group11234.png",
    name: "Foulen el Fouleni",
    phone: "28726042",
    adress: "Foulenelfouli@gmail.com",
    date: "2/4/2023",
  },
  {
    avatar: "/images/Group11234.png",
    name: "Foulen el Fouleni",
    phone: "28726042",
    adress: "Foulenelfouli@gmail.com",
    date: "2/4/2023",
  },
  {
    avatar: "/images/Group11234.png",
    name: "Foulen el Fouleni",
    phone: "28726042",
    adress: "Foulenelfouli@gmail.com",
    date: "2/4/2023",
  },
];

const UsersTable: React.FC<Props> = (props) => {
  return (
    <div className="mx-5">
      <div className="shadow rounded-[45px] px-10 flex flex-col justify-center items-center h-24">
        <p className="text-xl text-primary">{tableData.length}</p>
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
          {tableData.map((data, key) => (
            <UsresTableRow
              key={key}
              avatar={data.avatar}
              name={data.name}
              phone={data.phone}
              adress={data.adress}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

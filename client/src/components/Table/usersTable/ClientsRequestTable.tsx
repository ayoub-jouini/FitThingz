"use client";

import Link from "next/link";
import UsresTableRow from "./UsersTableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

interface Props {}

const ClientsRequestTable: React.FC<Props> = (props) => {
  const auth: any = useSelector((state: any) => state.auth);

  const [tableData, setTableData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/sportifs/`,
          {
            headers: {
              authorization: "Bearer " + auth.accessToken,
            },
          }
        );
        setTableData(response.data.sportifs);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="">
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
          {tableData.map((data: any, key: any) => (
            <Link href={`/dashboard/coach/athletes/${data.id}`}>
              <UsresTableRow
                key={key}
                avatar={data.avatar}
                name={data.name}
                phone={data.phone}
                adress={data.adress}
                date={data.date}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsRequestTable;

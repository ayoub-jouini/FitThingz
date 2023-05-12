"use client";

import ClientRequestTableRow from "./ClientsRequestTableRow";
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
        {tableData && (
          <p className="text-xl text-primary">{tableData.length}</p>
        )}
        <p className="text-sm text-textPrimary">Total Clients</p>
      </div>
      <div className=" ">
        <div className="w-full  px-10 h-24 content-center flex justify-between items-center">
          <div className="grid grid-cols-5 gap-5 w-11/12">
            <div className=""></div>
            <div className="text-textPrimary">Name</div>
            <div className="text-textPrimary">Phone</div>
            <div className="text-textPrimary">Adress</div>
            <div className="text-textPrimary">Date joined</div>
          </div>
          <div className="w-1/12"></div>
        </div>
        <div className="shadow rounded-[45px] px-10">
          {tableData &&
            tableData.map((data: any, key: any) => (
              <ClientRequestTableRow
                tableData={tableData}
                setTableData={setTableData}
                key={key}
                avatar={data.avatar}
                name={`${data.prenom} ${data.nom}`}
                phone={data.phone}
                adress={data.email}
                date={data.datejoined.substring(0, 9)}
                id={data._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsRequestTable;

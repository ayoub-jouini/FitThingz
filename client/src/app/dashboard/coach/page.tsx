"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CoachDashboard() {
  let auth: any = useSelector((state: any) => state.auth);

  const [statistics, setStatistics] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/statistics/${auth.id}`,
      };

      try {
        const response = await axios.request(options);
        setStatistics(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="">
      {statistics && (
        <div className="grid grid-cols-3 gap-5">
          <div className="h-[500px] grid grid-rows-2 gap-5">
            <div className="rounded-[45px] border-2 border-grisPrimary p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base">Total programs</p>
                <div className="rounded-full border-2 border-primary p-5">
                  <img src="/icons/programsprimary.svg" alt="" />
                </div>
              </div>
              <p className="text-xl mb-5">{statistics.programmes} programs</p>
              <div className="flex justify-between items-center">
                <p className="text-sm">See all programs</p>
                <Link href="">
                  <img
                    className="rotate-180 w-7"
                    alt=""
                    src="/icons/arrow.svg"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-[45px] border-2 border-grisPrimary p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base">Total exercices</p>
                <div className="rounded-full border-2 border-primary p-4">
                  <img src="/icons/exercicePrimary.svg" alt="" />
                </div>
              </div>
              <p className="text-xl mb-5">{statistics.exercices} exercises</p>
              <div className="flex justify-between items-center">
                <p className="text-sm">See all exercises</p>
                <Link href="">
                  <img
                    className="rotate-180 w-7"
                    alt=""
                    src="/icons/arrow.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[500px] rounded-[45px] border-2 border-grisPrimary p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base">Total clients</p>
              <div className="rounded-full border-2 border-primary p-5">
                <img src="/icons/clientprimary.svg" alt="" />
              </div>
            </div>
            <p className="text-xl mb-5">{statistics.sportifs} clients</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">See all clients</p>
              <Link href="">
                <img className="rotate-180 w-7" alt="" src="/icons/arrow.svg" />
              </Link>
            </div>
          </div>
          <div className="h-[500px] rounded-[45px] border-2 border-grisPrimary p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base">Total diets</p>
              <div className="rounded-full border-2 border-primary p-5">
                <img src="/icons/nutritionprimary.svg" alt="" />
              </div>
            </div>
            <p className="text-xl mb-5">{statistics.regimes} diets</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">See all diets</p>
              <Link href="">
                <img className="rotate-180 w-7" alt="" src="/icons/arrow.svg" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

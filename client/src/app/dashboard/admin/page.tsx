import axios from "axios";
import Link from "next/link";

const getData = async () => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/user/statistic`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function AdminDashboard() {
  const statistics = await getData();

  return (
    <div className="">
      {statistics?.data && (
        <div className="grid grid-cols-3 gap-5">
          <div className="h-[500px] grid grid-rows-2 gap-5">
            <div className="rounded-[45px] border-2 border-grisPrimary p-5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base">Total programs</p>
                <div className="rounded-full border-2 border-primary p-5">
                  <img src="/icons/programsprimary.svg" alt="" />
                </div>
              </div>
              <p className="text-xl mb-5">
                {statistics.data.data.programmes} programs
              </p>
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
                <p className="font-semibold text-base">Total diets</p>
                <div className="rounded-full border-2 border-primary p-5">
                  <img src="/icons/nutritionprimary.svg" alt="" />
                </div>
              </div>
              <p className="text-xl mb-5">
                {statistics.data.data.regimes} diets
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm">See all diets</p>
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
              <p className="font-semibold text-base">Total coaches</p>
              <div className="rounded-full border-2 border-primary p-5">
                <img src="/icons/clientprimary.svg" alt="" />
              </div>
            </div>
            <p className="text-xl mb-5">
              {statistics.data.data.coaches} coachs
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm">See all coachs</p>
              <Link href="">
                <img className="rotate-180 w-7" alt="" src="/icons/arrow.svg" />
              </Link>
            </div>
          </div>
          <div className="h-[500px] rounded-[45px] border-2 border-grisPrimary p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base">Total Athletes</p>
              <div className="rounded-full border-2 border-primary p-5">
                <img src="/icons/clientprimary.svg" alt="" />
              </div>
            </div>
            <p className="text-xl mb-5">
              {statistics.data.data.sportifs} athletes
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm">See all athletes</p>
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

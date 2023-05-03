import Link from "next/link";

export default function Day() {
  return (
    <div className="my-5">
      <div className="border-2 border-grisPrimary rounded-[45px] p-14">
        <div className="flex justify-between items-center my-5">
          <div className="w-1/12 flex items-center">
            <div className="border-2 border-grixSecondary rounded-full w-7 h-7" />
          </div>
          <Link href="http://localhost:3000/dashboard/coach/programs/64522452fb1ba7b373efc7bf/1/editexercises">
            <div className="border-2 border-grisPrimary rounded-[45px] flex p-14 justify-between items-center w-11/12">
              <div className="flex">
                <div className="text-l border-2 border-primary rounded-[11px] px-2 text-textPrimary mx-5">
                  X2
                </div>
                <p className="text-l text-textPrimary">
                  One arm smith machin row
                </p>
              </div>
              <p className="text-l text-primary">Watch video</p>
              <div className="flex ">
                <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
                  <img alt="" src="/icons/editicon.svg" />
                </div>
                <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
                  <img alt="" src="/icons/trashcanicon.svg" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

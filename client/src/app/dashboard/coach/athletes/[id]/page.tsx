function SingleAthlete() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-10">
        <div className="h-48 border-2 border-grisPrimary rounded-[45px] flex flex-col items-center">
          <p className="text-lg text-grixSecondary my-2">Weight</p>
          <div className="grid grid-cols-2 w-full items-center">
            <div className="border-r-2 border-grisPrimary flex justify-center items-center">
              <img className="" alt="" src="/icons/weighticon.svg" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-2xl text-primary">50 Kg</p>
            </div>
          </div>
        </div>
        <div className="h-48 border-2 border-grisPrimary rounded-[45px] flex flex-col items-center">
          <p className="text-lg text-grixSecondary my-2">Height</p>
          <div className="grid grid-cols-2 w-full items-center">
            <div className="border-r-2 border-grisPrimary flex justify-center items-center">
              <img className="" alt="" src="/icons/heighticon.svg" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-2xl text-primary">160 Cm</p>
            </div>
          </div>
        </div>
        <div className="h-48 border-2 border-grisPrimary rounded-[45px] p-5 px-7">
          <p className="text-lg text-grixSecondary mb-6">Allergies</p>
          <div className="grid grid-cols-2 w-full items-center gap-5 ">
            <div className="h-10 text-l text-primary border-2 border-primary flex justify-center items-center rounded-[25px]">
              Eggs
            </div>
            <div className="h-10 text-l text-primary border-2 border-primary flex justify-center items-center rounded-[25px]">
              Milk
            </div>
          </div>
        </div>
        <div className="h-48 border-2 border-grisPrimary rounded-[45px] "></div>
      </div>
    </div>
  );
}

export default SingleAthlete;

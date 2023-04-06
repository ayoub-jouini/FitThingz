import AthleteForm from "../../../components/forms/AthleteForm";

export default function Athlete() {
  return (
    <main className="flex justify-between">
      <div
        className="hidden w-1/2 h-screen bg-cover bg-no-repeat md:flex flex-col justify-center items-center bg-center"
        style={{ backgroundImage: "url(/images/BackgroundPage2.png)" }}
      >
        <div className="bg-tertiary rounded-3xl w-9/12 p-2 flex py-5 px-3 items-start my-2">
          <img alt="" src="/icons/Benefits.svg" className="" />
          <p className="font-medium	text-l ml-3">
            Access to top-quality coaching from experienced professionals.
          </p>
        </div>
        <div className="bg-tertiary rounded-3xl w-9/12 p-2 flex py-5 px-3 items-start my-2">
          <img alt="" src="/icons/Benefits.svg" className="" />
          <p className="font-medium	text-l ml-3">
            Increased motivation and accountability through regular check-ins
            and progress tracking
          </p>
        </div>
        <div className="bg-tertiary rounded-3xl w-9/12 p-2 flex py-5 px-3 items-start my-2">
          <img alt="" src="/icons/Benefits.svg" className="" />
          <p className="font-medium	text-l ml-3">
            Convenient and flexible scheduling options to accommodate busy
            lifestyles.
          </p>
        </div>
        <div className="bg-tertiary rounded-3xl w-9/12 p-2 flex py-5 px-3 items-start my-2">
          <img alt="" src="/icons/Benefits.svg" className="" />
          <p className="font-medium	text-l ml-3">
            A better understanding of nutrition and how it impacts athletic
            performance.
          </p>
        </div>
        <div className="absolute bottom-0 left-1">
          <img alt="" src="/images/tfolCoach.png" className="h-56" />
        </div>
      </div>
      <div className="w-screen h-screen md:w-1/2 flex flex-col items-center justify-center md:p-0 p-5 md:bg-none bg-signup bg-cover bg-center">
        <div className="text-center w-full md:w-2/3">
          <h1 className="font-semibold text-lg md:text-xl text-center text-textPrimary">
            Tell us more about you..
          </h1>
          <p className="my-6 text-sm md:text-base text-primary font-medium">
            We'd love to get to know you better!
          </p>
        </div>
        <AthleteForm />
      </div>
    </main>
  );
}

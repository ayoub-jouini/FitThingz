import SignupForm from "../../components/forms/SignupForm";

export default function Signup() {
  return (
    <main className="flex justify-between">
      <div
        className="hidden w-1/3 h-screen bg-contain bg-no-repeat md:flex flex-col justify-center items-center"
        style={{ backgroundImage: "url(/images/BackgroundPage1.png)" }}
      >
        <div className="bg-tertiary rounded-2xl w-4/5 p-2 flex my-3">
          <img alt="" src="/icons/Benefits.svg" className="h-1/2 mr-2" />
          <p className="font-medium	text-base">
            Enhance your coaching skills and grow your client base with us.
          </p>
        </div>
        <div className="bg-tertiary rounded-2xl w-4/5 p-2 flex my-3">
          <img alt="" src="/icons/Benefits.svg" className="h-1/2 mr-2" />
          <p className="font-medium	text-base">
            Effortlessly manage your clients and their progress in one place.
          </p>
        </div>
        <div className="bg-tertiary rounded-2xl w-4/5 p-2 flex my-3">
          <img alt="" src="/icons/Benefits.svg" className="h-1/2 mr-2" />
          <p className="font-medium	text-base">
            Customize your programs to meet the needs and goals of each
            individual client.
          </p>
        </div>
        <div className="bg-tertiary rounded-2xl w-4/5 p-2 flex my-3">
          <img alt="" src="/icons/Benefits.svg" className="h-1/2 mr-2" />
          <p className="font-medium	text-base">
            Stay organized with all client information in one centralized
            platform
          </p>
        </div>
      </div>
      <div className="w-screen md:w-1/2 flex flex-col items-center justify-center md:p-0 p-5 md:bg-none bg-signup bg-cover bg-center">
        <div className="text-center w-full md:w-2/3">
          <h1 className="font-semibold text-lg md:text-xl text-center text-textPrimary">
            Become A <span className="text-primary"> Member</span> Of Our
            Coaching Network
          </h1>
          <p className="my-6 text-sm md:text-base text-textPrimary font-medium">
            And Help Your Clients Reach Their Fitness
            <span className="text-primary"> Goals!</span>
          </p>
        </div>
        <SignupForm />
        <p className="text-primary">1/3</p>
      </div>
    </main>
  );
}

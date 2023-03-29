import SignupForm from "../../components/forms/SignupForm";

export default function signup() {
  return (
    <main>
      <div></div>
      <div className="w-1/2 flex flex-col items-center">
        <div className="text-center w-2/3">
          <h1 className="font-semibold text-xl text-center text-textPrimary">
            Become A <span className="text-primary"> Member</span> Of Our
            Coaching Network
          </h1>
          <p className="my-6 text-base text-textPrimary font-medium">
            And Help Your Clients Reach Their Fitness
            <span className="text-primary"> Goals!</span>
          </p>
        </div>
        <SignupForm />
        <p>1/3</p>
      </div>
    </main>
  );
}

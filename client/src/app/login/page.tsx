import LoginForm from "../../components/forms/LoginForm";
import Container from "../../components/global/container/Container";

export default function login() {
  return (
    <main
      style={{ backgroundImage: "url(/images/Backgroundsignup1.png)" }}
      className="h-screen bg-cover bg-no-repeat bg-bottom py-5"
    >
      <Container>
        <div className="flex justify-between items-center">
          <img alt="" src="/icons/logo.svg" className="w-10 md:w-14" />
          <p className="flex md:hidden font-medium text-primary text-sm">
            Go to home page
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="md:bg-tertiary md:w-2/3 xl:w-1/3 md:border-2 border-primary rounded-3xl py-4 md:py-14 my-5 md:my-10 flex flex-col items-center">
            <div className="mb-5">
              <h1 className="text-2xl md:text-3xl font-semibold text-center text-primary">
                Welcome back!
              </h1>
              <p className="text-lg md:text-xl font-medium text-center text-textPrimary">
                It's great to see you again.
              </p>
            </div>
            <LoginForm />
            <p className="">
              Dont have an account ?
              <span className="font-semibold">sign up now!</span>
            </p>
          </div>
        </div>
      </Container>
      <div className="flex w-full md:h-96 h-48 justify-between md:-mt-48">
        <img alt="" src="/images/tfol.png" className="" />
        <img alt="" src="/images/tofla.png" className="" />
      </div>
    </main>
  );
}

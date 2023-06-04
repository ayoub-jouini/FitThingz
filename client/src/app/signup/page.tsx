import Container from "../../components/global/container/Container";
import SignupForm from "../../components/forms/SignupForm";
import Link from "next/link";

export default function Signup() {
  return (
    <main
      style={{ backgroundImage: "url(/images/backgroundsignup1.png)" }}
      className=" h-screen bg-cover bg-no-repeat bg-bottom py-5"
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <img alt="" src="/icons/logo.svg" className="w-10 md:w-14" />
          </Link>
          <p className="flex md:hidden font-medium text-primary text-sm">
            Go to home page
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="md:bg-tertiary xl:w-6/12 md:w-2/3 md:border-2 border-primary rounded-3xl py-4 md:py-14 my-5 md:my-10 flex flex-col items-center">
            <div className="mb-5">
              <h1 className="text-2xl md:text-2xl font-semibold text-center text-primary">
                Let's Get Started
              </h1>
              <p className="text-l md:text-l font-medium text-center text-textPrimary">
                Join the Fitness Revolution: Sign Up Today!
              </p>
            </div>
            <SignupForm />
            <p className="">
              already have an account ?
              <Link href="/login">
                <span className="font-semibold">sign in!</span>
              </Link>
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

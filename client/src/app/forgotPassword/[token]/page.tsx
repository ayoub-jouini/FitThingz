import ForgotPasswordForm from "../../../components/forms/forgotPasswordForm";
import Container from "../../../components/global/container/Container";

export default function ForgotPassword() {
  return (
    <main
      style={{ backgroundImage: "url(/images/Backgroundsignup1.png)" }}
      className=" h-screen bg-cover bg-no-repeat bg-bottom py-5"
    >
      <Container>
        <div className="flex justify-between items-center">
          <img alt="" src="/icons/logo.svg" className="w-10 md:w-14" />
          <p className="flex md:hidden font-medium text-primary text-sm">
            Go to home page
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="md:bg-tertiary md:w-3/5 md:border-2 border-primary rounded-[55px] py-4 md:py-14 my-5 md:my-10 flex flex-col items-center">
            <div className="mb-5 flex flex-col items-center ">
              <h1 className="text-2xl my-4 md:text-3xl font-semibold text-center text-primary">
                New Password
              </h1>
              <p className="w-2/3 text-lg md:text-base font-normal text-center text-textPrimary">
                Set the new password for your account so you can login and
                access all featuress.
              </p>
            </div>
            <ForgotPasswordForm />
          </div>
        </div>
      </Container>
    </main>
  );
}

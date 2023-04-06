"use client";

interface Props {
  showModal: boolean;
  setShowModal: any;
}

const SignupModal: React.FC<Props> = (props) => {
  const { showModal, setShowModal } = props;

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-screen h-screen">
              {/*content*/}
              <div
                style={{ backgroundImage: "url(/images/backgroundsignup.png)" }}
                className="border-0 bg-cover bg-tertiary shadow-lg relative flex flex-col w-full min-h-screen outline-none focus:outline-none "
              >
                <div className="my-10 mt-20">
                  <div className="flex items-center justify-center">
                    <p className="text-5xl text-textPrimary font-semibold">
                      Welcome to
                    </p>
                    <img
                      alt=""
                      src="/icons/logo2.png"
                      className="h-12 mx-5 -mb-3"
                    />
                  </div>
                  <p className="text-center text-5xl text-textPrimary">
                    I am...
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="border-2 border-primary bg-tertiary rounded-[81px] w-[440px] h-[440px] mx-10 flex flex-col justify-center items-center">
                    <img alt="" src="/icons/coach.svg" className="h-32" />
                    <p className="font-semibold text-3xl text-textPrimary">
                      A Coach
                    </p>
                  </div>
                  <div className="border-2 border-primary bg-tertiary rounded-[81px] w-[440px] h-[440px] mx-10 flex flex-col justify-center items-center">
                    <img alt="" src="/icons/Sportif.svg" className="h-32" />
                    <p className="font-semibold text-3xl text-textPrimary">
                      An Athlete
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default SignupModal;

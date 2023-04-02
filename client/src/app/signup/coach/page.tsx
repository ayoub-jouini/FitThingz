export default function TellUsMore() {
  return (
    <main className="flex justify-between">
      <div
        className="hidden w-1/2 h-screen bg-cover bg-no-repeat md:flex justify-center items-center bg-center"
        style={{ backgroundImage: "url(/images/BackgroundPage2.png)" }}
      >
        <div className="bg-tertiary rounded-3xl w-9/12 p-2 flex py-16 px-3">
          <p className="font-medium	text-xl text-center">
            As part of our
            <span className="text-primary">platform's safety</span> and
            <span className="text-primary">quality measures</span>, we require
            <span className="text-primary">all coaches</span>
            to submit their legal documents for
            <span className="text-primary">verification</span>. This ensures
            that our clients are working with legitimate and
            <span className="text-primary">qualified</span>
            professionals, giving
            <span className="text-primary">them peace</span> of mind and
            <span className="text-primary">trust</span> in our platform.
          </p>
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

        <p className="text-primary">3/3</p>
      </div>
    </main>
  );
}

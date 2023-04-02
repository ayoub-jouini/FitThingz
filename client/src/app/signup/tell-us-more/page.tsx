import TellUsMoreForm from "../../../components/forms/TellUsMoreForm";

export default function TellUsMore() {
  return (
    <main className="flex justify-between">
      <div
        className="hidden w-1/2 h-screen bg-cover bg-no-repeat md:flex justify-center items-center bg-center"
        style={{ backgroundImage: "url(/images/BackgroundPage2.png)" }}
      >
        <div className="bg-tertiary rounded-3xl w-9/12 p-2 flex py-10 px-3">
          <p className="font-medium	text-2xl text-center">
            You have <span className="text-primary">the power</span> to make a
            <span className="text-primary">positive</span> impact on people's
            lives through your <span className="text-primary">coaching</span>,
            and we're here to help you
            <span className="text-primary">reach</span> your
            <span className="text-primary">full potential</span>.
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
        <TellUsMoreForm />
        <p className="text-primary">2/3</p>
      </div>
    </main>
  );
}

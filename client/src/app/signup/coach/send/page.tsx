"use client";

import Button from "../../../../components/global/button/Button";

export default function Send() {
  const handleButton = () => {};
  return (
    <main
      className="bg-cover h-screen bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url(/images/Backgroundsignup.png)" }}
    >
      <h1 className="text-2xl md:text-4xl text-textPrimary font-semibold">
        Wait for us!
      </h1>
      <div className="bg-tertiary w-2/3 border-2 border-primary rounded-3xl py-4 px-2 md:p-14 my-10">
        <p className="text-textPrimary font-semibold text-base md:text-2xl leading-relaxed text-center">
          <span className="text-primary">Thank you</span> for submitting your
          legal papers for
          <span className="text-primary">verification</span>. Our team will
          review your documents as soon as possible. Once your documents are{" "}
          <span className="text-primary">verified</span>, we will send you an{" "}
          <span className="text-primary">invitation email</span> with login
          details to
          <span className="text-primary">access our platform</span>.
        </p>
      </div>
      <div className="md:flex hidden">
        <Button
          handleButton={handleButton}
          text="Go to home page"
          type="button"
          size="xl"
        />
      </div>
      <div className="md:hidden flex">
        <Button
          handleButton={handleButton}
          text="Go to home page"
          type="button"
          size="s"
        />
      </div>
    </main>
  );
}

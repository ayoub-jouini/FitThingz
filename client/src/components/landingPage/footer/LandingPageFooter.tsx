const LandingPageFooter: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-around h-48 -mt-16">
      <img className="" alt="" src="/icons/logo2.png" />
      <p className="font-normal	text-lg text-textPrimary">
        Take Your Fitness Journey To The Next Level With Our All-In-One Sports
        Platform.
      </p>
      <div className="flex justify-between w-52">
        <a href="">
          <img className="" alt="" src="icons/Youtube.svg" />
        </a>
        <a href="">
          <img className="" alt="" src="icons/Linkedin.svg" />
        </a>
        <a href="">
          <img className="" alt="" src="icons/Facebook.svg" />
        </a>
        <a href="">
          <img className="" alt="" src="icons/Insta.svg" />
        </a>
      </div>
    </div>
  );
};

export default LandingPageFooter;

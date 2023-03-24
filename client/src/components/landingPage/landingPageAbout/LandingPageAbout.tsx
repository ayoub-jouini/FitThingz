import Container from "../../global/container/Container";

const LandingPageAbout: React.FC = () => {
  return (
    <div className="bg-primary -mt-1 py-10">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-end z-10">
            <img alt="" src="images/TheMan.png" />
          </div>
          <div className="w-7/12 flex flex-col items-center justify-center text-justify">
            <h2 className="font-bold text-3xl text-tertiary mb-10">
              All-In-One Sports Platform.
            </h2>
            <p className="font-medium text-lg text-tertiary mb-10">
              Welcome to our comprehensive sports platform, where athletes,
              coaches, and gyms come together to revolutionize the way we
              approach fitness. Our platform offers athletes the ability to
              connect with coaches and gyms from around the world, allowing them
              to find the perfect fit for their training and nutrition needs.
            </p>
          </div>
          <div className="flex items-end z-10">
            <img alt="" src="images/TheWomen.png" />
          </div>
        </div>
      </Container>
      <img alt="" src="images/Khatmet9ata32.png" className="-mt-20 w-full" />
    </div>
  );
};

export default LandingPageAbout;

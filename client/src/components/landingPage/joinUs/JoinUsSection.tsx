import Container from "../../global/container/Container";

const JoinUsSection: React.FC = () => {
  return (
    <div className="bg-primary py-10">
      <Container>
        <div className="flex justify-center items-center">
          <img alt="" src="" />
          <h3 className="font-bold text-3xl text-tertiary mb-10">
            You Can Join us
          </h3>
          <img alt="" src="" />
        </div>
        <div className="flex justify-between my-10">
          <div className="w-96 h-36 bg-tertiary rounded-3xl flex justify-center items-center">
            <img className="" alt="" src="" />
            <h4 className="font-bold text-xl text-center text-textPrimary">
              Gym Owner
            </h4>
          </div>
          <div className="w-96 h-36 bg-tertiary rounded-3xl flex justify-center items-center">
            <img className="" alt="" src="" />
            <h4 className="font-bold text-xl text-center text-textPrimary">
              Coach
            </h4>
          </div>
          <div className="w-96 h-36 bg-tertiary rounded-3xl flex justify-center items-center">
            <img className="" alt="" src="" />
            <h4 className="font-bold text-xl text-center text-textPrimary">
              Athletes
            </h4>
          </div>
        </div>
      </Container>
      <img alt="" src="images/Khatmet9ata31.png" className=" w-full" />
    </div>
  );
};

export default JoinUsSection;

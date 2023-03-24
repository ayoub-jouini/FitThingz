import Container from "../../global/container/Container";

const Features: React.FC = () => {
  return (
    <div className="bg-primary py-10">
      <Container>
        <div className="flex justify-between">
          <div className="w-72 h-64	bg-tertiary rounded-3xl flex items-center justify-center">
            <img
              className="absolute -mt-44 w-96"
              alt=""
              src="images/MetreUp.png"
            />
            <h4 className="font-bold text-xl text-center w-4/6 text-textPrimary">
              Personalized nutrition plans
            </h4>
            <img
              className="absolute -mb-28 w-96"
              alt=""
              src="images/MetreDown.png"
            />
          </div>
          <div className="w-72 h-64	bg-tertiary rounded-3xl flex items-center justify-center">
            <img
              className="absolute -mt-56 -mr-48"
              alt=""
              src="images/weight.png"
            />
            <h4 className="font-bold text-xl text-center w-4/6 text-textPrimary">
              Customized workouts
            </h4>
            <img
              className="absolute -mb-48 -ml-48"
              alt=""
              src="images/Groupofweights.png"
            />
          </div>
          <div className="w-72 h-64	bg-tertiary rounded-3xl flex items-center justify-center">
            <img
              className="absolute -mt-60 -mr-48"
              alt=""
              src="images/sportCord.png"
            />
            <h4 className="font-bold text-xl text-center w-4/6 text-textPrimary">
              find Gym and Coach
            </h4>
            <img
              className="absolute -mb-56 -ml-48"
              alt=""
              src="images/sportsMat.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;

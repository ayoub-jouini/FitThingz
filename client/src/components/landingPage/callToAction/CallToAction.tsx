import Container from "../../global/container/Container";
import CallToActionButtons from "./CallToActionButtons";

const CallToAction: React.FC = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-12 pb-28">
        <div className="w-3/6">
          <h1 className="font-bold text-6xl text-primary mb-4">
            Join The Winning Team Today!
          </h1>
          <p className="font-normal text-2xl text-textPrimary mb-10">
            Take Your Fitness Journey To The Next Level With Our All-In-One
            Sports Platform.
          </p>
          <CallToActionButtons />
        </div>
        <img alt="" src="images/ManAndWomen.png" />
      </div>
    </Container>
  );
};

export default CallToAction;

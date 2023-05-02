interface Props {}

const ProgramHeader: React.FC<Props> = (props) => {
  return (
    <div className="">
      <h1 className="text-primary text-2xl text-center my-10">Fit And Firm</h1>
      <div className="border-2 border-grisPrimary p-10 rounded-[45px]">
        <p className="text-l text-grixSecondary">
          Our lose weight program is designed to help you shed those extra
          pounds and achieve your desired body weight. With a combination of
          tailored exercise routines and personalized meal plans for 16 weeks.
          will guide you through each step of the program, providing support and
          motivation along the way. Start your journey towards a healthier and
          happier you today!
        </p>
      </div>
    </div>
  );
};

export default ProgramHeader;

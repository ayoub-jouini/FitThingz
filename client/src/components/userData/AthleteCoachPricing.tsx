interface Props {
  title: string;
  description: string;
  duration: number;
  price: number;
  promo: string;
}

const AtheleteCoachPricing: React.FC<Props> = (props) => {
  const { title, description, duration, price, promo } = props;

  return (
    <div className={`flex flex-col items-center h-full  w-full`}>
      <div className="flex justify-between items-center">
        <p className="text-textPrimary text-base mx-4">{title}</p>
      </div>
      <div className="text-grixSecondary text-sm my-5">{description}</div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex">
          <p className="text-l text-primary font-medium">Duration : </p>
          <p className="text-l text-grixSecondary mx-2"> {duration}</p>
        </div>
        <div className="flex">
          <p className="text-l text-primary font-medium">Price : </p>
          <p className="text-l text-grixSecondary mx-2"> {price} Dt</p>
        </div>
        <div className="flex">
          <p className="text-l text-primary font-medium">Promo : </p>
          <p className="text-l text-grixSecondary mx-2"> {promo}</p>
        </div>
      </div>
    </div>
  );
};

export default AtheleteCoachPricing;

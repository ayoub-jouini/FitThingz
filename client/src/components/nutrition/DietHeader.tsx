import Link from "next/link";

interface Props {
  days: number;
  selectedDay: number;
  diet: string;
  day: string;
  title: string;
  description: string;
}

const dayElements = (nb: number, diet: string, selectedDay: number) => {
  let elements = [];
  for (let i = 0; i < nb; i++) {
    elements.push(
      <Link
        href={`/dashboard/coach/nutrition/${diet}/${i + 1}`}
        key={i}
        className={` rounded-[45px] h-full min-w-[96px] text-center flex justify-center items-center ${
          selectedDay == i + 1 ? "border-primary border-2" : "border-0"
        }`}
      >
        D-{i + 1}
      </Link>
    );
  }
  return elements;
};

const DietHeader: React.FC<Props> = (props) => {
  const { days, selectedDay, diet, day, title, description } = props;

  const elements = dayElements(days, diet, selectedDay);

  return (
    <div className="">
      <div className="grid grid-cols-3 items-center">
        <div className=""></div>
        <h1 className="text-primary text-2xl text-center my-10">{title} </h1>
        <Link
          href={`/dashboard/coach/nutrition/${diet}/${day}/editdiet`}
          className={`justify-self-end flex rounded-xl text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base justify-center items-center `}
        >
          <img alt="" src="/icons/editicon.svg" className="mx-2" />
          <p className="mx-2">Edit</p>
        </Link>
      </div>
      <div className="border-2 border-grisPrimary p-10 rounded-[45px]">
        <p className="text-l text-grixSecondary">{description}</p>
      </div>
      <div className="border-2 border-grisPrimary rounded-[45px] w-full h-16 my-10 flex justify-between items-center px-5">
        <img alt="" src="/icons/blackArrow.svg" />
        <div className="h-full flex justify-start w-[95%] overflow-x-scroll scrollbar-hide">
          {elements}
        </div>
        <img alt="" src="/icons/blackArrow.svg" className="rotate-180" />
      </div>
    </div>
  );
};

export default DietHeader;

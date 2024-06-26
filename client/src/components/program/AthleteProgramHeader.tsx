import Link from "next/link";

interface Props {
  days: number;
  selectedDay: number;
  program: string;
  day: string;
  title: string;
  description: string;
}

const dayElements = (nb: number, program: string, selectedDay: number) => {
  let elements = [];
  for (let i = 0; i < nb; i++) {
    elements.push(
      <Link
        href={`/dashboard/coach/programs/${program}/${i + 1}`}
        key={i}
        className={` rounded-[45px] h-full min-w-[6rem] text-center flex justify-center items-center ${
          selectedDay == i + 1 ? "border-primary border-2" : "border-0"
        }`}
      >
        D-{i + 1}
      </Link>
    );
  }
  return elements;
};

const AthleteProgramHeader: React.FC<Props> = (props) => {
  const { days, selectedDay, program, day, title, description } = props;

  const elements = dayElements(days, program, selectedDay);

  return (
    <div className="">
      <div className="grid grid-cols-3 items-center">
        <div className=""></div>
        <h1 className="text-primary text-2xl text-center my-10">{title}</h1>
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

export default AthleteProgramHeader;

interface Props {
  number: string;
  title: string;
}

const ExerciseItem: React.FC<Props> = (props) => {
  const { number, title } = props;

  return (
    <div className="flex justify-between items-center my-5">
      <div className="w-1/12 flex items-center">
        <div className="border-2 border-grixSecondary rounded-full w-7 h-7" />
      </div>
      <div className="border-2 border-grisPrimary rounded-[45px] flex p-14 justify-between items-center w-11/12">
        <div className="flex">
          <div className="text-l border-2 border-primary rounded-[11px] px-2 text-textPrimary mx-5">
            X{number}
          </div>
          <p className="text-l text-textPrimary">{title}</p>
        </div>
        <p className="text-l text-primary">Watch video</p>
        <div className="flex ">
          <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
            <img alt="" src="/icons/editicon.svg" />
          </div>
          <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
            <img alt="" src="/icons/trashcanicon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;

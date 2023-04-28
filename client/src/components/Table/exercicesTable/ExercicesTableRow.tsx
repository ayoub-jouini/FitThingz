interface Props {
  id: number;
  name: string;
  type: string;
  duree: string;
  tags: string[];
  page?: string;
}

const ExercicesTableRow: React.FC<Props> = (props) => {
  const { id, name, type, duree, tags, page } = props;

  return (
    <div
      className={`rounded-[45px] px-10 grid content-center justify-items-center items-center h-32 border-2 border-grisPrimary my-5 ${
        page === "myexercices" ? "grid-cols-5" : "grid-cols-4"
      }`}
    >
      <div className="text-textPrimary">{name}</div>
      <div className="text-textPrimary">{type}</div>
      <div className="text-textPrimary">{duree}</div>
      <div className="text-textPrimary">
        {tags.map((tag, key) => (
          <div
            key={key}
            className="py-1 px-5 bg-textPrimary text-tertiary text-2xs rounded-[25px] my-2"
          >
            {tag}
          </div>
        ))}
      </div>
      {page === "myexercices" && (
        <div className="flex ">
          <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
            <img alt="" src="/icons/editicon.svg" />
          </div>
          <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
            <img alt="" src="/icons/trashcanicon.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExercicesTableRow;

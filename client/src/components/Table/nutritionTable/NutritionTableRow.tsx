import Link from "next/link";

interface Props {
  id: number;
  name: string;
  type: string;
  duree: string;
  tags: string[];
}

const NutritionTableRow: React.FC<Props> = (props) => {
  const { id, name, type, duree, tags } = props;

  return (
    <Link
      href={`/dashboard/coach/nutrition/${id}/1`}
      className="rounded-[45px] px-10 grid grid-cols-5 content-center justify-items-center items-center h-32 border-2 border-grisPrimary my-5"
    >
      <div className="text-textPrimary">{name}</div>
      <div className="text-textPrimary">{type}</div>
      <div className="text-textPrimary">{duree} Days</div>
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
      <div className="flex ">
        <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
          <img alt="" src="/icons/editicon.svg" />
        </div>
        <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
          <img alt="" src="/icons/trashcanicon.svg" />
        </div>
      </div>
    </Link>
  );
};

export default NutritionTableRow;

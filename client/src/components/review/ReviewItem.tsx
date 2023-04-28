interface Props {
  avatar: string;
  userName: string;
  description: string;
  rate: number;
}

const ReviewItem: React.FC<Props> = (props) => {
  const { avatar, userName, description, rate } = props;

  let containedStars = [];
  for (let i = 0; i < rate; i++) {
    containedStars.push(
      <img alt="" src="/icons/containedstar.svg" className="mx-1" />
    );
  }

  let emptyStars = [];
  const emptyStarsNumber = 5 - rate;

  for (let i = 0; i < emptyStarsNumber; i++) {
    emptyStars.push(
      <img alt="" src="/icons/outlinedstar.svg" className="mx-1" />
    );
  }

  return (
    <div className="rounded-[45px] border-2 border-grisPrimary p-7 flex">
      <div
        className="bg-cover rounded-full h-14 w-14 mr-5"
        style={{ backgroundImage: "url(/images/Group11234.png)" }}
      />
      <div className="">
        <p className="text-l text-textPrimary">"{description}"</p>
        <p className="text-sm text-grixSecondary my-2">{userName}</p>
        <div className="flex">{[containedStars, emptyStars]}</div>
      </div>
    </div>
  );
};

export default ReviewItem;

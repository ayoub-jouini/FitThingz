import ReviewItem from "./ReviewItem";

interface Props {}

const reviewData = [
  {
    avatar: "/images/Group11234.png",
    userName: "foulen el fouleni",
    description: "Definitely one of the best Coaches !",
    rate: 4,
  },
  {
    avatar: "/images/Group11234.png",
    userName: "foulen el fouleni",
    description: "Definitely one of the best Coaches !",
    rate: 3,
  },
  {
    avatar: "/images/Group11234.png",
    userName: "foulen el fouleni",
    description: "Definitely one of the best Coaches !",
    rate: 4,
  },
  {
    avatar: "/images/Group11234.png",
    userName: "foulen el fouleni",
    description: "Definitely one of the best Coaches !",
    rate: 5,
  },
];

const ReviewTable: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {reviewData.map((review, key) => (
        <ReviewItem
          avatar={review.avatar}
          userName={review.userName}
          description={review.description}
          rate={review.rate}
        />
      ))}
    </div>
  );
};

export default ReviewTable;

import ReviewItem from "./ReviewItem";

interface Props {
  showReview: boolean;
}

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
  const { showReview } = props;

  return (
    <div className={`grid-cols-2 gap-5 ${!showReview ? "hidden" : "grid"}`}>
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

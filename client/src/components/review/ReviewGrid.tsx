import ReviewItem from "./ReviewItem";

interface Props {
  showReview: boolean;
  reviewData: any;
}

const ReviewTable: React.FC<Props> = (props) => {
  const { reviewData, showReview } = props;

  return (
    <div className={`grid-cols-2 gap-5 ${!showReview ? "hidden" : "grid"}`}>
      {reviewData.map((review: any, key: any) => (
        <ReviewItem
          id={review._id}
          avatar={review.user.avatar}
          userName={`${review.user.prenom} ${review.user.nom}`}
          description={review.commentaire}
          rate={review.rate}
        />
      ))}
    </div>
  );
};

export default ReviewTable;

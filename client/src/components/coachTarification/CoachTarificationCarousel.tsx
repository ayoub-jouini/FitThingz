import Button from "../global/button/Button";

interface Props {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  promo: string;
  tarification: number;
  handleNextTarification: () => void;
  handlePreviousTarification: () => void;
  showEdit: boolean;
  ShowEditTrificationModal: () => void;
}

const CoachTarificationCarousel: React.FC<Props> = (props) => {
  const {
    id,
    title,
    description,
    duration,
    price,
    promo,
    tarification,
    handleNextTarification,
    handlePreviousTarification,
    showEdit,
    ShowEditTrificationModal,
  } = props;

  return (
    <>
      {tarification === id && (
        <div className={`flex flex-col items-center h-full  w-full`}>
          <div className="flex justify-between items-center">
            <div
              className="w-8 h-8 shadow rounded-full flex justify-center items-center mx-2"
              onClick={handlePreviousTarification}
            >
              <img alt="" src="/icons/arrow.svg" />
            </div>
            <p className="text-textPrimary text-base mx-4">{title}</p>
            <div
              className="w-8 h-8 shadow rounded-full flex justify-center items-center mx-2"
              onClick={handleNextTarification}
            >
              <img alt="" src="/icons/arrow.svg" className="rotate-180	" />
            </div>
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
          {showEdit && (
            <div className="my-5 flex ">
              <div className="mx-3">
                <Button
                  type="submit"
                  text="Save"
                  handleButton={ShowEditTrificationModal}
                  size="s"
                />
              </div>
              <div className="mx-2">
                <Button
                  type="submit"
                  style="outlined"
                  text="Delete"
                  handleButton={ShowEditTrificationModal}
                  size="s"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CoachTarificationCarousel;

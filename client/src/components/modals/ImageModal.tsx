interface Props {
  showImageModal: boolean;
  handleImageModal: () => void;
  image: string;
}

const ImageModal: React.FC<Props> = (props) => {
  const { showImageModal, handleImageModal, image } = props;

  return (
    <>
      {showImageModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className=" grid grid-cols-5 w-full">
                  <div className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5" />
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleImageModal}
                  >
                    X
                  </div>
                </div>
                <div
                  className="w-full h-96 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default ImageModal;

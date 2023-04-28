import CoachSideBarMenu from "./CoachSideBarMenu";

interface Props {
  handleLogout: () => void;
}

const CoachSideBar: React.FC<Props> = (props) => {
  const { handleLogout } = props;
  return (
    <div className="shadow rounded-[48px] w-10/12 h-full flex flex-col items-center justify-around">
      <div className="border-2 border-primary shadow rounded-full w-20 h-20 bg-white flex justify-center items-center">
        <img alt="" src="/icons/logo.svg" className="h-14" />
      </div>
      <div className="h-1/3 w-full">
        <CoachSideBarMenu />
      </div>
      <div className="w-full flex flex-col items-center justify-between h-60">
        <div className="bg-primary rounded-[30px] w-10/12 h-40 p-6 flex flex-col justify-between items-start">
          <img alt="" src="/icons/documentwhite.svg" className="h-7" />
          <p className="font-semibold text-sm text-white">Create Program</p>
          <p className="font-semibold text-2xs text-white">
            Transform Your Training with a Customized Program
          </p>
        </div>
        <div
          className="bg-primary rounded-[22px] w-9/12 h-14 flex justify-evenly items-center cursor-pointer"
          onClick={handleLogout}
        >
          <img alt="" src="/icons/logout.svg" className="" />
          <p className="font-semibold text-base text-white">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default CoachSideBar;

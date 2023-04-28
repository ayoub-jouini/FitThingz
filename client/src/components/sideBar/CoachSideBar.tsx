import CoachSideBarMenu from "./CoachSideBarMenu";
import ResponsiveSideBarMenu from "./ResponsiveSideBarMenu";

interface Props {
  handleLogout: () => void;
  handleToggleMenu: () => void;
  toggleMenu: boolean;
  setDarkModeToggle: (event: boolean) => void;
  darkModeToggle: boolean;
}

const CoachSideBar: React.FC<Props> = (props) => {
  const {
    handleLogout,
    handleToggleMenu,
    toggleMenu,
    darkModeToggle,
    setDarkModeToggle,
  } = props;

  return (
    <>
      <div className="shadow rounded-[48px] w-10/12 h-full hidden md:flex flex-col items-center justify-around">
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

      {
        //responsive navbar
      }

      <div
        className={`${
          toggleMenu ? "flex " : "hidden"
        } md:hidden h-screen w-screen 	`}
      >
        <div className="bg-primary w-5/6 flex flex-col py-10 pl-10">
          <div className=" flex items-center ">
            <div
              className="bg-cover rounded-full h-20 w-20 mr-5 border-2 border-tertiary"
              style={{ backgroundImage: "url(/images/Group11234.png)" }}
            />
            <p className="text-tertiary text-base font-semibold">
              Foulen el fouleni
            </p>
          </div>
          <ResponsiveSideBarMenu />
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogout}
          >
            <img alt="" src="/icons/logout.svg" className="mr-3" />
            <p className="font-semibold text-base text-white">Logout</p>
          </div>
        </div>
        <div className="w-1/6 flex items-center">
          <div
            className="w-14 h-14 rounded-full bg-tertiary -ml-6 flex items-center justify-center"
            onClick={handleToggleMenu}
          >
            <div className="w-12 h-12 rounded-full bg-tertiary shadow flex justify-center items-center">
              <img alt="" src="/icons/mennubackicon.svg" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachSideBar;

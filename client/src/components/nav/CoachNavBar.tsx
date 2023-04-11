import SearchBar from "../global/search/SeachBar";

interface Props {
  value: string;
  handleChange: (event: any) => void;
}

const CoachNavBar: React.FC<Props> = (props) => {
  const { value, handleChange } = props;
  return (
    <nav className="w-4/5">
      <SearchBar value={value} handleChange={handleChange} />
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </nav>
  );
};

export default CoachNavBar;

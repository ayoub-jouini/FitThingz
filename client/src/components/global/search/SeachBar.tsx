interface Props {
  value: string;
  handleChange: (event: any) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { value, handleChange } = props;

  return (
    <div className="w-1/2 shadow h-14 rounded-[24px] flex justify-between items-center px-3 m-5">
      <input
        className="bg-transparent outline-none w-11/12"
        type="search"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
      <img alt="search icon" src="/icons/search.svg" className="" />
    </div>
  );
};

export default SearchBar;

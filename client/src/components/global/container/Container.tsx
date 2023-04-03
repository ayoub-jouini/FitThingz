interface Props {
  children: any;
}

const Container: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="md:px-28 px-4">{children}</div>;
};

export default Container;

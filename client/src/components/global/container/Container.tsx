interface Props {
  children: any;
}

const Container: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="px-28">{children}</div>;
};

export default Container;

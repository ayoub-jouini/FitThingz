"use client";

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  style?: "contained" | "outlined" | "text";
  size?: string;
  disabled?: boolean;
  handleButton: (event?: any) => void;
}

const Button: React.FC<Props> = (props) => {
  const { text, style, type, handleButton, size, disabled = false } = props;

  let buttonStype: string;
  let buttonSize: string;

  switch (style) {
    case "outlined":
      buttonStype =
        "rounded-xl text-primary font-medium bg-tertiary border-primary border-2 hover:bg-primary hover:text-tertiary cursor-pointer";
      break;
    case "text":
      buttonStype =
        "rounded-xl text-primary font-medium hover:bg-primary hover:text-tertiary cursor-pointer";
      break;
    default:
      buttonStype =
        "rounded-xl bg-primary text-tertiary font-medium border-primary border-2 hover:text-primary hover:bg-tertiary cursor-pointer";
      break;
  }

  switch (size) {
    case "xs":
      buttonSize = "h-8 w-28 text-xs";
      break;
    case "s":
      buttonSize = "h-9 w-32 text-xs";
      break;
    case "l":
      buttonSize = "h-12 w-48 text-base";
      break;
    case "xl":
      buttonSize = "h-12 w-72 text-base";
      break;
    default:
      buttonSize = "h-10 w-40 text-sm";
      break;
  }

  return (
    <button
      className={`${buttonStype} ${buttonSize} disabled:bg-grisPrimary disabled:text-grixSecondary disabled:border-grixSecondary`}
      type={type}
      onClick={handleButton}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

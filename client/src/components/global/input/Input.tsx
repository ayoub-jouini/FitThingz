"use client";

interface Props {
  label: string;
  placeholder: string;
  status?: "error" | "warning" | "success";
  errorMessage?: string;
  disabled?: boolean;
  value: string | number | readonly string[] | undefined;
  handleChange: (event: any) => void;
  width?: string;
  height: string;
}

const Input: React.FC<Props> = (props) => {
  const {
    label,
    placeholder,
    errorMessage,
    status,
    disabled = false,
    value,
    handleChange,
    width,
    height,
  } = props;

  let errorStyle: string;

  switch (status) {
    case "error":
      errorStyle = "text-error border-error";
      break;
    case "warning":
      errorStyle = "text-warning border-warning";
      break;
    case "success":
      errorStyle = "text-success border-success";
      break;
    default:
      errorStyle = "border-grisTertiary text-textPrimary";
  }

  return (
    <div className={`my-1 flex flex-col ${width}`}>
      <label className="text-sm text-textPrimary font-medium mb-1">
        {label}
      </label>
      <input
        className={`${errorStyle} ${height} rounded-2xl px-3 border-2 text-textPrimary disabled:border-grisPrimary bg-tertiary`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <p className={`${errorStyle}`}>{errorMessage}</p>
    </div>
  );
};

export default Input;

"use client";

interface Props {
  label: string;
  placeholder: string;
  status?: "error" | "warning" | "success";
  errorMessage?: string;
  disabled?: boolean;
  value: string | number | readonly string[] | undefined;
  handleChange: (event: any) => void;
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
      errorStyle = "border-primary text-textPrimary";
  }

  return (
    <div className="flex flex-col w-80">
      <label className="text-sm text-textPrimary font-medium mb-1">
        {label}
      </label>
      <input
        className={`${errorStyle} h-12 rounded-2xl px-3 border-2 text-textPrimary disabled:border-grisPrimary`}
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

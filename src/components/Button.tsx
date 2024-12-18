interface IButtonProps {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}: IButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none
        ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "border-coral-red bg-coral-red text-white"}`}
      onClick={() => alert("Click me")}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 size-5 rounded-full "
        />
      )}
    </button>
  );
};

export default Button;

interface IButtonProps {
  label: string;
  iconUrl: string;
}

const Button = ({ label, iconUrl }: IButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-full  border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white"
      onClick={() => alert('Click me')}
    >
      {label}

      <img
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 size-5 rounded-full "
      />
    </button>
  );
};

export default Button;

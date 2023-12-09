type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  text: string;
};

export default function Button({ onClick, disabled, text }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="text-white bg-gradient-90 from-indigo-300 via-purple-400 to-indigo-300 animate-bgGradient
        bg-[length:400%_400%] font-normal sm:font-medium text-[0.6rem] sm:text-base md:text-lg rounded-lg tracking-[0.1rem] sm:tracking-[0.25rem] indent-[0.1rem] sm:indent-1 px-2 sm:px-4 py-1.5 sm:py-2 ml-1 sm:ml-2
        brightness-100 hover:brightness-95 transition duration-300"
    >
      {text}
    </button>
  );
}

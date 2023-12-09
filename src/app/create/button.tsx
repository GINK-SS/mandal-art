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
        bg-[length:400%_400%] font-medium text-lg rounded-lg tracking-[0.25rem] indent-1 px-4 py-2 ml-2
        brightness-100 hover:brightness-95 transition duration-300"
    >
      {text}
    </button>
  );
}

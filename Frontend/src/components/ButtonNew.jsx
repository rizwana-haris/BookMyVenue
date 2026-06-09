export default function Button({
  children,
  buttonV = "primary",
  onClick,
  type = "button",
}) {

  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    primary:
      "bg-[#EC3946] text-white hover:opacity-70",

    outline:
      "border border-[#EC3946] text-[#EC3946] hover:bg-[#EC3946] hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variants[buttonV]}`}
    >
      {children}
    </button>
  );
}
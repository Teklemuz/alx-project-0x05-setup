import { ButtonProps } from "../interface"; 

type ButtonBackgroundColor = 'red' | 'blue' | 'orange' | 'green'; 

interface ButtonProps {
  buttonLabel: string;
  buttonSize: string;
  buttonBackgroundColor?: ButtonBackgroundColor;  
  action: () => void;
}

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {
  // Set default background color if buttonBackgroundColor is not provided
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      }[buttonBackgroundColor] || "bg-slate-500"  // Fallback to slate if value is not valid
    : "bg-slate-500";  // Default color when no background color is provided

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
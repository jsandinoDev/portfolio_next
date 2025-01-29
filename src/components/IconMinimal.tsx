import { GithubIcon } from "./icons/GithubIcon";
import { NextIcon } from "./icons/NextIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

interface Props {
  name: string;
}

export const IconMinimal = ({ name }: Props) => {
  const renderIcon = () => {
    switch (name) {
      case "NextIcon":
        return <NextIcon />;
      case "TailwindIcon":
        return <TailwindIcon />;
      case "ReactIcon":
        return <ReactIcon />;
      default:
        break;
    }
  };

  const getBackgroundColor = () => {
    switch (name) {
      case "NextIcon":
        return "bg-black";
      case "TailwindIcon":
        return "bg-blue-800";
      case "ReactIcon":
        return "bg-white";
      default:
        return "bg-white/5";
    }
  };

  const getTextColor = () => {
    switch (name) {
      case "ReactIcon":
        return "text-blue-400"; // Black text for ReactIcon
      default:
        return "text-white"; // Default text color
    }
  };
  return (
    <>
      <a
        className={`rounded-full 
          border-white/10 
          flex justify-center 
          items-center 
          gap-x-2 py-1 px-2 md:py-2 
          text-xs md:text-base
          hover:scale-110 hover:bg-white/10 transition
          ${getBackgroundColor()} ${getTextColor()}`}
      >
        {renderIcon()}
      </a>
    </>
  );
};

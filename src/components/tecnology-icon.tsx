import { icons } from "@/utils/tech-icons";
import Image from "next/image";

type TecnologyIconProps = {
  iconType: keyof typeof icons;
};

export function TecnologyIcon({ iconType }: TecnologyIconProps) {
  const icon = icons[iconType];
  return (
    <div className="flex flex-col items-center justify-center">
      <Image className="w-16 h-16" src={icon.icon} alt="javascript icon" />
      <span>{icon.label}</span>
    </div>
  );
}

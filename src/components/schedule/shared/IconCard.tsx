import { IconProps } from "lucide-react";

interface IconCardProps {
  icon: string;
  label?: string;
  title?: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  tag?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  label,
  title,
  action,
  tag,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center border border-neutral-200 mb-4 p-4 rounded-lg border-solid max-sm:p-3 ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="bg-neutral-100 mr-4 p-3 rounded-[50%]">
        <i className={`ti ti-${icon}`} />
      </div>
      <div className="flex-1">
        {label && <div className="text-[#999] text-xs uppercase">{label}</div>}
        {title && <div className="font-medium">{title}</div>}
      </div>
      {action && (
        <div
          className="text-[#00bcd4] text-sm cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            action.onClick();
          }}
        >
          {action.text}
        </div>
      )}
      {tag && (
        <div className="text-white text-xs bg-[#ffbf3d] px-2 py-1 rounded-xl">
          {tag}
        </div>
      )}
      {selected !== undefined && (
        <div
          className={`w-5 h-5 ${selected ? "shadow-[inset_0_0_0_6px_#00bcd4] bg-white border-[#00bcd4]" : ""} mr-3 rounded-[50%] border-2 border-solid border-[#ddd]`}
        />
      )}
    </div>
  );
};

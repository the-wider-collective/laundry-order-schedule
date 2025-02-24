
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
  variant?: "primary" | "secondary" | "tertiary";
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  label,
  title,
  action,
  tag,
  selected,
  onClick,
  variant = "primary",
}) => {
  const cardStyles = {
    primary: "border-[#92e3ed] bg-white",
    secondary: "border-[#ffbf3d] bg-white",
    tertiary: "border-[#e0e0e0] bg-white",
  };

  return (
    <div
      className={`flex items-center border ${cardStyles[variant]} mb-4 p-4 rounded-xl border-solid max-sm:p-3 ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="bg-[#f5f5f5] mr-4 p-3 rounded-[50%] w-12 h-12 flex items-center justify-center">
        <img src={`/icons/${icon}.svg`} alt={icon} className="w-6 h-6" />
      </div>
      <div className="flex-1">
        {label && <div className="text-[#92e3ed] text-xs uppercase tracking-wider">{label}</div>}
        {title && <div className="font-medium text-[#333] mt-0.5">{title}</div>}
      </div>
      {action && (
        <div
          className={`text-sm cursor-pointer ${action.text.toLowerCase() === 'edit' ? 'text-[#92e3ed]' : 'text-[#ffbf3d]'}`}
          onClick={(e) => {
            e.stopPropagation();
            action.onClick();
          }}
        >
          {action.text}
        </div>
      )}
      {tag && (
        <div className="text-white text-xs bg-[#ffbf3d] px-3 py-1 rounded-full">
          {tag}
        </div>
      )}
      {selected !== undefined && (
        <div
          className={`w-5 h-5 ${selected ? "border-[#92e3ed] bg-[#92e3ed]" : ""} rounded-[50%] border-2 border-solid border-[#ddd]`}
        />
      )}
    </div>
  );
};

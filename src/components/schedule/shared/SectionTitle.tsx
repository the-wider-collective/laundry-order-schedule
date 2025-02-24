interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => {
  return <h2 className={`font-medium mb-3 ${className}`}>{children}</h2>;
};

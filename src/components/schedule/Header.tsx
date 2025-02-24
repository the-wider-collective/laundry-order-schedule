export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-[#eee] border-b border-solid">
      <div className="flex items-center gap-2 text-[#666] cursor-pointer">
        <i className="ti ti-chevron-left" />
        <span>SCHEDULE</span>
      </div>
      <div className="text-[#666] cursor-pointer">
        <i className="ti ti-menu-2" />
      </div>
    </header>
  );
};

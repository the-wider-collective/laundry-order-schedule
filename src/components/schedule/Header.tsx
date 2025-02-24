
export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-[#f5f5f5]">
      <div className="flex items-center gap-2 text-[#666] cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-medium">SCHEDULE</span>
      </div>
      <div className="text-[#666] cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </header>
  );
};

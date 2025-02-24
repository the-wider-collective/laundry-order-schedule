
export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-5 border-b border-[#f5f5f5]">
      <div className="flex items-center gap-3 text-[#666] cursor-pointer hover:text-[#92e3ed] transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M15.5 19l-7-7 7-7" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="text-[#333] text-base font-medium tracking-wide">
        SCHEDULE
      </div>

      <div className="text-[#666] cursor-pointer hover:text-[#92e3ed] transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M4 7h16M4 12h16M4 17h16" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </header>
  );
};

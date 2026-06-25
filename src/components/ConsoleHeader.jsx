import { Search, Bell, ChevronDown, HelpCircle } from "lucide-react";

export default function ConsoleHeader() {
  return (
    <header className="bg-[#0f1923] text-white h-12 flex items-center px-4 gap-4 shrink-0 shadow-lg z-30">
      {/* Logo */}
      <div className="flex items-center gap-2 whitespace-nowrap select-none">
        <span className="text-sky-400 text-lg leading-none">☁</span>
        <span className="font-semibold text-sm tracking-wide">
          <span className="text-white">Cloud</span>
          <span className="text-sky-400">Console</span>
        </span>
      </div>

      <div className="w-px h-5 bg-gray-700 mx-1" />

      {/* Search */}
      <div className="flex-1 max-w-xs">
        <div className="flex items-center bg-[#1a2535] border border-[#2a3a50] rounded px-2.5 py-1 gap-2 hover:border-sky-500/50 transition-colors">
          <Search size={13} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search services, resources..."
            className="bg-transparent text-xs text-gray-300 placeholder-gray-600 outline-none w-full"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1 ml-auto text-xs text-gray-400">
        {/* Region */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-[#1a2535] cursor-default transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-gray-300">us-east-1</span>
          <ChevronDown size={11} className="text-gray-500" />
        </div>

        <div className="w-px h-4 bg-gray-700 mx-1" />

        <button className="p-1.5 rounded hover:bg-[#1a2535] transition-colors">
          <Bell size={15} className="text-gray-400" />
        </button>
        <button className="p-1.5 rounded hover:bg-[#1a2535] transition-colors">
          <HelpCircle size={15} className="text-gray-400" />
        </button>

        <div className="w-px h-4 bg-gray-700 mx-1" />

        {/* Account */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-[#1a2535] cursor-default transition-colors">
          <div className="w-5 h-5 rounded-full bg-sky-600 flex items-center justify-center text-[10px] font-bold text-white">
            M
          </div>
          <span className="text-gray-300 hidden sm:block">arpithaoncloud9</span>
          <ChevronDown size={11} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../store';
import { 
  LayoutGrid, 
  Sparkles, 
  Mic, 
  MessageSquare,
  Bell,
  Coins,
  User as UserIcon,
  Building2,
  LayoutDashboard,
  Layers,
  LogOut
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Sidebar() {
  const { user } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className="w-[240px] flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 mt-2 relative">
        <div className="flex items-center gap-2 font-bold text-lg text-[#111]">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
            <Mic size={14} className="text-white" />
          </div>
          PitchLab
        </div>
        <button className="absolute right-4 text-gray-400 hover:text-gray-600">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* 工作台 */}
        <div>
          <Link 
            to="/departments" 
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive('/departments') || isActive('/') 
                ? "text-[#111] bg-gray-100" 
                : "text-gray-600 hover:bg-gray-50 hover:text-[#111]"
            )}
          >
            <LayoutGrid size={18} />
            工作台
          </Link>
        </div>

        {/* 每日快讯 */}
        <div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-[#111]">
            <Sparkles size={18} className="text-gray-600" />
            每日快讯
          </div>
          <div className="mt-1 ml-9 space-y-1">
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">专项训练</a>
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">练习记录</a>
          </div>
        </div>

        {/* 演讲练习 */}
        <div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-[#111]">
            <Mic size={18} className="text-gray-600" />
            演讲练习
          </div>
          <div className="mt-1 ml-9 space-y-1">
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">开始练习</a>
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">练习记录</a>
          </div>
        </div>

        {/* 主题训练 */}
        <div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-[#111]">
            <MessageSquare size={18} className="text-gray-600" />
            主题训练
          </div>
          <div className="mt-1 ml-9 space-y-1">
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">我的项目</a>
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">快速创建</a>
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">练习记录</a>
            <a href="#" className="block px-3 py-1.5 text-xs text-gray-500 hover:text-[#111]">知识问答历史</a>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4 relative" ref={dropdownRef}>
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={user.avatarUrl} alt="avatar" className="w-8 h-8 rounded-full bg-yellow-100" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#111]">{user.name}</span>
              <span className="text-xs text-gray-500">{user.role}</span>
            </div>
          </div>
          <button className="text-gray-600 hover:text-[#111]">
            <Bell size={18} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bottom-[calc(100%+8px)] left-0 w-64 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-gray-100 z-50 overflow-hidden">
              {/* User Info Section */}
              <div className="px-4 py-3">
                <div className="text-[15px] font-semibold text-[#111] mb-1">{user.email}</div>
                <div className="text-[13px] text-gray-400 mb-3">用户ID: {user.userId}</div>
                <div className="h-px bg-gray-100 mb-3 w-10/12"></div>
                <div className="text-[13px] text-gray-500">
                  {user.company} · {user.department}
                </div>
              </div>

              {/* Menu Items Section */}
              <div className="border-t border-gray-100 py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#111] hover:bg-gray-50 transition-colors">
                  <UserIcon size={18} className="text-gray-500" />
                  个人主页
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#111] hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    navigate('/dashboard');
                    setIsDropdownOpen(false);
                  }}
                >
                  <LayoutDashboard size={18} className="text-gray-500" />
                  仪表盘
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#111] hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    navigate('/projects');
                    setIsDropdownOpen(false);
                  }}
                >
                  <Layers size={18} className="text-gray-500" />
                  项目管理
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#111] hover:bg-gray-50 transition-colors">
                  <Building2 size={18} className="text-gray-500" />
                  企业管理
                </button>
              </div>

              {/* Logout Section */}
              <div className="border-t border-gray-100 py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                  <LogOut size={18} />
                  退出登录
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Points Pill */}
        <div className="flex items-center gap-2 bg-[#FFF9E6] text-yellow-700 px-4 py-2 rounded-full text-sm font-bold w-full justify-center">
          <Coins size={16} />
          积分 {user.points}
        </div>
      </div>
    </aside>
  );
}

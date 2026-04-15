import React from 'react';
import { 
  Users, Layers, UserCircle, PhoneCall, FileText, 
  Eye, UserPlus, MousePointerClick, Activity,
  RefreshCw
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

const lineData = [
  { date: '3-16', user: 10, project: 30, persona: 20, rtc: 5, report: 2 },
  { date: '3-17', user: 15, project: 12, persona: 24, rtc: 8, report: 3 },
  { date: '3-18', user: 11, project: 21, persona: 16, rtc: 6, report: 4 },
  { date: '3-19', user: 18, project: 10, persona: 12, rtc: 4, report: 2 },
  { date: '3-20', user: 14, project: 15, persona: 8, rtc: 7, report: 5 },
  { date: '3-21', user: 12, project: 8, persona: 14, rtc: 3, report: 1 },
  { date: '3-22', user: 45, project: 2, persona: 6, rtc: 2, report: 1 },
  { date: '3-23', user: 15, project: 6, persona: 18, rtc: 5, report: 2 },
  { date: '3-24', user: 35, project: 10, persona: 22, rtc: 9, report: 3 },
  { date: '3-25', user: 12, project: 14, persona: 15, rtc: 6, report: 4 },
  { date: '3-26', user: 8, project: 5, persona: 10, rtc: 4, report: 2 },
  { date: '3-27', user: 10, project: 12, persona: 16, rtc: 7, report: 3 },
  { date: '3-28', user: 14, project: 8, persona: 12, rtc: 5, report: 1 },
  { date: '3-29', user: 12, project: 10, persona: 14, rtc: 6, report: 2 },
  { date: '3-30', user: 10, project: 15, persona: 8, rtc: 4, report: 3 },
  { date: '3-31', user: 8, project: 12, persona: 10, rtc: 5, report: 2 },
  { date: '4-01', user: 12, project: 33, persona: 16, rtc: 8, report: 4 },
  { date: '4-02', user: 10, project: 15, persona: 12, rtc: 6, report: 2 },
];

const barData = [
  { date: '4月9日', value: 80, new: 76, conv: 5 },
  { date: '4月10日', value: 68, new: 65, conv: 4 },
  { date: '4月11日', value: 69, new: 65, conv: 2 },
  { date: '4月12日', value: 77, new: 75, conv: 2 },
  { date: '4月13日', value: 60, new: 60, conv: 6 },
  { date: '4月14日', value: 81, new: 79, conv: 4 },
  { date: '4月15日', value: 17, new: 17, conv: 1 },
];

export default function DataDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#111]">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold mb-1">PitchLab 管理中心</h1>
          <p className="text-xs text-gray-500">统一查看业务数据、管理用户与项目资源。</p>
        </div>
        <button className="px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          返回产品首页
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {[
          { title: '用户总数', value: '1,928', sub: '今日新增用户', diff: '+3', icon: Users, iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
          { title: '项目总数', value: '793', sub: '今日新增项目', diff: '+3', icon: Layers, iconBg: 'bg-purple-50', iconColor: 'text-purple-500' },
          { title: '人设总数', value: '4,264', sub: '今日新增人设', diff: '+15', icon: UserCircle, iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
          { title: 'RTC 场景', value: '3,683', sub: '今日新增 RTC 场景', diff: '+7', icon: PhoneCall, iconBg: 'bg-teal-50', iconColor: 'text-teal-500' },
          { title: 'RTC 报告', value: '964', sub: '今日新增 RTC 报告', diff: '+1', icon: FileText, iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[13px] font-bold text-gray-500">{card.title}</span>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${card.iconBg}`}>
                <card.icon size={14} className={card.iconColor} />
              </div>
            </div>
            <div className="text-[28px] font-bold mb-4">{card.value}</div>
            <div className="flex justify-between items-center text-[11px] text-gray-400">
              <span>{card.sub}</span>
              <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">{card.diff}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-base font-bold text-[#111]">增长趋势</h2>
              <p className="text-[13px] text-gray-500 mt-1">最近 30 天的每日新增情况</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-50 rounded-lg p-1">
                {['14 天', '30 天', '60 天', '90 天'].map((range, idx) => (
                  <button 
                    key={idx} 
                    className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${idx === 1 ? 'bg-white text-[#111] shadow-sm' : 'text-gray-500 hover:text-[#111]'}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-50">
                <RefreshCw size={14} />
                刷新
              </button>
              <span className="text-[13px] text-gray-400">数据更新到 不到 1 分钟前</span>
            </div>
          </div>
          
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontSize: '13px' }}
                  labelStyle={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}
                />
                <Legend 
                  iconType="circle" 
                  wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }}
                />
                <Line type="monotone" dataKey="user" name="用户" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="project" name="项目" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="persona" name="人设" stroke="#ec4899" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="rtc" name="RTC 场景" stroke="#14b8a6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="report" name="RTC 报告" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Analysis Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-base font-bold text-[#111]">用户来源分析</h2>
              <p className="text-[13px] text-gray-500 mt-1">分析用户的注册来源、访客转化和地理分布</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white">
              <Eye size={16} className="text-gray-500" />
              筛选
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[13px] font-bold text-[#111]">总访客数</span>
                <Eye size={16} className="text-gray-400" />
              </div>
              <div className="text-[28px] font-bold mb-4">8934</div>
              <div className="text-[11px] text-gray-400 mt-auto">包含未注册用户</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[13px] font-bold text-[#111]">总注册用户</span>
                <UserPlus size={16} className="text-gray-400" />
              </div>
              <div className="text-[28px] font-bold mb-4">1928</div>
              <div className="text-[11px] text-gray-400 mt-auto">已转化用户: 596</div>
            </div>
            <div className="bg-[#F0FDF4] rounded-xl p-5 shadow-sm border border-green-100 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[13px] font-bold text-green-800">注册转化率</span>
                <MousePointerClick size={16} className="text-green-600" />
              </div>
              <div className="text-[28px] font-bold text-green-700 mb-4">6.67%</div>
              <div className="text-[11px] text-green-600 mt-auto">596 / 8934 转化数量</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[13px] font-bold text-[#111]">追踪漏斗率</span>
                <Activity size={16} className="text-gray-400" />
              </div>
              <div className="text-[28px] font-bold mb-4">32.1%</div>
              <div className="text-[11px] text-gray-400 mt-auto">619 用户有效信息搜集</div>
            </div>
          </div>
        </div>

        {/* Daily Active Trends */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-base font-bold text-[#111]">每日访客趋势</h2>
            <span className="text-[13px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">最近 30 天</span>
            <p className="text-[13px] text-gray-400 ml-2">访客数量、新增访客和注册转化的每日趋势</p>
          </div>
          
          <div className="space-y-4">
            {barData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-16 text-[13px] text-gray-500 font-medium text-right">{item.date}</div>
                <div className="w-8 text-[13px] text-gray-400 text-right">访客</div>
                <div className="flex-1 flex items-center h-6">
                  <div className="relative h-full flex items-center bg-[#4F8AFF] rounded-full text-white text-[11px] font-bold px-3 min-w-[2rem]" style={{ width: `${(item.value / 100) * 100}%` }}>
                    <span className="absolute right-3">{item.value}</span>
                  </div>
                </div>
                <div className="w-48 flex items-center justify-end gap-2 text-[12px]">
                  <span className="text-gray-500">新访客 <span className="font-bold text-[#111]">{item.new}</span></span>
                  <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">转化 {item.conv}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button className="text-[13px] text-gray-500 hover:text-[#111] font-medium">查看更早近 7 天数据</button>
          </div>
        </div>

        {/* UTM Source Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-base font-bold text-[#111]">来源与转化分析</h2>
            <span className="text-[13px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">UTM 来源</span>
          </div>
          <p className="text-[13px] text-gray-500 mb-4">各 UTM 来源的访客数、注册转化数和转化率分析</p>
          
          <div className="space-y-3">
            {[
              { name: 'project_share', visits: 27, reg: 0, rate: '0.0%' },
              { name: 'web-note.cn', visits: 8, reg: 0, rate: '0.0%' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-[13px] font-medium text-[#111] w-32">{item.name}</span>
                  <span className="text-[12px] text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">{item.visits} 访客</span>
                  <span className="text-[12px] text-green-600 bg-green-50 px-2 py-1 rounded font-medium">{item.reg} 注册</span>
                </div>
                <div className="text-[13px] font-bold text-gray-500">{item.rate}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Source and Location */}
        <div className="grid grid-cols-2 gap-6">
          {/* User Subjective Source */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-bold text-[#111]">用户主观来源</h2>
                <span className="text-[13px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">注册时选择</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: '社交媒体', value: 276, percent: 44.6 },
                { name: '好友/同事推荐', value: 101, percent: 16.3 },
                { name: 'AI 推荐', value: 101, percent: 16.3 },
                { name: '搜索引擎', value: 49, percent: 7.9 },
                { name: 'boss直聘', value: 6, percent: 1.0 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 w-32">
                    <span className="text-[13px] font-medium text-[#111]">{item.name}</span>
                    <span className="text-[12px] text-gray-500">{item.value}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-end gap-3">
                    <span className="text-[12px] text-gray-400">{item.percent.toFixed(1)}%</span>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-800 rounded-full" style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IP Location */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-bold text-[#111]">地理位置</h2>
                <span className="text-[13px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">IP 定位</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'China', value: 562, percent: 90.8 },
                { name: 'United States', value: 19, percent: 3.1 },
                { name: 'Japan', value: 6, percent: 1.0 },
                { name: 'Singapore', value: 4, percent: 0.6 },
                { name: 'Hong Kong', value: 3, percent: 0.5 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 w-32">
                    <span className="text-[13px] font-medium text-[#111]">{item.name}</span>
                    <span className="text-[12px] text-gray-500">{item.value}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-end gap-3">
                    <span className="text-[12px] text-gray-400">{item.percent.toFixed(1)}%</span>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${idx === 0 ? 'bg-green-500' : 'bg-gray-300'}`} style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Referrer */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-base font-bold text-[#111]">外部引流来源</h2>
            <span className="text-[13px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">Referrer</span>
          </div>
          <p className="text-[13px] text-gray-500 mb-4">用户访问时的 HTTP Referrer（外部网站）</p>
          
          <div className="space-y-3">
            {[
              { url: 'https://www.zcool.com.cn/', value: 122, percent: 19.7 },
              { url: 'https://cn.bing.com/', value: 64, percent: 10.3 },
              { url: 'https://weixin110.qq.com/', value: 33, percent: 5.3 },
              { url: 'https://www.bing.com/', value: 19, percent: 3.1 },
              { url: 'https://baidu.com/', value: 14, percent: 2.3 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md">{item.url}</span>
                  <span className="text-[13px] font-medium text-[#111]">{item.value}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-gray-400">{item.percent.toFixed(1)}%</span>
                  <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

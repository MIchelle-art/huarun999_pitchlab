import React from 'react';
import { Search, ExternalLink, Trash2, ArrowUpDown } from 'lucide-react';

const mockProjects = [
  {
    id: '1',
    name: '史达功儿科呼吸专科推广优化项目',
    description: '本项目旨在通过针对性策略提升史达功（小儿法罗培南）在某市三甲医院儿科副主任医师王主任临床实...',
    creator: {
      name: 'huanglin86@999.com.cn',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1&backgroundColor=ffdfbf'
    },
    createdAt: '2026/04/15\n10:17',
    stats: { personas: 3, scenes: 0, rtc: 0 }
  },
  {
    id: '2',
    name: '儿科诊疗效率提升与信任建立计划',
    description: '本项目旨在通过专业化的言语沟通策略，向三甲医院儿科医生高效传递产品价值，建立初步合作意向，核...',
    creator: {
      name: 'huanglin86@999.com.cn',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2&backgroundColor=c0aede'
    },
    createdAt: '2026/04/15\n09:24',
    stats: { personas: 3, scenes: 0, rtc: 1 }
  },
  {
    id: '3',
    name: '基层减负增效行动（简称"减负行动"）',
    description: '本项目旨在解决基层治理中因形式主义官僚导致的效率低下问题，通过整合冗杂政务系统、优化考核机...',
    creator: {
      name: '用户7168',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3&backgroundColor=ffdfbf'
    },
    createdAt: '2026/04/15\n07:47',
    stats: { personas: 3, scenes: 0, rtc: 0 }
  },
  {
    id: '4',
    name: '财税智链优化系统（TaxChain Optimizer）',
    description: '本项目旨在通过AI技术重构餐饮企业财税合规体系流程，针对透明发票缺失导致的税务合规问题，提供智...',
    creator: {
      name: 'Vin',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4&backgroundColor=ffd5dc'
    },
    createdAt: '2026/04/14\n15:33',
    stats: { personas: 3, scenes: 0, rtc: 1 }
  },
  {
    id: '5',
    name: '餐饮企业进项发票优化与税务管理解决方案',
    description: '本项目旨在为年销售额超过500万的餐饮企业提供系统性税务优化方案，重点解决因采购渠道不规范导致的...',
    creator: {
      name: '江枫渔火',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5&backgroundColor=b6e3f4'
    },
    createdAt: '2026/04/14\n14:57',
    stats: { personas: 3, scenes: 0, rtc: 0 }
  },
  {
    id: '6',
    name: '餐饮财税合规赋能沙龙',
    description: '本项目旨在通过行业垂直沙龙形式，为餐饮企业主提供财税合规解决方案，重点解决账务入账抵扣缺少的税...',
    creator: {
      name: '用户9433',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6&backgroundColor=c0aede'
    },
    createdAt: '2026/04/14\n08:52',
    stats: { personas: 3, scenes: 0, rtc: 1 }
  },
  {
    id: '7',
    name: 'AI普惠参与路径指南',
    description: '本项目旨在为普通人洞察当前可行的AI行业参与方案，系统梳理就业、投资、创业、跨行业应用四大核...',
    creator: {
      name: '用户1475',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=7&backgroundColor=ffdfbf'
    },
    createdAt: '2026/04/14\n02:42',
    stats: { personas: 3, scenes: 0, rtc: 3 }
  },
  {
    id: '8',
    name: '共情表达力提升训练营',
    description: '本项目针对职场人士常见的沟通痛点（如少沟通、习惯性反驳、表达生硬），通过场景化模拟训练体系提...',
    creator: {
      name: '用户6351',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=8&backgroundColor=b6e3f4'
    },
    createdAt: '2026/04/13\n18:30',
    stats: { personas: 3, scenes: 0, rtc: 1 }
  },
  {
    id: '9',
    name: '苹果新店销基服务岗位面试能力提升计划',
    description: '本项目专为杭州上海新店销基业单位该等G天岗位考生设计，聚焦常见服务类业务应变和抗压面试核心要...',
    creator: {
      name: '夏木',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=9&backgroundColor=c0aede'
    },
    createdAt: '2026/04/13\n09:31',
    stats: { personas: 3, scenes: 0, rtc: 1 }
  },
  {
    id: '10',
    name: '小小沟通达人——三年级男生日常表达与社交能力提升计划',
    description: '本项目旨在通过系统化的场景模拟和实用表达训练，帮助三年级男生解决校园及家庭生活中的沟通诉求...',
    creator: {
      name: '沐泽',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=10&backgroundColor=b6e3f4'
    },
    createdAt: '2026/04/10\n10:17',
    stats: { personas: 3, scenes: 0, rtc: 1 }
  },
  {
    id: '11',
    name: '武警安定训练中心精神地质探索小岛设计项目',
    description: '本项目旨在为北京武警安定训练中心特种战区建设设计具有地质特征和概念小岛的规划小岛，响应“新战的...',
    creator: {
      name: '姜佳彬',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=11&backgroundColor=ffd5dc'
    },
    createdAt: '2026/04/08\n15:23',
    stats: { personas: 3, scenes: 0, rtc: 0 }
  },
  {
    id: '12',
    name: '跨部门沟通风险模拟训练系统 (CRISIS - Cross-departmental Risk Interaction Simulation & Improvement System)',
    description: '本项目是基于《技术业务跨部门沟通风险防控手册》开发的AI模拟训练系统。旨在通过15个典型的跨门沟...',
    creator: {
      name: '用户7035',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=12&backgroundColor=ffdfbf'
    },
    createdAt: '2026/04/08\n11:13',
    stats: { personas: 1, scenes: 0, rtc: 0 }
  },
  {
    id: '13',
    name: 'AI培训师-知识算算与考核',
    description: '本项目是为直播和短行业业务员设计的专业化培训考核平台，旨在通过智能化的培训测试体系解决传统状...',
    creator: {
      name: '李欣原',
      email: 'lixinyuan@tezign.com',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=13&backgroundColor=b6e3f4'
    },
    createdAt: '2026/04/02\n16:01',
    stats: { personas: 2, scenes: 0, rtc: 5 }
  },
  {
    id: '14',
    name: 'AI业务员-应对刁难场景',
    description: '本项目旨在通过AI强化服务受理和科学沟通策略，消除公众对健康安全性的顾虑，提升社会对新发情况的...',
    creator: {
      name: '李欣原',
      email: 'lixinyuan@tezign.com',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=14&backgroundColor=b6e3f4'
    },
    createdAt: '2026/04/02\n16:04',
    stats: { personas: 1, scenes: 0, rtc: 2 }
  },
  {
    id: '15',
    name: 'AI接报员-沟通实战模拟',
    description: '本项目旨在通过AI技术构建真实警民互动及接报环境，帮助业务人员安全高效地训练沟通技巧，系统评偏拟...',
    creator: {
      name: '李欣原',
      email: 'lixinyuan@tezign.com',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=15&backgroundColor=b6e3f4'
    },
    createdAt: '2026/04/02\n14:45',
    stats: { personas: 3, scenes: 0, rtc: 26 }
  }
];

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#111]">
      <h1 className="text-xl font-bold mb-6 text-[#111]">项目管理</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[calc(100vh-120px)]">
        {/* Header & Search */}
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-[15px] font-bold text-[#111] mb-4">项目列表</h2>
          <div className="relative max-w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text"
              placeholder="搜索项目或负责人"
              className="w-full pl-9 pr-4 py-2 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b border-gray-100 text-gray-400 text-[12px]">
                <th className="py-3 px-6 font-medium w-[40%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    项目名称 <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-4 font-medium w-[20%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    创建者 <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-4 font-medium w-[12%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    创建时间 <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-4 font-medium w-[6%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    人设 <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-4 font-medium w-[6%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    场景 <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-4 font-medium w-[6%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    RTC <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-6 font-medium w-[10%]">操作</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {mockProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-[#111] mb-1">{project.name}</div>
                    <div className="text-gray-400 text-[12px] truncate max-w-md">{project.description}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <img src={project.creator.avatarUrl} alt="avatar" className="w-6 h-6 rounded-full bg-gray-100" />
                      <div className="flex flex-col">
                        <span className="font-medium text-[#111]">{project.creator.name}</span>
                        {project.creator.email && <span className="text-gray-400 text-[11px]">{project.creator.email}</span>}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-500 whitespace-pre-line text-[12px] leading-relaxed">
                    {project.createdAt}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#111]">{project.stats.personas}</td>
                  <td className="py-4 px-4 font-bold text-[#111]">{project.stats.scenes}</td>
                  <td className="py-4 px-4 font-bold text-[#111]">{project.stats.rtc}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 text-[12px] font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        <ExternalLink size={12} className="text-gray-400" />
                        详情
                      </button>
                      <button className="p-1.5 text-red-500 border border-red-100 rounded-md hover:bg-red-50 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-[13px]">
          <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed bg-gray-50">
            上一页
          </button>
          <span className="text-gray-400">第 1/26 页 · 共 502 个项目</span>
          <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#111] transition-colors">
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}

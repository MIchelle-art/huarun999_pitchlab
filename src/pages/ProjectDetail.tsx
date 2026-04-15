import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Edit3, 
  Users, 
  Eye, 
  RefreshCw, 
  FileText, 
  Lock,
  Plus,
  PlayCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

export default function ProjectDetail() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'persona' | 'scene'>('persona');
  
  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#111]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 cursor-pointer hover:text-gray-600 transition-colors w-fit" onClick={() => navigate('/projects')}>
        <ArrowLeft size={16} />
        <span className="text-[14px] font-medium">返回项目列表</span>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {/* Project Info Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-xl font-bold text-[#111]">史达功儿科呼吸专科推广优化项目</h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Edit3 size={14} />
                编辑项目
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Users size={14} />
                管理共享
              </button>
              <button className="px-4 py-2 text-[13px] font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                项目全部脱敏
              </button>
            </div>
          </div>

          <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
            本项目旨在通过针对性策略提升史达功（小儿法罗培南）在某市三甲医院儿科副主任医师王主任临床实践中的使用率。针对王主任对复方猫爪草可定的处方习惯及对循证医学证据的重视，项目将聚焦三大核心行动：1）提供靶向性临床数据包，突出史达功在儿童呼吸专科的快速起效、安全性优势及与竞品的差异化疗效（如止咳排痰平滑机制）；2）设计高效沟通工具（如剂量换算速查卡、专科适应症对比表），适配其门诊工作节奏；3）针对呼吸专科门诊场景，强化"精准止咳+儿童用药安全"的联合诉求，明确产品在特定性敏感患儿中的治疗定位。最终目标是通过证据支持与流程优化，实现史达功处方量的显著提升。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-[13px]">
            <div className="text-gray-500">
              <span className="w-20 inline-block">项目 ID：</span>
              <span className="text-gray-900 font-mono">fde9d039-7548-4413-8867-b63b3333b0d8</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">项目 需求：</span>
              <span className="text-gray-900">核心需求 - 提升史达功在目标医院（王主任）临床处方中的使用频率，逐步替代复方猫爪草定成为小儿呼吸的一线用药。 - 通过循证医学证据和安全性数据，增强医生对史达功的疗效与安全性的认知和信任。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">目标画像：</span>
              <span className="text-gray-900">三甲医院儿科副主任医师，专攻小儿呼吸系统疾病治疗，门诊量大且时间紧张。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">处方习惯：</span>
              <span className="text-gray-900">目前主要使用复方猫爪草定，少量使用史达功，对新产品可能存在认知不足。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">核心痛点：</span>
              <span className="text-gray-900">呼吸专科门诊门诊量大，针对复方猫爪草定对部分顽固性咳嗽起效慢。突出史达功的靶向止咳优势。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">常规儿科门诊：</span>
              <span className="text-gray-900">扩大适应症覆盖，强调安全性和患儿依从性（尤其是婴幼儿）。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">成功画像指标：</span>
              <span className="text-gray-900">短期：史达功处方频率提升至"常规选择"。中期：在呼吸专科门诊中替代复方猫爪草定成为典型首选药。长期：实现史达功临床反馈的良性循环（信任度验证）。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">潜在挑战与注意：</span>
              <span className="text-gray-900">缺乏可靠效力：医院对复方猫爪草定的固有使用习惯可能难以快速改变，需通过对比数据逐步说服。沟通效率限制：医院门诊时间紧张，需在5分钟内精准传递核心优势（如安全性、起效时间）。数据支持需求：需准备充分的临床对照数据（如不良反应率、疗效对比）以降低决策门槛。</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">Prompt 来源：</span>
              <span className="text-gray-900">系统企业默认提示词</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">负责人：</span>
              <span className="text-gray-900">huanglin86@999.com.cn</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">创建时间：</span>
              <span className="text-gray-900">2026/04/15 10:17:11</span>
            </div>
            <div className="text-gray-500">
              <span className="w-20 inline-block">更新时间：</span>
              <span className="text-gray-900">2026/04/15 10:18:22</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#111]">
              人设 <span className="text-gray-500">3</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#111]">
              预设场景 <span className="text-gray-500">5</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#111]">
              已生成 RTC 场景 <span className="text-gray-500">0</span>
            </div>
          </div>
        </div>

        {/* Project Documents */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-2 font-bold text-[15px] text-[#111]">
              <FileText size={18} className="text-gray-600" />
              项目文档 - 史达功儿科呼吸专科推广优化项目
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors bg-white">
              <RefreshCw size={12} />
              刷新
            </button>
          </div>
          <table className="w-full text-left text-[13px]">
            <thead className="text-gray-500 bg-white">
              <tr>
                <th className="py-3 px-6 font-medium">素材名称</th>
                <th className="py-3 px-6 font-medium">类型</th>
                <th className="py-3 px-6 font-medium">状态</th>
                <th className="py-3 px-6 font-medium">创建时间</th>
                <th className="py-3 px-6 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    <FileText size={14} />
                    项目_说明内容
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-600">TEXT</td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 bg-green-50 text-green-600 rounded text-[11px] font-bold">完成</span>
                </td>
                <td className="py-4 px-6 text-gray-600">2026/04/15 10:17</td>
                <td className="py-4 px-6 text-right">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                    <Eye size={12} />
                    查看详情
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Department Authorization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2 font-bold text-[15px] text-[#111] bg-gray-50/50">
            <Lock size={18} className="text-gray-600" />
            部门授权管理
          </div>
          <div className="p-6 space-y-6">
            <div className="text-[13px] text-gray-400 italic">暂无部门授权</div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#111]">
                <Plus size={16} />
                添加部门授权
              </div>
              <div className="flex gap-4">
                <select className="flex-1 px-3 py-2 text-[13px] border border-gray-200 rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 appearance-none bg-white">
                  <option>选择部门</option>
                </select>
                <select className="flex-1 px-3 py-2 text-[13px] border border-gray-200 rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 appearance-none bg-white">
                  <option>查看者 (Viewer)</option>
                </select>
              </div>
              <button className="w-full py-2.5 text-[13px] font-bold text-white bg-gray-400 rounded-lg cursor-not-allowed">
                确认添加
              </button>
            </div>
          </div>
        </div>

        {/* RTC Reports */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 font-bold text-[15px] text-[#111] bg-gray-50/50">
            RTC 场景报告（0）
          </div>
          <div className="p-6 text-[13px] text-gray-400">
            该项目暂无报告
          </div>
        </div>

        {/* Personas and Scenes Section */}
        <div className="flex gap-6 items-start">
          {/* Left Column - List */}
          <div className="w-[300px] flex-shrink-0 space-y-6">
            {/* Personas List */}
            <div>
              <h3 className="font-bold text-[15px] text-[#111] mb-4">项目人设（3）</h3>
              <div className="space-y-3">
                <div className={`p-4 rounded-xl border ${activeTab === 'persona' ? 'border-gray-900 bg-white shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-300'} cursor-pointer transition-all`} onClick={() => setActiveTab('persona')}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#111] text-[14px]">陈建华</span>
                    <span className="text-[10px] font-bold tracking-wide text-gray-500">GENERATED</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mb-2">2026/04/15 10:18:41</div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[12px] font-medium">已生成 0/5</span>
                    <div className="flex items-center gap-1 text-[12px] text-gray-500 hover:text-black">
                      <Edit3 size={12} /> 编辑
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">多面手医生</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">犹豫难搞</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">实用主义</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">关系性价比</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">防卫抗拒</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#111] text-[14px]">万谷摘</span>
                    <span className="text-[10px] font-bold tracking-wide text-gray-500">GENERATED</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mb-2">2026/04/15 10:18:35</div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[12px] font-medium">已生成 0/5</span>
                    <div className="flex items-center gap-1 text-[12px] text-gray-500 hover:text-black">
                      <Edit3 size={12} /> 编辑
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">新时代医师</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">数字全化疗</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">家长路线派</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">循证实践</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">效率优先</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#111] text-[14px]">林芯兰</span>
                    <span className="text-[10px] font-bold tracking-wide text-gray-500">GENERATED</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mb-2">2026/04/15 10:18:23</div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[12px] font-medium">已生成 0/5</span>
                    <div className="flex items-center gap-1 text-[12px] text-gray-500 hover:text-black">
                      <Edit3 size={12} /> 编辑
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">循证医学</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">工作繁忙</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">谨慎期待</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">专科经验丰富</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded">防备抗拒</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenes List */}
            <div>
              <h3 className="font-bold text-[15px] text-[#111] mb-4">预设场景（5）</h3>
              <div className="space-y-3">
                <div className={`p-4 rounded-xl border ${activeTab === 'scene' ? 'border-gray-900 bg-white shadow-sm' : 'border-gray-100 bg-white hover:border-gray-300'} cursor-pointer transition-all`} onClick={() => setActiveTab('scene')}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-[#111] text-[14px] mb-1">清晰汇报</div>
                      <div className="text-[11px] text-gray-400">2026/04/15 14:50:47</div>
                    </div>
                    <span className="text-[12px] font-medium text-gray-600">待生成</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-gray-500">尚未生成 RTC 场景</span>
                    <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      立即预热
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-[#111] text-[14px] mb-1">化解分歧</div>
                      <div className="text-[11px] text-gray-400">2026/04/15 14:50:33</div>
                    </div>
                    <span className="text-[12px] font-medium text-gray-600">待生成</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-gray-500">尚未生成 RTC 场景</span>
                    <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      立即预热
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-[#111] text-[14px] mb-1">应对质询</div>
                      <div className="text-[11px] text-gray-400">2026/04/15 14:50:21</div>
                    </div>
                    <span className="text-[12px] font-medium text-gray-600">待生成</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-gray-500">尚未生成 RTC 场景</span>
                    <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      立即预热
                    </button>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-[#111] text-[14px] mb-1">促成谈判</div>
                      <div className="text-[11px] text-gray-400">2026/04/15 14:50:03</div>
                    </div>
                    <span className="text-[12px] font-medium text-gray-600">待生成</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-gray-500">尚未生成 RTC 场景</span>
                    <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      立即预热
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-[#111] text-[14px] mb-1">破冰连接</div>
                      <div className="text-[11px] text-gray-400">2026/04/15 14:49:49</div>
                    </div>
                    <span className="text-[12px] font-medium text-gray-600">待生成</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-gray-500">尚未生成 RTC 场景</span>
                    <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      立即预热
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Detail */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[600px] sticky top-6">
            {activeTab === 'persona' ? (
              <>
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=chen&backgroundColor=b6e3f4" alt="avatar" className="w-12 h-12 rounded-full bg-blue-50" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-[18px] font-bold text-[#111]">陈建华</h2>
                    </div>
                    <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><span className="text-gray-400">👤</span> GENERATED</span>
                      <span className="flex items-center gap-1"><span className="text-gray-400">🕒</span> 2026/04/15 10:18</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[12px] rounded-full font-medium">多面手医生</span>
                      <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[12px] rounded-full font-medium">犹豫难搞</span>
                      <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[12px] rounded-full font-medium">实用主义</span>
                      <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[12px] rounded-full font-medium">关系性价比</span>
                      <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[12px] rounded-full font-medium">防卫抗拒</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[14px] text-[#111] mb-2">简介</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      陈建华是基层医疗多面手，作为社区医院唯一儿科医生，日常处理常见常见病并兼顾与本院派配。面临看诊拉槽压力，误区对超负荷顾虑。看似病例转诊或脾气特意手段有犹豫痛点。关注药量是否纳入基层医保目录、单价低成本、向自我修养及提供通俗疗效背书。沟通时做好生活化闲聊、决绝复杂长皮绕影响、当前...
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-black text-white text-[13px] font-bold rounded-lg hover:bg-gray-800 transition-colors">
                      一键预览人设
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 text-[13px] font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye size={14} />
                      查看详情
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 text-[12px]">
                    <div>
                      <div className="text-gray-400 mb-1">创建时间：</div>
                      <div className="text-gray-600">2026/04/15 10:18</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">更新时间：</div>
                      <div className="text-gray-600">2026/04/15 10:18</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <h2 className="text-[18px] font-bold text-[#111] mb-2">陈建华 - 清晰汇报</h2>
                    <div className="text-[12px] text-gray-400">
                      场景 ID：a108cad6-5586-421d-acb6-867b33795471 · 更新时间：2026/04/15 14:50:47
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-600 text-[12px] font-medium rounded-md hover:bg-gray-50 transition-colors">
                      <Edit3 size={12} />
                      编辑 RTC 场景
                    </button>
                    <button className="px-3 py-1.5 border border-gray-200 text-gray-600 text-[12px] font-medium rounded-md hover:bg-gray-50 transition-colors">
                      重新预热
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[14px] text-[#111] mb-2">场景元数据</h4>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-[13px] text-gray-500">
                      无
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[14px] text-[#111] mb-2">RTC 场景生成结果</h4>
                    <div className="text-[13px] text-gray-500">
                      尚未为该角色生成 RTC 场景。
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

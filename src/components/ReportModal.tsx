import React from 'react';
import { X, ChevronLeft, Share } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const radarData = [
  { subject: '沟通力', A: 90, fullMark: 100 },
  { subject: '亲和力', A: 85, fullMark: 100 },
  { subject: '专业度', A: 95, fullMark: 100 },
  { subject: '应变力', A: 88, fullMark: 100 },
  { subject: '逻辑性', A: 92, fullMark: 100 },
];

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-[480px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        style={{ maxHeight: '650px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 flex-shrink-0 bg-white">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md transition-colors text-gray-500">
              <ChevronLeft size={20} />
            </button>
            <span className="text-[15px] font-bold text-[#111]">报告详情</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
              <Share size={14} />
              分享数据
            </button>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-400">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-8 bg-gray-50/30">
          
          {/* Main Score Card */}
          <div className="bg-[#151921] rounded-2xl p-6 shadow-lg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10">
              <div className="text-[13px] text-gray-400 mb-1">综合得分</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[42px] font-bold text-[#FBBF24] leading-none">95</span>
                <span className="text-[14px] text-gray-400 font-medium">/ 100</span>
              </div>
              
              <p className="text-[13px] text-gray-300 leading-relaxed mb-5">
                表现优异，在核心评价维度中展现了出色的能力，能够较好地应对客户疑虑，业务能力强。建议在部分细节上继续优化，提升服务体验。
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-[12px]">
                  AI
                </div>
                <div>
                  <div className="text-[12px] text-gray-400 mb-1">AI 综合评价</div>
                  <div className="text-[13px] text-gray-200 leading-snug">本次演练整体表现优秀，沟通顺畅，重点突出。专业知识储备扎实，能够快速响应客户的提问。</div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Scoring Dimensions */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[15px] font-bold text-[#111] mb-1">内部打分维度</h3>
            <p className="text-[12px] text-gray-500 mb-5">基于预设的内部打分维度评估</p>
            
            <div className="space-y-4">
              {[
                { id: 1, name: '沟通表达能力', score: 90, desc: '表达清晰流畅，语速适中，能够准确传递信息。' },
                { id: 2, name: '专业知识掌握', score: 85, desc: '对产品知识有较好掌握，但在竞品对比方面稍显不足。' },
                { id: 3, name: '异议处理能力', score: 95, desc: '面对客户的拒绝和疑虑，能够巧妙化解并引导话题。' },
                { id: 4, name: '需求挖掘能力', score: 90, desc: '通过有效提问，成功挖掘出客户的潜在处方需求。' },
              ].map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-[12px] font-bold mt-0.5">
                    {item.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-bold text-gray-800">{item.name}</span>
                      <span className="text-[13px] font-bold text-red-500">{item.score}分</span>
                    </div>
                    <div className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Model Capabilities */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[15px] font-bold text-[#111] mb-1">AI模型下能力</h3>
            <p className="text-[12px] text-gray-500 mb-2">基于 AI 模型对整体能力的分析</p>
            <div className="h-[240px] w-full -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="能力" dataKey="A" stroke="#3b82f6" strokeWidth={2} fill="#3b82f6" fillOpacity={0.2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Core Evaluation Dimensions */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[15px] font-bold text-[#111] mb-1">核心评价维度</h3>
            <p className="text-[12px] text-gray-500 mb-5">基于核心评价维度的表现分析</p>
            
            <div className="space-y-4">
              {[
                { title: '客户触达', status: '表现优异', type: 'excellent', desc: '能够快速建立联系，准确把握客户需求，并提供有效的解决方案。沟通技巧熟练，能够引导话题。', ai: '在沟通中可增加更多互动环节，增强客户参与感。' },
                { title: '需求确认', status: '表现良好', type: 'good', desc: '基本确认了客户的核心诉求，但在深层次动机挖掘上还有提升空间。', ai: '建议使用开放式问题，引导客户表达更多隐性需求。' },
                { title: '方案推荐', status: '表现优异', type: 'excellent', desc: '方案匹配度高，能够清晰阐述产品优势及对客户的价值。', ai: '产品FAB讲解很到位，继续保持。' },
                { title: '异议处理', status: '有待提升', type: 'warning', desc: '面对客户对价格的质疑时，处理略显生硬，缺乏同理心表达。', ai: '遇到价格异议，先认同客户感受，再转向价值重塑。' },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-[14px] text-gray-800">{item.title}</div>
                    <span className={`px-2 py-0.5 text-[11px] font-bold rounded ${
                      item.type === 'excellent' ? 'bg-red-50 text-red-600' :
                      item.type === 'good' ? 'bg-blue-50 text-blue-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-600 mb-3 leading-relaxed">{item.desc}</p>
                  <div className="bg-white border border-green-100 p-3 rounded-lg text-[12px] text-gray-700">
                    <span className="font-bold text-green-600 mr-1">AI 建议:</span> {item.ai}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Chat Scoring */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[15px] font-bold text-[#111] mb-1">交互逐条打分</h3>
            <p className="text-[12px] text-gray-500 mb-5">对话过程中的逐句点评</p>
            
            <div className="space-y-6">
              {[
                { 
                  user: "王主任您好，我是999的医药代表小李。今天过来主要是想跟您交流一下咱们科室最近呼吸道感染患儿的用药情况。",
                  score: 95,
                  comment: "开场白标准且礼貌，清晰表达了身份和拜访目的，没有过度寒暄，符合主任门诊时间紧张的预设场景。"
                },
                { 
                  user: "我了解到您平时比较喜欢开复方猫爪草定，但其实史达功在靶向止咳方面效果更快，特别是针对顽固性咳嗽。",
                  score: 70,
                  comment: "直接否定主任的处方习惯可能引起反感。建议先肯定主任的经验，再通过具体病例或数据引入史达功的优势。"
                }
              ].map((chat, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-[12px] font-medium text-gray-600">
                      我
                    </div>
                    <div className="flex-1 bg-blue-50/50 border border-blue-100 rounded-2xl rounded-tl-none p-3 text-[13px] text-gray-800 leading-relaxed">
                      {chat.user}
                    </div>
                  </div>
                  <div className="flex gap-3 ml-11">
                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl rounded-tr-none p-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[12px] font-bold text-gray-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          AI 评估
                        </span>
                        <span className="text-[12px] font-bold text-red-500">{chat.score}分</span>
                      </div>
                      <p className="text-[12px] text-gray-600 leading-relaxed">{chat.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

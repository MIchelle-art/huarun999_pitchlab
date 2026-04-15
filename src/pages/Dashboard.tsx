import React, { useState } from 'react';
import { useStore } from '../store';
import { Building2, Users, Settings, Plus, Pencil, Trash2 } from 'lucide-react';
import { clsx } from 'clsx';

export default function Dashboard() {
  const { stats, departments, deleteDepartment } = useStore();
  const [activeTab, setActiveTab] = useState('部门管理');

  const tabs = ['部门管理', '员工管理', '权限管理', '点数管理', '场景配置', 'Prompt 模板'];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111] mb-2">演示企业</h1>
        <p className="text-gray-500 text-sm">
          用于演示最新版pitchlab的功能，新用户默认点赞数1000
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <span className="text-sm font-medium">部门总数</span>
            <Building2 size={16} />
          </div>
          <div className="text-3xl font-bold text-[#111]">{stats.departmentCount}</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <span className="text-sm font-medium">员工总数</span>
            <Users size={16} />
          </div>
          <div className="text-3xl font-bold text-[#111]">{stats.employeeCount}</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <span className="text-sm font-medium">创建时间</span>
            <Settings size={16} />
          </div>
          <div className="text-lg font-bold text-[#111] mt-auto">{stats.createdDate}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              activeTab === tab
                ? "bg-white text-[#111] shadow-sm"
                : "text-gray-500 hover:text-[#111]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Department Management Section */}
      {activeTab === '部门管理' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            <div>
              <h2 className="text-lg font-bold text-[#111]">部门管理</h2>
              <p className="text-gray-500 text-sm mt-1">管理企业的所有部门</p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <Plus size={16} />
              创建部门
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-sm">
                  <th className="py-4 px-6 font-medium w-1/5">部门名称</th>
                  <th className="py-4 px-6 font-medium w-2/5">描述</th>
                  <th className="py-4 px-6 font-medium w-1/6">员工数</th>
                  <th className="py-4 px-6 font-medium w-1/6">状态</th>
                  <th className="py-4 px-6 font-medium">操作</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {departments.map((dept) => (
                  <tr key={dept.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#111]">{dept.name}</td>
                    <td className="py-4 px-6 text-gray-600">{dept.description}</td>
                    <td className="py-4 px-6 text-gray-600">{dept.employeeCount}</td>
                    <td className="py-4 px-6 text-gray-600">
                      {dept.isDefault && <span className="text-gray-500">默认部门</span>}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3 text-gray-400">
                        <button className="hover:text-[#111] transition-colors" title="编辑">
                          <Pencil size={16} />
                        </button>
                        {!dept.isDefault && (
                          <button 
                            className="hover:text-red-500 transition-colors" 
                            title="删除"
                            onClick={() => deleteDepartment(dept.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

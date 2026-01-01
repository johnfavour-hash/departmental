
import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Plus, User, ShieldCheck, Mail, Phone, Calendar, X } from 'lucide-react';
import { Student } from '../types';

const STUDENTS_DATA: Student[] = [
  { id: '1', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
  { id: '2', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '2', role: 'PGD' },
  { id: '3', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '3', role: 'Masters' },
  { id: '4', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
  { id: '5', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
  { id: '6', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
  { id: '7', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
  { id: '8', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
  { id: '9', studentId: 'U2020/2502201', name: 'Justice Amadi', email: 'justiceamadi@gmail.com', phoneNo: '+2348012345678', department: 'Computer Science', level: '100', programId: '1', role: 'Bachelors' },
];

export const StudentsView: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const getProgramBadge = (role: string) => {
    switch (role) {
      case 'Bachelors':
        return 'bg-[#2ECC71] text-white';
      case 'PGD':
        return 'bg-[#95A5A6] text-white';
      case 'Masters':
        return 'bg-[#B19CD9] text-white';
      default:
        return 'bg-slate-200 text-slate-600';
    }
  };

  return (
    <div className="relative animate-in fade-in duration-500">
      <div className={`space-y-6 transition-all duration-300 ${selectedStudent ? 'pr-[400px]' : ''}`}>
        <div className="flex justify-between items-start mb-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900">Students</h2>
          </div>
          <button className="bg-[#1D7AD9] text-white px-8 py-3 rounded-md flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
            <Plus size={20} /> Assign New Role
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-end gap-3 border-b border-gray-50">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search by name, email or code" 
                className="bg-white border border-slate-200 text-xs py-2 pl-4 pr-3 rounded-lg outline-none w-80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" 
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
              <Filter size={16} className="text-slate-800" />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/60 border-b border-gray-100 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                  <th className="px-6 py-5 w-12 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/10" />
                  </th>
                  <th className="px-6 py-5">Student ID</th>
                  <th className="px-6 py-5">Name</th>
                  <th className="px-6 py-5">Email</th>
                  <th className="px-6 py-5">Phone No</th>
                  <th className="px-6 py-5">Department</th>
                  <th className="px-6 py-5">Level</th>
                  <th className="px-6 py-5">Program</th>
                  <th className="px-6 py-5 text-right pr-12">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs">
                {STUDENTS_DATA.map((s, idx) => (
                  <tr 
                    key={`${s.id}-${idx}`}
                    className={`hover:bg-slate-50/50 transition-colors group cursor-pointer ${selectedStudent?.id === s.id ? 'bg-blue-50/50' : ''}`}
                    onClick={() => setSelectedStudent(s)}
                  >
                    <td className="px-6 py-5 text-center" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/10" />
                    </td>
                    <td className="px-6 py-5 text-slate-400 font-medium">{s.studentId}</td>
                    <td className="px-6 py-5 font-bold text-slate-700">{s.name}</td>
                    <td className="px-6 py-5 text-slate-500">{s.email}</td>
                    <td className="px-6 py-5 text-slate-500">{s.phoneNo}</td>
                    <td className="px-6 py-5 text-slate-500">{s.department}</td>
                    <td className="px-6 py-5 text-slate-500">{s.level}</td>
                    <td className="px-6 py-5">
                      <span className={`px-5 py-1.5 rounded-lg text-[10px] font-bold shadow-sm inline-block min-w-[90px] text-center ${getProgramBadge(s.role || '')}`}>
                        {s.role}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right pr-12">
                      <button className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedStudent && (
        <div className="fixed top-16 right-0 w-[380px] h-[calc(100vh-64px)] bg-white border-l border-gray-100 shadow-2xl z-40 animate-in slide-in-from-right duration-300 flex flex-col">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Student Bio</h3>
            <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"><X size={20}/></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                <User size={40} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">{selectedStudent.name}</h4>
              <p className="text-xs text-slate-400">{selectedStudent.studentId}</p>
            </div>

            <div className="space-y-4">
              <BioItem icon={<Mail size={14}/>} label="Email Address" value={selectedStudent.email} />
              <BioItem icon={<Phone size={14}/>} label="Phone Number" value={selectedStudent.phoneNo} />
              <BioItem icon={<Calendar size={14}/>} label="Year Enrolled" value="2020" />
            </div>

            <div className="pt-6 border-t border-gray-50">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-600" /> Academic Roles
              </h5>
              <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700">Assign as Class Rep</span>
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Class Rep Permissions</label>
                  <div className="flex flex-wrap gap-2">
                    <PermissionToggle label="Post Updates" active />
                    <PermissionToggle label="View Results" />
                    <PermissionToggle label="Manage Attendance" active />
                  </div>
                </div>
                <div className="pt-2">
                  <button className="w-full bg-[#1D7AD9] text-white py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-500/10">Save Role Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BioItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-slate-400">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase">{label}</p>
      <p className="text-xs font-semibold text-slate-700">{value}</p>
    </div>
  </div>
);

const PermissionToggle: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <span className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-200 hover:border-blue-200 hover:text-blue-500'}`}>
    {label}
  </span>
);

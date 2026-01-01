
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatCard } from './components/StatCard';
import { AnnouncementList } from './components/AnnouncementList';
import { ProgramCoursesView } from './components/ProgramCoursesView';
import { StudentsView } from './components/StudentsView';
import { StaffView } from './components/StaffView';
import { AnnouncementsView } from './components/AnnouncementsView';
import { PaymentsView } from './components/PaymentsView';
import { SettingsView } from './components/SettingsView';
import { NotificationsView } from './components/NotificationsView';
import { RolesView } from './components/RolesView';
import { Users, CreditCard, UserCheck, TrendingUp, Building2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Announcement, ChartDataItem, ViewType } from './types';

const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  { id: '1', title: 'Session Setup Complete', description: 'Academic session 2024/2025 has been successfully initialized for the department.', date: '2025-01-02' },
  { id: '2', title: 'New Course Prerequisites', description: 'Updated prerequisites for CSC 301. Please review the course catalog.', date: '2025-01-05' },
];

const REVENUE_DATA: ChartDataItem[] = [
  { year: '2024', value: 50 },
  { year: '2025', value: 25 },
  { year: '2026', value: 75 },
  { year: '2027', value: 85 },
  { year: '2028', value: 30 },
  { year: '2029', value: 70 },
];

const GROWTH_DATA: ChartDataItem[] = [
  { year: '2024', value: 500 },
  { year: '2025', value: 250 },
  { year: '2026', value: 750 },
  { year: '2027', value: 850 },
  { year: '2028', value: 300 },
  { year: '2029', value: 700 },
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard label="Total Students" value="5,000" icon={<Users size={24} />} bgColor="bg-orange-50" />
              <StatCard label="Total Revenue (Dept)" value="₦38,000,000" icon={<CreditCard size={24} />} bgColor="bg-emerald-50" />
              <StatCard label="Academic Staff" value="100" icon={<UserCheck size={24} />} bgColor="bg-sky-50" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-slate-800 flex items-center gap-2"><TrendingUp size={20} className="text-emerald-500" /> Department Performance</h3>
                    <p className="text-xs text-slate-400 mt-1">Fee collection vs Projections</p>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={REVENUE_DATA}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                      <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                      <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 4, fill: '#22c55e', strokeWidth: 2, stroke: '#fff' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="lg:col-span-1">
                <AnnouncementList announcements={announcements} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div><h3 className="font-bold text-slate-800">Enrollment Growth</h3><p className="text-xs text-slate-400 mt-1">Student registration trends</p></div>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={GROWTH_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
      case 'Program & Courses': return <ProgramCoursesView />;
      case 'Students': return <StudentsView />;
      case 'Staff': return <StaffView />;
      case 'Payments': return <PaymentsView />;
      case 'Roles & Permissions': return <RolesView />;
      case 'Announcements': return <AnnouncementsView />;
      case 'Settings': return <SettingsView />;
      case 'Notifications': return <NotificationsView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <Building2 size={48} className="mb-4 text-slate-200" />
            <h2 className="text-xl font-semibold">{activeView} Section</h2>
            <p className="mt-2">Connecting to departmental resources...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 ml-64 bg-[#F8FAFC]">
        <Header onViewChange={setActiveView} />
        <div className="p-8 max-w-[1600px] mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;

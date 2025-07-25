import { useState } from 'react';
import {
  Bell,
  Calendar,
  Edit,
  BookOpen,
  CheckCircle,
  FileText,
  Activity,
  Clock,
  CircleDot,
} from 'lucide-react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function StudentDashboard() {
  const [assignments] = useState([
    {
      subject: 'Computer Science',
      page: 'Book 4, pg 206',
      date: '06 Jul',
      status: 'Due',
    },
    {
      subject: 'Ndebele Essay',
      page: 'Book 4, pg 42',
      date: '14 Jul',
      status: 'Open',
    },
    {
      subject: 'Mathematics Matrices',
      page: 'Book 4, pg 226',
      date: '16 Jul',
      status: 'Open',
    },
    {
      subject: 'Physics Lab Report',
      page: 'Syllabus, 20',
      date: '20 Jul',
      status: 'Waiting',
    },
  ]);

  const [activities] = useState([
    { action: 'Submitted Chemistry Report', time: '2 hours ago' },
    { action: 'Joined Form 4 Study Group', time: '1 day ago' },
    { action: 'Graded Maths Quiz #3', time: '2 days ago' },
  ]);

  const [progress] = useState([
    { subject: 'Physics', grade: 'A', percent: 85, color: 'bg-blue-500' },
    { subject: 'Mathematics', grade: 'A', percent: 80, color: 'bg-blue-500' },
    { subject: 'Ndebele', grade: 'B', percent: 70, color: 'bg-green-500' },
    { subject: 'Computer Science', grade: 'B', percent: 61, color: 'bg-green-500' },
  ]);

  return (
    <div className="font-sans">
      <header className="flex items-center space-x-4 p-4 bg-white shadow"></header>

      <main className="p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-between mb-6 mt-6">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, Sharyn!</h1>
            <p className="text-gray-500">Ready to continue your learning journey?</p>
          </div>

          <div className="flex items-center space-x-2 ">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-black" />
            </div>
            <span className="text-sm text-gray-700">Notifications</span>
            <div className="w-8 h-8 bg-orange-400 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/photo.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ">
          <StatBox
            title="Overall GPA"
            value="3.8"
            Icon={Activity}
            iconBg="bg-purple-200"
          />
          <StatBox
            title="Subjects"
            value="10"
            Icon={BookOpen}
            iconBg="bg-green-200"
          />
          <StatBox
            title="Passes"
            value="8"
            Icon={CheckCircle}
            iconBg="bg-purple-100"
          />
          <StatBox
            title="Assignments Due"
            value="4"
            Icon={CircleDot}
            iconBg="bg-orange-200"
          />
        </section>

        <Section
          title={
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-black" />
              <span className="text-2xl text-black">Upcoming Assignments</span>
            </div>
          }
        >
          <div className="space-y-4">
            {assignments.map((item, i) => {
              let priority = '';
              let badgeColor = '';

              if (item.status === 'Due') {
                priority = 'High';
                badgeColor = 'bg-red-600';
              } else if (item.status === 'Open') {
                priority = 'Medium';
                badgeColor = 'bg-black';
              } else if (item.status === 'Waiting') {
                priority = 'Low';
                badgeColor = 'bg-gray-500';
              }

              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-3  bg-white rounded-r"
                >
                 
                  <div className="flex items-center space-x-3 ">
                    
                    <Edit className="w-5 h-5 text-black" />
                    <div>
                      <div className="font-medium text-black">{item.subject}</div>
                      {item.page && <div className="text-sm text-gray-700">{item.page}</div>}
                    </div>
                  </div>

                 
                  <div className="text-right">
                    <div className="text-sm text-black mt-1">{item.date}</div>
                    <div className="flex items-center justify-end text-xs text-gray-600">
                      <div className={`${badgeColor} text-white mr-5 px-2 py-1 rounded-full text-xs font-medium`}>
                      {priority}
                    </div>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>Due soon</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section  title={
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-black" />
              <span className="text-2xl text-black">Recent Activities</span>
            </div>
          }>
          {activities.map((a, i) => (
            <div key={i} className="flex items-center space-x-2 py-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <div>
                <p className="text-sm font-medium">{a.action}</p>
                <p className="text-xs text-gray-500">{a.time}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section title="Course Progress">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {progress.map((p, i) => (
              <div key={i} className="bg-white shadow p-4 rounded">
                <div className="flex justify-between">
                  <p className="font-medium">{p.subject}</p>
                  <span className="text-sm bg-gray-200 px-2 rounded">{p.grade}</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded">
                  <div
                    className={`h-full rounded ${p.color}`}
                    style={{ width: `${p.percent}%` }}
                  ></div>
                </div>
                <p className="text-xs text-right mt-1 text-gray-500">{p.percent}%</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Quick Action">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickAction label="Access Library" />
            <QuickAction label="Schedule Meeting" />
            <QuickAction label="Timetable" />
          </div>
        </Section>
      </main>
    </div>
  );
}

function StatBox({ title, value, Icon, iconBg }) {
  return (
    <div className="bg-pink-100 p-4 rounded text-black">
      <div className="flex items-center space-x-4">
        {Icon && (
          <div className={`p-2 rounded ${iconBg}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white shadow p-4 rounded mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}

function QuickAction({ label }) {
  return (
    <button className="w-full bg-white border border-gray-300 p-4 rounded shadow hover:bg-gray-50">
      {label}
    </button>
  );
}

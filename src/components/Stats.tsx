import React, { useEffect, useState } from 'react';
import { Eye, User, Diamond } from 'lucide-react';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

interface StatBlockProps {
  icon: React.ElementType;
  value: React.ReactNode;
  label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ icon: Icon, value, label }) => (
  <div className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all">
    <Icon className="w-10 h-10 mx-auto mb-4 text-purple-500" />
    <div className="text-4xl font-bold mb-2 text-white">{value}</div>
    <div className="text-gray-400 text-lg">{label}</div>
  </div>
);

export default function Stats() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white animate-fade-in">
          Over <span className="text-purple-500"><AnimatedNumber end={100000} /></span> people 
          use bios.lol — What are you waiting for?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatBlock 
            icon={Eye} 
            value={<AnimatedNumber end={10600000} />} 
            label="Profile Views" 
          />
          <StatBlock 
            icon={User} 
            value={<AnimatedNumber end={300000} />} 
            label="Users" 
          />
          <StatBlock 
            icon={Diamond} 
            value={<AnimatedNumber end={10700} />} 
            label="Subscribers" 
          />
        </div>
      </div>
    </section>
  );
}
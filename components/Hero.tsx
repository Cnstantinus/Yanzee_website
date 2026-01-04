import React from 'react';
import { Button } from './Button';
import { ArrowRight, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              引领数字化转型新浪潮
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
              用科技重塑 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                商业的无限可能
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl">
              星云科技 (NovaTech) 致力于为全球企业提供最前沿的软件开发、人工智能及云端架构解决方案，助您在数字经济时代抢占先机。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                立即咨询
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                探索服务
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>全球 500+ 合作伙伴</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div>98% 客户满意度</div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://picsum.photos/800/600?random=1" 
                  alt="Modern Office Technology" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">创新研发中心</p>
                  <p className="text-sm opacity-90">上海 · 浦东</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

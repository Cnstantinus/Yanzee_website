import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-sm font-medium border border-violet-100">
              <Sparkles className="h-4 w-4" />
              <span>内核 · 外在 · 应用三位一体</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
              打造您的专属 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                3D 智能数字员工
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl">
              衍知数字人 (Yanzee Digital Human) 突破传统虚拟形象限制，融合大模型大脑，具备“能说、会动、可理解”的跨感知能力，助力企业低成本实现数字化转型。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="bg-violet-600 hover:bg-violet-700 focus:ring-violet-500" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                立即定制
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                了解产品
              </Button>
            </div>
            
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6">
                <div>
                    <div className="text-2xl font-bold text-slate-900">20万+</div>
                    <div className="text-sm text-slate-500">首笔订单成交</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-slate-900">70%</div>
                    <div className="text-sm text-slate-500">研发投入占比</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-slate-900">3s</div>
                    <div className="text-sm text-slate-500">超低延迟交互</div>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000&auto=format&fit=crop" 
                  alt="3D Digital Human Interface" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                   <div className="text-white">
                      <div className="inline-flex items-center gap-2 mb-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm border border-white/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>实时交互中</span>
                      </div>
                      <p className="font-medium text-lg">全仿真 · 高定制 · 实时响应</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
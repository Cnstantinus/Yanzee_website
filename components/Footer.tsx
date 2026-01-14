import React from 'react';
import { Rocket, Linkedin, Twitter, Facebook, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4 text-white">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">衍知科技</span>
             </div>
             <p className="max-w-xs text-sm text-slate-400 mb-6">
               致力于为全球企业提供卓越的数字化转型方案，用技术连接未来，创造无限商业价值。
             </p>
             <div className="flex gap-4">
               {[Linkedin, Twitter, Facebook, Github].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                   <Icon size={18} />
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">首页</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">关于我们</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">核心业务</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">服务支持</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">加入我们</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 衍知科技 (YanzeeTech). All rights reserved.</p>
          <p className="mt-2 md:mt-0">Powered by React</p>
        </div>
      </div>
    </footer>
  );
};
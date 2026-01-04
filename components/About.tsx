import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-blue-100 rounded-2xl -z-0"></div>
              <div className="absolute top-10 -left-10 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                   <div className="text-4xl font-bold text-blue-600">8+</div>
                   <div className="text-sm text-slate-600 leading-tight">年的行业<br/>深耕经验</div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase">关于星云科技</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              值得信赖的技术合作伙伴
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              星云科技 (NovaTech) 成立于2015年，总部位于上海。我们汇聚了来自谷歌、微软、阿里等顶尖科技企业的精英人才，致力于通过技术创新推动商业变革。
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              我们的使命是让每一个企业都能平等地享受到数字化带来的红利。无论是初创公司还是世界500强，我们都一视同仁，提供最优质的定制化服务。
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "ISO 27001 信息安全认证",
                "国家高新技术企业",
                "24/7 全天候技术支持",
                "100+ 成功交付案例",
                "敏捷开发流程",
                "透明化项目管理"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { GraduationCap, Award, Zap, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-violet-600 font-semibold tracking-wide uppercase mb-3">关于衍知科技</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              汇聚顶尖高校智慧 <br/>
              <span className="text-slate-500 text-2xl">赋能中小企业未来</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              衍知科技 (YanzeeTech) 是一家专注于 AI 数字人技术的创新型科技公司。我们的核心使命是打破 AI 技术壁垒，通过“内核·外在·应用”三位一体的解决方案，为企业提供买得起、用得好的智能数字员工。
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <GraduationCap size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">精英研发团队</h4>
                  <p className="text-slate-600 text-sm">
                    团队平均年龄 21 岁，成员来自伦敦国王学院 (KCL)、苏黎世联邦理工 (ETH)、上海交大、港科大等顶尖学府。曾在华为、360、月之暗面等知名企业积累了深厚的算法与工程经验。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                   <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">自主知识产权</h4>
                  <p className="text-slate-600 text-sm">
                    已启动多项关于 3D 建模、面部识别优化及交互算法的专利与软著申请。拥有全流程自主架构能力，支持从 0 到 1 打造专属数字人。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                   <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">显著的市场优势</h4>
                  <p className="text-slate-600 text-sm">
                    相比大厂方案，我们的成本降低约 90%，部署周期缩短 75%。支持私有化部署，解决 SaaS 模式的数据安全隐患，真正做到“可控、可信、可用”。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Young Innovators Team" 
                className="rounded-2xl shadow-2xl z-10 relative object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-violet-200 rounded-2xl -z-0"></div>
              
              <div className="absolute bottom-10 left-[-20px] bg-white p-5 rounded-xl shadow-xl max-w-xs border border-slate-100">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="text-green-500 h-8 w-8" />
                   <div>
                     <div className="font-bold text-slate-900">隐私安全保障</div>
                     <div className="text-xs text-slate-500">支持完全私有化部署</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
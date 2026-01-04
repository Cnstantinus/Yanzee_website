import React from 'react';
import { User, Bot, Cpu, Layers, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: <User className="h-8 w-8 text-white" />,
    title: "真 3D 虚拟形象",
    description: "采用先进建模与实时渲染引擎，打造具备影视级视觉表现的 3D 数字人。支持面部表情与肢体动作的高拟真驱动，适配移动端、PC 端及大屏等多终端展示。",
    color: "bg-pink-600"
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "智能数字员工",
    description: "打通“形象+大脑+执行”全链路。基于大模型语义理解，自动化执行前台接待、导诊答疑、辅助办公等任务，实现 7×24 小时高效服务。",
    color: "bg-violet-600"
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "领域定制 AI 平台",
    description: "利用 LoRA 微调与 RAG 检索增强技术，针对企业数据进行低成本私有化训练。确保数据隐私安全，同时提供高精度的行业知识问答能力。",
    color: "bg-indigo-600"
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: "私有化部署服务",
    description: "拒绝 SaaS 数据泄露风险，提供从底层算力到上层应用的全流程私有化部署方案。买断制交付，更加符合中小企业长期运营成本控制需求。",
    color: "bg-slate-700"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-violet-600 font-semibold tracking-wide uppercase mb-3">核心产品</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">全栈式数字人解决方案</h3>
          <p className="text-slate-600 text-lg">
            针对中小企业“不会转、不能转、不敢转”的痛点，我们提供高性价比、易部署、可定制的 AI 劳动力，让技术真正落地创造价值。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-violet-100 hover:shadow-xl transition-all duration-300">
              <div className="shrink-0">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${product.color} shadow-lg shadow-slate-900/10`}>
                  {product.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 group">
                  预约演示 <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
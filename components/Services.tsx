import React from 'react';
import { Code2, BrainCircuit, Cloud, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-white" />,
    title: "企业级软件开发",
    description: "从ERP到CRM，我们构建稳健、可扩展的定制化软件系统，完美契合您的业务流程，提升运营效率。",
    color: "bg-blue-600"
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-white" />,
    title: "人工智能解决方案",
    description: "利用最前沿的大模型技术，为您打造智能客服、自动化工作流及智能决策辅助系统，释放AI潜能。",
    color: "bg-indigo-600"
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "云端架构咨询",
    description: "作为云服务认证伙伴，我们提供从云迁移策略到混合云架构设计的全方位咨询，确保安全与高性能。",
    color: "bg-sky-600"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "大数据分析",
    description: "挖掘数据金矿，通过直观的可视化大屏与深度分析报告，让数据说话，为商业决策提供有力支撑。",
    color: "bg-violet-600"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">核心业务</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">全方位的技术赋能方案</h3>
          <p className="text-slate-600 text-lg">
            我们不仅仅提供技术，更提供伴随企业成长的长期价值。无论您处于数字化转型的哪个阶段，星云科技都能为您提供专业的支持。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-8 bg-slate-50 rounded-2xl hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

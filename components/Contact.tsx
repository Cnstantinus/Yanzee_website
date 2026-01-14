import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">联系我们</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">开启您的数字化之旅</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">致电咨询</h4>
                <p className="text-slate-600 text-sm mb-2">周一至周五 9:00 - 18:00</p>
                <a href="tel:4008889999" className="text-blue-600 font-semibold hover:underline">+86 19896207308</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">发送邮件</h4>
                <p className="text-slate-600 text-sm mb-2">如果您有任何项目需求，请邮件联系。</p>
                <a href="mailto:contact@yanzeetech.com" className="text-blue-600 font-semibold hover:underline">zachary@yanzee.top</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-3 bg-sky-100 text-sky-600 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">公司地址</h4>
                <p className="text-slate-600 text-sm">
                  湖南省长沙市岳麓区<br />
                  观沙岭街道滨江路53号<br />
                  楷林商务中心A座1602号
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10">
            {formStatus === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-12">
                 <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                   <Send className="h-10 w-10" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">提交成功！</h3>
                 <p className="text-slate-600 max-w-md">感谢您的留言。我们的业务专家将在24小时内与您取得联系。</p>
                 <Button className="mt-8" onClick={() => setFormStatus('idle')} variant="outline">
                   发送另一条消息
                 </Button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">姓名</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="您的称呼" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">邮箱</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="name@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">主题</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                    <option>业务咨询</option>
                    <option>项目合作</option>
                    <option>加入我们</option>
                    <option>其他</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">留言内容</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="请简要描述您的需求..."></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? '正在发送...' : '发送留言'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
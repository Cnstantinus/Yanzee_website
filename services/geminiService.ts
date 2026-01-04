import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for this demo per instructions, we use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const COMPANY_CONTEXT = `
你现在是“星云科技 (NovaTech)”的智能业务助手。请用专业、热情且简洁的中文回答客户的问题。

关于星云科技：
我们是一家专注于数字化转型的全球领先科技公司，成立于2015年，总部位于中国上海。

我们的核心业务（四大支柱）：
1. **企业级软件开发**：提供定制化ERP、CRM系统开发，支持高并发、高可用架构。
2. **人工智能解决方案**：利用最前沿的LLM技术，为企业打造智能客服、数据分析助手及自动化工作流。
3. **云端架构咨询**：AWS/Azure/Google Cloud 认证合作伙伴，提供云迁移、混合云架构设计服务。
4. **大数据分析**：从海量数据中挖掘商业价值，提供可视化大屏与决策支持系统。

联系方式：
- 电话：400-888-9999
- 邮箱：contact@novatech.com
- 地址：上海市浦东新区科技园88号

如果用户询问价格，请委婉表示需要根据具体需求评估，建议填写联系表单或拨打电话。
如果用户闲聊，请礼貌地将话题引回公司业务。
`;

let chatSession: Chat | null = null;

export const getGeminiChatResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: COMPANY_CONTEXT,
          temperature: 0.7,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: userMessage });
    return result.text || "抱歉，我暂时无法回答这个问题，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统繁忙，智能助手暂时离线，请直接联系人工客服。";
  }
};

export const resetChatSession = () => {
  chatSession = null;
};

export const DEFAULT_CHAT_MODEL: string = "deepseekv";

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: "deepseekv",
    name: "DeepSeek-V3",
    description: "DeepSeek-v3 对话机器人",
  },
  {
    id: "deepseekr",
    name: "DeepSeek-R1",
    description: "DeepSeek-R1 深度思考",
  },
];

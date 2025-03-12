import { deepseek } from "@ai-sdk/deepseek";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages, selectedChatModel } = await req.json();

  if (selectedChatModel === "deepseekv") {
    const result = streamText({
      model: deepseek("deepseek-chat"),
      messages,
    });

    return result.toDataStreamResponse({});
  }

  if (selectedChatModel === "deepseekr") {
    const result = streamText({
      model: deepseek("deepseek-reasoner"),
      messages,
    });

    return result.toDataStreamResponse({
      sendReasoning: true,
    });
  }
}

import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { fireworks } from "@ai-sdk/fireworks";
import { isTestEnvironment } from "../constants";
import { reasoningModel } from "./models.test";

export const myProvider = customProvider({
  languageModels: {
    deepseekv: fireworks("accounts/fireworks/models/deepseek-v3"),
    deepseekr: wrapLanguageModel({
      model: fireworks("accounts/fireworks/models/deepseek-r1"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
  },
});

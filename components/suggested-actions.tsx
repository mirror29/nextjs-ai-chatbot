"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChatRequestOptions, CreateMessage, Message } from "ai";
import { memo } from "react";

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: "Turbo 与 Vite 的区别",
      label: "并分析各自的优劣势",
      action: "分析Turbo 和vite 的区别及各自的优劣势，并深度解析两个框架",
    },
    {
      title: "实现一个快排",
      label: `要求时间复杂度为O(nlogn)`,
      action: `实现一个快排算法，要求时间复杂度为O(nlogn)`,
    },
    {
      title: "写出《三体4》",
      label: `以大刘的风格写出故事大纲`,
      action: `以大刘的风格写出《三体4》的故事大纲`,
    },
    {
      title: "分析八字格局，紫微斗数",
      label: "遇事不决，就信玄学",
      action:
        "请以我待会儿提供的个人信息为准，按八字格局、紫微斗数分析我整盘的格局适宜。要求结合流年四化（2025年），给出可执行建议，请抛开社交礼仪，直击要害。",
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? "hidden sm:block" : "block"}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              // window.history.replaceState({}, "", `/chat/${chatId}`);

              append({
                role: "user",
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);

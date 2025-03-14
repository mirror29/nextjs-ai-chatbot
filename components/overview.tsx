import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p>
          一个基于{" "}
          <code className="rounded-md bg-muted px-1 py-0.5">Next.js</code>15 +{" "}
          <code className="rounded-md bg-muted px-1 py-0.5">ShadcnUI</code> +{" "}
          <code className="rounded-md bg-muted px-1 py-0.5">useChat</code> hook
          开发的的 AI 聊天机器人，使用
          <code className="rounded-md bg-muted px-1 py-0.5">DeepSeek</code>
          开源模型。
        </p>
        <p>
          You can find this project on{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/mirror29/nextjs-ai-chatbot"
            target="_blank"
          >
            Github.
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

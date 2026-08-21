import { useEffect } from "react";

const CHATBOT_ID = "8128832269";
const SCRIPT_ID = "chtl-script";
const SCRIPT_SRC = "https://chatling.ai/js/embed.js";

declare global {
  interface Window {
    chtlConfig?: { chatbotId: string };
  }
}

/**
 * Loads the published Chatling chatbot once, client-side only.
 * Chatling renders and controls its own launcher / chat window.
 */
export function ChatlingWidget() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(SCRIPT_ID)) return;

    window.chtlConfig = { chatbotId: CHATBOT_ID };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("data-id", CHATBOT_ID);
    script.src = SCRIPT_SRC;
    // Failing to load must never surface an error to the user.
    script.onerror = () => {};

    document.body.appendChild(script);
  }, []);

  return null;
}

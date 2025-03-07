import React, { useEffect, useState, useRef } from "react";

const OurCustomChat = () => {
  const [chatWidgetCreated, setChatWidgetCreated] = useState(false);
  const [chatWidgetVisible, setChatWidgetVisible] = useState(true);
  const chatWidgetRef = useRef(null);

  useEffect(() => {
    if (chatWidgetVisible && !chatWidgetCreated) {
      createChatWidget();
      setChatWidgetCreated(true);
    }

    const handleMessage = (event) => {
      if (event.origin === "https://portal.clickinpedia.io/new-chat") {
        if (chatWidgetRef.current) {
          if (event.data.action === "hideChat") {
            setChatWidgetVisible(false);
          } else if (event.data.action === "showChat") {
            setChatWidgetVisible(true);
          }
        }
      } else {
        console.warn("Message origin not recognized:", event.origin);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [chatWidgetCreated, chatWidgetVisible]);

  const createChatWidget = () => {
    const referralUrl = encodeURIComponent(document.referrer);
    const currentPage = encodeURIComponent(window.location.href);
    const origin = encodeURIComponent(window.location.origin);
    const api = `https://portal.clickinpedia.io/new-chat?website=${origin}&currentPage=${currentPage}&redirect=${referralUrl}&theme=engineeringassignmenthelp-com&countryCode=61&phoneNumber=489921023&whatsappNo=489921023&email=help@engineeringasignhelp.com`;

    const chatWidget = document.createElement("iframe");
    chatWidget.src = api;
    chatWidget.id = "chat-widget-iframe";
    chatWidget.style.position = "fixed";
    chatWidget.style.bottom = "20px";
    chatWidget.style.right = "20px";
    chatWidget.style.width = "420px";
    chatWidget.style.height = "81%";
    chatWidget.style.border = "none";
    chatWidget.style.zIndex = "9999999";
    chatWidget.style.background = "transparent";
    chatWidget.style.pointerEvents = "none";
    chatWidget.style.opacity = "0";

    chatWidget.onload = () => {
      chatWidget.style.pointerEvents = "auto";
      chatWidget.style.opacity = "1";
    };

    chatWidget.onerror = () => {
      console.error("Failed to load the chat widget iframe.");
      chatWidget.style.display = "none";
    };

    document.body.appendChild(chatWidget);
    chatWidgetRef.current = chatWidget;
  };

  useEffect(() => {
    if (chatWidgetRef.current) {
      if (chatWidgetVisible) {
        chatWidgetRef.current.style.width = "420px";
        chatWidgetRef.current.style.height = "81%";
        chatWidgetRef.current.style.bottom = "20px";
        chatWidgetRef.current.style.borderRadius = "0px";
      } else {
        chatWidgetRef.current.style.width = "240px";
        chatWidgetRef.current.style.height = "233px";
        chatWidgetRef.current.style.bottom = "10px";
        chatWidgetRef.current.style.borderRadius = "34px";
      }
    }
  }, [chatWidgetVisible]);

  return (
    <button
      onClick={() => setChatWidgetVisible(!chatWidgetVisible)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {chatWidgetVisible}
    </button>
  );
};

export default OurCustomChat;

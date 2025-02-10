import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp2";

export default function App() {
  return (
    <FloatingWhatsApp
      accountName="Engineering Assignment Help"
      placeholder="Please type your query"
      messageDelay={3}
      statusMessage="Reply in just few seconds"
      darkMode={true}
      notificationSound="true"
      phoneNumber="+61489921023"
      avatar="../assets/favicon_a.webp"
    />
  );
}

import React, { useState } from "react";
import "./ChatBot.css";
import axios from "axios";

function ChatbotUI({ setToggleChat }) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { text: currentMessage, sender: "user" }]);
    const { data } = await axios.get(`/api/chatbot/${currentMessage}`);
    setCurrentMessage("");
    setMessages((prev) => [...prev, { text: data, sender: "bot" }]);
  };

  return (
    <div className="chatbot">
      <div className="fixed top-0 right-0 left-0 z-50 w-full h-screen  bg-[#909090]/50 flex justify-center items-center px-4 overflow-x-hidden overflow-y-auto duration-300 ease-in-out">
        <div className="relative w-full h-full max-w-xl md:h-auto">
          <div className="relative bg-white rounded-lg w-full h-full max-w-2xl md:h-auto shadow px-6 py-6 lg:px-8">
            <div className=" items-start">
              <div className="Heading">
                <h3 className="mb-4 text-xl bg-grey font-medium text-gray-900">
                  Hi I'm KIWI
                </h3>
                <button
                  onClick={() => setToggleChat(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
              </div>
              <div className="chat-container">
                <div className="message-list">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={
                        message.sender === "user"
                          ? "user-message text-sm"
                          : "bot-message text-sm"
                      }
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleFormSubmit} className="flex gap-4">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full py-2.5 px-2 rounded-lg border text-sm"
                  />
                  <button
                    id="send-btn"
                    type="submit"
                    className="text-white px-5 py-2.5 text-sm"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotUI;

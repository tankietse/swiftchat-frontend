"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import Image from "next/image";
import { Search, Send, Paperclip, Smile, Phone, Video, MoreVertical } from "lucide-react";

// Mock data - would be replaced with API calls in a real implementation
const MOCK_CONVERSATIONS = [
  {
    id: "1",
    name: "Sarah Johnson",
    lastMessage: "Let me know when you've reviewed the design files",
    time: "12:45 PM",
    unread: 2,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true
  },
  {
    id: "2",
    name: "Dev Team",
    lastMessage: "Alex: I've pushed the latest changes to the repo",
    time: "10:30 AM",
    unread: 0,
    avatar: "/images/group-chat.png",
    isGroup: true
  },
  {
    id: "3",
    name: "Mike Peters",
    lastMessage: "Thanks for the update!",
    time: "Yesterday",
    unread: 0,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    online: false
  },
  {
    id: "4",
    name: "Emma Wilson",
    lastMessage: "Can we reschedule the meeting to tomorrow?",
    time: "Yesterday",
    unread: 1,
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    online: true
  },
  {
    id: "5",
    name: "Project Taskforce",
    lastMessage: "James: The deadline has been extended to next Friday",
    time: "Monday",
    unread: 0,
    avatar: "/images/group-chat.png",
    isGroup: true
  }
];

const MOCK_MESSAGES = [
  {
    id: "m1",
    senderId: "other",
    content: "Hi there! How's the project coming along?",
    timestamp: "10:30 AM"
  },
  {
    id: "m2",
    senderId: "me",
    content: "Hey! It's going well. I've just finished the initial wireframes.",
    timestamp: "10:32 AM"
  },
  {
    id: "m3",
    senderId: "other",
    content: "That's great! When do you think you'll have something to show the client?",
    timestamp: "10:34 AM"
  },
  {
    id: "m4",
    senderId: "me",
    content: "I should have a presentable prototype by Thursday. I'll need your feedback before then though.",
    timestamp: "10:36 AM"
  },
  {
    id: "m5",
    senderId: "other",
    content: "Sure, send it over when it's ready and I'll take a look.",
    timestamp: "10:37 AM"
  },
  {
    id: "m6",
    senderId: "me",
    content: "Perfect! I'll share it in our project drive by tomorrow afternoon.",
    timestamp: "10:39 AM"
  },
  {
    id: "m7",
    senderId: "other",
    content: "Sounds good. Let me know if you need any help with anything in the meantime.",
    timestamp: "10:40 AM"
  }
];

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online?: boolean;
  isGroup?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

export default function MessagesPage() {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Simulate API call to fetch conversations
    setTimeout(() => {
      setConversations(MOCK_CONVERSATIONS);
      setIsLoading(false);
    }, 700);
  }, []);

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    // Mark as read
    setConversations(
      conversations.map(c => 
        c.id === conversation.id ? { ...c, unread: 0 } : c
      )
    );
    // Load messages for this conversation
    setMessages(MOCK_MESSAGES);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;
    
    // Add message to the conversation
    const message = {
      id: `m${Date.now()}`,
      senderId: "me",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
    
    // Update last message in conversations list
    setConversations(
      conversations.map(c => 
        c.id === selectedConversation.id 
          ? { 
              ...c, 
              lastMessage: `You: ${newMessage}`, 
              time: message.timestamp 
            } 
          : c
      )
    );
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
      
      <div className="flex flex-col md:flex-row h-full bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Conversations sidebar */}
        <div className="w-full md:w-80 flex-shrink-0 border-r border-gray-200">
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-opacity-50 rounded-full border-t-blue-500"></div>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {conversations.map(conversation => (
                  <li 
                    key={conversation.id}
                    onClick={() => handleSelectConversation(conversation)}
                    className={`p-4 hover:bg-gray-50 cursor-pointer relative ${
                      selectedConversation?.id === conversation.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                          <Image
                            src={conversation.avatar}
                            alt={conversation.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        
                        <p className="text-sm text-gray-500 truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                    
                    {conversation.unread > 0 && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {conversation.unread}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {/* Main chat area */}
        {selectedConversation ? (
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={selectedConversation.avatar}
                    alt={selectedConversation.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {selectedConversation.name}
                  </h3>
                  {selectedConversation.online && (
                    <p className="text-xs text-green-500">Online</p>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Phone className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Video className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <MoreVertical className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
                      message.senderId === 'me'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.content}</p>
                    <span
                      className={`text-xs block mt-1 ${
                        message.senderId === 'me' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message input */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <button type="button" className="text-gray-500 hover:text-gray-700">
                  <Paperclip className="h-5 w-5" />
                </button>
                
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                />
                
                <button type="button" className="text-gray-500 hover:text-gray-700">
                  <Smile className="h-5 w-5" />
                </button>
                
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Send className="h-10 w-10 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your Messages</h3>
            <p className="text-gray-500 max-w-md">
              Select a conversation from the list to start chatting, or create a new message.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

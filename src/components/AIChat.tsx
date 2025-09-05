import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { ArrowLeft, Send, Bot, User, AlertTriangle, Phone, Calendar } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  severity?: 'low' | 'medium' | 'high';
  suggestions?: string[];
}

export function AIChat({ onBack }: { onBack: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m here to provide mental health support and guidance. How are you feeling today? Remember, this is a safe and confidential space.',
      timestamp: new Date(),
      severity: 'low'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const crisisKeywords = ['suicide', 'kill myself', 'end it all', 'hurt myself', 'hopeless', 'worthless'];
  const anxietyKeywords = ['anxiety', 'panic', 'worried', 'nervous', 'stress', 'exam stress'];
  const depressionKeywords = ['sad', 'depressed', 'lonely', 'empty', 'tired', 'sleep'];

  const responses = {
    crisis: [
      "I'm really concerned about what you're going through. Your life has value and there are people who want to help. Please consider contacting our crisis helpline at 1860-2662-345 immediately.",
      "I hear that you're in a lot of pain right now. You don't have to face this alone. Let me connect you with immediate professional help."
    ],
    anxiety: [
      "Anxiety can feel overwhelming, but there are ways to manage it. Try the 4-7-8 breathing technique: breathe in for 4 counts, hold for 7, exhale for 8.",
      "I understand you're feeling anxious. Let's try some grounding techniques. Can you name 5 things you can see, 4 things you can touch, 3 things you can hear?",
      "Academic stress is very common among students. Have you considered speaking with your professor about extensions or breaking tasks into smaller, manageable parts?"
    ],
    depression: [
      "I hear that you're going through a difficult time. Depression can make everything feel heavy, but please know that these feelings can improve with support.",
      "Feeling sad or empty is a sign that you might benefit from talking to someone. Have you considered booking an appointment with our campus counselor?",
      "Small steps can make a big difference. Try setting one tiny goal for today - even something as simple as taking a short walk or having a healthy meal."
    ],
    general: [
      "Thank you for sharing that with me. It takes courage to reach out. Can you tell me more about what's been on your mind lately?",
      "I'm here to listen and support you. What would be most helpful for you right now?",
      "That sounds challenging. How has this been affecting your daily life or studies?"
    ]
  };

  const getSeverity = (message: string): 'low' | 'medium' | 'high' => {
    const lowerMessage = message.toLowerCase();
    if (crisisKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return 'high';
    }
    if (anxietyKeywords.some(keyword => lowerMessage.includes(keyword)) || 
        depressionKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return 'medium';
    }
    return 'low';
  };

  const getResponse = (message: string, severity: 'low' | 'medium' | 'high') => {
    const lowerMessage = message.toLowerCase();
    
    if (severity === 'high') {
      return responses.crisis[Math.floor(Math.random() * responses.crisis.length)];
    }
    
    if (anxietyKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return responses.anxiety[Math.floor(Math.random() * responses.anxiety.length)];
    }
    
    if (depressionKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return responses.depression[Math.floor(Math.random() * responses.depression.length)];
    }
    
    return responses.general[Math.floor(Math.random() * responses.general.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const severity = getSeverity(inputValue);
      const response = getResponse(inputValue, severity);
      
      const suggestions = severity === 'high' 
        ? ['Contact Crisis Helpline', 'Book Emergency Appointment', 'Find Support Groups']
        : severity === 'medium'
        ? ['Schedule Counseling', 'Try Breathing Exercise', 'Access Coping Resources']
        : ['Explore Resources', 'Join Peer Support', 'Practice Self-Care'];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date(),
        severity,
        suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Mental Health Support</h1>
          </div>
        </div>

        {/* Crisis Warning */}
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div className="text-sm">
                <p className="text-red-800 font-medium mb-2">Crisis Support Available 24/7</p>
                <p className="text-red-700">If you're having thoughts of self-harm or suicide, please reach out immediately:</p>
                <div className="mt-2 space-y-1">
                  <p className="text-red-700">• Crisis Helpline: 1860-2662-345</p>
                  <p className="text-red-700">• HICAS Counseling Emergency: +91-422-XXXXXXX</p>
                  <p className="text-red-700">• National Emergency: 108</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="h-96">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Confidential AI Support Chat</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Online & Secure
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-64 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-blue-600' 
                            : message.severity === 'high' 
                            ? 'bg-red-600' 
                            : message.severity === 'medium' 
                            ? 'bg-yellow-600' 
                            : 'bg-green-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg px-3 py-2 ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white border shadow-sm'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Suggestions */}
                    {message.suggestions && (
                      <div className="mt-2 ml-10">
                        <p className="text-xs text-gray-600 mb-2">Suggested actions:</p>
                        <div className="flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Button key={index} variant="outline" size="sm" className="text-xs">
                              {suggestion === 'Contact Crisis Helpline' && <Phone className="h-3 w-3 mr-1" />}
                              {suggestion === 'Book Emergency Appointment' && <Calendar className="h-3 w-3 mr-1" />}
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-white border shadow-sm rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message here... (All conversations are confidential)"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={isTyping || !inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This AI provides initial support. For serious concerns, please contact a human counselor.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
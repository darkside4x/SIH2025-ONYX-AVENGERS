import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { Heart, MessageCircle, Calendar, BookOpen, Users, BarChart3, Shield, Clock, UserCheck } from 'lucide-react';
import { AIChat } from './components/AIChat';
import { BookingSystem } from './components/BookingSystem';
import { ResourceHub } from './components/ResourceHub';
import { PeerSupport } from './components/PeerSupport';
import { AdminDashboard } from './components/AdminDashboard';
import { ProblemStatement } from './components/ProblemStatement';
import { SystemFlowChart } from './components/SystemFlowChart';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Guided Support',
      description: 'Get immediate help with our AI-powered chat that provides coping strategies and professional referrals.',
      action: () => setCurrentView('chat')
    },
    {
      icon: Calendar,
      title: 'Confidential Booking',
      description: 'Schedule appointments with on-campus counselors through our secure booking system.',
      action: () => setCurrentView('booking')
    },
    {
      icon: BookOpen,
      title: 'Resource Hub',
      description: 'Access videos, audio guides, and wellness resources in multiple regional languages.',
      action: () => setCurrentView('resources')
    },
    {
      icon: Users,
      title: 'Peer Support',
      description: 'Connect with fellow students in moderated peer support groups.',
      action: () => setCurrentView('peer-support')
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Institutional insights for planning better mental health interventions.',
      action: () => setCurrentView('admin')
    }
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'chat':
        return <AIChat onBack={() => setCurrentView('home')} />;
      case 'booking':
        return <BookingSystem onBack={() => setCurrentView('home')} />;
      case 'resources':
        return <ResourceHub onBack={() => setCurrentView('home')} />;
      case 'peer-support':
        return <PeerSupport onBack={() => setCurrentView('home')} />;
      case 'admin':
        return <AdminDashboard onBack={() => setCurrentView('home')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>ONYX AVENGERS</h1>
                      <p className="text-sm text-gray-600">Digital Mental Health Platform</p>
                      <p className="text-xs text-blue-600 font-medium">Smart India Hackathon 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      SIH 2025
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      Confidential
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <Clock className="h-3 w-3 mr-1" />
                      24/7 Available
                    </Badge>
                  </div>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                {/* SIH 2025 Badge */}
                <div className="mb-6">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-base">
                    🏆 Smart India Hackathon 2025 Solution
                  </Badge>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Mental Health Matters
                </h2>
                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  A comprehensive, stigma-free digital platform designed for higher education institutions across India. 
                  Get support, resources, and connect with others in a safe, confidential environment.
                </p>
                <p className="text-lg text-blue-700 mb-8 font-medium">
                  Revolutionizing College Mental Health Support Through Technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setCurrentView('chat')} 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start AI Chat Support
                  </Button>
                  <Button variant="outline" onClick={() => setCurrentView('resources')}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Resources
                  </Button>
                </div>
              </div>
            </section>

            {/* Problem Statement */}
            <ProblemStatement />

            {/* System Flow Chart */}
            <SystemFlowChart />

            {/* Features Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Comprehensive Mental Health Support Features
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                    Our platform offers multiple ways to access mental health support, 
                    tailored specifically for Indian college students across higher education institutions.
                  </p>
                  <p className="text-base text-blue-600 font-medium">
                    Click on any feature below to explore the interactive prototype
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={feature.action}>
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          Access Feature
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Smart India Hackathon 2025: Transforming Student Mental Health
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Built by HICAS students, our innovative solution addresses the critical need for accessible, 
                    stigma-free mental health support in higher education institutions across India.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">850+</div>
                    <div className="text-gray-700">Students Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-700">AI Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                    <div className="text-gray-700">Confidentiality Rating</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Heart className="h-6 w-6" />
                      <span className="text-lg font-bold" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>ONYX AVENGERS</span>
                    </div>
                    <p className="text-gray-400 mb-3">
                      Developed by HICAS Students - Team Onyx Avengers<br/>
                      Hindustan College of Arts and Science, Coimbatore
                    </p>
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Smart India Hackathon 2025
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">SIH 2025 Challenge</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>Problem ID: 25092</p>
                      <p>Digital Psychological Intervention</p>
                      <p>Govt. of Jammu & Kashmir</p>
                      <p>Higher Education Department</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>National Crisis Helpline: 1860-2662-345</p>
                      <p>Emergency Services: 108</p>
                      <p>Student Helpline: 1800-XXX-XXXX</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Team Details</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>Team: Onyx Avengers</p>
                      <p>Institution: HICAS, Coimbatore</p>
                      <p>Category: Software - HealthTech</p>
                      <p>SIH 2025 Documentation</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p className="mb-2">
                    <strong className="text-white">Smart India Hackathon 2025 Solution</strong> - Digital Psychological Intervention System
                  </p>
                  <p>&copy; 2025 Team Onyx Avengers | HICAS, Coimbatore | Made with ❤️ for Indian students</p>
                </div>
              </div>
            </footer>
          </div>
        );
    }
  };

  return renderCurrentView();
}
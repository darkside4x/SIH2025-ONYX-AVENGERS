import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowDown, ArrowRight, MessageSquare, Calendar, BookOpen, Users, BarChart3, Shield, Brain, Database, AlertTriangle } from 'lucide-react';

export function SystemFlowChart() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            System Architecture & Flow
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive flow of our Digital Psychological Intervention System showing user journey and data flow
          </p>
        </div>

        {/* User Entry Point */}
        <div className="flex justify-center mb-8">
          <Card className="w-64 text-center bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-blue-900">Student Access Point</h4>
              <p className="text-sm text-blue-700 mt-1">Anonymous or Registered Entry</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mb-6">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* Authentication & Privacy Layer */}
        <div className="flex justify-center mb-8">
          <Card className="w-80 text-center bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-green-900">Privacy & Security Layer</h4>
              <p className="text-sm text-green-700 mt-1">Data Encryption • Anonymization • Consent Management</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mb-6">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">AI Chat Support</h4>
              <div className="space-y-1 text-xs text-blue-700">
                <p>• Natural Language Processing</p>
                <p>• Sentiment Analysis</p>
                <p>• Crisis Detection</p>
                <p>• Coping Strategy Recommendations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-purple-900 mb-2">Booking System</h4>
              <div className="space-y-1 text-xs text-purple-700">
                <p>• Counselor Matching</p>
                <p>• Schedule Management</p>
                <p>• Reminder System</p>
                <p>• Confidential Records</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-green-50 to-green-100 border-green-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Resource Hub</h4>
              <div className="space-y-1 text-xs text-green-700">
                <p>• Multilingual Content</p>
                <p>• Adaptive Learning</p>
                <p>• Progress Tracking</p>
                <p>• Personalized Recommendations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-b from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-orange-900 mb-2">Peer Support</h4>
              <div className="space-y-1 text-xs text-orange-700">
                <p>• Moderated Forums</p>
                <p>• Anonymous Posting</p>
                <p>• Support Groups</p>
                <p>• Volunteer Training</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Flow to Analytics */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <ArrowDown className="h-6 w-6 text-gray-400" />
            <Badge variant="outline" className="px-3 py-1">Data Anonymization</Badge>
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>

        {/* Analytics & AI Processing Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-900">
                <Brain className="h-5 w-5 mr-2" />
                AI Processing Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-indigo-700">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">ML</Badge>
                <span>Risk Assessment Algorithms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">NLP</Badge>
                <span>Sentiment Analysis & Pattern Recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">AI</Badge>
                <span>Personalized Intervention Recommendations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">DL</Badge>
                <span>Behavioral Pattern Analysis</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Database className="h-5 w-5 mr-2" />
                Data Analytics Layer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">📊</Badge>
                <span>Anonymous Usage Statistics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">📈</Badge>
                <span>Trend Analysis & Forecasting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">🎯</Badge>
                <span>Intervention Effectiveness Metrics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">⚡</Badge>
                <span>Real-time Alert Generation</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Dashboard & Crisis Management */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <ArrowDown className="h-6 w-6 text-gray-400" />
            <Badge variant="outline" className="px-3 py-1">Policy Insights Generation</Badge>
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-900">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Crisis Management System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-900 mb-2">Immediate Response Protocol:</h5>
                <ul className="space-y-1 text-red-700 text-xs">
                  <li>• Automatic crisis keyword detection</li>
                  <li>• Instant professional referral system</li>
                  <li>• Emergency contact activation</li>
                  <li>• 24/7 helpline integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-900">
                <BarChart3 className="h-5 w-5 mr-2" />
                Administrative Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Strategic Insights:</h5>
                <ul className="space-y-1 text-blue-700 text-xs">
                  <li>• Institution-wide mental health trends</li>
                  <li>• Resource utilization optimization</li>
                  <li>• Policy recommendation engine</li>
                  <li>• Intervention effectiveness tracking</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Architecture Note */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-blue-900 text-white border-0">
            <CardContent className="pt-6">
              <h4 className="font-bold mb-4 text-xl">Technical Implementation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold mb-2">Frontend</h5>
                  <p>React.js • Tailwind CSS • Progressive Web App</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Backend</h5>
                  <p>Node.js • Express.js • Real-time WebSockets</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">AI/ML</h5>
                  <p>TensorFlow • NLP Models • Analytics Engine</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { ArrowLeft, BarChart3, Users, MessageSquare, Calendar, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export function AdminDashboard({ onBack }: { onBack: () => void }) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  // Mock data for analytics
  const monthlyUsage = [
    { month: 'Jan', aiChat: 120, appointments: 45, resources: 280, peerSupport: 95 },
    { month: 'Feb', aiChat: 145, appointments: 52, resources: 310, peerSupport: 108 },
    { month: 'Mar', aiChat: 167, appointments: 48, resources: 295, peerSupport: 124 },
    { month: 'Apr', aiChat: 189, appointments: 63, resources: 340, peerSupport: 142 },
    { month: 'May', aiChat: 203, appointments: 71, resources: 385, peerSupport: 156 },
    { month: 'Jun', aiChat: 178, appointments: 58, resources: 298, peerSupport: 134 }
  ];

  const severityDistribution = [
    { name: 'Low Risk', value: 62, color: '#10B981' },
    { name: 'Medium Risk', value: 28, color: '#F59E0B' },
    { name: 'High Risk', value: 10, color: '#EF4444' }
  ];

  const departmentData = [
    { department: 'Engineering', students: 450, activeUsers: 89, utilizationRate: 19.8 },
    { department: 'Arts & Science', students: 380, activeUsers: 76, utilizationRate: 20.0 },
    { department: 'Commerce', students: 320, activeUsers: 58, utilizationRate: 18.1 },
    { department: 'Management', students: 280, activeUsers: 52, utilizationRate: 18.6 },
    { department: 'Computer Applications', students: 240, activeUsers: 48, utilizationRate: 20.0 }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'high-risk',
      message: 'Student flagged for high-risk keywords in AI chat',
      timestamp: '2 hours ago',
      status: 'resolved',
      action: 'Counselor contacted student'
    },
    {
      id: 2,
      type: 'appointment-spike',
      message: 'Unusual spike in appointment bookings (45% increase)',
      timestamp: '4 hours ago',
      status: 'monitoring',
      action: 'Additional counselor shifts scheduled'
    },
    {
      id: 3,
      type: 'system',
      message: 'Platform usage exceeded 85% capacity during peak hours',
      timestamp: '1 day ago',
      status: 'resolved',
      action: 'Server capacity increased'
    },
    {
      id: 4,
      type: 'content',
      message: 'Peer support post flagged for manual review',
      timestamp: '2 days ago',
      status: 'resolved',
      action: 'Post approved after review'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'high-risk':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'appointment-spike':
        return <TrendingUp className="h-4 w-4 text-orange-600" />;
      case 'system':
        return <BarChart3 className="h-4 w-4 text-blue-600" />;
      case 'content':
        return <MessageSquare className="h-4 w-4 text-purple-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'monitoring':
        return 'bg-yellow-100 text-yellow-800';
      case 'action-required':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Mental Health Analytics Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              System Healthy
            </Badge>
            <Badge variant="outline">
              <Clock className="h-3 w-3 mr-1" />
              Last updated: 10 mins ago
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users (30 days)</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Chat Sessions</p>
                  <p className="text-2xl font-bold text-gray-900">3,892</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18.2% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Appointments Booked</p>
                  <p className="text-2xl font-bold text-gray-900">287</p>
                  <p className="text-sm text-orange-600 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -3.2% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">High-Risk Interventions</p>
                  <p className="text-2xl font-bold text-gray-900">23</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Requires attention
                  </p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
            <TabsTrigger value="departments">Department Insights</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & Actions</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Usage Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Usage Trends</CardTitle>
                  <CardDescription>Monthly usage across all platform features</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyUsage}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="aiChat" stroke="#3B82F6" strokeWidth={2} name="AI Chat" />
                      <Line type="monotone" dataKey="appointments" stroke="#10B981" strokeWidth={2} name="Appointments" />
                      <Line type="monotone" dataKey="resources" stroke="#F59E0B" strokeWidth={2} name="Resources" />
                      <Line type="monotone" dataKey="peerSupport" stroke="#8B5CF6" strokeWidth={2} name="Peer Support" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Risk Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Student Risk Assessment</CardTitle>
                  <CardDescription>Distribution of students by risk level (last 30 days)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={severityDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {severityDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Counselor Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dr. Priya Sharma</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dr. Rajesh Kumar</span>
                      <Badge variant="default" className="bg-yellow-100 text-yellow-800">Busy</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dr. Meera Nair</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Server Capacity</span>
                        <span>72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Response Time</span>
                        <span>Good</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Uptime (30 days)</span>
                        <span>99.8%</span>
                      </div>
                      <Progress value={99.8} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Crisis Helpline</p>
                      <p className="text-gray-600">1860-2662-345</p>
                    </div>
                    <div>
                      <p className="font-medium">Campus Security</p>
                      <p className="text-gray-600">+91-422-XXX-XXXX</p>
                    </div>
                    <div>
                      <p className="font-medium">Medical Emergency</p>
                      <p className="text-gray-600">108</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Usage Analytics Tab */}
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Feature Usage Comparison</CardTitle>
                <CardDescription>Monthly usage statistics for each platform feature</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyUsage}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="aiChat" fill="#3B82F6" name="AI Chat Sessions" />
                    <Bar dataKey="appointments" fill="#10B981" name="Appointments" />
                    <Bar dataKey="resources" fill="#F59E0B" name="Resource Views" />
                    <Bar dataKey="peerSupport" fill="#8B5CF6" name="Peer Support" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Peak Usage Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>9:00 AM - 11:00 AM</span>
                      <div className="flex items-center">
                        <Progress value={85} className="w-20 h-2 mr-2" />
                        <span className="text-sm">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2:00 PM - 4:00 PM</span>
                      <div className="flex items-center">
                        <Progress value={92} className="w-20 h-2 mr-2" />
                        <span className="text-sm">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>7:00 PM - 9:00 PM</span>
                      <div className="flex items-center">
                        <Progress value={78} className="w-20 h-2 mr-2" />
                        <span className="text-sm">78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Breathing Techniques</span>
                      <span className="text-sm font-medium">1,245 views</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Academic Stress Guide</span>
                      <span className="text-sm font-medium">2,134 views</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Mindful Meditation</span>
                      <span className="text-sm font-medium">1,567 views</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sleep Hygiene</span>
                      <span className="text-sm font-medium">1,456 views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Department Insights Tab */}
          <TabsContent value="departments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Department-wise Utilization</CardTitle>
                <CardDescription>Mental health platform usage across different departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentData.map((dept, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{dept.department}</h4>
                        <Badge variant="outline">{dept.utilizationRate}% utilization</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Total Students</p>
                          <p className="font-medium">{dept.students}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Active Users</p>
                          <p className="font-medium">{dept.activeUsers}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Utilization</p>
                          <Progress value={dept.utilizationRate} className="mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts & Actions</CardTitle>
                <CardDescription>System alerts and administrative actions taken</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          {getAlertIcon(alert.type)}
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{alert.message}</p>
                            <p className="text-sm text-gray-600 mt-1">{alert.action}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-sm text-gray-500">{alert.timestamp}</span>
                              <Badge className={getStatusColor(alert.status)}>
                                {alert.status.replace('-', ' ')}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Action Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Review flagged peer support posts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" checked readOnly />
                      <span className="text-sm line-through">Update crisis intervention protocols</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Schedule additional counselor training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Review anonymization protocols</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Export Usage Report (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Export Anonymized Data (CSV)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Generate Monthly Summary
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      All exports maintain student privacy and anonymity
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
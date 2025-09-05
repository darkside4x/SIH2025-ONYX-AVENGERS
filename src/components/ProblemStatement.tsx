import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, Target, Users, Building, Lightbulb } from 'lucide-react';

export function ProblemStatement() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-base mb-4">
            Smart India Hackathon 2025 - Problem Statement
          </Badge>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Problem Statement ID: 25092
          </h3>
          <h4 className="text-xl text-blue-700 font-semibold mb-6">
            Development of a Digital Mental Health and Psychological Support System for Students in Higher Education
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Context & Problem */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-red-600" />
                Context & Problem Faced
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Context:</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mental health issues among college students have significantly increased in recent years, including 
                  anxiety, depression, burnout, sleep disorders, academic stress, and social isolation. However, there 
                  is a major gap in the availability, accessibility, and stigma-free delivery of mental health support 
                  in most higher education institutions, especially in rural and semi-urban colleges.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Problems Identified:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Absence of structured, scalable, stigma-free psychological intervention system</li>
                  <li>• Lack of early detection and preventive mental health tools</li>
                  <li>• Under-utilization of counselling centres due to fear of judgment</li>
                  <li>• No centralized mental health monitoring or data-driven policy framework</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Solution Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Proposed Technological Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm mb-4">
                Develop a Digital Psychological Intervention System (web-based and/or mobile app) with these capabilities:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="text-xs mt-0.5">1</Badge>
                  <p className="text-sm text-gray-700">AI-guided First-Aid Support: Interactive chat offering coping strategies and professional referrals</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="text-xs mt-0.5">2</Badge>
                  <p className="text-sm text-gray-700">Confidential Booking System: For appointments with on-campus counsellors</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="text-xs mt-0.5">3</Badge>
                  <p className="text-sm text-gray-700">Psychoeducational Resource Hub: Videos, audio, guides in regional languages</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="text-xs mt-0.5">4</Badge>
                  <p className="text-sm text-gray-700">Peer Support Platform: Moderated peer-to-peer support forums</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Badge variant="outline" className="text-xs mt-0.5">5</Badge>
                  <p className="text-sm text-gray-700">Admin Dashboard: Anonymous data analytics for trend recognition</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Building className="h-5 w-5 mr-2 text-blue-600" />
                Organization Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Organization:</strong> Government of Jammu and Kashmir</p>
              <p><strong>Department:</strong> Higher Education Department</p>
              <p><strong>Category:</strong> Software</p>
              <p><strong>Theme:</strong> MedTech / BioTech / HealthTech</p>
              <p><strong>Owning Department:</strong> Student Welfare / Psychology / IQAC</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Need for Digital Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="mb-3">Most available apps are generic, Western-oriented, or paid. They lack:</p>
              <ul className="space-y-1">
                <li>• Regional cultural context and language</li>
                <li>• Institution-specific customization</li>
                <li>• Offline support mapping</li>
                <li>• Real-time analytics for admin</li>
              </ul>
              <p className="mt-3 font-medium text-blue-700">Hence, a tailored open-source solution is needed.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2 text-purple-600" />
                Sample Data Structures
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <ul className="space-y-1">
                <li>• Standard psychological screening tools (PHQ-9, GAD-7, GHQ)</li>
                <li>• Mock student profiles (anonymized)</li>
                <li>• Institutional support structure mapping</li>
                <li>• Counsellor availability data</li>
                <li>• Resource accessibility metrics</li>
                <li>• Helpline integration points</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
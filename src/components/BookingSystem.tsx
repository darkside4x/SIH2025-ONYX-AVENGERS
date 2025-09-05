import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar } from './ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, User, Shield, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Counselor {
  id: string;
  name: string;
  qualification: string;
  specialization: string[];
  availability: string[];
  rating: number;
  languages: string[];
}

export function BookingSystem({ onBack }: { onBack: () => void }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCounselor, setSelectedCounselor] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    concerns: '',
    urgency: '',
    preferredLanguage: 'english'
  });
  const [isBooked, setIsBooked] = useState(false);

  const counselors: Counselor[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      qualification: 'M.Phil Clinical Psychology',
      specialization: ['Anxiety', 'Depression', 'Academic Stress'],
      availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
      rating: 4.8,
      languages: ['English', 'Hindi', 'Tamil']
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      qualification: 'Ph.D Counseling Psychology',
      specialization: ['Career Counseling', 'Social Anxiety', 'Family Issues'],
      availability: ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
      rating: 4.9,
      languages: ['English', 'Hindi', 'Telugu']
    },
    {
      id: '3',
      name: 'Dr. Meera Nair',
      qualification: 'M.A Psychology, Licensed Therapist',
      specialization: ['Trauma Counseling', 'Relationship Issues', 'Self-Esteem'],
      availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
      rating: 4.7,
      languages: ['English', 'Malayalam', 'Tamil']
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - General support needed', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium - Experiencing significant distress', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High - Need immediate attention', color: 'bg-red-100 text-red-800' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    // Simulate booking process
    setTimeout(() => {
      setIsBooked(true);
    }, 1000);
  };

  const isFormValid = () => {
    return formData.name && formData.studentId && formData.email && 
           selectedCounselor && selectedDate && selectedTime && formData.urgency;
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center mb-6">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Your confidential counseling session has been successfully scheduled.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold text-blue-900 mb-3">Appointment Details</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Counselor:</strong> {counselors.find(c => c.id === selectedCounselor)?.name}</p>
                    <p><strong>Date:</strong> {selectedDate?.toDateString()}</p>
                    <p><strong>Time:</strong> {selectedTime}</p>
                    <p><strong>Location:</strong> HICAS Counseling Center, Block A, Room 105</p>
                    <p><strong>Booking ID:</strong> HICAS-{Date.now().toString().slice(-6)}</p>
                  </div>
                </div>

                <Alert className="mb-6">
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Your appointment is completely confidential. A confirmation email has been sent to {formData.email}
                  </AlertDescription>
                </Alert>

                <div className="flex flex-col space-y-3">
                  <Button onClick={onBack} className="w-full">
                    Return to Home
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Book Counseling Appointment</h1>
          </div>
        </div>

        {/* Confidentiality Notice */}
        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <Shield className="h-4 w-4" />
          <AlertDescription className="text-blue-800">
            All appointments are completely confidential. Your information is protected under HICAS privacy policy.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Counselor Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Available Counselors</CardTitle>
                <CardDescription>Choose a counselor based on their specialization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {counselors.map((counselor) => (
                  <div 
                    key={counselor.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedCounselor === counselor.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedCounselor(counselor.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{counselor.name}</h4>
                        <p className="text-xs text-gray-600">{counselor.qualification}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        ⭐ {counselor.rating}
                      </Badge>
                    </div>
                    
                    <div className="mb-2">
                      <p className="text-xs font-medium text-gray-700 mb-1">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {counselor.specialization.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Languages:</p>
                      <p className="text-xs text-gray-600">{counselor.languages.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Appointment</CardTitle>
                <CardDescription>Fill in your details to book a confidential session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentId">Student ID *</Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange('studentId', e.target.value)}
                      placeholder="Your HICAS student ID"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@hicas.edu"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Select Date *</Label>
                    <div className="border rounded-lg p-2 bg-white">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Select Time *</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <div className="mt-2">
                      <Label>Preferred Language</Label>
                      <Select 
                        value={formData.preferredLanguage} 
                        onValueChange={(value) => handleInputChange('preferredLanguage', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="tamil">Tamil</SelectItem>
                          <SelectItem value="telugu">Telugu</SelectItem>
                          <SelectItem value="malayalam">Malayalam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Urgency Level */}
                <div>
                  <Label>Urgency Level *</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {urgencyLevels.map((level) => (
                      <div
                        key={level.value}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                          formData.urgency === level.value 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleInputChange('urgency', level.value)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{level.label}</span>
                          <Badge className={level.color}>
                            {level.value.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concerns */}
                <div>
                  <Label htmlFor="concerns">Brief Description of Concerns (Optional)</Label>
                  <Textarea
                    id="concerns"
                    value={formData.concerns}
                    onChange={(e) => handleInputChange('concerns', e.target.value)}
                    placeholder="Briefly describe what you'd like to discuss (this helps the counselor prepare)"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This information is kept strictly confidential and helps provide better support.
                  </p>
                </div>

                {/* Location Info */}
                <Alert>
                  <MapPin className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Location:</strong> HICAS Counseling Center, Academic Block A, Room 105 (Ground Floor)
                  </AlertDescription>
                </Alert>

                {/* Book Button */}
                <Button 
                  onClick={handleBooking}
                  disabled={!isFormValid()}
                  className="w-full"
                  size="lg"
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Confidential Appointment
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By booking this appointment, you agree to HICAS counseling terms and privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
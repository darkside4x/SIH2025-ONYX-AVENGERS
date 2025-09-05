import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Search, Play, Download, BookOpen, Headphones, Video, FileText, Clock, Users, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'audio' | 'article' | 'guide';
  category: 'stress' | 'anxiety' | 'depression' | 'sleep' | 'study' | 'relationships';
  duration?: string;
  language: string[];
  rating: number;
  views: number;
  thumbnail?: string;
  tags: string[];
}

export function ResourceHub({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Breathing Techniques for Anxiety Relief',
      description: 'Learn 4-7-8 breathing and other proven techniques to manage anxiety and panic attacks.',
      type: 'video',
      category: 'anxiety',
      duration: '8 mins',
      language: ['English', 'Hindi', 'Tamil'],
      rating: 4.8,
      views: 1245,
      thumbnail: 'https://images.unsplash.com/photo-1635373390303-cc78167278ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzU3MDU4NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['breathing', 'anxiety', 'quick-relief']
    },
    {
      id: '2',
      title: 'Progressive Muscle Relaxation Guide',
      description: 'A step-by-step audio guide to help you relax your body and mind before sleep.',
      type: 'audio',
      category: 'sleep',
      duration: '20 mins',
      language: ['English', 'Hindi', 'Malayalam'],
      rating: 4.9,
      views: 892,
      tags: ['sleep', 'relaxation', 'bedtime']
    },
    {
      id: '3',
      title: 'Managing Academic Stress: A Student\'s Guide',
      description: 'Comprehensive guide with practical tips for handling exam pressure and academic deadlines.',
      type: 'article',
      category: 'study',
      duration: '12 min read',
      language: ['English', 'Hindi', 'Tamil', 'Telugu'],
      rating: 4.7,
      views: 2134,
      tags: ['exams', 'time-management', 'study-tips']
    },
    {
      id: '4',
      title: 'Understanding Depression: Signs and Support',
      description: 'Learn to recognize depression symptoms and discover available support resources.',
      type: 'video',
      category: 'depression',
      duration: '15 mins',
      language: ['English', 'Hindi'],
      rating: 4.8,
      views: 756,
      thumbnail: 'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGJvb2tzfGVufDF8fHx8MTc1Njk4NjYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['depression', 'awareness', 'support']
    },
    {
      id: '5',
      title: 'Mindful Morning Meditation',
      description: 'Start your day with this guided meditation designed for busy college students.',
      type: 'audio',
      category: 'stress',
      duration: '10 mins',
      language: ['English', 'Tamil', 'Malayalam'],
      rating: 4.6,
      views: 1567,
      tags: ['meditation', 'morning-routine', 'mindfulness']
    },
    {
      id: '6',
      title: 'Building Healthy Relationships in College',
      description: 'Navigate friendships, romantic relationships, and family dynamics during your college years.',
      type: 'guide',
      category: 'relationships',
      duration: '18 min read',
      language: ['English', 'Hindi', 'Tamil'],
      rating: 4.5,
      views: 934,
      tags: ['relationships', 'communication', 'boundaries']
    },
    {
      id: '7',
      title: 'Quick Yoga Stretches for Study Breaks',
      description: 'Simple yoga movements you can do in your dorm room to relieve study tension.',
      type: 'video',
      category: 'stress',
      duration: '5 mins',
      language: ['English', 'Hindi'],
      rating: 4.7,
      views: 1823,
      thumbnail: 'https://images.unsplash.com/photo-1592967547589-e94f6cd77af9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZXhlcmNpc2UlMjByZWxheGF0aW9ufGVufDF8fHx8MTc1NzA1ODcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['yoga', 'exercise', 'study-breaks']
    },
    {
      id: '8',
      title: 'Sleep Hygiene for Better Rest',
      description: 'Evidence-based strategies to improve your sleep quality and establish healthy sleep patterns.',
      type: 'article',
      category: 'sleep',
      duration: '8 min read',
      language: ['English', 'Hindi', 'Tamil', 'Telugu'],
      rating: 4.8,
      views: 1456,
      tags: ['sleep-hygiene', 'insomnia', 'rest']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'anxiety', name: 'Anxiety Support', count: resources.filter(r => r.category === 'anxiety').length },
    { id: 'depression', name: 'Depression Help', count: resources.filter(r => r.category === 'depression').length },
    { id: 'stress', name: 'Stress Management', count: resources.filter(r => r.category === 'stress').length },
    { id: 'sleep', name: 'Sleep & Rest', count: resources.filter(r => r.category === 'sleep').length },
    { id: 'study', name: 'Study Support', count: resources.filter(r => r.category === 'study').length },
    { id: 'relationships', name: 'Relationships', count: resources.filter(r => r.category === 'relationships').length }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'article': return FileText;
      case 'guide': return BookOpen;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'audio': return 'bg-green-100 text-green-800';
      case 'article': return 'bg-blue-100 text-blue-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Psychoeducational Resource Hub</h1>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search resources, topics, or techniques..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        selectedCategory === category.id ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-700' : ''
                      }`}
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['anxiety', 'meditation', 'sleep', 'study-tips', 'breathing', 'relaxation', 'mindfulness', 'exams'].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredResources.length} Resources Found
              </h2>
              <div className="text-sm text-gray-600">
                Available in multiple regional languages
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => {
                const IconComponent = getResourceIcon(resource.type);
                
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    {resource.thumbnail && (
                      <div className="relative">
                        <ImageWithFallback
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={getTypeColor(resource.type)}>
                            <IconComponent className="h-3 w-3 mr-1" />
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </Badge>
                        </div>
                        {resource.duration && (
                          <div className="absolute bottom-3 right-3">
                            <Badge variant="secondary" className="bg-black/70 text-white">
                              <Clock className="h-3 w-3 mr-1" />
                              {resource.duration}
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg leading-tight">{resource.title}</h3>
                        {!resource.thumbnail && (
                          <Badge className={getTypeColor(resource.type)}>
                            <IconComponent className="h-3 w-3 mr-1" />
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {resource.rating}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {resource.views}
                          </div>
                          {!resource.thumbnail && resource.duration && (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {resource.duration}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mb-3">
                        Available in: {resource.language.join(', ')}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          {resource.type === 'article' || resource.type === 'guide' ? 'Read' : 'Watch/Listen'}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredResources.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
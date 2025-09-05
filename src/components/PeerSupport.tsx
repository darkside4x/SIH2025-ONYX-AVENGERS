import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ArrowLeft, Users, MessageSquare, Plus, Heart, Reply, Flag, Shield, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Post {
  id: string;
  author: string;
  authorId: string;
  title: string;
  content: string;
  category: string;
  timestamp: Date;
  replies: number;
  likes: number;
  isLiked: boolean;
  tags: string[];
  isAnonymous: boolean;
}

interface SupportGroup {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  moderator: string;
  isJoined: boolean;
  nextMeeting?: Date;
}

export function PeerSupport({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState('posts');
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general',
    anonymous: false,
    tags: ''
  });

  const posts: Post[] = [
    {
      id: '1',
      author: 'Anonymous User',
      authorId: 'anon1',
      title: 'Feeling overwhelmed with final exams approaching',
      content: 'Hey everyone, I\'m in my final semester and feeling really anxious about upcoming exams. The pressure feels intense and I\'m struggling to manage my time effectively. Anyone else going through something similar?',
      category: 'Academic Stress',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      replies: 8,
      likes: 12,
      isLiked: false,
      tags: ['exams', 'anxiety', 'time-management'],
      isAnonymous: true
    },
    {
      id: '2',
      author: 'Priya S.',
      authorId: 'priya123',
      title: 'Small wins during tough times',
      content: 'Just wanted to share that I finally managed to establish a morning routine after weeks of trying. It\'s helping me feel more in control of my day. Sometimes the smallest changes make the biggest difference!',
      category: 'Success Stories',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      replies: 15,
      likes: 28,
      isLiked: true,
      tags: ['routine', 'progress', 'self-care'],
      isAnonymous: false
    },
    {
      id: '3',
      author: 'Anonymous User',
      authorId: 'anon2',
      title: 'Dealing with homesickness in college',
      content: 'I\'m a first-year student and missing home terribly. It\'s affecting my ability to connect with new people and enjoy college life. How did others overcome this feeling?',
      category: 'Adjustment Issues',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      replies: 6,
      likes: 9,
      isLiked: false,
      tags: ['homesickness', 'first-year', 'adjustment'],
      isAnonymous: true
    },
    {
      id: '4',
      author: 'Raj M.',
      authorId: 'raj456',
      title: 'Study group success tips',
      content: 'Our study group has been incredibly helpful for both academic performance and mental health. Here are some tips that worked for us: 1) Set clear goals, 2) Include breaks for casual chat, 3) Rotate leadership roles.',
      category: 'Study Tips',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      replies: 12,
      likes: 23,
      isLiked: false,
      tags: ['study-groups', 'collaboration', 'tips'],
      isAnonymous: false
    }
  ];

  const supportGroups: SupportGroup[] = [
    {
      id: '1',
      name: 'Anxiety Support Circle',
      description: 'A safe space for students dealing with anxiety to share experiences and coping strategies.',
      members: 42,
      category: 'Mental Health',
      moderator: 'Dr. Priya Sharma',
      isJoined: true,
      nextMeeting: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: '2',
      name: 'Academic Stress Management',
      description: 'Focused on helping students manage academic pressure, exam anxiety, and study-related stress.',
      members: 67,
      category: 'Academic',
      moderator: 'Peer Volunteer - Sarah K.',
      isJoined: false,
      nextMeeting: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: '3',
      name: 'First-Year Adjustment Support',
      description: 'For new students navigating college life, homesickness, and building new relationships.',
      members: 38,
      category: 'Transition',
      moderator: 'Peer Volunteer - Arjun P.',
      isJoined: false,
      nextMeeting: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: '4',
      name: 'Mindfulness & Self-Care',
      description: 'Exploring mindfulness practices, self-care routines, and holistic wellness approaches.',
      members: 56,
      category: 'Wellness',
      moderator: 'Dr. Meera Nair',
      isJoined: true
    }
  ];

  const categories = ['general', 'academic-stress', 'anxiety', 'depression', 'relationships', 'success-stories', 'adjustment'];

  const handleCreatePost = () => {
    // Simulate post creation
    console.log('Creating post:', newPost);
    setNewPost({ title: '', content: '', category: 'general', anonymous: false, tags: '' });
    setShowNewPost(false);
  };

  const handleJoinGroup = (groupId: string) => {
    // Simulate joining group
    console.log('Joining group:', groupId);
  };

  const handleLikePost = (postId: string) => {
    // Simulate liking post
    console.log('Liking post:', postId);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

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
            <Users className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Peer Support Community</h1>
          </div>
        </div>

        {/* Community Guidelines */}
        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <Shield className="h-4 w-4" />
          <AlertDescription className="text-blue-800">
            <strong>Community Guidelines:</strong> Be respectful, supportive, and kind. All posts are moderated by trained volunteers. 
            Remember that this is a peer support space, not a substitute for professional help.
          </AlertDescription>
        </Alert>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Discussion Posts</TabsTrigger>
            <TabsTrigger value="groups">Support Groups</TabsTrigger>
            <TabsTrigger value="resources">Peer Resources</TabsTrigger>
          </TabsList>

          {/* Discussion Posts */}
          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Posts</h2>
              <Button onClick={() => setShowNewPost(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPost && (
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Thoughts</CardTitle>
                  <CardDescription>
                    Create a post to connect with fellow students. You can choose to post anonymously.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Post Title</Label>
                    <Input
                      id="title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      placeholder="Share your thoughts, experiences, or questions..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={newPost.category}
                        onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>
                            {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={newPost.tags}
                        onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                        placeholder="anxiety, study-tips, help"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={newPost.anonymous}
                      onChange={(e) => setNewPost({...newPost, anonymous: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="anonymous" className="text-sm">Post anonymously</Label>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={handleCreatePost}>Create Post</Button>
                    <Button variant="outline" onClick={() => setShowNewPost(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Posts List */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {post.isAnonymous ? 'A' : getInitials(post.author)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">{post.author}</p>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <span>{formatTimeAgo(post.timestamp)}</span>
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                              {post.isAnonymous && (
                                <Badge variant="secondary" className="text-xs bg-gray-100">
                                  Anonymous
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Flag className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleLikePost(post.id)}
                              className={post.isLiked ? 'text-red-600' : 'text-gray-600'}
                            >
                              <Heart className={`h-4 w-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600">
                              <Reply className="h-4 w-4 mr-1" />
                              {post.replies} replies
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            View Discussion
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Support Groups */}
          <TabsContent value="groups" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Moderated Support Groups</h2>
              <p className="text-gray-600 mb-6">
                Join small, moderated groups led by trained volunteers and mental health professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportGroups.map((group) => (
                <Card key={group.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                      <Badge variant={group.isJoined ? 'default' : 'outline'}>
                        {group.isJoined ? (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Joined
                          </>
                        ) : (
                          'Available'
                        )}
                      </Badge>
                    </div>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Members:</span>
                        <span className="font-medium">{group.members}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Moderator:</span>
                        <span className="font-medium">{group.moderator}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Category:</span>
                        <Badge variant="outline" className="text-xs">{group.category}</Badge>
                      </div>
                      
                      {group.nextMeeting && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Next Meeting:</span>
                          <span className="font-medium">{group.nextMeeting.toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      {group.isJoined ? (
                        <Button variant="outline" className="w-full">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          View Group Chat
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => handleJoinGroup(group.id)}
                          className="w-full"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Join Group
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Peer Resources */}
          <TabsContent value="resources" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Peer-Created Resources</h2>
              <p className="text-gray-600 mb-6">
                Resources, tips, and guides created and shared by fellow HICAS students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Study Schedule Templates</CardTitle>
                  <CardDescription>
                    Customizable study schedules shared by successful students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    Created by: Final Year Students
                  </div>
                  <Button variant="outline" className="w-full">
                    Download Templates
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Coping Strategies Guide</CardTitle>
                  <CardDescription>
                    Practical techniques that helped students manage stress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    Created by: Peer Support Team
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Campus Resource Map</CardTitle>
                  <CardDescription>
                    Student-created guide to all mental health resources on campus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    Created by: Student Council
                  </div>
                  <Button variant="outline" className="w-full">
                    View Map
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
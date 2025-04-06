
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, Clock, Users, Video } from 'lucide-react';

const upcomingWebinars = [
  {
    id: 1,
    title: "Digital Transformation in Education",
    date: "April 15, 2025",
    time: "2:00 PM - 3:30 PM EST",
    host: "Dr. Sarah Johnson",
    description: "Explore how digital technologies are reshaping the educational landscape and creating new opportunities for learning and growth.",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Leadership Skills for the Modern Workplace",
    date: "April 22, 2025",
    time: "11:00 AM - 12:30 PM EST",
    host: "Michael Chen, Leadership Coach",
    description: "Learn essential leadership strategies and techniques to effectively manage teams in today's rapidly evolving business environment.",
    attendees: 98,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Data Analytics: From Basics to Advanced",
    date: "May 5, 2025",
    time: "3:00 PM - 5:00 PM EST",
    host: "Elena Rodriguez, Data Scientist",
    description: "A comprehensive introduction to data analytics, from fundamental concepts to advanced techniques for deriving meaningful insights.",
    attendees: 215,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const pastWebinars = [
  {
    id: 4,
    title: "Social Media Marketing Strategies",
    date: "March 18, 2025",
    views: 1243,
    host: "Alex Thompson, Marketing Director",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "UX Design Principles for Beginners",
    date: "March 5, 2025",
    views: 876,
    host: "Jessica Lee, UX Designer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Project Management Best Practices",
    date: "February 20, 2025",
    views: 1567,
    host: "Robert Miller, PMP",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    date: "February 8, 2025",
    views: 2341,
    host: "Dr. James Wilson, AI Researcher",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Webinar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-socio-dark via-socio-blue to-socio-darkblue text-white">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Webinars & Live Sessions
                </h1>
                <p className="text-xl opacity-90 mb-8">
                  Join our expert-led webinars to deepen your knowledge, learn new skills, and connect with a community of like-minded professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-socio-blue hover:bg-gray-100">
                    Register Now
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Browse Topics
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-3">Upcoming Event</h2>
                    <h3 className="text-xl font-semibold text-socio-light">Digital Transformation in Education</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4" />
                      <span>2:00 PM - 3:30 PM EST</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>156 registered</span>
                    </div>
                    <Button className="bg-white text-socio-blue hover:bg-gray-100">
                      Join Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinar Calendar Section */}
        <section className="py-16 bg-white">
          <div className="container-wrapper">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-socio-dark">Webinar Schedule</h2>
                <TabsList className="grid w-[400px] grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past Recordings</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="upcoming">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {upcomingWebinars.map((webinar) => (
                    <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-all animate-scale-in">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={webinar.image} 
                          alt={webinar.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-socio-dark">{webinar.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{webinar.time}</span>
                        </div>
                        <p className="text-sm font-medium mb-3 text-socio-blue">
                          Host: {webinar.host}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{webinar.attendees} registered attendees</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full bg-socio-blue hover:bg-socio-darkblue">
                          Register Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="past">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pastWebinars.map((webinar) => (
                    <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-all animate-scale-in">
                      <div className="h-40 overflow-hidden relative">
                        <img 
                          src={webinar.image} 
                          alt={webinar.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center hover:bg-black/40 transition-colors">
                          <Video className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2 text-socio-dark line-clamp-2">{webinar.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{webinar.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {webinar.host}
                        </p>
                        <div className="flex items-center text-sm text-socio-blue">
                          <Video className="h-4 w-4 mr-1" />
                          <span>{webinar.views.toLocaleString()} views</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full border-socio-blue text-socio-blue hover:bg-socio-blue hover:text-white">
                          Watch Recording
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Why Join Our Webinars?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our webinars are designed to provide you with valuable insights, practical knowledge, and opportunities to connect with industry experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all animate-scale-in">
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Learn directly from industry leaders and subject matter experts who share their insights, experiences, and best practices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-3">Professional Networking</h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals, expand your network, and engage in meaningful discussions with peers in your field.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-3">Skill Development</h3>
                <p className="text-gray-600">
                  Enhance your skills and knowledge through practical demonstrations, case studies, and actionable insights that you can apply immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-socio-dark text-white">
          <div className="container-wrapper">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Never Miss a Webinar</h2>
              <p className="text-lg opacity-80 mb-8">
                Subscribe to our webinar newsletter and get notified about upcoming events, exclusive content, and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none text-socio-dark"
                />
                <Button className="bg-socio-blue hover:bg-socio-darkblue text-white px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-60 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Webinar;

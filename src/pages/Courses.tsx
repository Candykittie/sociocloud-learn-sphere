
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';

const courseData = [
  {
    id: 1,
    title: "Social Media Strategy",
    description: "Learn to develop and implement effective social media strategies for business growth and brand awareness.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Digital Leadership",
    description: "Develop leadership skills for the digital age, focusing on distributed teams and innovation management.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Data Analytics Fundamentals",
    description: "Master the basics of data analysis to make informed decisions and drive organizational success.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Content Creation Mastery",
    description: "Create engaging digital content that resonates with your audience and drives engagement.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "SEO & Digital Marketing",
    description: "Learn search engine optimization techniques to increase visibility and drive organic traffic.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "UX/UI Design Principles",
    description: "Master the fundamentals of creating user-friendly interfaces and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Project Management",
    description: "Learn methodologies and tools to efficiently manage projects from initiation to completion.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Artificial Intelligence Basics",
    description: "Understand the fundamentals of AI and its applications in various industries.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-socio-dark to-socio-blue text-white">
          <div className="container-wrapper">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expand Your Knowledge, Enhance Your Skills
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Discover our comprehensive range of courses designed to help you master new skills and advance your career.
              </p>
              <Button variant="outline" className="bg-white text-socio-blue hover:bg-gray-100 border-0">
                Explore All Courses
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-socio-dark mb-6">
                  Structured Learning for Your Success
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our courses are designed with a clear structure and progressive learning path to ensure you build knowledge systematically and effectively. Each course combines theoretical foundations with practical applications, giving you both understanding and hands-on skills.
                </p>
                <p className="text-lg text-gray-700">
                  With expert instructors, engaging content, and a supportive community, you'll have everything you need to succeed in your learning journey.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Card className="bg-white shadow-md hover:shadow-lg transition-all p-6 text-center">
                  <div className="text-socio-blue text-4xl font-bold mb-2">30+</div>
                  <p className="text-gray-600">Expert-led Courses</p>
                </Card>
                <Card className="bg-white shadow-md hover:shadow-lg transition-all p-6 text-center">
                  <div className="text-socio-blue text-4xl font-bold mb-2">100%</div>
                  <p className="text-gray-600">Online Learning</p>
                </Card>
                <Card className="bg-white shadow-md hover:shadow-lg transition-all p-6 text-center">
                  <div className="text-socio-blue text-4xl font-bold mb-2">24/7</div>
                  <p className="text-gray-600">Support Access</p>
                </Card>
                <Card className="bg-white shadow-md hover:shadow-lg transition-all p-6 text-center">
                  <div className="text-socio-blue text-4xl font-bold mb-2">5⭐</div>
                  <p className="text-gray-600">Course Rating</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wrapper">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Program Overview</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive learning programs are designed to give you the skills and knowledge needed to succeed in today's digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all animate-scale-in">
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">30+ Courses</h3>
                <p className="text-gray-600">
                  Access our extensive library of over 30 expert-designed courses covering a wide range of topics.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">Certification</h3>
                <p className="text-gray-600">
                  Earn industry-recognized certificates upon completion to showcase your newly acquired skills.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with years of real-world experience and academic excellence.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-socio-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">Self-Paced Learning</h3>
                <p className="text-gray-600">
                  Study at your own pace, with lifetime access to course materials and resources.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Display Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Browse Our Courses</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our wide range of courses designed to help you master new skills and advance your career.
              </p>
            </div>
            
            {/* Carousel for courses */}
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {courseData.map((course, index) => (
                  <CarouselItem key={course.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-xl mb-2 text-socio-dark">{course.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                        <div className="flex gap-3 mt-4">
                          <Button variant="outline" className="py-1 px-4 text-sm border-socio-blue text-socio-blue hover:bg-socio-blue hover:text-white">
                            View Syllabus
                          </Button>
                          <Button className="py-1 px-4 text-sm bg-socio-blue text-white hover:bg-socio-darkblue">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="mr-2 static translate-y-0" />
                <CarouselNext className="ml-2 static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Course Structure Section */}
        <section className="py-16 bg-white">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-socio-dark mb-6">
                  Our Course Structure
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Each course is structured to provide a comprehensive learning experience, combining theory with practical application.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-socio-blue text-white p-3 rounded-full mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-2">Video Lessons</h3>
                      <p className="text-gray-600">
                        Each course includes 25 in-depth video lessons, covering all aspects of the subject matter with clear explanations and demonstrations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-socio-blue text-white p-3 rounded-full mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-2">Practical Assignments</h3>
                      <p className="text-gray-600">
                        After every 5 videos, you'll complete a practical assignment to apply what you've learned and reinforce your understanding.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-socio-blue text-white p-3 rounded-full mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-2">Credit System</h3>
                      <p className="text-gray-600">
                        Each completed assignment earns you 20 credits, which are added to your profile and contribute to your position on the leadership board.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-socio-blue text-white p-3 rounded-full mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-2">Expert Evaluation</h3>
                      <p className="text-gray-600">
                        Our expert instructors review and provide feedback on your assignments, helping you improve and grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-8 animate-fade-in">
                  <h3 className="text-2xl font-bold text-socio-dark mb-6">Course Progress Example</h3>
                  
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <div className="bg-socio-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          1
                        </div>
                        <h4 className="text-lg font-bold">Introduction Module</h4>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-600 mb-2">5 videos + 1 assignment</p>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <Badge className="mt-2 bg-green-500">Completed</Badge>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <div className="bg-socio-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          2
                        </div>
                        <h4 className="text-lg font-bold">Fundamentals</h4>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-600 mb-2">5 videos + 1 assignment</p>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-socio-blue rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <Badge className="mt-2 bg-socio-blue">In Progress</Badge>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          3
                        </div>
                        <h4 className="text-lg font-bold text-gray-500">Advanced Techniques</h4>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-500 mb-2">10 videos + 2 assignments</p>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-gray-300 rounded-full" style={{width: '0%'}}></div>
                        </div>
                        <Badge variant="outline" className="mt-2 border-gray-300 text-gray-500">Locked</Badge>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          4
                        </div>
                        <h4 className="text-lg font-bold text-gray-500">Final Project</h4>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-500 mb-2">5 videos + 1 capstone project</p>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-gray-300 rounded-full" style={{width: '0%'}}></div>
                        </div>
                        <Badge variant="outline" className="mt-2 border-gray-300 text-gray-500">Locked</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;

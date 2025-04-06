
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Section 1: Intro Content */}
        <section className="py-20 bg-gradient-to-b from-socio-light to-white">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-socio-dark mb-6">
                  Empowering Learners Worldwide
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Sociocloud is revolutionizing online education through innovative learning approaches, expert-led courses, 
                  and a supportive community. We're dedicated to making quality education accessible to everyone, 
                  regardless of location or background, empowering individuals to achieve their personal and professional goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary">Discover Our Story</Button>
                  <Button variant="outline" className="border-socio-blue text-socio-blue hover:bg-socio-blue hover:text-white">
                    Our Team
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sociocloud Learning Community" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-socio-blue text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="font-bold text-2xl">20,000+</p>
                  <p>Students Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Explore Courses */}
        <section className="py-16 bg-gray-50">
          <div className="container-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Explore Our Top Courses</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our most popular courses designed to help you master new skills and advance your career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Marketing Mastery",
                  description: "Learn cutting-edge strategies to grow brands online and drive conversions.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Data Science Fundamentals",
                  description: "Master the basics of data analysis to make informed business decisions.",
                  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Leadership Development",
                  description: "Develop the skills needed to lead teams and drive organizational success.",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-socio-dark">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <Button className="bg-socio-blue hover:bg-socio-darkblue text-white">Explore Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="btn-primary">View All Courses</Button>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Us */}
        <section id="contact" className="py-16 bg-white">
          <div className="container-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Have questions or need more information? We'd love to hear from you. 
                Fill out the form below and our team will get back to you soon.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>
                  <Button className="btn-primary w-full">Send Message</Button>
                </form>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-4 text-socio-dark">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-socio-blue p-2 rounded text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@sociocloud.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-socio-blue p-2 rounded text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-socio-blue p-2 rounded text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">123 Innovation Drive, Tech Valley, CA 94123</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Google Map (placeholder) */}
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <iframe
                    title="Sociocloud Location"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-122.41941550000001!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1673233920290!5m2!1sen!2s"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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

export default About;

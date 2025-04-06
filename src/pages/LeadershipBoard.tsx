
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const topPerformers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: 1,
    credits: 1250,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    badge: "Excellence"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: 2,
    credits: 1180,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    badge: "Innovation"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: 3,
    credits: 1050,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    badge: "Impact"
  }
];

const otherPerformers = [
  { id: 4, name: "David Kim", rank: 4, image: "https://randomuser.me/api/portraits/men/36.jpg", credits: 980, tasks: 47, status: "Rising Star" },
  { id: 5, name: "Lisa Wong", rank: 5, image: "https://randomuser.me/api/portraits/women/63.jpg", credits: 920, tasks: 44, status: "Active" },
  { id: 6, name: "James Wilson", rank: 6, image: "https://randomuser.me/api/portraits/men/54.jpg", credits: 880, tasks: 42, status: "Active" },
  { id: 7, name: "Emma Taylor", rank: 7, image: "https://randomuser.me/api/portraits/women/17.jpg", credits: 840, tasks: 40, status: "New" },
  { id: 8, name: "Robert Miller", rank: 8, image: "https://randomuser.me/api/portraits/men/22.jpg", credits: 800, tasks: 37, status: "Active" },
  { id: 9, name: "Sophia Garcia", rank: 9, image: "https://randomuser.me/api/portraits/women/90.jpg", credits: 760, tasks: 36, status: "Rising Star" },
  { id: 10, name: "Daniel Martinez", rank: 10, image: "https://randomuser.me/api/portraits/men/42.jpg", credits: 720, tasks: 34, status: "Active" },
];

const LeadershipBoard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-socio-dark to-socio-blue text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute animate-pulse" style={{ width: '120px', height: '120px', background: '#ffffff', borderRadius: '50%', top: '10%', left: '20%' }}></div>
            <div className="absolute animate-pulse" style={{ width: '80px', height: '80px', background: '#ffffff', borderRadius: '50%', top: '60%', left: '10%', animationDelay: '0.5s' }}></div>
            <div className="absolute animate-pulse" style={{ width: '150px', height: '150px', background: '#ffffff', borderRadius: '50%', top: '30%', right: '15%', animationDelay: '1s' }}></div>
            <div className="absolute animate-pulse" style={{ width: '100px', height: '100px', background: '#ffffff', borderRadius: '50%', top: '70%', right: '25%', animationDelay: '1.5s' }}></div>
          </div>
          <div className="container-wrapper relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership Scoreboard
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Celebrating our top achievers and their outstanding accomplishments in our learning community.
              </p>
            </div>
          </div>
        </section>

        {/* Podium Section */}
        <section className="py-16 bg-white">
          <div className="container-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">Top Achievers</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Recognizing our standout performers who have demonstrated exceptional dedication and skill in completing course assignments.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8 mb-16">
              {/* Second Place */}
              <div className="order-2 md:order-1 flex flex-col items-center animate-scale-in">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-socio-blue overflow-hidden mb-4">
                  <img 
                    src={topPerformers[1].image} 
                    alt={topPerformers[1].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-silver h-40 md:h-56 w-full rounded-t-lg flex flex-col items-center justify-end p-4 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-silver flex items-center justify-center border-4 border-white text-3xl font-bold text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white">{topPerformers[1].name}</h3>
                  <Badge className="bg-socio-blue mt-1">{topPerformers[1].badge}</Badge>
                  <p className="text-white text-lg font-bold mt-2">{topPerformers[1].credits} Credits</p>
                </div>
              </div>
              
              {/* First Place */}
              <div className="order-1 md:order-2 flex flex-col items-center animate-scale-in z-10">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-socio-blue overflow-hidden mb-4 relative">
                  <img 
                    src={topPerformers[0].image} 
                    alt={topPerformers[0].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gold h-48 md:h-64 w-full rounded-t-lg flex flex-col items-center justify-end p-4 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold flex items-center justify-center border-4 border-white text-3xl font-bold text-white">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white">{topPerformers[0].name}</h3>
                  <Badge className="bg-socio-blue mt-1">{topPerformers[0].badge}</Badge>
                  <p className="text-white text-2xl font-bold mt-2">{topPerformers[0].credits} Credits</p>
                </div>
              </div>
              
              {/* Third Place */}
              <div className="order-3 flex flex-col items-center animate-scale-in">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-socio-blue overflow-hidden mb-4">
                  <img 
                    src={topPerformers[2].image} 
                    alt={topPerformers[2].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-bronze h-32 md:h-48 w-full rounded-t-lg flex flex-col items-center justify-end p-4 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-bronze flex items-center justify-center border-4 border-white text-3xl font-bold text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white">{topPerformers[2].name}</h3>
                  <Badge className="bg-socio-blue mt-1">{topPerformers[2].badge}</Badge>
                  <p className="text-white text-lg font-bold mt-2">{topPerformers[2].credits} Credits</p>
                </div>
              </div>
            </div>
            
            {/* Leaderboard Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-socio-dark">Credit Leaderboard</h3>
                <p className="text-gray-600">Complete assignments and earn credits to rise through the ranks.</p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16 text-center">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead className="text-center">Credits</TableHead>
                      <TableHead className="text-center">Tasks Completed</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {otherPerformers.map((user) => (
                      <TableRow key={user.id} className="hover:bg-gray-50 animate-fade-in" style={{ animationDelay: `${(user.rank - 3) * 0.1}s` }}>
                        <TableCell className="text-center font-medium">{user.rank}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-semibold">
                          {user.credits}
                        </TableCell>
                        <TableCell className="text-center">
                          {user.tasks}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge className={
                            user.status === "Rising Star" ? "bg-green-500" : 
                            user.status === "New" ? "bg-blue-500" : 
                            "bg-socio-blue"
                          }>
                            {user.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>
        
        {/* How to Earn Points */}
        <section className="py-16 bg-gray-50">
          <div className="container-wrapper">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-socio-dark mb-4">How to Earn Credits</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Earn credits by completing assignments and coursework to improve your position on the leadership board.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-socio-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">Complete Assignments</h3>
                <p className="text-gray-600">
                  Each course includes assignments after every 5 videos. Complete these assignments to earn 20 credits each.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-socio-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">Attend Webinars</h3>
                <p className="text-gray-600">
                  Participate in our live webinars and Q&A sessions to earn additional credits and learn from industry experts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-socio-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-socio-dark mb-2">Special Projects</h3>
                <p className="text-gray-600">
                  Take on special projects and challenges to earn bonus credits and demonstrate advanced skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Rewards */}
        <section className="py-16 bg-white">
          <div className="container-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-socio-dark mb-6">Monthly Rewards & Recognition</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Each month, we recognize and reward our top-performing students based on their leadership board standings and credit accumulation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-socio-blue text-white flex items-center justify-center mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-1">Digital Certificates</h3>
                      <p className="text-gray-600">
                        Top performers receive digital certificates highlighting their achievements and leadership skills.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-socio-blue text-white flex items-center justify-center mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-1">Course Discounts</h3>
                      <p className="text-gray-600">
                        Earn discounts on future courses based on your leadership board ranking.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-socio-blue text-white flex items-center justify-center mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-1">Exclusive Webinars</h3>
                      <p className="text-gray-600">
                        Gain access to exclusive webinars and mentoring sessions with industry leaders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-socio-blue text-white flex items-center justify-center mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-socio-dark mb-1">Featured Spotlight</h3>
                      <p className="text-gray-600">
                        Top performers are featured in our monthly newsletter and social media channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 bg-socio-light w-40 h-40 rounded-full opacity-50"></div>
                <div className="absolute -bottom-10 -right-10 bg-socio-light w-40 h-40 rounded-full opacity-50"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto bg-socio-blue/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-socio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-socio-dark mb-2">Special Prize</h3>
                    <p className="text-gray-600 mb-4">
                      This month's top performer will receive:
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-socio-blue mb-4">Professional Development Package</h4>
                      <ul className="text-left space-y-3">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>1-year premium subscription</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>One-on-one mentoring session</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Featured case study on our blog</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Digital badge for professional profiles</span>
                        </li>
                      </ul>
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

export default LeadershipBoard;


import { Link } from 'react-router-dom';

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
  }
];

const Courses = () => {
  return (
    <section id="courses" className="section bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-socio-dark mb-4">Our Featured Courses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our specially designed curriculum to help you excel in today's digital landscape and build valuable skills for your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.map((course, index) => (
            <div 
              key={course.id} 
              className="card hover:shadow-xl transition-all overflow-hidden flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2 text-socio-dark">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                <div className="flex gap-3 mt-4">
                  <button className="btn-outline py-1 px-4 text-sm">Syllabus</button>
                  <button className="btn-primary py-1 px-4 text-sm">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="#" className="btn-primary inline-block">View All Courses</Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;

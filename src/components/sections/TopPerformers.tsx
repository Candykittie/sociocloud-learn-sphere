
const TopPerformers = () => {
  const performers = [
    {
      name: "Sarah Johnson",
      title: "Leadership Excellence Award",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      title: "Innovation Champion",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Elena Rodriguez",
      title: "Community Impact Award",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    }
  ];

  return (
    <section className="section bg-socio-light" id="leadership">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-socio-dark mb-4">Our Top Performers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the students who have demonstrated exceptional skills, leadership, and innovation in their learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performers.map((performer, index) => (
            <div 
              key={index} 
              className="card text-center hover:shadow-xl transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={performer.image} 
                  alt={performer.name} 
                  className="w-24 h-24 rounded-full border-4 border-socio-blue object-cover"
                />
              </div>
              <h3 className="font-bold text-xl text-socio-dark mb-1">{performer.name}</h3>
              <p className="text-socio-blue font-medium mb-3">{performer.title}</p>
              <p className="text-gray-600">
                Demonstrated exceptional leadership skills and collaborative approach to problem-solving. Consistently delivers outstanding results.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPerformers;

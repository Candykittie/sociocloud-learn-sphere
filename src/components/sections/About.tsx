
const About = () => {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden animate-fade-in">
            <img 
              src="https://i.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.webp" 
              alt="Learning Innovation" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-socio-dark mb-6 animate-fade-in">
              About Sociocloud
            </h2>

            <div className="space-y-6">
              <div className="card animate-scale-in">
                <h3 className="text-xl font-semibold text-socio-blue mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To create a global community of lifelong learners equipped with the knowledge and skills to tackle complex social and technological challenges. We envision a world where quality education transcends boundaries and empowers individuals to create positive change.
                </p>
              </div>

              <div className="card animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold text-socio-blue mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Sociocloud is dedicated to delivering innovative, accessible, and impactful learning experiences that develop leadership, technical skills, and social intelligence. We combine cutting-edge research with practical application to prepare our students for success in an ever-evolving digital landscape.
                </p>
              </div>
            </div>

            <div className="mt-8 animate-fade-in">
              <a href="#courses" className="btn-outline">Discover Our Approach</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

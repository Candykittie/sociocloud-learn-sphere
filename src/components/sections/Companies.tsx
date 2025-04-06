
const Companies = () => {
  const companies = [
    { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-icon.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
    { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" },
    { name: "Facebook", logo: "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg" },
    { name: "Apple", logo: "https://cdn.worldvectorlogo.com/logos/apple-13.svg" },
    { name: "IBM", logo: "https://cdn.worldvectorlogo.com/logos/ibm.svg" }
  ];

  return (
    <section className="section bg-white border-t border-gray-200">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-socio-dark mb-4">Where Our Students Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our graduates have gone on to work at some of the world's leading companies, leveraging the skills they developed at Sociocloud.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all hover:-translate-y-1 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-h-16 max-w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;

import React from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop",
  },
  {
    name: "Emily Carter",
    role: "Business Analyst",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&h=500&fit=crop",
  },
  {
    name: "James Lee",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&h=500&fit=crop",
  },
];

const AboutPageTeamSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* Left Image */}
        <div data-aos="flip-left" data-aos-duration="1500">
          <img
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div  >
          <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Our Professional Team
          </h2>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-gray-600 dark:text-gray-400 mb-6">
            Our team of experts is dedicated to providing you with the best
            possible service.
          </p>

          {/* Grid of members */}
          <div className="grid grid-cols-2 gap-6">
            {teamMembers.slice(1).map((member, index) => (
              <div data-aos="flip-right" data-aos-duration="1500"
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-90 object-cover"
                />
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageTeamSection;

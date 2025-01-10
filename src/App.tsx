import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Download,
  Send,
  MapPin,
  Phone,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectPage, setCurrentProjectPage] = useState(0);

  const experiences = [
    {
      company: "Bharat Smart Services Company",
      role: "Data Science and Research Intern",
      duration: "June – August 2024",
      description:
        "Developed a model to classify household appliances by power consumption, optimizing energy usage and reducing costs by 15%. Enhanced data processing ETL workflows for 50,000+ households.",
    },
    {
      company: "Letsgrowmore Company",
      role: "Data Science and Research Intern",
      duration: "March – April 2022",
      description:
        "Analysed global demographics data to identify patterns and causes, supporting policy development and securitystrategies.Used scikit-learn, KNN, Feature Engineering, Seaborn, Matplotlib, Pandas, NumPy, Random Forest, Decision Tree.",
    },
  ];

  const projects = [
    {
      title: "Appliance Image Classification",
      description:
        "Created a CNN model to classify household appliances from images, using Google Colab for model building and AWS for deployment and testing purposes.",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "CNN", "AWS SageMaker", "TensorFlow"],
    },
    {
      title: "World Population Demographics Analysis",
      description:
        "Analysed global population data and created visualizations offering insights into demographic trends.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "Plotly", "Tableau", "Seaborn"],
    },
    {
      title: "Restaurant Review System",
      description:
        "Developed a system for collecting and processing restaurant reviews and ratings using MongoDB.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "MongoDB", "NoSQL"],
    },
    {
      title: "S&P 500 Analysis",
      description:
        "Analysed the impact of major events on S&P 500 using statistical analysis and regression models.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
      technologies: ["R", "ETL", "Regression Models"],
    },
  ];

  const skills = [
    {
      category: "Machine Learning & Applications",
      items: [
        "RNN",
        "OpenCV",
        "Bigdata",
        "Generative-AI",
        "Regression Models",
        "Feature Selection",
      ],
    },
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "HTML", "scikit-learn", "TensorFlow"],
    },
    {
      category: "Tools",
      items: ["AWS", "GitHub", "Tableau", "Power BI", "Excel", "DBMS"],
    },
  ];

  const achievements = [
    "IBM Data Science Professional Certification",
    "Deep Learning Specialization by Andrew Ng",
    "Google Data Analytics Certificate",
    "HackerRank Problem Solving Badge",
    "LinkedIn Python & Excel Skill Badges",
    "Global Leaders Award - GWU (Spring/Fall 2024)",
  ];

  const education = [
    {
      school: "The George Washington University",
      degree: "M.S. Data Science",
      location: "Washington, DC",
      duration: "Anticipated December 2025",
      courses:
        "Cloud Computing, Machine Learning, Data Visualization, Data Mining, Data Warehousing",
    },
    {
      school: "National Institute of Technology",
      degree: "B.Tech, Electronics and Communication Engineering",
      location: "Srinagar, India",
      duration: "May 2023",
      courses:
        "Advance Mathematics, Data Structures and Algorithms, Statistics",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  ``;
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="stars-container fixed inset-0 pointer-events-none" />
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8 text-lg">
            {["Home", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-indigo-400 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-indigo-400"
                      : "text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="orbitron text-6xl font-bold mb-4 text-white">
            Hi, I'm{" "}
            <span className="text-indigo-400">Dinesh Chandra Gaddam</span>
          </h1>
          <p className="text-xl mb-4">
            Data Scientist | Machine Learning Engineer | Problem Solver
          </p>
          <div className="flex justify-center items-center space-x-4 mb-6 text-sm">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> Arlington, VA
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" /> 703-906-4408
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />{" "}
              dineshchandragaddam2002@gmail.com
            </span>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/75Dineshchandra"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/dineshchandra-gaddam002/"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:dineshchandragaddam2002@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail />
            </a>
          </div>
          <div>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-400 transition-colors inline-flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20  px-6">
        <h2 className="heading-font text-4xl text-center  mb-12">Experience</h2>
        <div className="max-w-4xl  mx-auto">
          <div className="shadow carousel-slide">
            <div className="experience-card bg-white/5 p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="heading-font text-2xl mb-2">
                {experiences[currentSlide].company}
              </h3>
              <h4 className="text-indigo-400 mb-2">
                {experiences[currentSlide].role}
              </h4>
              <p className="text-gray-400 mb-4">
                {experiences[currentSlide].duration}
              </p>
              <p className="text-gray-300">
                {experiences[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="eduation" className="py-16">
        <h2 className="orbitron text-4xl font-bold text-center mb-12 text-white">
          Education
        </h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg hover:border hover:border-indigo-400 transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                <h4 className="text-xl text-indigo-400">{edu.degree}</h4>
                <p className="text-light-slate">
                  {edu.location} • {edu.duration}
                </p>
                <p className="mt-2 text-sm">
                  Relevant Coursework: {edu.courses}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white/5">
        <h2 className="orbitron text-4xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 bg-white/5 rounded-lg border border-transparent hover:border-indigo-400 hover:transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-bold mb-4 text-indigo-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="skill-item cursor-pointer">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <h2 className="orbitron text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white/5 rounded-lg overflow-hidden hover:border hover:border-indigo-400 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-400/10 text-indigo-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-white/5">
        <h2 className="orbitron text-4xl font-bold text-center mb-12 text-white">
          Achievements
        </h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/5 p-4 rounded-lg hover:transform hover:scale-105 transition-transform"
              >
                <p className="text-indigo-400">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <h2 className="orbitron text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/5 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center">
                <Mail className="mr-2" /> dineshchandragaddam2002@gmail.com
              </p>
              <p className="flex items-center justify-center">
                <Phone className="mr-2" /> 703-906-4408
              </p>
              <p className="flex items-center justify-center">
                <MapPin className="mr-2" /> Arlington, VA
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  <Github />
                </a>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

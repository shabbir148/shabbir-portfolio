import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  FileText,
  Codesandbox,
} from "lucide-react";

const profileImageUrl = "/asset/My.jpeg";
const collegeBgImageUrl = "/asset/IIITB.jpg"; // Add your college image path here

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const skills = {
    languages: ["JavaScript", "TypeScript"],
    frontend: [
      "React",
      "React.js",
      "React Native",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    backend: ["Node.js", "Express.js", "REST APIs"],
    tools: [
      "Redux",
      "Jest",
      "React Query",
      "React Router",
      "GraphQL",
      "Webpack",
      "Formik",
      "Joi",
      "Git",
      "Highcharts",
      "styled components",
      "Lighthouse",
      "Context API",
    ],
    databases: ["SQL", "MongoDB"],
  };

  const experiences = [
    {
      company: "Mobisy Technologies Pvt Ltd / Bizom",
      location: "Bangalore",
      position: "Software Engineer",
      duration: "July 2022 - Present",
      achievements: [
        "Developed and integrated modules for Bizom's Retail Intelligence Platform, onboarding 15+ new clients",
        "Built and optimized the Mobisy Design System (MDS), a reusable and scalable component library",
        "Optimized OneView architecture for scalability, improving system responsiveness by 20%",
        "Built interactive data visualization dashboards with SQL-based drag-and-drop query builder",
        "Developed the Top Deals feature for 20+ clients with customizable deals and auto-playing banners",
        "Published and maintained four white-label apps for over 50 clients",
        "Built RESTful APIs using Node.js and Express.js to support Sales Return, Claims, and Scheme workflows",
        "Designed MongoDB schemas for flexible storage of client-specific return policies and pricing configurations",
        "Implemented backend services in Node.js for claim filing, approvals, and multi-stage validations with audit trails",
        "Integrated Node.js backend with MongoDB for real-time analytics and reporting across 1M+ transaction records",
        "Wrote unit tests using Jest and React Testing Library to ensure component stability and reliability",
        "Utilized Playwright for E2E testing and automated regression checks across multiple browsers",
        "Used Lighthouse and Chrome DevTools for performance audits and testing UI responsiveness",
      ],
    },
    {
      company: "Mobisy Technologies Pvt Ltd / Bizom",
      location: "Bangalore",
      position: "Software Engineer Intern",
      duration: "Jan 2022 - Jun 2022",
      achievements: [
        "Led front-end development boosting performance by 25% and user engagement by 20%",
        "Designed and implemented the Mobisy Design System (MDS), accelerating development by 60-70%",
        "Created scalable design system reducing design inconsistencies by 60%",
      ],
    },
  ];

  const projects = [
    {
      name: "ShifThat",
      duration: "Dec 2021 - May 2022",
      institution: "IIIT Bangalore",
      github: "https://github.com/shabbir148/ShiftThat",
      description:
        "A web application enabling users to post advertisements for items they wish to shift, with integrated bidding system for transport providers.",
      achievements: [
        "Engineered advanced search functionalities resulting in 25% increase in successful item sales",
        "Facilitated bidding process optimizing cost efficiency and increasing transport operator income by 60%",
        "Integrated Jenkins with Ansible for continuous deployment, reducing deployment time by 40%",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "TypeScript",
        "Redux",
        "HTML",
        "CSS",
        "Material UI",
        "Jenkins",
        "Ansible",
      ],
    },
    {
      name: "IPL T20 Live Dashboard",
      duration: "Apr 2025 - May 2025",
      institution: "Personal Project",
      github: "https://github.com/shabbir148/IPL-T20-Live-Dashboard",
      live: "https://ipl-t20-live-dashboard-mu.vercel.app/",
      description:
        "A responsive web application that displays real-time IPL T20 match information, points table, and match schedule with a mobile-first UI.",
      achievements: [
        "Implemented live match updates with auto-refresh every 30 seconds for real-time match experience",
        "Designed a responsive UI with mobile tabs, improving usability on mobile devices by 40%",
        "Developed dynamic points table and schedule views for both completed and upcoming matches",
        "Optimized performance and responsiveness using Tailwind CSS utility-first approach",
      ],
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "Node.js",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Weather Prediction by Cloud Classification",
      github: "https://github.com/shabbir148/Weather-Prediction",
      duration: "Mar 2021 - Apr 2021",
      institution: "IIIT Bangalore",
      description:
        "Machine learning models to determine cloud shapes, orientation, and patterns for weather prediction.",
      achievements: [
        "Built ML models to separate and classify cloud patterns",
        "Helped climatologists better understand cloud impact on future climate",
      ],
      technologies: ["Python", "Machine Learning"],
    },
    {
      name: "Quora Insincere Questions",
      github: "https://github.com/shabbir148/Quora-Insincere-Questions",

      duration: "Feb 2021 - May 2021",
      institution: "IIIT Bangalore",
      description:
        "Pipeline to identify and classify the sincerity of questions on online platforms.",
      achievements: [
        "Constructed pipeline with 95% accuracy in identifying insincere questions",
        "Enhanced content quality and user trust",
        "Secured 2nd prize out of 100+ participants",
      ],
      technologies: ["Python", "Machine Learning"],
    },
    {
      name: "Scientific Calculator using DevOps",
      github: "https://github.com/shabbir148/Caculatorss",

      duration: "Jan 2021 - Feb 2021",
      institution: "IIIT Bangalore",
      description:
        "A comprehensive scientific calculator built with DevOps methodology and CI/CD pipeline.",
      achievements: [
        "Implemented DevOps practices for automated deployment",
        "Built responsive calculator with advanced mathematical functions",
        "Integrated continuous integration and deployment pipeline",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "DevOps", "CI/CD"],
    },
    {
      name: "Academic ERP",
      github: "https://github.com/shabbir148/erpnew2",

      duration: "Nov 2020 - Dec 2020",
      institution: "IIIT Bangalore",
      description:
        "Student management system allowing login, profile management, and academic information viewing.",
      achievements: [
        "Implemented student login and authentication system",
        "Built profile management with photo upload functionality",
        "Created grade viewing system for opted courses",
      ],
      technologies: ["HTML", "Bootstrap", "JavaScript", "Hibernate", "Java"],
    },
    {
      name: "Online Banking Application",
      duration: "Aug 2020 - Sep 2020",
      github: "https://github.com/shabbir148/Online-Banking-Application",

      institution: "IIIT Bangalore",
      description:
        "Banking application using Linux system calls, demonstrating advanced OS concepts.",
      achievements: [
        "Implemented system calls, semaphores, and file locking protocols",
        "Built client-server communication using socket programming",
        "Integrated multithreading for concurrent operations",
      ],
      technologies: ["C", "Shell Scripting", "Linux", "Socket Programming"],
    },
    {
      name: "Text Summarizer",
      duration: "Feb 2020 - Apr 2020",
      github:
        "https://github.com/shabbir148/A-Hybrid-Approach-for-Text-Summarization-/tree/master",

      institution: "Medicaps University",
      description:
        "Hybrid text summarization using TextRank, LexRank, Latent Semantic, and Fuzzy Logic techniques.",
      achievements: [
        "Developed hybrid approach combining four summarization techniques",
        "Created web application for efficient text processing",
        "Presented paper at ICCIC 2020 and received journal recommendation",
      ],
      technologies: [
        "Python",
        "Node.js",
        "HTML",
        "CSS",
        "TextRank",
        "LexRank",
        "Fuzzy Logic",
      ],
    },
    {
      name: "Movie Recommendation System",
      duration: "Aug 2019 - Nov 2019",
      institution: "Medicaps University",
      github: "https://github.com/shabbir148/Weather-Prediction",

      description:
        "UI-based movie recommendation system using story and character analysis.",
      achievements: [
        "Built recommendation engine based on movie story and characters",
        "Implemented content-based filtering algorithms",
        "Created intuitive web interface for user interaction",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "TensorFlow",
        "HTML",
        "Bootstrap",
      ],
    },
  ];

  const publications = [
    {
      title: "A Hybrid Approach for Text Summarization",
      journal: "Ethics and Information Technology",
      date: "Dec 3, 2020",
      description:
        "A text summarization method proposed which is a hybrid of four techniques: TextRank, LexRank, Latent Semantic, and Fuzzy Logic, resulting in more confident results.",
      url: "https://www.researchgate.net/publication/347635114_A_HYBRID_APPROACH_FOR_TEXT_SUMMARIZATION",
    },
  ];

  const education = [
    {
      degree: "MTech in Computer Science and Engineering",
      institution: "IIIT Bangalore",
      duration: "Aug 2020 - Jun 2022",
    },
    {
      degree: "BTech Computer Science and Engineering",
      institution: "Medicaps University",
      duration: "Aug 2016 - May 2020",
    },
  ];

  const awards = [
    {
      title: "Paper Presentation at ICCIC",
      date: "July 25-26, 2020",
      description:
        "Received recommendation for International Journal of Hybrid Intelligence out of 200+ submissions",
    },
    {
      title: "LeetCode Annual Badge 2023 & 2024",
      description:
        "Ranked in top 0.4% of LeetCoders with 1100+ questions solved",
    },
    {
      title: "LeetCode 1000-Day Streak Award",
      description:
        "Demonstrating exceptional consistency and problem-solving skills",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Shabbir Sidhpurwala
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "publications",
                "education",
                "awards",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? "text-purple-400"
                      : "text-white hover:text-purple-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with College Background */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${collegeBgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Additional gradient overlay for enhanced visual effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-blue-900/40"></div>

        <div className="text-center z-10 px-4 relative">
          <div className="mb-8">
            <div className="relative w-36 h-36 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl z-20 ring-4 ring-white/20">
                <img
                  src={profileImageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in drop-shadow-2xl">
              Shabbir Sidhpurwala
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 drop-shadow-lg">
              Software Engineer || IIIT Bangalore'22 | React, React Native
              Developer & Node
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:shabbirsidhpurwala7000@gmail.com"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a
              href="tel:8462825001"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/shabbir148"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/shabbir-sidhpurwala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://codesandbox.io/u/shabbirsidhpurwala7000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Codesandbox className="w-6 h-6 text-white" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce drop-shadow-lg"
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-3">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-3">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-3">
                    Backend & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.backend, ...skills.tools].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Experienced Software Engineer with expertise in React, React
                Native, and full-stack development. Currently working at Mobisy
                Technologies, where I've contributed to building scalable retail
                intelligence platforms and design systems that serve 50+
                clients.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about creating efficient, user-centric applications
                and optimizing system performance. Strong background in both web
                and mobile development with a proven track record of improving
                system responsiveness and user satisfaction.
              </p>
              <div className="mt-6">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>shabbirsidhpurwala7000@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <Phone className="w-4 h-4" />
                  <span>8462825001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-purple-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-purple-200 bg-purple-600/20 px-4 py-2 rounded-full text-sm mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Code className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-200 transition-colors"
                        title="GitHub"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 text-sm font-medium underline"
                        title="Live Demo"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-purple-300 mb-2">
                  {project.duration}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  {project.institution}
                </p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-600/20 text-purple-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <FileText className="w-8 h-8" />
            Research Publications
          </h2>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-lg text-purple-300 mb-2">
                      {publication.journal}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      {publication.date}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {publication.description}
                    </p>
                  </div>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 px-4 py-2 rounded-lg transition-colors mt-4 md:mt-0 md:ml-6"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Publication
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-300">{edu.institution}</p>
                  </div>
                  <span className="text-purple-200 bg-purple-600/20 px-4 py-2 rounded-full text-sm mt-2 md:mt-0">
                    {edu.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <Award className="w-8 h-8" />
            Awards & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {award.title}
                    </h3>
                    {award.date && (
                      <p className="text-sm text-purple-300 mb-2">
                        {award.date}
                      </p>
                    )}
                    <p className="text-gray-300 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Let's connect and build something amazing together!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:shabbirsidhpurwala7000@gmail.com"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/shabbir148"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/shabbir-sidhpurwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 mt-6">
            © 2025 Shabbir Sidhpurwala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

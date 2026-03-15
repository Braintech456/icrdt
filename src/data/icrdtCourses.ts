export type IcrdtCourse = {
  slug: string;
  title: string;
  code: string;
  duration: string;
  level: string;
  description: string;
  overview: string;
  modules: string[];
  careers: string[];
};

export const icrdtCourses: IcrdtCourse[] = [
  {
    slug: "certified-robotics-professional",
    title: "Certified Robotics Professional",
    code: "CRP",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Comprehensive certification covering robotics fundamentals, design, programming, and industrial applications.",
    overview:
      "Designed for aspiring robotics engineers and automation professionals seeking strong technical foundations.",
    modules: [
      "Introduction to Robotics",
      "Robot Kinematics & Dynamics",
      "Sensors & Actuators",
      "Industrial Robotics Applications",
      "Robotics Programming Basics",
    ],
    careers: [
      "Robotics Engineer",
      "Automation Technician",
      "Robotics Programmer",
    ],
  },

  {
    slug: "certified-drone-technology-professional",
    title: "Certified Drone Technology Professional",
    code: "CDTP",
    duration: "2 Months",
    level: "Intermediate",
    description:
      "Specialized certification in drone technology, operations, regulations, and aerial applications.",
    overview:
      "Focused on UAV systems, drone safety protocols, and advanced operational skills.",
    modules: [
      "Drone Fundamentals",
      "DGCA Regulations & Compliance",
      "Drone Operations & Safety",
      "Aerial Mapping & Survey",
      "Drone Maintenance & Troubleshooting",
    ],
    careers: [
      "Drone Operator",
      "UAV Technician",
      "Aerial Survey Specialist",
    ],
  },

  {
    slug: "industrial-automation-specialist",
    title: "Industrial Automation Specialist",
    code: "IAS",
    duration: "4 Months",
    level: "Advanced",
    description:
      "Expert-level certification in PLC programming, SCADA systems, and industrial automation solutions.",
    overview:
      "Covers industrial control systems, PLC logic development, and smart manufacturing technologies.",
    modules: [
      "PLC Programming",
      "SCADA Systems",
      "Industrial Sensors",
      "Automation Architecture",
      "Smart Factory Concepts",
    ],
    careers: [
      "PLC Engineer",
      "Automation Engineer",
      "Control Systems Specialist",
    ],
  },

  {
    slug: "ai-in-robotics-specialist",
    title: "AI in Robotics Specialist",
    code: "AIRS",
    duration: "4 Months",
    level: "Advanced",
    description:
      "Advanced certification in artificial intelligence, machine learning, and intelligent robotics systems.",
    overview:
      "Integrates AI, machine learning, and robotics for next-generation intelligent systems.",
    modules: [
      "Machine Learning Basics",
      "Computer Vision",
      "AI Algorithms in Robotics",
      "Autonomous Systems",
      "Intelligent Decision Systems",
    ],
    careers: [
      "AI Robotics Engineer",
      "Autonomous Systems Developer",
      "Robotics AI Specialist",
    ],
  },

  // ⭐ NEW COURSES ADDED

  {
    slug: "certified-robotics-system-engineer",
    title: "Certified Robotics System Engineer",
    code: "CRSE",
    duration: "4 Months",
    level: "Advanced",
    description:
      "Professional certification covering robotic system design, kinematics, sensors, and embedded systems.",
    overview:
      "Focuses on engineering-level understanding of robot mechanics, control systems, and perception technologies.",
    modules: [
      "Robotics Fundamentals",
      "Kinematics & Dynamics",
      "Robot Drive Systems",
      "Sensors & Perception",
      "Embedded Systems for Robotics",
    ],
    careers: [
      "Robotics System Engineer",
      "Robot Design Engineer",
      "Automation Engineer",
      "Embedded Robotics Engineer",
    ],
  },

  {
    slug: "certified-industrial-robotics-automation-professional",
    title: "Certified Industrial Robotics & Automation Professional",
    code: "CIRAP",
    duration: "5 Months",
    level: "Advanced",
    description:
      "Industry-oriented certification in industrial robots, PLC systems, automation, and smart manufacturing.",
    overview:
      "Prepares professionals for Industry 4.0 environments with hands-on automation and robotics integration skills.",
    modules: [
      "Industrial Robotics Overview",
      "Robot End-Effectors & Grippers",
      "PLC & Industrial Controllers",
      "Robot Programming for Industry",
      "Industry & Smart Factory",
      "Safety & Standards",
      "Industry Project",
    ],
    careers: [
      "Industrial Robotics Engineer",
      "Automation Engineer",
      "PLC Engineer",
      "Smart Factory Specialist",
    ],
  },

  {
    slug: "certified-drone-technology-engineer",
    title: "Certified Drone Technology Engineer",
    code: "CDTE",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Comprehensive certification in drone design, propulsion, flight control systems, and regulations.",
    overview:
      "Covers UAV architecture, autonomous flight systems, communication technologies, and regulatory compliance.",
    modules: [
      "Drone Fundamentals",
      "Drone Propulsion Systems",
      "Flight Controllers & Sensors",
      "Drone Frame Design",
      "Communication Systems",
      "Drone Programming",
      "Regulations & Certification",
    ],
    careers: [
      "Drone Engineer",
      "UAV Developer",
      "Drone Systems Specialist",
      "Aerial Robotics Engineer",
    ],
  },

  {
    slug: "certified-robotics-software-ai-developer",
    title: "Certified Robotics Software & AI Developer",
    code: "CRSAID",
    duration: "5 Months",
    level: "Advanced",
    description:
      "Advanced certification focusing on robotics software development, AI integration, and autonomous navigation.",
    overview:
      "Emphasizes ROS, computer vision, machine learning, SLAM, and intelligent robotic systems development.",
    modules: [
      "Programming Foundations",
      "ROS (Robot Operating System)",
      "Robot Simulation",
      "Computer Vision for Robotics",
      "AI/ML for Robotics",
      "SLAM & Navigation",
      "Capstone Project",
    ],
    careers: [
      "Robotics Software Engineer",
      "AI Robotics Developer",
      "Autonomous Systems Engineer",
      "ROS Developer",
    ],
  },
];
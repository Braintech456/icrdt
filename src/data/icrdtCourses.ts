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
];
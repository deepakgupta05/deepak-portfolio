export const projectsData = [
  {
    id: "eye-on-driver",
    title: "EyeOnDriver / ADAR",
    subtitle: "AI-Powered Driver Safety & Vehicle Alert System",
    category: "AI & Embedded Systems",
    image: "/assets/images/project1.png",
    featured: true,
    shortDesc: "Real-time AI driver monitoring system using OpenCV, MediaPipe, ESP32, and MQ-3 alcohol sensors to prevent drowsy & intoxicated driving.",
    problem: "Driver fatigue and alcohol impairment account for a major share of road accidents globally. Existing commercial ADAS solutions are often expensive or lack integrated alcohol sensing.",
    features: [
      "Facial Landmark & Eye Aspect Ratio (EAR) drowsiness tracking with MediaPipe & OpenCV",
      "Yawning and distraction detection via real-time computer vision",
      "MQ-3 Alcohol Sensor integration with ESP32 microcontroller for real-time intoxication screening",
      "Instant voice alerts via Bluetooth speakers & TTS modules",
      "Emergency SOS & GPS location messaging triggering upon critical fatigue levels",
      "Live LCD display output for vehicle diagnostic status"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "ESP32", "MQ-3 Sensor", "TTS Engine", "Bluetooth Speaker", "LCD", "Serial Comm"],
    githubUrl: "https://github.com/deepakgupta05",
    demoUrl: null
  },
  {
    id: "farmzi",
    title: "Farmzi",
    subtitle: "Smart Agriculture & AgriTech Support System",
    category: "IoT & Web Tech",
    image: "/assets/images/project2.png",
    featured: true,
    shortDesc: "Intelligent farming support platform delivering weather telematics, crop yield recommendations, market prices, and localized emergency alerts.",
    problem: "Farmers in rural regions often lack real-time localized data on soil moisture, upcoming weather shifts, and transparent market rates in their native languages.",
    features: [
      "Real-time weather API integration and extreme weather alert dispatch",
      "Smart crop selection recommendation engine based on seasonal soil data",
      "Live agricultural commodity market prices tracker",
      "Regional language accessibility interface for frictionless user experience",
      "Real-time cloud database synchronization via Firebase"
    ],
    technologies: ["Python", "Firebase", "HTML5", "CSS3", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/deepakgupta05",
    demoUrl: null
  },
  {
    id: "rewear",
    title: "ReWear / ReWearX",
    subtitle: "Sustainable Community Clothing Exchange Platform",
    category: "Full-Stack Web App",
    image: "/assets/images/project3.png",
    featured: true,
    shortDesc: "Full-stack web platform facilitating local clothing recycling, peer-to-peer apparel exchange, user authentication, and admin moderation.",
    problem: "Fast fashion generates millions of tons of textile waste annually. ReWear provides a circular economy alternative for communities to share and swap unused garments.",
    features: [
      "User authentication and encrypted credential authorization",
      "Interactive item listing catalog with tag filtering and search",
      "Personalized user profile dashboard for tracking active swaps",
      "Admin moderation panel for item validation and user compliance",
      "Responsive glassmorphic UI built with Node.js, Express, and MongoDB"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/deepakgupta05",
    demoUrl: null
  },
  {
    id: "pathshala-ai",
    title: "PathshalaAI",
    subtitle: "AI-Assisted Educational & Student Progress Hub",
    category: "Full-Stack Web App",
    image: "/assets/images/project2.png",
    featured: false,
    shortDesc: "Smart student dashboard providing attendance tracking, performance analytics, interactive learning modules, and cloud progress sync.",
    problem: "Students and educators need a consolidated view of academic performance, attendance metrics, and personalized learning materials without clutter.",
    features: [
      "Interactive student progress visualizer with dynamic performance graphs",
      "Real-time attendance logging and threshold warning alerts",
      "Structured course learning modules with video & document viewers",
      "Firebase backend authentication and real-time database sync"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Firebase"],
    githubUrl: "https://github.com/deepakgupta05",
    demoUrl: null
  },
  {
    id: "optimal-flight-route",
    title: "Optimal Flight Route Finder",
    subtitle: "Algorithmic Aviation Path Optimization",
    category: "Algorithms & AI",
    image: "/assets/images/project1.png",
    featured: false,
    shortDesc: "Graph search optimization system utilizing Dijkstra and A* algorithms to compute fuel-efficient and time-optimized flight navigation paths.",
    problem: "Airline operations require precise multi-node route planning factoring distance, atmospheric conditions, and airspace restrictions.",
    features: [
      "Dijkstra & A* graph navigation algorithms tailored for aviation networks",
      "MeTTa knowledge representation for declarative constraint evaluation",
      "Visual flight trajectory renderer with waypoint node mapping",
      "Fuel consumption and flight duration comparative analytics"
    ],
    technologies: ["Python", "MeTTa", "Graph Theory", "Dijkstra Algorithm", "A* Algorithm"],
    githubUrl: "https://github.com/deepakgupta05",
    demoUrl: null
  },
  {
    id: "rslk-robot",
    title: "RSLK Autonomous Robot",
    subtitle: "TI MSP432 Robotics & Wireless Control System",
    category: "Embedded & Robotics",
    image: "/assets/images/project3.png",
    featured: false,
    shortDesc: "Autonomous robotic vehicle built on TI RSLK framework featuring MSP432 microcontroller, HC-05 Bluetooth command link, and obstacle avoidance.",
    problem: "Building low-latency embedded control software for multi-sensor autonomous land rovers under real-time execution constraints.",
    features: [
      "Embedded C firmware running on Texas Instruments MSP432 ARM Cortex-M4",
      "Wireless telemetry and remote manual override via HC-05 Bluetooth transceiver",
      "Infrared bump sensor array for real-time obstacle navigation",
      "IoT module integration with ESP8266/ESP32 for cloud status logging"
    ],
    technologies: ["Embedded C", "TI MSP432", "HC-05 Bluetooth", "ESP8266", "TI RSLK", "Sensors"],
    githubUrl: "https://github.com/deepakgupta05",
    demoUrl: null
  }
];

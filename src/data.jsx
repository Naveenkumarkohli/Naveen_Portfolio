const home = {
    name: 'Naveen Kumar Koyyana',
    roles: ['Full Stack Developer', 'AI/ML Enthusiast', 'Software Developer'],
  };
  
  const about = {
    content: `Java Full Stack and AI enthusiast seeking a Software Developer role to build reliable, scalable web applications and intelligent features. I bring hands-on experience with Spring Boot, REST APIs, MySQL, and ML/NLP projects, including Gemini API integration, and I focus on clean code, data-driven decisions, and user-centric design.`,
  };
  
  const projects_skills = {
    projects_list: ['library_management', 'weather_app', 'chat_app', 'ai_chatbot'],
    projects: {
      library_management: {
        name: 'Library Management System',
        short_description: 'Node.js, Express.js, EJS',
        long_description: `
          <p>Developed a full-stack Library Management System using Node.js, Express.js, and EJS templates. The system includes user authentication with admin approval, book browsing with pagination and filters, and user stats dashboards.</p>
          <br />
          <p>Administrators can manage books and users, including adding, updating, or deleting entries, providing a comprehensive library management solution.</p>
          <br />
          <p><strong>Key Features:</strong> Role-based access, admin-approved users, book search & pagination, user statistics cards, full admin dashboard.</p>
        `,
        thumbnail: (import.meta.env.BASE_URL || '/') + 'images/library.png',
        images: [(import.meta.env.BASE_URL || '/') + 'images/library.png'],
        techStack: ['Node.js', 'Express.js', 'EJS'],
        demo: 'https://library-management-system-98c7.onrender.com',
        source: 'https://github.com/Naveenkumarkohli/Library_Management_System',
        link: 'https://library-management-system-98c7.onrender.com',
      },
      weather_app: {
        name: 'Weather Forecast Application',
        short_description: 'React.js, Node.js, Express.js',
        long_description: `
          <p>Built a full-stack weather application using React.js, Node.js, and Express.js that delivers real-time weather updates based on live location.</p>
          <br />
          <p>Displays hourly weather for today and a 4-day forecast, including temperature, humidity, and conditions. The app features a responsive interface and integrates with a weather API for accurate data.</p>
          <br />
          <p><strong>Key Features:</strong> Live location access, hourly weather updates, 4-day forecast, responsive design, real-time API integration.</p>
        `,
        thumbnail: (import.meta.env.BASE_URL || '/') + 'images/weather.png',
        images: [(import.meta.env.BASE_URL || '/') + 'images/weather.png'],
        techStack: ['React.js', 'Node.js', 'Express.js'],
        demo: 'https://weather-forecast-rosy-seven.vercel.app/',
        source: 'https://github.com/Naveenkumarkohli/Weather_Forecast',
        link: 'https://weather-forecast-rosy-seven.vercel.app/',
      },
      chat_app: {
        name: 'Real-Time Chat Application',
        short_description: 'MERN Stack, Socket.io',
        long_description: `
          <p>Developed a MERN stack real-time chat app using Socket.io. Users can chat instantly, manage profiles (bio & picture), and view all registered users.</p>
          <br />
          <p>Includes live online status indicators (green dot + "online" label) for better interaction. Socket.io powers real-time messaging with a responsive interface for smooth communication.</p>
          <br />
          <p><strong>Key Features:</strong> Real-time messaging, user authentication, profile management, live online status, responsive chat UI.</p>
        `,
        thumbnail: (import.meta.env.BASE_URL || '/') + 'images/chat.png',
        images: [(import.meta.env.BASE_URL || '/') + 'images/chat.png'],
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
        demo: 'https://chat-app-frontend-p9wxmkra8.vercel.app/',
        source: 'https://github.com/Naveenkumarkohli/Chat_App',
        link: 'https://chat-app-frontend-p9wxmkra8.vercel.app/',
      },
      ai_chatbot: {
        name: 'AI Chatbot with Gemini API (Full Stack + NLP)',
        short_description: 'Java, Spring Boot, JavaScript, Gemini API',
        link: 'https://ai-chatbot-k605.onrender.com/',
        long_description: `
          <p>Developed a full-stack chatbot application by integrating Google's Gemini API to handle dynamic queries and generate human-like responses. The application is deployed and available at <a href='https://ai-chatbot-k605.onrender.com/' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline'>ai-chatbot-k605.onrender.com</a>.</p>
          <br />
          <p>Built secure REST endpoints with Spring Boot to connect the UI and Gemini API, ensuring seamless request/response flow.</p>
          <br />
          <p>Added conversation logging and analytics (chat volume, response accuracy, user satisfaction) for continuous improvement.</p>
          <br />
          <p>Designed a responsive web interface using JavaScript/Bootstrap for smooth user interaction.</p>
          <br />
          <p>This project showcases full-stack development skills, API integration, and practical application of AI in conversational interfaces. The chatbot demonstrates proficiency in both backend and frontend technologies while leveraging cutting-edge AI capabilities.</p>
        `,
        thumbnail: (import.meta.env.BASE_URL || '/') + 'images/ai_chatbot.png',
        images: [(import.meta.env.BASE_URL || '/') + 'images/ai_chatbot.png'],
        techStack: ['Java', 'Spring Boot', 'JavaScript', 'Gemini API', 'REST APIs', 'Bootstrap'],
        demo: 'https://ai-chatbot-k605.onrender.com',
        source: 'https://github.com/Naveenkumarkohli/AI_CHATBOT',
      },
    },
    skills: [
      // Your skills array remains the same
    ],
  };
  
  const experience = [
    {
      company: 'Pixelwind Technologies',
      role: 'Java Full Stack Developer Intern',
      location: 'Remote',
      duration: 'Dec 2024 - Apr 2025',
      image: (import.meta.env.BASE_URL || '/') + 'images/topnotch.png',
      link: '#',
      description: 'Built a real-time Online Food Ordering System (team project) using Spring Boot, REST APIs, Hibernate/JPA, and MySQL for seamless user experience and efficient backend operations.',
    },
  ];
  
  const education = [
    // Your education array remains the same
  ];
  
  const contact = {
    description: `<p>Thank you for taking the time to explore my portfolio! Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.</p>
      <br />
      <p>Feel free to reach out using the contact form below or connect with me through my social media channels. I make it a priority to respond to all inquiries promptly, so you can expect to hear back from me soon.</p>`,
    socials: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/naveen-kumar-36/',
        icon: (import.meta.env.BASE_URL || '/') + 'images/linkedin.svg',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/Naveenkumarkohli',
        icon: (import.meta.env.BASE_URL || '/') + 'images/github.svg',
      },
      {
        name: 'Email',
        link: 'mailto:naveenkumarkohli06@gmail.com',
        icon: (import.meta.env.BASE_URL || '/') + 'images/gmail.svg',
      },
    ],
  };
  
  const gate_details = {
    gate_score: 483,
    gate_rank: 7912,
    gate_marks: 42.24,
    gate_year: 2025,
    gate_branch: 'CSE',
    conducted_by: 'IIT Roorkee',
  };
  
  export { home, about, projects_skills, experience, education, contact, gate_details };
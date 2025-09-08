const home = {
    name: 'Naveen Kumar Koyyana',
    roles: ['Full Stack Developer', 'AI/ML Enthusiast', 'Software Developer'],
}

const about = {
    content: `Java Full Stack and AI enthusiast seeking a Software Developer role to build reliable, scalable web applications and intelligent features. I bring hands-on experience with Spring Boot, REST APIs, MySQL, and ML/NLP projects, including Gemini API integration, and I focus on clean code, data-driven decisions, and user-centric design.`,
}

const projects_skills = {
    projects_list: ['spam_classifier', 'counterfeit_detection', 'plant_disease_detection', 'ai_chatbot'],
    projects: {
        spam_classifier: {
            name: 'SPAM Mail Classifier',
            short_description: 'Python, Machine Learning, NLP',
            long_description: `
            <p>Developed a spam classifier using machine learning algorithms to classify whether a particular mail is spam or not.</p>
            <br />
            <p>Achieved nearly 90% accuracy in classifying spam or not. The model's effectiveness was limited by data and computational resources, but it gives accurate results using a Naive-Bayes classifier.</p>
            <br />
            <p>This project demonstrates proficiency in machine learning, natural language processing, and Python programming. The classifier uses text preprocessing, feature extraction, and supervised learning techniques to identify spam emails effectively.</p>
            <br />
            <p>Key technologies used include Python for development, scikit-learn for machine learning algorithms, pandas for data manipulation, and NLTK for natural language processing tasks.</p>
            `,
            thumbnail: '/images/spam_classifier.png',
            images: ['/images/spam_classifier.png'],
            techStack: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'Pandas'],
            demo: '#',
            source: '#',
            link: '#',
        },
        counterfeit_detection: {
            name: 'Counterfeit Currency Detection',
            short_description: 'CNN, Deep Learning, Python',
            long_description: `
            <p>Developed a counterfeit currency detection system using Python and convolutional neural networks (CNN).</p>
            <br />
            <p>Created a model to detect counterfeit currency by analyzing images and achieved high accuracy through extensive training and testing. Utilized a dataset of currency images and employed CNN architecture to enhance detection capabilities.</p>
            <br />
            <p>The system can accurately identify various plant diseases from images, helping farmers make informed decisions about crop management and treatment strategies.</p>
            <br />
            <p>This project showcases expertise in deep learning, computer vision, and practical application of AI in financial security systems.</p>
            `,
            thumbnail: '/images/counterfeit_detection.png',
            images: ['/images/counterfeit_detection.png'],
            techStack: ['Python', 'CNN', 'Deep Learning', 'TensorFlow', 'OpenCV'],
            demo: '#',
            source: '#',
            link: '#',
        },
        plant_disease_detection: {
            name: 'Plant Disease Detection',
            short_description: 'MobileNetV3, Python, Android Studio',
            long_description: `
            <p>Developed a plant disease detection system using MobileNetV3 architecture on the PlantVillage dataset.</p>
            <br />
            <p>Created a model to accurately identify various plant diseases from images. Achieved high accuracy in disease detection through extensive training and testing, ensuring fast and reliable disease diagnosis.</p>
            <br />
            <p>Used Three.js to design realistic 3D models of herbal plants and integrated A-Frame for creating immersive virtual tours of the garden, enhanced the user experience with real-time plant identification and detailed benefits of each herb, aimed to provide a visually engaging way to promote environmental education.</p>
            <br />
            <p>This project demonstrates proficiency in mobile app development, deep learning, and practical application of AI in agriculture and environmental education.</p>
            `,
            thumbnail: '/images/plant_disease.png',
            images: ['/images/plant_disease.png'],
            techStack: ['MobileNetV3', 'Python', 'Android Studio', 'Three.js', 'A-Frame'],
            demo: '#',
            source: '#',
            link: '#',
        },
        ai_chatbot: {
            name: 'AI Chatbot with Gemini API (Full Stack + NLP)',
            short_description: 'Java, Spring Boot, JavaScript, Gemini API',
            link: 'https://ai-chatbot-k605.onrender.com/',
            long_description: `
            <p>Developed a full-stack chatbot application by integrating Google's Gemini API to handle dynamic queries and generate human-like responses. The application is deployed and available at <a href='https://ai-chatbot-k605.onrender.com/' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline'>ai-chatbot-k605.onrender.com</a>.</p></p>
            <br />
            <p>Built secure REST endpoints with Spring Boot to connect the UI and Gemini API, ensuring seamless request/response flow.</p>
            <br />
            <p>Added conversation logging and analytics (chat volume, response accuracy, user satisfaction) for continuous improvement.</p>
            <br />
            <p>Designed a responsive web interface using JavaScript/Bootstrap for smooth user interaction.</p>
            <br />
            <p>This project showcases full-stack development skills, API integration, and practical application of AI in conversational interfaces. The chatbot demonstrates proficiency in both backend and frontend technologies while leveraging cutting-edge AI capabilities.</p>
            `,
            thumbnail: '/Naveen_Portfolio/images/ai_chatbot.png',
            images: ['/Naveen_Portfolio/images/ai_chatbot.png'],
            techStack: ['Java', 'Spring Boot', 'JavaScript', 'Gemini API', 'REST APIs', 'Bootstrap'],
            demo: 'https://ai-chatbot-k605.onrender.com',
            source: 'https://github.com/Naveenkumarkohli/AI_CHATBOT',
        },
    },
    skills: [
        {
            name: 'Java',
            path: 'java',
            icon: 'FaJava',
            color: 'text-red-600',
            description: 'High-performance, object-oriented programming language. Experienced in building robust backend services and enterprise applications.',
        },
        {
            name: 'Python',
            path: 'python',
            icon: 'FaPython',
            color: 'text-blue-600',
            description: 'Versatile programming language for web development, data analysis, AI/ML, and automation. Strong in writing clean, efficient Pythonic code.',
        },
        {
            name: 'SQL',
            path: 'mysql',
            icon: 'FaDatabase',
            color: 'text-blue-500',
            description: 'Expert in writing complex queries, database design, and optimization. Proficient in MySQL and relational database management.',
        },
        {
            name: 'Spring Boot',
            path: 'spring',
            icon: 'SiSpring',
            color: 'text-green-600',
            description: 'Enterprise Java framework for building microservices and web applications. Experience with dependency injection, security, and RESTful services.',
        },
        {
            name: 'REST APIs',
            path: 'api',
            icon: 'FaServer',
            color: 'text-indigo-600',
            description: 'Designing and implementing RESTful web services. Experience with API documentation using Swagger/OpenAPI and testing with Postman.',
        },
        {
            name: 'Hibernate/JPA',
            path: 'hibernate',
            icon: 'SiHibernate',
            color: 'text-gray-700',
            description: 'Object-relational mapping tool for Java. Proficient in JPA specifications, entity relationships, and performance optimization.',
        },
        {
            name: 'Flask',
            path: 'python',
            icon: 'SiFlask',
            color: 'text-gray-700',
            description: 'Lightweight WSGI web application framework for Python. Experience building RESTful APIs and web applications.',
        },
        {
            name: 'MySQL',
            path: 'mysql',
            icon: 'FaDatabase',
            color: 'text-blue-500',
            description: 'Open-source relational database management system. Proficient in database design, query optimization, and administration.',
        },
        {
            name: 'JavaScript',
            path: 'js',
            icon: 'FaJs',
            color: 'text-yellow-500',
            description: 'High-level programming language for web development. Experience with ES6+ features and modern JavaScript frameworks.',
        },
        {
            name: 'HTML',
            path: 'html',
            icon: 'FaHtml5',
            color: 'text-orange-600',
            description: 'Standard markup language for creating web pages. Proficient in semantic HTML5 and accessibility best practices.',
        },
        {
            name: 'CSS',
            path: 'css',
            icon: 'FaCss3',
            color: 'text-blue-400',
            description: 'Style sheet language for web page styling. Experience with responsive design and CSS preprocessors like SASS/SCSS.',
        },
        {
            name: 'Bootstrap',
            path: 'css',
            icon: 'FaBootstrap',
            color: 'text-purple-600',
            description: 'Popular CSS framework for responsive web design. Experience with Bootstrap 5 components and utilities.',
        },
        {
            name: 'Gemini API',
            path: 'js',
            icon: 'SiGoogle',
            color: 'text-blue-500',
            description: 'Google\'s generative AI API for building intelligent applications. Experience with prompt engineering and response handling.',
        },
        {
            name: 'NumPy',
            path: 'numpy',
            icon: 'SiNumpy',
            color: 'text-blue-700',
            description: 'Fundamental package for scientific computing with Python. Proficient in array operations, linear algebra, and numerical computations.',
        },
        {
            name: 'Pandas',
            path: 'pandas',
            icon: 'SiPandas',
            color: 'text-blue-900',
            description: 'Powerful data manipulation and analysis library. Experience with data cleaning, transformation, and time series analysis.',
        },
        {
            name: 'Scikit-learn',
            path: 'scikit-learn',
            icon: 'SiScikitlearn',
            color: 'text-orange-700',
            description: 'Machine learning library for Python. Experience with classification, regression, clustering, and model evaluation.',
        },
        {
            name: 'TensorFlow',
            path: 'tensorflow',
            icon: 'SiTensorflow',
            color: 'text-orange-500',
            description: 'End-to-end open source platform for machine learning with tools, libraries, and community resources for building and deploying ML-powered applications.',
        },
        {
            name: 'Git',
            path: 'git',
            icon: 'FaGitAlt',
            color: 'text-orange-700',
            description: 'Distributed version control system for tracking changes in source code. Proficient in branching, merging, and collaborative workflows.',
        },
    ],
}

const experience = [
    {
        company: 'Pixelwind Technologies',
        role: 'Java Full Stack Developer Intern',
        location: 'Remote',
        duration: 'Dec 2024 - Apr 2025',
        image: '/images/topnotch.png',
        link: '#',
        description: 'Built a real-time Online Food Ordering System (team project) using Spring Boot, REST APIs, Hibernate/JPA, and MySQL for seamless user experience and efficient backend operations.'
    }
]

const education = [
    {
        title: 'B.Tech in CSE (AI & DS)',
        name: 'GMR Institute of Technology',
        location: 'Rajam, India',
        degree: 'Bachelor of Technology',
        board: '',
        grade: 'CGPA: 8.67',
        duration: '2022 - 2025',
        image: '/images/GMRIT_Logo.jpg',
        description: 'Completed Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Data Science.',
        link: 'https://gmrit.edu/'
    },
    {
        title: 'Diploma in EEE',
        name: 'MBTS Govt Polytechnic',
        location: 'Guntur, India',
        degree: 'Diploma',
        board: '',
        grade: 'Percentage: 90%',
        duration: '2019 - 2022',
        image: '/images/jvn.png',
        description: 'Completed Diploma in Electrical and Electronics Engineering with excellent academic performance.',
        link: 'https://mbtsgovtpolyguntur.ac.in/'
    },
    {
        title: 'SSC',
        name: 'Sri Vidhyaniketan High School',
        location: 'Rajam, India',
        degree: 'Secondary School Certificate',
        board: 'Board of Secondary Education, AP',
        grade: 'GPA: 10.0',
        duration: '2019',
        image: '/images/jvn1.png',
        description: 'Completed secondary education with outstanding academic performance.',
        link: 'https://schools.org.in/srikakulam/28110400723/svidya-niketan-high-school-rajam.html'
    },
    {
        title: 'Personal Information',
        name: 'Date of Birth',
        location: 'Rajam, India',
        degree: '13th July 2004',
        board: '',
        grade: '',
        duration: '',
        image: '',
        description: 'Born and raised in Rajam, India.',
        isDob: true
    }
]

const contact = {
    description: `<p>Thank you for taking the time to explore my portfolio! Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.</p>
    <br />
    <p>Feel free to reach out using the contact form below or connect with me through my social media channels. I make it a priority to respond to all inquiries promptly, so you can expect to hear back from me soon.</p>`,
    socials: [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/naveen-kumar-36/',
            icon: './asserts/icons/linkedin.svg'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/Naveenkumarkohli',
            icon: './asserts/icons/github.svg'
        },
        {
            name: 'Email',
            link: 'mailto:naveenkumarkohli06@gmail.com',
            icon: './asserts/icons/email.svg'
        },
    ]
}

const gate_details = {
    gate_score: 483,
    gate_rank: 7912,
    gate_marks: 42.24,
    gate_year: 2025,
    gate_branch: 'CSE',
    conducted_by: 'IIT Roorkee',
}

export { home, about, projects_skills, experience, education, contact, gate_details };
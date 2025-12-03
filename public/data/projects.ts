export interface ProjectDetails {
    id: string;
    title: string;
    previewUrl: string;
    description: string;
    youtubeEmbedUrl: string;
    keyFeatures: string[];
    technologies: string[];
    sources: { label: string; url: string }[];
}

export const Projects: ProjectDetails[] = [
    {
        id: "1",
        title: 'Crypto Currency Management System',
        previewUrl: 'https://crypto-currency-management-system.vercel.app/',
        description: 'I developed the Crypto Currency Management System, a comprehensive web application designed for efficient management of cryptocurrencies and monetary transactions. The platform enables users to register with their personal details and securely log in. Key functionalities include withdrawing funds to their accounts and converting money into various cryptocurrencies.',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/XcpPwtxCeTA?si=nwu2RFp-bnW3ckzV',
        keyFeatures: [
            'User Registration and Authentication: Implemented secure user registration and login processes to ensure data protection and account security.',
            'Withdrawal and Conversion: Implemented withdrawal functionality to allow users to withdraw funds from their accounts and convert them into various cryptocurrencies.',
            'Responsive Design: Ensured a responsive and user-friendly interface across different devices and screen sizes.',
            'Error Handling and Validation: Implemented robust error handling and validation mechanisms to prevent user errors and ensure data accuracy.',
            'Password Reset: Incorporated password reset functionality to enhance user security, allowing users to reset their passwords if forgotten.',
            'Crypto Conversion API Integration: Integrated with a reliable crypto conversion API to enable users to convert their funds into various cryptocurrencies.',
        ],
        technologies: [
            'Front End: React.js',
            'Back End: Spring Boot',
            'Database: MySQL',
        ],
        sources: [
            { label: 'Figma Design', url: 'https://www.figma.com/community/file/1378623760509729411/cryptocurrency-management-system' },
            { label: 'Front-End Source Code', url: 'https://github.com/Sivakkanth/Crypto-Currency-Management-System' },
            { label: 'Back-End Source Code', url: 'https://github.com/Sivakkanth/Cryptocurrency-Management-System-Backend' },
        ]
    },
    {
    id: "2",
    title: "Sample Dashboard (dppr)",
    previewUrl: "https://dashboard-rho-beryl.vercel.app/",
    description: "The Sample Dashboard is a dynamic and fully responsive web application developed to demonstrate proficiency in front-end development using modern technologies. Created as a project for a Fiverr freelance client, this dashboard highlights the ability to design and implement a professional user interface that adapts seamlessly across various devices, including laptops, tablets, and mobile phones.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/ufGk9rdNpfI?si=rqI-jyEDRh-w2Qw0",
    keyFeatures: [
      "Responsive Design: The dashboard is meticulously crafted to ensure compatibility and optimal display on all devices, providing a consistent user experience regardless of screen size.",
      "Front-End Development: Developed exclusively using React JS, the application leverages the powerful capabilities of this JavaScript library to build a fast and interactive user interface.",
      "Tailwind CSS Styling: Tailwind CSS is utilized for styling, allowing for a highly customizable and aesthetically pleasing design. This utility-first CSS framework ensures that the dashboard is not only visually appealing but also highly functional."
    ],
    technologies: [
      "React JS: Employed for building the dynamic and interactive components of the dashboard, ensuring a smooth and responsive user experience.",
      "Tailwind CSS: Used for styling the application, providing a clean and modern look while maintaining high performance and flexibility in design."
    ],
    sources: [
      { label: "Front-End Source Code", url: "https://github.com/Sivakkanth/sample_dashboard" }
    ]
  },
  {
    id: "3",
    title: "Job portal Mobile App (JobGods)",
    previewUrl: "#", // No actual preview URL provided in the HTML
    description: "JobGods is an innovative mobile application designed to bridge the gap between job seekers and potential employers. This essential tool in the job market simplifies the process of finding employment opportunities and managing job applications, offering a seamless experience across various devices. In this project, I played a dual role as both a Front End Developer and a UI/UX Designer. Utilizing Flutter, a powerful framework for cross-platform mobile development, I crafted a responsive and visually appealing user interface. This approach ensures a seamless experience for users on both Android and iOS devices. For back-end services, we leveraged Firebase, integrating its robust cloud-based solutions to enhance the app's functionality. Specifically, I implemented Firestore for the database, enabling efficient data storage and retrieval. Additionally, Firebase Authentication services were utilized to manage user login and security features, including password resets via OTP.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/sZNc7P7yzeo?si=lYEwiUHINPQLPIfP",
    keyFeatures: [
      "User Registration and Authentication: Secure user registration and login using Firebase Authentication. Password reset functionality via OTP to enhance user security.",
      "Job Search and Application",
      "Profile Management: Comprehensive profile management where users can update personal details, work experience, and skills.",
      "Event Management",
      "User-Friendly Interface",
      "Data Storage and Retrieval"
    ],
    technologies: [
      "Flutter: Utilized Flutter framework to build a cross-platform mobile application with a single codebase for both iOS and Android.",
      "Firebase: Leveraged Firebase suite including Firestore for real-time database, Firebase Authentication for user management, and Firebase Cloud Messaging for push notifications.",
      "Dart: Employed Dart programming language for Flutter development."
    ],
    sources: [
      { label: "Figma Design", url: "https://www.figma.com/design/NKsp4sLYt8MyB6ZWM8gDWY/mobile-application?node-id=0-1&t=Qt2WlzioLEydaEaC-1" },
      { label: "Front-End and Back-End Source Code", url: "https://github.com/Sivakkanth/JobGods" }
    ]
  },
  {
    id: "4",
    title: "Portfolio (Softpro)",
    previewUrl: "https://sivakkanth.vercel.app/",
    description: "I designed and developed a professional portfolio website to showcase my skills, projects, and achievements as a developer. The website serves as a personal branding tool, offering visitors an engaging and interactive way to learn about my work and expertise.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/69-GnADoAf4?si=hKZdk5SUbLknavQU",
    keyFeatures: [
      "Responsive Design: Ensured the website is fully responsive, providing an optimal viewing experience across various devices, including desktops, tablets, and mobile phones.",
      "Interactive User Interface: Developed a visually appealing and user-friendly interface using HTML5, CSS3, and JavaScript. Integrated smooth animations and transitions to enhance user engagement."
    ],
    technologies: [
      "NextJS: Structured the content and layout of the website.",
      "TailwindCSS: Styled the website with modern design techniques, including Flex and Grid Layout.",
      "TypeScript: Added interactivity and dynamic content management, including form validation and interactive elements.",
      "Email Receive Message with Web3Forms"
    ],
    sources: [
      { label: "Source Code", url: "https://github.com/Sivakkanth/Portfolio" }
    ]
  },
  {
    id: "5",
    title: "Student Management System",
    previewUrl: "", // No live preview link provided in HTML
    description: "The Student Management System is a desktop application developed to efficiently manage student details. Utilizing the WPF.NET Desktop Application Framework with C#, this project aims to provide a comprehensive and user-friendly interface for handling student information.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/aOy34Uft1pY?si=IeV2UKin_rEAzbmb",
    keyFeatures: [
      "Student Data Display: The main window displays a list of students, each entry showing essential details including First Name, Last Name, Image Thumbnail, Date of Birth, and GPA value. The user interface allows for easy navigation and management of student records.",
      "CRUD Operations: Add Student, Edit Student, Delete Student.",
      "MVVM Architecture: The application is designed using the Model-View-ViewModel (MVVM) architecture, promoting a clean separation of concerns and enhancing maintainability and testability.",
      "Professional UI Design: Custom styles are applied to all controls to ensure a visually appealing interface. Notably, button controls are styled to deviate from the default rectangular shape, providing a modern look."
    ],
    technologies: [
      "Front-End and Back-End: Developed using WPF.NET and C#, ensuring robust performance and a rich user experience.",
      "Database: Utilized DB Browser for database management, facilitating efficient storage and retrieval of student data."
    ],
    sources: [
      { label: "Source Code", url: "https://github.com/Sivakkanth/Student-_Management_System_4220_3896" }
    ]
  }
];
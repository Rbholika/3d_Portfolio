import { Ey, Tata, SOA } from "../assets/images";
import {
    java,
    python,
    c,
    cpp,
    motion,
    mui,
    git,
    github,
    html,
    css,
    aws,
    azure,
    mysql,
    gcp,
    docker,
    kubernetes,
    javascript,
    mongodb,
    express,
    react,
    nodejs,
    nextjs,
    redux,
    kalilinux,
    linux,
    nmap,
    wireshark,
    tailwindcss,
    typescript,
    linkedin,
    car,
    estate,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl:java,
        name:"Java",
        type:"Programming Language",
    },
    {
        imageUrl:python,
        name:"Python",
        type:"Programming Language",
    },
    {
        imageUrl:c,
        name:"C",
        type:"Programming Language",
    },
    {
        imageUrl:cpp,
        name:"C++",
        type:"Programming Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Databse",
    },

    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud",
    },
    {
        imageUrl: gcp,
        name: "GCP",
        type: "Cloud",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl:linux,
        name:"Linux",
        type:"OS",
    },
    {
        imageUrl:kalilinux,
        name:"Kali Linux",
        type:"OS",
    },
    {
        imageUrl: wireshark,
        name: "Wireshark",
        type: "Security tool",
    },
    {
        imageUrl: nmap,
        name: "NMAP",
        type: "Security tool",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Container",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Container",
    }
];

export const experiences = [
    {
        title: "Cybersecurity trainee",
        company_name: "EY-GDS",
        icon: Ey ,
        iconBg: "#accbe1",
        date: "June 2024 - August 2024",
        points: [
            "Worked on leverag AI for real-time security compliance auditing in cloud services.",
            "AI-driven platform ensures compliance, reduces costs, and enhances security in multi-cloud environments.",
            "Forcasts annual savings of $76.5 billion for 10,000 companies, realizing a remarkable ROI of 15,200% through strategic cost optimization and enhanced security measures.",
            "Gained 150+ hours of expertise in network security, cryptography, cloud security, and identity and access management (IAM, Kerberos, OAuth).",
           ],
    },
    {
        title: "Full Stack Web Developer Intern",
        company_name: "Tata Steel",
        icon: Tata,
        iconBg: "#fbc3bc",
        date: "June 2023 - July 2023",
        points: [
            "Developed a robust user login and registration system, supporting seamless authentication and secure data management for over 1000 users.",
            "Implemented real-time backend services, improving response times by 30% and enhancing user experience.",
            "Designed a secure login application with HTTP-only cookies, reducing security vulnerabilities by 50% against XSS attacks.",
            "Enhanced backend authentication to prevent SQL injection.",
        ],
    },
    {
        title: "B.Tech in CSE",
        company_name: "Siksha 'O' Anusandhan University",
        icon: SOA,
        iconBg: "#b7e4c7",
        date: "November 2021 - July 2025",
        points: [
            "Gained comprehensive knowledge in core subjects including Object-Oriented Design, Data Structures, and Algorithm Analysis.",
            "Acquired expertise in Computer Networks (TCP/IP and OSI Model), Operating Systems, and System Design.",
            "Developed skills in Relational Databases, Cloud Security, Cryptography, Machine Learning, and Artificial Intelligence.",
            "Demonstrated strong problem-solving, analytical abilities, and proficiency in Agile methodologies, quality coding, and effective teamwork.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Rbholika',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/rbholika',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'PDFPal',
        description: 'PDFPal is a web application that enables interactive, intelligent conversations with PDF documents through advanced Genreative-AI',
        link: 'https://github.com/Rbholika/PDFPal.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'EduPredict',
        description: 'A machine learning model designed to provide insights into academic performance',
        link: 'hhttps://github.com/Rbholika/EduPredict.git',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Keylogger',
        description: 'A spyware that bypasses the latest Windows 11 security patch by disabling firewalls and opening all ports.',
        link: 'https://github.com/Rbholika/Keylogger.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'QucikConnect',
        description: 'A video chat platform with controls, signaling, and dynamic room IDs for peer-to-peer calls.',
        link: 'https://github.com/Rbholika/QuickConnect.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'InterceptorDrone',
        description: 'Implemented an A* algorithm for object tracking in mazes, enhancing interception accuracy and efficiently solving large-scale mazes.',
        link: 'https://github.com/Rbholika/InterceptorDrone.git',
    }   
];
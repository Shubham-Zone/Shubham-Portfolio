import citizenSquadImg from '../assets/citizen_squad.jpg';
import cafeteriaImg1 from '../assets/cafeteria_1.jpg';
import cafeteriaImg2 from '../assets/cafeteria_2.jpg';
import cafeteriaImg3 from '../assets/cafeteria_3.jpg';
import healsnapImg1 from '../assets/healsnap_1.jpg';
import healsnapImg2 from '../assets/healsnap_2.jpg';
import api_analytics_1 from '../assets/api_analytics_1.png';
import api_analytics_2 from '../assets/api_analytics_2.png';
import api_analytics_3 from '../assets/api_analytics_3.png';
import api_analytics_4 from '../assets/api_analytics_4.png';
import api_analytics_5 from '../assets/api_analytics_5.png';
import chat_app_1 from "../assets/chat_app_1.png";
import chat_app_2 from "../assets/chat_app_2.png";
import chat_app_3 from "../assets/chat_app_3.png";

export const projects = [
    {
        title: "Citizen Squad",
        description: "Real-time app for reporting abandoned vehicles and civic issues using location mapping.",
        github: "https://github.com/Shubham-Zone/Citizen_Squad",
        images: [citizenSquadImg],
        techStack: ["Flutter", "MongoDB", "Firebase", "Google Maps API"],
        features: ["Real-time tracking", "User authentication", "Admin panel"]
    },
    {
        title: "Campus Cafe",
        description: "A food delivery app crafted for Delhi University students with payment gateway and notifications.",
        github: "https://github.com/Shubham-Zone/campus_cafe_flutter",
        images: [cafeteriaImg1, cafeteriaImg2, cafeteriaImg3],
        techStack: ["Flutter", "Firebase", "Provider", "Razorpay API"],
        features: ["Online ordering", "Notifications", "Payment gateway"]
    },
    {
        title: "Healsnap",
        description: "A health tracking app to monitor fitness activities and progress.",
        github: "https://github.com/Shubham-Zone/Google-Solution-Challenge-project-SnapHealthTracker",
        images: [healsnapImg1, healsnapImg2],
        techStack: ["Flutter", "Firebase", "Firestore", "Gemini API"],
        features: ["Health tracking", "Push notifications", "Progress monitoring"]
    },
    {
        title: "Metrics Dashboard",
        description: "Professional API metrics dashboard for Spring Boot backend with real-time stats, bar charts, pie charts, and filtering.",
        github: "https://github.com/Shubham-Zone/Metrics-Dashboard",
        images: [api_analytics_1, api_analytics_2, api_analytics_3, api_analytics_4, api_analytics_5],
        techStack: ["React", "Recharts", "Node.js", "MongoDB", "Spring Boot"],
        features: ["Real-time data", "Customizable charts", "API monitoring"]
    },
    {
        title: "Chat App",
        description: "A real-time chat application with messaging, notifications, and media sharing features.",
        github: "https://github.com/Shubham-Zone/Chat-App",
        images: [chat_app_1, chat_app_2, chat_app_3],
        techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
        features: ["Real-time messaging", "Push notifications", "Media sharing"]
    }
];

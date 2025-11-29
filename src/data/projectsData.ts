export interface Project {
    name: string;
    oneLiner: string;
    description: string;
    toolsUsed: string[];
    level: number; // 1 to 5 stars
    link: string;
}

export const projectsData: Project[] = [
    {
        name: "Modern Portfolio V2",
        oneLiner: "A personal portfolio website designed to showcase projects.",
        description: "A personal portfolio website designed to showcase projects, skills, and achievements in a visually compelling and interactive manner.",
        toolsUsed: ["TypeScript", "React", "Vite", "CSS"],
        level: 4,
        link: "https://github.com/syntax-error002/portfolioDesign-2"
    },
    {
        name: "KrishiX: Agri-Tech Solution",
        oneLiner: "Hackathon project for agricultural solutions.",
        description: "Hackathon project for agricultural solutions.",
        toolsUsed: ["Dart", "Flutter", "Firebase"],
        level: 3,
        link: "https://github.com/syntax-error002/KrishiX-team-hackathon-git"
    },
    {
        name: "DevBlog Platform",
        oneLiner: "A blog site implementation.",
        description: "A blog site implementation.",
        toolsUsed: ["JavaScript", "HTML", "CSS"],
        level: 3,
        link: "https://github.com/syntax-error002/blogSite-github"
    },
    {
        name: "Interactive Portfolio",
        oneLiner: "A visually compelling and interactive personal portfolio.",
        description: "A personal portfolio website designed to showcase projects, skills, and achievements in a visually compelling and interactive manner.",
        toolsUsed: ["HTML", "CSS", "JavaScript"],
        level: 4,
        link: "https://github.com/syntax-error002/portfolio-that-amazed"
    },
    {
        name: "GitHub Profile Readme",
        oneLiner: "My GitHub profile README.",
        description: "My GitHub profile README.",
        toolsUsed: ["Markdown"],
        level: 1,
        link: "https://github.com/syntax-error002/syntax-error002"
    },
    {
        name: "Android Calculator",
        oneLiner: "Calc android app",
        description: "Calc android app",
        toolsUsed: ["Dart", "Flutter"],
        level: 2,
        link: "https://github.com/syntax-error002/Calculator_andr_app"
    },
    {
        name: "Custom QR Generator",
        oneLiner: "Convert links to QR codes with custom logos.",
        description: "Convert links to QR codes with custom logos.",
        toolsUsed: ["JavaScript", "API"],
        level: 3,
        link: "https://github.com/syntax-error002/link-to-QR-with-custom-logo"
    },
    {
        name: "Dynamic WebView App",
        oneLiner: "A dynamic webview application.",
        description: "A dynamic webview application.",
        toolsUsed: ["Dart", "Flutter"],
        level: 3,
        link: "https://github.com/syntax-error002/a-dynamic-webview-app"
    },
    {
        name: "Java AI Chatbot",
        oneLiner: "AI chatbot with Java Swing and Gemini API.",
        description: "A modern AI chatbot application built with Java Swing, featuring a clean dark-themed interface, DB support and integration with Google's Gemini API.",
        toolsUsed: ["Java", "Swing", "Gemini API"],
        level: 5,
        link: "https://github.com/syntax-error002/java_AI_chatBot-specially_designed_for_Coding_and-emotional_support"
    },
    {
        name: "Krishi Sakhi Prototype",
        oneLiner: "AI-powered agricultural assistance prototype.",
        description: "A Smart India Hackathon (SIH) Prototype project aimed at empowering farmers with AI-powered agricultural assistance.",
        toolsUsed: ["Dart", "Flutter", "AI"],
        level: 5,
        link: "https://github.com/syntax-error002/PROTOTYPE_KRISHI_SAKHI"
    },
    {
        name: "Connect: Video Calling",
        oneLiner: "Voice and video calling application.",
        description: "Voice and video calling application.",
        toolsUsed: ["Dart", "Flutter", "WebRTC"],
        level: 4,
        link: "https://github.com/syntax-error002/Connect-Voice_and_Video_calling_app"
    },
    {
        name: "Freelancer Landing Page",
        oneLiner: "Landing page with amazing aesthetics",
        description: "Landing page with amazing aesthetics",
        toolsUsed: ["TypeScript", "React", "Tailwind"],
        level: 3,
        link: "https://github.com/syntax-error002/Landing_page_for_freelance_guy"
    },
    {
        name: "CodeMaster Platform",
        oneLiner: "Platform to learn coding with ease.",
        description: "Platform to learn coding with ease.",
        toolsUsed: ["HTML", "CSS", "JavaScript"],
        level: 3,
        link: "https://github.com/syntax-error002/codeMaster-learn_cosing_with_ease"
    },
    {
        name: "AI Advisory System",
        oneLiner: "AI-based advisory system.",
        description: "AI-based advisory system.",
        toolsUsed: ["TypeScript", "Node.js", "AI"],
        level: 4,
        link: "https://github.com/syntax-error002/ai-advisory-system"
    },
    {
        name: "Agency Landing Page",
        oneLiner: "Landing page for a web development agency.",
        description: "Landing page for a web development agency.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/landing_page_for_webDev_agency"
    },
    {
        name: "Crop Stage Explorer",
        oneLiner: "Explore different stages of crop growth.",
        description: "Explore different stages of crop growth.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/crop-stage-explorer"
    },
    {
        name: "SQL Editor Pro",
        oneLiner: "A SQL editor application.",
        description: "A SQL editor application.",
        toolsUsed: ["TypeScript", "React", "SQL"],
        level: 4,
        link: "https://github.com/syntax-error002/SQLeditor_"
    },
    {
        name: "CarePlant AI",
        oneLiner: "AI-powered crop disease identification.",
        description: "AgriGuard is a practical farm assistant application designed for crop disease identification. Leveraging the power of AI, users can upload an image of a plant and receive an instant diagnosis.",
        toolsUsed: ["TypeScript", "React", "AI"],
        level: 5,
        link: "https://github.com/syntax-error002/carePLANT"
    },
    {
        name: "Web Projects Collection",
        oneLiner: "100+ mini web projects.",
        description: "100+ mini web projects using HTML, CSS and JavaScript.",
        toolsUsed: ["HTML", "CSS", "JavaScript"],
        level: 4,
        link: "https://github.com/syntax-error002/html-css-javascript-projects"
    },
    {
        name: "Ultimate Landing Page",
        oneLiner: "Final version of a landing page.",
        description: "Final version of a landing page.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/landingPage-final"
    },
    {
        name: "SIH Landing Sample",
        oneLiner: "Sample landing page for SIH.",
        description: "Sample landing page for SIH.",
        toolsUsed: ["HTML", "CSS"],
        level: 2,
        link: "https://github.com/syntax-error002/landingSIHsample"
    },
    {
        name: "Pulse Robot Template",
        oneLiner: "Robot template project.",
        description: "Robot template project.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/pulse-robot-template-95505"
    },
    {
        name: "Kerala Vandi",
        oneLiner: "Project related to Kerala vehicles.",
        description: "Project related to Kerala vehicles.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/keralakada-vandi"
    },
    {
        name: "Random Project",
        oneLiner: "Random project name.",
        description: "Random project name.",
        toolsUsed: ["Experimental"],
        level: 1,
        link: "https://github.com/syntax-error002/name-kuch-bhi-dede"
    },
    {
        name: "Soil Recommender",
        oneLiner: "Soil recommendation system.",
        description: "Soil recommendation system.",
        toolsUsed: ["Python", "ML", "Pandas"],
        level: 3,
        link: "https://github.com/syntax-error002/soilRecommand"
    },
    {
        name: "Krishi Sakhi App",
        oneLiner: "Agricultural assistance app.",
        description: "Agricultural assistance app.",
        toolsUsed: ["Dart", "Flutter"],
        level: 3,
        link: "https://github.com/syntax-error002/krishi_sakhi"
    },
    {
        name: "PlantCheck",
        oneLiner: "Plant health check application.",
        description: "Plant health check application.",
        toolsUsed: ["JavaScript", "Node.js"],
        level: 3,
        link: "https://github.com/syntax-error002/plantcheck"
    },
    {
        name: "SIH Android Prototype",
        oneLiner: "Android prototype for SIH.",
        description: "Android prototype for SIH.",
        toolsUsed: ["Dart", "Flutter"],
        level: 3,
        link: "https://github.com/syntax-error002/android_prototype_SIH"
    },
    {
        name: "SIH Collab Prototype",
        oneLiner: "SIH collaboration project prototype.",
        description: "welcome, please push, commit, and change with my permission and please dont do any commit before my permit, dont share this link to anyone else.",
        toolsUsed: ["Collaboration"],
        level: 3,
        link: "https://github.com/syntax-error002/S.I.H_collab-project_prototype"
    },
    {
        name: "Arise App",
        oneLiner: "Arise application.",
        description: "Arise application.",
        toolsUsed: ["Dart", "Flutter"],
        level: 3,
        link: "https://github.com/syntax-error002/Arise-rise-and-go"
    },
    {
        name: "GyaniBaba Chatbot",
        oneLiner: "Testing of chatbot (laara).",
        description: "Testing of chatbot ( laara )",
        toolsUsed: ["Dart", "Flutter", "AI"],
        level: 3,
        link: "https://github.com/syntax-error002/gyaniBaba"
    },
    {
        name: "LLM CLI Tool",
        oneLiner: "Access large language models from the command-line",
        description: "Access large language models from the command-line",
        toolsUsed: ["Python", "CLI", "AI"],
        level: 4,
        link: "https://github.com/syntax-error002/llm"
    },
    {
        name: "Creative Space",
        oneLiner: "Personal creative space.",
        description: "Personal creative space.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/shaswat-creates-space"
    },
    {
        name: "Personal Site V1",
        oneLiner: "Personal website project.",
        description: "Personal website project.",
        toolsUsed: ["TypeScript", "React"],
        level: 3,
        link: "https://github.com/syntax-error002/yoursite"
    },
    {
        name: "Dart Experiments",
        oneLiner: "Main Dart project.",
        description: "Main Dart project.",
        toolsUsed: ["Dart"],
        level: 2,
        link: "https://github.com/syntax-error002/mainDart"
    },
    {
        name: "Repo Template",
        oneLiner: "New repository template.",
        description: "New repository template.",
        toolsUsed: ["JavaScript"],
        level: 2,
        link: "https://github.com/syntax-error002/your-new-repo1"
    },
    {
        name: "Final Test",
        oneLiner: "Final test repository.",
        description: "Final test repository.",
        toolsUsed: ["Test"],
        level: 1,
        link: "https://github.com/syntax-error002/testfinal"
    },
    {
        name: "Test 122",
        oneLiner: "Test repository 122.",
        description: "Test repository 122.",
        toolsUsed: ["Test"],
        level: 1,
        link: "https://github.com/syntax-error002/test122"
    },
    {
        name: "Reva Fest Animations",
        oneLiner: "Animations for Reva Fest.",
        description: "Animations for Reva Fest.",
        toolsUsed: ["TypeScript", "React", "Framer Motion"],
        level: 3,
        link: "https://github.com/syntax-error002/reva-fest-animations"
    },
    {
        name: "Native App Demo",
        oneLiner: "Created with StackBlitz ⚡️",
        description: "Created with StackBlitz ⚡️",
        toolsUsed: ["JavaScript", "React Native"],
        level: 3,
        link: "https://github.com/syntax-error002/native-app"
    },
    {
        name: "City View",
        oneLiner: "City view application.",
        description: "City view application.",
        toolsUsed: ["JavaScript", "HTML"],
        level: 3,
        link: "https://github.com/syntax-error002/city-view"
    },
    {
        name: "City Dashboard",
        oneLiner: "City dashboard application.",
        description: "City dashboard application.",
        toolsUsed: ["JavaScript", "Chart.js"],
        level: 3,
        link: "https://github.com/syntax-error002/city-dashboard"
    },
    {
        name: "Tic-Tac-Toe",
        oneLiner: "Frontend Tic-tac-toe game.",
        description: "A frontend project, based on HTML CSS and mainly JAVASCRIPT ( JS ). If have suggestions like improvement aur additional features that make it Unique so please let me know.",
        toolsUsed: ["JavaScript", "HTML", "CSS"],
        level: 3,
        link: "https://github.com/syntax-error002/Tic-tac-toe-game"
    },
    {
        name: "Web Music Player",
        oneLiner: "Music player application.",
        description: "Music player application.",
        toolsUsed: ["CSS", "HTML", "JS"],
        level: 3,
        link: "https://github.com/syntax-error002/music-player"
    },
    {
        name: "Classic Portfolio",
        oneLiner: "Another portfolio project.",
        description: "Another portfolio project.",
        toolsUsed: ["HTML", "CSS"],
        level: 3,
        link: "https://github.com/syntax-error002/portfolio"
    },
    {
        name: "Stylish Calculator",
        oneLiner: "Calculator with mind turning design",
        description: "Calculator with mind turning design",
        toolsUsed: ["CSS", "HTML", "JS"],
        level: 3,
        link: "https://github.com/syntax-error002/calculator"
    },
    {
        name: "Masterpiece Gallery",
        oneLiner: "A master piece as a Image gallery",
        description: "A master piece as a Image gallery",
        toolsUsed: ["JavaScript", "CSS", "Grid"],
        level: 3,
        link: "https://github.com/syntax-error002/Image-gallery"
    },
    {
        name: "CSS Testing",
        oneLiner: "Testing repository.",
        description: "Testing repository.",
        toolsUsed: ["CSS"],
        level: 1,
        link: "https://github.com/syntax-error002/testing"
    }
];

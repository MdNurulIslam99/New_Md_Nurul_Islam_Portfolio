export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  live: string;
  github: string;
  github_server?: string;
  images: string[];
  challenges: string;
  improvements: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PrimeLodgeBookify",
    description:
      "A seamless hotel room booking platform where users can view details, book rooms, leave reviews, and manage their reservations. Experience smarter, more seamless hotel booking with our modern platform—designed for today’s travelers.",
    features: [
      "Real-time booking",
      "Review after booking",
      "Single date selection modal",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "DaisyUI",
    ],
    live: "https://modern-hotel-bookings.web.app/",
    github: "https://github.com/MdNurulIslam99/prime-lodge-bookify-client-side",
    github_server:
      "https://github.com/MdNurulIslam99/prime-lodge-bookify-server-side",
    images: [
      "https://i.ibb.co/HT3pLXx9/Screenshot-2025-06-29-111237.png",
      "https://i.ibb.co/Jw5pqqjJ/Screenshot-2025-06-29-111352.png",
      "https://i.ibb.co/Tx2ZnVbG/Screenshot-2025-06-29-111334.png",
    ],
    challenges:
      "Implementing secure booking logic with availability checks, date conflicts, and Firebase-based route protection was challenging.",
    improvements:
      "Plan to integrate payment gateway, enhance review filtering, and add SMS booking confirmations.",
  },
  {
    id: 2,
    title: "Roommate.Finder",
    description:
      "A user-friendly web app for posting and browsing roommate listings based on preferences like location, rent, lifestyle, and availability. A Roommate Finder Website that connects users with compatible roommates based on shared preferences.",
    features: ["Filtered search", "Bookmark posts", "Update/Delete listings"],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SweetAlert2",
      "DaisyUI",
    ],
    live: "https://room-mate-finder-auth.web.app/",
    github: "https://github.com/MdNurulIslam99/Roommate-Finder-client-side",
    github_server:
      "https://github.com/MdNurulIslam99/Roommate-Finder-server-side",
    images: [
      "https://i.ibb.co/gZXYSnx3/Screenshot-2025-06-29-110504.png",
      "https://i.ibb.co/rGyXsHPz/Screenshot-2025-06-29-110548.png",
      "https://i.ibb.co/RG19FHPZ/Screenshot-2025-06-29-110654.png",
    ],
    challenges:
      "Ensuring only owners could edit/delete listings securely and managing real-time updates was complex.",
    improvements:
      "Future plans include chat integration, roommate compatibility quiz, and AI-based recommendation engine.",
  },
  {
    id: 3,
    title: "Smart Subscription",
    description:
      "A subscription box service platform designed to help businesses manage recurring deliveries, billing, inventory, and user analytics. A subscription box platform for automated billing and curated products.",
    features: ["Auto billing", "Inventory tracking", "Mobile optimized"],
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Swiper",
      "React Router",
      "React Toastify",
      "Node.js",
      "Express.js",
      "MongoDB",
      "DaisyUI",
    ],
    live: "https://smart-subscription-2636d.web.app/",
    github: "https://github.com/MdNurulIslam99/Smart_Subscription",
    github_server: "",
    images: [
      "https://i.ibb.co/sJKtt0qg/Screenshot-2025-06-29-105608.png",
      "https://i.ibb.co/c4D35y6/Screenshot-2025-06-29-105428.png",
      "https://i.ibb.co/Tx6TfWrF/Screenshot-2025-06-29-105458.png",
    ],
    challenges:
      "Creating a modular system that supports multiple subscription plans and dynamic inventory sync was challenging.",
    improvements:
      "Planning admin analytics dashboards, invoice system, and third-party shipping API integration.",
  },
];

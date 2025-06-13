import {
  CirclePlus,
  Home,
  LayoutDashboard,
  Leaf,
  PlusCircle,
  Wrench,
  CalendarCheck2,
  ClipboardList,
  CalendarDays,
} from "lucide-react";

export const navLinks = (user) => [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/services",
    icon: Leaf,
  },
  ...(user ? [
    {
      label: "My Bookings",
      icon: CalendarDays,
      href: "/my-bookings"
    }
  ] : [])
];

export const dashboardNavLinks = [
  {
    label: "Add Service",
    icon: PlusCircle,
    href: "/dashboard/add-service",
  },
  {
    label: "Manage Services",
    icon: Wrench,
    href: "/dashboard/services",
  },
  {
    label: "Booked Services",
    icon: CalendarCheck2,
    href: "/dashboard/services/booked",
  },
  {
    label: "Service to Do",
    icon: ClipboardList,
    href: "/dashboard/services/todo",
  },
];

export const placeholderUserImage = "/images/placeholder-user.webp";

export const mockUser = {
  id: "12345",
  name: "Ratul Hossain",
  email: "ratulislam544388@gmail.com",
  imageUrl: "",
  username: "ratul544",
  role: "admin",
};

export const wateringFrequency = [
  "Every Day",
  "Every 2 Days",
  "Every 3 Days",
  "Every 4 Days",
  "Every 5 Days",
  "Every Week",
  "Every 10 Days",
  "Every 2 Weeks",
  "Every 3 Weeks",
  "Every Month",
];

export const sliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnRzfGVufDB8fDB8fHww",
    title: "Smart Plant Care Scheduling",
    description:
      "Automatically track watering, fertilizing, and care schedules with personalized reminders based on your plant’s unique needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRzfGVufDB8fDB8fHww",
    title: "Your Green Companion Dashboard",
    description:
      "Access a sleek, user-friendly dashboard to manage all your indoor and outdoor plants with full detail and health status insights.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1446292532430-3e76f6ab6444?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Secure & Personalized Experience",
    description:
      "Register securely, manage your personal plant list, and enjoy a private, responsive platform optimized for mobile and desktop.",
  },
];

export const VITE_API_URL = "http://localhost:5000";

export const SERVICES = [
  "Home Services",
  "Cleaning & Maintenance",
  "Health & Wellness",
  "Beauty & Personal Care",
  "Tutoring & Education",
  "Technology & IT Support",
  "Event & Party Services",
  "Automotive Services",
  "Pet Care",
  "Fitness & Training",
  "Legal & Financial Services",
  "Business Support",
  "Photography & Videography",
  "Freelance & Creative Services",
  "Repair & Handyman",
  "Travel & Hospitality",
];


export const reviews = [
  "ServiceNow is an amazing platform! I created my own service and within a day, I got my first client. The process is smooth and user-friendly.",
  "I love how easy it is to switch between being a provider and a user. ServiceNow really brings the community together through services!",
  "Found a freelance editor through ServiceNow in minutes. Loved the communication and quality. I'll definitely be back to find more help.",
  "ServiceNow helped me launch my digital marketing service with no hassle. The platform is clean, modern, and works exactly how you'd want it to.",
  "I joined ServiceNow to offer home repair services. In just a week, I received multiple requests. It's a great platform for growing a side hustle!",
  "Booking services on ServiceNow is a breeze. I recently hired a graphic designer and the result exceeded expectations. Five stars from me!",
  "The flexibility of ServiceNow is unmatched. One day I'm a client, the next day I'm offering my own service. I love how open it is!",
  "Thanks to ServiceNow, I found a great writing coach and also listed my own social media service. This platform is a win-win for everyone!",
  "I was surprised how professional and smooth everything felt. Signed up, listed my service, and within hours, someone booked me. Incredible experience!",
  "Used ServiceNow for the first time to hire a fitness coach. It was seamless, affordable, and I felt safe using the platform.",
  "ServiceNow gives power back to individuals. I'm offering my cooking classes now, and it's so satisfying to find clients in my own community.",
  "I use ServiceNow to offer my resume-writing service. The built-in tools and visibility helped me land consistent bookings. Really impressed with the experience.",
  "Hired a music tutor for my son through ServiceNow. The platform made everything transparent and simple. Definitely sticking with it for future needs.",
  "What sets ServiceNow apart is the ease of use. You can post your own service or hire someone in just a few clicks. Genius!",
  "I've tried other platforms, but ServiceNow is by far the most intuitive and community-driven. I felt like my service really mattered here.",
  "As a student, I use ServiceNow to tutor part-time. It's helped me earn money while helping others. Super thankful for this platform!",
  "Created a service offering dog walking on ServiceNow and had my first booking the next day. It's awesome how fast things move here!",
  "ServiceNow gave me the chance to explore side income. I added a service in web design and now have returning clients. Love it!",
  "This site is a goldmine. Booked a local cleaner in minutes, then later added my own digital services. Double value from one platform.",
  "ServiceNow truly supports freelancers and customers alike. Whether you're selling skills or looking for help, this is the place to be.",
  "I never thought listing my skills would be so easy. ServiceNow helped me find real clients without paying for ads. Great system!",
  "Everything about ServiceNow is well thought out — from the profile setup to messaging. I booked someone for car repair and it went perfectly.",
  "ServiceNow feels like a service marketplace built for real people. No complicated process, just fast, efficient, and trustworthy interactions. Highly recommended!",
  "I added my photography services on ServiceNow and within two days I had a shoot scheduled. It's been the best experience I've had online."
];
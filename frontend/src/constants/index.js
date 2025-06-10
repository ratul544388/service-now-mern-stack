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

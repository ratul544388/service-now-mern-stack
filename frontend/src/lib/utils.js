import { clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getFormattedName = ({ fullName, firstName, lastName }) => {
  if (fullName) {
    const [first, last] = fullName.trim().split(" ");
    return {
      fullName: last ? `${first} ${last}` : first,
      firstName: first,
      lastName: last || null,
    };
  }

  if (firstName) {
    return {
      fullName: lastName ? `${firstName} ${lastName}` : firstName,
      firstName,
      lastName: lastName || null,
    };
  }

  return {
    fullName: "",
    firstName: "",
    lastName: null,
  };
};

export const redirect = (currentUser, url, param) => {
  return currentUser ? url : `${url}?redirect=${param}`;
};

export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (date) => {
  return format(new Date(date), "d MMMM yyyy");
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const formatText = (text) => {
  return text
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

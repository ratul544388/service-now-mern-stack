import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is ServiceNow and how does it work?",
    answer:
      "ServiceNow is a platform where users can book various services offered by others. You can browse, read detailed descriptions, and book services that fit your needs.",
  },
  {
    question: "How do I book a service?",
    answer:
      'Simply browse the available services, click on the one you\'re interested in, and use the "Book Now" button to complete your booking.',
  },
  {
    question: "Can I cancel a service booking?",
    answer:
      'Yes, you can cancel your booking from your dashboard before the service is rendered. Go to "My Bookings" and click "Cancel" next to the service.',
  },
  {
    question: "How can I become a service provider?",
    answer:
      'Click on the “Become a Provider” option in your account menu. You’ll be able to list your service details, set pricing, and start receiving bookings.',
  },
  {
    question: "Is there a fee to list a service?",
    answer:
      "Currently, listing a service on ServiceNow is completely free. However, we may introduce optional premium features in the future.",
  },
  {
    question: "Can I edit or remove my listed service?",
    answer:
      "Yes, as a provider, you can update or remove your service anytime from your dashboard under 'My Services'.",
  },
  {
    question: "How do I get notified of new bookings?",
    answer:
      "You'll receive notifications via email and in your account dashboard whenever a user books your service.",
  },
];

const Faq = () => {
  return (
    <section className="bg-background p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;

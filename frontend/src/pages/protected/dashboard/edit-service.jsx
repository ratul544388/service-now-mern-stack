import React from "react";
import ServiceForm from "./_components/service-form";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { request } from "@/lib/request";
import NotFound from "@/pages/public/not-found";

const EditService = () => {
  const { slug } = useParams();
  const { data: service, isPending } = useQuery({
    queryKey: ["service", slug],
    queryFn: () => request({ url: `services/${slug}` }),
  });

  if (isPending) {
    return "Loading...";
  }

  if (!service) {
    return <NotFound />;
  }

  return <ServiceForm service={service} />;
};

export default EditService;

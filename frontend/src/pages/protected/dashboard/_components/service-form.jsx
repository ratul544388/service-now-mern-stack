import FormInput from "@/components/form-input";
import FormRichTextEditor from "@/components/form-rich-text-editor";
import FormSelect from "@/components/form-select";
import FormTextArea from "@/components/form-text-area";
import FormWrapper from "@/components/form-wrapper";
import ImageUpload from "@/components/image-upload";
import LoadingButton from "@/components/loading-button";
import { SERVICES } from "@/constants";
import { handleFormError } from "@/lib/handle-form.error";
import { request } from "@/lib/request";
import { generateSlug } from "@/lib/utils";
import { serviceSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const ServiceForm = ({ service }) => {
  const isFirstRender = useRef(true);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: service?.title || "",
      price: service?.price || "",
      slug: service?.slug || "",
      category: service?.category || "",
      description: service?.description || "",
      imageUrl: service?.imageUrl || "",
      address: service?.address || "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values) =>
      service
        ? request({
            method: "put",
            url: `services/${service.slug}`,
            data: values,
            params: { id: service.id },
          })
        : request({
            method: "post",
            url: `services`,
            data: values,
          }),
    onSuccess: (service) => {
      const url = service ? `/services/${service.slug}` : "/dashboard/services";
      const message = service ? "Service Added" : "Service Updated";
      navigate(url);
      toast.success(message);
    },
    onError: (error) => handleFormError(form, error),
  });

  const title = form.getValues("title");

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    form.setValue("slug", generateSlug(title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  form.watch("title");
  form.watch("imageUrl");

  console.log(form.getValues("imageUrl"));

  return (
    <FormWrapper
      title="Create Service"
      description="Fill in service info"
      form={form}
      onSubmit={mutateAsync}
    >
      <ImageUpload
        control={form.control}
        name="imageUrl"
        disabled={isPending}
        onUploadStatusChange={setIsUploadingImage}
      />
      <FormInput
        name="title"
        control={form.control}
        disabled={isPending}
        placeholder="Enter service title"
      />
      <FormInput
        control={form.control}
        name="slug"
        placeholder="Generated slug"
        disabled={isPending}
      />
      <FormSelect
        name="category"
        control={form.control}
        disabled={isPending}
        options={SERVICES}
        placeholder="Select service category"
      />
      <FormInput
        name="price"
        type="number"
        control={form.control}
        disabled={isPending}
        placeholder="Service price in USD"
      />
      <FormInput
        name="address"
        control={form.control}
        disabled={isPending}
        placeholder="Service center address"
      />
      <FormTextArea
        control={form.control}
        disabled={isPending}
        name="description"
        placeholder="Enter Service Description"
      />
      <LoadingButton isLoading={isPending} disabled={isPending || isUploadingImage}>
        {service ? "Save" : "Create"}
      </LoadingButton>
    </FormWrapper>
  );
};

export default ServiceForm;

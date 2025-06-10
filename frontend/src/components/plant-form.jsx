import { wateringFrequency } from "@/constants";
import { CareLevels, HealthStatuses, PlantCategories } from "@/constants/enums";
import useAuthStore from "@/hooks/use-auth-store";
import { request } from "@/lib/request";
import { generateSlug } from "@/lib/utils";
import { plantSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import FormDatePicker from "./form-date-picker";
import FormInput from "./form-input";
import FormRichTextEditor from "./form-rich-text-editor";
import FormSelect from "./form-select";
import FormWrapper from "./form-wrapper";
import LoadingButton from "./loading-button";

const PlantForm = ({ plant }) => {
  const isFirstRender = useRef(true);
  const queryClient = useQueryClient();
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();

  const isEditMode = Boolean(plant && plant._id);

  const form = useForm({
    resolver: zodResolver(plantSchema),
    defaultValues: {
      image: plant?.image || "",
      name: plant?.name || "",
      slug: plant?.slug || "",
      category: plant?.category || undefined,
      wateringFrequency: plant?.wateringFrequency || undefined,
      description: plant?.description || "",
      careLevel: plant?.careLevel || undefined,
      lastWateredDate: plant?.lastWateredDate
        ? new Date(plant.lastWateredDate)
        : undefined,
      nextWateringDate: plant?.nextWateringDate
        ? new Date(plant.nextWateringDate)
        : undefined,
      healthStatus: plant?.healthStatus || undefined,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values) => {
      const { email, displayName } = currentUser;
      const data = { ...values, userEmail: email, userName: displayName };
      if (isEditMode) {
        return request({
          method: "put",
          url: `/api/plants/${plant.slug}?plantId=${plant._id}`,
          data,
        });
      } else {
        return request({
          method: "post",
          url: "/api/plants",
          data,
        });
      }
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries(["plants"]);
      navigate("/plants/my-plants");
    },
    onError: (error) => {
      const { message, field } = error.response.data;
      if (field) {
        form.setError("slug", { message });
        form.setFocus("slug");
        const slugInput = document.querySelector('input[name="slug"]');
        slugInput.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          slugInput.focus();
        }, 2000);
      }
    },
  });

  const name = form.watch("name");

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    form.setValue("slug", generateSlug(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <FormWrapper
      form={form}
      onSubmit={form.handleSubmit(mutate)}
      title={isEditMode ? "Update Plant" : "Add a New Plant"}
      description={
        isEditMode ? "Edit the plant details" : "Fill in the plant details"
      }
      className="mx-auto mt-14 max-w-[500px]"
    >
      <FormInput
        disabled={isPending}
        control={form.control}
        name="image"
        placeholder="Image URL"
      />
      <FormInput
        control={form.control}
        name="name"
        placeholder="Enter plant name"
        disabled={isPending}
      />
      <FormInput
        control={form.control}
        name="slug"
        placeholder="Generated slug"
        disabled={isPending}
      />
      <FormSelect
        control={form.control}
        name="category"
        placeholder="Select category"
        options={PlantCategories}
        disabled={isPending}
      />
      <FormSelect
        control={form.control}
        name="careLevel"
        label="Care Level"
        placeholder="Select care level"
        options={CareLevels}
        disabled={isPending}
      />
      <FormSelect
        control={form.control}
        name="wateringFrequency"
        label="Watering Frequency"
        placeholder="Enter Watering Frequency"
        options={wateringFrequency}
        disabled={isPending}
      />
      <FormDatePicker
        control={form.control}
        name="lastWateredDate"
        label="Last Watered Date"
        placeholder="Last watered date"
        disabled={isPending}
      />
      <FormDatePicker
        control={form.control}
        name="nextWateringDate"
        label="Next Watered Date"
        placeholder="Next watering date"
        disabled={isPending}
      />
      <FormSelect
        control={form.control}
        name="healthStatus"
        label="Health Status"
        placeholder="Select health status"
        options={HealthStatuses}
        disabled={isPending}
      />
      <FormRichTextEditor
        control={form.control}
        name="description"
        placeholder="Write a description"
        disabled={isPending}
      />
      <LoadingButton isLoading={isPending}>
        {isEditMode ? "Update Plant" : "Create Plant"}
      </LoadingButton>
    </FormWrapper>
  );
};

export default PlantForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import useAuthStore from "@/hooks/use-auth-store";
import { updateProfileSchema } from "@/validations";

import FormError from "@/components/form-error";
import FormInput from "@/components/form-input";
import FormWrapper from "@/components/form-wrapper";
import LoadingButton from "@/components/loading-button";
import { request } from "@/lib/request";
import ImageUpload from "@/components/image-upload";

const UpdateProfileForm = () => {
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name,
      imageUrl: user?.imageUrl || "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) =>
      await request({ method: "put", url: "users/me", data }),
    onSuccess: (data) => {
      setUser(data);
      toast.success("Profile updated");
      navigate("/profile");
    },
    onError: (error) => {
      setError(error?.message || "Failed to update profile");
    },
  });

  return (
    <FormWrapper
      form={form}
      onSubmit={mutateAsync}
      title="Update Profile"
      description="Change your profile information below"
    >
      <FormInput
        control={form.control}
        name="name"
        placeholder="Enter your name"
        disabled={isPending}
      />
      <ImageUpload
        control={form.control}
        name="imageUrl"
        label="Image (Optional)"
        disabled={isPending}
        onUploadStatusChange={setIsUploadingImage}
      />
      <LoadingButton
        isLoading={isPending}
        disabled={isUploadingImage || isPending}
      >
        Save Changes
      </LoadingButton>
      <FormError error={error} />
    </FormWrapper>
  );
};

export default UpdateProfileForm;

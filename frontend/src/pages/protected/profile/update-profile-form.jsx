import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { updateProfile } from "firebase/auth";

import useAuthStore from "@/hooks/use-auth-store";
import { getFormattedName } from "@/lib/utils";
import { updateProfileSchema } from "@/validations";

import FormWrapper from "@/components/form-wrapper";
import FormInput from "@/components/form-input";
import FormError from "@/components/form-error";
import LoadingButton from "@/components/loading-button";

const UpdateProfileForm = () => {
  const { currentUser: user } = useAuthStore();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { firstName, lastName } = getFormattedName({
    fullName: user.displayName,
  });

  const form = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName,
      lastName,
      imageUrl: user.photoURL || "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values) => {
      const { firstName, lastName, imageUrl } = values;
      const { fullName } = getFormattedName({ firstName, lastName });

      await updateProfile(user, {
        displayName: fullName,
        photoURL: imageUrl,
      });
    },
    onSuccess: () => {
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
        name="firstName"
        placeholder="First name"
        disabled={isPending}
      />
      <FormInput
        control={form.control}
        name="lastName"
        placeholder="Last name"
        disabled={isPending}
      />
      <FormInput
        control={form.control}
        name="imageUrl"
        placeholder="Image URL"
        disabled={isPending}
      />
      <LoadingButton isLoading={isPending}>Save Changes</LoadingButton>
      <FormError error={error} />
    </FormWrapper>
  );
};

export default UpdateProfileForm;

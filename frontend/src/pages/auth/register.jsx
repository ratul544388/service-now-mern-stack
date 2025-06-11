import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { registerSchema } from "@/validations";

import FormInput from "@/components/form-input";
import FormPasswordInput from "@/components/form-password-input";
import FormWrapper from "@/components/form-wrapper";
import LoadingButton from "@/components/loading-button";
import { handleFormError } from "@/lib/handle-form.error";
import { request } from "@/lib/request";
import { useState } from "react";
import ImageUpload from "@/components/image-upload";
import GoogleLogin from "./_components/google-login";
import useAuthStore from "@/hooks/use-auth-store";

const Register = () => {
  const {setUser} = useAuthStore()
  const navigate = useNavigate();
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      imageUrl: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values) =>
      request({ method: "post", url: "auth/register", data: values }),
    onSuccess: (user) => {
      setUser(user)
      toast.success("Register Successful");
      navigate("/");
    },
    onError: (error) => handleFormError(form, error),
  });

  form.watch("imageUrl")

  return (
    <FormWrapper
      form={form}
      onSubmit={mutateAsync}
      title="Create an Account"
      description="Fill in your details to get started"
    >
      <GoogleLogin/>
      <FormInput
        control={form.control}
        name="name"
        autoFocus
        placeholder="Enter your first name"
        disabled={isPending}
      />
      <FormInput
        control={form.control}
        name="email"
        placeholder="Enter your email"
        disabled={isPending}
      />
      <FormPasswordInput
        control={form.control}
        name="password"
        placeholder="Enter your password"
        disabled={isPending}
      />
      <FormPasswordInput
        control={form.control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        disabled={isPending}
      />
      <ImageUpload
        control={form.control}
        name="imageUrl"
        label="Image (Optional)"
        disabled={isPending}
        onUploadStatusChange={setIsUploadingImage}
      />
      <LoadingButton isLoading={isPending} disabled={isUploadingImage}>
        Register
      </LoadingButton>
      <div
        className={cn(
          "text-center",
          isPending && "pointer-events-none opacity-60",
        )}
      >
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary underline">
          Login
        </Link>
      </div>
    </FormWrapper>
  );
};

export default Register;

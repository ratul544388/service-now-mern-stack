import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { loginSchema } from "@/validations";

import FormInput from "@/components/form-input";
import FormPasswordInput from "@/components/form-password-input";
import FormWrapper from "@/components/form-wrapper";
import LoadingButton from "@/components/loading-button";
import { request } from "@/lib/request";
import { handleFormError } from "@/lib/handle-form.error";
import useAuthStore from "@/hooks/use-auth-store";
import GoogleLogin from "./_components/google-login";

const Login = () => {
  const queryClient = useQueryClient();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data) => request({ method: "post", url: "auth/login", data }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setUser(data.user);
      toast.success("Login Successful");
      navigate("/");
    },
    onError: (error) => handleFormError(form, error),
  });

  return (
    <FormWrapper
      form={form}
      onSubmit={mutateAsync}
      title="Login to Your Account"
      description="Enter your email and password to login"
    >
      <GoogleLogin />
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
      <LoadingButton isLoading={isPending}>Login</LoadingButton>
      <div
        className={cn(
          "text-center",
          isPending && "pointer-events-none opacity-60",
        )}
      >
        Don&apos;t have an account?{" "}
        <Link to="/auth/register" className="text-primary underline">
          Register
        </Link>
      </div>
    </FormWrapper>
  );
};

export default Login;

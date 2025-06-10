import LoadingButton from "@/components/loading-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const DeleteAccountForm = () => {
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () => toast.success("This feature will be added soon"),
    // onSuccess: (data) => {
    //   navigate("/");
    //   toast.success(data.message);
    // },
    // onError: (error) => {
    //   console.log(error);
    //   toast.error(error.message);
    // },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-destructive">Delete Account</CardTitle>
        <CardDescription className="text-destructive/80">
          This action is irreversible. Please confirm your password to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
          className="flex flex-col gap-4"
        >
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            disabled={isPending}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoadingButton
            disabled={password.trim() === ""}
            variant="destructive"
            isLoading={isPending}
          >
            Delete Account
          </LoadingButton>
        </form>
      </CardContent>
    </Card>
  );
};

export default DeleteAccountForm;

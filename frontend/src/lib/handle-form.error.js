import { toast } from "sonner";

export function handleFormError(form, error) {
  const { field, message } = error || {};

  if (field && message) {
    form.setError(field, {
      message,
    });
    setTimeout(() => {
      form.setFocus(field);
    }, 1000);

    const fieldElement = document.querySelector(`[name=${field}]`);

    if (fieldElement) {
      fieldElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  } else {
    toast.error(message || "Something went wrong");
  }
}

import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { ImagePlus, X } from "lucide-react";

import { Button } from "./ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { cn } from "@/lib/utils";

const ImageUpload = ({
  control,
  name,
  label = "Image",
  disabled = false,
  onUploadStatusChange,
}) => {
  const inputRef = useRef();
  const [previewImage, setPreviewImage] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ file, onChange }) => {
      if (!file) return;

      const tempUrl = URL.createObjectURL(file);
      setPreviewImage(tempUrl);
      onUploadStatusChange?.(true);

      const formData = new FormData();
      formData.append("image", file);

      const { data } = await axios.post("/api/image-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return { imageUrl: data.imageUrl, onChange };
    },

    onSuccess: ({ imageUrl, onChange }) => {
      onUploadStatusChange?.(false);
      onChange(imageUrl);
    },
    onError: () => {
      toast.error("Error while uploading image");
      setPreviewImage("");
      onUploadStatusChange?.(false);
    },
  });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, onChange } = field;

        const handleFileInput = (e) => {
          const file = e.target.files?.[0];
          if (file) mutate({ file, onChange });
        };

        const handleDrop = (e) => {
          e.preventDefault();
          setIsDragOver(false);
          if (disabled || isPending) return;
          const file = e.dataTransfer.files?.[0];
          if (file) mutate({ file, onChange });
        };

        return (
          <FormItem>
            <FormLabel className="capitalize">{label}</FormLabel>
            <FormControl>
              <div
                className={cn(
                  "group relative mt-2 flex h-48 w-40 min-w-40 cursor-pointer items-center justify-center overflow-hidden rounded-lg border transition-colors",
                  fieldState.invalid && "border-destructive",
                  isDragOver && "border-primary bg-accent/30",
                )}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (!disabled) setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current.click()}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  disabled={disabled}
                  onChange={handleFileInput}
                  className="hidden"
                />

                {!value && !isPending && (
                  <>
                    <Button
                      type="button"
                      disabled={isPending || disabled}
                      variant="outline"
                      size="icon"
                      className="bg-secondary/60 group-hover:bg-accent/50 pointer-events-none absolute size-12 rounded-full"
                    >
                      <ImagePlus className="text-primary size-5" />
                    </Button>
                    <p className="text-muted-foreground mx-3 mt-24 text-center text-sm">
                      Or drag & drop the image
                    </p>
                  </>
                )}
                {(previewImage || value) && (
                  <img
                    src={previewImage || value}
                    alt="Uploaded"
                    className={cn(
                      "size-full object-cover",
                      isPending && "animate-pulse",
                    )}
                  />
                )}

                {(previewImage || value) && !isPending && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange("");
                      setPreviewImage("");
                      inputRef.current.value = "";
                    }}
                    type="button"
                    variant="ghost"
                    disabled={disabled}
                    size="icon"
                    className="text-destructive hover:text-destructive absolute top-0.5 right-0.5 size-8 rounded-full"
                  >
                    <X className="size-4" />
                  </Button>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default ImageUpload;

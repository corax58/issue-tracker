"use client";
import { Button, Callout, Spinner, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import z from "zod";
import { useRouter } from "next/navigation";
import { BiErrorCircle } from "react-icons/bi";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>;

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch {
      setIsSubmitting(false);
      setError("unexpected error happened!");
    }
  });

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className="mb-3">
          <Callout.Icon>
            {" "}
            <BiErrorCircle size={20} />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className=" space-y-3" onSubmit={onSubmit}>
        <TextField.Root
          placeholder="Title"
          {...register("title")}
        ></TextField.Root>
        {errors.title && <ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />{" "}
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;

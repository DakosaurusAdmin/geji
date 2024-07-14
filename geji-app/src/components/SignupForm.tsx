import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Control, FieldPath } from "react-hook-form";
import { EnumLike, EnumValues, z } from "zod";
import { Select } from "./ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

enum ROLE_TYPES {
  BUYER = "buyer",
  SHOPPER = "shopper",
}
const formSchema = z.object({
  role: z.nativeEnum(ROLE_TYPES),
  username: z.string().min(3).max(50),
  email: z.string().email(),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "buyer",
      username: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SignupFormField
          name="email"
          label="Email"
          placeholder="Email"
          inputType="email"
          formControl={form.control}
        />
        <SignupFormField
          name="username"
          label="Username"
          placeholder="Username"
          description="At least 3 characters."
          formControl={form.control}
        />
        <SignupFormField
          name="role"
          label="Role"
          placeholder="subscription type"
          description="Choose from the roles below"
          inputType="select"
          options={[ROLE_TYPES.BUYER, ROLE_TYPES.SHOPPER]}
          formControl={form.control}
        />
        <Button type="submit">Signup</Button>
      </form>
    </Form>
  );
};

interface SignupFormFieldProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  options?: string[];
  formControl: Control<z.infer<typeof formSchema>, any>;
}

const SignupFormField: React.FC<SignupFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
  options,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {inputType !== "select" && 
              <Input
                placeholder={placeholder}
                type={inputType || "text"}
                {...field}
              />
            }
            {inputType === "select" && (
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options?.map((op, idx) => (
                      <SelectItem key={idx} value={op}>
                        {op}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SignupForm;

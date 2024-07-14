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
import { Select,  SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue, } from "./ui/select";
enum ACCOUNT_TYPES {
  CUSTOMER = "customer",
  SHOPPER = "shopper",
}
const formSchema = z.object({
  accountType: z.nativeEnum(ACCOUNT_TYPES),
  username: z.string().min(3).max(50),
  email: z.string().email(),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountType: ACCOUNT_TYPES.CUSTOMER,
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
          name="accountType"
          label="Account Type"
          placeholder="Account type"
          description="Choose from the roles below"
          inputType="select"
          options={[ACCOUNT_TYPES.CUSTOMER, ACCOUNT_TYPES.SHOPPER]}
          formControl={form.control}
        />
        <Button type="submit" className="w-full">Signup</Button>
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
        <>
          {inputType === "select" && (
            <FormItem className="relative flex flex-end gap-10 w-full">
            <Select {...field}>
                <FormLabel className="my-auto text-lg">{label}</FormLabel>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder={placeholder}/>
              </SelectTrigger>
              <SelectContent >
                <SelectGroup>
                  <SelectLabel className="text-lg">{label}</SelectLabel>
                  {options?.map((op, idx) => (
                    <SelectItem key={idx} value={op}>
                      {op}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            </FormItem>
          )}

          {inputType !== "select" && (
            <FormItem className="relative flex flex-end gap-10 w-full">
              <FormLabel className="my-auto text-lg">{label}:</FormLabel>
              <FormControl>
                {inputType !== "select" && (
                  <Input className="space-y-0 w-80 flex-grow"
                    placeholder={placeholder}
                    type={inputType || "text"}
                    {...field}
                  />
                )}
              </FormControl>
              {description && <FormDescription className="absolute bottom-0 right-0">{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        </>
      )}
    />
  );
};

export default SignupForm;

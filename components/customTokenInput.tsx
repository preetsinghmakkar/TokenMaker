import React from "react";
import { Control, Controller } from "react-hook-form";
import { FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
interface CustomTokenInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const CustomTokenInput: React.FC<CustomTokenInputProps> = ({
  control,
  name,
  label,
  placeholder,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="mb-4">
          <FormLabel className="block text-sm font-bold text-black">
            {label}
          </FormLabel>
          <div>
            <Controller
              name={name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type={
                    name === "mintAmount" ||
                    name === "capAmount" ||
                    name === "transferAmount"
                      ? "number"
                      : "text"
                  }
                  value={value}
                  onChange={onChange}
                  className="mt-1 p-2 w-full bg-white-700 rounded-full"
                />
              )}
            />
          </div>
          <div className="m-2">
            <FormMessage />
          </div>
        </div>
      )}
    />
  );
};

export default CustomTokenInput;

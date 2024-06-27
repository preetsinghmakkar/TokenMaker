import React from "react";
import { Control, Controller } from "react-hook-form";
import { FormField, FormLabel } from "./ui/form";
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
          <FormLabel className="block text-sm font-medium text-gray-300">
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
                  className="mt-1 p-2 w-full rounded bg-gray-700 text-white border border-gray-600"
                />
              )}
            />
          </div>
        </div>
      )}
    />
  );
};

export default CustomTokenInput;

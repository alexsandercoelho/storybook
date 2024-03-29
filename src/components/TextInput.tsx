import { clsx } from "clsx";
import { Children, InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded ">
      {props.children}
    </div>
  );
}
TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs  placeholder:text-gray-400 focus:ring-2 ring-cyan-300"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Inpur";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};

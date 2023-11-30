import { ComponentProps } from "react";

export type ButtonProps = {
  children: React.ReactNode;
} & ComponentProps<'button'>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} >
      {children}
    </button>
  );
}
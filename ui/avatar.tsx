import { type ReactNode } from "react";
import { cva } from "cva";

const variantClassName = cva(
  "h-8 w-8 p-[2px] ring-1 ring-brown-12 rounded-full bg-brown-10 aspect-square"
);

type AvatarProps = {
  children: ReactNode;
  className: string;
};

export const Avatar = ({ children, className, ...props }: AvatarProps) => {
  return (
    <div className={variantClassName({ className })} {...props}>
      {children}
    </div>
  );
};

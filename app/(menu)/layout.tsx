import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function menuLayout({ children }: Props) {
  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ padding: "20px 20px" }}
    >
      <div
        className="w-full bg-white p-5 box-border"
        style={{ maxWidth: "1200px", minHeight: "80vh" }}
      >
        {children}
      </div>
    </div>
  );
}

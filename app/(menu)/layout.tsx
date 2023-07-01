import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function menuLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="w-full bg-white"
        style={{ maxWidth: "1200px", minHeight: "80vh", margin: "20px 20px" }}
      >
        {children}
      </div>
    </div>
  );
}

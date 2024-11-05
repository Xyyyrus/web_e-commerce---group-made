/* eslint-disable react/prop-types */
import { Toaster } from "@/components/ui/toaster";

export default function ToastProvider({ children }) {
  return (
   
      <div>
        <div>{children}</div>
        <Toaster />
      </div>
  );
}
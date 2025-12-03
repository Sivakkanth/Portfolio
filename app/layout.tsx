import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Softpro",
  description: "My Portfolio Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
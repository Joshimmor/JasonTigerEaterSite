import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>
            {children}
        </Suspense>
      </body>
    </html>
  );
}

const Loading = () =>{
  return (
    <div className="w-screen h-screen bg-orange-500">

    </div>
  )
}
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { cn } from "@/lib/utils";
import ScrollToTop from "./ScrollToTop";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  isAdmin?: boolean;
}

export default function PageLayout({ children, className, isAdmin }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <main className={cn("flex-grow md:pr-[calc(100vw/7)]", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

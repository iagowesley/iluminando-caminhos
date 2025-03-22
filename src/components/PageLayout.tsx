
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import ScrollToTop from "./ScrollToTop";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className={cn("flex-grow", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

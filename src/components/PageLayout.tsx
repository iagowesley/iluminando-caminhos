
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import ScrollToTop from "./ScrollToTop";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  // Force reflow after page load to ensure all animations trigger correctly
  useEffect(() => {
    // This creates a tiny reflow/repaint which helps ensure content visibility
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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

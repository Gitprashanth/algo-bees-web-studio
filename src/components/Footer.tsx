
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Thanks for subscribing! We'll keep you updated.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo + Slogan */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-bee-yellow rounded-lg flex items-center justify-center">
                <span className="text-bee-dark font-bold text-lg">🐝</span>
              </div>
              <span className="text-xl font-semibold text-bee-dark">AlgoBees</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              Building future creators through fun, interactive coding education for kids aged 6-18.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bee-yellow transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.291L6.9 14.898c.613.512 1.207.778 1.549.778.342 0 .936-.266 1.549-.778l1.779.799c-.88.801-2.031 1.291-3.328 1.291z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-bee-yellow transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-bee-dark uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-bee-dark transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-bee-dark transition-colors text-sm">
                About
              </Link>
              <Link to="/courses" className="text-gray-600 hover:text-bee-dark transition-colors text-sm">
                Courses
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-bee-dark transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Email Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-bee-dark uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm">
              Get the latest updates on new courses and coding tips for kids.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit"
                className="bg-bee-yellow hover:bg-bee-yellow/90 text-bee-dark font-medium rounded-xl px-4"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 AlgoBees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll reply within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-bee-dark">
            Get in <span className="text-bee-yellow">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses? Want to schedule a free trial? 
            We'd love to hear from you and help your child start their coding journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-bee-dark mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-bee-dark mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`${errors.name ? "border-red-500" : ""}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-bee-dark mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`${errors.email ? "border-red-500" : ""}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-bee-dark mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                      placeholder="Tell us about your child's age, interests, and any questions you have about our courses..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-1">
                      Minimum 20 characters ({formData.message.length}/20)
                    </p>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-bee-yellow hover:bg-bee-yellow/90 text-bee-dark font-semibold py-6 text-lg rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Booking */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-bee-dark mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bee-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-bee-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bee-dark mb-1">Email</h3>
                    <p className="text-gray-600">hello@algobees.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bee-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-bee-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bee-dark mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-BEES</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bee-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-bee-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bee-dark mb-1">Global Online</h3>
                    <p className="text-gray-600">Teaching kids worldwide from our headquarters in San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bee-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-bee-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bee-dark mb-1">Support Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM PST<br />Saturday: 10AM - 4PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Widget Placeholder */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-bee-yellow/10 to-orange-100/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-bee-dark mb-4">
                  Ready to Start?
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose a time for your free trial session. No commitment required!
                </p>
                
                {/* Placeholder for Calendly embed */}
                <div className="bg-white rounded-xl p-8 border-2 border-dashed border-bee-yellow/30">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-bee-yellow/20 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="w-8 h-8 text-bee-yellow" />
                    </div>
                    <h4 className="font-semibold text-bee-dark">Book Your Free Trial</h4>
                    <p className="text-gray-600 text-sm">
                      Interactive scheduling widget would be embedded here
                    </p>
                    <Button className="bg-bee-yellow hover:bg-bee-yellow/90 text-bee-dark font-semibold px-8 py-3">
                      Schedule Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

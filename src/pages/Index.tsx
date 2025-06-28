
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Award, Code, Gamepad2, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "My 8-year-old daughter loves her Python classes! She's already building simple games and can't wait for each session.",
    author: "Sarah Chen",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "The instructors are amazing! They make coding so fun and easy to understand. I built my first website last week!",
    author: "Marcus Johnson",
    role: "Student, Age 12",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "AlgoBees has been incredible for my son. Small class sizes mean he gets the attention he needs to really excel.",
    author: "Emma Rodriguez",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const programs = [
  {
    title: "Intro to Scratch",
    ageGroup: "Ages 6-9",
    duration: "8 weeks",
    description: "Visual programming basics with drag-and-drop coding",
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Python Fundamentals",
    ageGroup: "Ages 10-13", 
    duration: "10 weeks",
    description: "Learn real programming with Python through games and projects",
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Web Development",
    ageGroup: "Ages 14-18",
    duration: "12 weeks", 
    description: "Build real websites with HTML, CSS, and JavaScript",
    color: "bg-purple-50 border-purple-200"
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-bee-dark leading-tight">
              Coding Made Fun for Kids Aged{" "}
              <span className="text-bee-yellow">6–18</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Live classes in Python, Scratch, HTML & Minecraft. Small groups, real-world projects.
            </p>
            <Button className="bg-bee-yellow hover:bg-bee-yellow/90 text-bee-dark font-semibold px-8 py-6 text-lg rounded-xl">
              Book a Free Trial
            </Button>
          </div>
          <div className="relative animate-slide-up">
            <div className="bg-gradient-to-br from-bee-yellow/20 to-orange-100 rounded-3xl p-8 transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&h=400&fit=crop" 
                alt="Kid coding on laptop"
                className="w-full h-80 object-cover rounded-2xl transform -rotate-3 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why AlgoBees */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-4">
              Why Choose AlgoBees?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make coding education accessible, engaging, and effective for every child.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-bee-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bee-yellow/30 transition-colors">
                  <Users className="w-8 h-8 text-bee-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-bee-dark mb-4">Small Class Sizes</h3>
                <p className="text-gray-600">
                  Maximum 6 students per class ensures personalized attention and better learning outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-bee-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bee-yellow/30 transition-colors">
                  <BookOpen className="w-8 h-8 text-bee-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-bee-dark mb-4">Project-Based Learning</h3>
                <p className="text-gray-600">
                  Kids build real projects they can show off to friends and family, making learning tangible and fun.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-bee-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bee-yellow/30 transition-colors">
                  <Award className="w-8 h-8 text-bee-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-bee-dark mb-4">Certified Instructors</h3>
                <p className="text-gray-600">
                  All our teachers are certified educators with experience in both coding and child development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-4">
              Featured Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate courses designed to build coding skills progressively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${program.color}`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-white/80 font-medium">
                      {program.ageGroup}
                    </Badge>
                    <span className="text-sm text-gray-600 font-medium">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-bee-dark mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-bee-yellow group-hover:text-bee-dark group-hover:border-bee-yellow transition-all font-medium">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-16">
            What Families Say About Us
          </h2>
          
          <div className="relative">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="text-6xl text-bee-yellow mb-4">"</div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="flex items-center justify-center space-x-4 pt-6">
                    <img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-bee-dark">{testimonials[currentTestimonial].author}</p>
                      <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-bee-yellow' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-bee-yellow to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-6">
            Let your child's coding journey begin today.
          </h2>
          <p className="text-xl text-bee-dark/80 mb-8 max-w-2xl mx-auto">
            Join thousands of kids who are already building their digital future with AlgoBees.
          </p>
          <Button className="bg-white hover:bg-gray-50 text-bee-dark font-semibold px-8 py-6 text-lg rounded-xl shadow-lg">
            Explore Courses
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

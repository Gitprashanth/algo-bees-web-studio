
import { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Scratch Animation & Games",
    ageGroup: "6-9",
    category: "scratch",
    duration: "8 weeks",
    level: "Beginner",
    students: 12,
    rating: 4.9,
    price: "$199",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    description: "Learn programming fundamentals through colorful drag-and-drop blocks. Create animations, games, and interactive stories.",
    skills: ["Visual Programming", "Logic Building", "Creative Thinking", "Problem Solving"]
  },
  {
    id: 2,
    title: "Minecraft Coding Adventures",
    ageGroup: "6-9", 
    category: "minecraft",
    duration: "6 weeks",
    level: "Beginner",
    students: 8,
    rating: 4.8,
    price: "$149",
    image: "https://images.unsplash.com/photo-1606146485651-87e3b94b6151?w=400&h=300&fit=crop",
    description: "Code in Minecraft! Learn programming concepts while building amazing structures and automating tasks.",
    skills: ["Block Coding", "3D Thinking", "Automation", "Game Logic"]
  },
  {
    id: 3,
    title: "Python Game Development",
    ageGroup: "10-13",
    category: "python",
    duration: "10 weeks", 
    level: "Intermediate",
    students: 15,
    rating: 4.9,
    price: "$299",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    description: "Build real games with Python! Learn programming fundamentals while creating arcade-style games.",
    skills: ["Python Basics", "Game Logic", "Event Handling", "Object-Oriented Programming"]
  },
  {
    id: 4,
    title: "Python Data Science for Kids", 
    ageGroup: "10-13",
    category: "python",
    duration: "8 weeks",
    level: "Intermediate", 
    students: 10,
    rating: 4.7,
    price: "$249",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Explore data science concepts through fun projects. Create charts, analyze data, and discover patterns.",
    skills: ["Data Analysis", "Visualization", "Statistics", "Research Methods"]
  },
  {
    id: 5,
    title: "Web Development Fundamentals",
    ageGroup: "14-18", 
    category: "web",
    duration: "12 weeks",
    level: "Beginner",
    students: 20,
    rating: 4.8,
    price: "$399",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    description: "Build your first websites! Learn HTML, CSS, and JavaScript to create responsive, interactive web pages.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: 6,
    title: "React & Modern Web Apps",
    ageGroup: "14-18",
    category: "web", 
    duration: "10 weeks",
    level: "Advanced",
    students: 12,
    rating: 4.9,
    price: "$449",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    description: "Build modern web applications with React. Create dynamic, interactive apps that look professional.",
    skills: ["React", "Component Design", "State Management", "API Integration"]
  }
];

const faqs = [
  {
    question: "Do kids need any prior coding experience?", 
    answer: "No! All our courses are designed for beginners. We start with the fundamentals and build up skills progressively. Our instructors are experienced in teaching kids who have never coded before."
  },
  {
    question: "What equipment do kids need?",
    answer: "Just a computer or laptop with internet connection! We provide all software and learning materials. Some courses may require specific software which we help install during the first class."
  },
  {
    question: "How many students are in each class?",
    answer: "We keep our classes small with maximum 6 students per session. This ensures every child gets personalized attention and can ask questions freely."
  },
  {
    question: "What if my child misses a class?",
    answer: "All classes are recorded and available for 6 months. We also offer makeup sessions for students who miss more than 2 classes in their course."
  },
  {
    question: "Are there any age restrictions?",
    answer: "Our courses are designed for ages 6-18, with age-appropriate content for each group. We group students by both age and skill level to ensure the best learning experience."
  }
];

const Courses = () => {
  const [selectedAge, setSelectedAge] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = courses.filter(course => {
    const ageMatch = selectedAge === "all" || course.ageGroup === selectedAge;
    const categoryMatch = selectedCategory === "all" || course.category === selectedCategory;
    return ageMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-bee-dark">
            Explore Our <span className="text-bee-yellow">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From visual programming for beginners to advanced web development, we have the perfect 
            course to match your child's interests and skill level.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-bee-dark mb-3">Age Group</label>
              <div className="flex flex-wrap gap-2">
                {["all", "6-9", "10-13", "14-18"].map((age) => (
                  <Button
                    key={age}
                    variant={selectedAge === age ? "default" : "outline"}
                    className={`${
                      selectedAge === age 
                        ? "bg-bee-yellow text-bee-dark hover:bg-bee-yellow/90" 
                        : "hover:bg-bee-yellow/10"
                    } font-medium`}
                    onClick={() => setSelectedAge(age)}
                  >
                    {age === "all" ? "All Ages" : `Ages ${age}`}
                  </Button>
                ))}
              </div>  
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-bee-dark mb-3">Course Type</label>
              <div className="flex flex-wrap gap-2">
                {["all", "scratch", "python", "web", "minecraft"].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`${
                      selectedCategory === category 
                        ? "bg-bee-yellow text-bee-dark hover:bg-bee-yellow/90"
                        : "hover:bg-bee-yellow/10"
                    } font-medium capitalize`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "All Types" : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-bee-yellow/10 text-bee-dark font-medium">
                      Ages {course.ageGroup}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-bee-dark mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} enrolled</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-bee-dark">{course.price}</div>
                    <Button className="bg-bee-yellow hover:bg-bee-yellow/90 text-bee-dark font-medium px-6">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything parents want to know about our coding courses.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-bee-dark hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Courses;

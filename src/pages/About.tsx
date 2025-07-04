import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Users, Globe } from "lucide-react";

const instructors = [
	{
		name: "Srilekha",
		role: "Senior Instructor | Full-Stack Developer & AI Mentor",
		bio: "Srilekha brings over 5 years of experience as a senior software engineer and more than 6 years of teaching expertise. She has taught 1000+ students across Canada, the U.S., and the U.K., making her one of our most globally experienced mentors. With a strong background in frontend and backend technologies, she teaches Python, AI, HTML, CSS, JavaScript, ReactJS, and block-based coding. Her lessons are consistently top-rated for clarity and depth.",
		avatar: "/lovable-uploads/Srilekha.jpeg",
		specialties: [
			"Python",
			"AI",
			"HTML/CSS",
			"JavaScript",
			"ReactJS",
			"Block Coding",
		],
	},
	{
		name: "Divya Jaini",
		role: "Instructor & Former Google Engineer | Based in Canada",
		bio: "Divya is a former Google software engineer with a passion for teaching. After moving from India to Canada, she transitioned into online coding education, where she’s taught 150+ students worldwide—including learners in the U.S., Australia, and the U.K. Her sessions are shaped by real-world engineering experience and a deep commitment to nurturing young problem-solvers.",
		avatar: "/lovable-uploads/Divya.jpeg",
		specialties: ["Python", "Scratch", "Creative Coding", "Problem Solving"],
	},
	{
		name: "Shabarish Chinta",
		role: "Coding Instructor | Student-Centered Programming Coach",
		bio: "Shabarish is a B.Tech graduate in Computer Science with 4+ years of experience teaching coding online. He has mentored over 800 students from diverse regions including North America, Europe, and Asia. Known for his calm approach and solid technical grounding, he teaches Python, Roblox, JavaScript, and web development fundamentals with patience and enthusiasm. His classes strike the perfect balance between fun and foundational learning.",
		avatar: "/lovable-uploads/Shabarish.jpeg",
		specialties: ["Python", "Roblox", "JavaScript", "Web Development"],
	},
	{
		name: "Swathi",
		role: "Online Coding Instructor | Former Software Engineer | STEM Educator",
		bio: "Swathi is a passionate coding instructor with 3 years of online teaching experience and a background as a software engineer at Cognizant. She has taught over 300 students globally, making programming fun and approachable. Swathi specializes in Scratch, Code.org, Python, HTML, and JavaScript, blending technical skill with creative teaching to help young learners build strong coding foundations.",
		avatar: "/lovable-uploads/Swathi.jpeg",
		specialties: ["Scratch", "Code.org", "Python", "HTML", "JavaScript"],
	},
];

const values = [
	{
		icon: Heart,
		title: "Learning Through Joy",
		description:
			"We believe the best learning happens when kids are having fun. Every lesson is designed to spark curiosity and excitement.",
	},
	{
		icon: Users,
		title: "Small Groups, Big Results",
		description:
			"Our small class sizes ensure every child gets the individual attention they need to thrive and build confidence.",
	},
	{
		icon: Award,
		title: "Real Skills, Real Projects",
		description:
			"Kids don't just learn syntax - they build games, websites, and apps they can actually use and share with friends.",
	},
	{
		icon: Globe,
		title: "Global Community",
		description:
			"Our students connect with peers from around the world, learning collaboration and cultural exchange through code.",
	},
];

const About = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="text-center space-y-8 animate-fade-in">
					<h1 className="text-4xl md:text-6xl font-bold text-bee-dark">
						Building Future{" "}
						<span className="text-bee-yellow">Creators</span>
					</h1>
					<div className="max-w-4xl mx-auto">
						<p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
							At AlgoBees, we're passionate about introducing children to the
							magic of programming. Founded in 2020 by educators and engineers,
							we've taught over 5,000 kids worldwide to think computationally,
							solve problems creatively, and build digital solutions that matter.
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							Our mission is simple: make coding education accessible, engaging,
							and inspiring for every child, regardless of their background or
							starting point. We believe that when kids learn to code, they learn
							to create, innovate, and shape the digital world around them.
						</p>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="bg-gray-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-4">
							Our Values
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Everything we do is guided by these core principles that put kids
							first.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{values.map((value, index) => (
							<Card
								key={index}
								className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
							>
								<CardContent className="p-8">
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-bee-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-bee-yellow/30 transition-colors">
											<value.icon className="w-6 h-6 text-bee-yellow" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-bee-dark mb-3">
												{value.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">
												{value.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Meet the Instructors */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-bee-dark mb-4">
							Meet Our Instructors
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Our team combines technical expertise with a passion for teaching
							kids.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{instructors.map((instructor, index) => (
							<Card
								key={index}
								className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm overflow-hidden"
							>
								<div className="aspect-square overflow-hidden">
									<img
										src={instructor.avatar}
										alt={instructor.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<CardContent className="p-6">
									<div className="space-y-4">
										<div>
											<h3 className="text-xl font-bold text-bee-dark">
												{instructor.name}
											</h3>
											<p className="text-bee-yellow font-medium">
												{instructor.role}
											</p>
										</div>
										<p className="text-gray-600 leading-relaxed">
											{instructor.bio}
										</p>
										<div className="flex flex-wrap gap-2">
											{instructor.specialties.map((specialty, specIndex) => (
												<Badge
													key={specIndex}
													variant="secondary"
													className="bg-bee-yellow/10 text-bee-dark"
												>
													{specialty}
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-gradient-to-r from-bee-yellow to-orange-400 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						<div className="space-y-2">
							<div className="text-4xl md:text-5xl font-bold text-bee-dark">
								5,000+
							</div>
							<div className="text-bee-dark/80 font-medium">
								Students Taught
							</div>
						</div>
						<div className="space-y-2">
							<div className="text-4xl md:text-5xl font-bold text-bee-dark">
								50+
							</div>
							<div className="text-bee-dark/80 font-medium">
								Countries Reached
							</div>
						</div>
						<div className="space-y-2">
							<div className="text-4xl md:text-5xl font-bold text-bee-dark">
								98%
							</div>
							<div className="text-bee-dark/80 font-medium">
								Parent Satisfaction
							</div>
						</div>
						<div className="space-y-2">
							<div className="text-4xl md:text-5xl font-bold text-bee-dark">
								15,000+
							</div>
							<div className="text-bee-dark/80 font-medium">
								Projects Built
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;

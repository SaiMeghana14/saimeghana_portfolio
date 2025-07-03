import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, ArrowUp, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    programming_languages: ['Python', 'C', 'Java', 'SQL'],
    tools: ['HTML', 'CSS', 'JavaScript', 'Git', 'VS Code'],
    platforms: ['GitHub', 'VS Code', 'Tinkercad', 'Arduino IDE', 'Xilinx'],
    softSkills: ['Effective Communication', 'Team Leadership', 'Project Management', 'Problem Solving', 'Time Management']
  };

  const projects = [
    {
      title: 'Renewable Energy Awareness Chatbot',
      description: 'AI-powered chatbot built using Streamlit to promote awareness about renewable energy sources',
      tech: ['Python', 'Dialogflow', 'VS Code', 'Streamlit', 'GitHub'],
      github: 'https://saimeghana14.github.io/Renewable-energy-chatbot/' // Update with your actual repo URL
    },
    {
      title: 'AyushCare – Rural Health Monitoring with IoT',
      description: 'AyushCare is a smart IoT-based health monitoring system designed to support rural communities by enabling real-time tracking of vital signs like heart 
rate, SpO₂, body temperature, and blood pressure.',
      tech: ['Embedded C', 'Python','NodeMCU', 'Arduino IDE', 'Tinkercad'],
      github: 'https://saimeghana14.github.io/AyushCare-IoT-Health/' // Update with your actual repo URL
    },
    {
      title: 'Incredible India – Cultural Explorer',
      description: 'A Streamlit web app that showcases India's rich cultural heritage—festivals, food, monuments, and more—powered by Snowflake as the backend and hosted on Streamlit Cloud.',
      tech: ['Python', 'HTML', 'Pandas','Streamlit', 'Snowflake'],
      github: 'https://saimeghana14.github.io/incredible-india/' // Update with your actual repo URL
    }
  ];

  const achievements = [
    'NPTEL – Python for Data Science',
    'NetAcad - Cisco Networking Essentials',
    'Infosys Springboard - Python Foundation Certification',
    'IEEE - Develop Custom Embedded board for Robotics Applications',
    'Finalist: Code for Bharat Hackathon'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => document.getElementById(nav.id));
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navigation[index].id);
          }
        }
      });

      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-1 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sai Meghana
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 animate-fade-in">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="https://smallpdf.com/file#s=8867814a-67d7-4813-98a1-f52012573b98"
                alt="K.N.V Sai Meghana"
                className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
              />
              <p className="text-sm text-slate-500 mt-2">📸 Upload your photo to replace this placeholder</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-scale-in">
              K.N.V Sai Meghana
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              IoT Enthusiast | Future Tech Innovator | ECE Undergraduate
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              Hi, I'm Sai Meghana — a final-year B.Tech ECE student building smart systems using IoT and AI. 
              Passionate about electronics, coding, and impactful innovation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://smallpdf.com/file#s=3b3bf74b-24c2-421f-bd69-8d93d877464f"
                alt="About Sai Meghana"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
              <p className="text-sm text-slate-500 mt-2">📸 Upload your about photo to replace this placeholder</p>
            </div>
            <div className="space-y-6 animate-fade-in">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">Final-year B.Tech in Electronics and Communication Engineering from Pragati Engineering College</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['IoT', 'Embedded Systems', 'Electronics DIY', 'Blogging'].map((interest) => (
                      <Badge key={interest} variant="outline" className="px-3 py-1 text-sm hover:bg-purple-100 transition-colors duration-300">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-600">Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">Tech podcasts, building smart devices, writing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-sm text-slate-500 mt-4">💡 Update the GitHub URLs in the code with your actual repository links</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none shadow-lg animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download Resume <a href="Sai Meghana.pdf" download>
            </Button>
            <p className="text-sm text-slate-500 mt-2">📄 Add your resume PDF link to the button above</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">B.Tech in Electronics and Communication Engineering</h4>
                  <p className="text-slate-600">Pragati Engineering College</p>
                  <p className="text-sm text-slate-500">Final Year</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {achievements.slice(0, 3).map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-xl capitalize text-center">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill) => (
                      <Badge key={skill} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-slate-700 font-medium">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-sm text-slate-500 mt-4">📸 Upload your project photos to replace these placeholders</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", title: "IoT Project Demo" },
              { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", title: "Coding Session" },
              { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", title: "Web Development" },
              { src: "https://images.unsplash.com/photo-1500673922987-e212871fec22", title: "Tech Conference" },
              { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", title: "Project Presentation" },
              { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", title: "Workshop Session" }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <img
                  src={`${item.src}?w=400&h=300&fit=crop`}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-sm text-slate-500 mt-4">📧 Update the email address and LinkedIn URL below</p>
          </div>
          
          <div className="text-center space-y-8">
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or just having a conversation about technology and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="mailto:knvsaimeghana@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-100 hover:border-blue-500 transition-all duration-300" asChild>
                  <a href="https://github.com/SaiMeghana14" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-100 hover:border-blue-500 transition-all duration-300" asChild>
                  <a href="https://linkedin.com/in/naga-venkata-sai-meghana-kovvada131b51259" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sai Meghana
              </h3>
              <p className="text-slate-400">
                IoT Enthusiast building the future with smart technology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="mailto:knvsaimeghana@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/SaiMeghana14" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/naga-venkata-sai-meghana-kovvada131b51259" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-700" />
          
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Sai Meghana. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science Engineering",
      institution: "VR Siddhartha Engineering College",
      period: "2022–2026",
      grade: "CGPA: 8.54"
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      period: "2020-2022",
      grade: "96.3%"
    },
    {
      degree: "SSC",
      institution: "Ravindra Bharathi School",
      period: "2020",
      grade: "CGPA: 10.0"
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science student passionate about building efficient, secure, 
              and scalable software systems. My experience spans web development, machine learning, 
              backend API engineering, and DevOps practices.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy solving real-world problems with clean code and smart system design. 
              Currently in my final year, I'm actively seeking SDE and SWE opportunities 
              where I can contribute to impactful projects and continue growing as an engineer.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-sm">sakethkodukulla10@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Phone</h4>
                <p className="text-sm">+91-8688483758</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-primary">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

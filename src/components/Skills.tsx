
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Django", "Flask", "RESTful APIs", "Microservices", "API Design"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQL", "Database Design", "Query Optimization"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Git", "Docker", "Oracle Cloud", "Linux"]
    },
    {
      title: "CS Fundamentals",
      skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "System Design", "Design Patterns"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

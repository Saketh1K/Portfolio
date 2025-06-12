
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Cloud, Cpu, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack App Development",
      description: "End-to-end web application development using React, Django, and modern tech stacks."
    },
    {
      icon: Database,
      title: "API Design & Microservices",
      description: "RESTful API development and microservices architecture for scalable backend systems."
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Oracle Cloud deployment and DevOps practices with Docker containerization."
    },
    {
      icon: Cpu,
      title: "AI/ML Model Integration",
      description: "Machine learning model development and integration into production applications."
    }
    
   
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How I Can Contribute</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Ways I can add value to SDE/SWE teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

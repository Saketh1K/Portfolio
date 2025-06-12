
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "PCAP: Python Essentials",
      issuer: "CISCO",
      category: "Programming",
      color: "bg-blue-500"
    },
    {
      title: "Java Programming",
      issuer: "edX",
      category: "Programming",
      color: "bg-orange-500"
    },
    {
      title: "Data Science with Python",
      issuer: "CS109x",
      category: "Data Science",
      color: "bg-green-500"
    },
    {
      title: "AI Associate",
      issuer: "Salesforce",
      category: "AI/ML",
      color: "bg-purple-500"
    },
    {
      title: "NDG Linux Essentials",
      issuer: "CISCO",
      category: "System Administration",
      color: "bg-yellow-500"
    },
    {
      title: "Ethical Hacking",
      issuer: "CISCO",
      category: "Cybersecurity",
      color: "bg-red-500"
    },
    {
      title: "Programming in C",
      issuer: "CISCO",
      category: "Programming",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-sm leading-tight">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                <Badge variant="outline" className="text-xs">
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

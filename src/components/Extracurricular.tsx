
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Heart, Zap } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: "AI Hackathon @ VRSEC",
      role: "Organizer & Backend Challenge Designer",
      description: "Organized and designed backend challenges for AI hackathon, mentoring participants in system design.",
      icon: Zap,
      type: "Leadership"
    },
    {
      title: "Tech Fest (INFINITO) & AFOSEC",
      role: "Coordinator",
      description: "Coordinated technical events and managed logistics for college technical festivals.",
      icon: Users,
      type: "Coordination"
    },
    {
      title: "NSS Volunteer",
      role: "Digital Literacy Volunteer",
      description: "Taught digital literacy skills to underprivileged communities as part of social service.",
      icon: Heart,
      type: "Social Service"
    },
    {
      title: "Competitive Programming",
      role: "Participant",
      description: "Active participant in Flipkart GRiD 6.0 and Tata Imagination Challenge coding competitions.",
      icon: Trophy,
      type: "Competition"
    }
  ];

  return (
    <section id="extracurricular" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Beyond Coding</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Leadership, community involvement, and competitive achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{activity.title}</h3>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{activity.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;

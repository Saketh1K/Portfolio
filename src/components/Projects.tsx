import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Emotion & Depression Detection System",
      period: "Feb–Apr 2025",
      description: "Ensemble model combining NLP, audio, and psychometrics with 87% accuracy. Deployed via Dockerized REST APIs on Oracle Cloud.",
      tech: ["Flask", "PyTorch", "Docker", "TensorFlow.js", "Oracle Cloud"],
      accuracy: "87%",
      type: "AI/ML",
      githubLink: "https://github.com/Saketh1K/DeprAnalyser"
    },
    {
      title: "Brain Tumor Detection",
      period: "Jun–Dec 2024",
      description: "CNN model for MRI image classification with 95% accuracy and complete ML pipeline implementation.",
      tech: ["Keras", "OpenCV", "TensorFlow", "Python", "Computer Vision"],
      accuracy: "95%",
      type: "Deep Learning",
      githubLink: "https://github.com/Saketh1K/neuro-insight"
    },
    {
      title: "Face Recognition Attendance System",
      period: "Feb–Apr 2024",
      description: "Real-time attendance tracking via facial recognition, cloud-deployed using Docker with MySQL integration.",
      tech: ["OpenCV", "Flask", "MySQL", "Docker", "Computer Vision"],
      accuracy: "Real-time",
      type: "Computer Vision",
      demoLink: "https://smart-face-attendance-web.netlify.app/",
      githubLink: "https://github.com/Saketh1K/Face-Recognition-Attendance-System"
    },
    {
      title: "Stock Price Prediction System",
      period: "Nov–Dec 2023",
      description: "LSTM-based time-series forecasting for stock trends with live data visualization and interactive dashboard.",
      tech: ["LSTM", "Pandas", "Flask", "Time Series", "Data Visualization"],
      accuracy: "Time Series",
      type: "ML/Finance",
      demoLink: "https://stockpricepred.netlify.app/",
      githubLink: "https://github.com/Saketh1K/stockprice-prediction"
    },
    {
      title: "Maternal Health Risk Prediction System",
      period: "June–Nov 2023",
      description: "Machine learning-based health monitoring app predicting maternal health risks using vital signs. Features real-time predictions, visual dashboards, and Streamlit web interface.",
      tech: ["Random Forest", "Streamlit", "Plotly", "Pandas", "Scikit-learn"],
      accuracy: "89%",
      type: "HealthTech",
      demoLink: "https://maternal-care-streamlit.netlify.app/",
      githubLink: "https://github.com/Saketh1K/medpredict"
    },
    {
      title: "Weather Prediction App",
      period: "June 2023",
      description: "A modern, responsive weather forecast application built with React, TypeScript, Vite, and Tailwind CSS. Get accurate current weather and 5-day forecasts for any location worldwide, with beautiful UI and smooth user experience.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Weather API"],
      accuracy: "Forecast",
      type: "Web App",
      demoLink: "https://starlit-sunburst-175e83.netlify.app/",
      githubLink: "https://github.com/Saketh1K/Weather-app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Showcase of my technical projects and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">{project.type}</Badge>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-primary border-primary">
                    {project.accuracy}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

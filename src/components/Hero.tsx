
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="text-primary">Surya Raghava Saketh Kodukulla</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-4">
                Aspiring SDE | Full-Stack & Backend Developer
              </h2>
              <p className="text-lg mb-8 max-w-2xl">
                I build scalable software solutions with a focus on cloud, AI, and clean code.
                Passionate about creating efficient, secure systems that solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
  <a
    href="https://drive.google.com/file/d/1SvJfXyIYpYwFutNaMcl7QoiQLBkGMDCK/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className="px-8">
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  </a>
  <Button 
    variant="outline" 
    size="lg" 
    className="px-8"
    onClick={scrollToContact}
  >
    Contact Me
  </Button>
</div>


              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/Saketh1K" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border rounded-full hover:bg-accent transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/saketh-kodukulla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border rounded-full hover:bg-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/10">
      <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        <img
          src="https://i.postimg.cc/fRXJSfs2/saketh.jpg"
          alt="Saketh"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
    {/* Floating elements */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">
      AI
    </div>
    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary text-sm font-bold animate-pulse">
      FS
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Saketh Kodukulla</h3>
            <p className="text-sm opacity-80">
              Aspiring SDE | Full-Stack & Backend Developer
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/Saketh1K" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/saketh-kodukulla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sakethkodukulla10@gmail.com"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;

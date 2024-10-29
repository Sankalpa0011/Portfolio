import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SocialLink from '../ui/SocialLink';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's connect and discuss opportunities"
        />
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <SocialLink
            href="mailto:sankalpakavindu09@gmail.com"
            icon={Mail}
            label="Email"
          />
          <SocialLink
            href="https://github.com/Sankalpa0011"
            icon={Github}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/kavindu-sankalpa"
            icon={Linkedin}
            label="LinkedIn"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
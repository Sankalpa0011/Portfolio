import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my journey and passion for technology"
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm an Information Technology undergraduate at the Institute of Technology, University of Moratuwa, with a strong passion for data science and machine learning. Proficient in Python, SQL, and various data analysis tools, with hands-on experience in Deep Learning, natural language processing (NLP), Computer Vision, Machine Learning, Generative AI, and fine-tuning Large Language Models (LLMs).
            </p>
            <p className="text-gray-300">
              Currently focused on developing AI-powered solutions and MLOps practices. Experienced with AWS EC2 for cloud computing and SageMaker for deploying machine learning models, along with good knowledged in Docker, FastAPI and Jenkins.
            </p>
            <p className="text-gray-300">
              Quick learner with solid analytical, problem-solving, and leadership skills. Eager to leverage my technical expertise and leadership experience to contribute to innovative AI-driven solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-purple-500">
              <img
                src="images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
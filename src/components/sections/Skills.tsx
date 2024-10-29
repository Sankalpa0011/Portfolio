
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillGrid from '../SkillGrid';

const Skills = () => {
  const aiMlSkills = [
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'LangChain', icon: 'images/langchain-icon.svg' }, // Placeholder: Replace with actual link if available
    { name: 'OpenAI', icon: 'images/openai-icon.svg' },
    { name: 'Pinecone', icon: 'images/pinecone-icon.svg' }, // Placeholder: Replace with actual link if available
  ];

  const programmingSkills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'FastAPI', icon: 'images/fastapi-icon.svg' }, // Placeholder: Replace with actual link if available
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ];

  const devOpsSkills = [
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', icon: 'images/aws-icon.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const mlOpsSkills = [
    { name: 'DVC', icon: 'images/dvc-icon.svg' }, // Placeholder: Replace with actual link if available
    { name: 'MLflow', icon: 'images/mlflow-icon.svg'},
    { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
    { name: 'Kaggle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg' },
    { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }, // assuming GitHub for CI/CD
    { name: 'RAG', icon: 'images/rag-icon.svg' }, // Placeholder: Replace with actual link if available
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />
        <div className="space-y-8">
          <SkillGrid title="AI & Machine Learning" skills={aiMlSkills} />
          <SkillGrid title="Programming & Frameworks" skills={programmingSkills} />
          <SkillGrid title="DevOps & Cloud" skills={devOpsSkills} />
          <SkillGrid title="MLOps & Tools" skills={mlOpsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;


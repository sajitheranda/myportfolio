import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Suba AI – Daily & Monthly Astrology Web Application",
      image: "/images/project/suba_ai_web.PNG",
      description: "A web-based astrology platform offering personalized predictions with 99.9% secure data transmission and 95% uptime. Combining AI and modern web technologies, it ensures accurate forecasts and actionable remedies.",
      link: "https://subaai.com/",
    },
    {
      title: "Suba AI – Daily & Monthly Astrology Mobile Application",
      image: "/images/project/suba_ai_mobile.PNG",
      description: "A mobile astrology app providing personalized daily and monthly predictions, auspicious timings, and remedies. Built with AI and machine learning, it ensures top performance and data security.",
      link: "https://play.google.com/store/apps/details?id=com.subaai.jyothishya_ai_flutter&pcampaignid=web_share",
    },
    {
      title: "Child Malnutrition Management Application",
      image: "/images/project/child_malnutrition.PNG",
      description: "A digital tool empowering 1,000+ Public Health Midwives (PHMs) to track and manage malnutrition data efficiently. It improves accuracy by 95% and enhances informed decision-making in child healthcare.",
      link: "https://github.com/sajitheranda/medical_data_collector.git",
    },
    {
      title: "Fuzzy Clustering Analysis",
      image: "/images/project/fluzzy_clustering_image.jpeg",
      description: "Designed and implemented a fuzzy clustering algorithm to analyze datasets. It includes membership matrix initialization, cluster center computation, and performance evaluation using the Silhouette Score.",
      link: "https://github.com/sajitheranda/Fuzzy-Clustering.git",
    },
    {
      title: "Recurrent Neural Networks (RNN) for Autocomplete System",
      image: "/images/project/RNN_image.PNG",
      description: "Developed an autocomplete system using LSTM-based RNNs, trained on 10,000 words. The model predicts and suggests word completions based on user input, optimizing efficiency and accuracy.",
      link: "https://github.com/sajitheranda/RNN-for-text-generation.git",
    },
    {
      title: "Deploying a Scalable Django App on AWS with Gunicorn & Nginx",
      image: "/images/project/deploy_python.webp",
      description: "Set up a scalable Django application on AWS EC2 with Gunicorn, Nginx, and Docker. Ensured robust performance, security, and production-ready deployment for seamless user experience.",
      link: "https://github.com/sajitheranda/myproject.git",
    },
    {
      title: "Blog Post Application",
      image: "/images/project/blog.png",
      description: "A Laravel-powered blog platform featuring full CRUD functionality and role-based access control. Supports multiple user roles, ensuring secure content management and seamless user interactions.",
      link: "https://github.com/sajitheranda/blogapp.git",
    },
    {
      title: "Bank Virtual Assistant Chatbot Project",
      image: "/images/project/bank_image1.jpeg",
      description: "Developed a React-based chatbot interface for banking services. The assistant provides real-time responses, interactive features, and an intuitive user experience for seamless banking support.",
      link: "https://github.com/sajitheranda/bank_chatbot_backend.git",
    },
    {
      title: "COVID-19 CT Image Classification using CNN",
      image: "/images/project/covid_19_image.jpeg",
      description: "Created a deep learning pipeline using CNNs to classify CT images as COVID-19 positive or negative. Optimized model accuracy and performance for reliable medical image analysis.",
      link: "https://github.com/sajitheranda/Covid19-CT-image.git",
    },
    {
      title: "Gas Weight Predictor App & Gas Weight Tracker System",
      image: "/images/project/gas_weight_image.png",
      description: "Developed an ML-powered gas weight predictor and IoT-based tracking system. Provides real-time monitoring, safety alerts, and consumption insights with 80%+ accuracy for improved gas management.",
      link: "https://github.com/sajitheranda/gas_web_realtime.git",
    },
  ];
  

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2>My Projects</h2>
        <br/>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
export const PROFILE = {
  name: "Vishnuvaradhan M",
  role: "Data Science & AI Engineer",
  email: "vishnuvaradhan700@gmail.com",
  phone: "+91 8667661977",
  location: "Coimbatore, India",
  summary: "Data Science and AI Engineer with hands-on experience building production-ready backend and AI systems at HELYXON Healthcare Solutions. Strong in Python, Machine Learning, Deep Learning, RAG pipelines, Computer Vision, FastAPI, MongoDB, and LLM-driven retrieval systems with a focus on reliability, performance, and real-world deployment.",
  socials: {
    github: "https://github.com/Vishnuvaradhan-M",
    linkedin: "https://www.linkedin.com/in/vishnuvaradhan-m-241986301/",
  },
  experience: [
    {
      company: "HELYXON Healthcare Solutions (Remote)",
      role: "Data Science Intern",
      period: "Sep 2024 – Present",
      description: "Contributing to the development of internal AI-driven platforms with a focus on document-grounded question answering using Retrieval-Augmented Generation (RAG).",
      outcomes: [
        "Designed and implemented backend modules using FastAPI and MongoDB, including ticket creation workflows and round-robin agent assignment with atomic updates.",
        "Built production-ready REST APIs for email template and campaign management with secure JWT-based authentication.",
        "Worked on structured API response handling, Postman testing, and system reliability improvements."
      ]
    }
  ],
  projects: [
    {
      title: "HR & Career Growth Copilot",
      problem: "Semantic retrieval of HR and policy documents.",
      approach: "Designed a RAG pipeline using FAISS + SentenceTransformers. Integrated local Ollama LLM for offline inference. Built role-aware responses.",
      stack: ["RAG", "FAISS", "SentenceTransformers", "Ollama LLM", "FastAPI", "MongoDB"],
      impact: "Role-aware responses and personalized recommendations.",
      github: "https://github.com/Vishnuvaradhan-M",
      demo: ""
    },
    {
      title: "Few-Shot Text Classification",
      problem: "Benchmark low-resource NLP fine-tuning.",
      approach: "Benchmarked LoRA, Prompt Tuning, and Hybrid PEFT on BERT/RoBERTa across AGNews/SST-2/TREC (8-64 shots).",
      stack: ["Python", "PEFT", "BERT", "RoBERTa", "LoRA", "Prompt Tuning"],
      impact: "Analyzed accuracy vs efficiency trade-offs for low-resource environments.",
      github: "https://github.com/Vishnuvaradhan-M",
      demo: ""
    },
    {
      title: "Dual-Path YOLO Pedestrian Tracking",
      problem: "Reduce ID-switch errors in real-time tracking.",
      approach: "YOLOv8 + ByteTrack + DeepSORT with Dual Tracker Fusion Gate. Annotated 8,082-frame dataset.",
      stack: ["YOLOv8", "ByteTrack", "DeepSORT", "OpenCV", "Python", "Scikit-Learn"],
      impact: "Dynamic tracker selection via hybrid features for improved reliability.",
      github: "https://github.com/Vishnuvaradhan-M",
      demo: ""
    },
    {
      title: "Telecom Churn Framework",
      problem: "Predict churn and optimize CLV on sequential data.",
      approach: "CNN-BiLSTM on 90-day sequences (65K users). NSGA-II for cost-retention trade-off.",
      stack: ["Python", "TensorFlow", "Scikit-Learn", "NSGA-II", "Pandas"],
      impact: "Achieved AUC ≈ 0.9998 with multi-objective optimization.",
      github: "https://github.com/Vishnuvaradhan-M",
      demo: ""
    },
    {
      title: "Cricket Data Analysis",
      problem: "Strategic insights on performance factors for Champions Trophy.",
      approach: "Statistical analysis and visualization of spin vs pace across phases/venues.",
      stack: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      impact: "Strategic insights for match-specific ground conditions and performance factors.",
      github: "https://github.com/Vishnuvaradhan-M",
      demo: ""
    }
  ],
  skills: {
    "Core Skills": ["Python", "Machine Learning", "Deep Learning", "NLP", "Embeddings", "RAG", "Computer Vision"],
    "Frameworks & Tools": ["FastAPI", "MongoDB", "TensorFlow", "Scikit-Learn", "YOLOv8", "ByteTrack", "DeepSORT"],
    "Data & Analytics": ["SQL", "Pandas", "NumPy", "Power BI"]
  },
  education: [
    {
      school: "Amrita Vishwa Vidyapeetham",
      degree: "Integrated M.Sc Data Science",
      period: "Sep 2022 – Present (CGPA: 8.55/10)",
      location: "Coimbatore"
    },
    {
      school: "SSM Matriculation School",
      degree: "Higher Secondary (Computer Science)",
      period: "Jun 2021 – Mar 2022 (93.2%)",
      location: "Namakkal"
    },
    {
      school: "SSVM Secondary School",
      degree: "Secondary Education",
      period: "Jun 2019 – Jun 2020 (79.8%)",
      location: "Mettupalayam"
    }
  ]
};
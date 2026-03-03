export const siteConfig = {
  name: "Renzo La Rosa",
  title: "Senior Data Scientist",
  description: "Senior Data Scientist with 8+ years delivering production AI/ML solutions across healthcare, credit risk, finance, and aerospace. AWS Certified, Python & SQL expert. Based in Indianapolis, IN.",

  // 2-color system: navy corporate + steel blue CTAs
  accentColor: "#0F2B5B",
  highlightColor: "#3B82F6",

  // Hero stats
  stats: [
    { value: "8+", label: "Years of Experience" },
    { value: "$25M+", label: "Revenue Impact" },
    { value: "AWS", label: "ML Certified" },
  ],

  tagline: "Turning complex data into executive-level insights and AI-driven decision systems.",

  social: {
    email: "renzo.j.larosa@gmail.com",
    linkedin: "https://www.linkedin.com/in/renzo-la-rosa-7a3ab454/",
  },

  aboutMe:
    "Senior Data Scientist with 8+ years of experience delivering production AI/ML solutions across healthcare, credit risk, finance, and aerospace. Former Deloitte consultant skilled at translating complex data into executive-level insights and leading cross-functional initiatives. Proven track record of generating $25M+ in revenue impact through predictive modeling, fraud detection, and AI-driven decision systems. Currently pursuing an MBA with an AI concentration at Ball State University while serving as President of ALPFA Indianapolis, driving Latino professional development in the community.",

  skills: [
    "Python",
    "SQL",
    "Scikit-learn",
    "TensorFlow",
    "NLP",
    "LLMs",
    "Survival Analysis",
    "AWS (S3, SageMaker, Bedrock)",
    "Jupyter",
    "Sigma",
    "Git",
    "Jira",
  ],

  projects: [
    {
      name: "ML Propensity Models — Sales Optimization",
      description:
        "Developed Random Forest, Logistic Regression, and Survival Analysis models that drove a 30% sales growth and $15M in additional revenue in the first year.",
      link: "",
      skills: ["Random Forest", "Survival Analysis", "Python"],
    },
    {
      name: "Quantile Regression — Early Claim Payments",
      description:
        "Designed a quantile regression model to predict safe early claim payments, projected to generate $10M+ in annual revenue upon deployment.",
      link: "",
      skills: ["Quantile Regression", "Python", "SQL"],
    },
    {
      name: "Generative AI Chatbot — RAG Architecture",
      description:
        "Implemented a GenAI chatbot using LangChain, FAISS vector stores, and RAG architecture, improving response quality and user experience for client applications.",
      link: "",
      skills: ["LangChain", "FAISS", "RAG", "LLMs"],
    },
    {
      name: "NLP Pipeline — Medical Records Extraction",
      description:
        "Developed OCR, classification, and NER pipelines to extract information from large medical records, achieving a 40% efficiency gain in case reviews.",
      link: "",
      skills: ["NLP", "OCR", "NER", "Python"],
    },
    {
      name: "Fraud Detection — Clustering Models",
      description:
        "Built clustering-based fraud detection models that accelerated identification of suspicious claims and enabled targeted investigation efforts.",
      link: "",
      skills: ["Clustering", "Fraud Detection", "Python"],
    },
  ],

  experience: [
    {
      company: "Zelis Healthcare Corporation",
      title: "Senior Data Scientist",
      dateRange: "Mar 2024 — Present",
      bullets: [
        "Developed ML propensity models driving <strong>30% sales growth</strong> and <strong>$15M</strong> in additional revenue",
        "Technical owner for production ML models, presenting insights to executive stakeholders",
        "Designed quantile regression model projected to generate <strong>$10M+</strong> in annual revenue",
        "Built executive ROI dashboards in Sigma to track model performance and business impact",
        "Mentor and supervise <strong>5 junior data scientists</strong> across U.S. and India",
      ],
    },
    {
      company: "Deloitte & Touche LLP",
      title: "Data Science Consultant",
      dateRange: "Nov 2021 — Mar 2024",
      bullets: [
        "Developed credit risk clustering methodology — key component of a <strong>$50M</strong> client proposal",
        "Implemented GenAI chatbot using LangChain, FAISS, and RAG architecture",
        "Built NLP pipelines (OCR, classification, NER) achieving a <strong>40% efficiency gain</strong>",
        "Validated classification models for mortgage lenders ensuring regulatory compliance",
      ],
    },
    {
      company: "Rolls-Royce Corporation",
      title: "System Performance Engineer",
      dateRange: "Jul 2018 — Nov 2021",
      bullets: [
        "Optimized aircraft maintenance with predictive algorithms in Python and SQL",
        "Led root-cause analysis reducing production costs by <strong>$67K per unit</strong>",
        "Developed thermodynamic performance models for safety investigations",
      ],
    },
  ],

  education: [
    {
      school: "Ball State University",
      degree: "M.B.A. — Artificial Intelligence Concentration",
      dateRange: "Expected May 2027",
      achievements: [],
    },
    {
      school: "Virginia Tech",
      degree: "M.S. in Mechanical Engineering",
      dateRange: "",
      achievements: [
        "Published at ASME Turbo Expo 2019 — heat transfer research sponsored by Rolls-Royce",
      ],
    },
    {
      school: "Purdue University",
      degree: "B.S. in Mechanical Engineering — Minor in Mathematics",
      dateRange: "",
      achievements: ["Honors College"],
    },
  ],
};

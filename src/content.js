// ============================================================
//  PERSONAL WEBSITE — ALL CONTENT LIVES HERE
//  Edit ONLY this file to update your site.
// ============================================================

export const CONTENT = {

  // ── Meta / SEO ─────────────────────────────────────────── //
  meta: {
    name:        "Vincent Luong",
    title:       "Vincent Luong — Data Scientist",
    description: "Data Scientist and Statistics student at UBC. I build NLP systems, ML pipelines, and data infrastructure that turn raw signals into real product impact.",
    url:         "https://vincentluong.com",
    ogImage:     "",
  },

  // ── Navigation ─────────────────────────────────────────── //
  nav: {
    links:     ["Experience", "Projects", "Education", "Contact"],
    resumeUrl: "/resume.pdf",
  },

  // ── Hero ───────────────────────────────────────────────── //
  hero: {
    greeting: "Hi, I'm",
    name:     "Vincent Luong",
    title:    "Data Scientist",
    tagline:  "I build NLP systems, ML pipelines, and data infrastructure that turn raw signals into real product impact.",
    cta:      { label: "View My Projects", href: "#projects" },
    links: {
      github:   "https://github.com/Vondent",
      linkedin: "https://linkedin.com/in/luongvincent",
      email:    "mailto:luongvincent3@gmail.com",
    },
  },

  // ── About ──────────────────────────────────────────────── //
  about: {
    paragraphs: [
      "I'm a 4th-year Statistics and Data Science student at the University of British Columbia, currently working as a Data Scientist at Later and incoming at Samsung Research. I build NLP and ML systems that power creator discovery at scale.",
      "I'm drawn to the full stack of a data problem: from ingestion and feature engineering to model deployment and production monitoring. My work spans semantic search, time series forecasting, and computer vision, always with an eye on measurable impact.",
      "Outside of work and school, I compete in hackathons and build projects that mix data with things I'm genuinely curious about.",
    ],
  },

  // ── Experience — reverse-chronological ─────────────────── //
  experience: [
    {
      role:   "Data Scientist",
      org:    "Samsung Research",
      url:    "https://research.samsung.com/srca",
      dates:  "Jul 2026 — Present · Vancouver, BC",
      bullets: [
        "Incoming Fall 2026.",
      ],
    },
    {
      role:   "Data Scientist",
      org:    "Later",
      url:    "https://later.com",
      dates:  "Jan 2026 — Present · Vancouver, BC",
      bullets: [
        "Engineered 15+ NLP/deep learning models across 5M+ records, building text preprocessing and feature extraction pipelines for semantic search and language detection; improved creator search precision from 40% to 100% on language-filtered queries.",
        "Built and deployed automated data pipelines on AWS (S3, Lambda, ECR) to ingest, transform, and validate 3M+ records, defining reliable schemas that cut manual classification effort ~99% and improved downstream data integrity.",
        "Led Share of Voice initiative across 4 platforms for 7M+ users; scope expanded to a cross-functional team with dedicated engineering and analytics support, with findings shipped as product features and presented at SXSW 2026.",
      ],
    },
    {
      role:   "Research Analyst",
      org:    "Agriculture and Agri-Food Canada",
      url:    "https://agriculture.canada.ca",
      dates:  "May 2025 — Apr 2026 · Brandon, MB",
      bullets: [
        "Built and maintained interactive React dashboards on crop production and energy cost across 44 systems, partnering with federal stakeholders to drive funding decisions that secured continued budget and expanded programs to 189,000+ farmers.",
        "Built mixed-effects models with Tukey HSD post-hoc tests to identify significant causal effects (p < 0.001) across 100+ observations from 44 production systems, informing cost-benefit recommendations for federal policy.",
        "Conducted literature review of energy efficiency and crop production research, informing statistical methodology and experimental design for federal analysis; contributions acknowledged in an upcoming government research publication.",
      ],
    },
    {
      org:      "Cineplex",
      url:      "https://cineplex.com",
      duration: "1 yr",
      location: "Langley, BC",
      roles: [
        {
          title:  "Treasury Analyst",
          dates:  "Aug 2018 — Feb 2019 · 6 mos",
          bullets: [
            "Promoted from Cast Member within 6 months based on performance.",
            "Managed and reconciled over $500K+ in revenue streams across multiple payment channels.",
          ],
        },
        {
          title:  "Cast Member",
          dates:  "Feb 2018 — Aug 2018 · 6 mos",
          bullets: [
            "Cross-trained in 4 different areas of operations, including concessions, ticketing, foods, and flooring.",
          ],
        },
      ],
    },
  ],

  // ── Projects ───────────────────────────────────────────── //
  projects: [
    {
      title:       "TFT Set 17 FAQ Chatbot",
      description: "A production-deployed Corrective RAG chatbot answering TFT gameplay questions over 686 documents. Achieved 89% answer faithfulness, 78% context precision, and a 64% latency reduction over a standard RAG baseline.",
      tags:        ["Python", "LangChain", "LangGraph", "Pinecone", "Groq", "FastAPI"],
      links: {
        repo: "https://github.com/luongvincent/tft-set17-faq-chatbot",
        demo: "https://tft-set17-faq-chatbot.vercel.app/",
      },
    },
    {
      title:       "Stock Price Forecasting",
      description: "Automated ELT pipelines feeding a Prophet + Auto-ARIMA ensemble to forecast daily prices for 5 tickers. Reduced TSLA forecast error 51% over a naive baseline, reaching 6.9% RMSE-to-price on a 30-day test set.",
      tags:        ["Python", "Airflow", "Prophet", "ARIMA", "Streamlit", "statsmodels"],
      links: {
        repo: "https://github.com/luongvincent/stock-price-forecast",
        demo: "https://stock-price-forecast-c6lazafwgd6aocc7qzdj9o.streamlit.app",
      },
    },
    {
      title:       "AI Face Detection",
      description: "A cloud-native microservice classifying real vs. AI-generated faces in real time. Attained 88.7% accuracy and 0.957 AUC across 40,000+ images via transfer learning on ResNet50, with 163ms p95 CPU inference.",
      tags:        ["Python", "PyTorch", "TensorFlow/Keras", "Flask", "Plotly"],
      links: {
        repo: "https://github.com/luongvincent/ai-detection",
        demo: "https://ai-detection-coral.vercel.app/",
      },
    },
    {
      title:       "Customer Churn Prediction",
      description: "Predictive classification system for customer churn over 7,000+ Telco records. Implemented threshold tuning to optimize business decisions and built an interactive Flask + Plotly dashboard with SHAP explainability deployed on Render.",
      tags:        ["Python", "scikit-learn", "XGBoost", "Flask", "Plotly", "SHAP"],
      links: {
        repo: "https://github.com/luongvincent/customer-churn-prediction",
        demo: "https://customer-churn-prediction-1dmu.onrender.com",
      },
    },
    {
      title:       "Customer Segmentation",
      description: "Segmented 556,909 e-commerce customer records using K-Means clustering with Isolation Forest for outlier detection and PCA for dimensionality reduction; transformed clusters into a product recommendation system.",
      tags:        ["Python", "scikit-learn", "K-Means", "PCA"],
      links: {
        repo: "https://github.com/luongvincent/customer-segmentation",
        demo: "",
      },
    },
    {
      title:       "UBC First Byte — Case Competition",
      description: "Placed 3rd out of 40 teams in a national data analytics competition judged by professionals from Microsoft, Meta, Deloitte, EY, and EA. Analysed stadium revenue data to support a $150M turnaround strategy.",
      tags:        ["Python", "Altair", "Matplotlib", "Power BI"],
      links: {
        repo: "https://github.com/luongvincent/UBC-Bolt-First-Byte-2025",
        demo: "",
      },
    },
  ],

  // ── Skills ─────────────────────────────────────────────── //
  skills: {
    "Languages":    ["Python", "SQL", "R", "Bash", "Git"],
    "AI / ML":      ["PyTorch", "TensorFlow/Keras", "Hugging Face", "LangChain", "LangGraph", "OpenAI API", "scikit-learn"],
    "Cloud & Data": ["AWS S3", "AWS SageMaker", "AWS Lambda", "AWS ECR", "AWS IAM", "AWS CloudWatch", "AWS EventBridge", "AWS Secrets Manager", "GCP BigQuery", "GCP Gemini", "Docker", "dbt", "Airflow", "Pinecone", "Flask", "CircleCI", "ArgoCD"],
  },

  // ── Education ──────────────────────────────────────────── //
  education: [
    {
      degree: "B.Sc. in Statistics | Minor in Data Science | Concentration in Computer Science",
      school: "University of British Columbia",
      url:    "https://ubc.ca",
      dates:  "Expected 2028",
      coursework: [
        "Machine Learning",
        "Statistical Modeling",
        "Data Structures & Algorithms",
        "Relational Databases",
        "Data Visualization",
        "Regression Analysis",
        "Probability",
      ],
      awards: [
        { place: "1st",  title: "HackML",                            org: "SFU DSSS", year: "2026" },
        { place: "3rd",  title: "Data Analytics Case Competition",    org: "UBC BOLT", year: "2025" },
        { place: "4th",  title: "Data Analytics Case Competition",    org: "UBC BOLT", year: "2026" },
      ],
    },
  ],

  // ── Contact / Footer ───────────────────────────────────── //
  contact: {
    heading:    "Let's connect",
    blurb:      "Open to new grad roles, internships, and collaborations. Best way to reach me is by email.",
    email:      "luongvincent3@gmail.com",
    links: {
      github:   "https://github.com/Vondent",
      linkedin: "https://linkedin.com/in/luongvincent",
    },
    footerNote: "Vincent Luong · Built with React & Vite.",
  },

};

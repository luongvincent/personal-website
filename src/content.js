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
      "I'm a 4th-year Statistics and Data Science student at the University of British Columbia, currently a Data Scientist at Samsung Research, working on Samsung Health data and wearable feature research. Previously at Later, I built NLP and ML systems that powered creator discovery at scale.",
      "I'm drawn to the full stack of a data problem: from ingestion and feature engineering to model deployment and production monitoring. My work spans semantic search, time series forecasting, and computer vision, always with an eye on measurable impact.",
      "Outside of work and school, I compete in hackathons and build projects that mix data with things I'm genuinely curious about.",
    ],
  },

  // ── Experience — reverse-chronological ─────────────────── //
  experience: [
    {
      role:   "Data Scientist",
      org:    "Samsung Research",
      logo:    "/logos/samsung.png",
      url:    "https://research.samsung.com/srca",
      dates:  "Sep 2026 — Present · Vancouver, BC",
      bullets: [
        "Enabled a Samsung-hosted case competition without exposing real user health data, measured by matched marginals and Spearman correlations, by sampling Gaussian copulas across 140 tables in 13 clusters with P1-P99 bounds.",
        "Built evidence-based Galaxy Watch and Galaxy Ring feature proposals for Samsung Health's large active user base by turning 30+ peer-reviewed studies on wearable health sensing into product-ready concepts.",
        "Earned buy-in from internal stakeholders by translating findings from 15+ health studies into business-focused, research-backed slides.",
        "Gave the entire Samsung Health team a shared view of data quality, measured by documented coverage of every valid table, by engineering table and data quality features and visualizing feature distributions to inform product proposals.",
      ],
    },
    {
      role:   "Data Scientist",
      org:    "Later",
      logo:    "/logos/later.jpg",
      url:    "https://later.com",
      dates:  "Jan 2026 — Aug 2026 · Vancouver, BC",
      bullets: [
        "Led a C-suite-selected Share of Voice initiative across 4 platforms for 7M+ users; scope expanded to cross-functional team with dedicated engineering and analytics support, with findings deployed as internal product features and presented at SXSW 2026.",
        "Shipped to production a language detection system, measured by creator search precision rising from 40% to ~99% on language-filtered queries, by building NLP/deep learning models with preprocessing and feature extraction across 5M+ records.",
        "Cut $2K+ in annual OpenAI API costs at parity accuracy, measured by token spend and eval against GPT-generated labels, by fine-tuning XLM-RoBERTa for brand classification and serving it as an in-house AWS endpoint (S3, Lambda, ECR) over 3M+ records.",
        "Owned ML systems end-to-end, from preprocessing and modeling to deployment and production scaling, by building CI/CD (CircleCI/ArgoCD) pipelines and packaging services with Helm charts.",
      ],
    },
    {
      role:   "Research Analyst",
      org:    "Government of Canada",
      logo:    "/logos/gov.jpg",
      url:    "https://www.canada.ca",
      dates:  "May 2025 — Apr 2026 · Brandon, MB",
      bullets: [
        "Built and maintained interactive React dashboards on crop production and energy cost across 44 systems, partnering with federal stakeholders to drive funding decisions that secured continued budget and expanded programs to 189,000+ farmers.",
        "Built mixed-effects models with Tukey HSD post-hoc tests to identify significant differences (p < 0.001) across 100+ observations from 44 production systems, informing cost-benefit recommendations for federal policy.",
        "Conducted literature review of energy efficiency and crop production research, informing statistical methodology and experimental design for federal analysis; contributions acknowledged in upcoming government research publication.",
      ],
    },
    {
      org:      "Cineplex",
      logo:    "/logos/cineplex.jpg",
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
      metric:      { display: "89%",     label: "answer faithfulness",            fill: 0.89 },
      description: "A production-deployed Corrective RAG chatbot answering TFT gameplay questions over 686 documents. Achieved 89% answer faithfulness, 78% context precision, and a 64% latency reduction over a standard RAG baseline.",
      tags:        ["Python", "LangChain", "LangGraph", "Pinecone", "Groq", "FastAPI"],
      links: {
        repo: "https://github.com/luongvincent/tft-set17-faq-chatbot",
        demo: "https://tft-set17-faq-chatbot.vercel.app/",
      },
    },
    {
      title:       "Criteo Causal Inference",
      metric:      { display: "14M", label: "users in a randomized ad experiment" },
      description: "Causal analysis of Criteo's uplift experiment: checked randomization (sample ratio mismatch, covariate balance), cross-checked the ATE with three covariate-adjusted estimators, and compared S-, T-, X- and DR-learners by Qini curves and decile effects. Found most of the value in the top ~10% of users, and split-sample testing showed the policy cutoff was never stable.",
      tags:        ["Python", "scikit-learn", "econml", "Causal Inference", "Uplift Modeling"],
      links: {
        repo: "https://github.com/luongvincent/criteo-causal-inference",
        report: "https://github.com/luongvincent/criteo-causal-inference/blob/main/reports/analysis.md",
        demo: "",
      },
    },
    {
      title:       "Breast Cancer Treatment Response Prediction",
      metric:      { display: "0.862", label: "cross-validated AUC, clinical + image", fill: 0.862 },
      description: "2nd place at the T-CAIREM Health Datathon. Predicted pathological complete response to chemotherapy from pre-treatment biopsy slides and clinical variables, using frozen Phikon pathology-foundation-model embeddings on 89 patients. Image features alone carried signal (0.704 AUC) but added little over clinical variables, and the write-up reports that honestly with bootstrap confidence intervals.",
      tags:        ["Phikon", "Digital Pathology", "Logistic Regression", "PCA", "Bootstrap CIs"],
      links: {
        repo: "https://github.com/luongvincent/health-datathon",
        report: "https://github.com/luongvincent/health-datathon/blob/main/Predicting_pathological_complete_response_from_pre_treatment_breast_biopsy_slides_with_an_open_pathology_foundation_mode.pdf",
        demo: "",
      },
    },
    {
      title:       "Stock Price Forecasting",
      metric:      { display: "51%",     label: "lower TSLA error vs. naive",     fill: 0.51 },
      description: "Automated ELT pipelines feeding a Prophet + Auto-ARIMA ensemble to forecast daily prices for 5 tickers. Reduced TSLA forecast error 51% over a naive baseline, reaching 6.9% RMSE-to-price on a 30-day test set.",
      tags:        ["Python", "Airflow", "Prophet", "ARIMA", "Streamlit", "statsmodels"],
      links: {
        repo: "https://github.com/luongvincent/stock-price-forecast",
        demo: "https://stock-price-forecast-c6lazafwgd6aocc7qzdj9o.streamlit.app",
      },
    },
    {
      title:       "AI Face Detection",
      metric:      { display: "0.957",   label: "AUC on 40,000+ images",          fill: 0.957 },
      description: "A cloud-native microservice classifying real vs. AI-generated faces in real time. Attained 88.7% accuracy and 0.957 AUC across 40,000+ images via transfer learning on ResNet50, with 163ms p95 CPU inference.",
      tags:        ["Python", "PyTorch", "TensorFlow/Keras", "Flask", "Plotly"],
      links: {
        repo: "https://github.com/luongvincent/ai-detection",
        demo: "https://ai-detection-coral.vercel.app/",
      },
    },
    {
      title:       "Customer Churn Prediction",
      metric:      { display: "7,000+",  label: "Telco customer records" },
      description: "Predictive classification system for customer churn over 7,000+ Telco records. Implemented threshold tuning to optimize business decisions and built an interactive Flask + Plotly dashboard with SHAP explainability deployed on Render.",
      tags:        ["Python", "scikit-learn", "XGBoost", "Flask", "Plotly", "SHAP"],
      links: {
        repo: "https://github.com/luongvincent/customer-churn-prediction",
        demo: "https://customer-churn-prediction-1dmu.onrender.com",
      },
    },
    {
      title:       "Customer Segmentation",
      metric:      { display: "556,909", label: "customer records segmented" },
      description: "Segmented 556,909 e-commerce customer records using K-Means clustering with Isolation Forest for outlier detection and PCA for dimensionality reduction; transformed clusters into a product recommendation system.",
      tags:        ["Python", "scikit-learn", "K-Means", "PCA"],
      links: {
        repo: "https://github.com/luongvincent/customer-segmentation",
        demo: "",
      },
    },
    {
      title:       "UBC First Byte — Case Competition",
      metric:      { display: "3rd",     label: "of 40 teams" },
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
        { place: "2nd",  title: "National Health Datathon",          org: "T-CAIREM, University of Toronto", year: "2026", url: "https://github.com/luongvincent/health-datathon" },
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

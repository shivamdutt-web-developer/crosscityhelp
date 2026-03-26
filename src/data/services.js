import { Shield, Sparkles, Paintbrush, Home, Stethoscope, Briefcase, Trash2, Sprout, Cloud, Monitor, Code, Megaphone, Users, Search } from "lucide-react";

export const services = [
    {
        title: "Digital Marketing",
        slug: "digital-marketing",
        description: "Accelerate your digital footprint with data-driven marketing strategies, high-performance SEO, and conversion-optimized campaigns.",
        extendedDescription: `In a saturated digital landscape, visibility is no longer a luxury—it is a survival imperative. Our Digital Marketing engine is engineered to bypass common algorithmic bottlenecks, using a proprietary mix of high-frequency data auditing and behavioral analytics. At Cross City, we don't just "run ads"; we architect complex conversion funnels that transform passive traffic into loyal equity for your brand. 

Our approach integrates advanced SEO technical audits, including Core Web Vitals optimization and deep-structured schema implementation, ensuring your platform is prioritized by search engines. Beyond visibility, we deploy hyper-targeted PPC (Pay-Per-Click) frameworks and semantic social media strategies that resonate with your specific audience segments. We analyze real-time engagement telemetry to pivot and scale campaigns, ensuring every dollar spent contributes to measurable ROI. Our team of senior digital strategists manages everything from lead generation to full-scale brand authority building, utilizing a strictly data-first methodology that eliminates guesswork from your growth trajectory.`,
        icon: "Megaphone",
        image: "/images/digital-marketing.jpg",
        details: [
            "Technical SEO & Core Web Vitals Optimization",
            "Data-Driven PPC (Google/Meta) Architecture",
            "Strategic Conversion Rate Optimization (CRO)",
            "Semantic Content Strategy & Brand Storytelling",
            "Advanced Programmatic Advertising & Retargeting",
            "Real-time ROI Analytics & Performance Dashboards",
            "Email Automation & Behavioral Marketing Funnels",
            "Omnichannel Presence & Authority Building",
            "High-Frequency Sentiment Analysis & Auditing",
            "Mobile-First Ad Experience Design"
        ],
        process: [
            {
                title: "Digital Audit & Landscape Analysis",
                description: "We begin with a rigorous analysis of your current digital footprint, competitor benchmarks, and keyword saturation levels to identify untapped market opportunities."
            },
            {
                title: "Strategic Funnel Architecture",
                description: "Our strategists design a multi-layered conversion funnel, selecting the exact mix of SEO, PPC, and social channels suited for your specific industry logic."
            },
            {
                title: "Campaign Execution & Creative Sprites",
                description: "We deploy high-impact creative assets and copy across optimized channels, using A/B testing variations to ensure maximum engagement from day one."
            },
            {
                title: "Algorithmic Monitoring & Scaling",
                description: "Continuous real-time monitoring of campaign telemetry allows our data scientists to adjust bids, budgets, and targeting criteria for peak efficiency."
            },
            {
                title: "Deep Analytics & Growth Reporting",
                description: "We provide comprehensive, transparent reports that correlate digital activity with actual business growth, ensuring clear visibility into your ROI."
            }
        ],
        technologies: [
            "Google Ads (PPC)",
            "Meta Business Suite",
            "Google Analytics 4 (GA4)",
            "Ahrefs / SEMRush",
            "Hotjar (Heatmaps)",
            "HubSpot (CRM)",
            "Mailchimp / Klaviyo",
            "Screaming Frog",
            "Python for SEO",
            "Tableau (Data Viz)"
        ],
        faqs: [
            {
                question: "How long until we see measurable SEO results?",
                answer: "Technical SEO isn't an overnight fix; it's a structural investment. Typically, you will see significant improvements in crawling and indexing within 4-6 weeks, with meaningful ranking shifts appearing between 3 to 6 months depending on keyword competitiveness."
            },
            {
                question: "What is your approach to PPC budget management?",
                answer: "We use a 'smart-scaling' approach. We start with a testing phase to identify high-converting segments, then progressively shift budget toward the top-performing 20% of keywords that drive 80% of your revenue, ensuring zero waste."
            },
            {
                question: "Do you handle content creation for social and blogs?",
                answer: "Yes, we provide fully researched, SEO-optimized content. Our team of senior copywriters creates industry-specific whitepapers, blogs, and social assets that align with your brand's technical authority and voice."
            },
            {
                question: "How do you track conversion from offline leads?",
                answer: "We implement advanced call tracking, CRM integrations (like HubSpot), and unique tracking parameters (UTMs) to bridge the gap between digital interaction and final signed contracts."
            },
            {
                question: "How does Digital Marketing improve brand authority?",
                answer: "By consistently appearing at the top of search results and providing high-value content, we establish your brand as an industry thought leader, which naturally increases organic trust and reduces long-term acquisition costs."
            },
            {
                question: "Is social media marketing really effective for B2B?",
                answer: "Absolutely. We specialize in B2B social strategies, particularly on LinkedIn and Twitter, where we target decision-makers based on professional data rather than just simple demographics."
            }
        ]
    },
    {
        title: "Web Development",
        slug: "web-development",
        description: "Build ultra-fast, responsive, and secure web applications tailored for enterprise-scale performance and seamless user experiences.",
        extendedDescription: `Modern web architecture is no longer about aesthetics; it is about performance, accessibility, and high-availability. Our Web Development division at Cross City focuses on building lean, highly-optimized applications that handle millions of requests without latency. We specialize in cutting-edge frameworks like Next.js and React, using Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to deliver instantaneous load times and superior SEO compatibility. 

We don't just 'build websites'; we engineer digital assets that are strictly compliant with WCAG accessibility standards and SOC2 security protocols. Our developers prioritize a 'Security-by-Design' philosophy, ensuring every API endpoint is protected and every database query is sanitized. Whether it is a complex enterprise portal, a high-traffic e-commerce hub, or a sleek corporate platform, our engineering process ensures that your web presence is scalable, maintainable, and future-proof. We integrate sophisticated CI/CD pipelines to allow for rapid, zero-downtime updates, keeping your business agile in a fast-moving market.`,
        icon: "Monitor",
        image: "/images/web-development.jpg",
        details: [
            "Next.js & React High-Performance SPAs",
            "Server-Side Rendering (SSR) for SEO",
            "Custom API & Headless CMS Integrations",
            "Ultra-Responsive Mobile-First Design",
            "E-commerce Engine Architecture (Shopify/Custom)",
            "Web Vitals & Performance Optimization",
            "PWA (Progressive Web App) Development",
            "Zero-Downtime CI/CD Deployment",
            "WCAG 2.1 Accessibility Compliance",
            "Advanced Layer-7 Security & WAF Rules"
        ],
        process: [
            {
                title: "Discovery & Blueprinting",
                description: "We analyze your functional requirements and user personas to create a comprehensive technical roadmap and component architecture."
            },
            {
                title: "UI/UX High-Fidelity Prototyping",
                description: "Our design team develops interactive wireframes and premium mockups in Figma, focusing on psychological conversion triggers and seamless navigation."
            },
            {
                title: "Full-Stack Agile Development",
                description: "Our senior developers execute the build in two-week sprints, providing you with transparent access to staging environments for continuous feedback."
            },
            {
                title: "Rigorous QA & Security Testing",
                description: "We conduct exhaustive penetration testing, cross-browser validation, and load testing to ensure your application is unbreakable and fluid."
            },
            {
                title: "Launch & CI/CD Onboarding",
                description: "We deploy to high-availability environments (AWS/Vercel) and establish a continuous integration pipeline for effortless future updates."
            }
        ],
        technologies: [
            "Next.js / React.js",
            "Node.js / Express",
            "Tailwind CSS / SCSS",
            "TypeScript",
            "MongoDB / PostgreSQL",
            "AWS / Vercel / Docker",
            "Strapi / Contentful",
            "Redis / Caching",
            "GraphQL / REST APIs",
            "Jest / Cypress (Testing)"
        ],
        faqs: [
            {
                question: "Why do you recommend Next.js over traditional React?",
                answer: "Next.js provides Server-Side Rendering (SSR) out of the box, which is critical for SEO and initial load speed. Traditional React (CSR) can be slow for search engines to index, whereas Next.js ensures your content is visible immediately."
            },
            {
                question: "How do you ensure the website is fast on mobile?",
                answer: "We use a mobile-first responsive approach, optimizing images via WebP, implementing code-splitting, and prioritizing 'Critical CSS' to ensure the First Contentful Paint (FCP) is under 1.5 seconds."
            },
            {
                question: "Do you provide ongoing maintenance after launch?",
                answer: "Yes, we offer comprehensive SLA-based maintenance packages that include 24/7 monitoring, security patches, monthly backups, and performance auditing to keep your application running at its peak."
            },
            {
                question: "Can you integrate our existing third-party CRMs?",
                answer: "Absolutely. We have extensive experience integrating complex APIs from Salesforce, HubSpot, SAP, and various custom legacy systems to ensure your website acts as a seamless part of your operation."
            },
            {
                question: "What is your approach to web security?",
                answer: "We implement multi-layered security including HTTPS/TLS, CSRF protection, sanitization of all user inputs, and WAF (Web Application Firewall) configuration on the hosting layer to prevent DDoS and SQL-injection attacks."
            },
            {
                question: "How does 'Headless' CMS benefit my business?",
                answer: "A Headless CMS separates your content from the presentation layer, allowing you to update your website, mobile app, and other digital portals from a single dashboard without touching the code."
            }
        ]
    },
    {
        title: "Software Developer",
        slug: "software-development",
        description: "Precision-engineered custom software solutions designed to solve complex business challenges with scalable architecture and clean code.",
        extendedDescription: `Standardized software often forces businesses to compromise on their internal logic. At Cross City, our Software Development division eliminates these compromises by building bespoke, high-performance systems from the ground up. We operate at the intersection of robust engineering and innovative design, delivering internal tools, automation systems, and enterprise-grade backends that are architected for longevity.

Our engineering team utilizes a rigorous Microservices architecture to ensure that every component of your system is independent, scalable, and resilient. We focus on 'Clean Code' principles and comprehensive documentation, ensuring that your software is not just a 'black box' but a transparent, valuable asset that your team can confidently own. From legacy system modernization to the creation of entirely new digital products, we provide the technical firepower required to turn complex requirements into elegant, efficient, and exceptionally stable software realities.`,
        icon: "Code",
        image: "/images/software-development.jpg",
        details: [
            "Bespoke Enterprise Software Systems",
            "Microservices Architecture & Scaling",
            "Legacy System Modernization & Refactoring",
            "Cloud-Native Application Development",
            "Complex API & Middleware Engineering",
            "Automated Business Workflow Integration",
            "Rigorous Unit & Integration Testing",
            "Cross-Platform Desktop Applications",
            "IoT & Embedded System Solutions",
            "Senior Technical Architecture Consultation"
        ],
        process: [
            {
                title: "Requirements Engineering",
                description: "We conduct deep-dive technical interviews with your stakeholders to document every functional constraint and business logic requirement."
            },
            {
                title: "Architectural Mapping",
                description: "Our architects design the system's data models, API schemas, and infrastructure scaling plans using industry-standard modeling tools."
            },
            {
                title: "Iterative Sprint Development",
                description: "Using Agile Scrum, we build your software in feature-complete increments, allowing you to see and test progress in real-time."
            },
            {
                title: "Comprehensive QA Automation",
                description: "We deploy automated test suites (unit, integration, and E2E) to ensure that new features never break existing functionality."
            },
            {
                title: "Enterprise Deployment & Support",
                description: "We handle the full migration and deployment process, followed by an intensive knowledge transfer phase to your internal IT teams."
            }
        ],
        technologies: [
            "Python / Django / Fast API",
            "Java / Spring Boot",
            "Go (Golang)",
            "C# / .NET Core",
            "PostgreSQL / MySQL",
            "Redis / RabbitMQ",
            "Kubernetes / Docker",
            "Jenkins / GitLab CI",
            "Prometheus / Grafana",
            "Electron (Desktop)"
        ],
        faqs: [
            {
                question: "How do you handle IP and code ownership?",
                answer: "You maintain 100% ownership of the intellectual property and the source code. Upon project completion and final payment, all repositories, documentation, and licenses are fully transferred to your control."
            },
            {
                question: "Do you work with existing in-house development teams?",
                answer: "Yes, we frequently act as a 'force multiplier' for in-house teams, providing specialized expertise in architecture, cloud-scaling, or senior backend engineering as required by your project scope."
            },
            {
                question: "Can you modernize our legacy Windows/COBOL software?",
                answer: "Modernization is one of our core specialties. We help businesses migrate from monolithic, outdated systems to modern, cloud-native microservices without interrupting daily operations."
            },
            {
                question: "What is your approach to handling massive datasets?",
                answer: "We utilize advanced database sharding, indexing strategies, and high-performance caching layers (like Redis) to ensure that system response times remain flat even as your data grows to millions of records."
            },
            {
                question: "How do you handle software scalability for future growth?",
                answer: "By utilizing containerization (Docker) and orchestration (Kubernetes), we ensure your software can automatically scale its resources up or down based on real-time user demand."
            },
            {
                question: "What kind of post-launch support do you provide?",
                answer: "We offer comprehensive 24/7 technical support, bug fixing, and regular security updates through a dedicated Service Level Agreement (SLA) tailored to your business criticality."
            }
        ]
    },
    {
        title: "SAAS",
        slug: "saas",
        description: "Develop, launch, and scale powerful Software-as-a-Service platforms with multi-tenant architectures and robust subscription ecosystems.",
        extendedDescription: `The SAAS economy demands a unique blend of engineering speed and architectural robustness. At Cross City, we specialize in building multi-tenant platforms that are optimized for rapid iteration and mass scalability. We help tech founders and enterprise leaders turn software concepts into high-margin subscription products, handling everything from complex billing logic to secure user isolation.

Our SAAS engineering framework is built upon a 'Compliance-First' foundation, ensuring that your platform is ready for global markets with GDPR, CCPA, and HIPAA standard capabilities integrated from the first line of code. We prioritize a frictionless onboarding experience for your end-users, using intelligent caching and edge-computing to deliver a snappy, native-app feel within the browser. Whether you are building an HR tool, a FinTech portal, or a niche CRM, we provide the full-stack infrastructure required to support your first 100 users or your first 100,000.`,
        icon: "Cloud",
        image: "/images/saas.jpg",
        details: [
            "Multi-Tenant Database Architecture",
            "Advanced Subscription & Billing (Stripe/Custom)",
            "Secure User Identity & Access (SSO/OAuth2)",
            "Robust Feature Flagging & A/B Testing",
            "Scalable API-First Backend Engineering",
            "Real-Time Collaborative UIs (WebSockets)",
            "Comprehensive Customer Analytics Integration",
            "Automated Multi-Region Infrastructure",
            "GDPR & Data Compliance Readiness",
            "White-Labeling & Custom Domain Mapping"
        ],
        process: [
            {
                title: "Product Strategy & MVP Definition",
                description: "We help you define the 'Minimum Viable Product' that delivers maximum value to your target market while minimizing time-to-launch."
            },
            {
                title: "Multi-Tenant Schema Engineering",
                description: "Our architects design a secure database and storage layer that ensures absolute data isolation between your different customer accounts."
            },
            {
                title: "Subscription Engine Integration",
                description: "We build or integrate complex recurring billing cycles, usage-based pricing models, and automated invoicing systems."
            },
            {
                title: "Scalable Infrastructure Orchestration",
                description: "We set up a cloud-native environment on AWS or Azure that automatically scales as your user base grows from trial to enterprise tiers."
            },
            {
                title: "Continuous Deployment Pipeline",
                description: "We implement a pipeline that allows you to push new features and patches to all customers simultaneously with zero downtime."
            }
        ],
        technologies: [
            "Next.js / TypeScript",
            "Node.js (Serverless)",
            "PostgreSQL (Multi-tenant)",
            "Stripe / Braintree API",
            "Auth0 / Firebase Auth",
            "AWS Lambda / S3",
            "Redis / Memcached",
            "Inngest (Workflows)",
            "PlanetScale / Supabase",
            "Segment / Mixpanel"
        ],
        faqs: [
            {
                question: "How do you ensure data security between customers?",
                answer: "We use 'Row-Level Security' (RLS) and strict tenant-ID isolation at the database layer. This ensures that it is mathematically impossible for one customer to access another's data, even in the event of an application error."
            },
            {
                question: "Can you help us build a mobile app version later?",
                answer: "Yes. By building your SAAS with an 'API-First' approach, we ensure that your backend can serve a web app, a mobile app, and even third-party integrations from the same secure data source."
            },
            {
                question: "What payment gateways do you recommend for global SAAS?",
                answer: "We generally recommend Stripe for its robust handling of recurring billing, tax compliance (Stripe Tax), and international support, but we can integrate any provider like PayPal, Paddle, or Adyen."
            },
            {
                question: "How do you handle sudden spikes in user activity?",
                answer: "We utilize serverless functions and auto-scaling groups that monitor CPU and memory usage in real-time. If a surge occurs, the infrastructure automatically spins up new instances to maintain performance."
            },
            {
                question: "Do you support Single Sign-On (SSO) for enterprise clients?",
                answer: "Absolutely. We can integrate SAML, OAuth2, and OpenID Connect to allow your corporate customers to log in using their existing systems like Okta, Azure AD, or Google Workspace."
            },
            {
                question: "How do you manage software updates across all tenants?",
                answer: "We use a 'Single-Codebase' approach. When we push an update, it is automatically deployed across the entire cluster, ensuring every customer is always on the latest, most secure version."
            }
        ]
    },
    {
        title: "HRMS",
        slug: "hrms",
        description: "Optimize your human resource operations with custom HRMS platforms featuring payroll automation, recruitment tracking, and employee management.",
        extendedDescription: `Internal operations shouldn't be a bottleneck to your growth. Our HRMS (Human Resource Management System) solutions are engineered to digitize and automate the entire employee lifecycle—from first recruitment contact to final exit interview. We build bespoke systems that replace fragmented spreadsheets and fragile manual processes with a central, secure 'Source of Truth' for your most valuable asset: your people.

We don't just provide 'forms'; we build intelligent systems capable of managing complex payroll calculations, legal compliance across different jurisdictions, and automated performance review cycles. Our HRMS platforms prioritize data privacy and role-based access control, ensuring that sensitive employee information is viewable only by authorized personnel. With integrated analytics, we help HR leaders identify turnover trends, monitor recruitment velocity, and optimize workforce utilization, transforming HR from a cost center into a strategic growth driver.`,
        icon: "Users",
        image: "/images/hrms.jpg",
        details: [
            "Automated Payroll & Tax Calculation",
            "Recruitment Lifecycle Management (ATS)",
            "Secure Employee Data Centralization",
            "Role-Based Access Control (RBAC)",
            "Performance Review & Goal Tracking",
            "Leave & Attendance Workflow Automation",
            "Compliance & Legal Document Management",
            "Integrated Organizational Analytics",
            "Mobile-Friendly Employee Self-Service",
            "Custom API for Existing Finance Tools"
        ],
        process: [
            {
                title: "Operational Workflow Audit",
                description: "We map out your current HR processes (manual and digital) to identify every friction point and every compliance risk."
            },
            {
                title: "Data Architecture & Legal Mapping",
                description: "Our analysts design a data structure that reflects your organization's hierarchy while complying with local labor laws and GDPR."
            },
            {
                title: "Module Engineering & Integration",
                description: "We build your custom HRMS modules—payroll, ATS, or attendance—ensuring they communicate perfectly with each other."
            },
            {
                title: "Sensitive Data Migration",
                description: "We handle the secure transfer of your existing employee records into the new system, ensuring zero data loss and maximum security."
            },
            {
                title: "Staff Onboarding & Training",
                description: "We provide detailed training for your HR admins and employees, ensuring the new tool is embraced and utilized effectively across the company."
            }
        ],
        technologies: [
            "React / TypeScript",
            "Node.js / Express",
            "PostgreSQL (Encrypted)",
            "AWS (IAM / Cognito)",
            "PDFKit for Invoicing",
            "OpenAI (For Job Descriptions)",
            "SendGrid (Notifications)",
            "Redis (Session Management)",
            "Docker / Kubernetes",
            "Chart.js (Analytics)"
        ],
        faqs: [
            {
                question: "How do you ensure employee data privacy?",
                answer: "We implement 'at-rest' and 'in-transit' encryption for all sensitive fields (like SSNs and bank details). Access is strictly managed via Role-Based Access Control (RBAC), and every data touchpoint is logged for audit purposes."
            },
            {
                question: "Can the HRMS handle different regional labor laws?",
                answer: "Yes. We build the system with 'localized modules' that can apply different tax rules, leave policies, and legal requirements based on the specific office location of each employee."
            },
            {
                question: "Does the system integrate with our bank for payroll?",
                answer: "We support the generation of bank-compatible files (like ACH or SWIFT formats) and can integrate directly with major banking APIs where available to automate salary transfers."
            },
            {
                question: "Is there an employee 'Self-Service' portal?",
                answer: "Absolutely. We provide a responsive interface where employees can update their profile, apply for leave, view payslips, and sign internal documents without needing HR intervention."
            },
            {
                question: "How do you handle recruitment tracking (ATS)?",
                answer: "Our integrated ATS module tracks candidates from application to hire, with built-in resume parsing, interview scheduling, and automated email notifications for a seamless candidate experience."
            },
            {
                question: "Can we generate custom HR reports?",
                answer: "Yes. We build a custom analytics dashboard that allows you to generate reports on employee turnover, departmental headcount, budget utilization, and more with a single click."
            }
        ]
    }
];

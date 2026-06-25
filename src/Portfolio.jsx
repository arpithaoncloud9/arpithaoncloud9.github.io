import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import { Award, Cloud, Wrench, Briefcase, FolderGit2, ExternalLink } from "lucide-react";

// ── Toolbox ──────────────────────────────────────────────────────────────────
const toolboxCategories = [
  {
    icon: "☁️",
    label: "Cloud Platforms",
    tools: ["AWS (Primary)", "GCP", "Azure"],
    color: "bg-sky-50 border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    icon: "🏗️",
    label: "Infrastructure as Code",
    tools: ["Terraform", "Ansible"],
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "🔄",
    label: "CI/CD & Containers",
    tools: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes"],
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: "🔐",
    label: "Security & IAM",
    tools: ["IAM", "Secrets Manager", "KMS", "Security Groups"],
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    icon: "📊",
    label: "Observability",
    tools: ["CloudWatch", "CloudTrail", "SNS Alerting"],
    color: "bg-rose-50 border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    icon: "💻",
    label: "Developer Tools",
    tools: ["Git", "GitHub", "Bash", "YAML", "JSON", "Linux"],
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "AWS 3-Tier Production Project — EKS Migration",
    tags: ["Terraform", "Docker", "GitHub Actions", "Kubernetes", "CloudWatch", "EKS", "ECR"],
    github: "https://github.com/arpithaoncloud9/terraform-three-tier-infra",
    bullets: [
      "Provisioned complete 3-tier AWS architecture with Terraform — VPC, ALB, EKS, RDS MySQL, IAM across us-east-1a and us-east-1b — zero manual steps",
      "Built end-to-end GitHub Actions CI/CD pipeline — terraform plan on PR, apply on merge, Docker build, ECR push, kubectl rollout in one automated workflow",
      "Containerized Node.js application with Docker and pushed to ECR using IAM role authentication — no stored credentials",
      "Migrated compute layer from EC2/ASG to EKS — Deployment, Service, HPA (2→6 pods at 70% CPU), Kubernetes Secret for secure DB credential injection",
      "Implemented full CloudWatch observability — alarms, log streams, SNS alerting, custom metrics (RequestCount, Latency, ErrorCount) via AWS SDK",
      "Reduced deployment time from 5–10 minutes (ASG refresh) to ~30 seconds (kubectl rollout) with zero downtime",
    ],
    accent: "from-sky-500 to-indigo-600",
  },
  {
    title: "End-to-End DevOps Pipeline",
    tags: ["Jenkins", "Docker", "AWS", "GitHub", "EC2", "RDS"],
    github: null,
    bullets: [
      "Provisioned AWS infrastructure (VPC, EC2, ALB, RDS) via AWS CLI and containerized a Java application with Docker",
      "Built Jenkins CI/CD pipeline with GitHub webhook triggers — every commit automatically builds, pushes Docker image to DockerHub, and deploys to EC2 with zero manual steps",
    ],
    accent: "from-orange-400 to-rose-500",
  },
  {
    title: "Secure Static Website",
    tags: ["S3", "CloudFront", "ACM", "Route 53", "IAM"],
    github: null,
    bullets: [
      "Hosted static website on private S3 bucket with CloudFront Origin Access Control (OAC) for secure content delivery",
      "Configured ACM SSL certificate and Route 53 for custom domain with HTTPS — no direct S3 public access",
    ],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Serverless Credential Rotation",
    tags: ["Lambda", "Secrets Manager", "EventBridge", "IAM", "KMS"],
    github: null,
    bullets: [
      "Built serverless automation to rotate credentials in Secrets Manager using Lambda triggered by EventBridge on a schedule",
      "Applied least-privilege IAM policies — zero standing access to secrets",
    ],
    accent: "from-violet-500 to-purple-700",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white text-gray-800 p-6">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="text-4xl font-bold mb-2 flex justify-center items-center gap-2"
        >
          <Cloud className="text-sky-500" />
          Engineering the sky—from concept to cloud, deployment to delivery.
        </motion.h1>
      </header>

      {/* ── Intro ──────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg leading-relaxed">
          Hi, I'm <strong>Maria Arpitha</strong> — a Cloud & DevOps Engineer
          with 3+ years of AWS production experience, 6 cloud certifications
          and 6 hands-on projects built to production standards.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          My background includes provisioning and managing AWS infrastructure
          using Terraform, building CI/CD pipelines with GitHub Actions and
          Jenkins, and designing secure multi-AZ architectures — gained through
          real production work at an EdTech SaaS company serving clients across
          the US, UK, and Southeast Asia.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Based in Bristol, CT — open to remote and hybrid roles.
          Fully authorized to work in the US (H4 EAD, no sponsorship required).
        </p>
      </section>

      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-12" />

      <div className="max-w-6xl mx-auto mb-20">

        {/* ── Toolbox + Certifications ───────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">

          {/* Toolbox */}
          <section className="flex-1 scroll-mt-20" id="toolbox">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Wrench className="text-sky-600" /> Tech Toolbox
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {toolboxCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-xl border ${cat.color} p-4 hover:shadow-sm transition-shadow duration-200`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="font-semibold text-sm text-gray-700">{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.map((tool, j) => (
                      <span
                        key={j}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${cat.badge}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="flex-1 scroll-mt-20" id="certifications">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-yellow-500" /> Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  src: "./images/aws-certified-cloudops-engineer-associate.png",
                  alt: "AWS Certified CloudOps Engineer Associate",
                  link: "https://www.credly.com/earner/earned/badge/5463f0d0-a9b4-4dd8-a682-ce1365cfd338",
                },
                {
                  src: "./images/aws-certified-ai-practitioner.png",
                  alt: "AWS Certified AI Practitioner",
                  link: "https://www.credly.com/badges/6e46f52f-87f2-4987-83c7-35d9976c3406/public_url",
                },
                {
                  src: "./images/aws-certified-solutions-architect-associate.png",
                  alt: "AWS Certified Solutions Architect Associate",
                  link: "https://www.credly.com/badges/22f63035-f5af-4d21-834c-f07f9b9270f1/public_url",
                },
                {
                  src: "./images/cloud-digital-leader-certification.png",
                  alt: "GCP Cloud Digital Leader",
                  link: "https://www.credly.com/badges/78c4967e-c644-48ac-81f6-01bc9cdb4b47/public_url",
                },
                {
                  src: "./images/generative-ai-leader-certification.png",
                  alt: "GCP Generative AI Leader",
                  link: "https://www.credly.com/badges/2d83d54d-0155-4d3a-8548-f3fdb00390d1/public_url",
                },
                {
                  src: "./images/microsoft-certified-fundamentals-badge.svg",
                  alt: "Microsoft Certified Azure Fundamentals",
                  link: "https://learn.microsoft.com/api/credentials/share/en-us/MariaArpithaSagayam-9407/CF7812BB393EBA89?sharingId=E866A35C9F6DED0F",
                },
                {
                  src: "./images/asset_44psmi_0.png",
                  alt: "Professional Scrum Master I",
                  link: "https://www.credly.com/badges/dbb057a2-2e8b-4774-b6b3-a49438a7f2ca",
                },
              ].map((cert, i) => (
                <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    whileHover={{ scale: 1.08, rotate: 0.3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    src={cert.src}
                    alt={cert.alt}
                    className="w-40 h-40 rounded-2xl shadow-lg bg-white object-contain p-3"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* ── Projects ───────────────────────────────────────────────────── */}
        <section className="scroll-mt-20 mb-16" id="projects">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <FolderGit2 className="text-sky-600" /> Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden bg-white flex flex-col"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-gray-800 text-base leading-snug">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1 text-xs text-sky-600 hover:text-sky-800 font-medium border border-sky-200 rounded-lg px-2.5 py-1 hover:bg-sky-50 transition-colors"
                      >
                        <ExternalLink size={11} />
                        GitHub
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 flex-1">
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Career Progression ─────────────────────────────────────────── */}
        <section className="scroll-mt-20" id="career">
          <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
            <Briefcase className="text-sky-700" /> Professional Journey & Career Progression
          </h2>

          {/* Cloud & DevOps Engineer — Self-Directed */}
          <div className="flex items-start gap-8 mb-12">
            <div className="w-64 flex flex-col items-end pr-4 pt-2">
              <div className="text-lg font-bold text-right">Cloud & DevOps Engineer</div>
              <div className="text-sm text-sky-700 font-medium text-right mt-1">
                Self-Directed Cloud Engineering
              </div>
              <div className="text-xs text-gray-500 mt-1">
                United States · Remote<br />Mar 2024 – Present
              </div>
            </div>
            <Card className="flex-1">
              <CardContent className="p-6 space-y-5">
                <div className="text-gray-700 leading-relaxed">
                  Following relocation to the US, used this period to earn <strong>6 cloud certifications</strong> across
                  AWS, GCP, and Azure — and build <strong>6 production-equivalent projects</strong> to stay
                  technically current and US market-ready. Fully authorized to work in the US (H4 EAD — no sponsorship required).
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Certifications earned</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS CloudOps Engineer – Associate",
                      "AWS Solutions Architect – Associate",
                      "AWS AI Practitioner",
                      "GCP Cloud Digital Leader",
                      "GCP Generative AI Leader",
                      "Azure Fundamentals (AZ-900)",
                    ].map((c, i) => (
                      <span key={i} className="text-xs bg-yellow-50 border border-yellow-200 text-yellow-800 px-2.5 py-0.5 rounded-full font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Projects built</div>
                  <ul className="space-y-1.5">
                    {[
                      "AWS 3-Tier Architecture — EKS Migration with Terraform, Docker, GitHub Actions, CloudWatch",
                      "End-to-End DevOps Pipeline — Jenkins, Docker, AWS (VPC · EC2 · ALB · RDS)",
                      "Infrastructure Automation — Terraform + GitHub Actions, zero manual steps",
                      "Serverless Credential Rotation — Lambda, Secrets Manager, EventBridge, KMS",
                      "Automated CI/CD Pipeline — GitHub Actions + EC2, PM2 zero-touch deploys",
                      "Secure Static Website — S3, CloudFront OAC, ACM SSL, Route 53",
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Excelsoft Technologies */}
          <div className="flex items-start gap-8 mb-12">
            <div className="w-64 flex flex-col items-end pr-4 pt-2">
              <div className="text-xl font-semibold text-right">
                Configuration Management Engineer
              </div>
              <div className="text-sm text-sky-700 font-medium text-right mt-1">
                Excelsoft Technologies
              </div>
              <div className="text-xs text-gray-500 font-normal mt-1">
                Mysore, India · Hybrid<br />Jul 2021 – Feb 2023
              </div>
            </div>
            <Card className="flex-1">
              <CardContent className="p-6 space-y-4">
                <div className="text-gray-700 mb-2">
                  Managed production AWS infrastructure for a global EdTech SaaS platform
                  serving clients across India, the US, UK, and Southeast Asia — supporting
                  AI-powered learning and assessment products used at scale.
                </div>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Provisioned and managed production AWS infrastructure (EC2, ALB, ASG,
                  VPC, RDS, S3, Lambda, CloudWatch) using Terraform and AWS CLI.</li>
                  <li>Built and maintained Jenkins CI/CD pipelines for automated application
                  deployments — reducing manual release effort significantly.</li>
                  <li>Implemented Ansible-based configuration management for automated
                  deployments and system updates across environments.</li>
                  <li>Enforced IAM roles, policies, and security groups following
                  least-privilege principles across all production resources.</li>
                  <li>Configured CloudWatch metrics, alarms, and log groups to improve
                  infrastructure reliability and operational visibility.</li>
                  <li>Created AMIs and golden images to standardize environments and
                  accelerate disaster recovery.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* IIHT */}
          <div className="flex items-start gap-8 mb-12">
            <div className="w-64 flex flex-col items-end pr-4 pt-2">
              <div className="text-xl font-semibold text-right">
                Cloud Infrastructure Trainee
              </div>
              <div className="text-sm text-sky-700 font-medium text-right mt-1">
                IIHT Ltd
              </div>
              <div className="text-xs text-gray-500 font-normal mt-1">
                Bengaluru, India · Remote<br />Mar 2020 – May 2021
              </div>
            </div>
            <Card className="flex-1">
              <CardContent className="p-6 space-y-4">
                <div className="text-gray-700 mb-2">
                  Gained hands-on AWS foundations while contributing to real internal
                  projects and supporting structured cloud training programs for
                  junior engineers.
                </div>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Delivered training sessions on AWS core services (EC2, S3, IAM,
                  VPC, RDS, CloudWatch) and cloud security fundamentals including the
                  Shared Responsibility Model.</li>
                  <li>Developed hands-on labs, guides, and assessments — accelerating
                  onboarding for new engineering trainees.</li>
                  <li>Provisioned EC2 instances, configured IAM roles and policies, and
                  set up CloudWatch monitoring on live internal projects.</li>
                  <li>Gained foundational exposure to Terraform, Jenkins, Docker, and
                  GitHub — forming the technical base for subsequent production roles.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* KGISL */}
          <div className="flex items-start gap-8 mb-12">
            <div className="w-64 flex flex-col items-end pr-4 pt-2">
              <div className="text-xl font-semibold text-right">
                Junior Associate, Customer Support
              </div>
              <div className="text-sm text-sky-700 font-medium text-right mt-1">
                KGISL
              </div>
              <div className="text-xs text-gray-500 font-normal mt-1">
                Bengaluru, India · On-site<br />Jun 2018 – Feb 2020
              </div>
            </div>
            <Card className="flex-1">
              <CardContent className="p-6 space-y-4">
                <div className="text-gray-700 mb-2">
                  Delivered customer support to US-based clients — building strong
                  cross-cultural communication skills and experience working across
                  time zones.
                </div>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Managed and resolved complex client issues in collaboration with
                  internal engineering teams — building cross-functional communication
                  skills directly relevant to remote US work environments.</li>
                  <li>Consistently operated across US time zones — comfortable with
                  async communication and distributed team workflows.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Education ──────────────────────────────────────────────────── */}
        <section className="scroll-mt-20" id="education">
          <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
            🎓 Education
          </h2>
          <div className="flex items-start gap-8 mb-12">
            <div className="w-64 flex flex-col items-end pr-4 pt-2">
              <div className="text-lg font-bold text-right">
                JSS Academy of Technical Education
              </div>
              <div className="text-sm text-sky-700 font-medium text-right mt-1">
                JSSATE, Bengaluru, India
              </div>
              <div className="text-xs text-gray-500 font-normal mt-1">
                2013 – 2017
              </div>
            </div>
            <Card className="flex-1">
              <CardContent className="p-6 space-y-4">
                <div className="font-medium text-gray-700">
                  Bachelor of Engineering — Information Science & Engineering
                </div>
                <div className="text-gray-500 text-sm">
                  Foundation in computer networks, operating systems, database
                  systems, and software engineering.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} Maria Arpitha — engineered with React, Tailwind & a tailwind of joy.
      </footer>
    </div>
  );
}

import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Wrench, Briefcase, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// ─── Flip Card ───────────────────────────────────────────────────────────────
function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="perspective"
      onClick={() => setFlipped(f => !f)}
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setFlipped(f => !f); }}
      role="button"
      aria-pressed={flipped}
      style={{ outline: "none" }}
    >
      <motion.div
        className={`relative w-full h-28 ${item.color} border shadow-sm hover:shadow-md transition-shadow duration-200 rounded-2xl cursor-pointer`}
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-3 select-none" style={{ backfaceVisibility: "hidden" }}>
          <span className="text-2xl">{item.icon}</span>
          <span className="font-semibold text-xs text-center leading-tight">{item.label}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center p-3 select-none" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <span className="text-xs font-medium text-center leading-snug opacity-90">{item.value}</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? project.bullets : project.bullets.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      {/* Header strip */}
      <div className={`${project.accent} px-5 py-4`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{project.icon}</span>
              <h3 className="font-bold text-sm text-slate-800 leading-tight">{project.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/70 text-slate-600 border border-slate-200">{tag}</span>
              ))}
            </div>
          </div>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1 text-[10px] font-semibold text-slate-500 hover:text-sky-600 transition-colors mt-0.5"
              onClick={e => e.stopPropagation()}>
              <ExternalLink size={12} /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* Bullets */}
      <div className="px-5 py-4">
        <ul className="space-y-2">
          {visibleBullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              {b}
            </li>
          ))}
        </ul>
        {project.bullets.length > 2 && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-sky-600 hover:text-sky-800 transition-colors"
          >
            {expanded ? <><ChevronUp size={13} /> Show less</> : <><ChevronDown size={13} /> +{project.bullets.length - 2} more</>}
          </button>
        )}
      </div>
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const toolboxItems = [
  { icon: "☁️", label: "Cloud Platforms", value: "AWS (Primary) · GCP · Azure", color: "bg-sky-50 border-sky-200 text-sky-800" },
  { icon: "🛠️", label: "Infrastructure as Code & Automation", value: "Terraform", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  { icon: "⚙️", label: "Config Management", value: "Ansible", color: "bg-orange-50 border-orange-200 text-orange-800" },
  { icon: "🔄", label: "CI/CD Pipelines", value: "GitHub Actions · Jenkins", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
  { icon: "🐳", label: "Containers & Orchestration", value: "Docker · Kubernetes · EKS", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { icon: "🔐", label: "Security & IAM", value: "IAM · Secrets Manager · KMS", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
  { icon: "📊", label: "Monitoring & Observability", value: "CloudWatch · SNS · CloudTrail", color: "bg-pink-50 border-pink-200 text-pink-800" },
  { icon: "⌨️", label: "Scripting & Markup", value: "Bash · Python", color: "bg-violet-50 border-violet-200 text-violet-800" },
  { icon: "💻", label: "Version Control", value: "Git · GitHub", color: "bg-gray-50 border-gray-200 text-gray-800" },
  { icon: "🐧", label: "Operating Systems", value: "Linux · Windows", color: "bg-slate-50 border-slate-200 text-slate-700" },
  { icon: "🤖", label: "AI Tools", value: "GitHub Copilot · Claude Code", color: "bg-teal-50 border-teal-200 text-teal-800" },
  { icon: "🗃️", label: "Databases", value: "RDS MySQL · DynamoDB", color: "bg-rose-50 border-rose-200 text-rose-800" },
];

const projects = [
  {
    icon: "🏗️",
    title: "AWS 3-Tier Production Project — EKS Migration",
    accent: "bg-sky-50",
    tags: ["Terraform", "Docker", "GitHub Actions", "Kubernetes", "EKS", "CloudWatch"],
    github: "https://github.com/arpithaoncloud9/terraform-three-tier-infra",
    bullets: [
      "Provisioned complete 3-tier AWS architecture with Terraform — VPC, ALB, EKS, RDS MySQL, IAM across us-east-1a and us-east-1b — zero manual steps.",
      "Built end-to-end GitHub Actions CI/CD pipeline — terraform plan on PR, apply on merge, Docker build, ECR push, kubectl rollout in one automated workflow.",
      "Containerized Node.js application with Docker and pushed to ECR using IAM role authentication — no stored credentials.",
      "Migrated compute layer from EC2/ASG to EKS — Deployment, Service, HPA (2→6 pods at 70% CPU), Kubernetes Secret for secure DB credential injection.",
      "Implemented full CloudWatch observability — alarms, log streams, SNS alerting, custom metrics (RequestCount, Latency, ErrorCount) via AWS SDK.",
      "Reduced deployment time from 5–10 minutes (ASG refresh) to ~30 seconds (kubectl rollout) with zero downtime.",
    ],
  },
  {
    icon: "🔁",
    title: "End-to-End DevOps Pipeline — Jenkins · Docker · AWS",
    accent: "bg-indigo-50",
    tags: ["Jenkins", "Docker", "AWS CLI", "EC2", "ALB", "RDS"],
    github: null,
    bullets: [
      "Provisioned AWS infrastructure (VPC, EC2, ALB, RDS) via AWS CLI and containerized a Java application with Docker.",
      "Built Jenkins CI/CD pipeline with GitHub webhook triggers — every commit automatically builds, pushes Docker image to DockerHub, and deploys to EC2 with zero manual steps.",
    ],
  },
  {
    icon: "🌐",
    title: "Secure Static Website — S3 · CloudFront · ACM · Route 53",
    accent: "bg-emerald-50",
    tags: ["S3", "CloudFront", "ACM", "Route 53", "OAC"],
    github: null,
    bullets: [
      "Hosted static website on private S3 bucket with CloudFront Origin Access Control (OAC) for secure content delivery — no direct S3 public access.",
      "Configured ACM SSL certificate and Route 53 for custom domain with end-to-end HTTPS enforcement.",
    ],
  },
  {
    icon: "🔐",
    title: "Serverless Credential Rotation — Lambda · Secrets Manager · EventBridge",
    accent: "bg-yellow-50",
    tags: ["Lambda", "Secrets Manager", "EventBridge", "KMS", "IAM"],
    github: null,
    bullets: [
      "Built serverless automation to rotate credentials in Secrets Manager using Lambda triggered by EventBridge on a schedule — fully hands-off post-deployment.",
      "Applied least-privilege IAM policies and KMS encryption — zero standing access to secrets.",
    ],
  },
];

const certifications = [
  { src: "./images/aws-certified-cloudops-engineer-associate.png", alt: "AWS Certified CloudOps Engineer Associate", link: "https://www.credly.com/earner/earned/badge/5463f0d0-a9b4-4dd8-a682-ce1365cfd338" },
  { src: "./images/aws-certified-ai-practitioner.png", alt: "AWS Certified AI Practitioner", link: "https://www.credly.com/badges/6e46f52f-87f2-4987-83c7-35d9976c3406/public_url" },
  { src: "./images/aws-certified-solutions-architect-associate.png", alt: "AWS Certified Solutions Architect Associate", link: "https://www.credly.com/badges/22f63035-f5af-4d21-834c-f07f9b9270f1/public_url" },
  { src: "./images/cloud-digital-leader-certification.png", alt: "GCP Cloud Digital Leader", link: "https://www.credly.com/badges/78c4967e-c644-48ac-81f6-01bc9cdb4b47/public_url" },
  { src: "./images/generative-ai-leader-certification.png", alt: "GCP Generative AI Leader", link: "https://www.credly.com/badges/2d83d54d-0155-4d3a-8548-f3fdb00390d1/public_url" },
  { src: "./images/microsoft-certified-fundamentals-badge.svg", alt: "Microsoft Certified Azure Fundamentals", link: "https://learn.microsoft.com/api/credentials/share/en-us/MariaArpithaSagayam-9407/CF7812BB393EBA89?sharingId=E866A35C9F6DED0F" },
  { src: "./images/asset_44psmi_0.png", alt: "Professional Scrum Master I", link: "https://www.credly.com/badges/dbb057a2-2e8b-4774-b6b3-a49438a7f2ca" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Portfolio() {
  if (typeof window !== "undefined" && !document.getElementById("flip-perspective-style")) {
    const style = document.createElement("style");
    style.id = "flip-perspective-style";
    style.innerHTML = `.perspective { perspective: 1000px; }`;
    document.head.appendChild(style);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white text-gray-800 p-6">

      {/* Header */}
      <header className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-2 text-slate-800"
        >
          ☁️ Engineering the sky — from concept to cloud, deployment to delivery.
        </motion.h1>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg leading-relaxed">
          Hi, I'm <strong>Maria Arpitha</strong> — a Cloud & DevOps Engineer
          with 4+ years of AWS production experience, 6 cloud certifications
          and 4 hands-on projects built to production standards.
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

      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-14" />

      {/* ── Tech Toolbox ── */}
      <section className="max-w-5xl mx-auto mb-16 scroll-mt-20" id="toolbox">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Wrench className="text-sky-600" /> Tech Toolbox
        </h2>
        <p className="text-sm text-slate-500 mb-6">Click any card to flip it.</p>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {toolboxItems.map((item, i) => (
            <FlipCard key={i} item={item} />
          ))}
        </div>
      </section>

      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-14" />

      {/* ── Projects ── */}
      <section className="max-w-5xl mx-auto mb-16 scroll-mt-20" id="projects">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          🚀 Featured Projects
        </h2>
        <p className="text-sm text-slate-500 mb-6">Production-equivalent builds — not tutorials.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </section>

      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-14" />

      {/* ── Certifications ── */}
      <section className="max-w-5xl mx-auto mb-16 scroll-mt-20" id="certifications">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Award className="text-yellow-500" /> Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.08, rotate: 0.3 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                src={cert.src}
                alt={cert.alt}
                className="w-36 h-36 rounded-2xl shadow-md bg-white object-contain p-3"
              />
            </a>
          ))}
        </div>
      </section>

      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-14" />

      {/* ── Career ── */}
      <section className="max-w-5xl mx-auto mb-16 scroll-mt-20" id="career">
        <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
          <Briefcase className="text-sky-700" /> Professional Journey & Career Progression
        </h2>

        {/* Self-Directed */}
        <div className="flex items-start gap-8 mb-12">
          <div className="w-56 flex flex-col items-end pr-4 pt-2 shrink-0">
            <div className="text-base font-bold text-right">Cloud & DevOps Engineer</div>
            <div className="text-sm text-sky-700 font-medium text-right mt-1">Self-Directed Cloud Engineering</div>
            <div className="text-xs text-gray-500 mt-1">United States · Remote<br />Mar 2024 – Present</div>
          </div>
          <Card className="flex-1">
            <CardContent className="p-6 space-y-6">
              <div className="text-gray-700">
                Following relocation to the US, dedicated this period to earning 6 cloud
                certifications across AWS, GCP, and Azure — and building 6 production-equivalent
                projects to stay technically current and US market-ready. Fully authorized to
                work in the US (H4 EAD — no sponsorship required).
              </div>
              {[
                { title: "AWS 3-Tier Architecture with Terraform", bullets: ["Production-equivalent 3-tier AWS environment (VPC, ALB, ASG, EC2, RDS) across 2 AZs — fully automated with Terraform, zero SSH exposure via SSM only.", "GitHub Actions CI/CD pipeline for automated build, test, and deployment — infrastructure changes versioned and auditable end-to-end."] },
                { title: "End-to-End DevOps Pipeline — Full-Stack Application", bullets: ["Full DevOps lifecycle: provisioned AWS infrastructure (VPC, EC2, ALB, RDS) via AWS CLI, containerized a Java app with Docker, deployed via automated Jenkins pipelines.", "Every GitHub commit triggers automated build, Docker image push to DockerHub, and zero-touch EC2 deployment."] },
                { title: "End-to-End Infrastructure Automation — Terraform + GitHub Actions", bullets: ["One pipeline to provision, configure, and deploy — Terraform handles IaC, GitHub Actions orchestrates the full workflow.", "Zero manual steps from commit to live infrastructure — mirrors how mature DevOps teams operate at scale."] },
                { title: "Automated CI/CD Pipeline — GitHub Actions + AWS EC2", bullets: ["End-to-end pipeline from code commit to deployed EC2 — CI runs tests, builds app, and packages artifacts; CD deploys automatically on success.", "Zero manual deployment steps — production-ready releases verified live via PM2."] },
                { title: "Serverless Password Rotation — Lambda + Secrets Manager + EventBridge", bullets: ["Automated credential lifecycle — Python Lambda generates and rotates secrets on EventBridge cron schedule, fully hands-off post-deployment.", "Least-privilege IAM enforced (SecretsManagerReadWrite, kms:Decrypt) — KMS-encrypted, zero standing access."] },
                { title: "Static Website Hosting — S3 + CloudFront + Route 53 + ACM", bullets: ["Production-grade static site — private S3 bucket served securely via CloudFront with Origin Access Control (OAC), never publicly exposed.", "End-to-end HTTPS with ACM SSL, Route 53 DNS, custom domain mapped and validated."] },
              ].map((proj, i) => (
                <div key={i}>
                  <div className="font-semibold mb-2 text-sky-700">{proj.title}</div>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Excelsoft */}
        <div className="flex items-start gap-8 mb-12">
          <div className="w-56 flex flex-col items-end pr-4 pt-2 shrink-0">
            <div className="text-base font-bold text-right">Configuration Management Engineer - (Cloud Infrastructure & DevOps)</div>
            <div className="text-sm text-sky-700 font-medium text-right mt-1">Excelsoft Technologies</div>
            <div className="text-xs text-gray-500 mt-1">Mysore, India · Hybrid<br />Jul 2021 – Feb 2023</div>
          </div>
          <Card className="flex-1">
            <CardContent className="p-6 space-y-4">
              <div className="text-gray-700">
                Managed production AWS infrastructure for a global EdTech SaaS platform
                serving clients across India, the US, UK, and Southeast Asia — supporting
                AI-powered learning and assessment products used at scale.
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Provisioned and managed production AWS infrastructure (EC2, ALB, ASG, VPC, RDS, S3, Lambda, CloudWatch) using Terraform and AWS CLI.</li>
                <li>Built and maintained Jenkins CI/CD pipelines for automated application deployments — reducing manual release effort significantly.</li>
                <li>Implemented Ansible-based configuration management for automated deployments and system updates across environments.</li>
                <li>Enforced IAM roles, policies, and security groups following least-privilege principles across all production resources.</li>
                <li>Configured CloudWatch metrics, alarms, and log groups to improve infrastructure reliability and operational visibility.</li>
                <li>Created AMIs and golden images to standardize environments and accelerate disaster recovery.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* IIHT */}
        <div className="flex items-start gap-8 mb-12">
          <div className="w-56 flex flex-col items-end pr-4 pt-2 shrink-0">
            <div className="text-base font-bold text-right">Cloud Infrastructure Trainee</div>
            <div className="text-sm text-sky-700 font-medium text-right mt-1">IIHT Ltd</div>
            <div className="text-xs text-gray-500 mt-1">Bengaluru, India · Remote<br />Mar 2020 – May 2021</div>
          </div>
          <Card className="flex-1">
            <CardContent className="p-6 space-y-4">
              <div className="text-gray-700">
                Gained hands-on AWS foundations while contributing to real internal
                projects and supporting structured cloud training programs for junior engineers.
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Delivered training sessions on AWS core services (EC2, S3, IAM, VPC, RDS, CloudWatch) and cloud security fundamentals.</li>
                <li>Developed hands-on labs, guides, and assessments — accelerating onboarding for new engineering trainees.</li>
                <li>Provisioned EC2 instances, configured IAM roles and policies, and set up CloudWatch monitoring on live internal projects.</li>
                <li>Gained foundational exposure to Terraform, Jenkins, Docker, and GitHub — forming the technical base for subsequent production roles.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* KGISL */}
        <div className="flex items-start gap-8 mb-12">
          <div className="w-56 flex flex-col items-end pr-4 pt-2 shrink-0">
            <div className="text-base font-bold text-right">Junior Associate, Customer Support</div>
            <div className="text-sm text-sky-700 font-medium text-right mt-1">KGISL</div>
            <div className="text-xs text-gray-500 mt-1">Bengaluru, India · On-site<br />Jun 2018 – Feb 2020</div>
          </div>
          <Card className="flex-1">
            <CardContent className="p-6 space-y-4">
              <div className="text-gray-700">
                Delivered customer support to US-based clients — building strong
                cross-cultural communication skills and experience working across time zones.
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Managed and resolved complex client issues in collaboration with internal engineering teams.</li>
                <li>Consistently operated across US time zones — comfortable with async communication and distributed team workflows.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-14" />

      {/* ── Education ── */}
      <section className="max-w-5xl mx-auto mb-16 scroll-mt-20" id="education">
        <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
          🎓 Education
        </h2>
        <div className="flex items-start gap-8">
          <div className="w-56 flex flex-col items-end pr-4 pt-2 shrink-0">
            <div className="text-base font-bold text-right">JSS Academy of Technical Education</div>
            <div className="text-sm text-sky-700 font-medium text-right mt-1">JSSATE, Bengaluru, India</div>
            <div className="text-xs text-gray-500 mt-1">2013 – 2017</div>
          </div>
          <Card className="flex-1">
            <CardContent className="p-6 space-y-2">
              <div className="font-medium text-gray-700">Bachelor of Engineering — Information Science & Engineering</div>
              <div className="text-gray-500 text-sm">Foundation in computer networks, operating systems, database systems, and software engineering.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} Maria Arpitha — engineered with React, Tailwind & a tailwind of joy.
      </footer>
    </div>
  );
}

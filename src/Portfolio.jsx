import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Cloud, Wrench, Briefcase } from "lucide-react";

// FlipCard component
function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective"
      onClick={() => setFlipped(f => !f)}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") setFlipped(f => !f);
      }}
      role="button"
      aria-pressed={flipped}
      style={{ outline: "none" }}
    >
      <motion.div
        className={`relative w-full h-32 md:h-40 ${item.color} border-2 shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-xl`}
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 cursor-pointer select-none"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-3xl">{item.icon}</span>
          <span className="font-semibold text-base text-center">{item.label}</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 cursor-pointer select-none"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-base font-medium text-center opacity-80">
            {item.value}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// Toolbox items
const toolboxItems = [
  {
    icon: "☁️",
    label: "Cloud Platforms",
    value: "AWS (Primary), GCP, Azure",
    color: "bg-sky-50 border-sky-300 text-sky-800",
  },
  {
    icon: "🛠️",
    label: "Infrastructure as Code",
    value: "Terraform",
    color: "bg-emerald-50 border-emerald-300 text-emerald-800",
  },
  {
    icon: "⚙️",
    label: "Configuration Management",
    value: "Ansible",
    color: "bg-orange-50 border-orange-300 text-orange-800",
  },
  {
    icon: "🔄",
    label: "CI/CD Pipelines",
    value: "GitHub Actions, Jenkins",
    color: "bg-indigo-50 border-indigo-300 text-indigo-800",
  },
  {
    icon: "🐳",
    label: "Containers",
    value: "Docker",
    color: "bg-blue-50 border-blue-300 text-blue-800",
  },
  {
    icon: "🔐",
    label: "Security & IAM",
    value: "IAM, Secrets Manager, KMS",
    color: "bg-yellow-50 border-yellow-300 text-yellow-800",
  },
  {
    icon: "📊",
    label: "Monitoring & Logging",
    value: "CloudWatch, CloudTrail",
    color: "bg-pink-50 border-pink-300 text-pink-800",
  },
  {
    icon: "⌨️",
    label: "Scripting & Markup",
    value: "Bash, YAML, JSON",
    color: "bg-violet-50 border-violet-300 text-violet-800",
  },
  {
    icon: "💻",
    label: "Version Control",
    value: "Git, GitHub",
    color: "bg-gray-50 border-gray-300 text-gray-800",
  },
  {
    icon: "🐧",
    label: "Operating System",
    value: "Linux, Windows",
    color: "bg-gray-50 border-gray-300 text-gray-800",
  },
  {
    icon: "🤖",
    label: "AI Tools",
    value: "GitHub Copilot, Claude Code",
    color: "bg-teal-50 border-teal-300 text-teal-800",
  },
];

export default function Portfolio() {
  // Add perspective style once
  if (typeof window !== "undefined" && !document.getElementById("flip-perspective-style")) {
    const style = document.createElement("style");
    style.id = "flip-perspective-style";
    style.innerHTML = `.perspective { perspective: 1000px; }`;
    document.head.appendChild(style);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white text-gray-800 p-6">
      {/* Header */}
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

      {/* Intro */}
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

      {/* Toolbox + Certifications */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Toolbox */}
          <section className="flex-1 scroll-mt-20" id="toolbox">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Wrench className="text-sky-600" /> Tech Toolbox
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {toolboxItems.map((item, i) => (
                <FlipCard key={i} item={item} />
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
                  link:
                    "https://learn.microsoft.com/api/credentials/share/en-us/MariaArpithaSagayam-9407/CF7812BB393EBA89?sharingId=E866A35C9F6DED0F",
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

{/* Career Progression */}
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
      <CardContent className="p-6 space-y-6">

        {/* Opening statement */}
        <div className="text-gray-700">
          Following relocation to the US, dedicated this period to earning 6 cloud 
          certifications across AWS, GCP, and Azure — and building 6 production-equivalent 
          projects to stay technically current and US market-ready. Fully authorized to 
          work in the US (H4 EAD — no sponsorship required).
        </div>

        {/* Project 1 — 3-Tier Architecture */}
        <div>
          <div className="font-semibold mb-2 text-sky-700">
            AWS 3-Tier Architecture with Terraform
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Production-equivalent 3-tier AWS environment (VPC, ALB, ASG, EC2, RDS) 
            across 2 AZs — fully automated with Terraform, zero SSH exposure via SSM only.</li>
            <li>GitHub Actions CI/CD pipeline for automated build, test, and deployment — 
            infrastructure changes versioned and auditable end-to-end.</li>
          </ul>
        </div>

        {/* Project 2 — Full DevOps Pipeline */}
        <div>
          <div className="font-semibold mb-2 text-sky-700">
            End-to-End DevOps Pipeline — Full-Stack Application
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Full DevOps lifecycle: provisioned AWS infrastructure (VPC, EC2, ALB, RDS) 
            via AWS CLI, containerized a Java app with Docker, deployed via automated 
            Jenkins pipelines.</li>
            <li>Every GitHub commit triggers automated build, Docker image push to 
            DockerHub, and zero-touch EC2 deployment.</li>
          </ul>
        </div>

        {/* Project 3 — Infrastructure Automation */}
        <div>
          <div className="font-semibold mb-2 text-sky-700">
            End-to-End Infrastructure Automation — Terraform + GitHub Actions
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>One pipeline to provision, configure, and deploy — Terraform handles IaC, 
            GitHub Actions orchestrates the full workflow.</li>
            <li>Zero manual steps from commit to live infrastructure — mirrors how mature 
            DevOps teams operate at scale.</li>
          </ul>
        </div>

        {/* Project 4 — CI/CD Pipeline */}
        <div>
          <div className="font-semibold mb-2 text-sky-700">
            Automated CI/CD Pipeline — GitHub Actions + AWS EC2
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>End-to-end pipeline from code commit to deployed EC2 — CI runs tests, 
            builds app, and packages artifacts; CD deploys automatically on success.</li>
            <li>Zero manual deployment steps — production-ready releases verified 
            live via PM2.</li>
          </ul>
        </div>

        {/* Project 5 — Password Rotation */}
        <div>
          <div className="font-semibold mb-2 text-sky-700">
            Serverless Password Rotation — Lambda + Secrets Manager + EventBridge
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Automated credential lifecycle — Python Lambda generates and rotates 
            secrets on EventBridge cron schedule, fully hands-off post-deployment.</li>
            <li>Least-privilege IAM enforced (SecretsManagerReadWrite, kms:Decrypt) — 
            KMS-encrypted, zero standing access.</li>
          </ul>
        </div>

        {/* Project 6 — Static Website */}
        <div>
          <div className="font-semibold mb-2 text-sky-700">
            Static Website Hosting — S3 + CloudFront + Route 53 + ACM
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Production-grade static site — private S3 bucket served securely via 
            CloudFront with Origin Access Control (OAC), never publicly exposed.</li>
            <li>End-to-end HTTPS with ACM SSL, Route 53 DNS, custom domain mapped 
            and validated.</li>
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

{/* Education */}
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
      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} Maria Arpitha — engineered with React, Tailwind & a tailwind of joy.
      </footer>
    </div>
  );
}

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
    value: "AWS, GCP, Azure",
    color: "bg-sky-50 border-sky-300 text-sky-800",
  },
  {
    icon: "🛠️",
    label: "Infrastructure as Code",
    value: "Terraform",
    color: "bg-emerald-50 border-emerald-300 text-emerald-800",
  },
  {
    icon: "🔄",
    label: "CI/CD Pipelines",
    value: "Jenkins, GitHub Actions, AWS CodeDeploy",
    color: "bg-indigo-50 border-indigo-300 text-indigo-800",
  },
  {
    icon: "🔐",
    label: "Security & Governance",
    value: "IAM, Shared Responsibility Model",
    color: "bg-yellow-50 border-yellow-300 text-yellow-800",
  },
  {
    icon: "📊",
    label: "Monitoring & Logging",
    value: "Amazon CloudWatch, CloudTrail",
    color: "bg-pink-50 border-pink-300 text-pink-800",
  },
  {
    icon: "💻",
    label: "Developer Tools",
    value: "Git, GitHub, JIRA",
    color: "bg-gray-50 border-gray-300 text-gray-800",
  },
  {
    icon: "⌨️",
    label: "Scripting",
    value: "Bash, YAML, JSON",
    color: "bg-gray-50 border-gray-300 text-gray-800",
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
          Hello! I'm <strong>Maria Arpitha</strong>, a Cloud and DevOps Engineer passionate about architecting,
          automating, and optimizing cloud-native environments. I enjoy designing systems that are scalable, reliable, and easy to operate, and I continually refine my craft through hands‑on projects and real‑world problem‑solving.
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

  {/* Cloud & DevOps Engineer */}
  <div className="flex items-start gap-8 mb-12">
    <div className="w-64 flex flex-col items-end pr-4 pt-2">
      <div className="text-lg font-bold text-right">Cloud & DevOps Engineer</div>
      <div className="text-xs text-gray-500 mt-1">
      United States<br />2023 – Present
      </div>
    </div>

    <Card className="flex-1">
      <CardContent className="p-6 space-y-6">
        <div className="text-gray-700">
          Focused on architecting and automating production-grade cloud systems with strong
          emphasis on security, scalability, and operational excellence.
        </div>
        
        {/* AWS Serverless CRUD API Project */}
        <div>
          <div className="font-semibold mb-2 text-brown-600">AWS Serverless CRUD API Project</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Built a fully serverless REST API using AWS Lambda, API Gateway, and DynamoDB to support complete CRUD operations.</li>
            <li>Implemented secure IAM roles, structured data models, and validated all endpoints using Postman and DynamoDB results.</li>
          </ul>
        </div>

        {/* 3-Tier AWS Project */}
        <div>
          <div className="font-semibold mb-2 text-blue-600">3‑Tier AWS Project</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Architected and implemented a production-style AWS 3-tier environment using Terraform (VPC, ALB, EC2, RDS).</li>
            <li>Enabled secure private-subnet application hosting via SSM and PM2.</li>
            <li>Implemented automated zero-touch deployments using GitHub Actions, S3, and SSM.</li>
          </ul>
        </div>

        {/* Serverless Password Rotation */}
        <div>
          <div className="font-semibold mb-2 text-green-600">Serverless Password Rotation</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Developed an automated password-rotation system using AWS Lambda, Secrets Manager, and EventBridge.</li>
            <li>Implemented secure, KMS-encrypted secret rotation with least-privilege IAM.</li>
            <li>Validated scheduled end-to-end rotation execution.</li>
          </ul>
        </div>

        {/* Automated CI/CD Pipeline */}
        <div>
          <div className="font-semibold mb-2 text-purple-600">Automated CI/CD Pipeline</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Built a fully automated CI/CD pipeline using GitHub Actions and AWS EC2.</li>
            <li>Implemented CI stages for tests, builds, and artifact packaging.</li>
            <li>Delivered zero-touch deployments to EC2 for consistent, production-ready releases.</li>
          </ul>
        </div>

        {/* Static Website Hosting */}
        <div>
          <div className="font-semibold mb-2 text-yellow-600">Static Website Hosting on AWS</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Architected and deployed a production-ready static site using S3, CloudFront, Route 53, IAM, and CloudWatch.</li>
            <li>Implemented HTTPS, caching strategies, monitoring, and cost-optimized storage.</li>
          </ul>
        </div>

        {/* Full DevOps Pipeline */}
        <div>
          <div className="font-semibold mb-2 text-red-600">Full DevOps Pipeline for a Full‑Stack Application</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Designed and deployed a complete CI/CD and infrastructure automation workflow using GitHub Actions, Terraform, AWS CLI, EC2, ALB, RDS MySQL, and CloudWatch.</li>
            <li>Built a custom VPC, provisioned compute resources, configured load balancing, and automated deployments.</li>
            <li>Delivered a scalable, production-ready environment with end-to-end automation.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* Excelsoft Technologies */}
  <div className="flex items-start gap-8 mb-12">
    <div className="w-64 flex flex-col items-end pr-4 pt-2">
      <div className="text-xl font-semibold text-right">Cloud Support Engineer</div>
      <div className="text-xs text-gray-500 font-normal mt-1">
        Excelsoft Technologies - Mysore<br />Jul 2021 - Feb 2023
      </div>
    </div>

    <Card className="flex-1">
      <CardContent className="p-6 space-y-4">
        <div className="mb-2">
          Worked on designing, provisioning, and maintaining cloud infrastructure for large-scale online examination platforms.
        </div>

        <ul className="list-disc pl-6 space-y-1">
          <li>Engineered scalable and reliable cloud infrastructure to support high-availability exam systems.</li>
          <li>Automated provisioning AWS core services like VPC, EC2, S3, RDS and Lambda using parameterized Terraform templates.</li>
          <li>Optimized resource utilization and performance through monitoring and tuning.</li>
          <li>Implemented IAM roles, policies, and least‑privilege access patterns.</li>
          <li>Provisioned CloudWatch metrics, dashboards, and alarms as code.</li>
          <li>Troubleshot cross-stack issues spanning infrastructure, application, and security layers.</li>
          <li>Maintained AWS infrastructure code in GitHub for version control and automation.</li>
        </ul>
      </CardContent>
    </Card>
  </div>

  {/* IIHT */}
  <div className="flex items-start gap-8 mb-12">
    <div className="w-64 flex flex-col items-end pr-4 pt-2">
      <div className="text-xl font-semibold text-right">AWS Cloud Trainer</div>
      <div className="text-xs text-gray-500 font-normal mt-1">
        IIHT – Bangalore<br />Mar 2020 – May 2021
      </div>
    </div>

    <Card className="flex-1">
      <CardContent className="p-6 space-y-4">
        <div className="mb-2">
          Focused on knowledge sharing and building strong cloud fundamentals for aspiring engineers.
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>Led AWS training programs covering core cloud concepts and services.</li>
          <li>Designed and delivered hands-on labs.</li>
          <li>Collaborated with senior engineers to simplify technical concepts.</li>
          <li>Built Jenkins‑based CI/CD pipelines.</li>
          <li>Gained exposure to Docker for packaging applications.</li>
        </ul>
      </CardContent>
    </Card>
  </div>

  {/* KGISL */}
  <div className="flex items-start gap-8 mb-12">
    <div className="w-64 flex flex-col items-end pr-4 pt-2">
      <div className="text-xl font-semibold text-right">Junior Associate</div>
      <div className="text-xs text-gray-500 font-normal mt-1">
        KGISL – Bangalore<br />Jun 2017 – Feb 2020
      </div>
    </div>

    <Card className="flex-1">
      <CardContent className="p-6 space-y-4">
        <div className="mb-2">
          Played a key role in customer support, ensuring quick issue resolution and a positive client experience.
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provided customer support to U.S. clients.</li>
          <li>Collaborated with teams to escalate issues and improve service delivery.</li>
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
        JSS Academy of Technical Education (JSSATE)
      </div>
      <div className="text-xs text-gray-500 font-normal mt-1">
        Bangalore, India<br />2013 – 2017
      </div>
    </div>

    <Card className="flex-1">
      <CardContent className="p-6 space-y-4">
        <div className="mb-2">
          Bachelors in Information Science & Engineering
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

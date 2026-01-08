import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Cloud, Wrench, Briefcase } from "lucide-react";

// FlipCard component for toolbox
function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="perspective"
      onClick={() => setFlipped(f => !f)}
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setFlipped(f => !f); }}
      role="button"
      aria-pressed={flipped}
      style={{ outline: 'none' }}
    >
      <motion.div
        className={`relative w-full h-32 md:h-40 ${item.color} border-2 shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-xl`}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 cursor-pointer select-none"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-3xl">{item.icon}</span>
          <span className="font-semibold text-base text-center">{item.label}</span>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 cursor-pointer select-none"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-base font-medium text-center opacity-80">{item.value}</span>
        </div>
      </motion.div>
    </div>
  );
}

// Toolbox items array
const toolboxItems = [
  {
    icon: "🚀",
    label: "Cloud Platforms",
    value: "AWS, GCP, Azure",
    color: "bg-sky-50 border-sky-300 text-sky-800"
  },
  {
    icon: "🔧",
    label: "Infrastructure as Code",
    value: "Terraform, CloudFormation",
    color: "bg-emerald-50 border-emerald-300 text-emerald-800"
  },
  {
    icon: "🌀",
    label: "CI/CD Pipelines",
    value: "Jenkins, GitHub Actions, AWS CodeDeploy",
    color: "bg-indigo-50 border-indigo-300 text-indigo-800"
  },
  {
    icon: "🛡️",
    label: "Security & Governance",
    value: "IAM, Shared Responsibility Model",
    color: "bg-yellow-50 border-yellow-300 text-yellow-800"
  },
  {
    icon: "📈",
    label: "Monitoring & Logging",
    value: "Amazon CloudWatch",
    color: "bg-pink-50 border-pink-300 text-pink-800"
  },
  {
    icon: "🧰",
    label: "Developer Tools",
    value: "Git, GitHub, JIRA",
    color: "bg-gray-50 border-gray-300 text-gray-800"
  },
];

export default function Portfolio() {
  // Add perspective utility for flip effect (only once)
  if (typeof window !== 'undefined' && !document.getElementById('flip-perspective-style')) {
    const style = document.createElement('style');
    style.id = 'flip-perspective-style';
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
          ☁️ Engineering the sky—from concept to cloud, deployment to delivery.
        </motion.h1>
        {/* <p className="italic text-gray-600">
          “”
        </p> */}
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg leading-relaxed">
          Hello! I’m <strong>Maria Arpitha</strong>, a Cloud Engineer passionate about architecting, automating, and optimizing cloud-native environments. I’m exploring new horizons—pursuing Scrum Master certifications, diving into AI innovations, and expanding my expertise toward cloud-agnostic architectures. I aim to transform complex challenges into elegant, scalable solutions.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-12" />


      {/* Tech Toolbox & Certifications Side by Side */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Tech Toolbox */}
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
                { src: "./images/aws-certified-ai-practitioner.png", alt: "AWS Certified AI Practitioner", link: "https://www.credly.com/badges/6e46f52f-87f2-4987-83c7-35d9976c3406/public_url" },
                { src: "./images/aws-certified-solutions-architect-associate.png", alt: "AWS Certified Solutions Architect Associate", link: "https://www.credly.com/badges/22f63035-f5af-4d21-834c-f07f9b9270f1/public_url" },
                { src: "./images/cloud-digital-leader-certification.png", alt: "GCP Cloud Digital Leader", link: "https://www.credly.com/badges/78c4967e-c644-48ac-81f6-01bc9cdb4b47/public_url" },
                { src: "./images/generative-ai-leader-certification.png", alt: "GCP Generative AI Leader", link: "https://www.credly.com/badges/2d83d54d-0155-4d3a-8548-f3fdb00390d1/public_url" },
                { src: "./images/microsoft-certified-fundamentals-badge.svg", alt: "Microsoft Certified Azure Fundamentals", link: "https://learn.microsoft.com/api/credentials/share/en-us/MariaArpithaSagayam-9407/CF7812BB393EBA89?sharingId=E866A35C9F6DED0F" },
                { src: "./images/asset_44psmi_0.png", alt: "Professional Scrum Master™ I Certification", link: "https://www.credly.com/badges/dbb057a2-2e8b-4774-b6b3-a49438a7f2ca" }
              ].map((cert, i) => (
                <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={cert.alt}>
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
          <div className="flex flex-col gap-12">
            {/* Cloud Engineer — Independent Projects & Certifications */}
            <div className="flex items-start gap-8">
              {/* Left: Heading and Time */}
              <div className="w-64 flex flex-col items-end pr-4 pt-2">
                <div className="text-lg font-bold text-right">☁️ Cloud Engineer — Independent Projects & Certifications</div>
                <div className="text-xs text-gray-500 font-normal mt-1">2023 – Present</div>
              </div>
              {/* Right: Content */}
              <Card className="flex-1">
                <CardContent className="p-6">
                  <div className="mb-2">Focused on building production-grade cloud systems end to end, with an emphasis on automation, security, and operational clarity.</div>
                  <div className="font-semibold mb-1">Static Website Hosting on AWS</div>
                  <ul className="list-disc pl-6 mb-3">
                    <li>Designed and deployed a production-ready static website using S3, CloudFront, Route 53, IAM, and CloudWatch.</li>
                    <li>Implemented HTTPS, caching strategies, monitoring, and cost-optimized storage to mirror real-world deployment standards.</li>
                  </ul>
                  <div className="font-semibold mb-1">End-to-End DevOps Pipeline for a Full-Stack Application</div>
                  <ul className="list-disc pl-6 mb-3">
                    <li>Architected and automated a complete CI/CD and infrastructure workflow using GitHub Actions, Terraform, AWS CLI, EC2, ALB, RDS (MySQL), and CloudWatch.</li>
                    <li>Built a custom VPC, provisioned compute and networking resources, configured load balancing, and automated deployments to support a scalable, production-ready environment.</li>
                  </ul>
                  <div className="font-semibold mb-1">Continuous Skill Development</div>
                  <ul className="list-disc pl-6">
                    <li>Strengthened hands-on expertise across AWS, Terraform, CI/CD pipelines, serverless concepts, monitoring, and cloud security.</li>
                    <li>Earned multi-cloud certifications (AWS, Azure, GCP) along with Scrum Master I, reflecting a strong commitment to continuous learning and professional growth.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Excelsoft Technologies — Mysore */}
            <div className="flex items-start gap-8">
              <div className="w-64 flex flex-col items-end pr-4 pt-2">
                <div className="text-xl font-semibold text-right">Cloud Infrastructure Engineer</div>
                <div className="text-xs text-gray-500 font-normal mt-1">🏢 Excelsoft Technologies — Mysore<br />Jul 2021 – Feb 2023</div>
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <div className="mb-2">Worked on designing and maintaining cloud infrastructure for large-scale online examination platforms.</div>
                  <ul className="list-disc pl-6">
                    <li>Engineered scalable and reliable cloud infrastructure to support high-availability exam systems</li>
                    <li>Automated infrastructure provisioning and deployments using Terraform, improving consistency and uptime</li>
                    <li>Optimized resource utilization and performance through monitoring and tuning</li>
                    <li>Troubleshot cross-stack issues spanning infrastructure, application, and security layers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* IIHT — Bangalore */}
            <div className="flex items-start gap-8">
              <div className="w-64 flex flex-col items-end pr-4 pt-2">
                <div className="text-xl font-semibold text-right">AWS Cloud Trainer</div>
                <div className="text-xs text-gray-500 font-normal mt-1">🎓 IIHT — Bangalore<br />Mar 2020 – May 2021</div>
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <div className="mb-2">Focused on knowledge sharing and building strong cloud fundamentals for aspiring engineers.</div>
                  <ul className="list-disc pl-6">
                    <li>Led AWS training programs covering core cloud concepts and services</li>
                    <li>Designed and delivered hands-on labs to bridge theory with real-world cloud use cases</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        © {new Date().getFullYear()} Maria Arpitha — engineered with React, Tailwind & a tailwind of joy.
      </footer>
    </div>
  );
}

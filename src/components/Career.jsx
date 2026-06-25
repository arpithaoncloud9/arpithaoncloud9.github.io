import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const entries = [
  {
    title: "Cloud & DevOps Engineer",
    company: "Self-Directed Cloud Engineering",
    location: "United States · Remote",
    period: "Mar 2024 – Present",
    dot: "bg-sky-500 ring-sky-200",
    content: (
      <div className="space-y-5">
        <p className="text-sm text-gray-600 leading-relaxed">
          Following relocation to the US, used this period to earn{" "}
          <strong className="text-gray-800">6 cloud certifications</strong> across AWS, GCP, and Azure — and build{" "}
          <strong className="text-gray-800">6 production-equivalent projects</strong> to stay technically
          current and US market-ready. Fully authorized to work in the US (H4 EAD — no sponsorship required).
        </p>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Certifications earned
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              "AWS CloudOps Engineer – Associate",
              "AWS Solutions Architect – Associate",
              "AWS AI Practitioner",
              "GCP Cloud Digital Leader",
              "GCP Generative AI Leader",
              "Azure Fundamentals (AZ-900)",
            ].map((c, i) => (
              <span key={i} className="text-[11px] bg-yellow-50 border border-yellow-200 text-yellow-800 px-2.5 py-0.5 rounded-full font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Projects built
          </div>
          <ul className="space-y-1.5">
            {[
              "AWS 3-Tier Architecture — EKS Migration with Terraform, Docker, GitHub Actions, CloudWatch",
              "End-to-End DevOps Pipeline — Jenkins, Docker, AWS (VPC · EC2 · ALB · RDS)",
              "Infrastructure Automation — Terraform + GitHub Actions, zero manual steps",
              "Serverless Credential Rotation — Lambda, Secrets Manager, EventBridge, KMS",
              "Automated CI/CD Pipeline — GitHub Actions + EC2, PM2 zero-touch deploys",
              "Secure Static Website — S3, CloudFront OAC, ACM SSL, Route 53",
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Configuration Management Engineer",
    company: "Excelsoft Technologies",
    location: "Mysore, India · Hybrid",
    period: "Jul 2021 – Feb 2023",
    dot: "bg-indigo-500 ring-indigo-200",
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Managed production AWS infrastructure for a global EdTech SaaS platform serving clients
          across India, the US, UK, and Southeast Asia — supporting AI-powered learning and
          assessment products used at scale.
        </p>
        <ul className="space-y-1.5">
          {[
            "Provisioned and managed production AWS infrastructure (EC2, ALB, ASG, VPC, RDS, S3, Lambda, CloudWatch) using Terraform and AWS CLI.",
            "Built and maintained Jenkins CI/CD pipelines for automated application deployments — reducing manual release effort significantly.",
            "Implemented Ansible-based configuration management for automated deployments and system updates across environments.",
            "Enforced IAM roles, policies, and security groups following least-privilege principles across all production resources.",
            "Configured CloudWatch metrics, alarms, and log groups to improve infrastructure reliability and operational visibility.",
            "Created AMIs and golden images to standardize environments and accelerate disaster recovery.",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Cloud Infrastructure Trainee",
    company: "IIHT Ltd",
    location: "Bengaluru, India · Remote",
    period: "Mar 2020 – May 2021",
    dot: "bg-emerald-500 ring-emerald-200",
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Gained hands-on AWS foundations while contributing to real internal projects and
          supporting structured cloud training programs for junior engineers.
        </p>
        <ul className="space-y-1.5">
          {[
            "Delivered training sessions on AWS core services (EC2, S3, IAM, VPC, RDS, CloudWatch) and cloud security fundamentals including the Shared Responsibility Model.",
            "Developed hands-on labs, guides, and assessments — accelerating onboarding for new engineering trainees.",
            "Provisioned EC2 instances, configured IAM roles and policies, and set up CloudWatch monitoring on live internal projects.",
            "Gained foundational exposure to Terraform, Jenkins, Docker, and GitHub — forming the technical base for subsequent production roles.",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Junior Associate, Customer Support",
    company: "KGISL",
    location: "Bengaluru, India · On-site",
    period: "Jun 2018 – Feb 2020",
    dot: "bg-amber-500 ring-amber-200",
    content: (
      <div className="space-y-3 text-sm text-gray-600">
        <p>
          Delivered customer support to US-based clients — building strong cross-cultural
          communication skills and experience working across time zones.
        </p>
        <ul className="space-y-1.5">
          {[
            "Managed and resolved complex client issues in collaboration with internal engineering teams — building cross-functional communication skills directly relevant to remote US work environments.",
            "Consistently operated across US time zones — comfortable with async communication and distributed team workflows.",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export default function Career() {
  return (
    <section className="scroll-mt-4 mb-10" id="career">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-gray-500 flex items-center gap-2 uppercase tracking-widest">
          <Briefcase size={14} className="text-sky-500" /> Professional Journey
        </h2>
        <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
          {entries.length} roles
        </span>
      </div>

      {/* Timeline */}
      <div className="relative ml-2">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-3 bottom-6 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-300 to-gray-200" />

        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08 }}
            className="relative pl-10 mb-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${entry.dot} border-2 border-white shadow-md ring-2`} />

            {/* Role meta */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
              <span className="font-bold text-gray-800 text-sm">{entry.title}</span>
              <span className="text-sky-600 font-medium text-xs">@ {entry.company}</span>
              <span className="text-[11px] font-mono text-gray-400 ml-auto">{entry.period}</span>
            </div>
            <div className="text-[11px] text-gray-400 mb-3">{entry.location}</div>

            {/* Card */}
            <Card className="shadow-sm bg-white/90 backdrop-blur-sm border-gray-200">
              <CardContent className="p-5">
                {entry.content}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

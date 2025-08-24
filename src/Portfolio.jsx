import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import { Award, Cloud, Wrench, Briefcase } from "lucide-react";

export default function Portfolio() {
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
          Hey there! I’m <strong>Maria Arpitha</strong>, a Cloud Engineer passionate about architecting, automating, and optimizing cloud-native environments. I’m exploring new horizons—pursuing Scrum Master certifications, diving into AI innovations, and expanding my expertise toward cloud-agnostic architectures. I aim to transform complex challenges into elegant, scalable solutions.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-12" />

      {/* Certifications */}
      <section className="mb-16" id="certifications">
        <h2 className="text-2xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <Award className="text-yellow-500" /> Certifications
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { src: "/images/aws-certified-ai-practitioner.png", alt: "AWS Certified AI Practitioner", link: "https://www.credly.com/badges/6e46f52f-87f2-4987-83c7-35d9976c3406/public_url" },
            { src: "/images/aws-certified-solutions-architect-associate.png", alt: "AWS Certified Solutions Architect Associate", link: "https://www.credly.com/badges/22f63035-f5af-4d21-834c-f07f9b9270f1/public_url" },
            { src: "/images/cloud-digital-leader-certification.png", alt: "GCP Cloud Digital Leader", link: "https://www.credly.com/badges/78c4967e-c644-48ac-81f6-01bc9cdb4b47/public_url" },
            { src: "/images/generative-ai-leader-certification.png", alt: "GCP Generative AI Leader", link: "https://www.credly.com/badges/2d83d54d-0155-4d3a-8548-f3fdb00390d1/public_url" },
            { src: "/images/microsoft-certified-fundamentals-badge.svg", alt: "Microsoft Certified Azure Fundamentals", link: "https://learn.microsoft.com/api/credentials/share/en-us/MariaArpithaSagayam-9407/CF7812BB393EBA89?sharingId=E866A35C9F6DED0F" },
          ].map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={cert.alt}>
              <motion.img
                whileHover={{ scale: 1.08, rotate: 0.3 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                src={cert.src}
                alt={cert.alt}
                className="w-24 h-24 rounded-xl shadow-md bg-white object-contain p-1"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-12" />

      {/* Tech Toolbox */}
      <section className="mb-16" id="toolbox">
        <h2 className="text-2xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <Wrench className="text-sky-600" /> Tech Toolbox
        </h2>
        <div className="max-w-2xl mx-auto grid gap-4">
          {[
            "🚀 Cloud Platforms: AWS, GCP, Azure",
            "🔧 Infrastructure as Code: Terraform, CloudFormation",
            "🌀 CI/CD Pipelines: Jenkins, AWS CodeDeploy",
            "🛡️ Security & Governance: IAM, Shared Responsibility Model",
            "📈 Monitoring & Logging: Amazon CloudWatch",
            "🧰 Developer Tools: Git, GitHub, JIRA",
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-4">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-slate-200 max-w-4xl mx-auto mb-12" />

      {/* Career Journey */}
      <section id="career">
        <h2 className="text-2xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <Briefcase className="text-sky-700" /> Career Journey
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">👩‍💻 Excelsoft Technologies — Mysore</h3>
              <p className="font-medium">Cloud Infrastructure Engineer (Jul 2021 – Feb 2023)</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Engineered scalable cloud infrastructure for exam platforms</li>
                <li>Automated deployments via Terraform and improved uptime</li>
                <li>Optimized resource usage and performance metrics</li>
                <li>Troubleshot cross-stack integration and security issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">🎓 IIHT — Bangalore</h3>
              <p className="font-medium">AWS Cloud Trainer (Mar 2020 – May 2021)</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Led AWS learning programs for aspiring cloud engineers</li>
                <li>Developed cloud training curriculum and hands-on labs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        © {new Date().getFullYear()} Maria Arpitha — engineered with React, Tailwind & a tailwind of joy.
      </footer>
    </div>
  );
}

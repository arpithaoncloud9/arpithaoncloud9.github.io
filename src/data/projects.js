export const projects = [
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

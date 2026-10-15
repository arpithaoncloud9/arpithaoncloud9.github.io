export const projects = [
  {
    title: "AWS 3-Tier Production Project — EKS Migration",
    tags: ["Terraform", "Docker", "GitHub Actions", "Kubernetes", "CloudWatch", "EKS", "ECR"],
    github: "https://github.com/arpithaoncloud9/terraform-three-tier-infra",
    bullets: [
      "[Provisioned 3‑tier AWS architecture](ca://s?q=Explain_AWS_3_tier_architecture) — VPC, ALB, EKS, RDS MySQL, IAM across multi‑AZ using Terraform with zero manual steps.",
      "Built GitHub Actions CI/CD pipeline — terraform plan on PR, apply on merge, Docker build, ECR push, kubectl rollout.",
      "Containerized Node.js application — Docker image pushed to ECR using IAM role authentication (no stored credentials).",
      "Migrated compute from EC2/ASG to EKS — Deployment, Service, HPA, Kubernetes Secret for DB credentials.",
      "Implemented CloudWatch observability — alarms, log streams, SNS alerts, custom metrics (RequestCount, Latency, ErrorCount).",
      "Reduced deployment time   — from 5–10 min (ASG refresh) to ~30 sec (kubectl rollout) with zero downtime.",
    ],
    accent: "from-sky-500 to-indigo-600",
  },
  {
    title: "Zero‑Downtime Container Deployments — ECS Fargate",
    tags: ["Docker", "ECR", "ECS Fargate", "ALB", "IAM", "CloudWatch"],
    github: "https://github.com/arpithaoncloud9/ecs-fargate-lab",
    bullets: [
      "Containerized application with Docker and pushed images to ECR with scan‑on‑push enabled.",
      "Deployed workloads on ECS Fargate behind ALB across multiple AZs with target group health checks.",
      "Achieved zero‑downtime rolling updates using ECS deployment circuit breaker and automatic rollback.",
      "Configured IAM execution roles for secure container operations and least‑privilege access.",
      "Enabled CloudWatch logging for container logs, performance metrics, and operational visibility."
    ],
    accent: "from-orange-500 to-red-600",
  },
  {
    title: "Secure Static Website",
    tags: ["S3", "CloudFront", "ACM", "Route 53", "IAM"],
    github: "https://github.com/arpithaoncloud9/aws-static-site-demo",
    github: null,
    bullets: [
      "Hosted static website on private S3 bucket using CloudFront Origin Access Control (OAC) for secure content delivery.",
      "Configured ACM SSL + Route 53 for custom domain with full HTTPS and no public S3 access.",
    ],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Serverless Credential Rotation",
    tags: ["Lambda", "Secrets Manager", "EventBridge", "IAM", "KMS"],
    github: "https://github.com/arpithaoncloud9/lambda-secretsmanager-password-rotation",
    bullets: [
      "Built automated credentials rotation using Lambda triggered by EventBridge schedules.",
      "Applied least-privilege IAM policies ensuring zero standing access to secrets.",
    ],
    accent: "from-violet-500 to-purple-700",
  },
];

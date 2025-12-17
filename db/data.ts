// db/data.ts
// All products data – matches schema.ts structure

export const allProducts = [
  {
    id:1,
    name: "Modern Full Stack Next.js Course",
    slug: "modern-full-stack-nextjs-course",
    tagline: "Learn to build modern full stack applications with Next.js",
    description:
      "Learn to build modern full stack applications with Next.js 16, Tailwind CSS, Drizzle ORM, Neon, and Clerk authentication. Build and deploy a production-ready app from scratch.",
    websiteUrl: "https://nextjscourse.dev",
    tags: ["Next.js", "Tailwind CSS", "Full Stack", "Drizzle", "Neon"],
    voteCount: 120,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "john@example.com",
    userId: "user_123456",
    organizationId: "org_nextjs_course",
  },

  {
    id:2,
    name: "TaskFlow Pro",
    slug: "taskflow-pro",
    tagline: "Manage projects like never before",
    description:
      "Streamline your team’s workflow with intelligent task management, automated notifications, and real-time collaboration features.",
    websiteUrl: "https://taskflowpro.example.com",
    tags: ["Productivity", "SaaS", "Collaboration"],
    voteCount: 85,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "jane@example.com",
    userId: "user_789012",
    organizationId: "org_taskflow",
  },

  {
    id:3,
    name: "UI Spark",
    slug: "ui-spark",
    tagline: "Beautiful UI components for modern apps",
    description:
      "UI Spark provides a growing collection of reusable, accessible UI components built with Tailwind CSS and optimized for modern frameworks.",
    websiteUrl: "https://uispark.dev",
    tags: ["UI", "Tailwind", "Components", "Design"],
    voteCount: 42,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    approvedAt: null,
    status: "pending" as const,
    submittedBy: "alex@example.com",
    userId: "user_456789",
    organizationId: null,
  },

  {
    id:4,
    name: "API Watch",
    slug: "api-watch",
    tagline: "Monitor your APIs with confidence",
    description:
      "API Watch helps developers monitor uptime, latency, and errors across their APIs with real-time alerts and detailed analytics.",
    websiteUrl: "https://apiwatch.dev",
    tags: ["API", "Monitoring", "Backend", "DevOps"],
    voteCount: 63,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "sam@example.com",
    userId: "user_112233",
    organizationId: "org_apiwatch",
  },
    {
    id:5,
    name: "Dorium",
    slug: "dorium-react-estate",
    tagline: "Real Estate mobile app.",
    description:
      "This is the mobile application for the real estate.",
    websiteUrl: "https://apiwatch.dev",
    tags: ["API", "Monitoring", "Backend", "DevOps"],
    voteCount: 340,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "sam@example.com",
    userId: "user_112233",
    organizationId: "org_apiwatch",
  },
];

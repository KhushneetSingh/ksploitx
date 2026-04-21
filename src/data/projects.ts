import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "autolingo",
    slug: "autolingo",
    codename: "AUTOLINGO",
    title: "AutoLingo",
    description:
      "Dart/Flutter multilingual CLI package published on pub.dev. Automates ARB file generation and translation management for Flutter internationalization workflows.",
    longDescription:
      "AutoLingo is a developer-first CLI tool built in Dart that streamlines the tedious process of managing multilingual support in Flutter applications. It auto-generates ARB (Application Resource Bundle) files, handles translation key extraction, and provides a seamless workflow for maintaining translations across multiple locales. Published and maintained on pub.dev.",
    tech: ["Dart", "Flutter", "ARB", "CLI", "pub.dev"],
    githubUrl: "https://github.com/KhushneetSingh",
    liveUrl: "https://pub.dev/packages/autolingo",
    featured: true,
    status: "DEPLOYED",
  },
  {
    id: "data-sanity",
    slug: "data-sanity",
    codename: "DATA_SANITY",
    title: "Data Sanity",
    description:
      "RAG-ready AI dataset pipeline with LLM-powered data cleaning and Exa semantic search integration. Transforms raw data into high-quality, vectorized datasets.",
    longDescription:
      "Data Sanity is an end-to-end data preparation pipeline designed for AI/ML workflows. It leverages LangChain for intelligent data cleaning, FastAPI for the serving layer, pgvector for efficient vector storage, and Exa's semantic search API for contextual data enrichment. The pipeline ensures datasets are RAG-ready with minimal manual intervention.",
    tech: ["Python", "LangChain", "FastAPI", "pgvector", "Exa"],
    githubUrl: "https://github.com/KhushneetSingh",
    featured: true,
    status: "DEPLOYED",
  },
  {
    id: "pi-sentinel",
    slug: "pi-sentinel",
    codename: "PI_SENTINEL",
    title: "Pi Sentinel",
    description:
      "Raspberry Pi-based network vulnerability scanner with live CVE matching. Real-time threat detection powered by WebSockets and Aircrack-ng integration.",
    longDescription:
      "Pi Sentinel transforms a Raspberry Pi into a portable network security auditing station. It performs automated vulnerability scanning, cross-references findings with live CVE databases, and streams results in real-time via WebSockets. The Flask-based dashboard provides an intuitive interface for monitoring network health and identifying attack vectors.",
    tech: ["Python", "Flask", "Aircrack-ng", "WebSockets", "Raspberry Pi"],
    githubUrl: "https://github.com/KhushneetSingh",
    featured: true,
    status: "DEPLOYED",
  },
];

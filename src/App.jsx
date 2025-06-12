import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download,
  ExternalLink,
  Server,
  Cloud,
  Database,
  Shield,
  Code,
  Zap,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
  // Customize these values
  const email = "sankarasubramanian001@gmail.com";
  const subject = encodeURIComponent("Let's Connect");
  const body = encodeURIComponent("Hi Kutti Durai,\n\nI’d like to get in touch with you regarding...");

  // Open default mail client
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  // Optional toast confirmation
  toast({
    title: "📨 Opening Email...",
    description: `Launching your email client to contact ${email}`,
  });
};


  // const handleContactClick = () => {
  //   toast({
  //     title: "🚧 Contact feature coming soon!",
  //     description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
  //   });
  // };

//   const handleDownloadCV = () => {
//   const cvUrl = "https://drive.google.com/file/d/1w-oDuOCIDbKaVveLKI_f96mwv9qJE2-y/view?usp=drivesdk";
//   window.open(cvUrl, '_blank', 'noopener,noreferrer');
// };

  const handleDownloadCV = () => {
  const cvUrl = "https://drive.google.com/file/d/1w-oDuOCIDbKaVveLKI_f96mwv9qJE2-y/view?usp=drivesdk";

  // Check for actual placeholder instead of the valid URL
  if (cvUrl === "") {
    toast({
      title: "📄 Please configure your CV link",
      description: "Open src/App.jsx and replace the placeholder URL with your CV's public link.",
      variant: "destructive",
    });
  } else {
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
  }
};


  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const aboutData = {
    title: "About Me",
    description: "Passionate DevOps engineer with 5+ years of experience in cloud infrastructure, automation, and continuous integration/deployment pipelines.",
    imageSrc: "https://images.unsplash.com/photo-1698349960651-05a954cd82fc",
    imageAlt: "DevOps engineer working with cloud infrastructure",
    features: [
      {
        icon: Server,
        title: "Infrastructure Automation",
        text: "Expert in Infrastructure as Code using Terraform, Ansible, and CloudFormation to build scalable and maintainable cloud environments."
      },
      {
        icon: Zap,
        title: "CI/CD Pipelines",
        text: "Designing and implementing robust CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions to accelerate software delivery."
      },
      {
        icon: Shield,
        title: "Security & Monitoring",
        text: "Implementing security best practices and comprehensive monitoring solutions using tools like Prometheus, Grafana, and ELK stack."
      }
    ]
  };

  const skillsData = {
    title: "Technical Skills",
    description: "Comprehensive expertise across the DevOps toolchain and cloud platforms",
    categories: [
      {
        icon: Cloud,
        title: "Cloud Platforms",
        skills: ["AWS", "Azure", "Google Cloud"],
        color: "text-blue-400"
      },
      {
        icon: Code,
        title: "Infrastructure as Code",
        skills: ["Terraform", "Ansible", "CloudFormation"],
        color: "text-green-400"
      },
      {
        icon: Database,
        title: "Containerization",
        skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
        color: "text-purple-400"
      },
      {
        icon: Zap,
        title: "CI/CD Tools",
        skills: ["Jenkins", "GitLab CI", "Azure DevOps"],
        color: "text-yellow-400"
      },
      {
        icon: Shield,
        title: "Monitoring & Logging",
        skills: ["Prometheus", "Grafana", "ELK Stack"],
        color: "text-red-400"
      },
      {
        icon: Server,
        title: "Operating Systems",
        skills: ["Linux", "Ubuntu", "CentOS", "Windows Server"],
        color: "text-cyan-400"
      }
    ]
  };

  const imageMap = {
  "Multi-Cloud Kubernetes Platform": "https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2018/04/blog_managementzones_callout.png",
  "CI/CD Pipeline Automation": "https://newrelic.com/sites/default/files/2022-10/jenkins-quickstart-dashboard.png",
  "Infrastructure Monitoring Stack": "https://dytvr9ot2sszz.cloudfront.net/wp-content/uploads/2022/05/image13.png",
  "Serverless Data Pipeline": "https://example.com/serverless-pipeline.jpg",
  "Security Compliance Automation": "https://cdn.buttercms.com/3xVl5i9oSpG7xiWbr0vY",
  "Disaster Recovery Solution": "https://sdmntpreastus.oaiusercontent.com/files/00000000-e990-61f9-9c2e-25825b6fbba3/raw?se=2025-06-12T08%3A37%3A35Z&sp=r&sv=2024-08-04&sr=b&scid=a926eb62-8438-5f89-839d-0d9127a01aa1&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-11T20%3A07%3A42Z&ske=2025-06-12T20%3A07%3A42Z&sks=b&skv=2024-08-04&sig=MeEodYyQMjiSr%2BRn%2BdlgpQTadHVJ8B2rfGoy29ABLTw%3D"
};

  const projectsData = {
    title: "Featured Projects",
    description: "Showcasing real-world DevOps implementations and infrastructure solutions",
    projects: [
      {
        title: "Multi-Cloud Kubernetes Platform",
        description: "Designed and deployed a multi-cloud Kubernetes platform with automated scaling, monitoring, and disaster recovery across AWS, Azure, and GCP.",
        image: imageMap["Multi-Cloud Kubernetes Platform"],
        imageAlt: "Kubernetes cluster dashboard showing multiple cloud providers",
        tech: ["Kubernetes", "Terraform", "Helm", "Prometheus"],
        metrics: "99.9% uptime, 50% cost reduction"
      },
      {
        title: "CI/CD Pipeline Automation",
        description: "Built comprehensive CI/CD pipelines for microservices architecture, reducing deployment time from hours to minutes with zero-downtime deployments.",
        image: imageMap["CI/CD Pipeline Automation"],
        imageAlt: "CI/CD pipeline visualization with multiple stages",
        tech: ["Jenkins", "Docker", "GitLab", "Ansible"],
        metrics: "90% faster deployments, 0 failed releases"
      },
      {
        title: "Infrastructure Monitoring Stack",
        description: "Implemented enterprise-grade monitoring and alerting system providing real-time insights into application performance and infrastructure health.",
        image: imageMap["Infrastructure Monitoring Stack"],
        imageAlt: "Monitoring dashboard with various metrics and graphs",
        tech: ["Prometheus", "Grafana", "ELK Stack", "AlertManager"],
        metrics: "100% visibility, 75% faster incident response"
      },
      {
        title: "Serverless Data Pipeline",
        description: "Architected serverless data processing pipeline handling millions of events daily with automatic scaling and cost optimization.",
        image: "https://images.unsplash.com/photo-1595872018818-97555653a011",
        imageAlt: "Serverless architecture diagram with data flow",
        tech: ["AWS Lambda", "Kinesis", "S3", "CloudFormation"],
        metrics: "10M+ events/day, 60% cost savings"
      },
      {
        title: "Security Compliance Automation",
        description: "Developed automated security scanning and compliance checking integrated into CI/CD pipelines, ensuring security best practices.",
        image: imageMap["Security Compliance Automation"],
        imageAlt: "Security dashboard showing compliance metrics",
        tech: ["SonarQube", "OWASP ZAP", "Vault", "Terraform"],
        metrics: "100% compliance, 0 security incidents"
      },
      {
        title: "Disaster Recovery Solution",
        description: "Implemented cross-region disaster recovery solution with automated failover and data replication for mission-critical applications.",
        image: imageMap["Disaster Recovery Solution"],
        imageAlt: "Disaster recovery architecture with multiple regions",
        tech: ["AWS", "Terraform", "Route53", "RDS"],
        metrics: "RTO: 15 minutes, RPO: 5 minutes"
      }
    ]
  };

  const contactData = {
    title: "Let's Connect",
    description: "Ready to discuss your next DevOps project or infrastructure challenge? Let's build something amazing together!",
    imageSrc: "../../public/assets/lets.jpg",
    imageAlt: "DevOps collaboration and teamwork",
    contactMethods: [
      { icon: Mail, label: "Email", value: "devops@example.com", color: "text-blue-400" },
      { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-green-400" },
      { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/devops-pro", color: "text-blue-600" },
      { icon: Github, label: "GitHub", value: "github.com/devops-pro", color: "text-gray-400" }
    ]
  };

  const footerData = {
    socialLinks: [
      { icon: Github, handler: handleContactClick },
      { icon: Linkedin, handler: handleContactClick },
      { icon: Mail, handler: handleContactClick }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Toaster />
      <Navbar 
        navItems={navItems} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection 
        y={y} 
        handleContactClick={handleContactClick} 
        handleDownloadCV={handleDownloadCV} 
        MailIcon={Mail}
        DownloadIcon={Download}
      />
      <AboutSection data={aboutData} />
      <SkillsSection data={skillsData} />
      <ProjectsSection 
        data={projectsData} 
        handleProjectClick={handleProjectClick} 
        ExternalLinkIcon={ExternalLink} 
      />
      <ContactSection 
        data={contactData} 
        handleContactClick={handleContactClick} 
        ArrowRightIcon={ArrowRight}
      />
      <Footer data={footerData} />
    </div>
  );
};

export default App;
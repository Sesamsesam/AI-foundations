
export interface ActionItem {
  title: string;
  description: string;
  details: string[];
  url: string;
  buttonText?: string;
}

export interface RoleUseCase {
  role: string;
  scenario: string;
  tools: { name: string; usesCredits?: boolean }[];
  workflow: string[];
  result: string;
  primaryUrl?: string;
}

export interface CaseStudyStep {
  time: string;
  title: string;
  description: string;
  tools: { name: string; usesCredits?: boolean }[];
}

export interface CaseStudyData {
  title: string;
  context: string;
  steps: CaseStudyStep[];
  outcome: {
    summary: string;
    traditional: string;
    withAI: string;
  };
}

export interface Card {
  id: string;
  type: 'text' | 'callout' | 'checklist' | 'linksGrid' | 'embed' | 'toolsList'
  | 'alert' | 'pdfCarousel' | 'toolCard' | 'courseCard' | 'videoEmbed' | 'statCard'
  | 'slideViewer' | 'actionCarousel' | 'roleUseCases' | 'caseStudy';
  title?: string;
  content?: string;
  items?: string[];
  // Checklist with links - each item can have an optional URL
  checklistLinks?: { label: string; url?: string }[];
  links?: { label: string; url: string; image?: string; description?: string }[];
  embedUrl?: string;
  // Alert card
  alertType?: 'tip' | 'warning' | 'important';
  // Course card
  duration?: string;
  price?: string;
  provider?: string;
  url?: string;
  thumbnailUrl?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  // PDF carousel (deprecated)
  pdfPaths?: string[];
  // Slide viewer (single PDF)
  pdfPath?: string;
  // Tool card
  iconPath?: string;
  quickStart?: string;
  // Video embed
  videoId?: string;
  // Stat card
  statImage?: string;
  // Action carousel
  actionItems?: ActionItem[];
  // Role use cases
  roleUseCases?: RoleUseCase[];
  // Case study
  caseStudy?: CaseStudyData;
  // Full width flag
  fullWidth?: boolean;
}

export interface Section {
  id: string;
  title: string;
  intro?: string;
  centered?: boolean;
  cards: Card[];
}

export interface Tab {
  id: string;
  label: string;
  hero: {
    title: string;
    subtitle: string;
    videoUrl?: string | null;
  };
  sections: Section[];
}

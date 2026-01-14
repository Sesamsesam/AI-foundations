
export interface Card {
  id: string;
  type: 'text' | 'callout' | 'checklist' | 'linksGrid' | 'embed' | 'toolsList';
  title?: string;
  content?: string;
  items?: string[];
  links?: { label: string; url: string; image?: string }[];
  embedUrl?: string;
}

export interface Section {
  id: string;
  title: string;
  intro?: string;
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

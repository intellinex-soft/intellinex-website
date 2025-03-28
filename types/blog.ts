export interface Blog {
  id: string;
  title: string;
  content?: string;
  thumbnail: string;
  short_content?: string;
  author?: {
    name: string;
    profile: string;
  };
  views?: number;
  tags?: string[];
  created_at: string;
}

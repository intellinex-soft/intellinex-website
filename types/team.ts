export interface Team {
  id: number;
  name: string;
  position: string;
  description: string | null;
  profile: string;
  contact: string | null;
  status: boolean;
  created_at: string;
}

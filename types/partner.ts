export interface Partner {
  id: string;
  name: string;
  short_description: string;
  details: string;
  picture: {
    black: string;
    white: string;
  };
  status: number;
  reference: string;
  created_at: string;
  updated_at: string;
}

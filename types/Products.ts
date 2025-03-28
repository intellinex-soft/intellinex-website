export interface IProduct {
  id: string;
  name: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images?: any;
  status: boolean;
  logo?: string;
  type?: "mobile" | "web" | "system";
  details: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  features: any;
  updated_at: string;
  created_at: string;
}

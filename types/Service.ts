import { IResponseHelper } from "./ResponseHelper";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  status: string;
  created_at: string;
  href: string;
  updated_at: string;
  thumbnail: string;
  headeline: string;
}

export interface IService extends IResponseHelper {
  data: [Service];
}

import { Hero } from "@/components/section/Hero";
import ServiceHighlightCom from "@/components/section/ServiceHighlightCom";
import Api from "@/lib/api";
import { IService } from "@/types/Service";

export default async function Home() {

  const response: IService = await Api.POST('service/get_services')
  console.log(response.data)

  return (
    <div>
      <Hero />
      <ServiceHighlightCom data={response.data} />
    </div>
  );
}

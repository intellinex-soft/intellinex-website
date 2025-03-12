import { Hero } from "@/components/section/Hero";
import ServiceHighlightCom from "@/components/section/ServiceHighlightCom";
import { createClient } from "@/utils/supabase/server";


export default async function Home() {

  const supabase = await createClient();

  const { data: services, error } = await supabase
    .from('fa_services')
    .select('*')
    .eq('status', true)

  if (error) {
    console.log(error)
    return
  }

  return (
    <div>
      <Hero />
      <ServiceHighlightCom data={services} />
    </div>
  );
}

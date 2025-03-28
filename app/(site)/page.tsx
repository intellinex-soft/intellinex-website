import { Hero } from "@/components/section/Hero";
import LastProductCom from "@/components/section/last-products-com";
import OurClientComponent from "@/components/section/our-client-com";
import ServiceHighlightCom from "@/components/section/service-highlight-com";
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

  const { data: lastProduct } = await supabase
    .from("fa_products")
    .select('*')
    .order('created_at', { ascending: false })
    .single()

  return (
    <div>
      <Hero />
      <ServiceHighlightCom data={services} />
      <LastProductCom data={lastProduct} />
      <OurClientComponent />
    </div>
  );
}

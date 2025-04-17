import CallToActionComponent from "@/components/section/call-to-action-com";
import Hero from "@/components/section/Hero";
// import LastProductCom from "@/components/section/last-products-com";
import OurClientComponent from "@/components/section/our-client-com";
import PartnershipSection from "@/components/section/partnership-com";
import ServiceHighlightCom from "@/components/section/service-highlight-com";
import { createClient } from "@/utils/supabase/server";
import dynamic from "next/dynamic";

const LastProductCom = dynamic(() => import("@/components/section/last-products-com"), {
  loading: () => <p>Loading..</p>,
})

export default async function Home() {

  const supabase = await createClient();

  const { data: services, error } = await supabase
    .from('fa_services')
    .select('*')
    .eq('status', true)
    .order("id", { ascending: true })

  if (error) {
    console.log(error)
    return
  }

  const { data: lastProduct } = await supabase
    .from("fa_products")
    .select('*')
    .order('created_at', { ascending: false })
    .single()

  const { data: partnership } = await supabase
    .from("fa_partners")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <Hero />
      <ServiceHighlightCom data={services} />
      <LastProductCom data={lastProduct} />
      <CallToActionComponent />
      <OurClientComponent />
      <PartnershipSection data={partnership!} />
    </div>
  );
}

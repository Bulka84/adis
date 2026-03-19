import type { Metadata } from "next";
import { clients } from "@/data/clients";
import { MapPin, Building2, Users, Server } from "lucide-react";
import RegionBlocks from "@/components/RegionBlocks";

export const metadata: Metadata = {
  title: "Внедрения",
  description: "ПК «АДИС» внедрён и успешно работает на станциях СМП более чем в 50 городах России.",
};

export default function ClientsPage() {
  const regions = [...new Set(clients.map((c) => c.region))].sort();
  const totalWorkstations = clients.reduce((sum, c) => sum + c.workstations, 0);
  const totalPopulation = clients.reduce((sum, c) => sum + c.population, 0);

  const stats = [
    { icon: Building2, value: `${clients.length}+`, label: "городов" },
    { icon: MapPin, value: `${regions.length}`, label: "регионов" },
    { icon: Server, value: `${totalWorkstations}+`, label: "АРМ установлено" },
    { icon: Users, value: `${Math.round(totalPopulation / 1000000)}M+`, label: "населения обслуживается" },
  ];

  return (
    <>
      <section className="hero-dark py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Внедрения</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            География внедрений
          </h1>
          <p className="text-xl text-white/60 max-w-3xl">
            ПК &laquo;АДИС&raquo; внедрён и успешно работает на станциях скорой
            медицинской помощи в городах Российской Федерации.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 max-w-[1200px] mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-6 text-center card-hover">
              <div className="w-10 h-10 gradient-bg-subtle rounded-lg flex items-center justify-center mx-auto mb-3 text-primary">
                <stat.icon size={20} />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Region Blocks */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <RegionBlocks clients={clients} />
      </section>
    </>
  );
}

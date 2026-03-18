import type { Metadata } from "next";
import { clients } from "@/data/clients";
import { MapPin, Building2, Users, Server } from "lucide-react";
import RegionBlocks from "@/components/RegionBlocks";

export const metadata: Metadata = {
  title: "Внедрения",
  description: "ПК «АДИС» внедрён и успешно работает на станциях СМП более чем в 50 городах России и Казахстана.",
};

export default function ClientsPage() {
  const regions = [...new Set(clients.map((c) => c.region))].sort();
  const totalWorkstations = clients.reduce((sum, c) => sum + c.workstations, 0);
  const totalPopulation = clients.reduce((sum, c) => sum + c.population, 0);

  return (
    <>
      <section className="bg-gradient-to-br from-[#E8F4FD] via-white to-[#F0F7FD] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            География внедрений
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            ПК &laquo;АДИС&raquo; внедрён и успешно работает на станциях скорой
            медицинской помощи в городах Российской Федерации и Казахстана.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 size={28} className="mx-auto text-[#0066CC] mb-2" />
              <div className="text-3xl font-bold text-[#1A1A2E]">{clients.length}+</div>
              <div className="text-sm text-gray-500">городов</div>
            </div>
            <div className="text-center">
              <MapPin size={28} className="mx-auto text-[#0066CC] mb-2" />
              <div className="text-3xl font-bold text-[#1A1A2E]">{regions.length}</div>
              <div className="text-sm text-gray-500">регионов</div>
            </div>
            <div className="text-center">
              <Server size={28} className="mx-auto text-[#0066CC] mb-2" />
              <div className="text-3xl font-bold text-[#1A1A2E]">{totalWorkstations}+</div>
              <div className="text-sm text-gray-500">АРМ установлено</div>
            </div>
            <div className="text-center">
              <Users size={28} className="mx-auto text-[#0066CC] mb-2" />
              <div className="text-3xl font-bold text-[#1A1A2E]">
                {Math.round(totalPopulation / 1000000)}M+
              </div>
              <div className="text-sm text-gray-500">населения обслуживается</div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <RegionBlocks clients={clients} />
      </section>
    </>
  );
}

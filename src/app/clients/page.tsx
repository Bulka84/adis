import type { Metadata } from "next";
import { clients } from "@/data/clients";
import { regions } from "@/data/regions";
import { MapPin, Building2, Users, Server, CheckCircle } from "lucide-react";
import RegionBlocks from "@/components/RegionBlocks";

export const metadata: Metadata = {
  title: "Внедрения",
  description: "ПК «АДИС» внедрён и успешно работает на станциях СМП более чем в 500 городах России и за рубежом.",
};

export default function ClientsPage() {
  const activeRegions = regions.filter((r) => r.active);
  const inactiveRegions = regions.filter((r) => !r.active);
  const activeRegionNames = new Set(activeRegions.map((r) => r.region));
  const activeClients = clients.filter((c) => activeRegionNames.has(c.region));
  const totalWorkstations = activeClients.reduce((sum, c) => sum + c.workstations, 0);
  const totalPopulation = activeClients.reduce((sum, c) => sum + c.population, 0);

  const stats = [
    { icon: Building2, value: `${regions.length}`, label: "регионов за всю историю" },
    { icon: CheckCircle, value: `${activeClients.length}+`, label: "внедрённых городов" },
    { icon: Server, value: `${totalWorkstations}+`, label: "АРМ установлено" },
    { icon: Users, value: "18M+", label: "населения обслуживается" },
  ];

  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Внедрения</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            География внедрений
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            С 1992 года ПК &laquo;АДИС&raquo; внедрён в {regions.length} регионах
            России и за рубежом. Сегодня система активно работает
            в {activeRegions.length} регионах.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <stat.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full history table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">История</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-4">
              Хронология внедрений
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Полная история внедрений ПК &laquo;АДИС&raquo; с 1992 года по настоящее время
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1a3a5c] to-[#2563eb] text-white">
                  <th className="text-left px-5 py-4 font-semibold">№</th>
                  <th className="text-left px-5 py-4 font-semibold">Регион</th>
                  <th className="text-left px-5 py-4 font-semibold">Город</th>
                  <th className="text-left px-5 py-4 font-semibold">Дата запуска</th>
                  <th className="text-center px-5 py-4 font-semibold">АРМ</th>
                  <th className="text-center px-5 py-4 font-semibold">ПС</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((r, i) => (
                  <tr
                    key={r.id}
                    className={`border-t border-gray-100 ${
                      r.active ? "bg-white" : "bg-gray-50 text-gray-400"
                    } hover:bg-blue-50/50 transition-colors`}
                  >
                    <td className="px-5 py-3.5 text-gray-400">{i + 1}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {r.region}
                      {r.country !== "Россия" && (
                        <span className="ml-2 text-xs text-gray-400">({r.country})</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5">{r.city}</td>
                    <td className="px-5 py-3.5">{r.date}</td>
                    <td className="px-5 py-3.5 text-center font-semibold">{r.totalArm}</td>
                    <td className="px-5 py-3.5 text-center">{r.totalSubstations}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-semibold border-t-2 border-gray-200">
                  <td className="px-5 py-3.5" colSpan={2}>Итого: {regions.length} регионов</td>
                  <td className="px-5 py-3.5">
                    <span className="text-green-600">{activeRegions.length} активных</span> / <span className="text-gray-400">{inactiveRegions.length} завершённых</span>
                  </td>
                  <td className="px-5 py-3.5"></td>
                  <td className="px-5 py-3.5 text-center">{regions.reduce((s, r) => s + r.totalArm, 0)}</td>
                  <td className="px-5 py-3.5 text-center">{regions.reduce((s, r) => s + r.totalSubstations, 0)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Active Region Blocks (detailed) */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <span className="section-tag mb-4">Детализация</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-4">
            Активные регионы
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Подробная информация по городам и рабочим местам в регионах, где ПК &laquo;АДИС&raquo; работает сегодня
          </p>
        </div>
        <RegionBlocks clients={activeClients} />
      </section>
    </>
  );
}

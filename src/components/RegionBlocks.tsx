"use client";

import { useState, useMemo } from "react";
import { ChevronDown, MapPin, Server, Calendar, Building2, Search } from "lucide-react";
import type { Client } from "@/data/clients";

interface RegionData {
  name: string;
  country: string;
  clients: Client[];
  totalWorkstations: number;
  totalPopulation: number;
  yearRange: string;
}

export default function RegionBlocks({ clients }: { clients: Client[] }) {
  const [openRegions, setOpenRegions] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");

  const regions = useMemo<RegionData[]>(() => {
    const map = new Map<string, Client[]>();
    for (const c of clients) {
      const list = map.get(c.region) || [];
      list.push(c);
      map.set(c.region, list);
    }

    const result: RegionData[] = [];
    for (const [name, list] of map) {
      const years = list.map((c) => c.year).sort();
      result.push({
        name,
        country: list[0].country,
        clients: list.sort((a, b) => a.city.localeCompare(b.city, "ru")),
        totalWorkstations: list.reduce((s, c) => s + c.workstations, 0),
        totalPopulation: list.reduce((s, c) => s + c.population, 0),
        yearRange: years[0] === years[years.length - 1] ? `${years[0]}` : `${years[0]}–${years[years.length - 1]}`,
      });
    }

    return result.sort((a, b) => b.clients.length - a.clients.length);
  }, [clients]);

  const filteredRegions = useMemo(() => {
    if (!search.trim()) return regions;
    const q = search.toLowerCase();
    return regions
      .map((r) => {
        const regionMatch = r.name.toLowerCase().includes(q);
        const matchingClients = r.clients.filter((c) => c.city.toLowerCase().includes(q));
        if (regionMatch) return r;
        if (matchingClients.length > 0) return { ...r, clients: matchingClients };
        return null;
      })
      .filter(Boolean) as RegionData[];
  }, [regions, search]);

  const toggle = (name: string) => {
    setOpenRegions((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const expandAll = () => {
    setOpenRegions(new Set(filteredRegions.map((r) => r.name)));
  };

  const collapseAll = () => {
    setOpenRegions(new Set());
  };

  return (
    <div>
      {/* Search & controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск по городу или региону..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="px-4 py-3 text-sm font-medium text-primary bg-white border border-gray-200 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Развернуть все
          </button>
          <button
            onClick={collapseAll}
            className="px-4 py-3 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Свернуть
          </button>
        </div>
      </div>

      {/* Region count */}
      <p className="text-sm text-gray-400 mb-4">
        {filteredRegions.length} {filteredRegions.length === 1 ? "регион" : filteredRegions.length < 5 ? "региона" : "регионов"} · {filteredRegions.reduce((s, r) => s + r.clients.length, 0)} городов
      </p>

      {/* Regions */}
      <div className="space-y-3">
        {filteredRegions.map((region) => {
          const isOpen = openRegions.has(region.name);
          return (
            <div
              key={region.name}
              className="bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Region header */}
              <button
                onClick={() => toggle(region.name)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 size={22} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 truncate">{region.name}</h3>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {region.clients.length} {region.clients.length === 1 ? "город" : region.clients.length < 5 ? "города" : "городов"}
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <Server size={12} />
                      {region.totalWorkstations} АРМ
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <Calendar size={12} />
                      {region.yearRange}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">{region.clients.length}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {/* Cities grid */}
              {isOpen && (
                <div className="border-t border-gray-200 bg-gray-50/30 p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {region.clients.map((client) => (
                      <div
                        key={client.id}
                        className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-200/60"
                      >
                        <MapPin size={14} className="text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-gray-900 truncate block">{client.city}</span>
                          <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                            <span>{client.year} г.</span>
                            <span>{client.workstations} АРМ</span>
                            {client.population > 0 && (
                              <span className="hidden sm:inline">{(client.population / 1000).toFixed(0)}т чел.</span>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] gradient-bg-subtle text-primary px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                          v{client.version}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredRegions.length === 0 && (
        <div className="text-center py-16">
          <Search size={40} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Ничего не найдено по запросу &laquo;{search}&raquo;</p>
        </div>
      )}
    </div>
  );
}

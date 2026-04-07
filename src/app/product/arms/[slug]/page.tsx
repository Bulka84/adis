import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  ChevronRight,
  Cpu,
  Monitor,
  Pill,
  Radio,
  Server,
  Shield,
  Stethoscope,
  BookOpen,
  Users,
} from "lucide-react";
import {
  getWorkstationBySlug,
  workstations,
  type WorkstationIconKey,
} from "@/data/workstations";

const iconMap = {
  monitor: Monitor,
  stethoscope: Stethoscope,
  users: Users,
  shield: Shield,
  "bar-chart": BarChart3,
  radio: Radio,
  cpu: Cpu,
  pill: Pill,
  server: Server,
  "book-open": BookOpen,
} satisfies Record<WorkstationIconKey, typeof Monitor>;

interface WorkstationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return workstations.map((workstation) => ({
    slug: workstation.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkstationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workstation = getWorkstationBySlug(slug);

  if (!workstation) {
    return {
      title: "АРМ не найден",
    };
  }

  return {
    title: workstation.name,
    description: workstation.description,
  };
}

export default async function WorkstationPage({
  params,
}: WorkstationPageProps) {
  const { slug } = await params;
  const workstation = getWorkstationBySlug(slug);

  if (!workstation) {
    notFound();
  }

  const Icon = iconMap[workstation.iconKey];

  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6 w-full">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            К списку АРМ
          </Link>

          <div className="max-w-4xl">
            <span className="section-tag section-tag-light mb-4">
              АРМ {workstation.badge ?? String(workstation.number).padStart(2, "0")}
            </span>
            <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center text-primary mb-6">
              <Icon size={30} />
            </div>
            <h1 className="text-[clamp(34px,4.6vw,58px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
              {workstation.name}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
              {workstation.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <div className="text-sm text-white/50 mb-2">Назначение</div>
                <div className="text-base font-semibold text-white">
                  {workstation.description}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <div className="text-sm text-white/50 mb-2">Функций</div>
                <div className="text-3xl font-extrabold text-white">
                  {workstation.capabilities.length}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <div className="text-sm text-white/50 mb-2">Раздел</div>
                <div className="text-base font-semibold text-white">
                  Состав ПК «АДИС»
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div className="bg-[#e8f0fe] border border-[#b0ccf5] rounded-3xl p-8 md:p-10">
              <span className="section-tag mb-4">Описание</span>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em] mb-5">
                Основные возможности
              </h2>
              <div className="space-y-4">
                {workstation.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-4 rounded-2xl bg-white/70 border border-white p-5"
                  >
                    <div className="w-9 h-9 rounded-xl gradient-bg-subtle flex items-center justify-center shrink-0 text-primary">
                      <ChevronRight size={18} />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#dce0ea] rounded-3xl p-8 border border-white/70 sticky top-28">
              <span className="section-tag mb-4">Навигация</span>
              <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em] mb-4">
                Другие АРМ
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                На странице доступны все автоматизированные рабочие места, входящие в состав ПК «АДИС».
              </p>
              <div className="space-y-3">
                {workstations.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/product/arms/${item.slug}`}
                    className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition-colors ${
                      item.slug === workstation.slug
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-white hover:border-[#b0ccf5] hover:bg-[#e8f0fe]"
                    }`}
                  >
                    <span className="text-sm font-semibold leading-snug">
                      {(item.badge ?? String(item.number).padStart(2, "0"))} {item.name}
                    </span>
                    <ChevronRight size={18} className="shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

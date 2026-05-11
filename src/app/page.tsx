"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Headset, 
  Activity, 
  ArrowRight, 
  LayoutDashboard, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe,
  Package
} from "lucide-react";
import Link from "next/link";

const portals = [
  {
    id: "pos-crm",
    title: "POS CRM",
    description: "Gestión centralizada de terminales, clientes y aliados comerciales con analítica en tiempo real.",
    icon: BarChart3,
    color: "from-blue-600 to-indigo-700",
    link: "#",
    features: ["Inventario de Terminales", "Gestión de Clientes", "Reportes de Ventas"]
  },
  {
    id: "gestion-atc",
    title: "Gestión ATC",
    description: "Portal de atención al cliente para seguimiento de tickets y soporte técnico especializado.",
    icon: Headset,
    color: "from-emerald-600 to-teal-700",
    link: "#",
    features: ["Tickets de Soporte", "Base de Conocimientos", "Métricas de Nivel de Servicio"]
  },
  {
    id: "punto-siempre-activo",
    title: "Tu Punto Siempre Activo",
    description: "Monitorización y trazabilidad del ciclo de vida de terminales desde recepción hasta despacho.",
    icon: Activity,
    color: "from-orange-600 to-red-700",
    link: "#",
    features: ["Trazabilidad de Status", "Control de Despacho", "Servicio Técnico"]
  },
  {
    id: "despacho-almacen",
    title: "Despacho y Almacén",
    description: "Gestión integral de inventario, logística de envíos y control de stock en bodegas.",
    icon: Package,
    color: "from-amber-600 to-orange-700",
    link: "#",
    features: ["Control de Stock", "Guías de Despacho", "Logística de Entrada/Salida"]
  }
];

export default function Home() {
  return (
    <div className="flex-grow flex flex-col bg-surface overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-primary dark:text-white">Portal Hub</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">Portales</Link>
            <Link href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Recursos</Link>
            <Link href="#" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Soporte</Link>
          </nav>

        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-3xl animate-pulse" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
                PLATAFORMA INTEGRADA
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
                Ecosistema de Gestión <br />
                <span className="text-secondary italic">Operativa</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-secondary max-w-2xl mx-auto"
            >
              Centraliza el control de tus operaciones con acceso directo a nuestras plataformas especializadas de CRM, Atención al Cliente y Seguimiento Técnico.
            </motion.p>
          </div>
        </section>

        {/* Portal Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portals.map((portal, index) => (
              <motion.div
                key={portal.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-primary-container rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
              >
                <div className="p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${portal.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <portal.icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-primary dark:text-white">
                      {portal.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {portal.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 pt-4 border-t border-outline-variant/50">
                    {portal.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={portal.link}
                    className="flex items-center justify-between w-full mt-6 py-3 px-4 bg-surface-container hover:bg-primary hover:text-white rounded-xl text-sm font-bold transition-all group-hover:shadow-md"
                  >
                    <span>Entrar al Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-primary py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Eficiencia Integrada</h2>
                <p className="text-blue-100/70 text-lg">
                  Nuestra arquitectura permite una sincronización total entre departamentos, eliminando silos de información y acelerando los tiempos de respuesta operativa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Seguridad", text: "Acceso autenticado y roles definidos." },
                  { icon: Zap, title: "Rendimiento", text: "Optimizado para carga ultra rápida." },
                  { icon: Globe, title: "Sincronización", text: "Datos compartidos en tiempo real." },
                  { icon: ExternalLink, title: "Escalabilidad", text: "Diseñado para crecer con su empresa." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-blue-100/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl">
                 <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-inner bg-primary-container">
                    <img 
                      src="/hero.png" 
                      alt="Portal Preview" 
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-primary border-t border-outline-variant py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <LayoutDashboard className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-primary dark:text-white">Portal Hub</span>
            </div>
            <p className="text-sm text-secondary">© 2024 Corporación Operativa. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-8">
            <Link href="#" className="text-sm font-medium text-secondary hover:text-primary underline transition-all">Privacidad</Link>
            <Link href="#" className="text-sm font-medium text-secondary hover:text-primary underline transition-all">Términos</Link>
            <Link href="#" className="text-sm font-medium text-secondary hover:text-primary underline transition-all">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

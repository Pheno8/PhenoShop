import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo PhenoShop */}
          <div className="flex items-center gap-2">
            <button className="p-2 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="text-xl font-bold tracking-tighter">
              PHENO<span className="text-orange-600">SHOP</span>
            </Link>
          </div>

          {/* Barre de Recherche (Optimisée 3G) */}
          <div className="hidden flex-1 md:flex max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="search"
                placeholder="Chercher un iPhone, une robe..."
                className="w-full rounded-full border bg-slate-50 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Actions : Compte & Panier */}
          <div className="flex items-center gap-2">
            <Link href="/compte" className="p-2 text-slate-600">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/panier" className="relative p-2 text-slate-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

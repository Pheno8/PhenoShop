"use client";
import { useCartStore } from "../../lib/store";
import Header from "../../components/layout/Header";
import { Trash2, CreditCard } from "lucide-react";

export default function PanierPage() {
  const { items, removeItem } = useCartStore((state: any) => state);

  // Calcul du prix total (Assure-toi que tes prix sont des nombres)
  const total = items.reduce((acc: number, item: any) => acc + (item.price || 0), 0);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-black mb-10">Mon Panier 🛒</h1>

        {items.length === 0 ? (
          <div className="bg-white p-10 rounded-3xl text-center shadow-sm">
            <p className="text-slate-500">Votre panier est vide.</p>
            <a href="/" className="mt-4 inline-block text-orange-600 font-bold">Continuer mes achats</a>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {/* Liste des articles */}
            <div className="md:col-span-2 space-y-4">
              {items.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="h-20 w-20 bg-slate-100 rounded-xl overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-orange-600 font-bold">{item.price?.toLocaleString()} FCFA</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 p-2">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Résumé et Paiement MoMo */}
            <div className="bg-white p-6 rounded-3xl shadow-lg h-fit border-2 border-orange-100">
              <h2 className="text-xl font-bold mb-6">Résumé</h2>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="text-2xl font-black text-slate-900">{total.toLocaleString()} FCFA</span>
              </div>
              
              <button 
                onClick={() => alert("Redirection vers le paiement sécurisé MTN/Orange Money...")}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors"
              >
                Payer par MoMo <CreditCard className="h-5 w-5" />
              </button>
              
              <p className="text-[10px] text-slate-400 mt-4 text-center">
                Paiement sécurisé par CinetPay Cameroun
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

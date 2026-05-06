"use client";

import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/footer"; // Vérifie si c'est footer ou Footer
import { useCartStore } from "../../../lib/store";

// Le dictionnaire qui fait le lien avec les IDs de l'accueil
const INFOS_PRODUITS = {
  // Dans ton objet INFOS_PRODUITS
"1": { 
  name: "Blazer Signature Rose", 
  price: "8 900 FCFA", 
  image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&amp;fit=crop&amp;w=900&amp;q=80",
  desc: "Un blazer élégant pour vos rendez-vous d'affaires ou vos sorties chic à Douala." 
},

  "2": { 
    name: "Sac Cuir Prestige", 
    price: "30 000 FCFA", 
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    desc: "Le luxe à votre portée. Cuir véritable, finition prestige." 
  },
  "3": { 
    name: "Smartphone Nova X", 
    price: "120 000 FCFA", 
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    desc: "Performance et design. Le compagnon idéal pour votre quotidien numérique." 
  },
  "4": { 
    name: "Sneakers Luxe Blanc", 
    price: "18 000 FCFA", 
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    desc: "Un style épuré et un confort maximal pour vos marches en ville." 
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  // On récupère les infos du produit selon l'ID (1, 2, 3 ou 4)
  const produit = INFOS_PRODUITS[params.slug as keyof typeof INFOS_PRODUITS];

  // Si l'ID n'est pas dans notre dictionnaire
  if (!produit) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-10 text-center">
        <h1 className="text-2xl font-bold">Oups ! Produit introuvable 🇨🇲</h1>
        <a href="/" className="mt-4 text-orange-600 font-bold underline">Retourner à l'accueil</a>
      </div>
    );
  }
  const addItem = useCartStore((state: any) => state.addItem);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          
          {/* Image du produit */}
          <div className="flex-1 overflow-hidden rounded-[40px] bg-slate-100 shadow-2xl">
            <img src={produit.image} alt={produit.name} className="h-full w-full object-cover" />
          </div>

          {/* Détails du produit */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-black text-slate-900 md:text-6xl">{produit.name}</h1>
            <p className="text-3xl font-black text-orange-600">{produit.price}</p>
            <p className="text-lg leading-relaxed text-slate-500">{produit.desc}</p>
            
            <div className="flex flex-col gap-4 pt-6">
            <button 
  onClick={() => {
    // On transforme le texte "8 900 FCFA" en nombre 8900
    const prixNumerique = parseInt(produit.price.replace(/[^0-9]/g, ""));

    addItem({
      id: params.slug,
      name: produit.name,
      price: prixNumerique, // <-- On envoie le vrai prix ici
      image: produit.image,
      quantity: 1
    });
    alert(`Super ! ${produit.name} ajouté au panier.`);
  }}
  className="rounded-2xl bg-orange-600 py-5 text-xl font-bold text-white shadow-lg"
>
  Ajouter au panier
</button>


              <a 
                href={`https://wa.me, je souhaite commander le produit : ${produit.name}`}
                className="rounded-2xl border-2 border-green-500 py-4 text-center font-bold text-green-600 transition hover:bg-green-50"
              >
                Commander via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}


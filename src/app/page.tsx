import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const products = [
  {
    id: 1,
    name: "Blazer Signature Noir",
    price: "89 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Sac Cuir Prestige",
    price: "72 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Smartphone Nova X",
    price: "320 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Sneakers Luxe Blanc",
    price: "58 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-slate-50">
        <section className="border-b border-slate-200 bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center md:text-left">
            <p className="mb-4 inline-block rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700">
              Collection Premium • Livraison rapide
            </p>
            <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 md:mx-0 md:text-5xl">
              PhenoShop : La mode à portée de clic 🇨🇲
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-600">
              Des pièces mode et tech soigneusement sélectionnées, avec une
              expérience d'achat élégante et une livraison express à Douala et
              Yaoundé.
            </p>
            <button className="mt-8 rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-orange-600">
              Acheter maintenant
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Produits populaires
            </h2>
            <span className="text-sm text-slate-500">4 produits</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    Livraison 24h
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-2 text-lg font-bold text-orange-600">
                    {product.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

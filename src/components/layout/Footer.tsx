export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} PhenoShop. Tous droits réservés.</p>
        <p>Douala • Yaoundé • Livraison express 24h</p>
      </div>
    </footer>
  );
}

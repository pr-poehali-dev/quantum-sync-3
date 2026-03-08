const packs = [
  { amount: 10, price: "25 ₽" },
  { amount: 35, price: "80 ₽" },
  { amount: 75, price: "140 ₽" },
  { amount: 150, price: "270 ₽" },
  { amount: 275, price: "550 ₽" },
];

export default function Currency() {
  return (
    <section className="bg-neutral-900 py-20 px-6" id="currency">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-400 mb-3">Внутриигровая валюта</p>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
          Топер-Валюта <span className="text-orange-500">T$</span>
        </h2>
        <p className="text-center text-neutral-400 mb-14">🔥 Чёрный огонь — валюта сервера</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {packs.map((pack) => (
            <div
              key={pack.amount}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-neutral-800 hover:scale-105 transition-transform duration-300 p-6 gap-4"
            >
              <div className="text-4xl">🔥</div>
              <div className="text-center">
                <p className="text-white font-bold text-2xl">{pack.amount} <span className="text-orange-400 text-lg">T$</span></p>
              </div>
              <p className="text-white font-semibold text-xl">{pack.price}</p>
              <a
                href="https://t.me/maxmasterMC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-white text-black font-bold uppercase tracking-wide text-xs py-3 hover:bg-orange-400 transition-colors duration-200"
              >
                Купить
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

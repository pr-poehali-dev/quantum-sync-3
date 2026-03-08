const privileges = [
  {
    name: "IMP",
    price: "10 ₽",
    color: "from-green-500 to-green-700",
    badge: "😈",
    perks: ["Красная метка", "Возможность получения специального комплекта"],
  },
  {
    name: "LION",
    price: "249 ₽",
    color: "from-yellow-500 to-yellow-700",
    badge: "🦁",
    perks: ["Всё из IMP", "/nick команда", "x2 опыта", "Личный варп"],
  },
  {
    name: "ANGEL",
    price: "399 ₽",
    color: "from-sky-400 to-blue-600",
    badge: "😇",
    perks: ["Всё из LION", "Особые эффекты", "x2.5 опыта", "Частный чат"],
  },
  {
    name: "DEMON",
    price: "599 ₽",
    color: "from-red-500 to-red-800",
    badge: "🔥",
    perks: ["Всё из ANGEL", "Редкий скин ника", "x3 опыта", "Уникальный плащ"],
  },
  {
    name: "SCORPION",
    price: "799 ₽",
    color: "from-orange-500 to-orange-800",
    badge: "🦂",
    perks: ["Всё из DEMON", "Личный остров", "x4 опыта", "Особые частицы"],
  },
  {
    name: "VAMPIRE",
    price: "999 ₽",
    color: "from-purple-600 to-purple-950",
    badge: "🧛",
    perks: ["Всё из SCORPION", "Имя в топе сервера", "x5 опыта", "Закрытый Discord"],
  },
];

export default function Featured() {
  return (
    <section className="bg-neutral-950 py-20 px-6" id="privileges">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-400 mb-3">Выбери свой уровень</p>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-14">Привилегии</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {privileges.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300"
            >
              <div className={`bg-gradient-to-br ${p.color} p-6 text-center`}>
                <div className="text-4xl mb-2">{p.badge}</div>
                <h3 className="text-white font-bold text-2xl tracking-widest">{p.name}</h3>
                <p className="text-white/80 text-xl font-semibold mt-1">{p.price}</p>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <ul className="space-y-2 flex-1 mb-6">
                  {p.perks.map((perk) => (
                    <li key={perk} className="text-neutral-300 text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span> {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://t.me/maxmasterMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-black font-bold uppercase tracking-wide text-xs py-3 hover:bg-yellow-400 transition-colors duration-200"
                >
                  Купить
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
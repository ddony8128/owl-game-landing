"use client";

import { motion } from "framer-motion";

const seasons = [
  {
    tag: "NEW",
    title: "시즌 1 부트캠프",
    description: "새로운 게임 최초 공개. 한 번도 플레이된 적 없는 오리지널 두뇌게임을 가장 먼저 경험하세요.",
    date: "3/14 (토)",
    time: "12:00 - 18:00",
    location: "홍대입구역 인근 파티룸",
    price: "3만원",
    highlight: true,
  },
  {
    tag: "CLASSIC",
    title: "시즌 0 파일럿 프로그램",
    description: "검증된 인기 게임 재진행. 파일럿에서 호평받은 게임들을 새로운 멤버와 함께.",
    date: "3/28 (토)",
    time: "12:00 - 18:00",
    location: "홍대입구역 인근 파티룸",
    price: "3만원",
    highlight: false,
  },
];

export default function Seasons() {
  return (
    <section className="px-4 py-24 md:py-32" id="seasons">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.2em] text-gold/70 uppercase">
            Upcoming Seasons
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            3월 <span className="text-gold">시즌 안내</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {seasons.map((season, i) => (
            <motion.div
              key={season.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative overflow-hidden rounded-xl border p-6 ${
                season.highlight
                  ? "border-gold/40 bg-gold/5"
                  : "border-dark-border bg-dark-card"
              }`}
            >
              {/* Tag */}
              <span
                className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  season.highlight
                    ? "bg-gold/20 text-gold"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {season.tag}
              </span>

              <h3 className="mb-2 text-xl font-bold">{season.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                {season.description}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-white/30">📅</span>
                  <span className="text-white/70">{season.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/30">🕐</span>
                  <span className="text-white/70">{season.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/30">📍</span>
                  <span className="text-white/70">{season.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/30">💰</span>
                  <span className="font-semibold text-gold">
                    {season.price}
                  </span>
                </div>
              </div>

              <a
                href="#reservation"
                className={`mt-6 inline-block w-full rounded-lg py-3 text-center text-sm font-medium transition-all ${
                  season.highlight
                    ? "bg-gold text-black hover:bg-gold-light"
                    : "border border-dark-border bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                참가 신청하기
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

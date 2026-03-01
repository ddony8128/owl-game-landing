"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "독창적인 두뇌게임",
    description: "매 시즌 새로운 오리지널 게임. 어디서도 본 적 없는 규칙, 매번 다른 경험.",
    icon: "🧩",
  },
  {
    title: "실시간 웹 시스템",
    description: "모바일로 참여하는 라이브 게임플레이. 8인 동시접속, 실시간 상호작용.",
    icon: "📡",
  },
  {
    title: "당신이 주인공",
    description: "전략, 협상, 배신. 당신의 선택이 결과를 바꿉니다. 엑스트라는 없습니다.",
    icon: "👑",
  },
];

export default function About() {
  return (
    <section className="px-4 py-24 md:py-32" id="about">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.2em] text-gold/70 uppercase">
            About the Game
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            이 게임에 <span className="text-gold">엑스트라</span>는 없습니다.
          </h2>
          <p className="mx-auto max-w-lg text-white/50">
            부엉이게임은 오프라인에서 펼쳐지는 두뇌 서바이벌 게임입니다.
            참가자 전원이 실시간으로 웹 시스템에 접속해 전략을 짜고, 협상하고, 승부합니다.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-dark-border bg-dark-card p-6 text-center"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gold">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "운영 횟수", value: 2, suffix: "회" },
  { label: "동시접속", value: 8, suffix: "인" },
  { label: "게임 시간", value: 5, suffix: "시간" },
  { label: "오리지널 게임", value: 3, suffix: "종" },
];

const testimonials = [
  {
    text: "GM 시점에서 게임 돌아가는 꼬라지를 보는 게 정말 재미있다. 희로애락이 교차하고 거짓말이 난무하는 게임장.",
    author: "GM 후기",
  },
  {
    text: "다들 재미있어 했다. 특히 '자본주의 마피아'의 반응이 예상보다 좋았다.",
    author: "파일럿 1차",
  },
  {
    text: "후속 콘텐츠를 작성하면서 각 플레이어가 뭘 했는지 다시 들여다보니 충분히 재미있게 느껴졌다.",
    author: "파일럿 2차",
  },
];

export default function Highlights() {
  return (
    <section className="px-4 py-24 md:py-32" id="highlights">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.2em] text-gold/70 uppercase">
            Track Record
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            지난 시즌 <span className="text-gold">하이라이트</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold md:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-dark-border bg-dark-card p-5"
            >
              <p className="mb-3 text-sm leading-relaxed text-white/60 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <cite className="text-xs text-gold/70 not-italic">
                — {item.author}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

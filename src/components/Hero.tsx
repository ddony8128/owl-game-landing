"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,65,0.08)_0%,_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="mb-4 text-sm tracking-[0.3em] text-gold/70 uppercase">
          Brain Survival Game
        </p>
        <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
          <span className="text-gold">부엉이</span>게임
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-white/60 md:text-xl">
          모두가 주인공이 되는 두뇌 서바이벌
        </p>
        <a
          href="#reservation"
          className="inline-block rounded-full border border-gold bg-gold/10 px-8 py-3 font-medium text-gold transition-all hover:bg-gold/20"
        >
          참가 신청하기
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-5 rounded-full border border-white/20 p-1"
        >
          <div className="h-2 w-full rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

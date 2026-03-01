"use client";

import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://forms.gle/TFRfcfJ7U7KGPk9Q7";

export default function Reservation() {
  return (
    <section className="px-4 py-24 md:py-32" id="reservation">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm tracking-[0.2em] text-gold/70 uppercase">
            Apply Now
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-gold">참가 신청</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-white/50">
            아래 버튼을 눌러 Google Forms에서 참가 신청서를 작성해주세요.
            신청 마감일은 <span className="text-gold font-semibold">3/6 (목)</span>입니다.
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold px-10 py-4 text-lg font-bold text-black transition-all hover:bg-gold-light hover:scale-105"
          >
            참가 신청하기 →
          </a>

          <div className="mt-12 rounded-xl border border-dark-border bg-dark-card p-6">
            <h3 className="mb-4 text-sm font-semibold text-white/40 uppercase tracking-wider">
              안내사항
            </h3>
            <ul className="space-y-3 text-left text-sm text-white/50">
              <li className="flex gap-3">
                <span className="shrink-0 text-gold">•</span>
                참가비는 현장에서 수령합니다.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-gold">•</span>
                인원 제한이 있어 선착순 마감될 수 있습니다.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-gold">•</span>
                개인 스마트폰(충전 상태)을 지참해주세요.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-gold">•</span>
                문의사항은 블로그를 통해 연락주세요.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

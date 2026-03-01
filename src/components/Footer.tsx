export default function Footer() {
  return (
    <footer className="border-t border-dark-border px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-lg font-bold text-gold">부엉이게임</p>
        <p className="mb-6 text-sm text-white/40">
          기획 · 개발 · 운영 : 또니
        </p>
        <div className="flex justify-center gap-6 text-sm text-white/40">
          <a
            href="https://m.blog.naver.com/ddoddony"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            블로그
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://forms.gle/TFRfcfJ7U7KGPk9Q7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            참가 신청
          </a>
        </div>
        <p className="mt-8 text-xs text-white/20">
          © 2026 부엉이게임. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

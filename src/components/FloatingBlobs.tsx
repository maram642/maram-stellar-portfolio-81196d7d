export function FloatingBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-60 mix-blend-multiply blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #cfc8ff 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-20 -right-24 h-[460px] w-[460px] rounded-full opacity-55 mix-blend-multiply blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #b8efea 0%, transparent 70%)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-120px] left-1/3 h-[400px] w-[400px] rounded-full opacity-45 mix-blend-multiply blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #ffd0d0 0%, transparent 70%)", animationDelay: "-12s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 h-[320px] w-[320px] rounded-full opacity-40 mix-blend-multiply blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #e5dcff 0%, transparent 70%)", animationDelay: "-3s" }}
      />
    </div>
  );
}
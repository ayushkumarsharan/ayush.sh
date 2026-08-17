export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  return dateString;
}

export function triggerConfetti() {
  if (typeof window === "undefined") return;
  import("canvas-confetti").then((confettiModule) => {
    const confetti = confettiModule.default;
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#14b8a6", "#2dd4bf", "#f59e0b", "#93c5fd"]
    });
  }).catch(() => {});
}

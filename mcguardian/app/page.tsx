import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <iframe src="https://storage.googleapis.com/maps-solutions-tabqrwso62/commutes/zemm/commutes.html"
          width="100%" height="100%"
          style="border:0;"
        loading="lazy">
      </iframe>
      </main>
    </div>
  );
}

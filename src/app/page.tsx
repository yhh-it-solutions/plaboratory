export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          PLaboratory.com
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Certified Gems and Rudraksha Beads Testing Laboratory
        </p>
        <p className="text-base text-gray-500">
          Our website is currently under construction.<br />
          Stay tuned for updates.
        </p>
      </main>

      <footer className="row-start-3 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} PLaboratory. All rights reserved.
      </footer>
    </div>
  );
}

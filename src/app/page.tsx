export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-gray-600">
      <div className="w-[200px] [perspective:1000px]">
        <img
          src="/LogoSerra.svg"
          alt="Logo Serra Jr."
          className="w-full animate-[spin_5s_linear_infinite] [transform-style:preserve-3d]"
        />
      </div>
    </main>
  );
}

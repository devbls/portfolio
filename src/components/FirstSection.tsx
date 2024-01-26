import cv from "../assets/CVBrennoSantos.pdf";

export const FirstSection = () => {
  return (
    <div className="h-[calc(100vh-5rem)]">
      <div className="h-full flex items-center justify-between px-20">
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-5xl text-zinc-50">Olá, eu sou o</p>
          <span className="font-poppins text-5xl text-purple-500">
            Brenno Santos
          </span>
          <p className="font-poppins text-xl text-zinc-500">
            Sou desenvolvedor Frontend
          </p>
          <button className="h-8 w-36 mt-4 text-sm font-dm bg-purple-500 hover:bg-purple-600 text-zinc-200 rounded-full transition">
            <a href={cv} download="CV" target="_blank">
              Download CV
            </a>
          </button>
        </div>
        <img className="h-128 w-128" src="/logo.webp" alt="Logo" />
      </div>
    </div>
  );
};

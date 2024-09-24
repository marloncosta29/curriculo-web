import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <div className="py-16 px-4 flex flex-col gap-12 md:flex-row-reverse md:max-w-[1280px] md:w-full md:mx-auto md:justify-between">
      <div className="flex items-center justify-center">
        <div className="bg-gray-300 px-3 pb-3 md:p-0">
          <img
            className="border-8 -mt-5 border-white w-60 h-72 object-cover md:shadow-sharp-right"
            src="https://github.com/marloncosta29.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 md:max-w-[768px] md:w-full">
        <div className="flex flex-col gap-12">
          <h1 className="text-3xl font-semibold leading-10 md:text-7xl">
            Olá, eu sou Marlon 👋
          </h1>
          <p className="text-base text-gray-600">
            Sou desenvolvedor Fullstack Sênior com foco em React e Node.js,
            também atuando com React Native. Tenho experiência em frameworks
            modernos como Tailwind, Next.js e NestJS, o que me permite
            desenvolver aplicações web e mobile completas, acessíveis e
            responsivas. Com mais de 12 anos de experiência no setor de
            tecnologia, estou constantemente em busca de aprimorar minhas
            habilidades e me manter atualizado com as melhores práticas e novas
            ferramentas do mercado.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span>Canoas/RS, Brasil</span>
          <span>Disponivel para novas oportunidades</span>
        </div>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/marloncosta29/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/marloncosta29"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

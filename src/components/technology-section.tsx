import { TecnologyIcon } from "./tecnology-icon";

export function TechnologySection() {
  return (
    <div className="flex flex-col gap-6 px-4 py-16 md:max-w-[1280px] md:w-full md:mx-auto">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <span className="bg-gray-200 border-none rounded-xl px-5 py-1">
          Minhas habilidades
        </span>
        <p>Aqui está algumas tecnologias que eu domino e conheço:</p>
      </div>
      <div className="grid grid-cols-3 gap-14 md:grid-cols-8">
        <TecnologyIcon iconType="javascript" />
        <TecnologyIcon iconType="typecript" />
        <TecnologyIcon iconType="react" />
        <TecnologyIcon iconType="expo" />
        <TecnologyIcon iconType="reactNative" />
        <TecnologyIcon iconType="git" />
        <TecnologyIcon iconType="nestjs" />
        <TecnologyIcon iconType="nextjs" />
        <TecnologyIcon iconType="php" />
        <TecnologyIcon iconType="nodejs" />
        <TecnologyIcon iconType="tailwind" />
      </div>
    </div>
  );
}

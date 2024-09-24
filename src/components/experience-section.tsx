import { experience } from "@/utils/experience";

export function ExperienceSection() {
  return (
    <div id="#experience" className="bg-gray-100">
      <div className="px-4 py-16 flex flex-col gap-6 md:max-w-[1280px] md:w-full md:mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <span className="bg-gray-200 border-none rounded-xl px-5 py-1">
            Experiencia
          </span>
          <p>Algumas das empresas que eu já trabalhei:</p>
        </div>
        {experience.map((exp) => {
          return (
            <div key={exp.id} className="bg-white rounded-xl p-5">
              <div className="mb-4 flex flex-col">
                <span className="text-3xl font-bold text-green-400 mb-4">
                  {exp.company}
                </span>
                <span className="text-gray-700 text-base leading-6 font-normal">
                  {exp.period}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-lg leading-7 text-gray-800">
                  {exp.position}
                </span>
                <p>{exp.assignments}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AboutMeSection() {
  return (
    <div
      id="about"
      className="flex flex-col gap-6 bg-gray-100 px-4 pt-12 md:py-24 md:px-28"
    >
      <div className="w-full flex items-center justify-center">
        <span className="bg-gray-200 border-none rounded-xl px-5 py-1">
          Sobre min
        </span>
      </div>
      <div className="flex flex-col gap-6 md:max-w-[1280px] md:w-full md:mx-auto">
        <h2 className="text-2xl leading-8 font-semibold">
          Curioso sobre min? aqui esta:
        </h2>
        <div className="text-base leading-6 font-normal flex flex-col gap-4 md:w-full">
          <p>
            Tenho mais de 12 anos de experiência na área de tecnologia,
            iniciando minha carreira em 2012 no suporte técnico a sistemas de
            ERP. Nesse período, fui responsável por atender a problemas e
            dúvidas dos usuários, realizar instalações e configurações in loco,
            além de prestar consultoria e implantar sistemas para clientes,
            incluindo a instalação de bancos de dados, configuração de redes e
            ajustes nos sistemas nas máquinas dos clientes.
          </p>
          <p>
            Posteriormente, migrei para a área de desenvolvimento, com um foco
            inicial em frontend utilizando AngularJS e React. Especializei-me em
            React, e essa jornada levou-me a expandir minhas habilidades como
            desenvolvedor fullstack, atuando tanto no desenvolvimento de sites
            quanto de aplicativos mobile, além de backend. Com o tempo, evoluí
            para a posição de desenvolvedor sênior.
          </p>
          <p>
            Durante minha carreira, também adquiri conhecimento em PHP, tendo
            trabalhado em projetos com Laravel e, mais intensamente, com
            Symfony. Nesse contexto, fui parte de um projeto monolítico que
            integrava frontend e backend, desenvolvendo interfaces e rotas
            conforme as demandas do time de produto.
          </p>
          <p>
            Sempre trabalhei em ambientes ágeis, utilizando Scrum e Kanban como
            metodologias para garantir entregas eficientes e de qualidade. No
            momento, estou em busca de novas oportunidades devido ao
            encerramento das atividades da última empresa em que trabalhei, que
            foi adquirida e teve sua tecnologia descontinuada. Sou apaixonado
            por tecnologia, tenho uma forte vontade de aprender continuamente e
            estou sempre comprometido em entregar o meu melhor em cada projeto.
          </p>
        </div>
      </div>
    </div>
  );
}

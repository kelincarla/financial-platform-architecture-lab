var e=e=>{switch(e){case`index`:return`---\r
title: "Landscape view"\r
---\r
graph TB\r
  Franqueado@{ icon: "fa:user", shape: rounded, label: "Franqueado" }\r
  ClienteInterno@{ icon: "fa:user", shape: rounded, label: "Cliente Interno" }\r
  Suporte@{ icon: "fa:user", shape: rounded, label: "Equipe de Suporte" }\r
  Plataforma@{ shape: rectangle, label: "Plataforma de Gestão Financeira" }\r
  Identidade@{ shape: rectangle, label: "Serviço de Identidade" }\r
  Email@{ shape: rectangle, label: "Provedor de E-mail" }\r
  Adquirentes@{ shape: rectangle, label: "Adquirentes (via FTPS)" }\r
  Openfinance@{ shape: rectangle, label: "Instituições financeiras (Open Finance)" }\r
  Parceiros@{ shape: rectangle, label: "Sistemas Parceiros" }\r
  Franqueado -. "\`Utiliza\`" .-> Plataforma\r
  ClienteInterno -. "\`Opera\`" .-> Plataforma\r
  Suporte -. "\`Presta suporte\`" .-> Plataforma\r
  Plataforma -. "\`Autentica usuários\`" .-> Identidade\r
  Plataforma -. "\`Envia notificações\`" .-> Email\r
  Plataforma -. "\`Troca arquivos\`" .-> Adquirentes\r
  Plataforma -. "\`Consulta dados\`" .-> Openfinance\r
  Plataforma -. "\`Integra\`" .-> Parceiros\r
  Parceiros -. "\`Notifica eventos\`" .-> Plataforma\r
`;case`contexto`:return`---\r
title: "C1 - Contexto da Plataforma Financeira"\r
---\r
graph TB\r
  subgraph Plataforma["\`Plataforma de Gestão Financeira\`"]\r
    Plataforma.Portal@{ shape: rounded, label: "Portal Web MVC" }\r
    Plataforma.Api@{ shape: rectangle, label: "API Financeira" }\r
    Plataforma.React@{ shape: rounded, label: "Microfrontend React" }\r
    Plataforma.Vue@{ shape: rounded, label: "Microfrontend Vue" }\r
    Plataforma.Node@{ shape: rectangle, label: "Microserviço Node" }\r
    Plataforma.Workers@{ shape: rectangle, label: "Workers" }\r
    Plataforma.Cronjobs@{ shape: rectangle, label: "CronJobs" }\r
    Plataforma.Rabbit@{ shape: rectangle, label: "RabbitMQ" }\r
    Plataforma.Mongo@{ shape: disk, label: "MongoDB" }\r
  end\r
`;case`containers`:return`---\r
title: "C2 - Containers"\r
---\r
graph TB\r
  PlataformaPortal@{ shape: rounded, label: "Portal Web MVC" }\r
  PlataformaApi@{ shape: rectangle, label: "API Financeira" }\r
  PlataformaReact@{ shape: rounded, label: "Microfrontend React" }\r
  PlataformaVue@{ shape: rounded, label: "Microfrontend Vue" }\r
  PlataformaNode@{ shape: rectangle, label: "Microserviço Node" }\r
  PlataformaWorkers@{ shape: rectangle, label: "Workers" }\r
  PlataformaCronjobs@{ shape: rectangle, label: "CronJobs" }\r
  PlataformaRabbit@{ shape: rectangle, label: "RabbitMQ" }\r
  PlataformaMongo@{ shape: disk, label: "MongoDB" }\r
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
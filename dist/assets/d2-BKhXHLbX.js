var e=e=>{switch(e){case`index`:return`direction: down\r
\r
Franqueado: {\r
  label: "Franqueado"\r
  shape: c4-person\r
}\r
ClienteInterno: {\r
  label: "Cliente Interno"\r
  shape: c4-person\r
}\r
Suporte: {\r
  label: "Equipe de Suporte"\r
  shape: c4-person\r
}\r
Plataforma: {\r
  label: "Plataforma de Gestão Financeira"\r
}\r
Identidade: {\r
  label: "Serviço de Identidade"\r
}\r
Email: {\r
  label: "Provedor de E-mail"\r
}\r
Adquirentes: {\r
  label: "Adquirentes (via FTPS)"\r
}\r
Openfinance: {\r
  label: "Instituições financeiras (Open Finance)"\r
}\r
Parceiros: {\r
  label: "Sistemas Parceiros"\r
}\r
\r
Franqueado -> Plataforma: "Utiliza"\r
ClienteInterno -> Plataforma: "Opera"\r
Suporte -> Plataforma: "Presta suporte"\r
Plataforma -> Identidade: "Autentica usuários"\r
Plataforma -> Email: "Envia notificações"\r
Plataforma -> Adquirentes: "Troca arquivos"\r
Plataforma -> Openfinance: "Consulta dados"\r
Plataforma -> Parceiros: "Integra"\r
Parceiros -> Plataforma: "Notifica eventos"\r
`;case`contexto`:return`direction: down\r
\r
Plataforma: {\r
  label: "Plataforma de Gestão Financeira"\r
\r
  Portal: {\r
    label: "Portal Web MVC"\r
  }\r
  Api: {\r
    label: "API Financeira"\r
  }\r
  React: {\r
    label: "Microfrontend React"\r
  }\r
  Vue: {\r
    label: "Microfrontend Vue"\r
  }\r
  Node: {\r
    label: "Microserviço Node"\r
  }\r
  Workers: {\r
    label: "Workers"\r
  }\r
  Cronjobs: {\r
    label: "CronJobs"\r
  }\r
  Rabbit: {\r
    label: "RabbitMQ"\r
  }\r
  Mongo: {\r
    label: "MongoDB"\r
    shape: stored_data\r
  }\r
}\r
`;case`containers`:return`direction: down\r
\r
PlataformaPortal: {\r
  label: "Portal Web MVC"\r
}\r
PlataformaApi: {\r
  label: "API Financeira"\r
}\r
PlataformaReact: {\r
  label: "Microfrontend React"\r
}\r
PlataformaVue: {\r
  label: "Microfrontend Vue"\r
}\r
PlataformaNode: {\r
  label: "Microserviço Node"\r
}\r
PlataformaWorkers: {\r
  label: "Workers"\r
}\r
PlataformaCronjobs: {\r
  label: "CronJobs"\r
}\r
PlataformaRabbit: {\r
  label: "RabbitMQ"\r
}\r
PlataformaMongo: {\r
  label: "MongoDB"\r
  shape: stored_data\r
}\r
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
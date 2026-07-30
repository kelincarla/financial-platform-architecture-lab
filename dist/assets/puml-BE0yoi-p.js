var e=e=>{switch(e){case`index`:return`@startuml\r
title "Landscape view"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Franqueado>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam person<<ClienteInterno>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam person<<Suporte>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Plataforma>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Identidade>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Email>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Adquirentes>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Openfinance>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Parceiros>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
person "==Franqueado\\n\\nUtiliza a plataforma para gestão financeira." <<Franqueado>> as Franqueado\r
person "==Cliente Interno\\n\\nResponsável pela operação financeira." <<ClienteInterno>> as ClienteInterno\r
person "==Equipe de Suporte\\n\\nAtende usuários da plataforma." <<Suporte>> as Suporte\r
rectangle "==Plataforma de Gestão Financeira\\n\\nPlataforma utilizada para gestão financeira de redes de franquias." <<Plataforma>> as Plataforma\r
rectangle "==Serviço de Identidade\\n\\nResponsável pela autenticação e autorização." <<Identidade>> as Identidade\r
rectangle "==Provedor de E-mail\\n\\nResponsável pelo envio de e-mails aos usuários." <<Email>> as Email\r
rectangle "==Adquirentes (via FTPS)\\n\\nRecebem e disponibilizam arquivos financeiros por FTPS." <<Adquirentes>> as Adquirentes\r
rectangle "==Instituições financeiras (Open Finance)\\n\\nDisponibilizam serviços financeiros e dados via Open Finance." <<Openfinance>> as Openfinance\r
rectangle "==Sistemas Parceiros\\n\\nIntegram-se através de APIs REST e Webhooks." <<Parceiros>> as Parceiros\r
\r
Franqueado .[#8D8D8D,thickness=2].> Plataforma : <color:#8D8D8D>Utiliza\r
ClienteInterno .[#8D8D8D,thickness=2].> Plataforma : <color:#8D8D8D>Opera\r
Suporte .[#8D8D8D,thickness=2].> Plataforma : <color:#8D8D8D>Presta suporte\r
Plataforma .[#8D8D8D,thickness=2].> Identidade : <color:#8D8D8D>Autentica usuários\r
Plataforma .[#8D8D8D,thickness=2].> Email : <color:#8D8D8D>Envia notificações\r
Plataforma .[#8D8D8D,thickness=2].> Adquirentes : <color:#8D8D8D>Troca arquivos\r
Plataforma .[#8D8D8D,thickness=2].> Openfinance : <color:#8D8D8D>Consulta dados\r
Plataforma .[#8D8D8D,thickness=2].> Parceiros : <color:#8D8D8D>Integra\r
Parceiros .[#8D8D8D,thickness=2].> Plataforma : <color:#8D8D8D>Notifica eventos\r
@enduml\r
`;case`contexto`:return`@startuml\r
title "C1 - Contexto da Plataforma Financeira"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<PlataformaPortal>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaApi>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaReact>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaVue>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaNode>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaWorkers>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaCronjobs>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaRabbit>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<PlataformaMongo>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
rectangle "Plataforma de Gestão Financeira" <<Plataforma>> as Plataforma {\r
  skinparam RectangleBorderColor<<Plataforma>> #3b82f6\r
  skinparam RectangleFontColor<<Plataforma>> #3b82f6\r
  skinparam RectangleBorderStyle<<Plataforma>> dashed\r
\r
  rectangle "==Portal Web MVC\\n\\n.NET Framework MVC" <<PlataformaPortal>> as PlataformaPortal\r
  rectangle "==API Financeira\\n\\n.NET Framework" <<PlataformaApi>> as PlataformaApi\r
  rectangle "==Microfrontend React" <<PlataformaReact>> as PlataformaReact\r
  rectangle "==Microfrontend Vue" <<PlataformaVue>> as PlataformaVue\r
  rectangle "==Microserviço Node" <<PlataformaNode>> as PlataformaNode\r
  rectangle "==Workers" <<PlataformaWorkers>> as PlataformaWorkers\r
  rectangle "==CronJobs" <<PlataformaCronjobs>> as PlataformaCronjobs\r
  rectangle "==RabbitMQ" <<PlataformaRabbit>> as PlataformaRabbit\r
  database "==MongoDB" <<PlataformaMongo>> as PlataformaMongo\r
}\r
@enduml\r
`;case`containers`:return`@startuml\r
title "C2 - Containers"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<PlataformaPortal>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaApi>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaReact>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaVue>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaNode>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaWorkers>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaCronjobs>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<PlataformaRabbit>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<PlataformaMongo>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
rectangle "==Portal Web MVC\\n\\n.NET Framework MVC" <<PlataformaPortal>> as PlataformaPortal\r
rectangle "==API Financeira\\n\\n.NET Framework" <<PlataformaApi>> as PlataformaApi\r
rectangle "==Microfrontend React" <<PlataformaReact>> as PlataformaReact\r
rectangle "==Microfrontend Vue" <<PlataformaVue>> as PlataformaVue\r
rectangle "==Microserviço Node" <<PlataformaNode>> as PlataformaNode\r
rectangle "==Workers" <<PlataformaWorkers>> as PlataformaWorkers\r
rectangle "==CronJobs" <<PlataformaCronjobs>> as PlataformaCronjobs\r
rectangle "==RabbitMQ" <<PlataformaRabbit>> as PlataformaRabbit\r
database "==MongoDB" <<PlataformaMongo>> as PlataformaMongo\r
@enduml\r
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
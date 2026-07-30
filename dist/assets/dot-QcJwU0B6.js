var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    franqueado [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Franqueado</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Utiliza a plataforma para gestão financeira.</FONT></TD></TR></TABLE>>,
        likec4_id=franqueado,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plataforma [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Plataforma de Gestão Financeira</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Plataforma utilizada para gestão financeira<BR/>de redes de franquias.</FONT></TD></TR></TABLE>>,
        likec4_id=plataforma,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    franqueado -> plataforma [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Utiliza</FONT></TD></TR></TABLE>>,
        likec4_id="2sqlut",
        minlen=1,
        style=dashed];
    clienteinterno [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cliente Interno</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Responsável pela operação financeira.</FONT></TD></TR></TABLE>>,
        likec4_id=clienteInterno,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    clienteinterno -> plataforma [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Opera</FONT></TD></TR></TABLE>>,
        likec4_id="6ulu6k",
        minlen=1,
        style=dashed];
    suporte [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Equipe de Suporte</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Atende usuários da plataforma.</FONT></TD></TR></TABLE>>,
        likec4_id=suporte,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    suporte -> plataforma [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Presta suporte</FONT></TD></TR></TABLE>>,
        likec4_id="1w0tbzj",
        minlen=1,
        style=dashed];
    identidade [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Serviço de Identidade</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Responsável pela autenticação e autorização.</FONT></TD></TR></TABLE>>,
        likec4_id=identidade,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plataforma -> identidade [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Autentica usuários</FONT></TD></TR></TABLE>>,
        likec4_id=mzxkbu,
        minlen=1,
        style=dashed];
    email [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Provedor de E-mail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Responsável pelo envio de e-mails aos<BR/>usuários.</FONT></TD></TR></TABLE>>,
        likec4_id=email,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plataforma -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Envia notificações</FONT></TD></TR></TABLE>>,
        likec4_id="1eiiw3d",
        minlen=1,
        style=dashed];
    adquirentes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Adquirentes (via FTPS)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Recebem e disponibilizam arquivos financeiros<BR/>por FTPS.</FONT></TD></TR></TABLE>>,
        likec4_id=adquirentes,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plataforma -> adquirentes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Troca arquivos</FONT></TD></TR></TABLE>>,
        likec4_id=xrnu06,
        minlen=1,
        style=dashed];
    openfinance [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Instituições financeiras (Open Finance)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Disponibilizam serviços financeiros e dados<BR/>via Open Finance.</FONT></TD></TR></TABLE>>,
        likec4_id=openfinance,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plataforma -> openfinance [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Consulta dados</FONT></TD></TR></TABLE>>,
        likec4_id=jx9yvd,
        minlen=1,
        style=dashed];
    parceiros [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Sistemas Parceiros</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Integram-se através de APIs REST e Webhooks.</FONT></TD></TR></TABLE>>,
        likec4_id=parceiros,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plataforma -> parceiros [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Integra</FONT></TD></TR></TABLE>>,
        likec4_id="1l23tmf",
        style=dashed];
    parceiros -> plataforma [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notifica eventos</FONT></TD></TR></TABLE>>,
        likec4_id="17owt2v",
        style=dashed];
}
`;case`contexto`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=contexto,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_plataforma {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PLATAFORMA DE GESTÃO FINANCEIRA</B></FONT>>,
            likec4_depth=1,
            likec4_id=plataforma,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            portal [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Portal Web MVC</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">.NET Framework MVC</FONT></TD></TR></TABLE>>,
                likec4_id="plataforma.portal",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
            api [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API Financeira</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">.NET Framework</FONT></TD></TR></TABLE>>,
                likec4_id="plataforma.api",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            react [height=2.5,
                label=<<FONT POINT-SIZE="20">Microfrontend React</FONT>>,
                likec4_id="plataforma.react",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
        }
        {
            graph [rank=same];
            vue [height=2.5,
                label=<<FONT POINT-SIZE="20">Microfrontend Vue</FONT>>,
                likec4_id="plataforma.vue",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
            "node" [height=2.5,
                label=<<FONT POINT-SIZE="20">Microserviço Node</FONT>>,
                likec4_id="plataforma.node",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            workers [height=2.5,
                label=<<FONT POINT-SIZE="20">Workers</FONT>>,
                likec4_id="plataforma.workers",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            cronjobs [height=2.5,
                label=<<FONT POINT-SIZE="20">CronJobs</FONT>>,
                likec4_id="plataforma.cronjobs",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            rabbit [height=2.5,
                label=<<FONT POINT-SIZE="20">RabbitMQ</FONT>>,
                likec4_id="plataforma.rabbit",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            mongo [height=2.5,
                label=<<FONT POINT-SIZE="20">MongoDB</FONT>>,
                likec4_id="plataforma.mongo",
                likec4_level=1,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        portal -> vue [minlen=1,
            style=invis];
        vue -> cronjobs [minlen=1,
            style=invis];
    }
    api -> react [style=invis];
    react -> "node" [style=invis];
    "node" -> workers [style=invis];
    rabbit -> mongo [style=invis];
}
`;case`containers`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=containers,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    portal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Portal Web MVC</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">.NET Framework MVC</FONT></TD></TR></TABLE>>,
        likec4_id="plataforma.portal",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    api [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API Financeira</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">.NET Framework</FONT></TD></TR></TABLE>>,
        likec4_id="plataforma.api",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    portal -> api [style=invis];
    react [height=2.5,
        label=<<FONT POINT-SIZE="20">Microfrontend React</FONT>>,
        likec4_id="plataforma.react",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    api -> react [style=invis];
    vue [height=2.5,
        label=<<FONT POINT-SIZE="20">Microfrontend Vue</FONT>>,
        likec4_id="plataforma.vue",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    react -> vue [style=invis];
    "node" [height=2.5,
        label=<<FONT POINT-SIZE="20">Microserviço Node</FONT>>,
        likec4_id="plataforma.node",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workers [height=2.5,
        label=<<FONT POINT-SIZE="20">Workers</FONT>>,
        likec4_id="plataforma.workers",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "node" -> workers [style=invis];
    cronjobs [height=2.5,
        label=<<FONT POINT-SIZE="20">CronJobs</FONT>>,
        likec4_id="plataforma.cronjobs",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workers -> cronjobs [style=invis];
    rabbit [height=2.5,
        label=<<FONT POINT-SIZE="20">RabbitMQ</FONT>>,
        likec4_id="plataforma.rabbit",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cronjobs -> rabbit [style=invis];
    mongo [height=2.5,
        label=<<FONT POINT-SIZE="20">MongoDB</FONT>>,
        likec4_id="plataforma.mongo",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2244pt" height="856pt"
 viewBox="0.00 0.00 2244.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- franqueado -->
<g id="node1" class="node">
<title>franqueado</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1033.94,-825.6 708.69,-825.6 708.69,-645.6 1033.94,-645.6 1033.94,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="817.38" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Franqueado</text>
<text xml:space="preserve" text-anchor="start" x="728.74" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Utiliza a plataforma para gestão financeira.</text>
</g>
<!-- plataforma -->
<g id="node2" class="node">
<title>plataforma</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1471.11,-502.8 1137.52,-502.8 1137.52,-322.8 1471.11,-322.8 1471.11,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1157.58" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Plataforma de Gestão Financeira</text>
<text xml:space="preserve" text-anchor="start" x="1162.15" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plataforma utilizada para gestão financeira</text>
<text xml:space="preserve" text-anchor="start" x="1229.68" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">de redes de franquias.</text>
</g>
<!-- clienteinterno -->
<g id="node3" class="node">
<title>clienteinterno</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1464.34,-825.6 1144.3,-825.6 1144.3,-645.6 1464.34,-645.6 1464.34,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1239.28" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Cliente Interno</text>
<text xml:space="preserve" text-anchor="start" x="1174.24" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Responsável pela operação financeira.</text>
</g>
<!-- suporte -->
<g id="node4" class="node">
<title>suporte</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1894.34,-825.6 1574.3,-825.6 1574.3,-645.6 1894.34,-645.6 1894.34,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1651.47" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Equipe de Suporte</text>
<text xml:space="preserve" text-anchor="start" x="1630.09" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Atende usuários da plataforma.</text>
</g>
<!-- identidade -->
<g id="node5" class="node">
<title>identidade</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="348.63,-180 0,-180 0,0 348.63,0 348.63,-180"/>
<text xml:space="preserve" text-anchor="start" x="77.02" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Serviço de Identidade</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Responsável pela autenticação e autorização.</text>
</g>
<!-- email -->
<g id="node6" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="778.34,-180 458.3,-180 458.3,0 778.34,0 778.34,-180"/>
<text xml:space="preserve" text-anchor="start" x="532.72" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Provedor de E&#45;mail</text>
<text xml:space="preserve" text-anchor="start" x="487.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Responsável pelo envio de e&#45;mails aos</text>
<text xml:space="preserve" text-anchor="start" x="587.89" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">usuários.</text>
</g>
<!-- adquirentes -->
<g id="node7" class="node">
<title>adquirentes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1240.7,-180 887.93,-180 887.93,0 1240.7,0 1240.7,-180"/>
<text xml:space="preserve" text-anchor="start" x="960.39" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Adquirentes (via FTPS)</text>
<text xml:space="preserve" text-anchor="start" x="907.99" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Recebem e disponibilizam arquivos financeiros</text>
<text xml:space="preserve" text-anchor="start" x="1030.14" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">por FTPS.</text>
</g>
<!-- openfinance -->
<g id="node8" class="node">
<title>openfinance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1738.34,-180 1350.29,-180 1350.29,0 1738.34,0 1738.34,-180"/>
<text xml:space="preserve" text-anchor="start" x="1370.35" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Instituições financeiras (Open Finance)</text>
<text xml:space="preserve" text-anchor="start" x="1398.83" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Disponibilizam serviços financeiros e dados</text>
<text xml:space="preserve" text-anchor="start" x="1483.45" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">via Open Finance.</text>
</g>
<!-- parceiros -->
<g id="node9" class="node">
<title>parceiros</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2214.35,-180 1848.28,-180 1848.28,0 2214.35,0 2214.35,-180"/>
<text xml:space="preserve" text-anchor="start" x="1945.18" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Sistemas Parceiros</text>
<text xml:space="preserve" text-anchor="start" x="1868.33" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Integram&#45;se através de APIs REST e Webhooks.</text>
</g>
<!-- franqueado&#45;&gt;plataforma -->
<g id="edge1" class="edge">
<title>franqueado&#45;&gt;plataforma</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M991.35,-645.67C1048.84,-603.07 1117.74,-552.03 1176.23,-508.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1177.52,-511.01 1181.99,-504.43 1174.4,-506.79 1177.52,-511.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1100.8,-562.8 1100.8,-585.6 1144.92,-585.6 1144.92,-562.8 1100.8,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1103.8" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Utiliza</text>
</g>
<!-- plataforma&#45;&gt;identidade -->
<g id="edge4" class="edge">
<title>plataforma&#45;&gt;identidade</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1137.81,-375.22C955.69,-333.77 656.05,-261.31 403.32,-180 388.52,-175.24 373.3,-170.03 358.07,-164.6"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="359.38,-162.28 351.44,-162.22 357.61,-167.22 359.38,-162.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="673.01,-240 673.01,-262.8 794.18,-262.8 794.18,-240 673.01,-240"/>
<text xml:space="preserve" text-anchor="start" x="676.01" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Autentica usuários</text>
</g>
<!-- plataforma&#45;&gt;email -->
<g id="edge5" class="edge">
<title>plataforma&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1137.82,-333.94C1031.56,-284.25 894.24,-220.03 787.47,-170.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="788.87,-167.86 780.96,-167.06 786.64,-172.61 788.87,-167.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="981.88,-240 981.88,-262.8 1101.5,-262.8 1101.5,-240 981.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="984.88" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Envia notificações</text>
</g>
<!-- plataforma&#45;&gt;adquirentes -->
<g id="edge6" class="edge">
<title>plataforma&#45;&gt;adquirentes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1237.78,-322.87C1206.44,-280.97 1168.98,-230.9 1136.9,-188.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.18,-186.69 1132.58,-182.25 1134.98,-189.83 1139.18,-186.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1191.51,-240 1191.51,-262.8 1290.1,-262.8 1290.1,-240 1191.51,-240"/>
<text xml:space="preserve" text-anchor="start" x="1194.51" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Troca arquivos</text>
</g>
<!-- plataforma&#45;&gt;openfinance -->
<g id="edge7" class="edge">
<title>plataforma&#45;&gt;openfinance</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1370.85,-322.87C1402.19,-280.97 1439.65,-230.9 1471.73,-188.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1473.65,-189.83 1476.05,-182.25 1469.45,-186.69 1473.65,-189.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1431.51,-240 1431.51,-262.8 1534.8,-262.8 1534.8,-240 1431.51,-240"/>
<text xml:space="preserve" text-anchor="start" x="1434.51" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Consulta dados</text>
</g>
<!-- plataforma&#45;&gt;parceiros -->
<g id="edge8" class="edge">
<title>plataforma&#45;&gt;parceiros</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1471.1,-338.2C1580.69,-289.85 1724.4,-226.43 1838.83,-175.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1839.84,-178.36 1845.64,-172.93 1837.72,-173.56 1839.84,-178.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1689.61,-240 1689.61,-262.8 1739.2,-262.8 1739.2,-240 1689.61,-240"/>
<text xml:space="preserve" text-anchor="start" x="1692.61" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Integra</text>
</g>
<!-- clienteinterno&#45;&gt;plataforma -->
<g id="edge2" class="edge">
<title>clienteinterno&#45;&gt;plataforma</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1304.32,-645.67C1304.32,-604.47 1304.32,-555.36 1304.32,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1306.94,-513.16 1304.32,-505.66 1301.69,-513.16 1306.94,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1304.32,-562.8 1304.32,-585.6 1349.23,-585.6 1349.23,-562.8 1304.32,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1307.32" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Opera</text>
</g>
<!-- suporte&#45;&gt;plataforma -->
<g id="edge3" class="edge">
<title>suporte&#45;&gt;plataforma</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1615.11,-645.67C1558.02,-603.07 1489.6,-552.03 1431.51,-508.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1433.39,-506.82 1425.81,-504.44 1430.25,-511.03 1433.39,-506.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1532.21,-562.8 1532.21,-585.6 1629.26,-585.6 1629.26,-562.8 1532.21,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1535.21" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Presta suporte</text>
</g>
<!-- parceiros&#45;&gt;plataforma -->
<g id="edge9" class="edge">
<title>parceiros&#45;&gt;plataforma</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1908.88,-179.97C1865.31,-209 1814.97,-239.68 1766.32,-262.8 1675.43,-305.99 1568.82,-341.3 1480.93,-366.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1480.25,-364.16 1473.76,-368.75 1481.7,-369.2 1480.25,-364.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1804.54,-240 1804.54,-262.8 1910.15,-262.8 1910.15,-240 1804.54,-240"/>
<text xml:space="preserve" text-anchor="start" x="1807.54" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Notifica eventos</text>
</g>
</g>
</svg>
`;case`contexto`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="927pt"
 viewBox="0.00 0.00 1306.00 927.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 912.25)">
<g id="clust1" class="cluster">
<title>cluster_plataforma</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-889.2 1268,-889.2 1268,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-876.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PLATAFORMA DE GESTÃO FINANCEIRA</text>
</g>
<!-- portal -->
<g id="node1" class="node">
<title>portal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-828 47.98,-828 47.98,-648 368.02,-648 368.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="133.54" y="-741" font-family="Arial" font-size="20.00" fill="#eff6ff">Portal Web MVC</text>
<text xml:space="preserve" text-anchor="start" x="132.58" y="-718" font-family="Arial" font-size="15.00" fill="#bfdbfe">.NET Framework MVC</text>
</g>
<!-- api -->
<g id="node2" class="node">
<title>api</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-828 477.98,-828 477.98,-648 798.02,-648 798.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="572.41" y="-741" font-family="Arial" font-size="20.00" fill="#eff6ff">API Financeira</text>
<text xml:space="preserve" text-anchor="start" x="581.33" y="-718" font-family="Arial" font-size="15.00" fill="#bfdbfe">.NET Framework</text>
</g>
<!-- react -->
<g id="node3" class="node">
<title>react</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-828 907.98,-828 907.98,-648 1228.02,-648 1228.02,-828"/>
<text xml:space="preserve" text-anchor="start" x="977.96" y="-730" font-family="Arial" font-size="20.00" fill="#eff6ff">Microfrontend React</text>
</g>
<!-- vue -->
<g id="node4" class="node">
<title>vue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-528 47.98,-528 47.98,-348 368.02,-348 368.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="126.29" y="-430" font-family="Arial" font-size="20.00" fill="#eff6ff">Microfrontend Vue</text>
</g>
<!-- node -->
<g id="node5" class="node">
<title>node</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-528 477.98,-528 477.98,-348 798.02,-348 798.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="554.64" y="-430" font-family="Arial" font-size="20.00" fill="#eff6ff">Microserviço Node</text>
</g>
<!-- workers -->
<g id="node6" class="node">
<title>workers</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="1030.78" y="-430" font-family="Arial" font-size="20.00" fill="#eff6ff">Workers</text>
</g>
<!-- cronjobs -->
<g id="node7" class="node">
<title>cronjobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="165.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">CronJobs</text>
</g>
<!-- rabbit -->
<g id="node8" class="node">
<title>rabbit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="592.99" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">RabbitMQ</text>
</g>
<!-- mongo -->
<g id="node9" class="node">
<title>mongo</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1228.02,-211.64C1228.02,-220.67 1156.3,-228 1068,-228 979.7,-228 907.98,-220.67 907.98,-211.64 907.98,-211.64 907.98,-64.36 907.98,-64.36 907.98,-55.33 979.7,-48 1068,-48 1156.3,-48 1228.02,-55.33 1228.02,-64.36 1228.02,-64.36 1228.02,-211.64 1228.02,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1228.02,-211.64C1228.02,-202.61 1156.3,-195.27 1068,-195.27 979.7,-195.27 907.98,-202.61 907.98,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="1023.53" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">MongoDB</text>
</g>
<!-- portal&#45;&gt;vue -->
<!-- api&#45;&gt;react -->
<!-- react&#45;&gt;node -->
<!-- vue&#45;&gt;cronjobs -->
<!-- node&#45;&gt;workers -->
<!-- rabbit&#45;&gt;mongo -->
</g>
</svg>
`;case`containers`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="1110pt"
 viewBox="0.00 0.00 1210.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- portal -->
<g id="node1" class="node">
<title>portal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="85.56" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">Portal Web MVC</text>
<text xml:space="preserve" text-anchor="start" x="84.6" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">.NET Framework MVC</text>
</g>
<!-- api -->
<g id="node2" class="node">
<title>api</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="94.43" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">API Financeira</text>
<text xml:space="preserve" text-anchor="start" x="103.35" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">.NET Framework</text>
</g>
<!-- react -->
<g id="node3" class="node">
<title>react</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="69.98" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Microfrontend React</text>
</g>
<!-- vue -->
<g id="node4" class="node">
<title>vue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="78.31" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">Microfrontend Vue</text>
</g>
<!-- node -->
<g id="node5" class="node">
<title>node</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="506.66" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">Microserviço Node</text>
</g>
<!-- workers -->
<g id="node6" class="node">
<title>workers</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="552.8" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Workers</text>
</g>
<!-- cronjobs -->
<g id="node7" class="node">
<title>cronjobs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="547.22" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">CronJobs</text>
</g>
<!-- rabbit -->
<g id="node8" class="node">
<title>rabbit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="545.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">RabbitMQ</text>
</g>
<!-- mongo -->
<g id="node9" class="node">
<title>mongo</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1180.04,-1063.64C1180.04,-1072.67 1108.32,-1080 1020.02,-1080 931.72,-1080 860,-1072.67 860,-1063.64 860,-1063.64 860,-916.36 860,-916.36 860,-907.33 931.72,-900 1020.02,-900 1108.32,-900 1180.04,-907.33 1180.04,-916.36 1180.04,-916.36 1180.04,-1063.64 1180.04,-1063.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1180.04,-1063.64C1180.04,-1054.61 1108.32,-1047.27 1020.02,-1047.27 931.72,-1047.27 860,-1054.61 860,-1063.64"/>
<text xml:space="preserve" text-anchor="start" x="975.55" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">MongoDB</text>
</g>
<!-- portal&#45;&gt;api -->
<!-- api&#45;&gt;react -->
<!-- react&#45;&gt;vue -->
<!-- node&#45;&gt;workers -->
<!-- workers&#45;&gt;cronjobs -->
<!-- cronjobs&#45;&gt;rabbit -->
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
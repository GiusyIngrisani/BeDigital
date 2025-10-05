
function init() {
    var $ = go.GraphObject.make;
    var myDiagram = $(go.Diagram, "myDiagramDiv", {
        "undoManager.isEnabled": true,
        initialAutoScale: go.Diagram.UniformToFill,
        initialViewportSpot: go.Spot.Center,
        initialDocumentSpot: go.Spot.Center,
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 40 })
    });

    function getColor(level) {
        switch (level) {
            case 0: return "#f4e58f"; // root
            case 1: return "#a9d8ec"; // blu
            case 2: return "#a7f3a7"; // verde
            case 3: return "#ffc8d0"; // rosso
            default: return "#e8e7e7";
        }
    }

    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape, "RoundedRectangle",
                { stroke: null },
                new go.Binding("fill", "level", getColor)),
            $(go.TextBlock,
                {
                    margin: 8,
                    font: "8pt Montserrat, sans-serif",
                    textAlign: "center",
                    wrap: go.TextBlock.WrapFit,
                    maxSize: new go.Size(160, NaN)
                },
                new go.Binding("text", "key"))
        );

    myDiagram.linkTemplate =
        $(go.Link,
            { routing: go.Link.Orthogonal, curve: go.Link.None, corner: 0 },
            $(go.Shape, { strokeWidth: 1, stroke: "#555" }),
            $(go.Shape, { toArrow: "Standard", stroke: null, fill: "#555" })
        );

    myDiagram.model = new go.GraphLinksModel(
        [
            { key: "Il GDPR", level: 0 },

            { key: "Definizione", level: 1 },
            { key: "Regolamento UE 2016/679", level: 2 },
            { key: "In vigore dal 2018", level: 2 },
            { key: "Si applica a tutte le organizzazioni che trattano dati UE", level: 2 },
            { key: "Impatto globale e riferimento internazionale", level: 2 },

            { key: "Obiettivi", level: 1 },
            { key: "Controllo agli individui sui propri dati", level: 2 },
            { key: "Tutela diritti e libertà fondamentali", level: 2 },
            { key: "Armonizzazione tra Stati membri", level: 2 },

            { key: "Obblighi per le organizzazioni", level: 1 },
            { key: "Base giuridica valida per ogni trattamento", level: 2 },
            { key: "Trasparenza nella raccolta e uso dei dati", level: 2 },
            { key: "Monitoraggio e registrazione dei trattamenti", level: 2 },

            { key: "Responsabili del trattamento", level: 1 },
            { key: "Figura distinta dal titolare", level: 2 },
            { key: "Esempi: fornitori cloud, SaaS, analisi web", level: 2 },
            { key: "Entrambi devono rendere conto dei dati trattati", level: 2 },

            { key: "Trasferimenti internazionali", level: 1 },
            { key: "Paesi con protezione adeguata", level: 2 },
            { key: "Clausole contrattuali o BCR in mancanza", level: 2 },
            { key: "Obbligo di informare gli interessati", level: 2 },

            { key: "Consenso (EDPB)", level: 1 },
            { key: "Deve essere libero, specifico, informato", level: 2 },
            { key: "Azione positiva (spunta su casella)", level: 2 },
            { key: "Non valido: scorrimento, caselle preselezionate, cookie wall", level: 2 },

            { key: "Diritti degli interessati", level: 1 },
            { key: "Accesso, rettifica, cancellazione", level: 2 },
            { key: "Limitazione e portabilità dei dati", level: 2 },
            { key: "Opposizione e revoca del consenso", level: 2 },

            { key: "Violazioni dei dati", level: 1 },
            { key: "Notifica al garante entro 72h", level: 2 },
            { key: "Informare gli interessati in caso di rischio elevato", level: 2 },
            { key: "Obbligo DPO per PA e grandi aziende", level: 2 },

            { key: "Conformità al GDPR", level: 1 },
            { key: "Consenso valido e informativa chiara", level: 2 },
            { key: "Documentazione dei consensi", level: 2 },
            { key: "Misure di sicurezza adeguate", level: 2 },

            { key: "Gestione del consenso", level: 1 },
            { key: "Possibilità di modificare o revocare", level: 2 },
            { key: "Accesso alle scelte documentate", level: 2 },
            { key: "Trasparenza su trasferimenti dati", level: 2 },

            { key: "Conclusione", level: 0 },
            { key: "Il GDPR ha elevato la protezione dei dati a diritto fondamentale", level: 1 },
            { key: "Ha rafforzato la fiducia nell’economia digitale", level: 1 },
            { key: "Ha imposto standard globali di responsabilità e sicurezza", level: 1 }
        ],
        [
            { from: "Il GDPR", to: "Definizione" },
            { from: "Definizione", to: "Regolamento UE 2016/679" },
            { from: "Definizione", to: "In vigore dal 2018" },
            { from: "Definizione", to: "Si applica a tutte le organizzazioni che trattano dati UE" },
            { from: "Definizione", to: "Impatto globale e riferimento internazionale" },

            { from: "Il GDPR", to: "Obiettivi" },
            { from: "Obiettivi", to: "Controllo agli individui sui propri dati" },
            { from: "Obiettivi", to: "Tutela diritti e libertà fondamentali" },
            { from: "Obiettivi", to: "Armonizzazione tra Stati membri" },

            { from: "Il GDPR", to: "Obblighi per le organizzazioni" },
            { from: "Obblighi per le organizzazioni", to: "Base giuridica valida per ogni trattamento" },
            { from: "Obblighi per le organizzazioni", to: "Trasparenza nella raccolta e uso dei dati" },
            { from: "Obblighi per le organizzazioni", to: "Monitoraggio e registrazione dei trattamenti" },

            { from: "Il GDPR", to: "Responsabili del trattamento" },
            { from: "Responsabili del trattamento", to: "Figura distinta dal titolare" },
            { from: "Responsabili del trattamento", to: "Esempi: fornitori cloud, SaaS, analisi web" },
            { from: "Responsabili del trattamento", to: "Entrambi devono rendere conto dei dati trattati" },

            { from: "Il GDPR", to: "Trasferimenti internazionali" },
            { from: "Trasferimenti internazionali", to: "Paesi con protezione adeguata" },
            { from: "Trasferimenti internazionali", to: "Clausole contrattuali o BCR in mancanza" },
            { from: "Trasferimenti internazionali", to: "Obbligo di informare gli interessati" },

            { from: "Il GDPR", to: "Consenso (EDPB)" },
            { from: "Consenso (EDPB)", to: "Deve essere libero, specifico, informato" },
            { from: "Consenso (EDPB)", to: "Azione positiva (spunta su casella)" },
            { from: "Consenso (EDPB)", to: "Non valido: scorrimento, caselle preselezionate, cookie wall" },

            { from: "Il GDPR", to: "Diritti degli interessati" },
            { from: "Diritti degli interessati", to: "Accesso, rettifica, cancellazione" },
            { from: "Diritti degli interessati", to: "Limitazione e portabilità dei dati" },
            { from: "Diritti degli interessati", to: "Opposizione e revoca del consenso" },

            { from: "Il GDPR", to: "Violazioni dei dati" },
            { from: "Violazioni dei dati", to: "Notifica al garante entro 72h" },
            { from: "Violazioni dei dati", to: "Informare gli interessati in caso di rischio elevato" },
            { from: "Violazioni dei dati", to: "Obbligo DPO per PA e grandi aziende" },

            { from: "Il GDPR", to: "Conformità al GDPR" },
            { from: "Conformità al GDPR", to: "Consenso valido e informativa chiara" },
            { from: "Conformità al GDPR", to: "Documentazione dei consensi" },
            { from: "Conformità al GDPR", to: "Misure di sicurezza adeguate" },

            { from: "Il GDPR", to: "Gestione del consenso" },
            { from: "Gestione del consenso", to: "Possibilità di modificare o revocare" },
            { from: "Gestione del consenso", to: "Accesso alle scelte documentate" },
            { from: "Gestione del consenso", to: "Trasparenza su trasferimenti dati" },

            { from: "Il GDPR", to: "Conclusione" },
            { from: "Conclusione", to: "Il GDPR ha elevato la protezione dei dati a diritto fondamentale" },
            { from: "Conclusione", to: "Ha rafforzato la fiducia nell’economia digitale" },
            { from: "Conclusione", to: "Ha imposto standard globali di responsabilità e sicurezza" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);


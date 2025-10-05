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
            { key: "Che cos’è un attacco DoS?", level: 0 },

            { key: "Introduzione", level: 1 },
            { key: "DoS = Denial of Service", level: 2 },
            { key: "Obiettivo: bloccare o rallentare un servizio", level: 2 },
            { key: "Conseguenze: economiche, immagine, operative", level: 2 },

            { key: "Meccanismo di base", level: 1 },
            { key: "Un sistema ha risorse limitate", level: 2 },
            { key: "Troppe richieste contemporanee", level: 3 },
            { key: "CPU, memoria o banda si saturano", level: 3 },
            { key: "Il sistema non risponde agli utenti normali", level: 3 },

            { key: "Tipologie di attacco DoS", level: 1 },
            { key: "Flooding", level: 2 },
            { key: "Invio massiccio di richieste automatiche", level: 3 },
            { key: "Esempio: chiamate telefoniche simultanee", level: 3 },
            { key: "Exploitation di vulnerabilità", level: 2 },
            { key: "Sfruttare errori software o protocollo", level: 3 },
            { key: "Esempio: comando che manda in crash il sistema", level: 3 },
            { key: "Resource exhaustion", level: 2 },
            { key: "Consumo eccessivo di memoria o disco", level: 3 },
            { key: "Esempio: riempire il server con dati inutili", level: 3 },

            { key: "Esempi storici", level: 1 },
            { key: "Attacchi ai siti e-commerce e istituzionali (2000)", level: 2 },
            { key: "Caso Yahoo! 2000 → portale offline per ore", level: 3 },

            { key: "Impatto di un attacco DoS", level: 1 },
            { key: "Interruzione di servizi essenziali", level: 2 },
            { key: "Perdite economiche e costi di ripristino", level: 2 },
            { key: "Danni di immagine e perdita di fiducia", level: 2 },
            { key: "Usato come copertura per altri attacchi", level: 2 },
            { key: "Esempio: blocco pagamenti online in banca", level: 3 },

            { key: "Conclusione", level: 0 },
            { key: "Minaccia semplice ma devastante", level: 1 },
            { key: "Prevenzione tecnica: firewall, IDS, filtri", level: 2 },
            { key: "Strategie organizzative: continuità operativa", level: 2 }
        ],
        [
            { from: "Che cos’è un attacco DoS?", to: "Introduzione" },
            { from: "Introduzione", to: "DoS = Denial of Service" },
            { from: "Introduzione", to: "Obiettivo: bloccare o rallentare un servizio" },
            { from: "Introduzione", to: "Conseguenze: economiche, immagine, operative" },

            { from: "Che cos’è un attacco DoS?", to: "Meccanismo di base" },
            { from: "Meccanismo di base", to: "Un sistema ha risorse limitate" },
            { from: "Un sistema ha risorse limitate", to: "Troppe richieste contemporanee" },
            { from: "Un sistema ha risorse limitate", to: "CPU, memoria o banda si saturano" },
            { from: "Un sistema ha risorse limitate", to: "Il sistema non risponde agli utenti normali" },

            { from: "Che cos’è un attacco DoS?", to: "Tipologie di attacco DoS" },
            { from: "Tipologie di attacco DoS", to: "Flooding" },
            { from: "Flooding", to: "Invio massiccio di richieste automatiche" },
            { from: "Flooding", to: "Esempio: chiamate telefoniche simultanee" },
            { from: "Tipologie di attacco DoS", to: "Exploitation di vulnerabilità" },
            { from: "Exploitation di vulnerabilità", to: "Sfruttare errori software o protocollo" },
            { from: "Exploitation di vulnerabilità", to: "Esempio: comando che manda in crash il sistema" },
            { from: "Tipologie di attacco DoS", to: "Resource exhaustion" },
            { from: "Resource exhaustion", to: "Consumo eccessivo di memoria o disco" },
            { from: "Resource exhaustion", to: "Esempio: riempire il server con dati inutili" },

            { from: "Che cos’è un attacco DoS?", to: "Esempi storici" },
            { from: "Esempi storici", to: "Attacchi ai siti e-commerce e istituzionali (2000)" },
            { from: "Esempi storici", to: "Caso Yahoo! 2000 → portale offline per ore" },

            { from: "Che cos’è un attacco DoS?", to: "Impatto di un attacco DoS" },
            { from: "Impatto di un attacco DoS", to: "Interruzione di servizi essenziali" },
            { from: "Impatto di un attacco DoS", to: "Perdite economiche e costi di ripristino" },
            { from: "Impatto di un attacco DoS", to: "Danni di immagine e perdita di fiducia" },
            { from: "Impatto di un attacco DoS", to: "Usato come copertura per altri attacchi" },
            { from: "Usato come copertura per altri attacchi", to: "Esempio: blocco pagamenti online in banca" },

            { from: "Che cos’è un attacco DoS?", to: "Conclusione" },
            { from: "Conclusione", to: "Minaccia semplice ma devastante" },
            { from: "Conclusione", to: "Prevenzione tecnica: firewall, IDS, filtri" },
            { from: "Conclusione", to: "Strategie organizzative: continuità operativa" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);


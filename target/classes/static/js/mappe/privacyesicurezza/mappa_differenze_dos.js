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
            { key: "Differenza tra DoS e DDoS", level: 0 },

            { key: "Introduzione", level: 1 },
            { key: "Stesso obiettivo: bloccare un servizio online", level: 2 },
            { key: "Differenza = numero di fonti", level: 2 },
            { key: "Esempio: DoS = 1 persona blocca la porta", level: 3 },
            { key: "Esempio: DDoS = centinaia di persone bloccano l’ingresso", level: 3 },

            { key: "Attacco DoS", level: 1 },
            { key: "Origina da una singola fonte", level: 2 },
            { key: "Invio massiccio di richieste al sistema", level: 2 },
            { key: "Più facile da individuare e contrastare", level: 2 },
            { key: "Limite: potenza legata alle risorse di una sola macchina", level: 2 },

            { key: "Attacco DDoS", level: 1 },
            { key: "Versione distribuita e più potente del DoS", level: 2 },
            { key: "Parte da migliaia di dispositivi (botnet)", level: 2 },
            { key: "Ogni dispositivo manda poco traffico → effetto enorme", level: 2 },
            { key: "Caratteristiche principali", level: 2 },
            { key: "Capacità distruttiva elevatissima", level: 3 },
            { key: "Molto difficile da difendere", level: 3 },
            { key: "Spesso sfrutta dispositivi IoT poco protetti", level: 3 },

            { key: "Esempi storici", level: 1 },
            { key: "DoS: Ping of Death (anni ’90)", level: 2 },
            { key: "DDoS: Botnet Mirai 2016 (Twitter, Netflix, Spotify)", level: 2 },

            { key: "Conclusione", level: 0 },
            { key: "DoS = attacco circoscritto e più semplice da fermare", level: 1 },
            { key: "DDoS = evoluzione distribuita, molto più pericolosa", level: 1 },
            { key: "Difesa: filtri di rete, anti-bot, infrastrutture scalabili", level: 1 }
        ],
        [
            { from: "Differenza tra DoS e DDoS", to: "Introduzione" },
            { from: "Introduzione", to: "Stesso obiettivo: bloccare un servizio online" },
            { from: "Introduzione", to: "Differenza = numero di fonti" },
            { from: "Differenza = numero di fonti", to: "Esempio: DoS = 1 persona blocca la porta" },
            { from: "Differenza = numero di fonti", to: "Esempio: DDoS = centinaia di persone bloccano l’ingresso" },

            { from: "Differenza tra DoS e DDoS", to: "Attacco DoS" },
            { from: "Attacco DoS", to: "Origina da una singola fonte" },
            { from: "Attacco DoS", to: "Invio massiccio di richieste al sistema" },
            { from: "Attacco DoS", to: "Più facile da individuare e contrastare" },
            { from: "Attacco DoS", to: "Limite: potenza legata alle risorse di una sola macchina" },

            { from: "Differenza tra DoS e DDoS", to: "Attacco DDoS" },
            { from: "Attacco DDoS", to: "Versione distribuita e più potente del DoS" },
            { from: "Attacco DDoS", to: "Parte da migliaia di dispositivi (botnet)" },
            { from: "Attacco DDoS", to: "Ogni dispositivo manda poco traffico → effetto enorme" },
            { from: "Attacco DDoS", to: "Caratteristiche principali" },
            { from: "Caratteristiche principali", to: "Capacità distruttiva elevatissima" },
            { from: "Caratteristiche principali", to: "Molto difficile da difendere" },
            { from: "Caratteristiche principali", to: "Spesso sfrutta dispositivi IoT poco protetti" },

            { from: "Differenza tra DoS e DDoS", to: "Esempi storici" },
            { from: "Esempi storici", to: "DoS: Ping of Death (anni ’90)" },
            { from: "Esempi storici", to: "DDoS: Botnet Mirai 2016 (Twitter, Netflix, Spotify)" },

            { from: "Differenza tra DoS e DDoS", to: "Conclusione" },
            { from: "Conclusione", to: "DoS = attacco circoscritto e più semplice da fermare" },
            { from: "Conclusione", to: "DDoS = evoluzione distribuita, molto più pericolosa" },
            { from: "Conclusione", to: "Difesa: filtri di rete, anti-bot, infrastrutture scalabili" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);


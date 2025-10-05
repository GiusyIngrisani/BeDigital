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
            { key: "Dati personali e rischi nell’IA", level: 0 },

            { key: "Introduzione", level: 1 },
            { key: "Protezione dati = principio fondamentale UE", level: 2 },
            { key: "IA rende la privacy questione sociale", level: 2 },
            { key: "Esempi di IA quotidiana", level: 2 },
            { key: "Riconoscimento facciale", level: 3 },
            { key: "Algoritmi di raccomandazione", level: 3 },
            { key: "Decisioni su prestiti", level: 3 },
            { key: "Questioni chiave", level: 2 },
            { key: "Liceità", level: 3 },
            { key: "Proporzionalità", level: 3 },
            { key: "Trasparenza", level: 3 },

            { key: "Trattamento dei dati nell’IA", level: 1 },
            { key: "IA richiede grandi dataset", level: 2 },
            { key: "Dati comuni", level: 3 },
            { key: "Dati sensibili", level: 2 },
            { key: "Biometrici", level: 3 },
            { key: "Genetici", level: 3 },
            { key: "Sanitari", level: 3 },
            { key: "Regole GDPR", level: 2 },
            { key: "Liceità e correttezza", level: 3 },
            { key: "Minimizzazione", level: 3 },
            { key: "Limitazione conservazione", level: 3 },
            { key: "Trasparenza", level: 3 },

            { key: "Rischi per la privacy", level: 1 },
            { key: "Profilazione e microtargeting", level: 2 },
            { key: "Pubblicità mirate sui social", level: 3 },
            { key: "Bias e discriminazione", level: 2 },
            { key: "Esempio: selezione personale penalizzante", level: 3 },
            { key: "Sorveglianza diffusa", level: 2 },
            { key: "Videocamere intelligenti", level: 3 },
            { key: "Rischio di re-identificazione", level: 2 },
            { key: "Esempio: dati sanitari anonimi → identificabili", level: 3 }
        ],
        [
            { from: "Dati personali e rischi nell’IA", to: "Introduzione" },
            { from: "Introduzione", to: "Protezione dati = principio fondamentale UE" },
            { from: "Introduzione", to: "IA rende la privacy questione sociale" },
            { from: "Introduzione", to: "Esempi di IA quotidiana" },
            { from: "Esempi di IA quotidiana", to: "Riconoscimento facciale" },
            { from: "Esempi di IA quotidiana", to: "Algoritmi di raccomandazione" },
            { from: "Esempi di IA quotidiana", to: "Decisioni su prestiti" },
            { from: "Introduzione", to: "Questioni chiave" },
            { from: "Questioni chiave", to: "Liceità" },
            { from: "Questioni chiave", to: "Proporzionalità" },
            { from: "Questioni chiave", to: "Trasparenza" },

            { from: "Dati personali e rischi nell’IA", to: "Trattamento dei dati nell’IA" },
            { from: "Trattamento dei dati nell’IA", to: "IA richiede grandi dataset" },
            { from: "IA richiede grandi dataset", to: "Dati comuni" },
            { from: "Trattamento dei dati nell’IA", to: "Dati sensibili" },
            { from: "Dati sensibili", to: "Biometrici" },
            { from: "Dati sensibili", to: "Genetici" },
            { from: "Dati sensibili", to: "Sanitari" },
            { from: "Trattamento dei dati nell’IA", to: "Regole GDPR" },
            { from: "Regole GDPR", to: "Liceità e correttezza" },
            { from: "Regole GDPR", to: "Minimizzazione" },
            { from: "Regole GDPR", to: "Limitazione conservazione" },
            { from: "Regole GDPR", to: "Trasparenza" },

            { from: "Dati personali e rischi nell’IA", to: "Rischi per la privacy" },
            { from: "Rischi per la privacy", to: "Profilazione e microtargeting" },
            { from: "Profilazione e microtargeting", to: "Pubblicità mirate sui social" },
            { from: "Rischi per la privacy", to: "Bias e discriminazione" },
            { from: "Bias e discriminazione", to: "Esempio: selezione personale penalizzante" },
            { from: "Rischi per la privacy", to: "Sorveglianza diffusa" },
            { from: "Sorveglianza diffusa", to: "Videocamere intelligenti" },
            { from: "Rischi per la privacy", to: "Rischio di re-identificazione" },
            { from: "Rischio di re-identificazione", to: "Esempio: dati sanitari anonimi → identificabili" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);


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
            { key: "Diritti e tutele nell’IA", level: 0 },

            { key: "Decisioni automatizzate e diritti", level: 1 },
            { key: "Art. 22 GDPR: no decisioni solo automatizzate", level: 2 },
            { key: "Intervento umano", level: 2 },
            { key: "Esempio: prestito negato rivalutato da funzionario", level: 3 },
            { key: "Diritto alla spiegazione", level: 2 },
            { key: "Esempio: candidato escluso da concorso", level: 3 },
            { key: "Diritto alla contestazione", level: 2 },
            { key: "Opporsi a decisioni arbitrarie o discriminatorie", level: 3 },
            { key: "Persona al centro, non la macchina", level: 2 },

            { key: "Principi di tutela e regolamentazione", level: 1 },
            { key: "Privacy by design e by default", level: 2 },
            { key: "Anonimizzazione e pseudonimizzazione", level: 2 },
            { key: "Audit algoritmici", level: 2 },
            { key: "Verifiche indipendenti su equità e trasparenza", level: 3 },
            { key: "Informative accessibili", level: 2 },
            { key: "Spiegare funzionamento IA agli utenti", level: 3 },
            { key: "AI Act europeo", level: 2 },
            { key: "Approccio basato sul rischio", level: 3 },
            { key: "Classificazione: inaccettabile, alto, limitato, minimo", level: 3 },
            { key: "Obblighi stringenti per IA ad alto rischio", level: 3 },

            { key: "Conclusione", level: 0 },
            { key: "IA = innovazione ma anche vulnerabilità", level: 1 },
            { key: "Privacy = fiducia e diritti fondamentali", level: 2 },
            { key: "Obiettivo: conciliare progresso e tutela", level: 2 },
            { key: "IA come strumento di emancipazione, non di controllo", level: 2 },
            { key: "La privacy resta diritto inviolabile", level: 2 }
        ],
        [
            { from: "Diritti e tutele nell’IA", to: "Decisioni automatizzate e diritti" },
            { from: "Decisioni automatizzate e diritti", to: "Art. 22 GDPR: no decisioni solo automatizzate" },
            { from: "Decisioni automatizzate e diritti", to: "Intervento umano" },
            { from: "Intervento umano", to: "Esempio: prestito negato rivalutato da funzionario" },
            { from: "Decisioni automatizzate e diritti", to: "Diritto alla spiegazione" },
            { from: "Diritto alla spiegazione", to: "Esempio: candidato escluso da concorso" },
            { from: "Decisioni automatizzate e diritti", to: "Diritto alla contestazione" },
            { from: "Diritto alla contestazione", to: "Opporsi a decisioni arbitrarie o discriminatorie" },
            { from: "Decisioni automatizzate e diritti", to: "Persona al centro, non la macchina" },

            { from: "Diritti e tutele nell’IA", to: "Principi di tutela e regolamentazione" },
            { from: "Principi di tutela e regolamentazione", to: "Privacy by design e by default" },
            { from: "Principi di tutela e regolamentazione", to: "Anonimizzazione e pseudonimizzazione" },
            { from: "Principi di tutela e regolamentazione", to: "Audit algoritmici" },
            { from: "Audit algoritmici", to: "Verifiche indipendenti su equità e trasparenza" },
            { from: "Principi di tutela e regolamentazione", to: "Informative accessibili" },
            { from: "Informative accessibili", to: "Spiegare funzionamento IA agli utenti" },
            { from: "Principi di tutela e regolamentazione", to: "AI Act europeo" },
            { from: "AI Act europeo", to: "Approccio basato sul rischio" },
            { from: "AI Act europeo", to: "Classificazione: inaccettabile, alto, limitato, minimo" },
            { from: "AI Act europeo", to: "Obblighi stringenti per IA ad alto rischio" },

            { from: "Diritti e tutele nell’IA", to: "Conclusione" },
            { from: "Conclusione", to: "IA = innovazione ma anche vulnerabilità" },
            { from: "Conclusione", to: "Privacy = fiducia e diritti fondamentali" },
            { from: "Conclusione", to: "Obiettivo: conciliare progresso e tutela" },
            { from: "Conclusione", to: "IA come strumento di emancipazione, non di controllo" },
            { from: "Conclusione", to: "La privacy resta diritto inviolabile" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);


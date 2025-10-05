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
            { key: "Cos'è il Phishing?", level: 0 },

            { key: "Meccanismo", level: 1 },
            { key: "E-mail o SMS falsi", level: 2 },
            { key: "Uso di loghi e stili realistici", level: 2 },
            { key: "Messaggi urgenti o minacciosi", level: 2 },
            { key: "Link o allegati sospetti", level: 2 },
            { key: "Inserimento dati sensibili → frodi", level: 2 },

            { key: "Segnali tipici", level: 1 },
            { key: "Mittente sospetto", level: 2 },
            { key: "Esempio: support@paypai.com", level: 3 },
            { key: "Urgenza o minacce", level: 2 },
            { key: "Link ingannevoli", level: 2 },
            { key: "Esempio: g00gle.com", level: 3 },
            { key: "Allegati inattesi", level: 2 },
            { key: "Errori di lingua", level: 2 },

            { key: "Perché è pericoloso", level: 1 },
            { key: "Non richiede vulnerabilità tecniche", level: 2 },
            { key: "Manipola la fiducia della vittima", level: 2 },
            { key: "Colpisce la mente umana", level: 2 },

            { key: "Buone pratiche", level: 1 },
            { key: "Diffidare da richieste di dati via e-mail/SMS", level: 2 },
            { key: "Verificare sempre l’indirizzo web", level: 2 },
            { key: "Contattare canali ufficiali in caso di dubbi", level: 2 },
            { key: "Usare filtri antispam e software aggiornati", level: 2 },

            { key: "Conclusione: consapevolezza", level: 0 },
            { key: "Minaccia trasversale", level: 1 },
            { key: "La difesa è formazione e attenzione", level: 1 }
        ],
        [
            { from: "Cos'è il Phishing?", to: "Meccanismo" },
            { from: "Meccanismo", to: "E-mail o SMS falsi" },
            { from: "Meccanismo", to: "Uso di loghi e stili realistici" },
            { from: "Meccanismo", to: "Messaggi urgenti o minacciosi" },
            { from: "Meccanismo", to: "Link o allegati sospetti" },
            { from: "Meccanismo", to: "Inserimento dati sensibili → frodi" },

            { from: "Cos'è il Phishing?", to: "Segnali tipici" },
            { from: "Segnali tipici", to: "Mittente sospetto" },
            { from: "Mittente sospetto", to: "Esempio: support@paypai.com" },
            { from: "Segnali tipici", to: "Urgenza o minacce" },
            { from: "Segnali tipici", to: "Link ingannevoli" },
            { from: "Link ingannevoli", to: "Esempio: g00gle.com" },
            { from: "Segnali tipici", to: "Allegati inattesi" },
            { from: "Segnali tipici", to: "Errori di lingua" },

            { from: "Cos'è il Phishing?", to: "Perché è pericoloso" },
            { from: "Perché è pericoloso", to: "Non richiede vulnerabilità tecniche" },
            { from: "Perché è pericoloso", to: "Manipola la fiducia della vittima" },
            { from: "Perché è pericoloso", to: "Colpisce la mente umana" },

            { from: "Cos'è il Phishing?", to: "Buone pratiche" },
            { from: "Buone pratiche", to: "Diffidare da richieste di dati via e-mail/SMS" },
            { from: "Buone pratiche", to: "Verificare sempre l’indirizzo web" },
            { from: "Buone pratiche", to: "Contattare canali ufficiali in caso di dubbi" },
            { from: "Buone pratiche", to: "Usare filtri antispam e software aggiornati" },

            { from: "Cos'è il Phishing?", to: "Conclusione: consapevolezza" },
            { from: "Conclusione: consapevolezza", to: "Minaccia trasversale" },
            { from: "Conclusione: consapevolezza", to: "La difesa è formazione e attenzione" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);

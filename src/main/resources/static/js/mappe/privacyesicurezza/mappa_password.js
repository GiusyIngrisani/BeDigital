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
            default: return "#e8e7e7"; // grigio
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
            { key: "Come creare una password sicura", level: 0 },

            { key: "Lunghezza", level: 1 },
            { key: "Più caratteri = più sicura", level: 2 },
            { key: "5 caratteri = poche ore", level: 3 },
            { key: "12 caratteri = secoli", level: 3 },

            { key: "Varietà dei caratteri", level: 1 },
            { key: "Lettere maiuscole e minuscole", level: 2 },
            { key: "Numeri e simboli", level: 2 },
            { key: "Combinazione più difficile da forzare", level: 2 },

            { key: "Evitare sequenze comuni", level: 1 },
            { key: "Dati personali", level: 2 },
            { key: "Sequenze prevedibili (123456, qwerty…)", level: 2 },

            { key: "Gestione sicura", level: 1 },
            { key: "Password uniche per ogni account", level: 2 },
            { key: "Uso di password manager", level: 2 },

            { key: "Conclusione: Sicurezza rafforzata", level: 0 },
            { key: "Riduce rischi di furto e accessi non autorizzati", level: 1 }
        ],
        [
            { from: "Come creare una password sicura", to: "Lunghezza" },
            { from: "Lunghezza", to: "Più caratteri = più sicura" },
            { from: "Più caratteri = più sicura", to: "5 caratteri = poche ore" },
            { from: "Più caratteri = più sicura", to: "12 caratteri = secoli" },

            { from: "Come creare una password sicura", to: "Varietà dei caratteri" },
            { from: "Varietà dei caratteri", to: "Lettere maiuscole e minuscole" },
            { from: "Varietà dei caratteri", to: "Numeri e simboli" },
            { from: "Varietà dei caratteri", to: "Combinazione più difficile da forzare" },

            { from: "Come creare una password sicura", to: "Evitare sequenze comuni" },
            { from: "Evitare sequenze comuni", to: "Dati personali" },
            { from: "Evitare sequenze comuni", to: "Sequenze prevedibili (123456, qwerty…)" },

            { from: "Come creare una password sicura", to: "Gestione sicura" },
            { from: "Gestione sicura", to: "Password uniche per ogni account" },
            { from: "Gestione sicura", to: "Uso di password manager" },

            { from: "Come creare una password sicura", to: "Conclusione: Sicurezza rafforzata" },
            { from: "Conclusione: Sicurezza rafforzata", to: "Riduce rischi di furto e accessi non autorizzati" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);

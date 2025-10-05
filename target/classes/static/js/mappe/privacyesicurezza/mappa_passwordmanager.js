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
            { key: "Cosa sono i Password Manager?", level: 0 },

            { key: "Caratteristiche", level: 1 },
            { key: "Multipiattaforma", level: 2 },
            { key: "Disponibili su Windows, macOS, Linux, iOS, Android", level: 3 },
            { key: "Sincronizzazione tra dispositivi", level: 2 },
            { key: "Cloud e accesso sicuro ovunque", level: 3 },

            { key: "Protezione", level: 1 },
            { key: "Master Password", level: 2 },
            { key: "Cassaforte crittografata (Vault)", level: 2 },

            { key: "Perché necessari", level: 1 },
            { key: "Il mondo usa ancora le password", level: 2 },
            { key: "Gestione credenziali complesse", level: 2 },

            { key: "Uso aziendale", level: 1 },
            { key: "Dipendente medio gestisce 190+ password", level: 2 },
            { key: "Riduce rischi di errori e violazioni", level: 2 },

            { key: "Errori comuni", level: 1 },
            { key: "Password reuse", level: 2 },
            { key: "Stessa chiave per più porte → rischio totale", level: 3 },
            { key: "Credential stuffing", level: 2 },
            { key: "Attacchi automatici con credenziali rubate", level: 3 },

            { key: "Vantaggio", level: 1 },
            { key: "Password complesse impossibili da ricordare", level: 2 },
            { key: "Manager le memorizza in modo sicuro", level: 2 },

            { key: "Conclusione: Strumento indispensabile", level: 0 },
            { key: "Sicurezza crittografica e praticità d’uso", level: 1 },
            { key: "Riduce drasticamente i rischi di violazioni", level: 1 }
        ],
        [
            { from: "Cosa sono i Password Manager?", to: "Caratteristiche" },
            { from: "Caratteristiche", to: "Multipiattaforma" },
            { from: "Multipiattaforma", to: "Disponibili su Windows, macOS, Linux, iOS, Android" },
            { from: "Caratteristiche", to: "Sincronizzazione tra dispositivi" },
            { from: "Sincronizzazione tra dispositivi", to: "Cloud e accesso sicuro ovunque" },

            { from: "Cosa sono i Password Manager?", to: "Protezione" },
            { from: "Protezione", to: "Master Password" },
            { from: "Protezione", to: "Cassaforte crittografata (Vault)" },

            { from: "Cosa sono i Password Manager?", to: "Perché necessari" },
            { from: "Perché necessari", to: "Il mondo usa ancora le password" },
            { from: "Perché necessari", to: "Gestione credenziali complesse" },

            { from: "Cosa sono i Password Manager?", to: "Uso aziendale" },
            { from: "Uso aziendale", to: "Dipendente medio gestisce 190+ password" },
            { from: "Uso aziendale", to: "Riduce rischi di errori e violazioni" },

            { from: "Cosa sono i Password Manager?", to: "Errori comuni" },
            { from: "Errori comuni", to: "Password reuse" },
            { from: "Password reuse", to: "Stessa chiave per più porte → rischio totale" },
            { from: "Errori comuni", to: "Credential stuffing" },
            { from: "Credential stuffing", to: "Attacchi automatici con credenziali rubate" },

            { from: "Cosa sono i Password Manager?", to: "Vantaggio" },
            { from: "Vantaggio", to: "Password complesse impossibili da ricordare" },
            { from: "Vantaggio", to: "Manager le memorizza in modo sicuro" },

            { from: "Cosa sono i Password Manager?", to: "Conclusione: Strumento indispensabile" },
            { from: "Conclusione: Strumento indispensabile", to: "Sicurezza crittografica e praticità d’uso" },
            { from: "Conclusione: Strumento indispensabile", to: "Riduce drasticamente i rischi di violazioni" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);

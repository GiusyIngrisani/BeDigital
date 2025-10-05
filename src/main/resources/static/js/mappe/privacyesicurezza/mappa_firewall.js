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
            { key: "I firewall come difesa", level: 0 },

            { key: "Definizione", level: 1 },
            { key: "Hardware o software che filtra il traffico", level: 2 },
            { key: "Solo traffico conforme alle regole passa", level: 2 },
            { key: "Dogana digitale dei pacchetti dati", level: 3 },

            { key: "Tipi di firewall", level: 1 },
            { key: "Host-based (software)", level: 2 },
            { key: "Installato su PC o server", level: 3 },
            { key: "Controlla traffico da/verso quel dispositivo", level: 3 },
            { key: "Blocca applicazioni non autorizzate", level: 3 },
            { key: "Spesso integrato nei sistemi operativi", level: 3 },
            { key: "Esempio: Windows Firewall", level: 3 },
            { key: "Network-based (hardware)", level: 2 },
            { key: "Dispositivo fisico tra rete e Internet", level: 3 },
            { key: "Protegge più dispositivi insieme", level: 3 },
            { key: "Usato soprattutto in aziende", level: 3 },
            { key: "Esempio: firewall aziendale blocca accessi esterni", level: 3 },

            { key: "Ruolo nella sicurezza informatica", level: 1 },
            { key: "Prima linea di difesa contro minacce", level: 2 },
            { key: "Riduce accessi non autorizzati", level: 3 },
            { key: "Filtra traffico dannoso", level: 3 },
            { key: "Protegge reti personali e aziendali", level: 3 },
            { key: "Esempio: senza firewall → dispositivi esposti", level: 3 },
            { key: "Devono integrarsi con altri strumenti", level: 2 },
            { key: "Antivirus, IDS, backup, multilivello", level: 3 },

            { key: "Conclusione", level: 0 },
            { key: "Strumento essenziale di difesa digitale", level: 1 },
            { key: "Regolano il flusso e impediscono intrusioni", level: 2 },
            { key: "Scelta tra software o hardware dipende dal contesto", level: 2 },
            { key: "Componente imprescindibile di ogni sicurezza IT", level: 2 }
        ],
        [
            { from: "I firewall come difesa", to: "Definizione" },
            { from: "Definizione", to: "Hardware o software che filtra il traffico" },
            { from: "Definizione", to: "Solo traffico conforme alle regole passa" },
            { from: "Definizione", to: "Dogana digitale dei pacchetti dati" },

            { from: "I firewall come difesa", to: "Tipi di firewall" },
            { from: "Tipi di firewall", to: "Host-based (software)" },
            { from: "Host-based (software)", to: "Installato su PC o server" },
            { from: "Host-based (software)", to: "Controlla traffico da/verso quel dispositivo" },
            { from: "Host-based (software)", to: "Blocca applicazioni non autorizzate" },
            { from: "Host-based (software)", to: "Spesso integrato nei sistemi operativi" },
            { from: "Host-based (software)", to: "Esempio: Windows Firewall" },
            { from: "Tipi di firewall", to: "Network-based (hardware)" },
            { from: "Network-based (hardware)", to: "Dispositivo fisico tra rete e Internet" },
            { from: "Network-based (hardware)", to: "Protegge più dispositivi insieme" },
            { from: "Network-based (hardware)", to: "Usato soprattutto in aziende" },
            { from: "Network-based (hardware)", to: "Esempio: firewall aziendale blocca accessi esterni" },

            { from: "I firewall come difesa", to: "Ruolo nella sicurezza informatica" },
            { from: "Ruolo nella sicurezza informatica", to: "Prima linea di difesa contro minacce" },
            { from: "Prima linea di difesa contro minacce", to: "Riduce accessi non autorizzati" },
            { from: "Prima linea di difesa contro minacce", to: "Filtra traffico dannoso" },
            { from: "Prima linea di difesa contro minacce", to: "Protegge reti personali e aziendali" },
            { from: "Prima linea di difesa contro minacce", to: "Esempio: senza firewall → dispositivi esposti" },
            { from: "Ruolo nella sicurezza informatica", to: "Devono integrarsi con altri strumenti" },
            { from: "Devono integrarsi con altri strumenti", to: "Antivirus, IDS, backup, multilivello" },

            { from: "I firewall come difesa", to: "Conclusione" },
            { from: "Conclusione", to: "Strumento essenziale di difesa digitale" },
            { from: "Conclusione", to: "Regolano il flusso e impediscono intrusioni" },
            { from: "Conclusione", to: "Scelta tra software o hardware dipende dal contesto" },
            { from: "Conclusione", to: "Componente imprescindibile di ogni sicurezza IT" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);


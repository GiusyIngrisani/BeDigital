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
            { key: "I diritti digitali degli utenti", level: 0 },

            { key: "Introduzione", level: 1 },
            { key: "Collegati al GDPR e ad altre norme", level: 2 },
            { key: "Garantiscono controllo e trasparenza", level: 2 },

            { key: "Diritto di accesso", level: 1 },
            { key: "Sapere se i dati sono trattati", level: 2 },
            { key: "Copia dei dati", level: 3 },
            { key: "Finalità del trattamento", level: 3 },
            { key: "Destinatari dei dati", level: 3 },

            { key: "Diritto di rettifica", level: 1 },
            { key: "Correzione dati inesatti", level: 2 },
            { key: "Integrazione dati incompleti", level: 2 },

            { key: "Diritto alla cancellazione (oblio)", level: 1 },
            { key: "Quando richiederla", level: 2 },
            { key: "Dati non più necessari", level: 3 },
            { key: "Revoca del consenso", level: 3 },
            { key: "Trattamento illecito", level: 3 },
            { key: "Impatto sulla reputazione online", level: 2 },

            { key: "Diritto alla limitazione", level: 1 },
            { key: "Bloccare uso temporaneo", level: 2 },
            { key: "Conservazione consentita", level: 3 },

            { key: "Diritto alla portabilità", level: 1 },
            { key: "Ricevere i dati in formato leggibile", level: 2 },
            { key: "Trasferire a un altro titolare", level: 2 },
            { key: "Favorisce concorrenza", level: 3 },

            { key: "Diritto di opposizione", level: 1 },
            { key: "Motivi legittimi", level: 2 },
            { key: "Marketing diretto", level: 3 },
            { key: "Profilazione", level: 3 },

            { key: "Decisioni automatizzate", level: 1 },
            { key: "Tutela dagli algoritmi", level: 2 },
            { key: "Esempi: prestiti, assunzioni", level: 3 },
            { key: "Diritto a revisione umana", level: 3 },

            { key: "Conclusione", level: 0 },
            { key: "Conquista fondamentale", level: 1 },
            { key: "Centralità dell’individuo", level: 2 },
            { key: "Ecosistema digitale etico e sicuro", level: 2 },
            { key: "La conoscenza è il primo passo", level: 2 }
        ],
        [
            { from: "I diritti digitali degli utenti", to: "Introduzione" },
            { from: "Introduzione", to: "Collegati al GDPR e ad altre norme" },
            { from: "Introduzione", to: "Garantiscono controllo e trasparenza" },

            { from: "I diritti digitali degli utenti", to: "Diritto di accesso" },
            { from: "Diritto di accesso", to: "Sapere se i dati sono trattati" },
            { from: "Sapere se i dati sono trattati", to: "Copia dei dati" },
            { from: "Sapere se i dati sono trattati", to: "Finalità del trattamento" },
            { from: "Sapere se i dati sono trattati", to: "Destinatari dei dati" },

            { from: "I diritti digitali degli utenti", to: "Diritto di rettifica" },
            { from: "Diritto di rettifica", to: "Correzione dati inesatti" },
            { from: "Diritto di rettifica", to: "Integrazione dati incompleti" },

            { from: "I diritti digitali degli utenti", to: "Diritto alla cancellazione (oblio)" },
            { from: "Diritto alla cancellazione (oblio)", to: "Quando richiederla" },
            { from: "Quando richiederla", to: "Dati non più necessari" },
            { from: "Quando richiederla", to: "Revoca del consenso" },
            { from: "Quando richiederla", to: "Trattamento illecito" },
            { from: "Diritto alla cancellazione (oblio)", to: "Impatto sulla reputazione online" },

            { from: "I diritti digitali degli utenti", to: "Diritto alla limitazione" },
            { from: "Diritto alla limitazione", to: "Bloccare uso temporaneo" },
            { from: "Bloccare uso temporaneo", to: "Conservazione consentita" },

            { from: "I diritti digitali degli utenti", to: "Diritto alla portabilità" },
            { from: "Diritto alla portabilità", to: "Ricevere i dati in formato leggibile" },
            { from: "Diritto alla portabilità", to: "Trasferire a un altro titolare" },
            { from: "Trasferire a un altro titolare", to: "Favorisce concorrenza" },

            { from: "I diritti digitali degli utenti", to: "Diritto di opposizione" },
            { from: "Diritto di opposizione", to: "Motivi legittimi" },
            { from: "Motivi legittimi", to: "Marketing diretto" },
            { from: "Motivi legittimi", to: "Profilazione" },

            { from: "I diritti digitali degli utenti", to: "Decisioni automatizzate" },
            { from: "Decisioni automatizzate", to: "Tutela dagli algoritmi" },
            { from: "Tutela dagli algoritmi", to: "Esempi: prestiti, assunzioni" },
            { from: "Tutela dagli algoritmi", to: "Diritto a revisione umana" },

            { from: "I diritti digitali degli utenti", to: "Conclusione" },
            { from: "Conclusione", to: "Conquista fondamentale" },
            { from: "Conclusione", to: "Centralità dell’individuo" },
            { from: "Conclusione", to: "Ecosistema digitale etico e sicuro" },
            { from: "Conclusione", to: "La conoscenza è il primo passo" }
        ]);
}

window.addEventListener("DOMContentLoaded", init);

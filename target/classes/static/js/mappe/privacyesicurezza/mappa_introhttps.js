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
      { key: "HTTPS Certificate Ecosystem", level: 0 },

      { key: "Comunicazioni sicure", level: 1 },
      { key: "Basate su TLS + PKI", level: 2 },
      { key: "TLS: cifra i dati tra client e server", level: 2 },
      { key: "PKI: sistema di fiducia con CA", level: 2 },
      { key: "Il certificato associa sito ↔ organizzazione", level: 2 },

      { key: "Certificati digitali", level: 1 },
      { key: "CA rilasciano e firmano certificati", level: 2 },
      { key: "Collegano dominio e chiave pubblica", level: 2 },
      { key: "Browser verifica legittimità del server", level: 2 },
      { key: "Esempio: clic sul lucchetto mostra CA e dominio", level: 3 },

      { key: "L’opacità della PKI", level: 1 },
      { key: "Non esiste elenco unico dei certificati", level: 2 },
      { key: "Difficile rilevare errori o abusi", level: 2 },
      { key: "Rischio: CA compromessa → certificati falsi", level: 2 },
      { key: "Cosa fare: non fidarsi se browser segnala problemi", level: 3 },

      { key: "Conclusione", level: 0 },
      { key: "Base della sicurezza web moderna", level: 1 },
      { key: "Dipende dalla fiducia nelle CA", level: 1 },
      { key: "Consapevolezza dei limiti della PKI è fondamentale", level: 1 }
    ],
    [
      { from: "HTTPS Certificate Ecosystem", to: "Comunicazioni sicure" },
      { from: "Comunicazioni sicure", to: "Basate su TLS + PKI" },
      { from: "Comunicazioni sicure", to: "TLS: cifra i dati tra client e server" },
      { from: "Comunicazioni sicure", to: "PKI: sistema di fiducia con CA" },
      { from: "Comunicazioni sicure", to: "Il certificato associa sito ↔ organizzazione" },

      { from: "HTTPS Certificate Ecosystem", to: "Certificati digitali" },
      { from: "Certificati digitali", to: "CA rilasciano e firmano certificati" },
      { from: "Certificati digitali", to: "Collegano dominio e chiave pubblica" },
      { from: "Certificati digitali", to: "Browser verifica legittimità del server" },
      { from: "Certificati digitali", to: "Esempio: clic sul lucchetto mostra CA e dominio" },

      { from: "HTTPS Certificate Ecosystem", to: "L’opacità della PKI" },
      { from: "L’opacità della PKI", to: "Non esiste elenco unico dei certificati" },
      { from: "L’opacità della PKI", to: "Difficile rilevare errori o abusi" },
      { from: "L’opacità della PKI", to: "Rischio: CA compromessa → certificati falsi" },
      { from: "L’opacità della PKI", to: "Cosa fare: non fidarsi se browser segnala problemi" },

      { from: "HTTPS Certificate Ecosystem", to: "Conclusione" },
      { from: "Conclusione", to: "Base della sicurezza web moderna" },
      { from: "Conclusione", to: "Dipende dalla fiducia nelle CA" },
      { from: "Conclusione", to: "Consapevolezza dei limiti della PKI è fondamentale" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

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
      { key: "Che cos’è una VPN?", level: 0 },

      { key: "Definizione", level: 1 },
      { key: "Connessione sicura e privata su Internet", level: 2 },
      { key: "Crittografia dei dati", level: 2 },
      { key: "Mascheramento IP e anonimato", level: 2 },
      { key: "Uso personale e aziendale", level: 2 },

      { key: "Funzioni principali", level: 1 },

      { key: "Privacy", level: 2 },
      { key: "Protegge dati sensibili su reti pubbliche", level: 3 },
      { key: "Previene intercettazioni e rivendita dati", level: 3 },

      { key: "Anonimato", level: 2 },
      { key: "Nasconde l’IP reale", level: 3 },
      { key: "Rende difficile il tracciamento online", level: 3 },

      { key: "Sicurezza", level: 2 },
      { key: "Connessione crittografata end-to-end", level: 3 },
      { key: "Kill switch per evitare fughe di dati", level: 3 },
      { key: "Accesso remoto sicuro in azienda", level: 3 },

      { key: "Conclusione", level: 0 },
      { key: "Strumento essenziale per privacy e sicurezza", level: 1 },
      { key: "Non protegge da tutte le minacce", level: 1 }
    ],
    [
      { from: "Che cos’è una VPN?", to: "Definizione" },
      { from: "Definizione", to: "Connessione sicura e privata su Internet" },
      { from: "Definizione", to: "Crittografia dei dati" },
      { from: "Definizione", to: "Mascheramento IP e anonimato" },
      { from: "Definizione", to: "Uso personale e aziendale" },

      { from: "Che cos’è una VPN?", to: "Funzioni principali" },

      { from: "Funzioni principali", to: "Privacy" },
      { from: "Privacy", to: "Protegge dati sensibili su reti pubbliche" },
      { from: "Privacy", to: "Previene intercettazioni e rivendita dati" },

      { from: "Funzioni principali", to: "Anonimato" },
      { from: "Anonimato", to: "Nasconde l’IP reale" },
      { from: "Anonimato", to: "Rende difficile il tracciamento online" },

      { from: "Funzioni principali", to: "Sicurezza" },
      { from: "Sicurezza", to: "Connessione crittografata end-to-end" },
      { from: "Sicurezza", to: "Kill switch per evitare fughe di dati" },
      { from: "Sicurezza", to: "Accesso remoto sicuro in azienda" },

      { from: "Che cos’è una VPN?", to: "Conclusione" },
      { from: "Conclusione", to: "Strumento essenziale per privacy e sicurezza" },
      { from: "Conclusione", to: "Non protegge da tutte le minacce" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

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
      case 0: return "#f4e58f"; // root giallo
      case 1: return "#a9d8ec"; // blu sezioni
      case 2: return "#a7f3a7"; // verde concetti
      case 3: return "#ffc8d0"; // rosso esempi/note
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
      { key: "Cookie Policy e Consenso", level: 0 },

      { key: "Cookie Policy", level: 1 },
      { key: "Descrive tipi di cookies", level: 2 },
      { key: "Spiega finalità raccolta dati", level: 2 },
      { key: "Indica chi ha accesso (es. inserzionisti)", level: 2 },
      { key: "Trasparenza = fiducia utente", level: 3 },

      { key: "Gestione del consenso", level: 1 },
      { key: "Richiesto dal GDPR", level: 2 },
      { key: "Banner di consenso obbligatorio", level: 2 },
      { key: "Granularità scelta categorie", level: 2 },
      { key: "Revoca sempre possibile", level: 2 },
      { key: "Esempio: Accetta / Rifiuta / Personalizza", level: 3 },

      { key: "Strumenti di gestione", level: 1 },
      { key: "CMP = Consent Management Platforms", level: 2 },
      { key: "Registrano e documentano scelte", level: 2 },
      { key: "Assicurano rispetto preferenze", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Obbligo legale + buona pratica", level: 1 },
      { key: "Dà controllo e aumenta fiducia", level: 1 }
    ],
    [
      { from: "Cookie Policy e Consenso", to: "Cookie Policy" },
      { from: "Cookie Policy", to: "Descrive tipi di cookies" },
      { from: "Cookie Policy", to: "Spiega finalità raccolta dati" },
      { from: "Cookie Policy", to: "Indica chi ha accesso (es. inserzionisti)" },
      { from: "Indica chi ha accesso (es. inserzionisti)", to: "Trasparenza = fiducia utente" },

      { from: "Cookie Policy e Consenso", to: "Gestione del consenso" },
      { from: "Gestione del consenso", to: "Richiesto dal GDPR" },
      { from: "Gestione del consenso", to: "Banner di consenso obbligatorio" },
      { from: "Gestione del consenso", to: "Granularità scelta categorie" },
      { from: "Gestione del consenso", to: "Revoca sempre possibile" },
      { from: "Revoca sempre possibile", to: "Esempio: Accetta / Rifiuta / Personalizza" },

      { from: "Cookie Policy e Consenso", to: "Strumenti di gestione" },
      { from: "Strumenti di gestione", to: "CMP = Consent Management Platforms" },
      { from: "Strumenti di gestione", to: "Registrano e documentano scelte" },
      { from: "Strumenti di gestione", to: "Assicurano rispetto preferenze" },

      { from: "Cookie Policy e Consenso", to: "Conclusione" },
      { from: "Conclusione", to: "Obbligo legale + buona pratica" },
      { from: "Conclusione", to: "Dà controllo e aumenta fiducia" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

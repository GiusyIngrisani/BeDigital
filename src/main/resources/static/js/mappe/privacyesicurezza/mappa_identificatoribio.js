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
      case 3: return "#ffc8d0"; // rosso esempi / note
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
          maxSize: new go.Size(170, NaN)
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
      { key: "Identificatori biometrici", level: 0 },

      { key: "Definizione", level: 1 },
      { key: "Caratteristiche uniche e misurabili", level: 2 },
      { key: "Categorie: fisiologici e comportamentali", level: 2 },

      { key: "Tipologie", level: 1 },
      { key: "Fisiologici", level: 2 },
      { key: "Impronte digitali", level: 3 },
      { key: "Iride e retina", level: 3 },
      { key: "Volto", level: 3 },
      { key: "Orecchio", level: 3 },
      { key: "Pattern vascolari", level: 3 },
      { key: "Parametri antropometrici", level: 3 },
      { key: "Comportamentali", level: 2 },
      { key: "Voce", level: 3 },
      { key: "Grafia e firma", level: 3 },
      { key: "Digitazione tastiera", level: 3 },
      { key: "Postura e movimenti", level: 3 },

      { key: "Stabilità", level: 1 },
      { key: "Fisiologici → stabili nel tempo", level: 2 },
      { key: "Comportamentali → variabili (stress, salute)", level: 2 },

      { key: "Rischi e criticità", level: 1 },
      { key: "Irrevocabilità: non modificabili", level: 2 },
      { key: "Falsificazione: spoofing", level: 2 },
      { key: "Privacy: dati particolari GDPR", level: 2 },
      { key: "Sorveglianza di massa", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Potenti strumenti di autenticazione", level: 1 },
      { key: "Ma con sfide etiche e di sicurezza", level: 1 }
    ],
    [
      { from: "Identificatori biometrici", to: "Definizione" },
      { from: "Definizione", to: "Caratteristiche uniche e misurabili" },
      { from: "Definizione", to: "Categorie: fisiologici e comportamentali" },

      { from: "Identificatori biometrici", to: "Tipologie" },
      { from: "Tipologie", to: "Fisiologici" },
      { from: "Fisiologici", to: "Impronte digitali" },
      { from: "Fisiologici", to: "Iride e retina" },
      { from: "Fisiologici", to: "Volto" },
      { from: "Fisiologici", to: "Orecchio" },
      { from: "Fisiologici", to: "Pattern vascolari" },
      { from: "Fisiologici", to: "Parametri antropometrici" },
      { from: "Tipologie", to: "Comportamentali" },
      { from: "Comportamentali", to: "Voce" },
      { from: "Comportamentali", to: "Grafia e firma" },
      { from: "Comportamentali", to: "Digitazione tastiera" },
      { from: "Comportamentali", to: "Postura e movimenti" },

      { from: "Identificatori biometrici", to: "Stabilità" },
      { from: "Stabilità", to: "Fisiologici → stabili nel tempo" },
      { from: "Stabilità", to: "Comportamentali → variabili (stress, salute)" },

      { from: "Identificatori biometrici", to: "Rischi e criticità" },
      { from: "Rischi e criticità", to: "Irrevocabilità: non modificabili" },
      { from: "Rischi e criticità", to: "Falsificazione: spoofing" },
      { from: "Rischi e criticità", to: "Privacy: dati particolari GDPR" },
      { from: "Rischi e criticità", to: "Sorveglianza di massa" },

      { from: "Identificatori biometrici", to: "Conclusione" },
      { from: "Conclusione", to: "Potenti strumenti di autenticazione" },
      { from: "Conclusione", to: "Ma con sfide etiche e di sicurezza" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

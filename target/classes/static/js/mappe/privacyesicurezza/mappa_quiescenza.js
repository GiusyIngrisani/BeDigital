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
      { key: "Fase di QUIESCENZA", level: 0 },

      { key: "Introduzione", level: 1 },
      { key: "Malware residente ma apparentemente inattivo", level: 2 },
      { key: "Rimane vigile e adotta autoprotezioni", level: 2 },

      { key: "Individuazione", level: 1 },
      { key: "Controllare processi con Task Manager o analoghi", level: 2 },
      { key: "Camuffamento dei processi (nomi simili a legittimi)", level: 2 },
      { key: "Esempio: notpad.exe che usa molta CPU", level: 3 },

      { key: "Tecniche di elusione", level: 1 },
      { key: "Offuscamento del codice (crittografia/compressione)", level: 2 },
      { key: "Polimorfismo / metamorfismo per evitare firme", level: 2 },
      { key: "Anti-debug / anti-sandbox per evitare analisi", level: 2 },
      { key: "Esempio: cambia aspetto ogni infezione per sfuggire antivirus", level: 3 },

      { key: "Ruolo nella vita del malware", level: 1 },
      { key: "Riduce probabilità di scoperta", level: 2 },
      { key: "Permette coordinazione attacco su condizioni (data/comando)", level: 2 },
      { key: "Assicura persistenza senza destare sospetti", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Quiescenza = invisibilità + resistenza", level: 1 },
      { key: "Rende più difficile rilevamento e rimozione", level: 1 }
    ],
    [
      { from: "Fase di QUIESCENZA", to: "Introduzione" },

      { from: "Fase di QUIESCENZA", to: "Individuazione" },
      { from: "Individuazione", to: "Controllare processi con Task Manager o analoghi" },
      { from: "Individuazione", to: "Camuffamento dei processi (nomi simili a legittimi)" },
      { from: "Individuazione", to: "Esempio: notpad.exe che usa molta CPU" },

      { from: "Fase di QUIESCENZA", to: "Tecniche di elusione" },
      { from: "Tecniche di elusione", to: "Offuscamento del codice (crittografia/compressione)" },
      { from: "Tecniche di elusione", to: "Polimorfismo / metamorfismo per evitare firme" },
      { from: "Tecniche di elusione", to: "Anti-debug / anti-sandbox per evitare analisi" },
      { from: "Tecniche di elusione", to: "Esempio: cambia aspetto ogni infezione per sfuggire antivirus" },

      { from: "Fase di QUIESCENZA", to: "Ruolo nella vita del malware" },
      { from: "Ruolo nella vita del malware", to: "Riduce probabilità di scoperta" },
      { from: "Ruolo nella vita del malware", to: "Permette coordinazione attacco su condizioni (data/comando)" },
      { from: "Ruolo nella vita del malware", to: "Assicura persistenza senza destare sospetti" },

      { from: "Fase di QUIESCENZA", to: "Conclusione" },
      { from: "Conclusione", to: "Quiescenza = invisibilità + resistenza" },
      { from: "Conclusione", to: "Rende più difficile rilevamento e rimozione" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

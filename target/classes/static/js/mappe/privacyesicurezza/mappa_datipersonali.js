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
      case 3: return "#ffc8d0"; // rosso esempi
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
      { key: "Quali sono i dati personali?", level: 0 },

      { key: "Dati comuni", level: 1 },
      { key: "Non rivelano aspetti intimi", level: 2 },
      { key: "Identificano la persona", level: 2 },
      { key: "Esempi: nome, CF, targa, IP", level: 3 },

      { key: "Categorie particolari", level: 1 },
      { key: "Rivelano aspetti sensibili", level: 2 },
      { key: "Esempi: salute, religione, politica, genetici", level: 3 },
      { key: "Trattamento improprio = gravi rischi", level: 2 },

      { key: "Importanza distinzione", level: 1 },
      { key: "Dati comuni → trattamento ammesso", level: 2 },
      { key: "Categorie particolari → divieto salvo eccezioni", level: 2 },
      { key: "Necessarie misure di sicurezza rafforzate", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Dati non tutti uguali", level: 1 },
      { key: "Richiedono tutele diverse", level: 1 },
      { key: "Consapevolezza fondamentale per tutti", level: 1 }
    ],
    [
      { from: "Quali sono i dati personali?", to: "Dati comuni" },
      { from: "Dati comuni", to: "Non rivelano aspetti intimi" },
      { from: "Dati comuni", to: "Identificano la persona" },
      { from: "Dati comuni", to: "Esempi: nome, CF, targa, IP" },

      { from: "Quali sono i dati personali?", to: "Categorie particolari" },
      { from: "Categorie particolari", to: "Rivelano aspetti sensibili" },
      { from: "Categorie particolari", to: "Esempi: salute, religione, politica, genetici" },
      { from: "Categorie particolari", to: "Trattamento improprio = gravi rischi" },

      { from: "Quali sono i dati personali?", to: "Importanza distinzione" },
      { from: "Importanza distinzione", to: "Dati comuni → trattamento ammesso" },
      { from: "Importanza distinzione", to: "Categorie particolari → divieto salvo eccezioni" },
      { from: "Importanza distinzione", to: "Necessarie misure di sicurezza rafforzate" },

      { from: "Quali sono i dati personali?", to: "Conclusione" },
      { from: "Conclusione", to: "Dati non tutti uguali" },
      { from: "Conclusione", to: "Richiedono tutele diverse" },
      { from: "Conclusione", to: "Consapevolezza fondamentale per tutti" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

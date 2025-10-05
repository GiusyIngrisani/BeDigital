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
      { key: "I sistemi biometrici", level: 0 },

      { key: "Definizione", level: 1 },
      { key: "Biometria = uso di caratteristiche fisiologiche e comportamentali", level: 2 },
      { key: "Origine del termine: bios + metron", level: 3 },

      { key: "Funzioni", level: 1 },
      { key: "Autenticazione (1:1)", level: 2 },
      { key: "Esempio: sblocco smartphone", level: 3 },
      { key: "Identificazione (1:molti)", level: 2 },
      { key: "Esempio: riconoscimento facciale videosorveglianza", level: 3 },

      { key: "Caratteristiche", level: 1 },
      { key: "Fisiologiche: impronte, volto, iride", level: 2 },
      { key: "Comportamentali: voce, scrittura, digitazione", level: 2 },

      { key: "Utilizzi", level: 1 },
      { key: "Accesso fisico: varchi, frontiere", level: 2 },
      { key: "Accesso logico: sistemi e dispositivi", level: 2 },
      { key: "Con IoT e cloud aumenta la diffusione", level: 2 },

      { key: "Riconoscimento biometrico e AIDC", level: 1 },
      { key: "Sensori acquisiscono dati biometrici", level: 2 },
      { key: "Confronto con modelli in database", level: 2 },
      { key: "Algoritmi stabiliscono corrispondenza", level: 2 },

      { key: "Applicazioni pratiche", level: 1 },
      { key: "Informatica: login e app", level: 2 },
      { key: "Sicurezza fisica: accesso edifici", level: 2 },
      { key: "Sorveglianza: identificazione persone", level: 2 },

      { key: "Storia", level: 1 },
      { key: "XIX sec. Bertillon → antropometria", level: 2 },
      { key: "Poi sostituita da impronte digitali", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Più sicuri e pratici dei metodi tradizionali", level: 1 },
      { key: "Ma sollevano problemi etici e giuridici", level: 1 }
    ],
    [
      { from: "I sistemi biometrici", to: "Definizione" },
      { from: "Definizione", to: "Biometria = uso di caratteristiche fisiologiche e comportamentali" },
      { from: "Definizione", to: "Origine del termine: bios + metron" },

      { from: "I sistemi biometrici", to: "Funzioni" },
      { from: "Funzioni", to: "Autenticazione (1:1)" },
      { from: "Autenticazione (1:1)", to: "Esempio: sblocco smartphone" },
      { from: "Funzioni", to: "Identificazione (1:molti)" },
      { from: "Identificazione (1:molti)", to: "Esempio: riconoscimento facciale videosorveglianza" },

      { from: "I sistemi biometrici", to: "Caratteristiche" },
      { from: "Caratteristiche", to: "Fisiologiche: impronte, volto, iride" },
      { from: "Caratteristiche", to: "Comportamentali: voce, scrittura, digitazione" },

      { from: "I sistemi biometrici", to: "Utilizzi" },
      { from: "Utilizzi", to: "Accesso fisico: varchi, frontiere" },
      { from: "Utilizzi", to: "Accesso logico: sistemi e dispositivi" },
      { from: "Utilizzi", to: "Con IoT e cloud aumenta la diffusione" },

      { from: "I sistemi biometrici", to: "Riconoscimento biometrico e AIDC" },
      { from: "Riconoscimento biometrico e AIDC", to: "Sensori acquisiscono dati biometrici" },
      { from: "Riconoscimento biometrico e AIDC", to: "Confronto con modelli in database" },
      { from: "Riconoscimento biometrico e AIDC", to: "Algoritmi stabiliscono corrispondenza" },

      { from: "I sistemi biometrici", to: "Applicazioni pratiche" },
      { from: "Applicazioni pratiche", to: "Informatica: login e app" },
      { from: "Applicazioni pratiche", to: "Sicurezza fisica: accesso edifici" },
      { from: "Applicazioni pratiche", to: "Sorveglianza: identificazione persone" },

      { from: "I sistemi biometrici", to: "Storia" },
      { from: "Storia", to: "XIX sec. Bertillon → antropometria" },
      { from: "Storia", to: "Poi sostituita da impronte digitali" },

      { from: "I sistemi biometrici", to: "Conclusione" },
      { from: "Conclusione", to: "Più sicuri e pratici dei metodi tradizionali" },
      { from: "Conclusione", to: "Ma sollevano problemi etici e giuridici" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

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
          maxSize: new go.Size(180, NaN)
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
      { key: "Fase di REPLICAZIONE e PROPAGAZIONE", level: 0 },

      { key: "Introduzione", level: 1 },
      { key: "Molti malware si replicano e diffondono", level: 2 },
      { key: "Virus: hanno bisogno di un file ospite", level: 2 },
      { key: "Worm: programmi autonomi che sfruttano reti", level: 2 },

      { key: "Replicazione dei virus", level: 1 },
      { key: "Tecniche di inserimento", level: 2 },
      { key: "Prepending: inizio file", level: 3 },
      { key: "Appending: fine file", level: 3 },
      { key: "Cavity: spazi vuoti del file", level: 3 },

      { key: "Infezione di file e boot sector", level: 2 },
      { key: "Virus caricato all’accensione del PC", level: 3 },
      { key: "Resta attivo in memoria fino a spegnimento", level: 3 },
      { key: "Si copia su dispositivi collegati (USB)", level: 3 },

      { key: "Macro virus", level: 2 },
      { key: "Infettano documenti Word/Excel tramite macro", level: 3 },
      { key: "Modificano comandi comuni (Apri, Salva)", level: 3 },
      { key: "Esempio: Concept (1995)", level: 3 },

      { key: "Replicazione e propagazione dei worm", level: 1 },
      { key: "Struttura dei worm", level: 2 },
      { key: "Target Selection Algorithm: cerca obiettivi", level: 3 },
      { key: "Esempio: invio a tutti i contatti e-mail", level: 3 },
      { key: "Scanning Engine: cerca vulnerabilità", level: 3 },
      { key: "Esempio: infetta PC non aggiornati", level: 3 },

      { key: "Modalità di propagazione", level: 2 },
      { key: "Sfruttano vulnerabilità software note", level: 3 },
      { key: "Propagazione autonoma senza interazione utente", level: 3 },

      { key: "Conclusione", level: 0 },
      { key: "Virus: replicano tramite file/documenti", level: 1 },
      { key: "Worm: si diffondono autonomamente in rete", level: 1 },
      { key: "Moltiplicano rapidamente i sistemi infetti", level: 1 }
    ],
    [
      { from: "Fase di REPLICAZIONE e PROPAGAZIONE", to: "Introduzione" },
      { from: "Introduzione", to: "Molti malware si replicano e diffondono" },
      { from: "Introduzione", to: "Virus: hanno bisogno di un file ospite" },
      { from: "Introduzione", to: "Worm: programmi autonomi che sfruttano reti" },

      { from: "Fase di REPLICAZIONE e PROPAGAZIONE", to: "Replicazione dei virus" },
      { from: "Replicazione dei virus", to: "Tecniche di inserimento" },
      { from: "Tecniche di inserimento", to: "Prepending: inizio file" },
      { from: "Tecniche di inserimento", to: "Appending: fine file" },
      { from: "Tecniche di inserimento", to: "Cavity: spazi vuoti del file" },

      { from: "Replicazione dei virus", to: "Infezione di file e boot sector" },
      { from: "Infezione di file e boot sector", to: "Virus caricato all’accensione del PC" },
      { from: "Infezione di file e boot sector", to: "Resta attivo in memoria fino a spegnimento" },
      { from: "Infezione di file e boot sector", to: "Si copia su dispositivi collegati (USB)" },

      { from: "Replicazione dei virus", to: "Macro virus" },
      { from: "Macro virus", to: "Infettano documenti Word/Excel tramite macro" },
      { from: "Macro virus", to: "Modificano comandi comuni (Apri, Salva)" },
      { from: "Macro virus", to: "Esempio: Concept (1995)" },

      { from: "Fase di REPLICAZIONE e PROPAGAZIONE", to: "Replicazione e propagazione dei worm" },
      { from: "Replicazione e propagazione dei worm", to: "Struttura dei worm" },
      { from: "Struttura dei worm", to: "Target Selection Algorithm: cerca obiettivi" },
      { from: "Struttura dei worm", to: "Esempio: invio a tutti i contatti e-mail" },
      { from: "Struttura dei worm", to: "Scanning Engine: cerca vulnerabilità" },
      { from: "Struttura dei worm", to: "Esempio: infetta PC non aggiornati" },

      { from: "Replicazione e propagazione dei worm", to: "Modalità di propagazione" },
      { from: "Modalità di propagazione", to: "Sfruttano vulnerabilità software note" },
      { from: "Modalità di propagazione", to: "Propagazione autonoma senza interazione utente" },

      { from: "Fase di REPLICAZIONE e PROPAGAZIONE", to: "Conclusione" },
      { from: "Conclusione", to: "Virus: replicano tramite file/documenti" },
      { from: "Conclusione", to: "Worm: si diffondono autonomamente in rete" },
      { from: "Conclusione", to: "Moltiplicano rapidamente i sistemi infetti" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);

package it.unisa.beingdigital.control.presentazionerisorse;

import it.unisa.beingdigital.service.presentazionerisorse.PrelievoArgomentoService;
import it.unisa.beingdigital.storage.entity.util.Livello;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Questa classe rappresenta il controller per visualizzare i racconti inerenti alla privacy.
 */

@Controller
@RequestMapping("/utente/raccontiPrivacy")
public class RaccontiPrivacyController {

  @Autowired
  private PrelievoArgomentoService prelievoArgomentoService;

  /**
   * Implementa il get per la visualizzazione di racconti di privacy.
   *
   * @param model Model da passare alla view.
   * @return Stringa rappresentante il path della view da rappresentare.
   */
  @GetMapping
  public String get(Model model) {

    model.addAttribute("racconti",
        prelievoArgomentoService.getRaccontiSortedByTitolo(Livello.MASTER));
    model.addAttribute("tipo", "privacy");
    return "presentazionerisorse/listaRacconti";
  }
}

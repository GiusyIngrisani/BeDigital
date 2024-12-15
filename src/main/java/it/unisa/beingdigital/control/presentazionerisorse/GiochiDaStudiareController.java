package it.unisa.beingdigital.control.presentazionerisorse;

import it.unisa.beingdigital.service.autenticazione.util.PersonaAutenticata;
import it.unisa.beingdigital.service.presentazionerisorse.PrelievoGiocoService;
import it.unisa.beingdigital.storage.entity.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Questa classe rappresenta il controller per visualizzare i giochi da studiare
 * inerenti alla privacy.
 */

@Controller
@RequestMapping("/utente/giochiDaStudiare")
public class GiochiDaStudiareController {

  @Autowired
  private PrelievoGiocoService prelievoGiocoService;

  @Autowired
  private PersonaAutenticata personaAutenticata;

  /**
   * Implementa il get per la visualizzazione dei giochi da studiare.
   *
   * @param model Model da passare alla view.
   * @return Stringa rappresentante il path della view da rappresentare.
   */
  @GetMapping
  public String get(Model model) {
    Utente utente = (Utente) personaAutenticata.getPersona().get();

    model.addAttribute("giochi", prelievoGiocoService.getGiochiDaStudiareSortedByNome(utente));
    model.addAttribute("tipo", "privacy");
    return "presentazionerisorse/giochi";
  }
}

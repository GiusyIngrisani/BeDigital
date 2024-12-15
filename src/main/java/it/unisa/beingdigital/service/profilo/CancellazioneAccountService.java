package it.unisa.beingdigital.service.profilo;

import it.unisa.beingdigital.storage.entity.AmministratoreCittadini;
import it.unisa.beingdigital.storage.entity.Team;
import it.unisa.beingdigital.storage.entity.Utente;
import it.unisa.beingdigital.storage.repository.*;
import jakarta.validation.constraints.NotNull;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

/**
 * Questa classe rappresenta il service per la cancellazione di un account di una persona.
 */

@Service
@Transactional
@Validated
public class CancellazioneAccountService {

  @Autowired
  private UtenteRepository utenteRepository;

  @Autowired
  private AdminRepository adminRepository;

  @Autowired
  private RispostaRepository rispostaRepository;

  @Autowired
  private TeamRepository teamRepository;

  @Autowired
  private AmministratoreCittadiniRepository amministratoreCittadiniRepository;

  /**
   * Implementa la funzionalità di cancellazione di un account utente.
   * Si assume che la corretta formulazione dell'id sia stata controllata prima
   * di effettuare la chiamata.
   *
   * @param id Id dell'utente.
   * @return true se la cancellazione è andata a buon fine, false altrimenti.
   * @throws jakarta.validation.ConstraintViolationException se l'id risulta null.
   */
  public boolean cancellazioneUtente(@NotNull Long id) {
    Optional<Utente> optional = utenteRepository.findById(id);
    if (optional.isEmpty()) {
      return false;
    }

    Utente utente = optional.get();
    rispostaRepository.deleteByUtente(utente);
    utenteRepository.delete(utente);
    return true;
  }

  /**
   * Implementa la funzionalità di cancellazione di un account admin.
   * Si assume che la corretta formulazione dell'id sia stata controllata prima
   * di effettuare la chiamata.
   *
   * @param id Id dell'amministratore.
   * @return true se la cancellazione è andata a buon fine, false altrimenti.
   * @throws jakarta.validation.ConstraintViolationException se l'id risulta null.
   */
  public boolean cancellazioneAdmin(@NotNull Long id) {
    if (!adminRepository.existsById(id)) {
      return false;
    }
    adminRepository.deleteById(id);
    return true;
  }

  /**
   * Implementa la funzionalità di cancellazione di un account Amministratore di cittadini.
   * Si assume che la corretta formulazione dell'id sia stata controllata prima
   * di effettuare la chiamata.
   *
   * @param id Id dell'amministratore di cittadini.
   * @return true se la cancellazione è andata a buon fine, false altrimenti.
   * @throws jakarta.validation.ConstraintViolationException se l'id risulta null.
   */
  public void eliminaAmministratore(Long id) {
    Optional<AmministratoreCittadini> optional = amministratoreCittadiniRepository.findById(id);

    for (Team team : optional.get().getTeams()) {
      team.getAmministratoriCittadini().remove(optional.get());
      teamRepository.save(team);
    }
    amministratoreCittadiniRepository.delete(optional.get());
  }
}

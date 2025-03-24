package com.masterRS.groupe1.personne.controller;

import com.masterRS.groupe1.personne.modele.Personne;
import com.masterRS.groupe1.personne.service.PersonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PersonneRESTController {
    @Autowired
    private PersonneService personneService;

    @PostMapping(path = "/personne")
    public Personne ajouterPersonne(@RequestBody Personne personne){
        return personneService.addPersonne(personne);
    }

    @PutMapping(path = "/personne")
    public Personne modifierPersonne(@RequestBody Personne personne){
        return personneService.updatePersonne(personne);
    }

    @DeleteMapping(path = "/personne/{id}")
    public String supprimerPersonne(@PathVariable Long id){
        personneService.deleteByIdPersonne(id);
        return "Personne supprimer avec succée!";
    }

}

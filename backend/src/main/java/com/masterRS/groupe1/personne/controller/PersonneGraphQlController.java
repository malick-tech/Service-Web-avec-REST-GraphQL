package com.masterRS.groupe1.personne.controller;

import com.masterRS.groupe1.personne.modele.Personne;
import com.masterRS.groupe1.personne.service.PersonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class PersonneGraphQlController {
    @Autowired
    private PersonneService personneService;

    @QueryMapping
    public List<Personne> listerPersonne(){
        return personneService.listPersonne();
    }

    @QueryMapping
    public Personne rechercherPersonne(@Argument Long id){
        return personneService.findByIdPersonne(id);
    }
}

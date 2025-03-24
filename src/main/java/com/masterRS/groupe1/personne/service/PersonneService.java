package com.masterRS.groupe1.personne.service;

import com.masterRS.groupe1.personne.modele.Personne;
import com.masterRS.groupe1.personne.repository.PersonneRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PersonneService {
    @Autowired
    private PersonneRepository personneRepository;

    public Personne addPersonne(Personne personne){
        return personneRepository.save(personne);
    }

    public Personne updatePersonne(Personne personne){
        return personneRepository.save(personne);
    }

    public void deleteByIdPersonne(Long id){
        personneRepository.deleteById(id);
    }

    public Personne findByIdPersonne(Long id){
        return personneRepository.findById(id).get();
    }

    public List<Personne> listPersonne(){
        return personneRepository.findAll();
    }
}

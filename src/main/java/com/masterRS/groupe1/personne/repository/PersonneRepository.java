package com.masterRS.groupe1.personne.repository;

import com.masterRS.groupe1.personne.modele.Personne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonneRepository extends JpaRepository<Personne, Long> {
}

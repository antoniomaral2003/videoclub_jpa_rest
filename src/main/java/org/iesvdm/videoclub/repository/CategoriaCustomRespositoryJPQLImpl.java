package org.iesvdm.videoclub.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.iesvdm.videoclub.domain.Pelicula;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Optional;

@Repository
public class CategoriaCustomRespositoryJPQLImpl implements CategoriaCustomRepository {

    @Autowired
    private EntityManager em;

    @Override
    public List<Pelicula> conteoPeliculas(Optional<String> buscarOptional, Optional<String> ordenarOptional) {

        StringBuilder queryBuilder = new StringBuilder("SELECT * FROM Pelicula P");

        if (buscarOptional.isPresent()) {

            queryBuilder.append(" ").append("WHERE P.nombre LIKE :nombre");

        }

        if (ordenarOptional.isPresent()) {

            if (buscarOptional.isPresent() && "asc".equalsIgnoreCase(buscarOptional.get())) {

                queryBuilder.append(" ").append("ORDER BY P.nombre ASC");

            } else if (buscarOptional.isPresent() && "desc".equalsIgnoreCase(buscarOptional.get())) {

                queryBuilder.append(" ").append("ORDER BY P.nombre DESC");

            }

        }

        Query query = em.createQuery(queryBuilder.toString());

        if (buscarOptional.isPresent()) {

            query.setParameter("nombre", "%"+buscarOptional.get()+"%");

        }

        return query.getResultList();
    }

}

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
    public Integer conteoPeliculas(Optional<String> buscarOptional, Optional<String> ordenarOptional) {

        StringBuilder queryBuilder = new StringBuilder("SELECT COUNT(id_pelicula) FROM pelicula_categoria");

        if (buscarOptional.isPresent()) {

            queryBuilder.append(" ").append("WHERE id_categoria LIKE :id");

        }

        if (ordenarOptional.isPresent()) {

            if (buscarOptional.isPresent() && "asc".equalsIgnoreCase(buscarOptional.get())) {

                queryBuilder.append(" ").append("ORDER BY id_categoria ASC");

            } else if (buscarOptional.isPresent() && "desc".equalsIgnoreCase(buscarOptional.get())) {

                queryBuilder.append(" ").append("ORDER BY id_categoria DESC");

            }

        }

        Query query = em.createQuery(queryBuilder.toString());

        if (buscarOptional.isPresent()) {

            query.setParameter("id", "%"+buscarOptional.get()+"%");

        }

        return query.getMaxResults();
    }

}

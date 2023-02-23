package org.iesvdm.videoclub.repository;

import java.util.*;
import org.iesvdm.videoclub.domain.Pelicula;

public interface CategoriaCustomRepository {

    public Integer conteoPeliculas(Optional<String> buscarOptional, Optional<String> ordenarOptional);

}

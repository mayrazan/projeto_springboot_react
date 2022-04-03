package br.edu.unoesc.projeto.heroes.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.unoesc.projeto.heroes.entities.Hero;
import br.edu.unoesc.projeto.heroes.entities.HeroType;

public interface HeroesRepository extends JpaRepository<Hero, Long> {

	@Query("select h from Hero h where h.heroType = :heroType")
	List<Hero> getByHeroType(@Param("heroType") HeroType heroType);

}

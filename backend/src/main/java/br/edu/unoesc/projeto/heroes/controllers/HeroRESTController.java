package br.edu.unoesc.projeto.heroes.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unoesc.projeto.heroes.dto.HeroesDTO;
import br.edu.unoesc.projeto.heroes.entities.Hero;
import br.edu.unoesc.projeto.heroes.entities.HeroType;
import br.edu.unoesc.projeto.heroes.repositories.HeroesRepository;
import br.edu.unoesc.projeto.heroes.services.HeroService;

@RestController
@RequestMapping(value = "api")
public class HeroRESTController {
	@Autowired
	private HeroService servico;
	@Autowired
	private HeroesRepository repositorio;

	@GetMapping(value = "/heroes")
	public Page<HeroesDTO> findAll(Pageable pageable) {
		return servico.findAll(pageable);
	}

	@GetMapping(value = "/hero/{id}")
	public HeroesDTO findById(@PathVariable Long id) {
		return servico.findById(id);
	}

	@PostMapping(value = "/hero")
	public Hero saveHero(@RequestBody Hero hero) {
		return repositorio.save(hero);
	}

	@PutMapping("/hero")
	public Hero updateHero(@RequestBody Hero hero) {
		return repositorio.save(hero);
	}

	@DeleteMapping("/hero")
	public void deleteHero(@RequestBody Hero hero) {
		repositorio.delete(hero);
	}

	@GetMapping(value = "/hero-type/{type}")
	public List<Hero> listByType(@PathVariable HeroType type) {
		return repositorio.getByHeroType(type);
	}

}

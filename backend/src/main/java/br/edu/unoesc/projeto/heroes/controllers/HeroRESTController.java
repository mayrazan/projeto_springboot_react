package br.edu.unoesc.projeto.heroes.controllers;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

	@PostMapping(value = "/hero/save")
	public Hero saveHero(@RequestParam String name, @RequestParam HeroType heroType,
			@RequestParam MultipartFile profilePicture) throws IOException {

		byte[] bytes = profilePicture.getBytes();
		Hero hero = new Hero();
		hero.setName(name);
		hero.setHeroType(heroType);
		hero.setProfilePicture(bytes);

		return repositorio.save(hero);
	}

	@PutMapping(value = "/hero/{id}/update")
	public Hero updateHero(@RequestBody Hero newHero, @PathVariable Long id) {
		return repositorio.findById(id).map(hero -> {
			hero.setName(newHero.getName());
			hero.setHeroType(newHero.getHeroType());
			hero.setProfilePicture(newHero.getProfilePicture());
			return repositorio.save(hero);
		}).orElseGet(() -> {
			newHero.setId(id);
			return repositorio.save(newHero);
		});
	}

	@DeleteMapping(value = "/hero/{id}/delete")
	public ResponseEntity<String> deleteHero(@PathVariable Long id) {
		repositorio.deleteById(id);
		return new ResponseEntity<>("Hero deleted", HttpStatus.OK);
	}

	@GetMapping(value = "/hero-type/{type}")
	public List<Hero> listByType(@PathVariable HeroType type) {
		return repositorio.getByHeroType(type);
	}

}

package br.edu.unoesc.projeto.heroes.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.unoesc.projeto.heroes.dto.HeroesDTO;
import br.edu.unoesc.projeto.heroes.entities.Hero;
import br.edu.unoesc.projeto.heroes.repositories.HeroesRepository;

@Service
public class HeroService {

	@Autowired
	private HeroesRepository repositorio;

	@Transactional(readOnly = true)
	public Page<HeroesDTO> findAll(Pageable pageable) {
		Page<Hero> resultado = repositorio.findAll(pageable);
		Page<HeroesDTO> pagina = resultado.map(x -> new HeroesDTO(x));
		return pagina;
	}

	@Transactional(readOnly = true)
	public HeroesDTO findById(Long id) {
		Hero resultado = repositorio.findById(id).get();
		HeroesDTO dto = new HeroesDTO(resultado);
		return dto;
	}

}

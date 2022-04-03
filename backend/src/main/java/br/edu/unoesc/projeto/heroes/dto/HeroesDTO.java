package br.edu.unoesc.projeto.heroes.dto;

import br.edu.unoesc.projeto.heroes.entities.Hero;
import br.edu.unoesc.projeto.heroes.entities.HeroType;

public class HeroesDTO {

	private Long id;
	private String name;
	private HeroType heroType;
	private byte[] profilePicture;
	
	public HeroesDTO() {}

	public HeroesDTO(Long id, String name, HeroType heroType, byte[] profilePicture) {
		super();
		this.id = id;
		this.name = name;
		this.heroType = heroType;
		this.profilePicture = profilePicture;
	}
	
	public HeroesDTO(Hero hero) {
		this.id = hero.getId();
		this.name = hero.getName();
		this.heroType = hero.getHeroType();
		this.profilePicture = hero.getProfilePicture();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public HeroType getHeroType() {
		return heroType;
	}

	public void setHeroType(HeroType heroType) {
		this.heroType = heroType;
	}

	public byte[] getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(byte[] profilePicture) {
		this.profilePicture = profilePicture;
	}
	
	
	
}

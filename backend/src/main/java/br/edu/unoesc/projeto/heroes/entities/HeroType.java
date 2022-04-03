package br.edu.unoesc.projeto.heroes.entities;

public enum HeroType {

	MARVEL("Marvel"), DC("DC");

	private final String heroType;

	HeroType(String heroType) {
		this.heroType = heroType;
	}

	public String getHeroType() {
		return heroType;
	}

}

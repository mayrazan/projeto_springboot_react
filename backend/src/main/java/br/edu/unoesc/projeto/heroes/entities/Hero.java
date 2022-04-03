package br.edu.unoesc.projeto.heroes.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "heroes")
public class Hero {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@Enumerated(EnumType.STRING)
	private HeroType heroType;
	@Column(name = "profilePicture", length = 1000, nullable = true)
	private byte[] profilePicture;

	public Hero() {
	}

	public Hero(Long id, String name, HeroType heroType, byte[] profilePicture) {
		super();
		this.id = id;
		this.name = name;
		this.heroType = heroType;
		this.profilePicture = profilePicture;
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
	
	public String getTypeHeroName() {
        return heroType.getHeroType();
    }

}
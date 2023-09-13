package com.TwoPiece.AnimeRandomizer.User;

import com.TwoPiece.AnimeRandomizer.Anime.Anime;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class SiteUser {
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    @Column(name = "username")
    private String username;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @ElementCollection
    @CollectionTable
    @Column(name = "userAnimeList")
    private List<Integer> userAnimeList = new ArrayList<>(List.of());
    @Id
    @Column(name="U_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long U_id;

    public SiteUser(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public SiteUser() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Integer> getUserAnimeList() {
        return userAnimeList;
    }

    public void addAnime(Anime anime) {
        userAnimeList.add(anime.getMalId());
    }
    public void addUser(SiteUser user) {

    }

    public void setId(Long id) {
        this.U_id = id;
    }

    public Long getId() {
        return U_id;
    }
}

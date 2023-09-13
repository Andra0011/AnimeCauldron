package com.TwoPiece.AnimeRandomizer.Anime;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table
public class Anime {
    @SequenceGenerator(
            name = "anime_sequence",
            sequenceName = "anime_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "anime_sequence"
    )
    @Id
    private Long id;

    private int malId; // Add the mal_id field

    @Column(length = 100, nullable = false)
    private String title;

    @Column(name = "aired_from")
    private Date airedFrom;

    @Column(name = "aired_to")
    private Date airedTo;

    private int episodes;

    @ElementCollection
    @CollectionTable(name = "genres")
    @Column(name = "genre")
    private List<Integer> genres;

    private double score;

    @Column(name = "scored_by")
    private int scoredBy;

    @Column(length = 50)
    private String status;

    @Column(length = 1000)
    private String synopsis;

    @Column(length = 50)
    private String type;

    @Column(length = 255)
    private String url;

    // Constructors, getters, and setters

    // Default constructor
    public Anime() {
    }

    // Constructor without ID
    public Anime(int malId, String title, Date airedFrom, Date airedTo, int episodes, List<Integer> genres, double score, int scoredBy,
                 String status, String synopsis, String type, String url) {
        this.malId = malId;
        this.title = title;
        this.airedFrom = airedFrom;
        this.airedTo = airedTo;
        this.episodes = episodes;
        this.genres = genres;
        this.score = score;
        this.scoredBy = scoredBy;
        this.status = status;
        this.synopsis = synopsis;
        this.type = type;
        this.url = url;
    }

    public int getMalId() {
        return malId;
    }

    public String getTitle() {
        return title;
    }

    public Date getAiredFrom() {
        return airedFrom;
    }

    public Date getAiredTo() {
        return airedTo;
    }

    public int getEpisodes() {
        return episodes;
    }

    public List<Integer> getGenres() {
        return genres;
    }

    public double getScore() {
        return score;
    }

    public int getScoredBy() {
        return scoredBy;
    }

    public String getStatus() {
        return status;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public String getType() {
        return type;
    }

    public String getUrl() {
        return url;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}

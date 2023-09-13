package com.TwoPiece.AnimeRandomizer.Anime.Controller;

import com.TwoPiece.AnimeRandomizer.Anime.Anime;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/anime")
public class AnimeController {
    @GetMapping("/random")
    public Anime getRandomAnime() {
        return null;
    }
}

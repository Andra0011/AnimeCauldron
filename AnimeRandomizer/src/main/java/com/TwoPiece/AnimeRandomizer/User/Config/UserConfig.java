package com.TwoPiece.AnimeRandomizer.User.Config;

import com.TwoPiece.AnimeRandomizer.User.SiteUser;
import com.TwoPiece.AnimeRandomizer.User.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            SiteUser firstUser = new SiteUser("firstUser", "user@user.com", "BitchesAndBros");
            SiteUser secondUser = new SiteUser("secondUser", "user@user.com", "BitchesAndBros");
            repository.saveAll(List.of(firstUser, secondUser));
        };
    }
}

package com.TwoPiece.AnimeRandomizer.User.Service;

import com.TwoPiece.AnimeRandomizer.User.Repository.UserRepository;
import com.TwoPiece.AnimeRandomizer.User.SiteUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public List<SiteUser> getUser(Long id) {
        return userRepository.findSiteUserByU_id(id);
    }
    public void addUser(SiteUser user) {
        Optional<SiteUser> userByUsername = userRepository.findSiteUserByU_id(user.getId().toString());
        if(userByUsername.isPresent()){
            throw new IllegalStateException("username is taken");
        }
        userRepository.save(user);
    }
}

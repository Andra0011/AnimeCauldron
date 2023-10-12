package com.TwoPiece.AnimeRandomizer.user.Service;

import com.TwoPiece.AnimeRandomizer.user.Models.User;
import com.TwoPiece.AnimeRandomizer.user.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findSiteUserByEmail(email);
    }

}

package com.TwoPiece.AnimeRandomizer.User.Controller;

import com.TwoPiece.AnimeRandomizer.User.Error.NotFoundUserException;
import com.TwoPiece.AnimeRandomizer.User.Models.EntityRequestDTO;
import com.TwoPiece.AnimeRandomizer.User.Models.Login;
import com.TwoPiece.AnimeRandomizer.User.Models.SiteUser;
import com.TwoPiece.AnimeRandomizer.User.Service.UserService;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public SiteUser getUserDetails(@PathVariable int id) {
        return userService.getUserById(id).orElseThrow(NotFoundUserException::new);
    }

    @GetMapping("/login")
    public SiteUser logIn(@RequestBody Login login) {
        return userService.login(login);
    }

    @PostMapping("/register")
    public String addUser(@RequestBody SiteUser user) {
        userService.addUser(user);
        return "Done";
    }

    @PutMapping("/{id}")
    public String updateUser(@PathVariable int id, @RequestBody EntityRequestDTO requestDTO) {
        Optional<SiteUser> optionalSiteUser = userService.getUserById(id);
        SiteUser user = optionalSiteUser.orElseThrow(NotFoundUserException::new);
        if (requestDTO.getChange().equals("email")) {
            if (userService.getUserByEmail(requestDTO.getChangeTo()).isPresent()) {
                throw new IllegalArgumentException("The email you have entered is already in use.");
            } else {
                user.setEmail(requestDTO.getChangeTo());
            }
        }
        if (requestDTO.getChange().equals("username")) user.setUsername(requestDTO.getChangeTo());
        if (requestDTO.getChange().equals("password")) user.setPassword(requestDTO.getChangeTo());
        userService.saveUser(user);
        return "Done";
    }


    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return "Done";
    }
}

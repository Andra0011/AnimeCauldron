package com.TwoPiece.AnimeRandomizer.user.Controller;

import com.TwoPiece.AnimeRandomizer.user.Error.NotFoundUserException;
import com.TwoPiece.AnimeRandomizer.user.Models.EntityRequestDTO;
import com.TwoPiece.AnimeRandomizer.user.Models.Login;
import com.TwoPiece.AnimeRandomizer.user.Models.SiteUser;
import com.TwoPiece.AnimeRandomizer.user.Service.UserService;
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

    @GetMapping("/{email}")
    public SiteUser getUserDetails(@PathVariable String email) {
        return userService.getUserByEmail(email).orElseThrow(NotFoundUserException::new);
    }

    @PostMapping("/login")
    public SiteUser logIn(@RequestBody Login login) {
        return userService.login(login);
    }

    @PostMapping("/register")
    public String addUser(@RequestBody SiteUser user) {
        userService.addUser(user);
        return "Done";
    }

    @PutMapping("/{email}")
    public String updateUser(@PathVariable String email, @RequestBody EntityRequestDTO requestDTO) {
        Optional<SiteUser> optionalSiteUser = userService.getUserByEmail(email);
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


    @DeleteMapping("/{email}")
    public String deleteUser(@PathVariable String email) {
        userService.deleteUser(email);
        return "Done";
    }
}

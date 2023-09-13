package com.TwoPiece.AnimeRandomizer.User.Controller;

import com.TwoPiece.AnimeRandomizer.User.SiteUser;
import com.TwoPiece.AnimeRandomizer.User.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/User")
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public SiteUser getUserDetails(@RequestBody Long id) {
        return userService.getUser(id);
    }

    @PostMapping
    public void addUser(SiteUser user) {
        userService.addUser(user);
    }

    @PutMapping
    public
}

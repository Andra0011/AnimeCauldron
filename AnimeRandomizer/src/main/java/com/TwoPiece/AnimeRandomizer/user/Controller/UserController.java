package com.TwoPiece.AnimeRandomizer.user.Controller;

import com.TwoPiece.AnimeRandomizer.user.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<String> sayHola() {
        return ResponseEntity.ok("Hola, Soy Dora!");
    }
}

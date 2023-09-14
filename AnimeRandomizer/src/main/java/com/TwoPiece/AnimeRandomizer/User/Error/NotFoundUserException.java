package com.TwoPiece.AnimeRandomizer.User.Error;

public class NotFoundUserException extends RuntimeException {
    public NotFoundUserException() {
        super("User not found");
    }

    public NotFoundUserException(String message) {
        super(message);
    }
}

package com.TwoPiece.AnimeRandomizer.user.Error;

public class NotFoundUserException extends RuntimeException {
    public NotFoundUserException() {
        super("Email or password is incorrect.");
    }

    public NotFoundUserException(String message) {
        super(message);
    }
}

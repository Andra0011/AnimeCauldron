package com.TwoPiece.AnimeRandomizer.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    private static final String SECRET_KEY = "4ldyD6DFzd0oHkjLHN5JGBwuBA6zFxGOhgrzw6I6OJUja2QVIMjlKDh9BPcy60AdrrSMnJ31EloM9Nuwq/hPw6R7cg5DjtImscZ1fMWpBSf4wyKEsgPZ1QR4ZPk6r6lBUUTR6KHJd1VGfHNnBBdbchiV72jPlAnogxK7qiockmxpAp3unE3RsG5LssWFUcC42HUKGrV1Udg4WfP9wA/A0Ip/LYMZnDNXxyVGKJXoHYGEmCDJpMJ0C84VadG+dieOfoC+LT2wMG00Q9O7QTJWJwpcFgqiYFVTKyEE3QQMwJ0D27zhEa5R0DdgpLhuViVzfkttpSnMHmt/Mra2DbXblQ5JMOpKTiYcy1RvfvtKaFA=";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public  boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(token).getBody();
    }

    private Key getSignInKey() {
        byte[] keyByte = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyByte);
    }
}

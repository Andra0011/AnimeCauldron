package com.TwoPiece.AnimeRandomizer.user.Repository;

import com.TwoPiece.AnimeRandomizer.user.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<User, Integer> {
    @Query("SELECT s FROM User s WHERE s.email = ?1")
    Optional<User> findSiteUserByEmail(String email);
}


package com.TwoPiece.AnimeRandomizer.User.Repository;

import com.TwoPiece.AnimeRandomizer.User.SiteUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<SiteUser, Long> {
    @Query("SELECT s FROM SiteUser s WHERE s.username = ?1")
    Optional<SiteUser> findSiteUserByU_id(String username);
}

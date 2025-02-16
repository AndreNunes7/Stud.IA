package unisanta.br.StudIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import unisanta.br.StudIA.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUsername(String nome);
    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);


}

package unisanta.br.StudIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import unisanta.br.StudIA.Model.Users;

import java.util.List;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByEmail(String email);
    Users findByUsername(String username);

}

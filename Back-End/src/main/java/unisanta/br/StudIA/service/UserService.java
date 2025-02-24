package unisanta.br.StudIA.service;

import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;



    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Users createUser(Users user) {
        return userRepository.save(user);
    }

    @Transactional
    public Users getUserById(Long id) {

        Users user = userRepository.findById(id).orElse(null);
        if (user != null) {
            Hibernate.initialize(userRepository.findById(id).get().getSelecoes());
        }
        return user;
    }

    public Users deleteUserById(Long id) {
        Users user = userRepository.findById(id).orElse(null);
        if (user != null) {
            userRepository.deleteById(id);
        }
        return user;
    }

    @Transactional
    public Users getUserByEmail(String email) {
        Hibernate.initialize(userRepository.findByEmail(email).getSelecoes());

        return userRepository.findByEmail(email);
    }

    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


}
package unisanta.br.StudIA.service;

<<<<<<< HEAD
=======
import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.repository.query.Param;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
import org.springframework.stereotype.Service;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.repository.UserRepository;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.Optional;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

@Service
public class UserService {

    private final UserRepository userRepository;



    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Users createUser(Users user) {
        return userRepository.save(user);
    }

<<<<<<< HEAD
    public Users getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
=======
    @Transactional
    public Users getUserById(Long id) {

        Users user = userRepository.findById(id).orElse(null);
        if (user != null) {
            Hibernate.initialize(userRepository.findById(id).get().getSelecoes());
        }
        return user;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
    }

    public Users deleteUserById(Long id) {
        Users user = userRepository.findById(id).orElse(null);
        if (user != null) {
            userRepository.deleteById(id);
        }
        return user;
    }

<<<<<<< HEAD
    public Users getUserByEmail(String email) {
=======
    @Transactional
    public Users getUserByEmail(String email) {
        Hibernate.initialize(userRepository.findByEmail(email).getSelecoes());

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
        return userRepository.findByEmail(email);
    }

    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


}
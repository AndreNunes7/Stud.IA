package unisanta.br.StudIA.service;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import unisanta.br.StudIA.dto.UserDTO;
import unisanta.br.StudIA.dto.UserResponse;
import unisanta.br.StudIA.exception.NotFound;
import unisanta.br.StudIA.model.User;
import unisanta.br.StudIA.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;

    }

    @Transactional
    public UserResponse createUser(UserDTO userDTO) {
        if (userRepository.existsByUsername(userDTO.getUsername())) {
            throw new IllegalArgumentException("Nome de usuário já está em uso");
        }

        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email já está em uso");
        }

        if (userDTO.getPassword().length() < 6) {
            throw new IllegalArgumentException("A senha deve ter pelo menos 6 caracteres");
        }

        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());

        userRepository.save(user);



        user.setPassword(encodePassword(userDTO.getPassword()));
//        user.setSelecao(userDTO.getSelecao());

        User savedUser = userRepository.save(user);
        return savedUser.toResponse(); //
    }

    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFound("Usuário não encontrado com id: " + id));
        return user.toResponse();
    }

    @Transactional
    public UserResponse updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFound("Usuário não encontrado com id: " + id));

        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());

        if (userDTO.getPassword() != null && !userDTO.getPassword().isEmpty()) {
            user.setPassword(encodePassword(userDTO.getPassword()));
           
        }
//        user.setSelecao(userDTO.getSelecao());

        User updatedUser = userRepository.save(user);
        return updatedUser.toResponse();
    }

    private String encodePassword(@NotBlank(message = "A senha é obrigatória") @Size(min = 6, max = 18, message = "A senha deve ter entre 6 e 18 caracteres") @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$",
            message = "A senha deve conter pelo menos uma letra e um número") String password) {
        return password;
    }

    @Transactional
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new NotFound("Usuário não encontrado com id: " + id);
        }
        userRepository.deleteById(id);
    }


}

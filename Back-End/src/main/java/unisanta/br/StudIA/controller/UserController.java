package unisanta.br.StudIA.controller;

<<<<<<< HEAD
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.dto.UserDTO;
import unisanta.br.StudIA.service.UserService;

import java.util.HashMap;
import java.util.Map;


@RestController
=======
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.dto.SelecaoDTO;
import unisanta.br.StudIA.dto.UserDTO;
import unisanta.br.StudIA.service.UserService;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "*")
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
@RequestMapping("/api/v1/auth/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody UserDTO userDTO) {

        if (userDTO == null || userDTO.username() == null || userDTO.email() == null || userDTO.senha() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Todos os campos são obrigatórios"));
        }

        Users user = userDTO.mapearUsuario();
        Users savedUser = userService.createUser(user);

<<<<<<< HEAD
=======
        Map<String, Object> userResponse = new HashMap<>();
        userResponse.put("userId", savedUser.getUserId());
        userResponse.put("username", savedUser.getUsername());
        userResponse.put("email", savedUser.getEmail());
        //userResponse.put("password", savedUser.getPassword());
        userResponse.put("creationTimestamp", savedUser.getCreationTimestamp());
        userResponse.put("updateTimestamp", savedUser.getUpdateTimestamp());

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.CREATED.value());
        responseMap.put("message", "Usuário criado com sucesso");
<<<<<<< HEAD
        responseMap.put("user", savedUser);

=======
        responseMap.put("user", userResponse);
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
        return ResponseEntity.status(HttpStatus.CREATED).body(responseMap);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getUserById(@PathVariable Long id) {
        Users user = userService.getUserById(id);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Usuário não encontrado"));
        }

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.OK.value());
<<<<<<< HEAD
        responseMap.put("user", user);

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

=======
        responseMap.put("message", "Usuário encontrado com sucesso");
        responseMap.put("user", user);

//        UserDTO userDTO = new UserDTO(user.getUserId(), user.getUsername(), user.getEmail(), user.getPassword());
//
//        List<SelecaoDTO> selecaoDTOs = user.getSelecoes().stream()
//                .map(selecao -> new SelecaoDTO(selecao.getUsuario(), selecao.getSelecoes()))
//                .collect(Collectors.toList());
//
//        responseMap.put("user", Map.of(
//                "userId", userDTO.id(),
//                "username", userDTO.username(),
//                "email", userDTO.email(),
//                "password", userDTO.senha(),
//                "creationTimestamp", user.getCreationTimestamp(),
//                "updateTimestamp", user.getUpdateTimestamp(),
//                "itens", selecaoDTOs
//        ));

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }



>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteUserById(@PathVariable Long id) {
        Users user = userService.getUserById(id);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Usuário não encontrado"));
        }

        userService.deleteUserById(id);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.OK.value());
        responseMap.put("user", user.getUsername());
        responseMap.put("message", "Usuário deletado com sucesso");

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody UserDTO userDTO) {
        if (userDTO.email() == null || userDTO.senha() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Todos os campos são obrigatórios"));
        }

        Users user = userService.getUserByEmail(userDTO.email());

<<<<<<< HEAD
=======

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Usuário não encontrado"));
        }

<<<<<<< HEAD
        if (!user.getSenha().equals(userDTO.senha())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Senha incorreta"));
        }

=======
        if (!user.getPassword().equals(userDTO.senha())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Senha incorreta"));
        }

        for (Selecao selecao : user.getSelecoes()) {
            selecao.getSelecoes();
        }



>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.OK.value());
        responseMap.put("message", "Usuário logado com sucesso");
<<<<<<< HEAD
        responseMap.put("user", user);
=======
        responseMap.put("userID", user.getUserId());
        responseMap.put("selecoes", user.getSelecoes());

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)


        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }



}
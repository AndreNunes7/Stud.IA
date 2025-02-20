package unisanta.br.StudIA.controller;

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

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.CREATED.value());
        responseMap.put("message", "Usuário criado com sucesso");
        responseMap.put("user", savedUser);

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
        responseMap.put("user", user);

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

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

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Usuário não encontrado"));
        }

        if (!user.getSenha().equals(userDTO.senha())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Senha incorreta"));
        }

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.OK.value());
        responseMap.put("message", "Usuário logado com sucesso");
        responseMap.put("user", user);


        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }



}
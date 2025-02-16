package unisanta.br.StudIA.Controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unisanta.br.StudIA.dto.UserDTO;
import unisanta.br.StudIA.dto.UserResponse;
import unisanta.br.StudIA.exception.NotFound;
import unisanta.br.StudIA.service.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/cadastro")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createUser(@Valid @RequestBody UserDTO userDTO) {
        UserResponse response = userService.createUser(userDTO);
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        responseMap.put("status", HttpStatus.CREATED.value());
        responseMap.put("message", "Usuário criado com sucesso");
        responseMap.put("user", response);

        return new ResponseEntity<>(responseMap, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getUser(@PathVariable Long id) {
        UserResponse response = userService.getUserById(id);
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        if (response != null) {
            responseMap.put("status", HttpStatus.OK.value());
            responseMap.put("message", "Usuário encontrado");
            responseMap.put("user", response);
        } else {
            responseMap.put("status", HttpStatus.NOT_FOUND.value());
            responseMap.put("message", "Usuário não encontrado");
        }
        return new ResponseEntity<>(responseMap, response != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserDTO userDTO) {
        UserResponse response = userService.updateUser(id, userDTO);
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());
        if (response != null) {
            responseMap.put("status", HttpStatus.OK.value());
            responseMap.put("message", "Usuário atualizado com sucesso");
            responseMap.put("user", response);
        } else {
            responseMap.put("status", HttpStatus.NOT_FOUND.value());
            responseMap.put("message", "Usuário não encontrado para atualização");
        }

        return new ResponseEntity<>(responseMap, response != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("timestamp", System.currentTimeMillis());

        try {
            userService.deleteUser(id);

            responseMap.put("status", HttpStatus.OK.value());
            responseMap.put("message", "Usuário deletado com sucesso");
        } catch (NotFound ex) {
            responseMap.put("status", HttpStatus.NOT_FOUND.value());
            responseMap.put("message", ex.getMessage());
        }

        return new ResponseEntity<>(responseMap, HttpStatus.OK);
    }

}

package unisanta.br.StudIA.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.dto.SelecaoDTO;
import unisanta.br.StudIA.service.SelecaoService;
import unisanta.br.StudIA.service.UserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/")
public class roadmapController {

    private final UserService userService;
    private final SelecaoService selecaoService;

    public roadmapController(UserService userService, SelecaoService selecaoService) {
        this.userService = userService;
        this.selecaoService = selecaoService;
    }

    @PostMapping("/roadmap")
    public ResponseEntity<Map<String, Object>> createRoadmap(@RequestBody SelecaoDTO selecaoDTO) {
        if (selecaoDTO == null || selecaoDTO.username() == null || selecaoDTO.selecoes() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Username e selecoes são obrigatórios"));
        }

        Users user = userService.findByUsername(selecaoDTO.username());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Usuário não encontrado"));
        }

        Selecao selecao = selecaoDTO.mapearSelecao(user);

        selecaoService.saveSelecao(selecao);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Roadmap criado com sucesso");
        response.put("usuario", selecao.getUsuario());
        response.put("Itens", selecao.getSelecoes());

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("Seleções", response);

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }
}

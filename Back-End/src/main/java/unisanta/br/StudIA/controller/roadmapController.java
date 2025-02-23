package unisanta.br.StudIA.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.dto.SelecaoDTO;
=======
import reactor.core.publisher.Mono;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.dto.SelecaoDTO;
import unisanta.br.StudIA.service.OpenAIService;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
import unisanta.br.StudIA.service.SelecaoService;
import unisanta.br.StudIA.service.UserService;

import java.util.HashMap;
<<<<<<< HEAD
import java.util.List;
=======
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
import java.util.Map;


@RestController
<<<<<<< HEAD
@RequestMapping("/api/v1/")
public class roadmapController {

    private final UserService userService;
    private final SelecaoService selecaoService;

    public roadmapController(UserService userService, SelecaoService selecaoService) {
        this.userService = userService;
        this.selecaoService = selecaoService;
=======
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/")
public class roadmapController {

    private final OpenAIService openAIService;


    private final UserService userService;
    private final SelecaoService selecaoService;

    public roadmapController(OpenAIService openAIService, UserService userService, SelecaoService selecaoService) {
        this.openAIService = openAIService;
        this.userService = userService;
        this.selecaoService = selecaoService;

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
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
<<<<<<< HEAD
    }
}
=======

        // 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

    }

    @GetMapping("/roadmap/{username}")
    public Mono<ResponseEntity<Map<String, String>>> generateRoadmap(@PathVariable String username) {
        Users user = userService.findByUsername(username);
        if (user == null) {
            return Mono.just(ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Usuário não encontrado")));
        }

        Selecao selecao = selecaoService.getSelecaoByUser(user);
        if (selecao == null) {
            return Mono.just(ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Seleção não encontrada para o usuário")));
        }

        String conteudo = String.join(", ", selecao.getSelecoes());
        String prompt = "Com base nas seguintes seleções: " + conteudo +
                ", elabore um roadmap de estudos em json personalizado e estruturado, definindo a ordem ideal dos tópicos a serem estudados. " +
                "Inclua um cronograma detalhado, especificando dias, horários e carga horária para cada matéria. " +
                "Indique os melhores locais e métodos de estudo, como resumos, exercícios práticos, videoaulas, leituras ou outros recursos. " +
                "Sugira materiais de apoio de qualidade, como livros, cursos, artigos e plataformas online. " +
                "Além disso, identifique as principais dificuldades de cada matéria e forneça estratégias eficazes para superá-las, garantindo um aprendizado otimizado.";



        return openAIService.gerarResposta(prompt)
                .map(response -> ResponseEntity.ok(Map.of("roadmap", response)))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Map.of("message", "Erro ao gerar o roadmap")));
    }


}




>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

package unisanta.br.StudIA.service;

import lombok.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

@Service
public class OpenAIService {

    private final WebClient webClient;
    private final String geminiApiKey = "AIzaSyAmv-vOApBghI0cs7J8YWIM1oC1UO8aPjk";

    public OpenAIService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://generativelanguage.googleapis.com/v1beta").build();
    }

    public Mono<String> gerarResposta(String prompt) {
        return webClient.post()
                .uri("/models/gemini-pro:generateContent?key=" + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(Map.of(
                        "contents", List.of(
                                Map.of("parts", List.of(Map.of("text", prompt)))
                        )
                ))
                .retrieve()
                .bodyToMono(Map.class)
                .map(response -> {
                    List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.get("candidates");
                    if (candidates != null && !candidates.isEmpty()) {
                        Map<String, Object> candidate = candidates.get(0);
                        Map<String, Object> content = (Map<String, Object>) candidate.get("content");
                        List<Map<String, Object>> parts = (List<Map<String, Object>>) content.get("parts");
                        if (parts != null && !parts.isEmpty()) {
                            Map<String, Object> part = parts.get(0);
                            return (String) part.get("text");
                        }
                    }
                    return "Erro ao processar resposta do Gemini.";
                })
                .onErrorResume(e -> Mono.just("Erro ao chamar a API do Gemini: " + e.getMessage()));
    }
}

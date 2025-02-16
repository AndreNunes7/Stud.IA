package unisanta.br.StudIA.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import unisanta.br.StudIA.model.User;

import java.time.Instant;


public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private String selecao;
    private Instant createdAt;
    private Instant updatedAt;

    // Construtor sem argumentos
    public UserResponse() {
    }

    // Construtor com argumentos
    public UserResponse(Long id, String username, String email, Instant createdAt, Instant updatedAt) {
        this.id = id;
        this.username = username;
        this.email = email;
//        this.selecao = selecao;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSelecao() {
        return selecao;
    }

    public void setSelecao(String selecao) {
        this.selecao = selecao;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public static UserResponse fromEntity(User user) {
        return new UserResponse(
                user.getUserID(),
                user.getUsername(),
                user.getEmail(),
                user.getCreationTimestamp(),
                user.getUpdatedTimestamp()
        );
    }

    // Builder Manual
    public static class Builder {
        private Long id;
        private String username;
        private String email;
        private String selecao;
        private Instant createdAt;
        private Instant updatedAt;

        public Builder setId(Long id) {
            this.id = id;
            return this;
        }

        public Builder setUsername(String username) {
            this.username = username;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setSelecao(String selecao) {
            this.selecao = selecao;
            return this;
        }

        public Builder setCreatedAt(Instant createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public Builder setUpdatedAt(Instant updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public UserResponse build() {
            return new UserResponse(id, username, email, createdAt, updatedAt);
        }
    }
}

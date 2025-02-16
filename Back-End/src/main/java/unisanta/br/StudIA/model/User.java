package unisanta.br.StudIA.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import unisanta.br.StudIA.dto.UserResponse;

import java.time.Instant;

@Entity
@Table()
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userID;

    @Column(name = "usuario", nullable = false, length = 30)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "senha", nullable = false, length = 18)
    private String password;

//    @Column(name = "selecao", nullable = true)
//    private String selecao;

    @CreationTimestamp
    @Column(updatable = false)
    private Instant creationTimestamp;

    @UpdateTimestamp
    private Instant updatedTimestamp;

    // Getters e Setters
    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public String getSelecao() {
//        return selecao;
//    }

//    public void setSelecao(String selecao) {
//        this.selecao = selecao;
//    }

    public Instant getCreationTimestamp() {
        return creationTimestamp;
    }

    public void setCreationTimestamp(Instant creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
    }

    public Instant getUpdatedTimestamp() {
        return updatedTimestamp;
    }

    public void setUpdatedTimestamp(Instant updatedTimestamp) {
        this.updatedTimestamp = updatedTimestamp;
    }

    public UserResponse toResponse() {
        return new UserResponse.Builder()
                .setId(this.userID)
                .setUsername(this.username)
                .setEmail(this.email)
//                .setSelecao(this.selecao)
                .setCreatedAt(this.creationTimestamp)
                .setUpdatedAt(this.updatedTimestamp)
                .build();
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
//                ", selecao='" + selecao + '\'' +
                ", creationTimestamp=" + creationTimestamp +
                ", updatedTimestamp=" + updatedTimestamp +
                '}';
    }
}

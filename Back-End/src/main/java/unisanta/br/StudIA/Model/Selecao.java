package unisanta.br.StudIA.Model;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;

<<<<<<< HEAD

=======
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
import java.io.IOException;
import java.util.List;

@Entity
@Table(name = "selecao")
public class Selecao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "selecao_id", nullable = false)
    private Long selecaoId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
<<<<<<< HEAD
=======
    @JsonBackReference
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
    private Users user;

    @Column(name = "usuario", nullable = false)
    private String usuario;

    @Column(name = "selecoes", columnDefinition = "TEXT")
<<<<<<< HEAD
=======
    @JsonIgnore
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
    private String selecoesJson;

    @Transient
    private List<String> selecoes;

    public Long getSelecaoId() {
        return selecaoId;
    }

    public void setSelecaoId(Long selecaoId) {
        this.selecaoId = selecaoId;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
        this.usuario = user.getUsername();
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public List<String> getSelecoes() {
        if (selecoes == null && selecoesJson != null) {
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                selecoes = objectMapper.readValue(selecoesJson, new TypeReference<List<String>>() {});
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return selecoes;
    }

    public void setSelecoes(List<String> selecoes) {
        this.selecoes = selecoes;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            this.selecoesJson = objectMapper.writeValueAsString(selecoes);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
<<<<<<< HEAD
=======





>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
}

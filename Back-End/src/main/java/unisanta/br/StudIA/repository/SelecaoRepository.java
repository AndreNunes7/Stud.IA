package unisanta.br.StudIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import unisanta.br.StudIA.Model.Selecao;
<<<<<<< HEAD

public interface SelecaoRepository extends JpaRepository<Selecao, Long> {

=======
import unisanta.br.StudIA.Model.Users;

public interface SelecaoRepository extends JpaRepository<Selecao, Long> {

    Selecao findByUsuario(String usuario);
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
}

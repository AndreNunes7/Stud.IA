package unisanta.br.StudIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;

public interface SelecaoRepository extends JpaRepository<Selecao, Long> {

    Selecao findByUsuario(String usuario);
}

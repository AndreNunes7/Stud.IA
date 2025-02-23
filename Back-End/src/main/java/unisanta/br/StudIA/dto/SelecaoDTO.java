package unisanta.br.StudIA.dto;

import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;

import java.util.List;

public record SelecaoDTO(
        String username,
        List<String> selecoes
) {

    public Selecao mapearSelecao(Users user) {
        Selecao selecao = new Selecao();
        selecao.setUser(user);
        selecao.setUsuario(user.getUsername());
        selecao.setSelecoes(this.selecoes);
<<<<<<< HEAD
        return selecao;
    }
}
=======

        return selecao;
    }
}
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

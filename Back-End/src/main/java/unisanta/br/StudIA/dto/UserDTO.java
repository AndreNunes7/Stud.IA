package unisanta.br.StudIA.dto;

<<<<<<< HEAD
=======
import unisanta.br.StudIA.Model.Selecao;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
import unisanta.br.StudIA.Model.Users;

import java.util.List;

public record UserDTO(
        Long id,
        String username,
        String email,
        String senha

<<<<<<< HEAD
=======

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
) {

    public Users mapearUsuario() {
        Users user = new Users();
        user.setUserId(this.id);
        user.setUsername(this.username);
        user.setEmail(this.email);
<<<<<<< HEAD
        user.setSenha(this.senha);
=======
        user.setPassword(this.senha);
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

        return user;
    }


}
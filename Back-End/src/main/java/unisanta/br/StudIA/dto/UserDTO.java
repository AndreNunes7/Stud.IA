package unisanta.br.StudIA.dto;

import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;

import java.util.List;

public record UserDTO(
        Long id,
        String username,
        String email,
        String senha

) {

    public Users mapearUsuario() {
        Users user = new Users();
        user.setUserId(this.id);
        user.setUsername(this.username);
        user.setEmail(this.email);
        user.setPassword(this.senha);

        return user;
    }


}
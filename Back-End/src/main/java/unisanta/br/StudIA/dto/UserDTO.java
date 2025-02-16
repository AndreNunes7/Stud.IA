package unisanta.br.StudIA.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UserDTO {
    @NotBlank(message = "O nome de usuário é obrigatório")
    @Size(min = 3, max = 30, message = "O nome deve ter entre 3 e 30 caracteres")
    @Pattern(regexp = "^[a-zA-Z0-9._-]+$", message = "O nome de usuário deve conter apenas letras, números e os caracteres . _ -")
    private String username;

    @NotBlank(message = "O email é obrigatório")
    @Email(message = "Email inválido")
    private String email;

    @NotBlank(message = "A senha é obrigatória")
    @Size(min = 6, max = 18, message = "A senha deve ter entre 6 e 18 caracteres")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$",
            message = "A senha deve conter pelo menos uma letra e um número")
    private String password;

//    @NotBlank(message = "A seleção é obrigatória")
//    private String selecao;

    public @NotBlank(message = "O nome de usuário é obrigatório") @Size(min = 3, max = 30, message = "O nome deve ter entre 3 e 30 caracteres") @Pattern(regexp = "^[a-zA-Z0-9._-]+$", message = "O nome de usuário deve conter apenas letras, números e os caracteres . _ -") String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank(message = "O nome de usuário é obrigatório") @Size(min = 3, max = 30, message = "O nome deve ter entre 3 e 30 caracteres") @Pattern(regexp = "^[a-zA-Z0-9._-]+$", message = "O nome de usuário deve conter apenas letras, números e os caracteres . _ -") String username) {
        this.username = username;
    }

    public @NotBlank(message = "O email é obrigatório") @Email(message = "Email inválido") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "O email é obrigatório") @Email(message = "Email inválido") String email) {
        this.email = email;
    }

    public @NotBlank(message = "A senha é obrigatória") @Size(min = 6, max = 18, message = "A senha deve ter entre 6 e 18 caracteres") @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$",
            message = "A senha deve conter pelo menos uma letra e um número") String getPassword() {
        return password;
    }

    public void setPassword(@NotBlank(message = "A senha é obrigatória") @Size(min = 6, max = 18, message = "A senha deve ter entre 6 e 18 caracteres") @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$",
            message = "A senha deve conter pelo menos uma letra e um número") String password) {
        this.password = password;
    }

//    public @NotBlank(message = "A seleção é obrigatória") String getSelecao() {
//        return selecao;
//    }
//
//    public void setSelecao(@NotBlank(message = "A seleção é obrigatória") String selecao) {
//        this.selecao = selecao;
//    }
}

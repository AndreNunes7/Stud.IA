package unisanta.br.StudIA.service;

import org.springframework.stereotype.Service;
import unisanta.br.StudIA.Model.Selecao;
<<<<<<< HEAD
import unisanta.br.StudIA.repository.SelecaoRepository;
=======
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.repository.SelecaoRepository;
import unisanta.br.StudIA.repository.UserRepository;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

@Service
public class SelecaoService {
    private final SelecaoRepository selecaoRepository;
<<<<<<< HEAD

    public SelecaoService(SelecaoRepository selecaoRepository) {
        this.selecaoRepository = selecaoRepository;
=======
    private final UserRepository userRepository;

    public SelecaoService(SelecaoRepository selecaoRepository,UserRepository userRepository) {
        this.selecaoRepository = selecaoRepository;
        this.userRepository = userRepository;
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
    }
    public Selecao saveSelecao(Selecao selecao) {
        return selecaoRepository.save(selecao);
    }
<<<<<<< HEAD
=======


    public Selecao getSelecaoByUser(Users user) {
        return selecaoRepository.findByUsuario(user.getUsername());
    }
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
}

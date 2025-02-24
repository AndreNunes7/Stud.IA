package unisanta.br.StudIA.service;

import org.springframework.stereotype.Service;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.Model.Users;
import unisanta.br.StudIA.repository.SelecaoRepository;
import unisanta.br.StudIA.repository.UserRepository;

@Service
public class SelecaoService {
    private final SelecaoRepository selecaoRepository;
    private final UserRepository userRepository;

    public SelecaoService(SelecaoRepository selecaoRepository,UserRepository userRepository) {
        this.selecaoRepository = selecaoRepository;
        this.userRepository = userRepository;
    }
    public Selecao saveSelecao(Selecao selecao) {
        return selecaoRepository.save(selecao);
    }


    public Selecao getSelecaoByUser(Users user) {
        return selecaoRepository.findByUsuario(user.getUsername());
    }
}

package unisanta.br.StudIA.service;

import org.springframework.stereotype.Service;
import unisanta.br.StudIA.Model.Selecao;
import unisanta.br.StudIA.repository.SelecaoRepository;

@Service
public class SelecaoService {
    private final SelecaoRepository selecaoRepository;

    public SelecaoService(SelecaoRepository selecaoRepository) {
        this.selecaoRepository = selecaoRepository;
    }
    public Selecao saveSelecao(Selecao selecao) {
        return selecaoRepository.save(selecao);
    }
}

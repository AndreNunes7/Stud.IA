import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  TextField,
  Box,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { jsPDF } from "jspdf";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
      {steps.map((step) => (
        <Box
          key={step}
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: step <= currentStep ? "primary.main" : "grey.500",
            margin: "0 8px",
          }}
        />
      ))}
    </Box>
  );
};

export default function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: [],
    dob: "",
    gender: "",
    professionalObjective: "",
    portfolioLink: "",
    githubLink: "",
    linkedinLink: "",
    photo: null,
  });

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleNext = () => {
    if (step === 2) {
      if (!formData.name || !formData.email) {
        alert('Nome e Email são obrigatórios!');
        return;
      }
    }
    setStep(step + 1);
  };
  

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleSubmit = () => {
    console.log(formData);
    setStep(step + 1);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
  
    // Cabeçalho com o nome do usuário e título
    doc.setFontSize(14);
    doc.text("Currículo", 20, 30);
  
    // Linha separadora
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
  
    // Dados pessoais
    doc.setFontSize(12);
    doc.text("Dados Pessoais", 20, 45);
    doc.setFontSize(10);
    doc.text(`Nome: ${formData.name}`, 20, 55);
    doc.text(`Email: ${formData.email}`, 20, 65);
    doc.text(`Data de Nascimento: ${formData.dob}`, 20, 75);
    doc.text(`Gênero: ${formData.gender}`, 20, 85);
    
    // Linha separadora
    doc.line(20, 90, 190, 90);
  
    // Objetivo profissional
    doc.setFontSize(12);
    doc.text("Objetivo Profissional", 20, 100);
    doc.setFontSize(10);
    doc.text(formData.professionalObjective, 20, 110, { maxWidth: 170 });
  
    // Linha separadora
    doc.line(20, 120, 190, 120);
  
    // Link de portfólio, GitHub, LinkedIn
    doc.setFontSize(12);
    doc.text("Links", 20, 130);
    doc.setFontSize(10);
    doc.text(`Portfólio: ${formData.portfolioLink}`, 20, 140);
    doc.text(`GitHub: ${formData.githubLink}`, 20, 150);
  
    // Linha separadora
    doc.line(20, 165, 190, 165);
  
    // Se houver foto, adicionar ao PDF
    if (formData.photo) {
      const img = URL.createObjectURL(formData.photo);
      doc.addImage(img, "JPEG", 150, 40, 40, 40); // Adiciona a foto do perfil
    }
  
    // Salvar o PDF
    doc.save("curriculo_usuario.pdf");
  };
  

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            backgroundImage: "linear-gradient(135deg, #1a0f47 0%, #13141d 50%, #283361 100%)",
            color: "#fff",
            padding: "16px",
          },
        }}
      >
        <ProgressBar currentStep={step} totalSteps={6} />

        <List>
          {/* Etapa 1: Tela inicial com botão "Começar" */}
          {step === 1 && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="10vh"
            >
              <ListItemText primary="Crie seu perfil!" primaryTypographyProps={{ variant: "h5", fontWeight: "bold" }} />
              <Button onClick={handleNext} variant="contained" color="primary">
                Começar
              </Button>
            </Box>
          )}

          {/* Etapa 2: Dados básicos - Nome e Email */}
          {step === 2 && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <TextField
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: "1.2rem" 
                  },
                  "& .MuiInputLabel-root": { color: "#fff" }, 
                }}
                InputLabelProps={{
                  shrink: true, 
                }}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" }, 
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: "1.2rem" 
                  },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
                InputLabelProps={{
                  shrink: true, 
                }}
              />
              <Button onClick={handleNext} variant="contained" color="primary">
                Próximo
              </Button>
            </Box>
          )}



          {/* Etapa 3: Informações adicionais */}
          {step === 3 && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <TextField
                label="Data de Nascimento"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" }, 
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" }, 
                }}
                InputLabelProps={{
                  shrink: true, 
                }}
              />
              <TextField
                label="Gênero"
                name="gender"
                select
                value={formData.gender}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" },
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
              >
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
              </TextField>
              <TextField
                label="Objetivo Profissional"
                name="professionalObjective"
                value={formData.professionalObjective}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" },
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
              />
              <Box display="flex" justifyContent="center" width="100%" mt={2}>
                <Button onClick={handleBack} variant="contained" color="secondary">
                  Voltar
                </Button>
                <Button
                  onClick={handleNext}
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: "8px" }}
                >
                  Próximo
                </Button>
              </Box>
            </Box>
          )}

          {/* Etapa 4: Links do Portfólio, GitHub e LinkedIn */}
          {step === 4 && (
            <Box>
              <TextField
                label="Link do Linkedin"
                name="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" },
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}

                InputProps={{
                  style: { color: "#fff" },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
              <TextField
                label="Link do GitHub"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                  fieldset: { borderColor: "#fff" },
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
              <Button onClick={handleBack} variant="contained" color="secondary">
                Voltar
              </Button>
              <Button onClick={handleNext} variant="contained" color="primary" sx={{ marginLeft: "8px" }}>
                Próximo
              </Button>
            </Box>
          )}


          {/* Etapa 5: Carregar foto */}
          {step === 5 && (
            <Box>
              <Box mt={2} display="flex" justifyContent="center" width="100%">
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="photo-upload"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="photo-upload">
                  <Button component="span" variant="contained" color="primary">
                    Carregar Foto
                  </Button>
                </label>
              </Box>
              {formData.photo && (
                <Box mt={2} display="flex" justifyContent="center" width="100%">
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    alt="Foto do Perfil"
                    style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                  />
                </Box>
              )}
              <Box display="flex" justifyContent="center" width="100%" mt={2}>
                <Button onClick={handleBack} variant="contained" color="secondary">
                  Voltar
                </Button>
                <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ marginLeft: "8px" }}>
                  Finalizar
                </Button>
              </Box>
            </Box>
          )}



          {/* Etapa 6: Perfil finalizado */}
          {step === 6 && (
            <Box>
              <ListItemText primary="Perfil finalizado!" />
              <ListItemText primary={`Nome: ${formData.name}`} />
              <ListItemText primary={`Email: ${formData.email}`} />
              <ListItemText primary={`Data de Nascimento: ${formData.dob}`} />
              <ListItemText primary={`Gênero: ${formData.gender}`} />
              <ListItemText primary={`Objetivo: ${formData.professionalObjective}`} />
              <ListItemText primary={`Link do Portfólio: ${formData.portfolioLink}`} />
              <ListItemText primary={`GitHub: ${formData.githubLink}`} />
              <ListItemText primary={`LinkedIn: ${formData.linkedinLink}`} />
              {formData.photo && (
                <img
                  src={URL.createObjectURL(formData.photo)}
                  alt="Foto do Perfil"
                  style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                />
              )}
              <Button onClick={toggleDrawer(false)} variant="contained" color="primary">
                Fechar
              </Button>
              <Button onClick={() => setStep(2)} variant="contained" color="secondary" sx={{ marginLeft: "8px" }}>
                Editar Perfil
              </Button>

              <Button onClick={(generatePDF)} variant="contained" color="secondary" sx={{ marginLeft: "8px" }}>
                PDF
              </Button>
            </Box>
          )}
        </List>
      </Drawer>
    </>
  );
}
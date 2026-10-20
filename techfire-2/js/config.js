/* =====================================================================
   CONFIGURAÇÃO — É SÓ EDITAR AQUI
   ===================================================================== */
const CONFIG = {
  escola: "Nome da sua escola",
  ano: 2026,
  emailContato: "contato@techfire.com",   // para onde o formulário de contato envia
  exigirLogin: true,                       // false = o site abre sem precisar entrar
  dono: "tiago@techfire.com",             // só esta conta vê a página "Meu guia" (guia/guia.html)

  /* ---------- CONTAS DA EQUIPE ----------
     Funcionam em qualquer computador e navegador, sem precisar criar conta.
     Atenção: qualquer pessoa que abrir este arquivo consegue ver estas senhas.
     Contas criadas pelo botão "Criar conta" ficam salvas só no navegador onde foram criadas. */
  contas: [
    { nome: "Tiago Maia",     email: "tiago@techfire.com",   senha: "guardflame" },
    { nome: "Lucca Santos", email: "lucca@techfire.com",   senha: "guardflame" },
    { nome: "Melissa Fontes", email: "melissa@techfire.com", senha: "guardflame" }
  ],

  /* ---------- AO VIVO (CÂMERA) ----------
     O Raspberry Pi transmite a câmera para a Twitch (script raspberry/transmitir_twitch.sh)
     e o site mostra a transmissão. Veja o passo a passo na página Conexão > Câmera.
     tipo: "twitch"   -> canal da Twitch (coloque o nome em twitchCanal)
           "youtube"  -> live do YouTube
           "hls"      -> link .m3u8 (servidor próprio, MediaMTX, etc.)
           "mjpeg"    -> câmera do Raspberry Pi na mesma rede (mjpg-streamer / motion)
           "nenhum"   -> mostra o mapa de detecção simulado                       */
  aoVivo: {
    tipo: "twitch",
    twitchCanal: "lusketaxrc",        // nome do canal, ex.: "techfire_guardflame" (o que aparece em twitch.tv/NOME)
    twitchVideo: "",        // VOD (live gravada): número de twitch.tv/videos/NUMERO, ex.: "2271234567" — vazio = mostra o canal ao vivo
    youtubeId: "",          // ID do vídeo da live, ex.: "dQw4w9WgXcQ"
    youtubeCanal: "",       // OU o ID do canal (UC...), mostra a live atual do canal
    hlsUrl: "",             // ex.: "https://seu-servidor/drone/index.m3u8"
    mjpegUrl: ""            // ex.: "http://192.168.0.50:8080/?action=stream"
  },

  /* ---------- GPS ---------- (o site não usa banco de dados) */
  telemetria: "parado",     // "parado" = drone ligado (bateria 100%), parado no lugar do "mapa" (abaixo)
                            // "simulada" = simulação de voo

  /* ---------- JOGO ----------
     Vídeo da gameplay: arquivo MP4 na pasta videos/ OU "youtube" (ID do vídeo) */
  videoJogo:   { arquivo: "videos/jogo.mp4",   youtube: "" },
  linkJogo: "https://gd.games/guilhermemoraes/melissa-jogo",          // link para jogar (itch.io, GitHub Pages, etc.)

  /* ---------- EQUIPE ----------
     foto (opcional): imagem em equipe/fotos/ — sem foto mostra as iniciais */
  equipe: [
    { nome: "Tiago Maia",      funcao: "Programação e banco de dados", foto: "equipe/fotos/tiago.jpg" },
    { nome: "Lucca Santos",  funcao: "Hardware e montagem do drone", foto: "equipe/fotos/lucca.jpg" },
    { nome: "Melissa Fontes",  funcao: "Design e site", foto: "equipe/fotos/melissa.jpg" }
  ],
  sobre: "O TechFire GuardFlame é um Trabalho de Conclusão de Curso: um drone F450 com controladora Pixhawk, Raspberry Pi 4, câmera Arducam de 12 MP, GPS e internet 4G que detecta focos de incêndio florestal, transmite o voo ao vivo e avisa as pessoas da área por voz.",

  precoKit: "",   // vazio = soma automática dos componentes
  mapa: { lat: -23.6670237, lon: -46.7796974, local: "prédio do Fundamental II (UNASP SP)" }   // onde o drone fica parado (Colégio UNASP – Campus São Paulo)
};

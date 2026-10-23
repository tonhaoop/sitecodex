# Dr. Elimar Junior | Oftalmologista

Código completo da versão 6 do site, com HTML, CSS, JavaScript e imagens locais.
Versão de origem: 850c4efc887cee8542d46feee0a97b82f353b5f5.

## Abrir no VS Code

1. Extraia o arquivo ZIP.
2. No VS Code, vá em **Arquivo > Abrir Pasta** e selecione `dr-elimar-junior`.
3. Para visualizar, abra o arquivo `index.html` no seu navegador (por exemplo, dando dois cliques no Explorador de Arquivos).
4. Edite os arquivos no VS Code, salve e atualize a página no navegador.

Não precisa instalar Node.js, executar npm install ou fazer uma compilação.
Se já usa uma extensão de servidor local no VS Code, também pode visualizar por ela.
O mapa, as fontes do Google e os links externos precisam de internet. As imagens e o comparador estão incluídos na pasta.

## Arquivos principais

- `index.html`: textos, seções, links, mapa, informações de busca e compartilhamento.
- `styles.css`: cores, tamanhos, espaçamento e adaptação ao celular.
- `app.js`: menu móvel, links de contato e aviso de privacidade.
- `site-config.js`: configurações utilizadas pelo JavaScript para WhatsApp, rotas, CRM e RQE.
- `assets/`: retrato do médico, ícone e imagens anteriores.
- `robots.txt` e `sitemap.xml`: informações para mecanismos de busca.

Os arquivos de produção estão compactados em poucas linhas. O comando **Formatar Documento** do VS Code pode facilitar a edição de HTML e CSS.

## Recursos incluídos

- Identidade visual azul escuro e branco e retrato do Dr. Elimar Junior.
- Seção “O diferencial do Dr. Elimar Junior”, com destaque ao atendimento cuidadoso.
- Formação na PUC-Rio e na UERJ.
- Seção com exames oftalmológicos e procedimentos realizados pelo médico.
- Instagram e WhatsApp fixos.
- Endereço, mapa e rotas pelo Google Maps e Waze.
- Perguntas frequentes e aviso de privacidade.

O WhatsApp abre uma conversa com mensagem preparada; o site não envia a mensagem automaticamente nem confirma agendamentos.

## Alterar os dados do consultório

O telefone utilizado nos links dinâmicos fica em `site-config.js`, no formato `5521983410042`.
Para alterar o número por completo, atualize também os números visíveis, os links originais e os metadados em `index.html`.

Ao alterar o endereço, atualize `address` e `mapsQuery` em `site-config.js`, além do endereço visível, o `src` do iframe do mapa e os metadados em `index.html`.
O perfil do Instagram está nos links do `index.html`.

CRM e RQE estão vazios em `site-config.js`. Quando tiver os dados confirmados, preencha-os. O rodapé mostra “CRM / RQE a confirmar” enquanto isso.
Outras propriedades em `site-config.js`, como nome, horários e coordenadas, estão reservadas e não atualizam automaticamente todos os textos.

## Publicar em outra hospedagem

Esta pasta é um site estático. Envie seu conteúdo para a pasta pública da hospedagem, com `index.html` na raiz e a pasta `assets` ao lado.
Não há banco de dados, servidor de aplicação ou chave secreta necessária.

Antes de publicar em outro domínio, substitua o domínio atual em:

- `index.html`: URL canônica, Open Graph e dados estruturados JSON-LD.
- `robots.txt`: endereço do sitemap.
- `sitemap.xml`: endereço da página.

Domínio atual: https://dr-elimar-junior-oftalmologia.stonyrice9.chatgpt.site

As alterações nesta cópia local não alteram automaticamente o site publicado no Sites.

## Usar com GitHub

Você pode enviar o conteúdo desta pasta a um repositório seu no GitHub. Este pacote não contém um repositório Git, credenciais ou vínculo de publicação automática.

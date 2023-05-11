// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", function () {

  // Obtém o botão "limpar-cache" do popup.html e adiciona um evento de clique
  document.getElementById("limpar-cache").addEventListener("click", function () {

    // Remove todos os dados de navegação, começando a partir de 0 segundos atrás
    chrome.browsingData.remove({
      "since": 0
    }, {
      // Define as opções de dados a serem removidos
      "appcache": true, // Remove os dados do aplicativo cache
      "cache": true, // Remove os dados de cache
      "cacheStorage": true, // Remove os dados de armazenamento de cache
      "cookies": false, // Remove os cookies do navegador
      "downloads": true, // Remove os dados de downloads
      "fileSystems": true, // Remove os dados dos sistemas de arquivos
      "formData": true, // Remove os dados de formulário
      "history": true, // Remove o histórico de navegação
      "indexedDB": true, // Remove os dados do IndexedDB
      "localStorage": true, // Remove os dados do localStorage
      "pluginData": true, // Remove os dados de plugins
      "passwords": false, // Remove as senhas salvas pelo navegador
      "serviceWorkers": true, // Remove os dados dos service workers
      "webSQL": true // Remove os dados do WebSQL

    }, function () {
      // Exibe uma mensagem no console quando a limpeza da cache for concluída com sucesso
      console.log("Cache limpo com sucesso!");
    });
  });
});
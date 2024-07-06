
    async function getLocationAndTimeZone() {
      const apiKey = 'e325ec553a714142805ad9e7c0270f97'; // Substitua pela sua chave de API
      const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erro na resposta da rede: ' + response.statusText);
        }
        const data = await response.json();

         // Obter a data e hora atual no fuso horário do usuário
      const now = new Date().toLocaleString("pt-BR", { timeZone: data.time_zone.name });
      const [date, time] = now.split(' ');
      document.getElementById('data').textContent = `${date}`;
      document.getElementById('hora').textContent = `${time}`;

      // Atualiza o HTML com as informações de localização e fuso horário
      document.getElementById('local').textContent = `${data.city}, ${data.country_name}`;
      document.getElementById('fuso').textContent = `${data.time_zone.name}`;
      
      } catch (error) {
        console.error("Erro ao obter a localização e o fuso horário:", error);
      }
    }

    getLocationAndTimeZone();




   

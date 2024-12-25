fetch("audio.json")
          .then((response) => response.json())
          .then((data) => {
            const audio = document.getElementById("audio");
            const cover = document.getElementById("cover");
            const title = document.getElementById("title");
            const artist = document.getElementById("artist");
            let currentTrack = 0;

            function loadTrack(index) {
              const track = data[index];
              audio.src = track.src;
              cover.src = track.cover;
              title.textContent = track.title;
              artist.textContent = track.artist;
              currentTrack = index;
            }

            audio.addEventListener("ended", () => {
              if (currentTrack < data.length - 1) {
                loadTrack(currentTrack + 1);
              }
            });

            loadTrack(0); // Загрузить первый трек по умолчанию
          });
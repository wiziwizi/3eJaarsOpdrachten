var jeMoederDive = document.getElementById("Dive");
        
        fetch("highscores.json")
            .then(response => response.json())
            .then(data => jeMoederDive.innerHTML += JSON.stringify(data));
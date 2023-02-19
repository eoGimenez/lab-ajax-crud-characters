const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", () => {
    charactersAPI.getFullList().then((allChars) => {
      const parDiv = document.querySelector(".characters-container");
      const hideDiv = document.getElementById("character-info-to-hide");
      allChars.forEach((char) => {
        let character = document.createElement("div");
        character.className = "character-info";

        let divName = document.createElement("div");
        divName.classList.add("name");
        divName.innerHTML = `Name: ${char.name}`;
        character.appendChild(divName);

        let divOccu = document.createElement("div");
        divOccu.classList.add("occupation");
        divOccu.innerHTML = `Occupation: ${char.occupation}`;
        character.appendChild(divOccu);

        let divWeapon = document.createElement("div");
        divWeapon.classList.add("weapon");
        divWeapon.innerHTML = `Weapon: ${char.weapon}`;
        character.appendChild(divWeapon);

        let divCar = document.createElement("div");
        divCar.classList.add("cartoon");
        divCar.innerHTML = `Cartoon: ${char.cartoon}`;
        character.appendChild(divCar);

        parDiv.appendChild(character);
      });
      hideDiv.style.display = "none";
    })
    .catch(err => (err))
  });

  document.getElementById("fetch-one").addEventListener("click", () => {
    const id = document.getElementsByName('character-id')
    charactersAPI.getOneRegister(id[0].value)
    .then((char) => {
      const parDiv = document.querySelector(".characters-container");
      const hideDiv = document.getElementById("character-info-to-hide");
      
      let chart = document.createElement("div");
      chart.className = "character-info";

      let divName = document.createElement("div");
      divName.classList.add("name");
      divName.innerHTML = `Name: ${char.name}`;
      chart.appendChild(divName);

      let divOccu = document.createElement("div");
      divOccu.classList.add("occupation");
      divOccu.innerHTML = `Occupation: ${char.occupation}`;
      chart.appendChild(divOccu);

      let divCar = document.createElement("div");
      divCar.classList.add("cartoon");
      divCar.innerHTML = `Cartoon: ${char.cartoon}`;
      chart.appendChild(divCar);

      let divWeapon = document.createElement("div");
      divWeapon.classList.add("weapon");
      divWeapon.innerHTML = `Weapon: ${char.weapon}`;
      chart.appendChild(divWeapon);


      parDiv.appendChild(chart);

      hideDiv.style.display = "none";
    })
    .catch(err => (err))
  });

  document
    .getElementById("delete-one").addEventListener("click", () => {
      const id = document.getElementsByName('character-id-delete')
      const hideDiv = document.getElementById("character-info-to-hide");
      console.log(id[0].value)
      //let idDos = 2;
      charactersAPI.deleteOneRegister(id[0].value).then((char) => {
        console.log(char)
        const parDiv = document.querySelector(".characters-container");
        const menssage = document.createElement('h2');
        menssage.innerHTML = "El personaje ha sido eliminado!"

        parDiv.appendChild(menssage)
        hideDiv.style.display = "none";
    })
    .catch(err => (err))
  })

  document
    .getElementById("edit-character-form").addEventListener("submit", () => {
      event.preventDefault()
      const hideDiv = document.getElementById("character-info-to-hide");
      const id = document.getElementsByName('chr-id')[0].value;
      const name = document.getElementsByName('name')[1].value;
      const occu = document.getElementsByName('occupation')[1].value;
      const weapon = document.getElementsByName('weapon')[1].value;
      const cartoon = document.getElementsByName('cartoon')[1].checked;
      charactersAPI.updateOneRegister(id, { name, occu, cartoon, weapon })
      .then(result => {
        console.log(result)
      })
      .catch(err => (err))
    });

  document
    .getElementById("new-character-form").addEventListener("submit", () => {
      event.preventDefault()
      const hideDiv = document.getElementById("character-info-to-hide");
      const name = document.getElementsByName('name')[0].value;
      const occu = document.getElementsByName('occupation')[0].value;
      const weapon = document.getElementsByName('weapon')[0].value;
      const cartoon = document.getElementsByName('cartoon')[0].checked;

      charactersAPI.createOneRegister({name, occu, cartoon, weapon})
      .then(result => {
        let button = document.getElementById('send-data')
        button.style.backgroundColor = "green"
        hideDiv.style.display = "none"; 
      })
      .catch(err => (err))
    });
});

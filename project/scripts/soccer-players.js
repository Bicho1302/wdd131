// Dynamic Player Information Toggle for Top Players
const topPlayers = [
    {
      name: "Lionel Messi",
      number: 10,
      age: 36,
      position: "Forward",
      country: "Argentina",
      image:"https://img1.rapidleaks.com/2017/07/Lionel-Messi.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      number: 7,
      age: 38,
      position: "Forward",
      country:"Portugal",
      image:"https://s.hdnux.com/photos/67/61/75/14622561/3/rawImage.jpg",
    },
    {
      name: "Robert Lewandowski",
      number: 9,
      age: 35,
      position: "Striker",
      country:"Poland",
      image:"https://cdn.vox-cdn.com/thumbor/TVmcviC_1j7HBlpu9_0PxtLSssg=/0x0:4373x2915/1200x800/filters:focal(1838x1109:2536x1807)/cdn.vox-cdn.com/uploads/chorus_image/image/72572907/1630119591.0.jpg",
    },
    {
      name: "Neymar Jr.",
      number: 10,
      age: 31,
      position: "Forward",
      country:"Brasil",
      image: "https://th.bing.com/th/id/OIP.4bhBcXuGtDCWmkV2HL87yAHaE6?rs=1&pid=ImgDetMain",
    },
    {
      name: "Marc-André ter Stegen",
      number: 1,
      age: 31,
      position: "Goalkeeper",
      country:"Germany",
      image:"https://th.bing.com/th/id/R.91b440a2bf8827aa65fdac224455df1f?rik=aSKOT8nQ0%2f7rYA&riu=http%3a%2f%2fimages.performgroup.com%2fdi%2flibrary%2fgoal_es%2f91%2f52%2fmarc-andre-ter-stegen-barcelona-celtic-champions-league_ynf0qegz4bws1qbie4urx7glo.jpg%3ft%3d621339143&ehk=uIYfptHXVTA6jagUqd9G784p8yqyy7OKq5pOZfQYCtE%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  
  // Function to render player information dynamically
  function renderTopPlayer(index) {
    const playerInfo = document.getElementById("player-info");
    const player = topPlayers[index];
    playerInfo.innerHTML = `
      <h2>${player.name}</h2>
      <p><strong>Number:</strong> ${player.number}</p>
      <p><strong>Age:</strong> ${player.age}</p>
      <p><strong>Position:</strong> ${player.position}</p>
      <p><strong>Country:</strong> ${player.country}</p>
       <img src="${player.image}" alt="${player.name}" loading="lazy">
    `;
  }
  
  // Add event listeners to toggle buttons
  document.querySelectorAll(".player-toggle").forEach((button, index) => {
    button.addEventListener("click", () => renderTopPlayer(index));
  });
  document.querySelectorAll(".responsive-image").forEach((img) => {
    img.style.width = "100%"; // Ensure full width in container
    img.style.height = "auto"; // Maintain aspect ratio
});
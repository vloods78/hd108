    (function() {
      // Fungsi untuk membuat username acak dengan sensor karakter
      const generateRandomUsername = () => {
        const usernames = [
"ArgaBlaze41","BramStorm27","CahyaPulse19","DamarStrike52","ElvanRider34",
"FarisNova63","GerryFlash18","HadiVolt72","IlhamTurbo29","JefriBlaze84",
"KamalSpark36","LutfiBlitz57","MadanRocket91","NandoDash44","OkiThunder68",
"PanduFlare73","QinanStorm25","RafliJet39","SenoRush47","TegarFlash66",
"UbaySpark21","VickyDash59","WahyuVolt33","XaviBlitz80","YandiFlare14",
"ZidanRush96","ArmanTurbo23","BimoNova61","CandraJet48","DaffaStorm37",
"EkaBlaze55","FikriFlash92","GunturDash18","HafizVolt71","IrfanSpark29",
"JayaBlitz63","KurniaRush40","LuthfiTurbo88","MahenFlare17","NaufalJet76",
"OzanDash24","PrasNova52","QoriBlaze67","RandiStorm35","SakaFlash94",
"TaufanVolt16","UdinSpark72","VanoRush41","WiraBlitz27","XanderJet65",
"YogiTurbo33","ZakyFlare82","AqilDash49","BagasNova73","CikoStorm26",
"DeniBlaze91","ErwinFlash32","FarelVolt64","GilangSpark58","HarisRush20",
"IqbalBlitz79","JohanJet34","KikiTurbo47","LandoFlare83","MikoDash62",
"NikoNova28","OmarStorm56","PutraBlaze74","QilasFlash39","RizalVolt95",
"SandySpark14","TitoRush88","UmarBlitz22","VegaJet70","WendiTurbo31",
"XenoFlare46","YusufDash67","ZahirNova53","ArdiStorm19","BastianBlaze84",
"CesarFlash25","DikaVolt61","ErisSpark72","FahriRush30","GavinBlitz44",
"HugoJet57","IzanTurbo98","JaredFlare21","KevinDash65","LeoNova36",
"MarcoStorm49","NabilBlaze90","OscarFlash38","PieroVolt73","QuintSpark54",
"RenoRush27","SultanBlitz81","TariqJet69","UlfaTurbo42","VanoFlare93",
"WiraDash18","XavierNova77","YudaStorm35","ZenoBlaze60","ArvinFlash26",
"BrenoVolt84","CavinSpark48","DarioRush71","ElricBlitz55","FredoJet39",
"GarryTurbo62","HectorFlare29","IvanDash94","JasperNova41","KairoStorm76",
"LorenBlaze53","MasonFlash37","NeroVolt88","OrionSpark22","PavelRush64",
"QuinnBlitz30","RyderJet47","SorenTurbo85","TalonFlare19","UlricDash58",
"VitorNova73","WaldoStorm34","XyloBlaze91","YarenFlash25","ZivenVolt67",
"ArlonSpark42","BaxterRush59","CyrusBlitz74","DionJet21","EamonTurbo63"
];

        const randomIndex = Math.floor(Math.random() * usernames.length);
        let randomUsername = usernames[randomIndex];

        // Sensor username
        const randomLength = Math.floor(Math.random() * 4) + 3;
        const startIdx = Math.floor(Math.random() * (randomUsername.length - randomLength));

        randomUsername = randomUsername.split('');
        for (let i = startIdx; i < startIdx + randomLength; i++) {
          randomUsername[i] = '*';
        }

        return randomUsername.join('');
      };

      // Fungsi untuk membuat jumlah uang acak
      const generateRandomAmount = (min, max) => {
        const step = 30000;
        return min + Math.floor(Math.random() * ((max - min) / step)) * step;
      };

      // Fungsi untuk membuat tabel
      const createTable = (label, tableId, amountRange) => {
        const targetElement = document.querySelector('.w-100.img-3d');
        if (!targetElement) return;

       // Container
const container = document.createElement("div");
container.className = "table-container";
container.style.margin = "10px";
container.style.overflow = "hidden";
container.style.border = "1px solid #ff7a00"; // orange theme
container.style.borderRadius = "12px";
container.style.background = "linear-gradient(180deg,#cc0000,#8b0000,#520000)"; // merah Ducati
container.style.color = "#fff";
container.style.boxShadow = `
    0 6px 20px rgba(0,0,0,0.5),
    0 0 10px rgba(255,122,0,0.4)
`;
container.style.position = "relative";

       // Label
const tableLabel = document.createElement("h4");
tableLabel.textContent = label;
tableLabel.style.textAlign = "center";
tableLabel.style.padding = "10px 15px";
tableLabel.style.background = "linear-gradient(180deg,#ff9a2f,#ff6a00)"; // orange Repsol
tableLabel.style.color = "#ffffff";
tableLabel.style.margin = "0";
tableLabel.style.fontSize = "16px";
tableLabel.style.fontWeight = "bold";
tableLabel.style.letterSpacing = "1px";
tableLabel.style.textTransform = "uppercase";
tableLabel.style.textShadow = "0 2px 4px rgba(0,0,0,0.5)";
tableLabel.style.borderTopLeftRadius = "12px";
tableLabel.style.borderTopRightRadius = "12px";
container.appendChild(tableLabel);

        // Table
        const table = document.createElement("table");
        table.id = tableId;
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";
        table.style.color = "#fff";

        // Header
        const headerRow = document.createElement("tr");
        headerRow.style.background = "linear-gradient(#ffffff, #a5a5a5)";
		headerRow.style.color = "#0f0f0f";

        const usernameHeader = document.createElement("th");
        usernameHeader.textContent = "Username";
        usernameHeader.style.padding = "10px";
        usernameHeader.style.textAlign = "left";

        const amountHeader = document.createElement("th");
        amountHeader.textContent = "Jumlah";
        amountHeader.style.padding = "10px";
        amountHeader.style.textAlign = "right";

        headerRow.appendChild(usernameHeader);
        headerRow.appendChild(amountHeader);
        table.appendChild(headerRow);

        // Tambahkan ke container
        container.appendChild(table);

        // Sisipkan ke halaman
        targetElement.parentNode.insertBefore(container, targetElement.nextSibling);

        // Isi awal
for (let i = 0; i < 5; i++) {

  const row = document.createElement("tr");
  row.style.borderBottom = "1px solid #ff7a00"; // orange theme
  row.style.background = "linear-gradient(90deg,#b80000,#8b0000)";
  row.style.animation = `move-up 0.8s ease-out ${i * 0.1}s`;

  const usernameCell = document.createElement("td");
  usernameCell.textContent = generateRandomUsername();
  usernameCell.style.padding = "10px";
  usernameCell.style.fontSize = "14px";
  usernameCell.style.color = "#ffffff";

  const amountCell = document.createElement("td");
  amountCell.textContent = "Rp. " + generateRandomAmount(amountRange.min, amountRange.max).toLocaleString("id-ID");
  amountCell.style.padding = "10px";
  amountCell.style.fontSize = "14px";
  amountCell.style.textAlign = "right";
  amountCell.style.color = "#ffb347"; // orange biar standout

  row.appendChild(usernameCell);
  row.appendChild(amountCell);
  table.appendChild(row);
}

        // Data periodik
        setInterval(() => {
          const row = document.createElement("tr");
          row.style.borderBottom = "1px solid #ff7a00";
          row.style.background = "#E24506";
          row.style.animation = "move-up 1s ease-out";

          const usernameCell = document.createElement("td");
          usernameCell.textContent = generateRandomUsername();
          usernameCell.style.padding = "10px";
          usernameCell.style.fontSize = "14px";

          const amountCell = document.createElement("td");
          amountCell.textContent = "Rp. " + generateRandomAmount(amountRange.min, amountRange.max).toLocaleString("id-ID");
          amountCell.style.padding = "10px";
          amountCell.style.fontSize = "14px";
          amountCell.style.textAlign = "right";

          row.appendChild(usernameCell);
          row.appendChild(amountCell);
          table.appendChild(row);

          if (table.children.length > 6) {
            table.removeChild(table.children[1]);
          }
        }, 1500);
      };

      // Tambahkan animasi & hover
      const addAnimationStyle = () => {
        const style = document.createElement("style");
        style.textContent = `
                @keyframes move-up {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .table-container table tr {
                    transition: background-color 0.3s;
                }

                .table-container table tr:nth-child(even) {
                    background-color: #E24506;
                }

                .table-container table tr:hover {
                    background-color: linear-gradient(#ffffff, #a5a5a5) !important;
					color: #0f0f0f;
                }

                th {
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            `;
        document.head.appendChild(style);
      };

      // Jalankan
      document.addEventListener("DOMContentLoaded", () => {
        addAnimationStyle();
        createTable("DEPOSIT MEMBER HD108 PER DETIK INI", "last-deposit-table", {
          min: 50000,
          max: 1000000
        });
        createTable("WITHDRAW MEMBER HD108 PER DETIK INI", "last-withdraw-table", {
          min: 1000000,
          max: 50000000
        });
      });
    })();

    (function() {
      // Fungsi untuk membuat username acak dengan sensor karakter
      const generateRandomUsername = () => {
        const usernames = [
          "Ani123", "AndiPro7", "AntoCool88", "Anisa98", "Anwar77", "BudiHero1", "SitiStar3", "EkoFun9", "Fitri99", "RinaX5",
          "DeniMaster4", "GitaLove22", "HendraCool11", "IqbalX99", "JokoFighter6", "LinaPower88", "MiraSuper10", "RudyPro15", "SandiX7", "ToniFly77",
          "UmiSmart12", "VinaGamer21", "WawanSpeed2", "YuniCharming88", "ZahraQueen6", "AdiFast18", "BeniCool99", "CiciGlow20", "DitaRacer10", "EvanXtreme11",
          "FauziMagic23", "GilangAce8", "HaniHeart5", "IndraWarrior88", "JoniSpeedy4", "KikiMega1", "LukasFast19", "MayaBright33", "NinaPro77", "OscarVibe3",
          "PutriX56", "QoriX32", "RoniBlade14", "SitiCharming90", "TaufikStrong11", "UjangFighter7", "VinaPro16", "WiraChampion29", "YuniStar8", "ZakiHero1",
          "AlifSpeed21", "BonaRider3", "CitraJoy4", "DikaSmart12", "EllaGamer9", "FajarCool56", "GandaPower10", "HaryLegend8", "IndraAce15", "JasmineStar20",
          "KarelKing7", "LiaGlory33", "MikoFly9", "NoviElite14", "OlgaBright11", "PanduChampion5", "QismahStar3", "RikaGamer21", "SatriaWarrior7", "TinaMax11",
          "UmarAce16", "ViviPower22", "WiraPro18", "XenaSpeed10", "YusufTough12", "ZaraMighty9", "AdiForce30", "BeniPower7", "CitaSpeed3", "DudiSmart25",
          "ElsaHero11", "FitriMax4", "GinaCool6", "HendraX8", "IrmaShine21", "JunaidPro33", "KrisnaRider22", "LailaAce9", "MayaTough15", "NikoVibe30",
          "OmarFighter2", "PiaPro19", "QilaX25", "RizkyPower14", "SandyHero10", "TomiCharming7", "UmiFast17", "VeraSpeed21", "WindaGlow3", "XioRacer5",
          "YuliaMega12", "ZainSmart6", "AldiMaster14", "BimaX3", "CeliaStar22", "DianPro1", "EviCool8", "FarhanGamer17", "GitaBright2", "HanaPower25"
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
        const step = 50000;
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
        container.style.border = "1px solid #ffbb00";
        container.style.borderRadius = "10px";
        container.style.background = "linear-gradient(#c80000 , #960000, #640000)";
        container.style.color = "#fff";
        container.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
        container.style.position = "relative";

        // Label
        const tableLabel = document.createElement("h4");
        tableLabel.textContent = label;
        tableLabel.style.textAlign = "center";
        tableLabel.style.padding = "10px 15px";
        tableLabel.style.background = "linear-gradient(#c80000 , #960000, #640000)";
        tableLabel.style.color = "#fff";
        tableLabel.style.margin = "0";
        tableLabel.style.fontSize = "16px";
        tableLabel.style.fontWeight = "bold";
        tableLabel.style.borderTopLeftRadius = "10px";
        tableLabel.style.borderTopRightRadius = "10px";
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
          row.style.borderBottom = "1px solid #ffbb00";
          row.style.background = "#e81717";
          row.style.animation = `move-up 1s ease-out ${i * 0.1}s`;

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
        }

        // Data periodik
        setInterval(() => {
          const row = document.createElement("tr");
          row.style.borderBottom = "1px solid #ffbb00";
          row.style.background = "#e81717";
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
                    background-color: #d60000;
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
        createTable("DEPOSIT TERBARU HARI INI", "last-deposit-table", {
          min: 50000,
          max: 1000000
        });
        createTable("WITHDRAW TERBARU HARI INI", "last-withdraw-table", {
          min: 1000000,
          max: 50000000
        });
      });
    })();

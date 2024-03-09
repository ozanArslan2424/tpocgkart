
// ANIMATION
let intro = document.querySelector(".intro");
let logoFrames = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoFrames.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("active");
      }, (index + +1) * 400);
    });

    setTimeout(() => {
      intro.style.top = "-100vh";
      // intro.style.opacity = "0"
    }, 2600);

    setTimeout(() => {
      intro.style.display = "none";
    }, 4000);
  });
});
// DISCOUNTS
var places = [
  {
    image: "images/brands/tunelvegan.png",
    name: "Tünel Vegan Pub",
    description: "%20 İndirim!",
    address: "Konur Sk. 59/4 Çankaya/Ankara",
  },
  {
    image: "images/brands/vegery.png",
    name: "The Vegery",
    description: "%25 indirim!",
    address: "Yaylagül Sk. 8/F Çankaya/Ankara",
  },
  {
    image: "images/brands/patapub.png",
    name: "Pata Pub",
    description: "%10 indirim!",
    address: "Konur Sk. 11/5 Çankaya/Ankara",
  },
  {
    image: "images/brands/teksos.png",
    name: "Teksos Döner",
    description: "%15 indirim!",
    address: "Azerbaycan Cd. 76/A Çankaya/Ankara",
  },
  {
    image: "images/brands/rippub.png",
    name: "R.I.P Pub",
    description: "%20 indirim!",
    address: "Konur Sk. 11/A Çankaya/Ankara",
  },
  {
    image: "images/brands/tattoomplace.jpg",
    name: "Tattoomplace",
    description: "%50 indirim!",
    address: "Piriçavuş Sk. 24/A Kadıköy/İstanbul",
  },
  {
    image: "images/brands/latino.png",
    name: "Latino Dans Akademisi",
    description: "%15 indirim!",
    address: "Tunus Cd. 50/6 Çankaya/Ankara",
  },
  {
    image: " ",
    name: "Özge Ceren Balıkçıoğlu",
    description: "%10 indirim!",
    address: "Online",
  },
  {
    image: "images/brands/donerci.png",
    name: "Dönerci Ertan",
    description: "Nakit %25, Kart %15 indirim!",
    address: "Zeki Müren Cd. 50/6 Çankaya/Ankara",
  },
  {
    image: " ",
    name: "Çerez Lokali",
    description: "%15 indirim!",
    address: "",
  },
  {
    image: " ",
    name: "Koala Kuşadası",
    description: "%15 indirim!",
    address: "Kadınlar Denizi Cd. 75 Kuşadası/Aydın",
  },
  {
    image: "images/brands/nctkuafor.png",
    name: "NCT Güzellik Salonu",
    description: "%40 indirim!",
    address: "Atakent Çarşı 30 Etimesgut/Ankara",
  },
  {
    image: "images/brands/more.png",
    name: "Daha fazlası Mümkün!",
    description: " ",
    address: "",
  },
  // Add more places as needed
];

// Function to generate the HTML for each place
function generatePlaceHTML(place) {
  return `
    <div class="brand glass">
      <img class="brand-img" src="${place.image}" alt="${place.name}" />
      <div>
      <h3 class="brand-name">${place.name}</h3>
      <p class="brand-discount">${place.description}
      <br>
      <span class="brand-address">${place.address}</span>
      </p>
      
      </div>
    </div>
  `;
}

// Function to update the places container with the generated HTML
function updatePlacesContainer() {
  var placesContainer = document.getElementById("brandList");
  var placesHTML = places.map(generatePlaceHTML).join("");
  placesContainer.innerHTML = placesHTML;
}

// Call the updatePlacesContainer function to initially populate the places
updatePlacesContainer();

// CARD ACCOUNTS

const valueMap = {
  "Mehmet Birbiçer": ["0001", "Yönetim Kurulu"],
  "Alihaydar Yılmaz": ["0002", "Yönetim Kurulu"],
  "Eren Keskiner": ["0003", "Yönetim Kurulu"],
  "Göktuğ Akşahin": ["0004", "Yönetim Kurulu"],
  "Hüseyin Acar": ["0005", "Yönetim Kurulu"],
  "İremnaz Turan": ["0006", "Yönetim Kurulu"],
  "Neslişah Kahraman": ["0007", "Yönetim Kurulu"],
  "Ozan Ulusu": ["0008", "Yönetim Kurulu"],
  "Funda Karakullukçu": ["0009", "Denetim Kurulu"],
  "Ali Uğur Danışan": ["0010", "Denetim Kurulu"],
  "Şeydanur Kılıç": ["0011", "Denetim Kurulu"],
  "Furkan Tunçel": ["0012", "Yerel Proje Geliştirme Ekibi"],
  "Fatmanur Topal": ["0013", "Yerel Proje Geliştirme Ekibi"],
  "Melike Eyüpoğlu": ["0014", "Yerel Proje Geliştirme Ekibi"],
  "Elif Özdemir": ["0015", "Yerel Proje Geliştirme Ekibi"],
  "Sergen Sırmacı": ["0016", "Ulusal Proje Geliştirme Ekibi"],
  "Fatmanur Çiftci": ["0017", "Ulusal Proje Geliştirme Ekibi"],
  "Ahmet Sefa Konuş": ["0018", "Ulusal Proje Geliştirme Ekibi"],
  "Nehir Ersoy": ["0019", "Ulusal Proje Geliştirme Ekibi"],
  "Efe Ozan Karaçam": ["0020", "Uluslararası Proje Geliştirme Ekibi"],
  "İlayda Katal": ["0021", "Uluslararası Proje Geliştirme Ekibi"],
  "Ayşenur Meletlioğlu": ["0022", "Uluslararası Proje Geliştirme Ekibi"],
  "Nurefşan Güven": ["0023", "Uluslararası Proje Geliştirme Ekibi"],
  "Ayhan Arın Mızrak": ["0024", "EFPSA Türkiye Ekibi"],
  "Haticenur Canoğlu": ["0025", "EFPSA Türkiye Ekibi"],
  "Verda Berfe Genel": ["0026", "EFPSA Türkiye Ekibi"],
  "Başak Arslan": ["0027", "Eğitim Ofisi Sorumlusu"],
  "Kaan Kablan": ["0028", "Eğitim Ofisi İç İşler Sorumlusu"],
  "Kardelen Avcı": ["0029", "Eğitim Ofisi Dış İşler Sorumlusu"],
  "Sultan Koç": ["0030", "TYK (Yerel Yapılanma Koordinasyon Ekibi)"],
  "Begüm Yürekli": ["0031", "TYK (Yerel Yapılanma Koordinasyon Ekibi)"],
  "Simge Şahin": ["0032", "TYK (Yerel Yapılanma Koordinasyon Ekibi)"],
  "Şimal Aleyna Hız": ["0033", "TYK (Yerel Yapılanma Koordinasyon Ekibi)"],
  "Ayça Gündüz": ["0034", "TYK (Temsilci Koordinasyon Ekibi)"],
  "Zeren Beyza Çevik": ["0035", "TYK (Temsilci Koordinasyon Ekibi)"],
  "Kardelen Doğan": ["0036", "TYK (Temsilci Koordinasyon Ekibi)"],
  "Mücahit Aslıyüce": ["0037", "TYK (Temsilci Koordinasyon Ekibi)"],
  "Gizem Nur Tekin": ["0038", "AR-GE Ekibi"],
  "Behiçe Yararlı": ["0039", "AR-GE Ekibi"],
  "Seray Sarısu": ["0040", "AR-GE Ekibi"],
  "Ebru İrem Şahin": ["0041", "AR-GE Ekibi"],
  "Beril Özdemir": ["0042", "AR-GE Ekibi"],
  "Merve Yaşar ": ["0043", "İç İşler Koordinasyon Ekibi"],
  "Burak Özçandır": ["0044", "İç İşler Koordinasyon Ekibi"],
  "Sena Zehra Parçal ": ["0045", "İç İşler Koordinasyon Ekibi"],
  "Mehmet Zahit Çakmak": ["0046", "İç İşler Koordinasyon Ekibi"],
  "Eda Uran": ["0047", "İç İşler Koordinasyon Ekibi"],
  "Zeynep Şahin": ["0048", "Staj Platformu Ekibi"],
  "Zeynep Kibar": ["0049", "Staj Platformu Ekibi"],
  "Derin Akman": ["0050", "Staj Platformu Ekibi"],
  "Eslem Küçükdaban": ["0051", "Staj Platformu Ekibi"],
  "Ozan Yıldırım": ["0052", "Organizasyon Ekibi"],
  "Tuğba BESİM": ["0053", "Organizasyon Ekibi"],
  "Emir Baghaki ": ["0054", "Organizasyon Ekibi"],
  "Şebnem Buse Sezer": ["0055", "Organizasyon Ekibi"],
  "Öykü Yanmaz": ["0056", "Organizasyon Ekibi"],
  "Aslı Gül Çifçi": ["0057", "Organizasyon Ekibi"],
  "Berkay Çınar": ["0058", "TPÖÇG Store Ekibi"],
  "Ceylin Koçoğlu ": ["0059", "TPÖÇG Store Ekibi"],
  "Erencan Sevimli ": ["0060", "TPÖÇG Store Ekibi"],
  "Faraz Panahimilani ": ["0061", "TPÖÇG Store Ekibi"],
  "Kübra morkoç ": ["0062", "TPÖÇG Store Ekibi"],
  "Selin Savaş ": ["0063", "TPÖÇG Store Ekibi"],
  "Seyfi Ali Akyar": ["0064", "TPÖÇG Store Ekibi"],
  "Şevval Zeynep Yaşar": ["0065", "TPÖÇG Store Ekibi"],
  "Zeynep Işığıbol ": ["0066", "Sponsorluk Ekibi"],
  "Derya Salaman": ["0067", "Sponsorluk Ekibi"],
  "Dilge Karakaşoğlu": ["0068", "Sponsorluk Ekibi"],
  "Zeynep Köksoy ": ["0069", "Sponsorluk Ekibi"],
  "Tuğba Besim": ["0070", "Sponsorluk Ekibi"],
  "Ozan Arslan": ["0071", "TPÖÇG Store Tasarım Ekibi"],
  "Melek Daşdemir": ["0072", "TPÖÇG Store Tasarım Ekibi"],
  "Özge Vural ": ["0073", "TPÖÇG Store Tasarım Ekibi"],
  "Emir Yağız Katar ": ["0074", "TPÖÇG Store Tasarım Ekibi"],
  "Tutku Şahin": ["0075", "Görsel Tasarım Ekibi"],
  "Ömürcan Irmak": ["0076", "Video Tasarım Ekibi"],
  "Irmak Su Öztürk": ["0077", "Video Tasarım Ekibi"],
  "Zeynep Akdaş": ["0078", "Video Tasarım Ekibi"],
  "Doruk Poyra": ["0079", "Web Sitesi Ekibi"],
  "Esra Görler": ["0080", "Web Sitesi Ekibi"],
  "Rümeysa Akbulut": ["0081", "Web Sitesi Ekibi"],
  "Merve Uluhan": ["0082", "İçerik Ekibi"],
  "Merve Aydın": ["0083", "İçerik Ekibi"],
  "Öykü Arda": ["0084", "İçerik Ekibi"],
  "İrem Sultan Sade": ["0085", "İçerik Ekibi"],
  "Tutku Şahin": ["0086", "Görsel Tasarım Ekibi"],
  "Asre Ceren Koca": ["0087", "Görsel Tasarım Ekibi"],
  "Onur Yılmaz Güney": ["0088", "Görsel Tasarım Ekibi"],
  "Sude Özdemir": ["0089", "Görsel Tasarım Ekibi"],
  "Didem Yavuz": ["0090", "Gsm Ekibi"],
  "Sude Yılmaz": ["0091", "Gsm Ekibi"],
  "Helin Çaçan": ["0092", "Gsm Ekibi"],
  "İrem Kurucuoğlu": ["0093", "Gsm Ekibi"],
  "Sude Naz Yılmaz": ["0094", "Gsm Ekibi"],
  "Türcan Şaklak": ["0095", "Gsm Ekibi"],
  "Dilara Damla Özgür": ["0096", "PHİK Koordinasyon Ekibi"],
  "Yağmur Ayber": ["0097", "PHİK Koordinasyon Ekibi"],
  "Büşranur Portakal": ["0098", "PHİK Koordinasyon Ekibi"],
  "Elif Sıla Kaplan": ["0099", "Görsel Tasarım Ekibi"],
  "Ayşe İrem Uzuner": ["0100", "Görsel Tasarım Ekibi"],
  "Aytunç Kağan Yiğit": ["0101", "Yayın Ekibi"],
  "Buse Suna Özcan": ["0102", "Yayın Ekibi"],
  "Ayşe Irmak Şen": ["0103", "Yayın Ekibi"],
  "Taha Toker": ["0104", "Yayın Ekibi"],
  "Doğa Beray Bayülgen": ["0105", "Yayın Ekibi"],
  "Azra Güzeler": ["0106", "Yayın Ekibi"],
  "Alara Menemenlioğlu": ["0107", "Yayın Ekibi"],
  "Irmak Akbaş": ["0108", "Yayın Ekibi"],
  "Beyza Küçük": ["0109", "Yayın Ekibi"],
  "Gizemnur Küskün": ["0110", "Yayın Ekibi"],
  "Kübra Dağlı": ["0111", "Yayın Ekibi"],
  "Üzeyir Batuhan Günay": ["0112", "Yayın Ekibi"],
  "Can Balkan": ["0113", "Yayın Ekibi"],
  "Ece Çayan": ["0114", "Yayın Ekibi"],
  "Rumeysa Soyöz": ["0115", "Blog Ekibi"],
  "Duygu Akkuş ": ["0116", "Blog Ekibi"],
  "Doruk Poyra": ["0117", "Blog Ekibi"],
  "Hazal Ezgi Yurdagül ": ["0118", "Blog Ekibi"],
  "Aysima Nesrin Şahin": ["0119", "Blog Ekibi"],
  "Zeynep Güzeltepe": ["0120", "Blog Ekibi"],
  "Samet Can Avcu": ["0121", "Blog Ekibi"],
  "Aleyna Korkmazyürek ": ["0122", "Blog Ekibi"],
  "Arzu Şahin": ["0123", "Blog Ekibi"],
  "Emin Özbayrak ": ["0124", "Blog Ekibi"],
  "Nazlı Ceren Kanbir": ["0125", "Bülten Editörü"],
  "Şevval Bilki": ["0127", "Çeviri Ekibi"],
  "Senanur Akburak": ["0128", "Çeviri Ekibi"],
  "Duru Demirkan": ["0129", "Çeviri Ekibi"],
  "Sena Nur Öztep": ["0131", "Çeviri Ekibi"],
  "Elif Nur Taş": ["0132", "Yayın Tasarım Ekibi"],
  "Sümeyye Karadoğan": ["0133", "Yayın Tasarım Ekibi"],
  "Barkın Arslan": ["0134", "Yayın Tasarım Ekibi"],
  "Zeynep Yener": ["0135", "Yayın Tasarım Ekibi"],
  "Zeynep Şahin": ["0136", "Yayın Tasarım Ekibi"],
};

const card = document.getElementById("cardImg");
const cardForm = document.getElementById("cardForm");

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  let nameInputValue = nameInput.value;
  let result = valueMap[nameInputValue];
  const namePlaced = document.createElement("p");
  namePlaced.classList.add("name", "placed", "textedit");
  namePlaced.setAttribute("id", "nameID");

  const numPlaced = document.createElement("p");
  numPlaced.classList.add("number", "placed", "textedit");
  numPlaced.setAttribute("id", "numID");

  const teamPlaced = document.createElement("p");
  teamPlaced.classList.add("team", "placed", "textedit");
  teamPlaced.setAttribute("id", "teamID");

  const cardImg = document.querySelector("#cardDwnld");

  if (result) {
    let numResult = valueMap[nameInputValue][0];
    let teamResult = valueMap[nameInputValue][1];
    namePlaced.innerText = nameInputValue;
    numPlaced.innerText = numResult;
    teamPlaced.innerText = teamResult;

    if (card.querySelector(".textedit") !== null) {
      card.removeChild(document.getElementById("numID"));
      card.removeChild(document.getElementById("nameID"));
      card.removeChild(document.getElementById("teamID"));
      card.appendChild(numPlaced);
      card.appendChild(namePlaced);
      card.appendChild(teamPlaced);
    } else {
      card.appendChild(numPlaced);
      card.appendChild(namePlaced);
      card.appendChild(teamPlaced);
    }

    
    html2canvas(cardImg, { scale: 5 }).then((canvas) => {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = `TPÖÇGKart'ım.png`;
      downloadLink.click();
    });

  } else {
    window.alert("Böyle bir kayıt yok.");
  }
});


const anaSayfa= function (req, res) {
  res.render('anasayfa',{
    "baslik": "Anasayfa",
    "sayfaBaslik": {
      "siteAd": "MekanBul",
      "slogan": "Civardakii Mekanları Keşfet!"
    },
    "mekanlar": [
      {
        "ad": "Starbucks",
        "adres": "Centrum Gareden Avm",
        "puan": "4",
        "imkanlar": ["Dünya Kahveleri","Kekler","Pastalar"],
        "mesafe": "10km"
      } 
      ,
      {
        "ad": "Gloria Jeans",
        "adres": "SDÜ Doğu Kampüsü",
        "puan": "2",
        "imkanlar": ["Kahve","Kekler","İçecekler"],
        "mesafe": "10km"
      } 
      ,
      {
        "ad": "Kahve Dünyası",
        "adres": "Centrum Gareden Avm",
        "puan": "3",
        "imkanlar": ["Dünya Kahveleri","Kekler","Pastalar"],
        "mesafe": "10km"
      } 
    ]
  }
  );
}

const mekanBilgisi=function(req,res) {
  res.render('mekanbilgisi',
    {
      "baslik": "Mekan Bilgisi",
      "mekanBaslik": "Starbucks",
      "mekanDetay": {
        "ad": "Starbucks",
        "adres": "Centrum Garden AVM",
        "puan": "4",
        "imkanlar": ["Dünya Kahveleri","Kekler","Pastalar"],
        "koordinatlar": {
          "enlem": "37.7",
          "boylam": "30.5"
        },
        "saatler": [
          {
            "gunler": "Pazartesi-Cuma",
            "acilis": "9:00-23:00",
            "kapali": "false"
          },
          {
            "gunler": "Cumartesi-Pazar",
            "acilis": "10:00-22:00",
            "kapali": "false"
          }
        ],
        "yorumlar": [
          {
            "yorumYapan": "Esref Yigitbas",
            "puan": "5",
            "tarih": "20 Ekim 2022",
            "yorumMetni": "Kahveler iyi."
          }
        ]
      }
    });
}

 const yorumEkle=function(req,res) {
    res.render('yorumekle',{"title":"Yorum Sayfası"});
   }


   
   module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
   }

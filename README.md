# TPÖÇG Kart 
TPÖÇG Kart, Türk Psikoloji Öğrencileri Çalışma Grubu Sponsorluk Ekibi ve Mali İşler Koordinatörlüğü'nün ortak bir çalışmasıdır. TPÖÇG üyelerine anlaşmalı işletmelerde indirim sağlaması amacını taşır. 
Kart, bildiğim kadarıyla hiçbir zaman fiziksel hale getirilmese de kartı tanıtmak ve dijital versiyonunu oluşturmak amacıyla sorumlu ekip arkadaşım tarafından görevlendirilmiştim ve bu siteyi de bu sebeple oluşturdum. 
Saf HTML, CSS ve JavaScript kullanmanın yanında html2canvas CDN'ini kullanarak kart sahiplerinin kendilerine özel kar görselini kaydedebilmesini amaçladım. 

En amatör çalışmam olmasına rağmen hem sitenin hem de kartın tasarımını kendim yapmış olmam nedeniyle kalbimde yeri olan bir proje. 
[Siteyi ziyaret et](https://ozanarslan2424.github.io/tpocgkart/)

## Kullanım: 
Tanıtım amaçlı bir site olduğu için 3 adet section'dan oluşuyor: hero, discounts ve application. 
1. Hero section küçük bir açıklama içeriyor. 
2. Discounts section'da geçerli olduğu yerlerin listesi var. 
3. Application section'daki forma ad soyad yazılıp yanındaki "oluştur" butonuna tıklandığında isme özel kart görseli oluşturuluyor ve cihaza kaydediliyor. 

## Hatalar: 
Bu projeyi yaparken henüz çok az şey bildiğim için portfolyoma koymadan önce bazı değişiklikler yaptım: 
- HTML etiketlerinde ciddi anlamda sıkıntılı pratikler vardı. 
- "img" etiketlerinin "alt" property'lerini boş bırakmıştım. 
- "form" elementi hatalı kullanılmıştı, submit function yerine butona eventlistener atanmıştı. 
- Position relative ve absolute pratiklerim hatalıydı. 
- Responsive bir tasarım yoktu. 
Bunların hepsini düzeltmeye çalışırken geçmişimi çok da değiştirmemek amacıyla bazı hatalara dokunmadım (örneğin bütün verilerin script.js dosyasında object olarak saklanıyor olması), kodu incelemekte serbestsiniz ancak şu anki yeteneklerimi göstermediğine emin olabilirsiniz. 

## Bağlılıklar: 
- html2canvas: version 1.4.0
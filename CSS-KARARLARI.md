# CSS Kararlari

## 1. Breakpoint Secimi
- **Neden 640px ve 1024px sectim?** 
  Genel kullanımda mobil telefonların çoğu 640px altında kalırken, tablet ve orta boy yatay görünümler genelde 640px ile 1024px arasında çalışmaktadır. 1024px üstündeki alan da masaüstü düzenlerini karşılamak için web standartlarına (ve Tailwind'den ödünç alınmış ölçülere) çok uymaktadır.
- **Icerigim bu noktalarda nasil degisiyor?** 
  Mobil ekranda tüm içerik tek sütun akışkan haldedir. Tablet'te (640px) "hakkımda" kısmı yan yana iki parçaya bölünerek daha iyi okuma alanı sağlar. Masaüstü formunda (1024px) ise proje kartları 3 sütuna konumlanarak geniş ekranın imkanlarından tamamen faydalanır.

## 2. Layout Tercihleri
- **Header icin neden Flexbox sectim?** 
  Header içerisindeki temel öğeler (Logo ve Menü linkleri) yatay olarak tek bir satırda dağılması için Flexbox (`justify-content: space-between`) yapısına son derece uygundur.
- **Proje kartlari icin neden Grid sectim?** 
  Kartlar hem X hem de Y ekseninde bir yapı oluşturur. "İçeriden dışarı" büyümek yerine "Alandan parçalar satmak" gerektiği için satır ve sütun uyumunda en iyi teknoloji Grid sistemidir.
- **auto-fit mi auto-fill mi kullandim, neden?** 
  `auto-fit` kullandım. Çünkü ekran genişlediğinde ve içerisinde fazla öğe kalmadığında boşlukların esnemesini ve içeriği mevcut duruma uydurup ekran genişliğini kaplamasını istiyorum. (`auto-fill` kullansaydım ekranı doldurmayıp boş sütunlar bırakacaktı).

## 3. Design Tokens
- **Hangi renk paletini sectim ve neden?** 
  Modern hissettiren, portfolyoların vazgeçilmezi olan koyu mavi `slate` tabanlı bir koyu mod (dark-mode / glassmorphism) renk paleti seçtim. Çünkü teknoloji portfolyolarına profesyonel bir görünüm katıyor.
- **Spacing skalasini nasil belirledim?** 
  Ufak dolgulardan (`var(--space-xs) = 0.25rem = 4px`) başlayarak büyük bölümler arası boşluklara kadar (`var(--space-3xl) = 4rem = 64px`) 4'ün katları olan altın oran boşluk standartlarına göre şekillendirdim.
- **Fluid typography icin clamp degerlerini nasil ayarladim?** 
  Her cihazda akıcı olması için `clamp(min, vw formülü, maksimum)` kullandım. Örneğin varsayılan body metni için `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` diyerek telefonlarda minimum 16px, yavaş büyüyen ekranlarda oransal artan, koca monitörlerde de maks. 18px'i geçmeyen rahat bir kullanım sundum.

## 4. Responsive Stratejiler
- **Mobile-first yaklasimini nasil uyguladim?** 
  Css elementlerimin varsayılan ayarlarının tamamını ilk olarak en küçük ekranlar için oluşturdum. Tablet ve Masaüstü yapılarına geçerken ise `@media (min-width: ...)` blokları açarak üstüne eklemeler yaptım.
- **Hangi elemanlar breakpoint'lerde degisiyor?** 
  Hakkımda bölümündeki imaj ile metin arasındaki hiyerarşi mobilde dikeyken tablet sürümünde yatay parçalara bölündü. Proje grid öğeleri mobilde 1 sütunken, büyüdükçe esnedi ve masaüstünde 3 sütun oldu. Ayrıca submit butonu mobilde ekrana tam yayılıyordu, tablet ve sonrasında `auto` yapılarak doğal genişliğine çekildi.
- **Gorsel boyutlari nasil yonettim?** 
  Proje kapaklarında `object-fit: cover;` ile `width:100% / height: 200px` vererek oran bozulmasını engelledim. Profil görselinde tek bir kare en/boy uyumu için `aspect-ratio: 1;` ve mobilde `width:100%;` verdim ki parent'ının kapasitesi neyse (max 200px) oraya otomatik sığsın.

# Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği 3. Sınıf Dersi Web Tasarım ve Programlama Laboratuvar Çalışmaları
**Süleyman Sardoğan**

## Hakkinda
Bu proje, Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği 3. sınıf dersi olan Web Tasarım ve Programlama Laboratuvar Çalışmaları kapsamında Vite + React + TypeScript kullanılarak oluşturulmuştur.

## Gelistirici
- **Ad Soyad:** Süleyman Sardoğan
- **Ogrenci No:** 220541069

## Kullanilan Teknolojiler
- React 18
- TypeScript
- Vite

## Kurulum
```bash
npm install
```

## Calistirma
```bash
npm run dev
```
Tarayicida http://localhost:5173 adresini ac.

---

## Sorular ve Cevaplar

**1. Terminal nedir ve neden GUI yerine terminal kullanılır?**
Terminal, işletim sistemine metin tabanlı komutlar vererek bilgisayarı yönetmemizi sağlayan bir arayüzdür. GUI (Grafiksel Kullanıcı Arayüzü) yerine terminal kullanılmasının sebebi; geliştirme araçlarının ekseriyetle terminal üzerinden çalışıp daha hızlı, daha fazla özelleştirilebilir işlem yapılmasını ve otomasyon süreçlerinin kolaylaştırılmasını sağlamasıdır.Terminal sebepleri standartlaştırma, hız ve otomasyon ön plandadır .

**2. Node.js ne işe yarar? Tarayıcı zaten JavaScript çalıştırıyorsa neden Node.js’e ihtiyacımız var?**
Node.js, JavaScript kodunu tarayıcı (browser) dışında, doğrudan bilgisayar üzerinde (sunucu ortamında) çalıştırabilmemizi sağlayan bir çalışma zamanı (runtime) ortamıdır. Modern web geliştirme araçlarının (Vite, yapılandırma paketleri vb.) birçoğu bilgisayarımızda çalışmak için Node.js ortamına ihtiyaç duyar.

**3. npm ne yapar? package.json dosyasının rolü nedir?**
npm (Node Package Manager), başka geliştiricilerin yazıp paylaştığı hazır kod paketlerini (library) projemize kurmamızı, güncellememizi ve yönetmemizi sağlayan bir paket yöneticisidir. `package.json` ise projenin bir nevi kimlik kartıdır; içerisinde projenin adını, sürümünü, çalıştırılabilir komutları ve en önemlisi ihtiyaç duyduğu paketlerin listesini (dependencies) barındırır.

**4. node_modules klasörü neden GitHub’a yüklenmez?**
`node_modules` binlerce dosya içerir ve boyutu çok büyüktür. `package.json` dosyasında projeye ait hangi paketlerin gerektiği zaten kayıtlı olduğu için; başka biri projeyi indirdiğinde ufak bir kod olan `npm install` komutuyla `node_modules` klasörünü baştan oluşturabilir. Bu yüzden gereksiz uzun boyutlarını sunucuya yüklemekten (.gitignore ile es geçilerek) kaçınılır.

**5. Git’te commit ne demektir? Neden sık sık commit atmalıyız?**
Git'te commit, o anki projedeki dosyaların değişiklik durumunun bir "görüntüsünü (fotoğrafını)" almak ve açıklamasıyla birlikte kaydetmek demektir. Sık sık commit atmalıyız çünkü küçük ve anlamlı adımlarla kaydedilen geliştirmeler geriye dönmeyi (hata anında), geçmişi görüntülemeyi ve hangi aşamada hangi hatanın veya gelişimin yapıldığını takip etmeyi pratik hale getirir.

**6. Branch nedir ve neden doğrudan main üzerinde çalışmıyoruz?**
Branch (dal), ana kod tabanından ayrılıp farklı, bağımsız ve paralel bir çalışma ortamı elde etmemizi sağlar. Doğrudan projelerin çalışan, bitmiş ana dalı olan `main` üzerinde çalışmayız çünkü çalışma esnasında kodları bozabilir veya eksik kayıtlar yapabiliriz. Branch'lar ile ana koda zarar vermeden testler yapılıp daha sonra düzgün çalıştığı kanıtlandığında birleştirme (merge) yapılır.

**7. git add ile git commit arasındaki fark nedir? Stage kavramını açıkla.**
`git add`, çalışma alanımızda değiştirilen dosyaları "Stage (Sahne/Hazırlık Alanı)" adlı ara birime aktarır. Yani "Bir sonraki kaydedişimde bu değişiklikleri dahil edeceğim" demektir. `git commit` ise stage edilmiş bu değişiklerin açıklamayla birlikte Git geçmişinde kalıcı bir "kayıt noktasına" dönüştürülmesini sağlar.

**8. README.md neden önemlidir? İçinde neler olmalıdır?**
README.md projelerin kullanıcılara ve geliştiricilere tanıtıldığı kullanım kitapçığı ya da projenin "vitrini"dir. İçerisinde amaca dair açıklama, kullanılan teknolojiler, kurulum adımları, nasıl çalıştırılacağı, ve geliştirici bilgileri gibi açıklayıcı dokümantasyonlar yer almalıdır.

**9. Vite ne işe yarar? npm run dev komutu arka planda ne yapar?**
Vite, modern web projelerini çok hızlı bir şekilde ayağa kaldırmamızı sağlayan, anında yenileme (HMR: Hot Module Replacement) özelliğine sahip yeni nesil bir derleme ve proje başlatma (bundling/scaffolding) aracıdır. `npm run dev` komut çalıştırıldığında Vite arka planda projedeki kodları derler, bir geliştirme sunucusu başlatır ve yazdıkça tarayıcının anında güncellenmesini sağlar.

**10. TypeScript ile JavaScript arasındaki temel fark nedir?**
TypeScript, JavaScript'in üzerine "Statik Tip (Type) Denetimi" eklenmiş, kapsayıcı ve gelişmiş bir halidir. JavaScript'te bir değişkenin içerisine sayı konup sonrasında metin aktarılabilirken (esnek yapı), TypeScript buna izin vermez ve nesnelerin tiplerini en baştan belirleyerek hataların tarayıcıda değil henüz kod yazılırken yakalanabilmesini sağlar.

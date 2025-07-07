const services = [
  {
    title: 'Art Brokeraj',
    description: `Ajansımız, sanat eserlerinizi ikincil piyasalarda doğru bir şekilde değerlendirmek için kapsamlı brokeraj hizmeti sunuyor. Değerleme, ekspertiz, arşiv taraması ve yatırım danışmanlığı gibi aşamalarla eserlerinizi detaylı bir şekilde analiz ediyoruz. Sanatçı kariyeri, geçmiş satışlar ve piyasa koşulları göz önünde bulundurularak yatırımcılar için en doğru tavsiyeyi veriyoruz.`,
    imageUrl: 'https://mountaincanvas.ca/sites/default/files/styles/max_2600x2600/public/2023-08/lindsay.wils_mountain_landscape_bright_abstract_art_oil_paintin_1299b8b8-fcbd-4589-b537-96e44e31f86a.png?itok=k1ZJ_NQj'
  },
  {
    title: 'Fuar ve Etkinlik Yönetimi',
    description: `Sanat ve tasarım alanında düzenlediğimiz fuar ve etkinliklerde, strateji odaklı bir yönetim sunuyoruz. Etkinliklerin her aşamasında yer alarak, tanıtım, dijital pazarlama, lojistik ve sigorta gibi hizmetlerle sürecin sorunsuz işlemesini sağlıyoruz. Ayrıca sanal ve hibrit etkinlik çözümleri ile geniş katılımcı kitlelerine ulaşmayı hedefliyoruz.`,
    imageUrl: 'https://mountaincanvas.ca/sites/default/files/styles/max_2600x2600/public/2023-08/lindsay.wils_mountain_landscape_bright_abstract_art_oil_paintin_1299b8b8-fcbd-4589-b537-96e44e31f86a.png?itok=k1ZJ_NQj'
  },
  {
    title: 'Sanat Yayıncılığı',
    description: `Sanat dünyasında önemli figürlerle röportajlar, detaylı sanatçı monografileri ve kataloglar gibi yayınlar hazırlıyoruz. İçerik geliştirme, editörlük, çeviri ve sanat yazarlığı gibi hizmetlerle, sanatçılar ve galeriler için özelleştirilmiş yayınlar sunarak sanat eserlerinin tanıtımını sağlıyoruz. Hem basılı hem dijital platformlarda yayıncılık çözümleri sunuyoruz.`,
    imageUrl: 'https://mountaincanvas.ca/sites/default/files/styles/max_2600x2600/public/2023-08/lindsay.wils_mountain_landscape_bright_abstract_art_oil_paintin_1299b8b8-fcbd-4589-b537-96e44e31f86a.png?itok=k1ZJ_NQj'
  },
  {
    title: 'Kültür ve Sanat Danışmanlığı',
    description: `Kurum ve bireylere yaratıcı endüstrilerde vizyoner danışmanlık hizmetleri sunuyoruz. Kültür, sanat ve tasarım alanlarında stratejik yol haritaları oluşturuyor ve projelerin başarıyla hayata geçirilmesini sağlıyoruz. Ayrıca eğitim, işbirliği, fonlama stratejileri gibi alanlarda rehberlik ederek sektördeki değişimlere hızla adapte olmalarını sağlıyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
  {
    title: 'Proje Yönetimi',
    description: `Proje yönetimi konusunda uzman ekibimiz, belirlenen kriterlere uygun olarak süreç yönetimi, bilgi yönetimi ve stratejik planlama yapıyor. Zamanında ve verimli bir şekilde projelerinizi tamamlamak için kaynak yönetimi, risk analizi ve bütçe takibi gibi süreçleri yüksek standartlarda sağlıyoruz. Ayrıca proje raporlaması ve iletişim koordinasyonu ile süreci yönetiyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
  {
    title: 'Küratöryel Hizmetler',
    description: `Sanat galerilerine, koleksiyonculara ve müzelere küratörlük hizmeti sunuyoruz. Etkin sergi düzenlemeleri, sanatçı seçimleri ve sanat eserlerinin tanıtımı gibi hizmetler vererek koleksiyonlarınızı değerli hale getiriyoruz. Kültürel mirasın korunması ve sanat eserlerinin doğru sergilenmesi için profesyonel danışmanlık sağlıyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
  {
    title: 'Müzayede',
    description: `Sanat eserlerinin doğru değerlemeleri ve alıcılar için en iyi fırsatların sunulması için butik müzayede hizmeti sunuyoruz. Müzayede süreçlerinin her aşamasında profesyonel yönetim sağlıyoruz. Ayrıca müzayede sonrası satış takibi ile sanatçıların ve alıcıların beklentilerini karşılıyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
  {
    title: 'Sanatçı Temsiliyeti',
    description: `Sanatçılara temsiliyet, sergileme, pazarlama ve kariyer yönetimi hizmetleri sunuyoruz. Sanatçılar için kişisel marka yönetimi, sosyal medya stratejileri ve kariyer planlaması gibi hizmetlerle uluslararası alanda etkinlikler düzenliyoruz. Sanatçılara satış kanalları oluşturma konusunda rehberlik ederek onların sanat dünyasında doğru fırsatları değerlendirmelerini sağlıyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
  {
    title: 'Strateji',
    description: `Sanat dünyasında kurumların güçlü yönlerini öne çıkaran stratejik planlamalar yapıyoruz. Dijital stratejiler, işbirlikleri ve sürdürülebilirlik projeleri ile markaların küresel pazarda güçlü bir yer edinmesini sağlıyoruz. Ayrıca gelecekteki fırsatları öngörmeye yönelik analizler ve yol haritaları sunarak sektördeki değişimlere adapte olmalarına yardımcı oluyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
  {
    title: 'Yeni Nesil PR Hizmetleri',
    description: `Markalar için dijital PR, influencer marketing ve online itibar yönetimi hizmetleri sunuyoruz. Sosyal medya platformlarında marka bilinirliğini artırmak için stratejiler geliştiriyor ve influencer'larla işbirlikleri yapıyoruz. Ayrıca online itibar yönetimi konusunda kriz yönetimi, medya ilişkileri ve sosyal medya izleme hizmetleri vererek markaların dijital alanda güçlü bir varlık oluşturmalarını sağlıyoruz.`,
    imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/OAF-Paris-30.jpg'
  },
];

export default services;


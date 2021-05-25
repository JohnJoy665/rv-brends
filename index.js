import './style.css';

const data = {
    "brands": [{
            "brand": "0'105 ZEROCENTCINQ",
            "translate": "зэрО сан сэнк",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "0’105 Zero Cent Cinq.wav",
            "onSale": "true"
        },
        {
            "brand": "4US CESARE PACIOTTI",
            "translate": "фор ас чезАре пачОтти",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "cesare_paciotti.mp3",
            "onSale": "true"
        },
        {
            "brand": "7AM",
            "translate": "сЭвэн эй эм",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "7am.mp3",
            "onSale": "true"
        },
        {
            "brand": "ABRICOT",
            "translate": "абрикО",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Abricot.wav",
            "onSale": "true"
        },
        {
            "brand": "ACCESSOIRE DIFFUSION",
            "translate": "аксессуАр дифюзьОн",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "accessoire-diffusion.mp3",
            "onSale": "true"
        },
        {
            "brand": "ADIDAS",
            "translate": "адидАс",
            "gamma": "Средняя",
            "country": "Германия",
            "audioLink": "Adidas.wav",
            "onSale": "true"
        },
        {
            "brand": "AGNELLE",
            "translate": "аниЕль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Agnelle.wav",
            "onSale": "true"
        },
        {
            "brand": "AN HOUR AND A SHOWER",
            "translate": "эн Ауэр энд эшАуэр",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "an_hour_and_a_shower.mp3",
            "onSale": "true"
        },
        {
            "brand": "ANTARCTICA",
            "translate": "антАрктика",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Antarctica.wav",
            "onSale": "true"
        },
        {
            "brand": "ARCHE",
            "translate": "арш",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "Arche.wav",
            "onSale": "true"
        },
        {
            "brand": "ARCUS",
            "translate": "аркЮс",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Arcus.wav",
            "onSale": "true"
        },
        {
            "brand": "ARTIKA SOFT",
            "translate": "Артика софт",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Artika Soft.wav",
            "onSale": "true"
        },
        {
            "brand": "ASH",
            "translate": "аш",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Ash.wav",
            "onSale": "true"
        },
        {
            "brand": "ASICS",
            "translate": "Асикс",
            "gamma": "Средняя",
            "country": "Япония",
            "audioLink": "Asics.wav",
            "onSale": "true"
        },
        {
            "brand": "ASICS TIGER",
            "translate": "Асикс тАйгер",
            "gamma": "Средняя",
            "country": "Япония",
            "audioLink": "Asics Tiger.wav",
            "onSale": "true"
        },
        {
            "brand": "AVRIL GAU",
            "translate": "аврИль го",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "avril-gau.mp3",
            "onSale": "true"
        },
        {
            "brand": "AZUREE",
            "translate": "азюрЭ",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Azuree.wav",
            "onSale": "true"
        },
        {
            "brand": "BAGLLERINA",
            "translate": "бэглерИна",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "bagllerina.mp3",
            "onSale": "true"
        },
        {
            "brand": "BLIPERS",
            "translate": "блИперс",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Blipers.wav",
            "onSale": "true"
        },
        {
            "brand": "BOCAGE",
            "translate": "бокАж",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Bocage.wav",
            "onSale": "true"
        },
        {
            "brand": "CALVIN KLEIN",
            "translate": "кЕльвин клЯйн",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Calvin Klein.wav",
            "onSale": "true"
        },
        {
            "brand": "CALZETTI",
            "translate": "кальцЭтти",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Calzetti.wav",
            "onSale": "true"
        },
        {
            "brand": "CAREL",
            "translate": "карЭль",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "Carel.wav",
            "onSale": "true"
        },
        {
            "brand": "CARTAGO",
            "translate": "картАго",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Cartago.wav",
            "onSale": "true"
        },
        {
            "brand": "CASADEI",
            "translate": "казадЕи",
            "gamma": "Премиальная",
            "country": "Италия",
            "audioLink": "Casadei.wav",
            "onSale": "true"
        },
        {
            "brand": "CELINE ROBERT",
            "translate": "селИн робЭр",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Celine Robert.wav",
            "onSale": "true"
        },
        {
            "brand": "CESARE PACIOTTI",
            "translate": "чезАре пачОтти",
            "gamma": "Премиальная",
            "country": "Италия",
            "audioLink": "cesare_paciotti.mp3",
            "onSale": "true"
        },
        {
            "brand": "CHIARA BELLINI",
            "translate": "кьЯра беллИни",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Chiara Bellini.wav",
            "onSale": "true"
        },
        {
            "brand": "COACH",
            "translate": "кОуч",
            "gamma": "Средневысокая",
            "country": "США",
            "audioLink": "coach.mp3",
            "onSale": "true"
        },
        {
            "brand": "DASCO",
            "translate": "дАско",
            "gamma": "Средняя",
            "country": "Великобритания",
            "audioLink": "Dasco.wav",
            "onSale": "true"
        },
        {
            "brand": "DAVID BEAUCIEL",
            "translate": "давИд босьЕль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "david-beauciel.mp3",
            "onSale": "true"
        },
        {
            "brand": "DESIGUAL",
            "translate": "десигуАль",
            "gamma": "Средняя",
            "country": "Испания",
            "audioLink": "Desigual.wav",
            "onSale": "true"
        },
        {
            "brand": "DIADORA",
            "translate": "диадОра",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Diadora.wav",
            "onSale": "true"
        },
        {
            "brand": "DINO BIGIONI",
            "translate": "дИнобиджОни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Dino Bigioni.wav",
            "onSale": "true"
        },
        {
            "brand": "DINO BIGIONI SPORT",
            "translate": "дИно биджОни спорт",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Dino Bigioni Sport.wav",
            "onSale": "true"
        },
        {
            "brand": "DIVA`S BAG",
            "translate": "дИваз бэг",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Diva’s Bag.wav",
            "onSale": "true"
        },
        {
            "brand": "DIRK BIKKEMBERGS",
            "translate": "дИрк бИкембергс",
            "gamma": "Средняя",
            "country": "Бельгия",
            "audioLink": "dirk_bikkembergs.mp3",
            "onSale": "true"
        },
        {
            "brand": "DKNY",
            "translate": "дИ кЕй Эн уАй",
            "gamma": "Средневысокая",
            "country": "США",
            "audioLink": "DKNY.wav",
            "onSale": "true"
        },
        {
            "brand": "DOLCI",
            "translate": "дОльчи",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Dolci.wav",
            "onSale": "true"
        },
        {
            "brand": "DORE-DORE",
            "translate": "дорЭ дорЭ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Dore-Dore.wav",
            "onSale": "true"
        },
        {
            "brand": "DOT-DROPS",
            "translate": "дОт дрОпс",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "Dot Drops.wav",
            "onSale": "true"
        },
        {
            "brand": "EASY BY LORIBLU",
            "translate": "Изи бай лориблУ",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Easy by Loriblu.wav",
            "onSale": "true"
        },
        {
            "brand": "ECCO",
            "translate": "Экко",
            "gamma": "Средняя",
            "country": "Дания",
            "audioLink": "Ecco.mp3",
            "onSale": "true"
        },
        {
            "brand": "ERNESTO DOLANI",
            "translate": "эрнЭсто долАни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Ernesto Dolani.wav",
            "onSale": "true"
        },
        {
            "brand": "EXCELLENCE",
            "translate": "эксэлАнс",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Excellence.wav",
            "onSale": "true"
        },
        {
            "brand": "FALCOTTO",
            "translate": "фалькОтто",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "falcotto.mp3",
            "onSale": "true"
        },
        {
            "brand": "FERRE COLLEZIONI",
            "translate": "феррЭ коллециОни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Ferre Collezioni.wav",
            "onSale": "true"
        },
        {
            "brand": "FILA",
            "translate": "фИла",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Fila.wav",
            "onSale": "true"
        },
        {
            "brand": "FLAMINGOS",
            "translate": "фламингОс",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "flamingos2.mp3",
            "onSale": "true"
        },
        {
            "brand": "FREE LANCE & JB RAUTUREAU",
            "translate": "фри ланс и жан батИст ротюрО",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "free_lance.mp3",
            "onSale": "true"
        },
        {
            "brand": "FURLA",
            "translate": "фУрла",
            "gamma": "Премиальная",
            "country": "Италия",
            "audioLink": "Furla.wav",
            "onSale": "true"
        },
        {
            "brand": "GEOX",
            "translate": "джЕокс",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Geox.wav",
            "onSale": "true"
        },
        {
            "brand": "GERARD HENON",
            "translate": "жерАр энОн",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Gerard Henon.wav",
            "onSale": "true"
        },
        {
            "brand": "GIANNI CHIARINI",
            "translate": "джАнни кьярИни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Gianni Chiarini.wav",
            "onSale": "true"
        },
        {
            "brand": "GIORGIO FABIANI",
            "translate": "джОрджио фабиАни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "giorgio_fabiani.mp3",
            "onSale": "true"
        },
        {
            "brand": "GIANNI RENZI (REJOIS)",
            "translate": "джАнни рЕнци реджОйс",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Gianni Renzi.wav",
            "onSale": "true"
        },
        {
            "brand": "GIANNI RENZI COUTURE",
            "translate": "джАнни рЕнци кутЮр",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "gianni_renzi_couture.mp3",
            "onSale": "true"
        },
        {
            "brand": "GIOVANNI FABIANI",
            "translate": "джовАнни фабиАни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Giovanni Fabiani.wav",
            "onSale": "true"
        },
        {
            "brand": "GOOD MAN",
            "translate": "гуд мэн",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "good_man.mp3",
            "onSale": "true"
        },
        {
            "brand": "GRENDENE",
            "translate": "грендЕне",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "grendene.mp3",
            "onSale": "true"
        },
        {
            "brand": "GRENDENE KIDS",
            "translate": "грендЕне кидс",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Grendene Kids.wav",
            "onSale": "true"
        },
        {
            "brand": "MELISSA",
            "translate": "мелИсса",
            "gamma": "Средневысокая",
            "country": "Бразилия",
            "audioLink": "Melissa.wav",
            "onSale": "true"
        },
        {
            "brand": "GRENDHA",
            "translate": "грЭнда",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Grendha.wav",
            "onSale": "true"
        },
        {
            "brand": "GUY LAROCHE",
            "translate": "ги ларОш",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "guy_laroche.mp3",
            "onSale": "true"
        },
        {
            "brand": "HALMANERA",
            "translate": "альманЕра",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Halmanera.wav",
            "onSale": "true"
        },
        {
            "brand": "INUOVO",
            "translate": "инуОво",
            "gamma": "Средняя",
            "country": "Турция",
            "audioLink": "Inuovo.wav",
            "onSale": "true"
        },
        {
            "brand": "IPANEMA",
            "translate": "ипанЕма",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Ipanema.wav",
            "onSale": "true"
        },
        {
            "brand": "IPANEMA WITH STARCK",
            "translate": "ипанЕма вис старк",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Ipanema with Starck.wav",
            "onSale": "true"
        },
        {
            "brand": "ISABEL MARANT",
            "translate": "изабЭль марАн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "isabel_marant.mp3",
            "onSale": "true"
        },
        {
            "brand": "JB MARTIN",
            "translate": "жибэ мартЭн",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "j_b_marten.mp3",
            "onSale": "true"
        },
        {
            "brand": "JEAN PAUL GAULTIER",
            "translate": "жан поль готьЕ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Jean Paul Gaultier.wav",
            "onSale": "true"
        },
        {
            "brand": "JIL SANDER & JIL SANDER NAVY",
            "translate": "джил сАндер нЭви",
            "gamma": "Премиальная",
            "country": "Германия",
            "audioLink": "jil_sander_jil_sander_navy.mp3",
            "onSale": "true"
        },
        {
            "brand": "JOG DOG",
            "translate": "джог дог",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Jog Dog.wav",
            "onSale": "true"
        },
        {
            "brand": "JOSEPH",
            "translate": "джОзэф",
            "gamma": "Премиальная",
            "country": "Великобритания",
            "audioLink": "Joseph.wav",
            "onSale": "true"
        },
        {
            "brand": "KATY PERRY",
            "translate": "кЭти пЕрри",
            "gamma": "Средневысокая",
            "country": "США",
            "audioLink": "Katy Perry.wav",
            "onSale": "true"
        },
        {
            "brand": "KEDS",
            "translate": "кедс",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Keds.wav",
            "onSale": "true"
        },
        {
            "brand": "KELTON",
            "translate": "кЕлтон",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Kelton.wav",
            "onSale": "true"
        },
        {
            "brand": "KENZO",
            "translate": "кензО",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Kenzo.wav",
            "onSale": "true"
        },
        {
            "brand": "KISS MOON",
            "translate": "кис мун",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Kiss Moon.wav",
            "onSale": "true"
        },
        {
            "brand": "LA BEAUTE PARIS",
            "translate": "ля ботЭ пари",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "La Beaute.wav",
            "onSale": "true"
        },
        {
            "brand": "LA NEVE",
            "translate": "ла нЕвэ",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "la_neve.mp3",
            "onSale": "true"
        },
        {
            "brand": "LACOSTE",
            "translate": "лакОст",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "Lacoste.wav",
            "onSale": "true"
        },
        {
            "brand": "LADY`S SECRET",
            "translate": "лЭдис сИкрет",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "ladys_secret.mp3",
            "onSale": "true"
        },
        {
            "brand": "LA MAISON DE L'ESPADRILLE",
            "translate": "ля мэзОн дэ лэспадрИй",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "La maison de lEspadrille.wav",
            "onSale": "true"
        },
        {
            "brand": "LE COQ SPORTIF",
            "translate": "лё кок спортИф",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "le_coq_sportif.mp3",
            "onSale": "true"
        },
        {
            "brand": "LES MOUETTES VERTES",
            "translate": "ле муЭт вЭрт",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "le_mouettes_vertes.mp3",
            "onSale": "true"
        },
        {
            "brand": "LES TROPEZIENNES",
            "translate": "ле тропезьЕн",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Les Tropeziennes.wav",
            "onSale": "true"
        },
        {
            "brand": "LEVI'S",
            "translate": "лЕвис, ливАйс",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Levis.wav",
            "onSale": "true"
        },
        {
            "brand": "LLOYD",
            "translate": "ллОйд",
            "gamma": "Средневысокая",
            "country": "Германия",
            "audioLink": "Lloyd.wav",
            "onSale": "true"
        },
        {
            "brand": "LOAKE",
            "translate": "лОук",
            "gamma": "Средневысокая",
            "country": "Великобритания",
            "audioLink": "Loake.wav",
            "onSale": "true"
        },
        {
            "brand": "LOLA CRUZ",
            "translate": "лОла круз",
            "gamma": "Средняя",
            "country": "Испания",
            "audioLink": "Lola Cruz.wav",
            "onSale": "true"
        },
        {
            "brand": "LORIBLU",
            "translate": "лориблУ",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Loriblu.wav",
            "onSale": "true"
        },
        {
            "brand": "LUISA DERICO",
            "translate": "луИза дерИко",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Luisa Derico.wav",
            "onSale": "true"
        },
        {
            "brand": "MAISON BARANNE",
            "translate": "мэзОн барАн",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Maison Baranne.wav",
            "onSale": "true"
        },
        {
            "brand": "MAISON ERNEST",
            "translate": "мэзОн эрнЭст",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "maison_ernest.mp3",
            "onSale": "true"
        },
        {
            "brand": "MARC JACOBS",
            "translate": "марк джЕйкобс",
            "gamma": "Премиальная",
            "country": "США",
            "audioLink": "Marc Jacobs.wav",
            "onSale": "true"
        },
        {
            "brand": "MASSIMO SANTINI",
            "translate": "мАссимо сантИни",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Massimo Santini.wav",
            "onSale": "true"
        },
        {
            "brand": "MEDITERRANEA",
            "translate": "медитэррАнэа",
            "gamma": "Средняя",
            "country": "Испания",
            "audioLink": "Mediterranea.wav",
            "onSale": "true"
        },
        {
            "brand": "MEL",
            "translate": "мел",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "mel.mp3",
            "onSale": "true"
        },
        {
            "brand": "MEPHISTO",
            "translate": "мефИсто",
            "gamma": "Средневысокая",
            "country": "США",
            "audioLink": "mephisto.mp3",
            "onSale": "true"
        },
        {
            "brand": "MICHAEL KORS",
            "translate": "майкл корс",
            "gamma": "Премиальная",
            "country": "США",
            "audioLink": "Michael Kors.wav",
            "onSale": "true"
        },
        {
            "brand": "MICHEL VIVIEN",
            "translate": "мишЕль вивьЕн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "michel_vivien.mp3",
            "onSale": "true"
        },
        {
            "brand": "MINI MELISSA",
            "translate": "мИни мелИсса",
            "gamma": "Средневысокая",
            "country": "Бразилия",
            "audioLink": "mini_mellisa.mp3",
            "onSale": "true"
        },
        {
            "brand": "MINORQUINES",
            "translate": "миноркИн",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "Minorquines.wav",
            "onSale": "true"
        },
        {
            "brand": "MM6 MAISON MARGIELA",
            "translate": "мм6 мэзОн маржелА",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "MM6 Maison Margiela.wav",
            "onSale": "true"
        },
        {
            "brand": "NANDO MUZI",
            "translate": "нАндо мУци",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Nando Muzi.wav",
            "onSale": "true"
        },
        {
            "brand": "NATURINO",
            "translate": "натурИно",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Naturino.wav",
            "onSale": "true"
        },
        {
            "brand": "NAZZARENO DI ROSA BY OFFICINE CREATIVE",
            "translate": "надзарЭно ди рОза бай оффичИнэ креатИвэ",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Nazzareno Di Rosa By Officine Creative.wav",
            "onSale": "true"
        },
        {
            "brand": "NERO GIARDINI",
            "translate": "нЭро джиардИни",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Nero Giardini.wav",
            "onSale": "true"
        },
        {
            "brand": "NERO GIARDINI JUNIOR",
            "translate": "нЭро джиардИни джУниор",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "nerogiardini.mp3",
            "onSale": "true"
        },
        {
            "brand": "NEW BALANCE",
            "translate": "нью бЭлэнс",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "New Balance.wav",
            "onSale": "true"
        },
        {
            "brand": "NG",
            "translate": "энджи",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "ng.mp3",
            "onSale": "true"
        },
        {
            "brand": "NINALILOU",
            "translate": "ниналилУ",
            "gamma": "Средневысокая",
            "country": "СанМарино",
            "audioLink": "Ninalilou.wav",
            "onSale": "true"
        },
        {
            "brand": "NO NAME",
            "translate": "нонэйм",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "No Name.wav",
            "onSale": "true"
        },
        {
            "brand": "OFFICINE CREATIVE",
            "translate": "оффичИнэ креатИвэ",
            "gamma": "Премиальная",
            "country": "Италия",
            "audioLink": "Officine Creative.wav",
            "onSale": "true"
        },
        {
            "brand": "OLANG",
            "translate": "Оланг",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "Olang.wav",
            "onSale": "true"
        },
        {
            "brand": "OPEN CLOSED SHOES",
            "translate": "Оупэн клОуз дшуз",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "openclosedshoes.mp3",
            "onSale": "true"
        },
        {
            "brand": "ORTMANN",
            "translate": "Ортманн",
            "gamma": "Средняя",
            "country": "Испания",
            "audioLink": "ortmann.mp3",
            "onSale": "true"
        },
        {
            "brand": "PAKERSON",
            "translate": "пАкерсон",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Pakerson.wav",
            "onSale": "true"
        },
        {
            "brand": "PARABOOT",
            "translate": "парабУт",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Paraboot.wav",
            "onSale": "true"
        },
        {
            "brand": "PAS DE ROUGE",
            "translate": "па дэ руж",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Pas de rouge.wav",
            "onSale": "true"
        },
        {
            "brand": "PAS DE NOIR",
            "translate": "па дэ нуАр",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "pas_de_noir.mp3",
            "onSale": "true"
        },
        {
            "brand": "PEDAG",
            "translate": "пЕдаг",
            "gamma": "Средняя",
            "country": "Германия",
            "audioLink": "pedag.mp3",
            "onSale": "true"
        },
        {
            "brand": "PETITE MENDIGOTE",
            "translate": "пётИт мондигОт",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "petite_mendigote.mp3",
            "onSale": "true"
        },
        {
            "brand": "PHILIPP PLEIN SPORT",
            "translate": "плЯйн спорт, фИлипп плЯйн",
            "gamma": "Премиальная",
            "country": "Швейцария",
            "audioLink": "Plein Sport.wav",
            "onSale": "true"
        },
        {
            "brand": "PROENZA SCHOULER",
            "translate": "проЭнза скУлэр",
            "gamma": "Премиальная",
            "country": "США",
            "audioLink": "Proenza Schouler.wav",
            "onSale": "true"
        },
        {
            "brand": "PUMA",
            "translate": "пУма",
            "gamma": "Средняя",
            "country": "Германия",
            "audioLink": "Puma.wav",
            "onSale": "true"
        },
        {
            "brand": "REDWOOD",
            "translate": "рЭдвуд",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "redwood.mp3",
            "onSale": "true"
        },
        {
            "brand": "REEBOK",
            "translate": "рИбок",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Reebok.wav",
            "onSale": "true"
        },
        {
            "brand": "RENDEZ-VOUS by DASCO",
            "translate": "рандевУ бай дАско",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "RENDEZ-VOUS by DINO BIGIONI",
            "translate": "рандевУ бай дИно биджОни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "RENDEZ-VOUS by GIORGIO FABIANI",
            "translate": "рандевУ бай джОрджио фабиАни",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "RENDEZ-VOUS by LADY'S SECRET",
            "translate": "рандевУ бай лЭдиссИкрет",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "RIDER",
            "translate": "рАйдер",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Rider.wav",
            "onSale": "true"
        },
        {
            "brand": "ROBERTA CENCI",
            "translate": "робЭрта чЕнчи",
            "gamma": "Премиальная",
            "country": "Италия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "RUSOCKS",
            "translate": "русОкс",
            "gamma": "Средняя",
            "country": "Россия",
            "audioLink": "Rusocks.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR",
            "translate": "сафИр",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Saphir.wav",
            "onSale": "true"
        },
        {
            "brand": "SCHOLL",
            "translate": "шолль",
            "gamma": "Средневысокая",
            "country": "Великобритания",
            "audioLink": "Scholl.wav",
            "onSale": "true"
        },
        {
            "brand": "SCHMOOVE",
            "translate": "шмув",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "schmoove.mp3",
            "onSale": "true"
        },
        {
            "brand": "SEE by CHLOE",
            "translate": "си бай клоЭ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "See by Chloe.wav",
            "onSale": "true"
        },
        {
            "brand": "SHOOPS",
            "translate": "шупс",
            "gamma": "Средневысокая",
            "country": "Франция",
            "audioLink": "shoops.mp3",
            "onSale": "true"
        },
        {
            "brand": "SOXET",
            "translate": "сОксет",
            "gamma": "Средняя",
            "country": "Россия",
            "audioLink": "soxet.mp3",
            "onSale": "true"
        },
        {
            "brand": "STRATEGIA",
            "translate": "стратеджИя",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Strategia.wav",
            "onSale": "true"
        },
        {
            "brand": "TAMARIS",
            "translate": "тамАрис",
            "gamma": "Средняя",
            "country": "Германия",
            "audioLink": "Tamaris.wav",
            "onSale": "true"
        },
        {
            "brand": "TBS",
            "translate": "тбс",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "TBS.wav",
            "onSale": "true"
        },
        {
            "brand": "THE LAST CONSPIRACY",
            "translate": "зэ ласт кэнспИрэси",
            "gamma": "Премиальная",
            "country": "Дания",
            "audioLink": "The Last Conspiracy.wav",
            "onSale": "true"
        },
        {
            "brand": "THIERRY RABOTIN",
            "translate": "тьеррИ работАн",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Thierry Rabotin.wav",
            "onSale": "true"
        },
        {
            "brand": "TIMBERLAND",
            "translate": "тимберлЭнд",
            "gamma": "Средневысокая",
            "country": "США",
            "audioLink": "Timberland.wav",
            "onSale": "true"
        },
        {
            "brand": "TOMMY HILFIGER",
            "translate": "тОми хилфИгер",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Tommy Hilfiger.wav",
            "onSale": "true"
        },
        {
            "brand": "TOMMY JEANS",
            "translate": "тОми джИнс",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Tommy Jeans.wav",
            "onSale": "true"
        },
        {
            "brand": "VAGABOND",
            "translate": "вагабОнд",
            "gamma": "Средневысокая",
            "country": "Швеция",
            "audioLink": "VAGABOND.wav",
            "onSale": "true"
        },
        {
            "brand": "VERDURA",
            "translate": "вердУра",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "verdura.mp3",
            "onSale": "true"
        },
        {
            "brand": "VFTS",
            "translate": "вИ Эф тИ Эс",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "vfts.mp3",
            "onSale": "true"
        },
        {
            "brand": "VIC",
            "translate": "вик",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "vic.mp3",
            "onSale": "true"
        },
        {
            "brand": "VIC MATIE",
            "translate": "вик матьЕ",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "Vic Matie.wav",
            "onSale": "true"
        },
        {
            "brand": "VIOLET TOMAS",
            "translate": "виолЕт омА",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "violet-tomas.mp3",
            "onSale": "true"
        },
        {
            "brand": "VIONIC",
            "translate": "вайОник",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "Vionic.wav",
            "onSale": "true"
        },
        {
            "brand": "ZAXY",
            "translate": "зАкси",
            "gamma": "Средняя",
            "country": "Бразилия",
            "audioLink": "Zaxy.wav",
            "onSale": "true"
        },
        {
            "brand": "ZENUX",
            "translate": "зЕнукс",
            "gamma": "Средневысокая",
            "country": "Италия",
            "audioLink": "zenux.mp3",
            "onSale": "true"
        },
        {
            "brand": "AVEL",
            "translate": "авЕль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Avel.wav",
            "onSale": "true"
        },
        {
            "brand": "BAUME RENOVATEUR NAPPA 1925",
            "translate": "бом реноватЁр наппА",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Baume Renovateur Nappa 1925.wav",
            "onSale": "true"
        },
        {
            "brand": "CANADIAN",
            "translate": "крем канадьЁн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "canadian.mp3",
            "onSale": "true"
        },
        {
            "brand": "CORDOVAN",
            "translate": "кордовАн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Cordovan.wav",
            "onSale": "true"
        },
        {
            "brand": "CRÈME CUIRE GRAS",
            "translate": "крем кюИр гра",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Crème Cuire gras.wav",
            "onSale": "true"
        },
        {
            "brand": "CRÈME DE LUXE",
            "translate": "крем делюкс",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Crème de Luxe.wav",
            "onSale": "true"
        },
        {
            "brand": "CRÈME DELICATE",
            "translate": "крем деликАт",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Crème Delicate.wav",
            "onSale": "true"
        },
        {
            "brand": "CRÈME RENOVATRICE",
            "translate": "крем реноватрИс",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Crème Renovatrice.wav",
            "onSale": "true"
        },
        {
            "brand": "CRÈME UNIVERSELLE",
            "translate": "крем универсЭль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Crème Universelle.wav",
            "onSale": "true"
        },
        {
            "brand": "DETACHEUR HIVER WINTER",
            "translate": "деташОр Ивер вИнтер",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Detacheur Hiver Winter.wav",
            "onSale": "true"
        },
        {
            "brand": "EVEREST",
            "translate": "эверЕст",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "everest.mp3",
            "onSale": "true"
        },
        {
            "brand": "GEL CRISTAL",
            "translate": "гель кристАль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Gel Cristal.wav",
            "onSale": "true"
        },
        {
            "brand": "HUILE PROTECTRICE",
            "translate": "уИль протектрИс",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Huile Protectrice.wav",
            "onSale": "true"
        },
        {
            "brand": "INVULNER PROTECTOR",
            "translate": "инвУльнер протЭктор",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Invulner Protector.wav",
            "onSale": "true"
        },
        {
            "brand": "MENTHOL",
            "translate": "мантОль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Menthol.wav",
            "onSale": "true"
        },
        {
            "brand": "NETTOYANT CLEANER",
            "translate": "нетуайАн клИнер",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Nettoyant cleaner.wav",
            "onSale": "true"
        },
        {
            "brand": "OMNIDAIM",
            "translate": "омнидЭм",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Omnidaim.wav",
            "onSale": "true"
        },
        {
            "brand": "OURALINE",
            "translate": "уральЁн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Ouraline.wav",
            "onSale": "true"
        },
        {
            "brand": "PATE DE LUXE",
            "translate": "пат де лЮкс",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Pate de Luxe.wav",
            "onSale": "true"
        },
        {
            "brand": "POMMADIER",
            "translate": "помадьЕ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Pommadier.wav",
            "onSale": "true"
        },
        {
            "brand": "RÉNO’MAT",
            "translate": "реномАт",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Renomat.wav",
            "onSale": "true"
        },
        {
            "brand": "RENOVATEUR 1925",
            "translate": "реноватЁр 1925",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Renovateur 1925.wav",
            "onSale": "true"
        },
        {
            "brand": "RENOVETINE DAIM NUBUCK",
            "translate": "реноветИн дэм нубУк",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Renovetine daim nubuck.wav",
            "onSale": "true"
        },
        {
            "brand": "REPTAN",
            "translate": "рептАн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Reptan.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR BROSSE CREPE BOIS",
            "translate": "сафИр брос креп бУа",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR BROSSE CREPE BOIS.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR BROSSE CREPE SOIE",
            "translate": "сафИр брос креп сУа",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR BROSSE CREPE SOIE.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR BROSSE ETALEUR",
            "translate": "сафИр брос эталЁр",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR BROSSE ETALEUR.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR BROSSE METAL",
            "translate": "сафИр брос метАль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR BROSSE METAL.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR OKE",
            "translate": "сафИр окЕ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Saphir Oke.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR PETITE BROSSE CRIN DE CHEVAL",
            "translate": "сафИр пётИт брос кран де шевАль",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR PETITE BROSSE CRIN DE CHEVAL.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR SHAMPOO",
            "translate": "сафИр шампУ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Saphir Shampoo.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR SHOE DEO",
            "translate": "сафИр шУэ дЭо",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Saphir Shoe Deo.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR SNEAKER CLEANER",
            "translate": "сафИр снИкер клИнер",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR SNEAKER CLEANER.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR WHITE NOVELYS",
            "translate": "сафИр вайт новелИс",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR WHITE NOVELYS.wav",
            "onSale": "true"
        },
        {
            "brand": "SAPHIR CUIR REGENERANT",
            "translate": "сафИр кюИр рэжэнэрАн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "SAPHIR CUIR REGENERANT.wav",
            "onSale": "true"
        },
        {
            "brand": "SUPER INVULNER",
            "translate": "сУпер инвУльнер",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Super Invulner.wav",
            "onSale": "true"
        },
        {
            "brand": "SURFINE",
            "translate": "крем сюрфАйн",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Surfine.wav",
            "onSale": "true"
        },
        {
            "brand": "VERNIS RIFE",
            "translate": "вернИ райф",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "Vernis Rife.wav",
            "onSale": "true"
        },
        {
            "brand": "4CCCCEES",
            "translate": "форсИс",
            "gamma": "Средневысокая",
            "country": "Великобритания",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "ADIEU PARIS",
            "translate": "адьЁ парИ",
            "gamma": "Премиальная",
            "country": "Франция",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "ALLUSION",
            "translate": "алЮжн",
            "gamma": "Средняя",
            "country": "Италия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "CAMPER",
            "translate": "кЭмпер",
            "gamma": "Средняя",
            "country": "Испания",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "CAPRICE",
            "translate": "капрИс",
            "gamma": "Средняя",
            "country": "Германия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "CONVERSE",
            "translate": "кОнверс",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "COUSTILLERES",
            "translate": "кустийЕр",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "DC SHOES",
            "translate": "диси шУз",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "Dr. Martens",
            "translate": "дОктор мАртинс",
            "gamma": "Средняя",
            "country": "Великобритания",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "DRAGON",
            "translate": "дрЭгон",
            "gamma": "Средняя",
            "country": "Бельгия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "F_WD",
            "translate": "фОрвард",
            "gamma": "Премиальная",
            "country": "США",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "GIRLS POWER",
            "translate": "гёлз пАуэр",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "GLOVE.ME",
            "translate": "глАв ми",
            "gamma": "Средняя",
            "country": "Россия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "GUESS",
            "translate": "гЭс",
            "gamma": "Средняя",
            "country": "США",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "HAPPY STEP",
            "translate": "хэпи стЭп",
            "gamma": "Средняя",
            "country": "Россия",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "JUMP",
            "translate": "джАмп",
            "gamma": "Средняя",
            "country": "Франция",
            "audioLink": "",
            "onSale": "true"
        },
        {
            "brand": "",
            "translate": "",
            "gamma": "",
            "country": "",
            "audioLink": "",
            "onSale": ""
        },
        {
            "brand": "",
            "translate": "",
            "gamma": "",
            "country": "",
            "audioLink": "",
            "onSale": ""
        },
        {
            "brand": "",
            "translate": "",
            "gamma": "",
            "country": "",
            "audioLink": "",
            "onSale": ""
        },
        {
            "brand": "",
            "translate": "",
            "gamma": "",
            "country": "",
            "audioLink": "",
            "onSale": ""
        },
        {
            "brand": "",
            "translate": "",
            "gamma": "",
            "country": "",
            "audioLink": "",
            "onSale": ""
        }
    ]
}

const letters = ['А-Я', '0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
]
const cardList = document.querySelector('.cardList');
const letterList = document.querySelector('.filter-bar__letter-list');
const countryList = document.querySelector('.filter-bar__drop-down-list_country');
const gammaList = document.querySelector('.filter-bar__drop-down-list_gamma');
const templateCard = document.querySelector('.templateCard').content;
const templateCardId = document.getElementById('templateCardId').content; // по ид
const templateLetter = document.querySelector('.templateLetter').content;
const templateLetterId = document.getElementById('templateLetterId').content; // по ид
const templateCountry = document.querySelector('.templateCountry').content;
const filterButton = document.querySelectorAll('.filter-bar__button-check');
const brendsDate = Array.prototype.slice.call(data.brands);
// const brendsDate = Array.from(data.brands);
const allFirstLettersBrends = (brendsDate.map(function (item) {
    return (item.brand.charAt(0))
}));
const regExpRu = /[а-я А-Я]/;
const regExpNum = /[0-9]/;
const audioPleer = document.querySelector('.audioPleer')

// функция работы в ИЕ


// Рендер аудио
function audioClick(evt) {
    const button = evt.target.closest('.card__play-button')
    const link = './pronounce/' + button.getAttribute("audioLink")
    audioPleer.src = link
    audioPleer.play()
}

function renderAudio(elem, dataAudio) {
    const renderButton = elem.innerHTML
    let newButton = {}
    if (dataAudio) {
        newButton = renderButton + ' <span class="card__play-icon_active">&#9658</span>'
        elem.setAttribute("audioLink", dataAudio)
        elem.addEventListener('click', audioClick)
    } else {
        newButton = renderButton + ' <span class="card__play-icon_disactive">&#9658</span>'
        elem.disabled = true
    }

    return elem.innerHTML = newButton
}
// подцветка букв транскрипции
function changeLatters(element) {
    const newWorld = element.innerHTML = element.innerHTML.replace(/[А-ЯЁ]/g, function (match) {
        return "<span class='red-letter'>" + match.toLowerCase() + "</span>"
    })
    return newWorld
}
// затенение отсутствующих брендов
function testBrend(elem) {
    if (/[а-я]/i.test(elem)) {
        return (regExpRu.exec(allFirstLettersBrends)) ? true : false
    } else if (/[0-9]/i.test(elem)) {
        return (regExpNum.exec(allFirstLettersBrends)) ? true : false
    } else {
        return allFirstLettersBrends.some(function (letter) {
            return letter === elem
        })
    }
}
// Что именно отрисовываем на странице по буквам
function requestLetter(letter) {
    const arrayFromLetter = brendsDate.filter(function (item, index, array) {
        if (/[а-я]/i.test(letter)) {
            if (regExpRu.exec((item.brand).charAt(0))) {
                return array[index]
            }
        } else if (/[0-9]/i.test(letter)) {
            if (regExpNum.exec((item.brand).charAt(0))) {
                return array[index]
            }
        } else {
            if ((item.brand).charAt(0) === letter) {
                return array[index]
            }
        }
    })
    renderCard(arrayFromLetter)
}
// Отрисовываем по стране
function requestCountry(country) {
    const arrayFromCountry = brendsDate.filter(function (item, index, array) {
        if (item.country === country) {
            return array[index]
        }
    })
    renderCard(arrayFromCountry)
}
// Отрисовываем по гамме
function requestGamma(gamma) {
    const arrayFromGamma = brendsDate.filter(function (item, index, array) {
        if (item.gamma === gamma) {
            return array[index]
        }
    })
    renderCard(arrayFromGamma)
}
// поиск стран в JSON
function getCountry(array) {
    // return [...new Set(array.map(function (item) {
    //     return item.country
    // }))];
    var resArr = [];
    array.filter(function (item) {
        var i = resArr.findIndex(function (x) {
            return (x.country === item.country)
        });
        if (i <= -1) {
            resArr.push(item);
        }
        return null;
    });
    const elements = resArr.map(function (elem) {
        return elem.country
    })
    return elements
}


// поиск гамм в JSON
function getGamma(array) {
    // return [...new Set(array.map(function (item) {
    //     return item.gamma
    // }))];
    var resArr = [];
    array.filter(function (item) {
        var i = resArr.findIndex(function (x) {
            return (x.gamma === item.gamma)
        });
        if (i <= -1) {
            resArr.push(item);
        }
        return null;
    });
    const elements = resArr.map(function (elem) {
        return elem.gamma
    })
    return elements
}
// создание клона для карточек
function getCloneCard() {
    const clone = templateCardId.cloneNode(true);
    const elem = clone.querySelector('.card');
    return elem
}

// Отрисовка карточек
function renderCard(filterArray) {
    cardList.innerHTML = '';
    filterArray.forEach(function (elem) {
        const cloneElem = getCloneCard(elem);
        const brand = cloneElem.querySelector('.card__title');
        const transcript = cloneElem.querySelector('.card__play-button');
        const gamma = cloneElem.querySelector('.card__gamma-value');
        const elemCountry = cloneElem.querySelector('.card__country-value');
        brand.textContent = elem.brand
        transcript.textContent = elem.translate
        gamma.textContent = elem.gamma
        elemCountry.textContent = elem.country
        changeLatters(transcript)
        renderAudio(transcript, elem.audioLink)
        cardList.appendChild(cloneElem)
    });
}
// Отрисовка букв
function renderLetter() {
    letters.forEach(function (elem) {
        const disActiveElem = testBrend(elem)
        console.log(templateLetterId)
        const clone = templateLetterId.cloneNode(true);
        const elemLetter = clone.querySelector('.filter-bar__letter-item')
        const element = elemLetter.querySelector('.filter-bar__button')
        element.textContent = elem
        if (!disActiveElem) {
            element.classList.add('filter-bar__button_disactive')
            element.disabled = true
        }
        element.addEventListener('click', function (evt) {
            requestLetter(evt.target.textContent)
        })
        letterList.appendChild(elemLetter)
    })
}
// Отрисовка списка стран в фильтре
function renderCountries() {
    const uniqueCountries = getCountry(brendsDate);
    uniqueCountries.forEach(function (country) {
        const countryClone = templateCountry.cloneNode(true).querySelector(
            '.filter-bar__drop-down-item');
        countryClone.textContent = country;
        countryClone.addEventListener('click', function (evt) {
            requestCountry(evt.target.textContent)
        })
        countryList.appendChild(countryClone);
    })
}
// Отрисовка списка гаммм
function rendergamms() {
    const uniqueGamma = getGamma(brendsDate);
    uniqueGamma.forEach(function (gamma) {
        const gammaClone = templateCountry.cloneNode(true).querySelector('.filter-bar__drop-down-item');
        gammaClone.textContent = gamma;
        gammaClone.addEventListener('click', function (evt) {
            requestGamma(evt.target.textContent)
        })
        gammaList.appendChild(gammaClone);
    })
}

// Закрытие фильтров
function closeMenu(elemFiltr) {
    const testElem = document.querySelector('.filter-bar__drop-down-panel_active')
    document.addEventListener('click', close)

    function close(evt) {
        if (elemFiltr !== evt.target.nextElementSibling || (elemFiltr === evt.target.nextElementSibling && (
                testElem))) {
            elemFiltr.classList.remove('filter-bar__drop-down-panel_active');
            document.removeEventListener('click', close);
            if (testElem !== elemFiltr && (evt.target.classList.contains('filter-bar__button-check'))) {
                openList(evt)
            }
        }
    }
}

// Открытие фильтров
function openList(evt) {
    const openFilter = evt.target.nextElementSibling;
    closeMenu(openFilter)
    // console.log(openFilter)
    openFilter.classList.add('filter-bar__drop-down-panel_active');
}

// прослушивание кнопок фильтров
const filtButtonArr = Array.prototype.slice.call(filterButton);
filtButtonArr.forEach(function (button) {
    button.addEventListener('click', openList)
})

renderLetter();
renderCountries();
rendergamms();
requestLetter('A');



// 
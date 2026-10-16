(function () {
    document.addEventListener('keydown', function (e) {
        const key = e.key.toUpperCase();
        if (key === 'F12' ||
            (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) ||
            (e.ctrlKey && key === 'U') ||
            (e.ctrlKey && key === 'S')) {
            e.preventDefault();
            e.stopPropagation();
            showToast('⛔ Blocked!');
            return false;
        }
    }, true);
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => { if (e.target.tagName !== 'INPUT') e.preventDefault(); });
    document.addEventListener('selectstart', e => {
        const tag = e.target.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') e.preventDefault();
    });
})();

const rawElements = `
1|H|Hydrogen|Hiđro|Hidrógeno|Hidrogênio|Hydrogène|1.008|nonmetal|1|1
2|He|Helium|Heli|Helio|Hélio|Hélium|4.0026|noble|1|18
3|Li|Lithium|Liti|Litio|Lítio|Lithium|6.94|alkali|2|1
4|Be|Beryllium|Beri|Berilio|Berílio|Béryllium|9.0122|alkaline|2|2
5|B|Boron|Bo|Boro|Boro|Bore|10.81|metalloid|2|13
6|C|Carbon|Cacbon|Carbono|Carbono|Carbone|12.011|nonmetal|2|14
7|N|Nitrogen|Nitơ|Nitrógeno|Nitrogênio|Azote|14.007|nonmetal|2|15
8|O|Oxygen|Oxy|Oxígeno|Oxigênio|Oxygène|15.999|nonmetal|2|16
9|F|Fluorine|Flo|Flúor|Flúor|Fluor|18.998|halogen|2|17
10|Ne|Neon|Neon|Neón|Neônio|Néon|20.180|noble|2|18
11|Na|Sodium|Natri|Sodio|Sódio|Sodium|22.990|alkali|3|1
12|Mg|Magnesium|Magie|Magnesio|Magnésio|Magnésium|24.305|alkaline|3|2
13|Al|Aluminium|Nhôm|Aluminio|Alumínio|Aluminium|26.982|post|3|13
14|Si|Silicon|Silic|Silicio|Silício|Silicium|28.085|metalloid|3|14
15|P|Phosphorus|Photpho|Fósforo|Fósforo|Phosphore|30.974|nonmetal|3|15
16|S|Sulfur|Lưu huỳnh|Azufre|Enxofre|Soufre|32.06|nonmetal|3|16
17|Cl|Chlorine|Clo|Cloro|Cloro|Chlore|35.45|halogen|3|17
18|Ar|Argon|Argon|Argón|Argônio|Argon|39.948|noble|3|18
19|K|Potassium|Kali|Potasio|Potássio|Potassium|39.098|alkali|4|1
20|Ca|Calcium|Canxi|Calcio|Cálcio|Calcium|40.078|alkaline|4|2
21|Sc|Scandium|Scandi|Escandio|Escândio|Scandium|44.956|transition|4|3
22|Ti|Titanium|Titan|Titanio|Titânio|Titane|47.867|transition|4|4
23|V|Vanadium|Vanadi|Vanadio|Vanádio|Vanadium|50.942|transition|4|5
24|Cr|Chromium|Crom|Cromo|Cromo|Chrome|51.996|transition|4|6
25|Mn|Manganese|Mangan|Manganeso|Manganês|Manganèse|54.938|transition|4|7
26|Fe|Iron|Sắt|Hierro|Ferro|Fer|55.845|transition|4|8
27|Co|Cobalt|Coban|Cobalto|Cobalto|Cobalt|58.933|transition|4|9
28|Ni|Nickel|Niken|Níquel|Níquel|Nickel|58.693|transition|4|10
29|Cu|Copper|Đồng|Cobre|Cobre|Cuivre|63.546|transition|4|11
30|Zn|Zinc|Kẽm|Zinc|Zinco|Zinc|65.38|transition|4|12
31|Ga|Gallium|Gali|Galio|Gálio|Gallium|69.723|post|4|13
32|Ge|Germanium|Germani|Germanio|Germânio|Germanium|72.630|metalloid|4|14
33|As|Arsenic|Asen|Arsénico|Arsênio|Arsenic|74.922|metalloid|4|15
34|Se|Selenium|Selen|Selenio|Selênio|Sélénium|78.971|nonmetal|4|16
35|Br|Bromine|Brom|Bromo|Bromo|Brome|79.904|halogen|4|17
36|Kr|Krypton|Krypton|Criptón|Criptônio|Krypton|83.798|noble|4|18
37|Rb|Rubidium|Rubidi|Rubidio|Rubídio|Rubidium|85.468|alkali|5|1
38|Sr|Strontium|Stronti|Estroncio|Estrôncio|Strontium|87.62|alkaline|5|2
39|Y|Yttrium|Ytri|Itrio|Ítrio|Yttrium|88.906|transition|5|3
40|Zr|Zirconium|Zirconi|Zirconio|Zircônio|Zirconium|91.224|transition|5|4
41|Nb|Niobium|Niobi|Niobio|Nióbio|Niobium|92.906|transition|5|5
42|Mo|Molybdenum|Molypden|Molibdeno|Molibdênio|Molybdène|95.95|transition|5|6
43|Tc|Technetium|Techneti|Tecnecio|Tecnécio|Technétium|98|transition|5|7
44|Ru|Ruthenium|Rutheni|Rutenio|Rutênio|Ruthénium|101.07|transition|5|8
45|Rh|Rhodium|Rhodi|Rodio|Ródio|Rhodium|102.91|transition|5|9
46|Pd|Palladium|Paladi|Paladio|Paládio|Palladium|106.42|transition|5|10
47|Ag|Silver|Bạc|Plata|Prata|Argent|107.87|transition|5|11
48|Cd|Cadmium|Cadmi|Cadmio|Cádmio|Cadmium|112.41|transition|5|12
49|In|Indium|Indi|Indio|Índio|Indium|114.82|post|5|13
50|Sn|Tin|Thiếc|Estaño|Estanho|Étain|118.71|post|5|14
51|Sb|Antimony|Antimon|Antimonio|Antimônio|Antimoine|121.76|metalloid|5|15
52|Te|Tellurium|Telua|Telurio|Telúrio|Tellure|127.60|metalloid|5|16
53|I|Iodine|Iot|Yodo|Iodo|Iode|126.90|halogen|5|17
54|Xe|Xenon|Xenon|Xenón|Xenônio|Xénon|131.29|noble|5|18
55|Cs|Caesium|Xesi|Cesio|Césio|Césium|132.91|alkali|6|1
56|Ba|Barium|Bari|Bario|Bário|Baryum|137.33|alkaline|6|2
57|La|Lanthanum|Lantan|Lantano|Lantânio|Lanthane|138.91|lanthanide|6|3
58|Ce|Cerium|Xeri|Cerio|Cério|Cérium|140.12|lanthanide|6|4
59|Pr|Praseodymium|Praseodym|Praseodimio|Praseodímio|Praséodyme|140.91|lanthanide|6|5
60|Nd|Neodymium|Neodym|Neodimio|Neodímio|Néodyme|144.24|lanthanide|6|6
61|Pm|Promethium|Promethi|Prometio|Promécio|Prométhium|145|lanthanide|6|7
62|Sm|Samarium|Samari|Samario|Samário|Samarium|150.36|lanthanide|6|8
63|Eu|Europium|Europi|Europio|Európio|Europium|151.96|lanthanide|6|9
64|Gd|Gadolinium|Gadolini|Gadolinio|Gadolínio|Gadolinium|157.25|lanthanide|6|10
65|Tb|Terbium|Terbi|Terbio|Térbio|Terbium|158.93|lanthanide|6|11
66|Dy|Dysprosium|Dysprosi|Disprosio|Disprósio|Dysprosium|162.50|lanthanide|6|12
67|Ho|Holmium|Holmi|Holmio|Hólmio|Holmium|164.93|lanthanide|6|13
68|Er|Erbium|Erbi|Erbio|Érbio|Erbium|167.26|lanthanide|6|14
69|Tm|Thulium|Thuli|Tulio|Túlio|Thulium|168.93|lanthanide|6|15
70|Yb|Ytterbium|Ytterbi|Iterbio|Itérbio|Ytterbium|173.05|lanthanide|6|16
71|Lu|Lutetium|Luteti|Lutecio|Lutécio|Lutécium|174.97|lanthanide|6|17
72|Hf|Hafnium|Hafni|Hafnio|Háfnio|Hafnium|178.49|transition|6|4
73|Ta|Tantalum|Tantal|Tántalo|Tântalo|Tantale|180.95|transition|6|5
74|W|Tungsten|Vonfram|Tungsteno|Tungstênio|Tungstène|183.84|transition|6|6
75|Re|Rhenium|Rheni|Renio|Rênio|Rhénium|186.21|transition|6|7
76|Os|Osmium|Osmium|Osmio|Ósmio|Osmium|190.23|transition|6|8
77|Ir|Iridium|Iridi|Iridio|Irídio|Iridium|192.22|transition|6|9
78|Pt|Platinum|Bạch kim|Platino|Platina|Platine|195.08|transition|6|10
79|Au|Gold|Vàng|Oro|Ouro|Or|196.97|transition|6|11
80|Hg|Mercury|Thủy ngân|Mercurio|Mercúrio|Mercure|200.59|transition|6|12
81|Tl|Thallium|Tali|Talio|Tálio|Thallium|204.38|post|6|13
82|Pb|Lead|Chì|Plomo|Chumbo|Plomb|207.2|post|6|14
83|Bi|Bismuth|Bitmut|Bismuto|Bismuto|Bismuth|208.98|post|6|15
84|Po|Polonium|Poloni|Polonio|Polônio|Polonium|209|post|6|16
85|At|Astatine|Astatin|Astato|Astato|Astate|210|halogen|6|17
86|Rn|Radon|Radon|Radón|Radônio|Radon|222|noble|6|18
87|Fr|Francium|Franxi|Francio|Frâncio|Francium|223|alkali|7|1
88|Ra|Radium|Radi|Radio|Rádio|Radium|226|alkaline|7|2
89|Ac|Actinium|Actini|Actinio|Actínio|Actinium|227|actinide|7|3
90|Th|Thorium|Thori|Torio|Tório|Thorium|232.04|actinide|7|4
91|Pa|Protactinium|Protactini|Protactinio|Protactínio|Protactinium|231.04|actinide|7|5
92|U|Uranium|Urani|Uranio|Urânio|Uranium|238.03|actinide|7|6
93|Np|Neptunium|Neptuni|Neptunio|Netúnio|Neptunium|237|actinide|7|7
94|Pu|Plutonium|Plutoni|Plutonio|Plutônio|Plutonium|244|actinide|7|8
95|Am|Americium|Americi|Americio|Amerício|Américium|243|actinide|7|9
96|Cm|Curium|Curi|Curio|Cúrio|Curium|247|actinide|7|10
97|Bk|Berkelium|Berkeli|Berkelio|Berquélio|Berkélium|247|actinide|7|11
98|Cf|Californium|Californi|Californio|Califórnio|Californium|251|actinide|7|12
99|Es|Einsteinium|Einsteini|Einstenio|Einstênio|Einsteinium|252|actinide|7|13
100|Fm|Fermium|Fermi|Fermio|Férmio|Fermium|257|actinide|7|14
101|Md|Mendelevium|Mendelevi|Mendelevio|Mendelévio|Mendélévium|258|actinide|7|15
102|No|Nobelium|Nobeli|Nobelio|Nobélio|Nobélium|259|actinide|7|16
103|Lr|Lawrencium|Lawrenci|Laurencio|Laurêncio|Lawrencium|266|actinide|7|17
104|Rf|Rutherfordium|Rutherfordi|Rutherfordio|Rutherfórdio|Rutherfordium|267|transition|7|4
105|Db|Dubnium|Dubni|Dubnio|Dúbnio|Dubnium|268|transition|7|5
106|Sg|Seaborgium|Seaborgi|Seaborgio|Seabórgio|Seaborgium|269|transition|7|6
107|Bh|Bohrium|Bohri|Bohrio|Bóhrio|Bohrium|270|transition|7|7
108|Hs|Hassium|Hassi|Hassio|Hássio|Hassium|269|transition|7|8
109|Mt|Meitnerium|Meitneri|Meitnerio|Meitnério|Meitnerium|278|transition|7|9
110|Ds|Darmstadtium|Darmstadti|Darmstadtio|Darmstádtio|Darmstadtium|281|transition|7|10
111|Rg|Roentgenium|Roentgeni|Roentgenio|Roentgênio|Roentgenium|282|transition|7|11
112|Cn|Copernicium|Copernici|Copernicio|Copernício|Copernicium|285|transition|7|12
113|Nh|Nihonium|Nihoni|Nihonio|Nihônio|Nihonium|286|post|7|13
114|Fl|Flerovium|Flerovi|Flerovio|Fleróvio|Flérovium|289|post|7|14
115|Mc|Moscovium|Moscovi|Moscovio|Moscóvio|Moscovium|290|post|7|15
116|Lv|Livermorium|Livermori|Livermorio|Livermório|Livermorium|293|post|7|16
117|Ts|Tennessine|Tennessine|Tennessine|Tennessino|Tennessine|294|halogen|7|17
118|Og|Oganesson|Oganesson|Oganesón|Oganessônio|Oganesson|294|noble|7|18
`;

const categories = {
    alkali:     { name: { vi: "Kim loại kiềm",            en: "Alkali Metals",           es: "Metales alcalinos",           pt: "Metais alcalinos",           fr: "Métaux alcalins" },            css: "category-alkali",     color: "#ffd6e0", metal: true  },
    alkaline:   { name: { vi: "Kim loại kiềm thổ",        en: "Alkaline Earth Metals",   es: "Alcalinotérreos",             pt: "Metais alcalinoterrosos",    fr: "Métaux alcalino-terreux" },    css: "category-alkaline",   color: "#ffe4c7", metal: true  },
    transition: { name: { vi: "Kim loại chuyển tiếp",     en: "Transition Metals",       es: "Metales de transición",       pt: "Metais de transição",        fr: "Métaux de transition" },       css: "category-transition", color: "#fff2c4", metal: true  },
    post:       { name: { vi: "Kim loại hậu chuyển tiếp", en: "Post-transition Metals",  es: "Metales post-transición",     pt: "Metais pós-transição",       fr: "Métaux pauvres" },             css: "category-post",       color: "#d4f0e4", metal: true  },
    metalloid:  { name: { vi: "Á kim",                    en: "Metalloids",              es: "Metaloides",                  pt: "Metaloides",                 fr: "Métalloïdes" },                css: "category-metalloid",  color: "#d1eff0", metal: false },
    nonmetal:   { name: { vi: "Phi kim",                  en: "Other Nonmetals",         es: "No metales",                  pt: "Não metais",                 fr: "Non-métaux" },                 css: "category-nonmetal",   color: "#d6e6ff", metal: false },
    halogen:    { name: { vi: "Halogen",                  en: "Halogens",                es: "Halógenos",                   pt: "Halogênios",                 fr: "Halogènes" },                  css: "category-halogen",    color: "#e5d9ff", metal: false },
    noble:      { name: { vi: "Khí hiếm",                 en: "Noble Gases",             es: "Gases nobles",                pt: "Gases nobres",               fr: "Gaz nobles" },                 css: "category-noble",      color: "#fbd9f0", metal: false },
    lanthanide: { name: { vi: "Họ Lantan",                en: "Lanthanides",             es: "Lantánidos",                  pt: "Lantanídeos",                fr: "Lanthanides" },                css: "category-lanthanide", color: "#d6e8ff", metal: true  },
    actinide:   { name: { vi: "Họ Actini",                en: "Actinides",               es: "Actínidos",                   pt: "Actinídeos",                 fr: "Actinides" },                  css: "category-actinide",   color: "#dcf0d0", metal: true  }
};

const translations = {
    vi: {
        langPrompt: "Chọn ngôn ngữ để bắt đầu",
        title: "Bảng Tuần Hoàn", subtitle: "Khám phá các nguyên tố của vũ trụ.",
        searchPlaceholder: "Tìm theo tên, ký hiệu hoặc số hiệu... ( / )",
        allCategories: "Tất cả nhóm",
        hideNames: "Ẩn tên", showNames: "Hiện tên",
        hideMass: "Ẩn KL", showMass: "Hiện KL",
        metals: "Kim loại", nonmetals: "Phi kim",
        favorites: "Yêu thích", quiz: "Trắc nghiệm", reset: "Đặt lại",
        exploreElements: "Khám phá nguyên tố", clickToView: "Ấn vào nguyên tố để xem thông tin.",
        lanthanides: "Họ Lantan", actinides: "Họ Actini",
        categories: "Nhóm nguyên tố", clickCategory: "Ấn vào nhóm để nhấn mạnh.",
        explorer: "Khám phá bảng tuần hoàn",
        explorerDesc: "Tìm kiếm nguyên tố, khám phá nhóm hóa học và tìm hiểu thông tin nguyên tử.",
        matching: "Đang hiển thị", groups: "Nhóm", periods: "Chu kỳ",
        recentlyViewed: "Đã xem gần đây", noHistory: "Chưa xem nguyên tố nào",
        joinDiscord: "Tham gia Discord", chillMusic: "Nhạc Chill",
        chillDesc: "Nghe nhạc thư giãn khi khám phá nguyên tố.",
        play: "Phát", pause: "Tạm dừng", stop: "Dừng", shuffle: "Ngẫu nhiên",
        musicNote: "Nguồn: YouTube · Lofi Girl",
        madeWith: "Làm với", forCurious: "cho những bộ óc tò mò.",
        discordCommunity: "Cộng đồng Discord",
        elementInfo: "THÔNG TIN NGUYÊN TỐ",
        atomicNumber: "Số hiệu nguyên tử", atomicMass: "Khối lượng nguyên tử",
        category: "Nhóm", period: "Chu kỳ", group: "Nhóm", chemicalSymbol: "Ký hiệu hóa học",
        compare: "So sánh", done: "Xong",
        quizLabel: "TRẮC NGHIỆM HÓA HỌC",
        compareLabel: "SO SÁNH NGUYÊN TỐ",
        favoritesLabel: "NGUYÊN TỐ YÊU THÍCH",
        noFavorites: "Chưa có nguyên tố yêu thích nào.",
        score: "Điểm",
        correct: "✅ Chính xác!", wrong: "❌ Sai! Đáp án:",
        whatSymbol: "Ký hiệu của <strong>{name}</strong> là gì?",
        whatName: "Nguyên tố nào có ký hiệu <strong>{symbol}</strong>?",
        whatNumber: "Số hiệu của <strong>{name}</strong> là bao nhiêu?",
        addedFav: "⭐ Đã thêm vào yêu thích", removedFav: "Đã xóa khỏi yêu thích",
        allElements: "Tất cả nhóm", selected: "đã chọn",
        highlightMetals: "Đã nhấn mạnh kim loại", highlightNonmetals: "Đã nhấn mạnh phi kim",
        cleared: "Đã bỏ nhấn mạnh", resetDone: "Đã đặt lại bảng tuần hoàn",
        namesShown: "Đã hiện tên", namesHidden: "Đã ẩn tên",
        massShown: "Đã hiện khối lượng", massHidden: "Đã ẩn khối lượng",
        darkMode: "🌙 Chế độ tối", lightMode: "☀️ Chế độ sáng",
        musicPaused: "Đã tạm dừng nhạc", musicStopped: "Đã dừng nhạc",
        elements: "nguyên tố"
    },
    en: {
        langPrompt: "Select a language to get started",
        title: "Periodic Table", subtitle: "Discover the elements of the universe.",
        searchPlaceholder: "Search by name, symbol or atomic number... ( / )",
        allCategories: "All Categories",
        hideNames: "Hide Names", showNames: "Show Names",
        hideMass: "Hide Mass", showMass: "Show Mass",
        metals: "Metals", nonmetals: "Nonmetals",
        favorites: "Favorites", quiz: "Quiz", reset: "Reset",
        exploreElements: "Explore Elements", clickToView: "Select any element to view its information.",
        lanthanides: "Lanthanides", actinides: "Actinides",
        categories: "Element Categories", clickCategory: "Click a category to highlight its elements.",
        explorer: "Periodic Table Explorer",
        explorerDesc: "Search for elements, explore chemical categories, and discover atomic information.",
        matching: "Matching", groups: "Groups", periods: "Periods",
        recentlyViewed: "Recently Viewed", noHistory: "No elements viewed yet",
        joinDiscord: "Join Our Discord", chillMusic: "Chill Music",
        chillDesc: "Listen to relaxing music while exploring the elements.",
        play: "Play", pause: "Pause", stop: "Stop", shuffle: "Shuffle",
        musicNote: "Music source: YouTube · Lofi Girl",
        madeWith: "Made with", forCurious: "for curious minds.",
        discordCommunity: "Discord Community",
        elementInfo: "ELEMENT INFORMATION",
        atomicNumber: "Atomic Number", atomicMass: "Atomic Mass",
        category: "Category", period: "Period", group: "Group", chemicalSymbol: "Chemical Symbol",
        compare: "Compare", done: "Done",
        quizLabel: "CHEMISTRY QUIZ",
        compareLabel: "COMPARE ELEMENTS",
        favoritesLabel: "MY FAVORITES",
        noFavorites: "No favorite elements yet.",
        score: "Score",
        correct: "✅ Correct!", wrong: "❌ Wrong! Answer:",
        whatSymbol: "What is the chemical symbol of <strong>{name}</strong>?",
        whatName: "Which element has the symbol <strong>{symbol}</strong>?",
        whatNumber: "What is the atomic number of <strong>{name}</strong>?",
        addedFav: "⭐ Added to favorites", removedFav: "Removed from favorites",
        allElements: "All categories", selected: "selected",
        highlightMetals: "Metal elements highlighted", highlightNonmetals: "Nonmetal elements highlighted",
        cleared: "Highlight cleared", resetDone: "Periodic table has been reset",
        namesShown: "Element names shown", namesHidden: "Element names hidden",
        massShown: "Mass shown", massHidden: "Mass hidden",
        darkMode: "🌙 Dark mode", lightMode: "☀️ Light mode",
        musicPaused: "Music paused", musicStopped: "Music stopped",
        elements: "elements"
    },
    es: {
        langPrompt: "Selecciona un idioma para comenzar",
        title: "Tabla Periódica", subtitle: "Descubre los elementos del universo.",
        searchPlaceholder: "Buscar por nombre, símbolo o número... ( / )",
        allCategories: "Todas las categorías",
        hideNames: "Ocultar nombres", showNames: "Mostrar nombres",
        hideMass: "Ocultar masa", showMass: "Mostrar masa",
        metals: "Metales", nonmetals: "No metales",
        favorites: "Favoritos", quiz: "Cuestionario", reset: "Reiniciar",
        exploreElements: "Explorar elementos", clickToView: "Selecciona un elemento para ver su información.",
        lanthanides: "Lantánidos", actinides: "Actínidos",
        categories: "Categorías de elementos", clickCategory: "Haz clic en una categoría para resaltarla.",
        explorer: "Explorador de la tabla periódica",
        explorerDesc: "Busca elementos, explora categorías químicas y descubre información atómica.",
        matching: "Coincidentes", groups: "Grupos", periods: "Períodos",
        recentlyViewed: "Vistos recientemente", noHistory: "Ningún elemento visto aún",
        joinDiscord: "Únete a Discord", chillMusic: "Música Chill",
        chillDesc: "Escucha música relajante mientras exploras los elementos.",
        play: "Reproducir", pause: "Pausar", stop: "Detener", shuffle: "Aleatorio",
        musicNote: "Fuente: YouTube · Lofi Girl",
        madeWith: "Hecho con", forCurious: "para mentes curiosas.",
        discordCommunity: "Comunidad de Discord",
        elementInfo: "INFORMACIÓN DEL ELEMENTO",
        atomicNumber: "Número atómico", atomicMass: "Masa atómica",
        category: "Categoría", period: "Período", group: "Grupo", chemicalSymbol: "Símbolo químico",
        compare: "Comparar", done: "Listo",
        quizLabel: "CUESTIONARIO DE QUÍMICA",
        compareLabel: "COMPARAR ELEMENTOS",
        favoritesLabel: "MIS FAVORITOS",
        noFavorites: "Aún no hay elementos favoritos.",
        score: "Puntuación",
        correct: "✅ ¡Correcto!", wrong: "❌ ¡Incorrecto! Respuesta:",
        whatSymbol: "¿Cuál es el símbolo químico de <strong>{name}</strong>?",
        whatName: "¿Qué elemento tiene el símbolo <strong>{symbol}</strong>?",
        whatNumber: "¿Cuál es el número atómico de <strong>{name}</strong>?",
        addedFav: "⭐ Añadido a favoritos", removedFav: "Eliminado de favoritos",
        allElements: "Todas las categorías", selected: "seleccionado",
        highlightMetals: "Metales resaltados", highlightNonmetals: "No metales resaltados",
        cleared: "Resaltado eliminado", resetDone: "Tabla periódica reiniciada",
        namesShown: "Nombres mostrados", namesHidden: "Nombres ocultos",
        massShown: "Masa mostrada", massHidden: "Masa oculta",
        darkMode: "🌙 Modo oscuro", lightMode: "☀️ Modo claro",
        musicPaused: "Música pausada", musicStopped: "Música detenida",
        elements: "elementos"
    },
    pt: {
        langPrompt: "Selecione um idioma para começar",
        title: "Tabela Periódica", subtitle: "Descubra os elementos do universo.",
        searchPlaceholder: "Buscar por nome, símbolo ou número... ( / )",
        allCategories: "Todas as categorias",
        hideNames: "Ocultar nomes", showNames: "Mostrar nomes",
        hideMass: "Ocultar massa", showMass: "Mostrar massa",
        metals: "Metais", nonmetals: "Não metais",
        favorites: "Favoritos", quiz: "Quiz", reset: "Redefinir",
        exploreElements: "Explorar elementos", clickToView: "Selecione um elemento para ver suas informações.",
        lanthanides: "Lantanídeos", actinides: "Actinídeos",
        categories: "Categorias de elementos", clickCategory: "Clique em uma categoria para destacá-la.",
        explorer: "Explorador da tabela periódica",
        explorerDesc: "Pesquise elementos, explore categorias químicas e descubra informações atômicas.",
        matching: "Correspondentes", groups: "Grupos", periods: "Períodos",
        recentlyViewed: "Vistos recentemente", noHistory: "Nenhum elemento visto ainda",
        joinDiscord: "Entre no Discord", chillMusic: "Música Chill",
        chillDesc: "Ouça música relaxante enquanto explora os elementos.",
        play: "Reproduzir", pause: "Pausar", stop: "Parar", shuffle: "Aleatório",
        musicNote: "Fonte: YouTube · Lofi Girl",
        madeWith: "Feito com", forCurious: "para mentes curiosas.",
        discordCommunity: "Comunidade do Discord",
        elementInfo: "INFORMAÇÕES DO ELEMENTO",
        atomicNumber: "Número atômico", atomicMass: "Massa atômica",
        category: "Categoria", period: "Período", group: "Grupo", chemicalSymbol: "Símbolo químico",
        compare: "Comparar", done: "Concluído",
        quizLabel: "QUIZ DE QUÍMICA",
        compareLabel: "COMPARAR ELEMENTOS",
        favoritesLabel: "MEUS FAVORITOS",
        noFavorites: "Nenhum elemento favorito ainda.",
        score: "Pontuação",
        correct: "✅ Correto!", wrong: "❌ Errado! Resposta:",
        whatSymbol: "Qual é o símbolo químico de <strong>{name}</strong>?",
        whatName: "Qual elemento tem o símbolo <strong>{symbol}</strong>?",
        whatNumber: "Qual é o número atômico de <strong>{name}</strong>?",
        addedFav: "⭐ Adicionado aos favoritos", removedFav: "Removido dos favoritos",
        allElements: "Todas as categorias", selected: "selecionado",
        highlightMetals: "Metais destacados", highlightNonmetals: "Não metais destacados",
        cleared: "Destaque removido", resetDone: "Tabela periódica redefinida",
        namesShown: "Nomes exibidos", namesHidden: "Nomes ocultos",
        massShown: "Massa exibida", massHidden: "Massa oculta",
        darkMode: "🌙 Modo escuro", lightMode: "☀️ Modo claro",
        musicPaused: "Música pausada", musicStopped: "Música parada",
        elements: "elementos"
    },
    fr: {
        langPrompt: "Sélectionnez une langue pour commencer",
        title: "Tableau Périodique", subtitle: "Découvrez les éléments de l'univers.",
        searchPlaceholder: "Rechercher par nom, symbole ou numéro... ( / )",
        allCategories: "Toutes les catégories",
        hideNames: "Masquer les noms", showNames: "Afficher les noms",
        hideMass: "Masquer la masse", showMass: "Afficher la masse",
        metals: "Métaux", nonmetals: "Non-métaux",
        favorites: "Favoris", quiz: "Quiz", reset: "Réinitialiser",
        exploreElements: "Explorer les éléments", clickToView: "Sélectionnez un élément pour voir ses informations.",
        lanthanides: "Lanthanides", actinides: "Actinides",
        categories: "Catégories d'éléments", clickCategory: "Cliquez sur une catégorie pour la mettre en évidence.",
        explorer: "Explorateur du tableau périodique",
        explorerDesc: "Recherchez des éléments, explorez les catégories chimiques et découvrez les informations atomiques.",
        matching: "Correspondants", groups: "Groupes", periods: "Périodes",
        recentlyViewed: "Vus récemment", noHistory: "Aucun élément vu pour l'instant",
        joinDiscord: "Rejoindre Discord", chillMusic: "Musique Chill",
        chillDesc: "Écoutez de la musique relaxante en explorant les éléments.",
        play: "Lecture", pause: "Pause", stop: "Arrêter", shuffle: "Aléatoire",
        musicNote: "Source : YouTube · Lofi Girl",
        madeWith: "Fait avec", forCurious: "pour les esprits curieux.",
        discordCommunity: "Communauté Discord",
        elementInfo: "INFORMATIONS DE L'ÉLÉMENT",
        atomicNumber: "Numéro atomique", atomicMass: "Masse atomique",
        category: "Catégorie", period: "Période", group: "Groupe", chemicalSymbol: "Symbole chimique",
        compare: "Comparer", done: "Terminé",
        quizLabel: "QUIZ DE CHIMIE",
        compareLabel: "COMPARER LES ÉLÉMENTS",
        favoritesLabel: "MES FAVORIS",
        noFavorites: "Aucun élément favori pour l'instant.",
        score: "Score",
        correct: "✅ Correct !", wrong: "❌ Faux ! Réponse :",
        whatSymbol: "Quel est le symbole chimique de <strong>{name}</strong> ?",
        whatName: "Quel élément a le symbole <strong>{symbol}</strong> ?",
        whatNumber: "Quel est le numéro atomique de <strong>{name}</strong> ?",
        addedFav: "⭐ Ajouté aux favoris", removedFav: "Retiré des favoris",
        allElements: "Toutes les catégories", selected: "sélectionné",
        highlightMetals: "Métaux mis en évidence", highlightNonmetals: "Non-métaux mis en évidence",
        cleared: "Mise en évidence effacée", resetDone: "Tableau périodique réinitialisé",
        namesShown: "Noms affichés", namesHidden: "Noms masqués",
        massShown: "Masse affichée", massHidden: "Masse masquée",
        darkMode: "🌙 Mode sombre", lightMode: "☀️ Mode clair",
        musicPaused: "Musique en pause", musicStopped: "Musique arrêtée",
        elements: "éléments"
    }
};

let currentLang = localStorage.getItem("pt-lang") || "en";

function t(key) {
    return translations[currentLang][key] || key;
}

function getElementName(el) {
    const idx = { vi: 3, en: 2, es: 4, pt: 5, fr: 6 };
    return el.names[idx[currentLang]] || el.names[2];
}

function getCategoryName(cat) {
    return cat.name[currentLang] || cat.name.en;
}

const elements = rawElements.trim().split("\n").map(line => {
    const p = line.split("|");
    return {
        number: Number(p[0]),
        symbol: p[1],
        names: { en: p[2], vi: p[3], es: p[4], pt: p[5], fr: p[6] },
        mass: p[7],
        category: p[8],
        period: Number(p[9]),
        group: Number(p[10])
    };
});

const elementMap = new Map(elements.map(e => [e.number, e]));

const $ = id => document.getElementById(id);

const periodicTable   = $("periodicTable");
const lanthanidesGrid = $("lanthanides");
const actinidesGrid   = $("actinides");
const searchInput     = $("searchInput");
const categoryFilter  = $("categoryFilter");
const categoryLegend  = $("categoryLegend");
const elementCount    = $("elementCount");
const visibleCount    = $("visibleCount");
const modal           = $("elementModal");
const quizModal       = $("quizModal");
const compareModal    = $("compareModal");
const favoritesModal  = $("favoritesModal");
const toast           = $("toast");
const historyList     = $("historyList");
const favCountEl      = $("favCount");

let activeCategory  = "all";
let activeHighlight = "all";
let namesVisible    = true;
let toastTimer;
let favorites = JSON.parse(localStorage.getItem("pt-favorites") || "[]");
let history   = JSON.parse(localStorage.getItem("pt-history") || "[]");

function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function createElementTile(element, index) {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `element ${categories[element.category].css}`;
    tile.style.setProperty("--i", index);
    tile.dataset.number = element.number;
    tile.dataset.category = element.category;
    tile.setAttribute("aria-label", `${getElementName(element)}, ${element.number}`);

    const isFav = favorites.includes(element.number);

    tile.innerHTML = `
        ${isFav ? '<i class="fa-solid fa-star fav-star"></i>' : ''}
        <span class="number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${getElementName(element)}</span>
        <span class="mass">${element.mass}</span>
    `;

    tile.addEventListener("click", () => openElementModal(element));
    return tile;
}

function createPlaceholder(title, subtitle, category) {
    const box = document.createElement("button");
    box.type = "button";
    box.className = `placeholder ${categories[category].css}`;
    box.innerHTML = `<strong>${title}</strong><span>${subtitle}</span>`;
    box.addEventListener("click", () => selectCategory(category));
    return box;
}

function renderPeriodicTable() {
    periodicTable.innerHTML = "";
    lanthanidesGrid.innerHTML = "";
    actinidesGrid.innerHTML = "";

    for (let period = 1; period <= 7; period++) {
        for (let group = 1; group <= 18; group++) {
            const isEmptyTop = period === 1 && group > 1 && group < 18;
            const isEmptyP2  = period === 2 && group > 2 && group < 13;
            const isEmptyP3  = period === 3 && group > 2 && group < 13;

            if (isEmptyTop || isEmptyP2 || isEmptyP3) {
                const empty = document.createElement("div");
                empty.setAttribute("aria-hidden", "true");
                periodicTable.appendChild(empty);
                continue;
            }

            if (period === 6 && group === 3) {
                periodicTable.appendChild(createPlaceholder("La–Lu", t("lanthanides"), "lanthanide"));
                continue;
            }
            if (period === 7 && group === 3) {
                periodicTable.appendChild(createPlaceholder("Ac–Lr", t("actinides"), "actinide"));
                continue;
            }

            const element = elements.find(item =>
                item.period === period &&
                item.group === group &&
                item.category !== "lanthanide" &&
                item.category !== "actinide"
            );

            if (element) {
                periodicTable.appendChild(createElementTile(element, period * 18 + group));
            } else {
                const empty = document.createElement("div");
                empty.setAttribute("aria-hidden", "true");
                periodicTable.appendChild(empty);
            }
        }
    }

    elements.filter(e => e.number >= 58 && e.number <= 71)
        .forEach((e, i) => lanthanidesGrid.appendChild(createElementTile(e, i)));

    elements.filter(e => e.number >= 90 && e.number <= 103)
        .forEach((e, i) => actinidesGrid.appendChild(createElementTile(e, i)));
}

function renderCategories() {
    categoryFilter.innerHTML = `<option value="all">${t("allCategories")}</option>`;
    categoryLegend.innerHTML = "";

    Object.entries(categories).forEach(([key, cat]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = getCategoryName(cat);
        categoryFilter.appendChild(option);

        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "legend-chip";
        chip.dataset.category = key;
        chip.innerHTML = `
            <span class="legend-dot" style="--dot:${cat.color}"></span>
            <span>${getCategoryName(cat)}</span>
        `;
        chip.addEventListener("click", () => selectCategory(activeCategory === key ? "all" : key));
        categoryLegend.appendChild(chip);
    });
}

function getAllTiles() {
    return [...document.querySelectorAll(".element[data-number]")];
}

function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let count = 0;

    getAllTiles().forEach(tile => {
        const element = elementMap.get(Number(tile.dataset.number));
        const cat = categories[element.category];

        const allNames = Object.values(element.names).join(" ").toLowerCase();

        const matchesSearch =
            query === "" ||
            allNames.includes(query) ||
            element.symbol.toLowerCase().includes(query) ||
            String(element.number) === query;

        const matchesCategory = activeCategory === "all" || element.category === activeCategory;

        const matchesHighlight =
            activeHighlight === "all" ||
            (activeHighlight === "metals" && cat.metal) ||
            (activeHighlight === "nonmetals" && !cat.metal);

        const matches = matchesSearch && matchesCategory;

        tile.classList.toggle("hidden-search", !matches);
        tile.classList.toggle("no-name", !namesVisible);
        tile.classList.remove("dimmed", "emphasized");

        if (matches && activeHighlight !== "all") {
            tile.classList.toggle("emphasized", matchesHighlight);
            tile.classList.toggle("dimmed", !matchesHighlight);
        }

        if (matches) count++;
    });

    visibleCount.textContent = count;
    elementCount.textContent = `${count} / 118 ${t("elements")}`;

    document.querySelectorAll(".legend-chip").forEach(chip => {
        chip.classList.toggle("active", chip.dataset.category === activeCategory);
    });

    categoryFilter.value = activeCategory;
}

function selectCategory(category) {
    activeCategory = category;
    activeHighlight = "all";
    $("highlightMetals").classList.remove("active");
    $("highlightNonmetals").classList.remove("active");
    applyFilters();

    if (category === "all") showToast(t("allElements"));
    else showToast(`${getCategoryName(categories[category])} ${t("selected")}`);
}

function toggleHighlight(type) {
    activeHighlight = activeHighlight === type ? "all" : type;
    $("highlightMetals").classList.toggle("active", activeHighlight === "metals");
    $("highlightNonmetals").classList.toggle("active", activeHighlight === "nonmetals");
    applyFilters();

    if (activeHighlight === "all") showToast(t("cleared"));
    else if (activeHighlight === "metals") showToast(t("highlightMetals"));
    else showToast(t("highlightNonmetals"));
}

let currentModalElement = null;

function openElementModal(element) {
    currentModalElement = element;
    const cat = categories[element.category];

    $("modalNumber").textContent = element.number;
    $("modalSymbol").textContent = element.symbol;
    $("modalMassSmall").textContent = element.mass;
    $("modalName").textContent = getElementName(element);
    $("modalSubtitle").textContent = `${t("atomicNumber")} ${element.number}`;
    $("modalCategory").textContent = getCategoryName(cat);

    const symbolBox = $("modalSymbolBox");
    symbolBox.style.setProperty("--element-color", cat.color);

    const favBtn = $("modalFav");
    favBtn.classList.toggle("active", favorites.includes(element.number));
    favBtn.innerHTML = favorites.includes(element.number)
        ? '<i class="fa-solid fa-star"></i>'
        : '<i class="fa-regular fa-star"></i>';

    const details = [
        [t("atomicNumber"), element.number],
        [t("atomicMass"), element.mass],
        [t("category"), getCategoryName(cat)],
        [t("period"), element.period],
        [t("group"), element.group],
        [t("chemicalSymbol"), element.symbol]
    ];

    $("modalDetails").innerHTML = details.map((d, i) => `
        <div class="detail-box" style="--d:${i}">
            <span>${d[0]}</span>
            <strong>${d[1]}</strong>
        </div>
    `).join("");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    $("closeModal").focus();

    addToHistory(element);
}

function closeElementModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    currentModalElement = null;
}

function addToHistory(element) {
    history = history.filter(n => n !== element.number);
    history.unshift(element.number);
    if (history.length > 8) history.pop();
    localStorage.setItem("pt-history", JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    if (!historyList) return;

    if (history.length === 0) {
        historyList.innerHTML = `<span class="history-empty">${t("noHistory")}</span>`;
        return;
    }

    historyList.innerHTML = "";
    history.forEach(num => {
        const el = elementMap.get(num);
        if (!el) return;
        const btn = document.createElement("button");
        btn.className = "history-item";
        btn.textContent = `${el.symbol} · ${getElementName(el)}`;
        btn.addEventListener("click", () => openElementModal(el));
        historyList.appendChild(btn);
    });
}

function toggleFavorite(number) {
    const idx = favorites.indexOf(number);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast(t("removedFav"));
    } else {
        favorites.push(number);
        showToast(t("addedFav"));
    }
    localStorage.setItem("pt-favorites", JSON.stringify(favorites));
    updateFavCount();
    refreshAllTiles();
}

function updateFavCount() {
    if (favCountEl) favCountEl.textContent = favorites.length;
}

function refreshAllTiles() {
    getAllTiles().forEach(tile => {
        const num = Number(tile.dataset.number);
        const existing = tile.querySelector(".fav-star");
        const isFav = favorites.includes(num);

        if (isFav && !existing) {
            const star = document.createElement("i");
            star.className = "fa-solid fa-star fav-star";
            tile.insertBefore(star, tile.firstChild);
        } else if (!isFav && existing) {
            existing.remove();
        }
    });
}

function openFavoritesModal() {
    const content = $("favoritesContent");

    if (favorites.length === 0) {
        content.innerHTML = `<div class="favorites-empty">${t("noFavorites")}</div>`;
    } else {
        content.innerHTML = favorites.map(num => {
            const el = elementMap.get(num);
            const cat = categories[el.category];
            return `
                <div class="favorite-item" data-number="${num}">
                    <div class="favorite-symbol" style="--element-color:${cat.color}">${el.symbol}</div>
                    <div class="favorite-info">
                        <strong>${getElementName(el)}</strong>
                        <small>#${el.number} · ${getCategoryName(cat)}</small>
                    </div>
                </div>
            `;
        }).join("");

        content.querySelectorAll(".favorite-item").forEach(item => {
            item.addEventListener("click", () => {
                const num = Number(item.dataset.number);
                favoritesModal.classList.remove("show");
                openElementModal(elementMap.get(num));
            });
        });
    }

    favoritesModal.classList.add("show");
    favoritesModal.setAttribute("aria-hidden", "false");
}

let compareA = null;
let compareB = null;

function openCompareModal(firstElement) {
    compareA = firstElement || elementMap.get(1);
    compareB = elementMap.get(2);
    renderCompare();
    compareModal.classList.add("show");
    compareModal.setAttribute("aria-hidden", "false");
}

function renderCompare() {
    const content = $("compareContent");

    const optionsA = elements.map(e =>
        `<option value="${e.number}" ${e.number === compareA.number ? 'selected' : ''}>${e.symbol} - ${getElementName(e)}</option>`
    ).join("");
    const optionsB = elements.map(e =>
        `<option value="${e.number}" ${e.number === compareB.number ? 'selected' : ''}>${e.symbol} - ${getElementName(e)}</option>`
    ).join("");

    content.innerHTML = `
        <div class="compare-select">
            <select id="compareSelectA">${optionsA}</select>
            <select id="compareSelectB">${optionsB}</select>
        </div>
        <div class="compare-grid">
            <div class="compare-column">
                <h3>${compareA.symbol} — ${getElementName(compareA)}</h3>
                <div class="compare-row"><span>${t("atomicNumber")}</span><span>${compareA.number}</span></div>
                <div class="compare-row"><span>${t("atomicMass")}</span><span>${compareA.mass}</span></div>
                <div class="compare-row"><span>${t("category")}</span><span>${getCategoryName(categories[compareA.category])}</span></div>
                <div class="compare-row"><span>${t("period")}</span><span>${compareA.period}</span></div>
                <div class="compare-row"><span>${t("group")}</span><span>${compareA.group}</span></div>
            </div>
            <div class="compare-column">
                <h3>${compareB.symbol} — ${getElementName(compareB)}</h3>
                <div class="compare-row"><span>${t("atomicNumber")}</span><span>${compareB.number}</span></div>
                <div class="compare-row"><span>${t("atomicMass")}</span><span>${compareB.mass}</span></div>
                <div class="compare-row"><span>${t("category")}</span><span>${getCategoryName(categories[compareB.category])}</span></div>
                <div class="compare-row"><span>${t("period")}</span><span>${compareB.period}</span></div>
                <div class="compare-row"><span>${t("group")}</span><span>${compareB.group}</span></div>
            </div>
        </div>
    `;

    $("compareSelectA").addEventListener("change", e => {
        compareA = elementMap.get(Number(e.target.value));
        renderCompare();
    });
    $("compareSelectB").addEventListener("change", e => {
        compareB = elementMap.get(Number(e.target.value));
        renderCompare();
    });
}

let quizState = null;

function startQuiz() {
    quizState = { score: 0, total: 0, current: generateQuestion() };
    renderQuiz();
    quizModal.classList.add("show");
    quizModal.setAttribute("aria-hidden", "false");
}

function generateQuestion() {
    const type = Math.floor(Math.random() * 3);
    const el = elements[Math.floor(Math.random() * elements.length)];

    if (type === 0) {
        const wrong = shuffle(elements.filter(e => e.number !== el.number)).slice(0, 3);
        return {
            question: t("whatSymbol").replace("{name}", getElementName(el)),
            correct: el.symbol,
            options: shuffle([el, ...wrong]).map(e => e.symbol)
        };
    } else if (type === 1) {
        const wrong = shuffle(elements.filter(e => e.number !== el.number)).slice(0, 3);
        return {
            question: t("whatName").replace("{symbol}", el.symbol),
            correct: getElementName(el),
            options: shuffle([el, ...wrong]).map(e => getElementName(e))
        };
    } else {
        const wrong = shuffle(elements.filter(e => e.number !== el.number)).slice(0, 3);
        return {
            question: t("whatNumber").replace("{name}", getElementName(el)),
            correct: String(el.number),
            options: shuffle([el, ...wrong]).map(e => String(e.number))
        };
    }
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderQuiz() {
    const content = $("quizContent");
    const q = quizState.current;

    content.innerHTML = `
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
            ${q.options.map(opt => `<button class="quiz-option" data-value="${opt}">${opt}</button>`).join("")}
        </div>
        <div class="quiz-progress">${t("score")}: ${quizState.score} / ${quizState.total}</div>
    `;

    content.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => answerQuiz(btn, q.correct));
    });
}

function answerQuiz(btn, correct) {
    const value = btn.dataset.value;
    document.querySelectorAll(".quiz-option").forEach(b => {
        b.disabled = true;
        if (b.dataset.value === correct) b.classList.add("correct");
    });

    quizState.total++;

    if (value === correct) {
        quizState.score++;
        showToast(t("correct"));
    } else {
        btn.classList.add("wrong");
        showToast(t("wrong") + " " + correct);
    }

    setTimeout(() => {
        quizState.current = generateQuestion();
        renderQuiz();
    }, 1200);
}

const musicTracks = [
    { id: "jfKfPfyJRdk", title: "Lofi Hip Hop Radio", artist: "Lofi Girl" },
    { id: "4xDzrJKXOOY", title: "Chill Lofi Beats", artist: "Chill Nation" },
    { id: "5qap5aO4i9A", title: "Lofi Study Music", artist: "Lofi Girl" },
    { id: "lTRiuFIWV54", title: "Relaxing Piano", artist: "Soothing Relaxation" },
    { id: "1ZYbU82GVz4", title: "Calm Ocean Sounds", artist: "Nature" },
    { id: "DWcJFNfaw9c", title: "Ambient Study", artist: "Quiet Quest" }
];

let currentTrack = 0;
let musicPlaying = false;

function loadTrack(index, autoplay = true) {
    currentTrack = (index + musicTracks.length) % musicTracks.length;
    const track = musicTracks[currentTrack];
    const frame = $("youtubeFrame");

    if (autoplay) {
        frame.src = `https://www.youtube-nocookie.com/embed/${track.id}?autoplay=1&rel=0`;
        $("musicPlayer").classList.add("visible");
        document.querySelector(".music-panel").classList.remove("paused");
        musicPlaying = true;
        $("playMusic").innerHTML = `<i class="fa-solid fa-pause"></i> <span>${t("pause")}</span>`;
    }

    $("musicNowPlaying").textContent = track.title;
    $("musicArtistName").textContent = track.artist;

    if (autoplay) showToast("🎵 " + track.title);
}

function initTheme() {
    const saved = localStorage.getItem("pt-theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeIcon(true);
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("pt-theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
    showToast(isDark ? t("darkMode") : t("lightMode"));
}

function updateThemeIcon(isDark) {
    $("themeToggle").innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.title = t("title") + " · Dev Vanhzz";
    $("appTitle").textContent = t("title");
    $("appSubtitle").textContent = t("subtitle");
    searchInput.placeholder = t("searchPlaceholder");
    $("labelNames").textContent = namesVisible ? t("hideNames") : t("showNames");
    $("labelMass").textContent = document.body.classList.contains("hide-masses") ? t("showMass") : t("hideMass");
    $("labelMetals").textContent = t("metals");
    $("labelNonmetals").textContent = t("nonmetals");
    $("labelFav").textContent = t("favorites");
    $("labelQuiz").textContent = t("quiz");
    $("labelReset").textContent = t("reset");
    $("headingExplore").textContent = t("exploreElements");
    $("headingExploreSub").textContent = t("clickToView");
    $("labelLanthanides").textContent = t("lanthanides");
    $("labelActinides").textContent = t("actinides");
    $("headingCategories").textContent = t("categories");
    $("headingCategoriesSub").textContent = t("clickCategory");
    $("infoTitle").textContent = t("explorer");
    $("infoDesc").textContent = t("explorerDesc");
    $("statMatching").textContent = t("matching");
    $("statGroups").textContent = t("groups");
    $("statPeriods").textContent = t("periods");
    $("historyTitle").textContent = t("recentlyViewed");
    $("labelDiscord").textContent = t("joinDiscord");
    $("musicTitle").textContent = t("chillMusic");
    $("musicDesc").textContent = t("chillDesc");
    $("labelPlay").textContent = musicPlaying ? t("pause") : t("play");
    $("labelStop").textContent = t("stop");
    $("labelShuffle").textContent = t("shuffle");
    $("musicNote").textContent = t("musicNote");
    $("footerMade").innerHTML = `${t("madeWith")} <i class="fa-solid fa-heart" style="color:#ec4899"></i> ${t("forCurious")}`;
    $("footerDiscord").textContent = t("discordCommunity");
    $("modalLabel").textContent = t("elementInfo");
    $("modalCompareLabel").textContent = t("compare");
    $("modalDoneLabel").textContent = t("done");
    $("quizLabel").textContent = t("quizLabel");
    $("compareLabel").textContent = t("compareLabel");
    $("favoritesLabel").textContent = t("favoritesLabel");
    $("langSelect").value = currentLang;
    $("langPrompt").textContent = t("langPrompt");
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("pt-lang", lang);
    applyLanguage();
    renderPeriodicTable();
    renderCategories();
    applyFilters();
    renderHistory();
    refreshAllTiles();
}

function initLangScreen() {
    const screen = $("langScreen");
    const app = $("app");
    const savedLang = localStorage.getItem("pt-lang");

    if (savedLang) {
        screen.style.display = "none";
        app.style.display = "block";
        setLanguage(savedLang);
    } else {
        screen.style.display = "flex";
        app.style.display = "none";
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            localStorage.setItem("pt-lang", lang);
            currentLang = lang;

            screen.style.opacity = "0";
            screen.style.transition = "opacity 0.4s";
            setTimeout(() => {
                screen.style.display = "none";
                app.style.display = "block";
                setLanguage(lang);
            }, 400);
        });
    });
}

searchInput.addEventListener("input", () => {
    document.querySelector(".search-box").classList.toggle("has-value", searchInput.value.length > 0);
    applyFilters();
});

$("clearSearch").addEventListener("click", () => {
    searchInput.value = "";
    document.querySelector(".search-box").classList.remove("has-value");
    applyFilters();
    searchInput.focus();
});

categoryFilter.addEventListener("change", () => selectCategory(categoryFilter.value));

$("langSelect").addEventListener("change", e => setLanguage(e.target.value));

$("toggleNames").addEventListener("click", e => {
    namesVisible = !namesVisible;
    $("labelNames").textContent = namesVisible ? t("hideNames") : t("showNames");
    applyFilters();
    showToast(namesVisible ? t("namesShown") : t("namesHidden"));
});

$("toggleMasses").addEventListener("click", () => {
    const hidden = document.body.classList.toggle("hide-masses");
    $("labelMass").textContent = hidden ? t("showMass") : t("hideMass");
    showToast(hidden ? t("massHidden") : t("massShown"));
});

$("highlightMetals").addEventListener("click", () => toggleHighlight("metals"));
$("highlightNonmetals").addEventListener("click", () => toggleHighlight("nonmetals"));

$("favoritesButton").addEventListener("click", openFavoritesModal);
$("closeFavorites").addEventListener("click", () => favoritesModal.classList.remove("show"));

$("quizButton").addEventListener("click", startQuiz);
$("closeQuiz").addEventListener("click", () => quizModal.classList.remove("show"));

$("themeToggle").addEventListener("click", toggleTheme);

$("modalFav").addEventListener("click", () => {
    if (currentModalElement) {
        toggleFavorite(currentModalElement.number);
        const isFav = favorites.includes(currentModalElement.number);
        const btn = $("modalFav");
        btn.classList.toggle("active", isFav);
        btn.innerHTML = isFav ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
});

$("modalCompare").addEventListener("click", () => {
    if (currentModalElement) {
        closeElementModal();
        openCompareModal(currentModalElement);
    }
});
$("closeCompare").addEventListener("click", () => compareModal.classList.remove("show"));

$("closeModal").addEventListener("click", closeElementModal);
$("modalDone").addEventListener("click", closeElementModal);

modal.addEventListener("click", e => { if (e.target === modal) closeElementModal(); });
quizModal.addEventListener("click", e => { if (e.target === quizModal) quizModal.classList.remove("show"); });
compareModal.addEventListener("click", e => { if (e.target === compareModal) compareModal.classList.remove("show"); });
favoritesModal.addEventListener("click", e => { if (e.target === favoritesModal) favoritesModal.classList.remove("show"); });

$("resetButton").addEventListener("click", () => {
    searchInput.value = "";
    document.querySelector(".search-box").classList.remove("has-value");
    activeCategory = "all";
    activeHighlight = "all";
    namesVisible = true;
    document.body.classList.remove("hide-masses");
    $("labelNames").textContent = t("hideNames");
    $("labelMass").textContent = t("hideMass");
    $("highlightMetals").classList.remove("active");
    $("highlightNonmetals").classList.remove("active");
    applyFilters();
    showToast(t("resetDone"));
});

$("playMusic").addEventListener("click", () => {
    if (musicPlaying) {
        $("youtubeFrame").src = "about:blank";
        $("musicPlayer").classList.remove("visible");
        document.querySelector(".music-panel").classList.add("paused");
        musicPlaying = false;
        $("playMusic").innerHTML = `<i class="fa-solid fa-play"></i> <span>${t("play")}</span>`;
        showToast(t("musicPaused"));
    } else {
        loadTrack(currentTrack, true);
    }
});

$("stopMusic").addEventListener("click", () => {
    $("youtubeFrame").src = "about:blank";
    $("musicPlayer").classList.remove("visible");
    document.querySelector(".music-panel").classList.add("paused");
    musicPlaying = false;
    $("playMusic").innerHTML = `<i class="fa-solid fa-play"></i> <span>${t("play")}</span>`;
    showToast(t("musicStopped"));
});

$("nextMusic").addEventListener("click", () => loadTrack(currentTrack + 1, true));
$("prevMusic").addEventListener("click", () => loadTrack(currentTrack - 1, true));
$("shuffleMusic").addEventListener("click", () => loadTrack(Math.floor(Math.random() * musicTracks.length), true));

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeElementModal();
        quizModal.classList.remove("show");
        compareModal.classList.remove("show");
        favoritesModal.classList.remove("show");
    }
    if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        searchInput.focus();
    }
    if (e.key === "ArrowRight" && e.altKey) loadTrack(currentTrack + 1, true);
    if (e.key === "ArrowLeft" && e.altKey) loadTrack(currentTrack - 1, true);
});

const scrollTopBtn = $("scrollTop");
window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 300);
});
scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

function init() {
    initTheme();
    initLangScreen();
    renderPeriodicTable();
    renderCategories();
    applyFilters();
    renderHistory();
    updateFavCount();
}

init();

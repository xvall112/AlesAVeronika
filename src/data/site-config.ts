export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    subtitle?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type TMp3Example = {
    title: string;
    src: string;
    isFeatured?: boolean;
    position: number;
};

export type TReviews = {
    name: string;
    text: string;
    event: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    repertoar: string[];
    mp3Example: TMp3Example[];
    reviews: TReviews[];
};

const siteConfig: SiteConfig = {
    title: 'Aleš a Veronika',
    subtitle: 'Hudební skupina',
    description: 'HUDBA NA SVATBU, OSLAVU, ZÁBAVU, FIREMNÍ AKCI, SILVESTRA A JINOU PŘÍLEŽITOST NOVĚ TAKÉ PRO DĚTI...',
    image: {
        src: '/heroPhoto.jpeg',
        alt: 'Ales a Veronika'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Nabízíme',
            href: '/projects'
        },
        {
            text: 'Repertoár',
            href: '/repertoar'
        },
        {
            text: 'Recenze',
            href: '/reviews'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'O nás',
        //     href: '/about'
        // },
        {
            text: 'Kontakt',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/alesaveronika/'
        },
        {
            text: 'Youtube',
            href: 'https://www.youtube.com/playlist?list=PLe_pw0K1R2FaO5lll5gdzcuIBfBhMbCIy'
        },
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/profile.php?id=100063706474467'
        }
    ],
    hero: {
        title: 'Aleš a Veronika',
        subtitle: 'Hudební skupina',
        text: '<h2>HUDBA NA SVATBU, OSLAVU, ZÁBAVU, FIREMNÍ AKCI, SILVESTRA A JINOU PŘÍLEŽITOST NOVĚ TAKÉ PRO DĚTI...</h2> <h3>HRAJEME ČESKÉ A ZAHRANIČNÍ HITY - POP, ROCK, OLDIES, DECHOVKY</h3> <h4>Zpěv je doprovázen elektrickou kytarou a elektro-akustickou kytarou, na přání jsou možné klávesy s kladívkovou mechanikou. Jsme hudební skupina z Příbrami. Repertoár se skládá z českých a zahraničních skladeb různých stylů. Naše vystoupení je vhodné pro všechny věkové kategorie. Vystihujeme atmosféru a reagujeme na věk a náladu lidí.</h4>',
        image: {
            src: '/heroPhoto.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Objednat',
                href: '/contact'
            },
            {
                text: 'Repertoár',
                href: '/repertoar'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    mp3Example: [
        {
            title: 'Fields of gold - Sting',
            src: '/mp3/FieldsOfGold.mp3',
            isFeatured: true,
            position: 1
        },
        {
            title: 'Amerika - Lucie',
            src: '/mp3/Amerika.mp3',
            isFeatured: true,
            position: 2
        },
        {
            title: 'One - U2',
            src: '/mp3/One.mp3',
            isFeatured: true,
            position: 3
        },
        {
            title: 'Ai se eu te pego - Michel Teló',
            src: '/mp3/AiSeEuTePego.mp3',
            isFeatured: true,
            position: 4
        }
    ],
    reviews: [
        { name: 'Kateřina', text: 'Super hudba na svatbu, skvělé písničky, super domluva a skvělá hudba. Moc děkujeme.', event: 'Svatba' },
        {
            name: 'Hynek',
            text: 'Skvěle odehraná a odzpívaná "Zlatá svatba" na Litoměřicku. Parádně jsme si to užili 🙂. Musim jen doporučit a těším se na další setkání 👍',
            event: 'Svatba'
        },
        {
            name: 'Mirek',
            text: 'Velice DĚKUJEME za úžasnou hudbu na naší svatbě, byl to neskutečný zážitek. Všichni jsme si to skvěle užili. Aleš a Veronika jsou velice příjemní a milí,neuvěřitelné duo.Za vše MOC DĚKUJÍ novomanželé Jochovi.',
            event: 'Svatba'
        },
        {
            name: 'Jarča',
            text: 'Úžasné duo :) Skvělé písně, dokonale zazpívané. Usměvaví, milí a neuvěřitelně ochotní lidé :) Vykouzlili nám nádhernou svatební atmosféru :) děkujeme a těšíme se, že Vás zase někdy někde uvidíme :)',
            event: 'Svatba'
        },
        {
            name: 'Renata',
            text: 'Velké poděkování Alešovi a Veronice za úžasnou atmosféru, kterou jste vytvořili krásný dětský den. Aleš a Veronika nám nádherně zpívali dětské písničky, tancovali, ale také přichystali soutěže pro děti. Moc vám děkujeme za super zábavu pro děti, ale i dospělé. Těšíme se na další společnou akci.',
            event: 'Dětský den'
        },
        {
            name: 'Tereza',
            text: 'Aleš & Veronika nám hráli na svatbě a byli jsme všichni naprosto nadšení!!! Široký repertoár, milé vystupování, nádherný zpěv. Úžasně doladili atmosféru a mohu jen doporučit.',
            event: 'Svatba'
        },
        {
            name: 'Libuše',
            text: 'Dekuji moc za zprijemneni oslavy narozenin. Super hudba, pristup, ochota, vstricnost. Rozhodne budu rada, kdyz si vas budu moci jeste poslechnout.',
            event: 'Narozeniny'
        },
        {
            name: 'Tomáš',
            text: 'Chtěl bych Vám jménem společnosti a jménem všech zúčastněných poděkovat za super atmosféru, kterou jste svojí produkcí navodili. Děkuji za super profesionální přístup.',
            event: 'Firemní akce'
        },
        {
            name: 'Šárka',
            text: 'Mili lide, prijemna atmosfera, bohaty repertoar! Tesim se na dalsi prilezitost k poslechu:) Muzeme s manzelem jen doporucit?',
            event: 'Svatba'
        },
        {
            name: 'Pepa',
            text: 'Oslava narozenin super...diky vam jsem zapomnel na svuj vek...krasny den, dekuji',
            event: 'Narozeniny'
        },
        {
            name: 'Ivča',
            text: 'Díky Vám, skvělé hudbě a atmosféře, kterou jste nám pomohli vytvořit, jsme zažili překrásnou svatbu na kterou budeme nejen my, ale všichni naši hosté vzpomínat :-) Mockrát děkujeme!',
            event: 'Svatba'
        },
        {
            name: 'Sofie',
            text: 'Ja i manzel jsme byli velmi spokojeni:) Perfektni repertoar, skveli lide a prijemna atmosfera:) Muzeme jedine doporucit! Urcite se na ne jeste obratime pri dalsi vhodne prilezitosti:) Preji mnoho uspechu:)',
            event: 'Svatba'
        }
    ],
    repertoar: [
        '05 a Radeček - Praha',
        '05 a Radeček (feat. Mária Čírová) - Vloupám se',
        'ABBA - Dancing Queen',
        'Abraxas - Obyčejnej svět',
        'Aleš & Veronika - Introverti',
        'Aleš & Veronika - Spirála',
        'Aleš & Veronika - Šifra',
        'Aleš Brichta - Dívka s perlami ve vlasech',
        'Aleš Brichta - Nechte vlajky vlát',
        'Andy Williams - Moon river',
        'Álvaro Soler - Sofia',
        'Argema - Jarošovský pivovar',
        'Argema - Tohle je ráj',
        "B. J. Thomas - Raindrops keep fallin' on my head",
        'Barbora Poláková - Nafrněná',
        'Beatles - Here comes the sun',
        'Beatles - Let it be',
        'Beatles - Till there was you',
        "Bill Withers - Ain't no sunshine",
        'Black - Wonderful life',
        'Blue effect (Mišík, Hladík) - Slunečný hrob',
        'Bob Dylan - Knocking on heaven´s door',
        'Bob Marley - No woman no cry',
        'Bobby Hebb - Sunny',
        'Bobr & Motýl - Vyznání',
        'Brigada Bum - Chu chu ua',
        'Brontosauři - Růže z papíru',
        'Bruce Springsteen - Streets of Philadelphia',
        'Bruno Mars - Just the way you are',
        'Bruno Mars - Treasure',
        'Brutus - Dej se políbit',
        'Brutus - Dlažební kostka',
        'Burma Jones - Samba v kapkách deště',
        'Buty - František',
        'Buty - Krtek',
        'Buty - Mám jednu ruku dlouhou',
        'Buty - Nad stádem koní',
        'Candy Dulfer & Dave Stewart - Lilly was here',
        'Clash - Should I stay or should I go',
        'Clou - Island Sun',
        'Coldplay - Clocks',
        'Coldplay - In my place',
        'Coldplay - Viva la vida',
        'Čiperkové - Starý farmář',
        'Čiperkové - Vosy',
        'Dalibor Janda - Kde jsi?',
        'Dalibor Janda - Oheň, voda, vítr',
        'Dalibor Janda - Žít jako kaskadér',
        'Dan Bárta - On my head',
        'Dáda Patrasová - Co to je? (Veo Veo)',
        'Dáda Patrasová - Hej baby',
        'Dáda Patrasová - Táty se ptej',
        'Dáda Patrasová - Z nás bude kapela',
        'David Band - Kde si včera bol',
        'Depeche mode - Enjoy the silence',
        'Divokej Bill - Čmelák',
        'Divokej Bill - Dávno',
        'Divokej Bill - Malování',
        'Divokej Bill - Plakala',
        'Dj Bobo - Everybody',
        'DJ Ötzi (Bruce Channel) - Hey baby',
        'Duran Duran - Ordinary world',
        'Ed Sheeran - Afire love',
        'Ed Sheeran - Galway girl',
        'Ed Sheeran - Perfect',
        'Ed Sheeran - Thinking out loud',
        'Ego - Žijeme len raz',
        'Elán - Láska moja',
        'Elán - Neviem byť sám',
        'Elán - Ver mi',
        'Elán - Zaľúbení',
        'Elton John - Sacrifice',
        'Elvis Presley - Blue suede shoes',
        'Elvis Presley - Can´t help falling in love',
        'Eric Clapton - Tears in heaven',
        'Ewa Farna - Mám boky jako skříň',
        'Filip Topol - Píseň',
        'Fool´s Garden - Lemon tree',
        'Frank Sinatra - Fly me to the moon',
        'Frankie goes to Hollywood - Power of love',
        'Gazebo - I like Chopin',
        'George Ezra - Shotgun',
        'George Michael - Careless Whisper',
        'Glen Hansard, Markéta Irglová - Falling slowly',
        'Hana Zagorová - Já se vznáším',
        'Hana Zagorová - Je naprosto nezbytné',
        'Harlej - Svařák',
        'Heidi Janků - Když se načančám',
        'Helena Vondráčková - Sladké mámení',
        'Him - Join me in death',
        'Him (Chris Isaak) - Wicked game',
        'Holki - Ve snu se vdávám',
        'Horkýže slíže - L & G song',
        'Horkýže slíže - Malá Žužu',
        'Horkýže slíže - Silný refrén',
        'Hříšný tanec - Time of my life (I´ve have the)',
        'Chinaski - 1970',
        'Chinaski - Drobná paralela',
        'Chinaski - Hlavolam',
        'Chinaski - Jaxe',
        'Chinaski - Každý ráno',
        'Chinaski - Víno',
        'Chris Rea - Road to hell',
        'Inner Circle - Sweat (A La La La La Long)',
        'Ivan Hlas - Na kolena',
        'Ivan Mládek (Děda Mládek Illegal Band) - Jez (směs)',
        'Ivan Mládek (Děda Mládek Illegal Band) - Jožin z bažin (směs)',
        'Ivan Mládek (Děda Mládek Illegal Band) - Když je v Praze hic (směs)',
        'Ivan Mládek (Děda Mládek Illegal Band) - Linda (směs)',
        'Ivan Mládek (Děda Mládek Illegal Band) - Rychlík jede do Prahy (směs)',
        'Jakub Smolík - Jen blázen žárlí',
        'James Brown - I feel good',
        'Jan Kalousek - Jednou mi fotr povídá',
        'Jan Nedvěd - Kohout',
        'Jan Nedvěd - Podvod',
        'Jarda Hypochondr - Šenkýřka',
        'Jaromír Nohavica - Vlaštovko leť',
        'Jaroslav Ježek - Život je jen náhoda',
        'Jaroslav Uhlíř - Ani k stáru',
        'Jaroslav Uhlíř - Dělání',
        'Jaroslav Uhlíř - Hlupáku, najdu tě',
        'Jaroslav Uhlíř - Chválím tě, Země má',
        'Jaroslav Uhlíř - Jestli to nebude láska',
        'Jaroslav Uhlíř - Kdyby se v komnatách',
        'Jaroslav Uhlíř - Když se zamiluje kůň',
        'Jaroslav Uhlíř - Nám se stalo něco překrásného',
        'Jaroslav Uhlíř - Narozeninová',
        'Jaroslav Uhlíř - Není nutno',
        'Jaroslav Uhlíř - Pod dubem, za dubem',
        'Jaroslav Uhlíř - Statistika',
        'Jelen - Klidná jako voda',
        'Jiří Korn - Žal se odkládá',
        'Jiří Schelinger - Jahody mražený',
        'Jiří Suchý - Pramínek vlasů',
        'Jiří Zmožek - Už mi lásko není 20 let',
        'Joan Osborne - One of us',
        'John Denver - Take me home country roads',
        'John Lennon - Imagine',
        'John Lennon - Jealous guy',
        'John Lennon - Woman',
        'John Paul Young - Love is in the air',
        'Josef Melen - Né, pětku ne',
        'K. Svoboda - Stín katedrál',
        'Kabát - Bára',
        'Kabát - Colorado',
        'Kabát - Dole v dole',
        'Kabát - Houby magický',
        'Kabát - Láďa',
        'Kabát - Pohoda',
        'Kabát - V pekle sudy válej',
        'Kapitán Demo - Zlatíčka',
        'Karel Černoch & Peter Dvorský - Láska prý',
        'Karel Gott - Být stále mlád',
        'Karel Gott - Cestu znám jen já (Křemílek a Vochomůrka)',
        'Karel Gott - Die Biene Maja',
        'Karel Gott - Když milenky pláčou',
        'Karel Gott - Lady Carneval',
        'Karel Gott - Stokrát chválím čas',
        'Karel Gott - Trezor',
        'Karel Zich - Není všechno paráda',
        'Katapult - Až',
        'Katapult - Hlupák váhá',
        'Kečup - Slepá',
        'Keks - Víš',
        'Kelly family - I can´t help myself',
        'King Africa - La Bomba',
        'Kolář, Machálková - Den, kdy se vrátí láska k nám',
        'Kryštof - Inzerát',
        'Kryštof feat. Tomáš Klus - Cesta',
        'Kryštof - Ty a já',
        'Las Ketchup - Asereje',
        'Lenka Filipová - Prý se tomu říká láska',
        'Lenka Filipová - Zamilovaná',
        'Leonard Cohen - Halleluyah',
        'Limp Bizkit - Behind blue eyes',
        'Lionel Richie - Hello',
        'Liquido - Narcotic',
        'Lou Reed - Perfect day',
        'Louis Armstrong - What a wonderful world',
        'Lucie - Amerika',
        'Lucie - Černí andělé',
        'Lucie (David Koller) - Chci zas v tobě spát',
        'Lucie - Medvídek',
        'Lucie - Panic',
        'Lucie - Sen',
        'Lucie - Šrouby do hlavy',
        'Lucie - Šťastnej chlap',
        'Luis Fonsi, ft. Daddy Yanke - Despacito',
        'Mandrage - Hledá se žena',
        'Mandrage - Šrouby a matice',
        'Marek Ztracený - Tak se nezlob',
        'Maxim Turbulenc - Mraveneček',
        'Maxim Turbulenc - S tebou mě baví svět',
        'Mejla Hlavsa - Muchomůrky bílé (Houby)',
        'Metallica - Nothing else matters',
        'Mig 21 - Malotraktorem',
        'Mig 21 - Slepic pírka',
        'Michal David - Céčka, sbírá céčka',
        'Michal David - Decibely lásky',
        'Michal David - Diskopříběh',
        'Michal David - Největší z nálezů a ztrát',
        'Michal David - Nonstop',
        'Michal David - Pár přátel',
        'Michal Hrůza - Bílá velryba',
        'Michal Hrůza - Pro Emu',
        'Michal Šindelář - Hořely, padaly hvězdy',
        'Michal Tučný - Báječná ženská',
        'Michal Tučný (Harlej) - Pověste ho vejš',
        'Michal Tučný - Snídaně v trávě',
        'Michal Tučný - Tam u nebeských bran',
        'Michal Tučný - Všichni jsou už v Mexiku',
        'Michel Teló - Ai se eu te pego',
        'Mike and the Mechanics - Another cup of coffee',
        'Milan Chladil - Jezdím bez nehod',
        'Milan Chladil - Mackie Messer',
        'Miloš Krkoška - Jdu cestou necestou (Princezna ze mlejna)',
        'Mirai - Chci tančit',
        'Mirai - Když nemůžeš, tak přidej',
        'Mirai - Yahoda',
        'Miroslav Žbirka - Miliónkrát',
        'Mňága a Žďorp - Hodinový hotel',
        'Mňága a Žďorp - Nejlíp jim bylo',
        'Modus - Ty, ja a môj brat',
        'Monika Absolonová - Najednou (Frozen)',
        'Monkey Business - My friends',
        'Morava - Romale',
        'Nena - 99 luftballons',
        'Nick Kamen - I promised myself',
        'Nirvana - Come as you are',
        'No Name - Prvá',
        'Oasis - Half the world away',
        'Oasis - Live forever',
        'Oasis - Whatever',
        'Oasis - Wonderwall',
        'Olga Lounová - Jsem Optimista',
        'Olympic - Dej mi víc své lásky',
        'Olympic - Jasná zpráva',
        'Olympic - Jednou',
        'Olympic - Okno mé lásky',
        'Opus - Live is life',
        'Ozzy Osbourne - Mama I´m coming home',
        "Patrick Swayze - She's like the wind",
        'Paul McCartney - Hope of deliverance',
        'Pavel Bobek - Můj rodný dům',
        'Pavel Bobek - Veď mě dál, cesto má',
        'Pavel Bobek & Marie Rotrová - S tím bláznem si nic nezačínej',
        'Pavel Novák - Nádherná láska',
        'Pavel Žalman Lohonka (Žalman & spol.) - Divokej horskej tymián',
        'Pavol Habera - Boli sme raz milovaní',
        'Peter Lipa - Maturantky',
        'Peter Nagy - Láska je tu s nami',
        'Petr Hapka - Dívám se dívám',
        'Petr Kalandra - Nebeská brána',
        'Petr Novák - Hvězdičko blýskavá',
        'Petr Novák - Já budu chodit po špičkách',
        'Petr Rezek - Ó mámo',
        'Petr Spálený - Až mě andělé',
        'Petra Janů - Už nejsem volná',
        'Petra Janů & Petr Janda - Není nám už sedmnáct',
        'PH Electro - Stereo Mexico',
        'Phil Collins - Another day in paradise',
        'Pinkfong - Baby Shark',
        'Pink floyd - Another brick in the wall 2',
        'Pink floyd - Coming back to life',
        'Pink floyd - Wish you were here',
        'Pomáda - Letní láska',
        'Premier - Hrobař',
        'Procol Harum - A whiter shade of pale',
        'Psí vojáci - Russian mystic pop',
        'R.E.M. - Drive',
        'R.E.M. - Losing my religion',
        'R.E.M. - Man on the Moon',
        'Rammstein - Amerika',
        'Rammstein - Du hast',
        'Rafferty Gerry - Baker street (Undercover)',
        'Rasmus - In the shadows',
        'Ready Kirken - Černý brejle',
        'Ready Kirken - Zejtra mám',
        'Reamonn - Supergirl',
        'Red hot Chili Peppers - Around the world',
        'Red hot Chili Peppers - Breaking the girl',
        'Red hot Chili Peppers - Californation',
        'Red hot chili peppers - Under the bridge',
        'Red hot chilli peppers - My friends',
        'Rednex - Wish you were here',
        'Rembrants - I´ll be there for you',
        'Richard Müller - Nebude to l´ahké',
        'Robbie Williams - Feel',
        'Robbie Williams - Love my life',
        "Rolling Stones - I can't get no satisfaction",
        'Ronan Keating - When you say nothing at all',
        'Roy Orbison - Oh, pretty woman',
        'Rybičky 48 feat. Pekař a Jimmy Vošoust - Léto',
        'Sagvan Tofi - Dávej, ber',
        "Scatman John - Scatman's world",
        'Scooter - Break it up',
        'Sebastian - Toulavá',
        'Semtex - Mašinka',
        'Slza - Katarze',
        'Slza - Lhůta záruční',
        "Smash Mouth - I'm a believer",
        'Smolík - Blázen žárlí',
        'Soul asylum - Runaway train',
        'Stanislav Hložek, Petr Kotvald - Holky z naší školky',
        'Stevie Wonder - I just called to say I love you',
        'Sting - Englishman in New York',
        'Sting - Every breath you take',
        'Sting - Fields of gold',
        'Sto zvířat - Nikdy nic nebylo',
        'Škwor - Síla starejch vín',
        'Škwor - Sraž nás na kolena',
        'Team - Mám na teba chuť',
        'The Bee Gees - How deep is your love',
        'The Bee Gees - Stayin Alive',
        "The Connells - '74 '75",
        'The Doors - Light my fire',
        'The Eagles - Hotel California',
        'The Troggs - Love is all around',
        'Tom Jones - Sex bomb',
        'Tomáš Klus - Cesta (Kryštof)',
        'Tomáš Klus - Pocity',
        'Tři sestry - Kovárna I',
        'Tři sestry - Mexiko',
        'Tři sestry - Sovy v mazutu',
        'Turbo - Chtěl jsem mít',
        'U2 - One',
        'U2 - Pride',
        'U2 - With or without you',
        'Urge Overkill - Girl, you´ll be a woman',
        'Václav Neckář - Křídla iluzí',
        'Václav Neckář - Půlnoční',
        'Verona - Hey boy',
        'Verve - Bitter sweet symphony',
        'Village people - Ymca',
        'Visací zámek - Známka punku',
        'Vladimír Mišík - Variace na renesanční téma',
        'Vlasta Redl - Husličky',
        'Voskovec, Werich, Ježek - Život je jen náhoda',
        'Wabi Daněk - Nevadí',
        'Wabi Daněk - Rosa na kolejích',
        'Walda Gang (W. Matuška) - Eldorádo',
        'Waldemar Matuška - Když jdou na mužskýho léta',
        'Waldemar Matuška (H. Aufray) - Slavíci z Madridu',
        'Waldemar Matuška (Peter, Paul and Mary) - Tisíc mil',
        'Wanastowi vjecy - Andělé',
        'Wanastowi vjecy - Kouzlo',
        'Wohnout Svaz českých bohémů',
        'Xavier Baumaxa - Pažitka',
        'Xindl X - Anděl',
        'Yo Yo Band - Karviná',
        'Yvonne Přenosilová - Boty proti lásce',
        'Zdeněk Rytíř - Královské reggae',
        'ZZ top - Rough boy',
        'Žlutý pes - Sametová',
        'lidová (Karel Vacek) - Cikánka',
        'lidová - Co ste hasiči',
        'lidová - Ej, od Buchlova',
        'lidová - Hlava, ramena, kolena, palce',
        'lidová - Holka modrooká',
        'lidová - Japonečka',
        'lidová - Když jsem šel z Hradišťa',
        'lidová (Šlapeto) - Ku Praze uhání vlak',
        'lidová - Modrá kukadla (Zdická polka)',
        'lidová - Myslivecká (směs)',
        'lidová (DJ Mikky & Semeš) - Načo pôjdem domov',
        'lidová - Na Pankráci',
        'lidová - Nezacházej slunce',
        'lidová (Karel Vacek) - Nikdy se nevrátí pohádka mládí',
        'lidová - Pivovarský koně',
        'lidová - Pod tou naší starou lípou',
        'lidová (Šlapeto) - Ručičky nebojte se',
        'lidová - Slepička kropenatá',
        'lidová - Sokolíci',
        'lidová - Stavěli tesaři',
        'lidová - Šup sem, šup tam',
        'lidová (Jaromír Vejvoda) - Škoda lásky (Beer barrel polka)',
        'lidová - To ta Heľpa',
        'lidová - Trnky brnky (Slunce, seno, jahody)',
        'lidová - Ztratila jsem kajdu',
        'lidová (marocká) - Kulička (A ram sam sam)',
        'lidová (ruská) - Kaťuša',
        'Thomas Werner - Ptačí tanec (Vogeltanz)',
        "'74 '75 - The Connells",
        '99 luftballons – Nena',
        '1970 – Chinaski',
        'A whiter shade of pale – Procol Harum',
        'Afire love – Ed Sheeran',
        'Ai se eu te pego - Michel Teló',
        "Ain't no sunshine - Bill Withers",
        'Amerika - Lucie',
        'Amerika – Rammstein',
        'Anděl – Xindl X',
        'Andělé - Wanastowi vjecy',
        'Ani k stáru - Jaroslav Uhlíř',
        'Another brick in the wall 2 - Pink floyd',
        'Another cup of coffee - Mike and the Mechanics',
        'Another day in paradise - Phil Collins',
        'Around the world - Red hot Chili Peppers',
        'Asereje - Las Ketchup',
        'Až - Katapult',
        'Až mě andělé - Petr Spálený',
        'Baby Shark - Pinkfong',
        'Báječná ženská - Michal Tučný',
        'Baker street - Rafferty Gerry (Undercover)',
        'Bára - Kabát',
        'Behind blue eyes - Limp Bizkit',
        'Bílá velryba - Michal Hrůza',
        'Bitter sweet symphony - Verve',
        'Blue suede shoes - Elvis Presley',
        'Boli sme raz milovaní - Pavol Habera',
        'Boty proti lásce - Yvonne Přenosilová',
        'Break it up - Scooter',
        'Breaking the girl - Red hot Chili Peppers',
        'Být stále mlád - Karel Gott',
        'Californation - Red hot Chili Peppers',
        'Can´t help falling in love - Elvis Presley',
        'Careless Whisper - George Michael',
        'Céčka, sbírá céčka - Michal David',
        'Cesta - Kryštof feat. Tomáš Klus',
        'Cestu znám jen já (Křemílek a Vochomůrka) - Karel Gott',
        'Cikánka - lidová (Karel Vacek)',
        'Clocks – Coldplay',
        'Co ste hasiči - lidová',
        'Co to je? (Veo Veo) - Dáda Patrasová',
        'Colorado - Kabát',
        'Come as you are - Nirvana',
        'Coming back to life - Pink floyd',
        'Černí andělé - Lucie',
        'Černý brejle – Ready Kirken',
        'Čmelák - Divokej Bill',
        'Dancing Queen - ABBA',
        'Dávej, ber - Sagvan Tofi',
        'Dávno - Divokej Bill',
        'Decibely lásky - Michal David',
        'Dej mi víc své lásky - Olympic',
        'Dej se políbit - Brutus',
        'Den, kdy se vrátí láska k nám - Kolář, Machálková',
        'Dělání - Jaroslav Uhlíř',
        'Despacito - Luis Fonsi, ft. Daddy Yanke',
        'Die Biene Maja - Karel Gott (Helene Fischer)',
        'Diskopříběh - Michal David',
        'Divokej horskej tymián - Pavel Žalman Lohonka (Žalman & spol.)',
        'Dívám se dívám - Petr Hapka',
        'Dívka s perlami ve vlasech – Aleš Brichta',
        'Dlažební kostka - Brutus',
        'Dole v dole - Kabát',
        'Drive - R.E.M.',
        'Drobná paralela - Chinaski',
        'Du hast – Rammstein',
        'Ej, od Buchlova - lidová',
        'Eldorádo - Walda Gang (W. Matuška)',
        'Englishman in New York - Sting',
        'Enjoy the silence - Depeche mode',
        'Every breath you take - Sting',
        'Everybody - Dj Bobo',
        'Falling slowly - Glen Hansard, Markéta Irglová',
        'Feel - Robbie Williams',
        'Fields of gold - Sting',
        'Fly me to the moon - Frank Sinatra',
        'František - Buty',
        'Galway girl - Ed Sheeran',
        'Girl, you´ll be a woman - Urge Overkill',
        'Half the world away - Oasis',
        'Halleluyah - Leonard Cohen',
        'Hej baby - Dáda Patrasová',
        'Hello - Lionel Richie',
        'Here comes the sun - Beatles',
        'Hey baby - DJ Ötzi (Bruce Channel)',
        'Hey boy – Verona',
        'Hlava, ramena, kolena, palce - lidová',
        'Hlavolam - Chinaski',
        'Hledá se žena - Mandrage',
        'Hlupák váhá – Katapult',
        'Hlupáku, najdu tě - Jaroslav Uhlíř',
        'Hodinový hotel - Mňága a Žďorp',
        'Holka modrooká - lidová',
        'Holky z naší školky - Stanislav Hložek, Petr Kotvald',
        'Hope of deliverance - Paul McCartney',
        'Hořely, padaly hvězdy - Michal Šindelář',
        'Hotel California - The Eagles',
        'Houby magický - Kabát',
        'How deep is your love - The Bee Gees',
        'Hrobař - Premier',
        'Husličky - Vlasta Redl',
        'Hvězdičko blýskavá - Petr Novák',
        'Chci tančit - Mirai',
        'Chci zas v tobě spát - Lucie (David Koller)',
        'Chtěl jsem mít - Turbo',
        'Chu chu ua - Brigada Bum',
        'Chválím tě Země má - Jaroslav Uhlíř',
        "I can't get no satisfaction - Rolling Stones",
        'I can´t help myself - Kelly family',
        'I feel good - James Brown',
        'I just called to say I love you - Stevie Wonder',
        'I like Chopin - Gazebo',
        'I promised myself - Nick Kamen',
        'I´ll be there for you - Rembrants',
        "I'm a believer - Smash Mouth",
        'Imagine - John Lennon',
        'Introverti - Aleš & Veronika',
        'In my place - Coldplay',
        'In the shadows - Rasmus',
        'Inzerát - Kryštof',
        'Island Sun - Clou',
        'Já budu chodit po špičkách - Petr Novák',
        'Já se vznáším - Hana Zagorová',
        'Jahody mražený - Jiří Schelinger',
        'Japonečka - lidová',
        'Jarošovský pivovar - Argema',
        'Jasná zpráva - Olympic',
        'Jaxe - Chinaski',
        'Jealous guy - John Lennon',
        'Jdu cestou necestou (Princezna ze mlejna) - Miloš Krkoška',
        'Je naprosto nezbytné - Hana Zagorová',
        'Jednou - Olympic',
        'Jednou mi fotr povídá - Jan Kalousek',
        'Jen blázen žárlí - Jakub Smolík',
        'Jestli to nebude láska - Jaroslav Uhlíř',
        'Jez (směs) Ivan Mládek (Děda Mládek Illegal Band)',
        'Jezdím bez nehod - Milan Chladil',
        'Join me in death - Him',
        'Jožin z bažin (směs) - Ivan Mládek (Děda Mládek Illegal Band)',
        'Jsem Optimista - Olga Lounová',
        'Just the way you are – Bruno Mars',
        'Karviná - Yo Yo Band',
        'Katarze - Slza',
        'Kaťuša - ruská lidová',
        'Každý ráno - Chinaski',
        'Kde jsi? - Dalibor Janda',
        'Kde si včera bol – David Band',
        'Kdyby se v komnatách - Jaroslav Uhlíř',
        'Když jdou na mužskýho léta - Waldemar Matuška',
        'Když je v Praze hic (směs) - Ivan Mládek (Děda Mládek Illegal',
        'Band)',
        'Když jsem šel z Hradišťa - lidová',
        'Když milenky pláčou - Karel Gott',
        'Když nemůžeš, tak přidej – Mirai',
        'Když se načančám - Heidi Janků',
        'Když se zamiluje kůň - Jaroslav Uhlíř',
        'Klidná jako voda - Jelen',
        'Knocking on heaven´s door - Bob Dylan',
        'Kohout - Jan Nedvěd',
        'Kouzlo - Wanastowi vjecy',
        'Kovárna I - Tři sestry',
        'Královské reggae - Zdeněk Rytíř',
        'Krtek - Buty',
        'Křídla iluzí - Václav Neckář',
        'Kulička (A ram sam sam) - lidová (marocká)',
        'Ku Praze uhání vlak - lidová (Šlapeto)',
        'L & G song - Horkýže slíže',
        'La Bomba - King Africa',
        'Lady Carneval - Karel Gott',
        'Láďa - Kabát',
        'Láska je tu s nami - Peter Nagy',
        'Láska moja - Elán',
        'Láska prý - Karel Černoch & Peter Dvorský',
        'Lemon tree - Fool´s Garden',
        'Let it be - Beatles',
        'Letní láska - Pomáda',
        'Léto - Rybičky 48 feat. Pekař a Jimmy Vošoust',
        'Lhůta záruční - Slza',
        'Light my fire - The Doors',
        'Lilly was here - Candy Dulfer & Dave Stewart',
        'Linda (směs) - Ivan Mládek (Děda Mládek Illegal Band)',
        'Live forever - Oasis',
        'Live is life - Opus',
        'Losing my religion - R.E.M.',
        'Love is all around - The Troggs',
        'Love is in the air - John Paul Young',
        'Love my life - Robbie Williams',
        'Mackie Messer - Milan Chladil',
        'Malá Žužu - Horkýže slíže',
        'Malotraktorem - Mig 21',
        'Malování - Divokej Bill',
        'Mám boky jako skříň - Ewa Farna',
        'Mám jednu ruku dlouhou - Buty',
        'Mám na teba chuť – Team',
        'Mama I´m coming home - Ozzy Osbourne',
        'Man on the Moon - R.E.M.',
        'Mašinka - Semtex',
        'Maturantky - Peter Lipa',
        'Medvídek - Lucie',
        'Mexiko - Tři sestry',
        'Miliónkrát - Miroslav Žbirka',
        'Modrá kukadla (Zdická polka) - lidová',
        'Moon river - Andy Williams',
        'Mraveneček - Maxim Turbulenc',
        'Muchomůrky bílé (Houby) - Mejla Hlavsa',
        'Můj rodný dům - Pavel Bobek',
        'My friends - Monkey Business',
        'My friends - Red Hot Chilli Peppers',
        'Myslivecká (směs) - lidová',
        'Na kolena - Ivan Hlas',
        'Na Pankráci - lidová',
        'Načo pôjdem domov - lidová (DJ Mikky & Semeš)',
        'Nad stádem koní - Buty',
        'Nádherná láska - Pavel Novák',
        'Nafrněná - Barbora Poláková',
        'Najednou (Frozen) - Monika Absolonová',
        'Nám se stalo něco překrásného - Jaroslav Uhlíř',
        'Narcotic - Liquido',
        'Narozeninová - Jaroslav Uhlíř',
        'Né, pětku ne - Josef Melen',
        'Nebeská brána - Petr Kalandra',
        'Nebude to l´ahké - Richard Müller',
        'Nechte vlajky vlát - Aleš Brichta',
        'Nejlíp jim bylo - Mňága a Žďorp',
        'Největší z nálezů a ztrát - Michal David',
        'Není nám už sedmnáct - Petra Janů & Petr Janda',
        'Není nutno - Jaroslav Uhlíř',
        'Není všechno paráda - Karel Zich',
        'Nevadí - Wabi Daněk',
        'Neviem byť sám - Elán',
        'Nezacházej slunce - lidová',
        'Nikdy nic nebylo - Sto zvířat',
        'Nikdy se nevrátí pohádka mládí - lidová (Karel Vacek)',
        'No woman no cry - Bob Marley',
        'Nonstop - Michal David',
        'Nothing else matters - Metallica',
        'Ó mámo - Petr Rezek (Jakub Smolík)',
        'Obyčejnej svět - Abraxas',
        'Oh, pretty woman - Roy Orbison',
        'Oheň, voda, vítr - Dalibor Janda',
        'Okno mé lásky - Olympic',
        'On my head - Dan Bárta',
        'One - U2',
        'One of us - Joan Osborne',
        'Ordinary world - Duran Duran',
        'Panic - Lucie',
        'Pár přátel - Michal David',
        'Pažitka - Xavier Baumaxa',
        'Perfect - Ed Sheeran',
        'Perfect day - Lou Reed',
        'Píseň - Filip Topol',
        'Pivovarský koně - lidová',
        'Plakala - Divokej Bill',
        'Pocity - Tomáš Klus',
        'Pod dubem, za dubem - Jaroslav Uhlíř',
        'Pod tou naší starou lípou - lidová',
        'Podvod - Jan Nedvěd',
        'Pohoda - Kabát',
        'Pověste ho vejš - Michal Tučný (Harlej)',
        'Power of love - Frankie goes to Hollywood',
        'Praha - 05 a Radeček',
        'Pramínek vlasů - Jiří Suchý',
        'Pride - U2',
        'Pro Emu - Michal Hrůza',
        'Prvá - No Name',
        'Prý se tomu říká láska - Lenka Filipová',
        'Ptačí tanec (Vogeltanz) - Thomas Werner',
        'Půlnoční - Václav Neckář',
        "Raindrops keep fallin' on my head - B. J. Thomas",
        'Road to hell - Chris Rea',
        'Romale - Morava',
        'Rosa na kolejích - Wabi Daněk',
        'Rough boy - ZZ top',
        'Ručičky nebojte se - lidová (Šlapeto)',
        'Runaway train - Soul asylum',
        'Russian mystic pop - Psí vojáci',
        'Růže z papíru - Brontosauři',
        'Rychlík jede do Prahy (směs) - Ivan Mládek (Děda Mládek Illegal Band)',
        'S tebou mě baví svět - Maxim Turbulenc',
        'S tím bláznem si nic nezačínej - Pavel Bobek & Marie Rotrová',
        'Sacrifice - Elton John',
        'Samba v kapkách deště - Burma Jones',
        'Sametová - Žlutý pes',
        "Scatman's world - Scatman John",
        'Sen - Lucie',
        'Sex bomb - Tom Jones',
        "She's like the wind - Patrick Swayze",
        'Shotgun - George Ezra',
        'Should I stay or should I go - Clash',
        'Síla starejch vín - Škwor',
        'Silný refrén - Horkýže slíže',
        'Sladké mámení - Helena Vondráčková',
        'Slavíci z Madridu - Waldemar Matuška (H. Aufray)',
        'Slepá - Kečup',
        'Slepic pírka - Mig 21',
        'Slepička kropenatá - lidová',
        'Slunečný hrob - Blue effect (Mišík, Hladík)',
        'Snídaně v trávě - Michal Tučný',
        'Sofia - Álvaro Soler',
        'Sokolíci - lidová',
        'Sovy v mazutu - Tři sestry',
        'Spirála - Aleš & Veronika',
        'Sraž nás na kolena - Škwor',
        'Starý farmář - Čiperkové',
        'Statistika - Jaroslav Uhlíř',
        'Stavěli tesaři - lidová',
        'Stayin Alive - Bee Gees',
        'Stereo Mexico - PH Electro',
        'Stín katedrál - K. Svoboda',
        'Stokrát chválím čas - Karel Gott',
        'Streets of Philadelphia - Bruce Springsteen',
        'Sunny - Bobby Hebb',
        'Supergirl - Reamonn',
        'Svařák - Harlej',
        'Svaz českých bohémů - Wohnout',
        'Sweat (A La La La La Long) - Inner Circle',
        'Šenkýřka - Jarda Hypochondr',
        'Šifra - Aleš & Veronika',
        'Škoda lásky (Beer barrel polka) - lidová (Jaromír Vejvoda)',
        'Šrouby a matice - Mandrage',
        'Šrouby do hlavy - Lucie',
        'Šťastnej chlap - Lucie',
        'Šup sem, šup tam - lidová',
        'Tak se nezlob - Marek Ztracený',
        'Take me home country roads - John Denver',
        'Tam u nebeských bran - Michal Tučný',
        'Táty se ptej - Dáda Patrasová',
        'Tears in heaven - Eric Clapton',
        'Thinking out loud - Ed Sheeran',
        'Till there was you - Beatles',
        'Time of my life (I´ve have the) - Hříšný tanec',
        'Tisíc mil - Waldemar Matuška (Peter, Paul and Mary)',
        'To ta Heľpa - lidová',
        'Tohle je ráj - Argema',
        'Toulavá – Sebastian',
        'Treasure - Bruno Mars',
        'Trezor - Karel Gott',
        'Trnky brnky - lidová (Slunce, seno, jahody)',
        'Ty a já - Kryštof',
        'Ty, ja a môj brat - Modus',
        'Under the bridge - Red Hot Chili Peppers',
        'Už mi lásko není 20 let - Jiří Zmožek',
        'Už nejsem volná - Petra Janů (Lisa Angell)',
        'V pekle sudy válej - Kabát',
        'Variace na renesanční téma - Vladimír Mišík',
        'Ve snu se vdávám - Holki',
        'Veď mě dál, cesto má - Pavel Bobek',
        'Ver mi - Elán',
        'Víno - Chinaski',
        'Víš - Keks',
        'Viva la vida - Coldplay',
        'Vlaštovko leť - Jaromír Nohavica',
        'Vloupám se - 05 a Radeček (feat. Mária Čírová)',
        'Vosy - Čiperkové',
        'Všichni jsou už v Mexiku - Michal Tučný',
        'Vyznání - Bobr & Motýl',
        'What a wonderful world - Louis Armstrong',
        'Whatever - Oasis',
        'When you say nothing at all – Ronan Keating',
        'Wicked game - Him (Chris Isaak)',
        'Wish you were here - Pink floyd',
        'Wish you were here – Rednex',
        'With or without you - U2',
        'Woman - John Lennon',
        'Wonderful life - Black',
        'Wonderwall - Oasis',
        'Yahoda - Mirai',
        'Ymca - Village people',
        'Z nás bude kapela - Dáda Patrasová',
        'Zaľúbení - Elán',
        'Zamilovaná - Lenka Filipová',
        'Zejtra mám - Ready Kirken',
        'Zlatíčka - Kapitán Demo',
        'Známka punku - Visací zámek',
        'Ztratila jsem kajdu - lidová',
        'Žal se odkládá - Jiří Korn',
        'Žijeme len raz - Ego',
        'Žít jako kaskadér - Dalibor Janda',
        'Život je jen náhoda - Jaroslav Ježek'
    ]
};

export default siteConfig;

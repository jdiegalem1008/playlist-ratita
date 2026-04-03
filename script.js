let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];

const canciones=[

{ 
titulo:"Todas las Flores de Enero",
artista:"Indios",
album:"Todas las Flores de Enero",
fecha:"14 Feb 2026",
duracion:"2:15",

portada:"https://i.scdn.co/image/ab67616d0000b273e445817e3265ff9c83d32817",
youtube:"https://www.youtube.com/watch?v=dLDbnfGsQgQ",
nota:"Quería empezar con esta pues, la verdad nose por qué jsjs...Me parece una canción hermosa y desde que escuché esta canción dije, tú. "
},

{
titulo:"El Tesoro",
artista:"El Mató a un Policía Motorizado",
album:"La Síntesis O'Konor",
fecha:"14 Feb 2026",
duracion:"3:42",

portada:"https://i.scdn.co/image/ab67616d0000b273b952b049193b56a4dc5c449b",

youtube:"https://www.youtube.com/watch?v=Jq57zqfqF6s",

nota:"Básicamente lo que siento por ti, frase por frase..."
},

{
titulo:"Me Conecto (feat. Jorge Drexler)",
artista:"Salvapantallas, Jorge Drexler",
album:"SMS",
fecha:"14 Feb 2026",
duracion:"3:09",

portada:"https://akamai.sscdn.co/letras/360x360/albuns/5/f/8/9/01670853744.jpg",
youtube:"https://www.youtube.com/watch?v=x9t0pmNFatc",
nota:"Si estás me conecto, si no estás me desconecto. Amo esta canción porque si me siento así sjdhajd😔"
},

{
titulo:"Ventanas",
artista:"Lolabúm",
album:"El Cielo",
fecha:"14 Feb 2026",
duracion:"3:54",

portada:"https://i.scdn.co/image/ab67616d0000b273ff17554bfa65f81c6ba57fb9",
youtube:"https://www.youtube.com/watch?v=QJyVRRIWZk8",
nota:"¿Estar contigo por el resto de mi vida? La verdad..."
},

{
titulo:"Eres",
artista:"Café Tacvba",
album:"SINO",
fecha:"14 Feb 2026",
duracion:"3:26",

portada:"https://i.scdn.co/image/ab67616d00001e02624927252564ef4625307897",
youtube:"https://www.youtube.com/watch?v=98Akpf1ph2o",
nota:"La mejor canción de amor que hay. Mentira nose JDHSA está algo quemada, sí, pero me la pela, es increíble y representa muy bien como te veo :)"
},

{
titulo:"Quiero Ver",
artista:"Café Tacvba",
album:"SINO",
fecha:"14 Feb 2026",
duracion:"3:26",

portada:"https://i.scdn.co/image/ab67616d0000b273c0bcfc088e4d1537967bc61a",
youtube:"https://www.youtube.com/watch?v=o6KgErzzDXU",
nota:"Te amo Café Tacvba. En realidad, abro debate si esta canción es incluso más bonita que 'Eres'.. mmmm debatible 🤔. En fin, es otra de mis favoritas porque lleva toda la vida conmigo, y nunca encontré a quién dedicarla, hasta ahora :)"
},

{
titulo:"Únicos",
artista:"Siddharta",
album:"Únicos",
fecha:"14 Feb 2026",
duracion:"3:57",

portada:"https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2016/09/Siddhartha-unicos.jpg",

youtube:"https://www.youtube.com/watch?v=3AsvjEGlwyY",

nota:"No recuerdo bien por qué no fuimos juntos al Quitofest, pero me arrepiento tanto.. porque ahora solo me puedo imaginar como pudo ser cantar esta canción contigo a mi lado :("
},

{
titulo:"Ser Parte",
artista:"Siddharta",
album:"Únicos",
fecha:"14 Feb 2026",
duracion:"4:17",

portada:"https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2016/09/Siddhartha-unicos.jpg",

youtube:"https://www.youtube.com/watch?v=rqRAWqn6O30",

nota:"Otra de Siddharta,y esta si me duele no haberla escuchado juntos, porque así suena mi cabeza cuando te escucho hablar..."
},

{
titulo:"Tear in My Heart",
artista:"Twenty One Pilots",
album:"Blurryface",
fecha:"14 Feb 2026",
duracion:"3:08",

portada:"https://cdn-images.dzcdn.net/images/cover/dbbde1014cda9b101412a8e27add0ad2/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=AIrEgxjgqps",
nota:"Literalmente la única canción de amor de los veintiún pilotos jsdhaj pero que canción :')"
},

{
titulo:"Give You the World",
artista:"Steve Lacy",
album:"Gemini Rights",
fecha:"14 Feb 2026",
duracion:"4:34",

portada:"https://i.scdn.co/image/ab67616d0000b2736938311000a0e494a26986e5",
youtube:"https://www.youtube.com/watch?v=4ToAg0xhwKU",
nota:"Cuando tengamos alguna pelea, o estemos resentidos, ten por seguro que yo estoy en mi casa escuchando esto.."
},

{
titulo:"Loco por Vos",
artista:"Silvestre y La Naranja",
album:"ANIM4LES",
fecha:"14 Feb 2026",
duracion:"4:11",

portada:"https://cdn-images.dzcdn.net/images/cover/7cf4704116dccfc6843b80d4b54ed52f/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=_7WbJuocy5w",
nota:"Pues si estoy loco la verdad, que te digo. Pero loco a secas, no por tí, ¿cómo crees? 😴 (tepienso24/7unsaludo) "
},

{
titulo:"I Will Come For You",
artista:"Jack Dolgen",
album:"Maricopa",
fecha:"14 Feb 2026",
duracion:"3:45",

portada:"https://i.scdn.co/image/ab67616d0000b2734152c02c4a43334b6cb99206",
youtube:"https://www.youtube.com/watch?v=FO8kstNBLTY",
nota:"Está canción es de una serie que me gusta mucho. Está aqui no tanto porque crea que te vaya a gustar, pero es que la letra es muy linda 😔.. ademas, es mi playlist así que te aguantas mi amor >:) (mentira, te amo)"
},

{
titulo:"You Are the Right One",
artista:"Sports",
album:"Naked All the Time",
fecha:"14 Feb 2026",
duracion:"2:53",

portada:"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d4/fa/69/d4fa69a7-75df-1d1a-6d06-216ffa56becf/0.jpg/600x600bf-60.jpg",
youtube:"https://www.youtube.com/watch?v=s3DSh_KcZKg",
nota:"And I'm just the boy who is looking at you.. (uy que cringe poner frases en inglés, ya no lo haré nunca más, lo siento AHDJSA 🤢)"
},

{
titulo:"Otra Piel",
artista:"Gustavo Cerati",
album:"Ahí Vamos",
fecha:"14 Feb 2026",
duracion:"4:41",

portada:"https://www.ultrabrit.com/wp-content/uploads/2020/04/cerati_ahi_vamos-1.jpg",
youtube:"https://www.youtube.com/watch?v=zXJrSRgwX8I",
nota:"Esta canción me ayudo a entender lo importante que es hablar las cosas, así que cuando la escucho me imagino a ti hablando conmigo juju "
},

{
titulo:"Lisa",
artista:"Gustavo Cerati",
album:"Amor Amarillo",
fecha:"14 Feb 2026",
duracion:"4:26",

portada:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Amor_amarillo.jpg",
youtube:"https://www.youtube.com/watch?v=iqjZZfkRbsQ",
nota:"En realidad esta canción no habla de amor rómantico, pero la vibra que me da me recuerda a lo feliz que me haces :)"
},

{
titulo:"Vivo",
artista:"Gustavo Cerati",
album:"Siempre Es Hoy",
fecha:"14 Feb 2026",
duracion:"4:21",

portada:"https://i.scdn.co/image/ab67616d0000b27392441ecd34874c2bc4f19144",
youtube:"https://www.youtube.com/watch?v=heBRegOcpVw",
nota:"De las canciones más bonitas que he escuchado :( cada que la escucho me deja pensando, en realidad siento que no es tanto una canción de amor, es mas como una reflexión personal. También es cierto que la quemaron un poco jsjs. En fin, me transmite mucho y quería compartirla contigo :)"
},

{
titulo:"Corazón Atómico",
artista:"Zoé",
album:"Memo Rex Commander y el Corazón Atómico",
fecha:"14 Feb 2026",
duracion:"3:54",

portada:"https://cdn-images.dzcdn.net/images/cover/2e0ec68a7c5e491c317e1a64b85b436c/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=ayBJ8PkW9jI",
nota:"Ok, esta es otra fase que tuve jeje. Amo Zoé y tiene muuuchas canciones lindas. Pero esta probablemente sea de las más lindas que tienen, y una qué siempre me hace pensar en ti."
},

{
titulo:"SKR",
artista:"Zoé",
album:"Sonidos de Karmática Resonancia",
fecha:"14 Feb 2026",
duracion:"5:18",

portada:"https://i.scdn.co/image/ab67616d0000b2733e3fc382980680109a199208",
youtube:"https://www.youtube.com/watch?v=lymajUpmYTM",
nota:"Muy cursi, buuu siguiente (mentira, me gusta mucho 😔)"
},

{
titulo:"Venus",
artista:"Zoé",
album:"Aztlán",
fecha:"14 Feb 2026",
duracion:"4:15",

portada:"https://akamai.sscdn.co/tb/next/?url=%2Fuploadfile%2Fletras%2Falbuns%2F2%2Fb%2F9%2Fe%2F703041551296391.jpg&w=3840&q=75",
youtube:"https://www.youtube.com/watch?v=HBRsX-5Eykk",
nota:"Así debe sentirse el amor para mí."
},

{
titulo:"Amalia",
artista:"Diamante Eléctrico",
album:"Mira Lo Que Me Hiciste Hacer",
fecha:"14 Feb 2026",
duracion:"4:14",

portada:"https://i.scdn.co/image/ab67616d0000b2734f647b659f84587e94f87c3d",
youtube:"https://www.youtube.com/watch?v=zJqALX7LaSQ",
nota:"Tú eres Amalia, y yo el loquito inseguro que canta :)"
},

{
titulo:"Sanctuary",
artista:"Joji",
album:"Nectar",
fecha:"14 Feb 2026",
duracion:"3:00",

portada:"https://i.scdn.co/image/ab67616d0000b2738da6404284573219a9b1e2f4",
youtube:"https://www.youtube.com/watch?v=wdl13YtcLRk",
nota:"Otra parte de mi que, aunque siento que no te ha de gustar mucho, debes conocerla :) Amo a Joji, pero en realidad todas sus canciones son trágicas AJAJA prácticamente es la única canción de amor que tiene, y te la dedico corazón mío <3"
},

{
titulo:"Donde Nadie Pueda Ir",
artista:"Manuel Medrano",
album:"Manuel Medrano",
fecha:"14 Feb 2026",
duracion:"2:49",

portada:"https://i.scdn.co/image/ab67616d0000b273ab27da383a4ab6dd67f50a68",
youtube:"https://www.youtube.com/watch?v=dR-T5nnkjvQ",
nota:"Manuel Medrano tiene las canciones más cursis que hay. Desde chiquito fui, y enfatizo, OBLIGADO a cantar canciones de Manuel Medrano. Entonces, tenía que haber canciones de Manuel Medrano aquí jsdjsd comenzando por la mas melosa y cursi que encontré :p (mentira, me encanta esta canción T-T)"
},

{
titulo:"Afuera Del Planeta",
artista:"Manuel Medrano",
album:"Manuel Medrano",
fecha:"14 Feb 2026",
duracion:"3:49",

portada:"https://cdn-images.dzcdn.net/images/cover/77381e21082018ede26b7326b2cd5084/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=Q_bfKBC89OQ",
nota:"Probablemente sea mi favorita de él. Siento que nos representa un poco esta canción. A veces las cosas no empiezan, o directamente no son como las planeamos, pero aún así.. :)"
},

{
titulo:"FLORES",
artista:"Latin Mafia",
album:"FLORES",
fecha:"18 Feb 2026",
duracion:"2:40",

portada:"https://cdn-images.dzcdn.net/images/cover/d881f0e883317db5e83f611fc8281c6b/500x500.jpg",
youtube:"https://www.youtube.com/watch?v=1oOoOJDbhXQ",
nota:"Cambiando el mood un poco juju, me gusta mucho Latin Mafia, y esta canción me representa demasiado. Te mereces flores mi amor, siempre :)"
},

{
titulo:"Yo siempre contesto.",
artista:"LATIN MAFIA",
album:"TODOS LOS DÍAS TODO EL DÍA",
fecha:"18 Feb 2026",
duracion:"3:20",

portada:"https://i.scdn.co/image/ab67616d0000b2735e92f2d649b34dbf56cf2264",
youtube:"https://www.youtube.com/watch?v=p70uRXcuWoI",
nota:"Quizás no te guste, pero por alguna razón yo lloro con esta canción jejeje😔"
},

{
titulo:"No Puedo Dejar De Decir Que Te Quiero",
artista:"Mene",
album:"La Máquina Persona",
fecha:"20 Feb 2026",
duracion:"5:23",

portada:"https://cdn-images.dzcdn.net/images/cover/c056d5ef926ef50260b9c8e0fbdb96d5/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=9g3EoOBw2fo",
nota:"Si."
},

{
titulo:"Pluto Projector",
artista:"Rex Orange County",
album:"Pony",
fecha:"22 Feb 2026",
duracion:"4:28",

portada:"https://i.scdn.co/image/ab67616d0000b273bf6bb9e37fd5aaa8f8559f07",
youtube:"https://www.youtube.com/watch?v=ZpFrjWzeqj4",
nota:"Esta canción me la enseñó Agatha hace ya años, y siempre le dije que en algún momento la dedicaría a alguien, y ella se resentía porque me decía que me busque gustos propios ADHGADG😞 No le hice caso, y aquí estoy :p"
},
{
titulo:"Happiness",
artista:"Rex Orange County",
album:"Apricot Princess",
fecha:"22 Feb 2026",
duracion:"4:39",

portada:"https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d",
youtube:"https://www.youtube.com/watch?v=dGgvtmMz-Hc",
nota:"Cursi, cursi, cursi como yo.... Pero bella, bella, bella como tú.."
},

{
titulo:"THE SHADE",
artista:"Rex Orange County",
album:"WHO CARES?",
fecha:"22 Feb 2026",
duracion:"3:02",

portada:"https://i.scdn.co/image/ab67616d0000b273761dc49441e6d2a991d46dc7",
youtube:"https://www.youtube.com/watch?v=oBUktQyKQPY",
nota:" Igualita a la anterior ajdhjasd es que me gustan las canciones cursis mi amor, lo siento 😞"
},

{
titulo:"Tonos de Azul",
artista:"Nsqk",
album:"Botánica",
fecha:"25 Feb 2026",
duracion:"2:53",

portada:"https://i.scdn.co/image/ab67616d0000b273db0bf320fc5001cd184af8fe",
youtube:"https://www.youtube.com/watch?v=SlIprhqsq0Y",
nota:"Otra fase mía, bastante reciente juju.. Me encanta el nesquik, y odio que se llame así. La letra de esta canción es muy bella, y aunque habla de un rompimiento, me quedo con las cosas lindas que dice, que definitivamente me recuerdan a tí :)  "
},

{
titulo:"Si En Tu Mente Estuve",
artista:"Nsqk",
album:"ROY",
fecha:"25 Feb 2026",
duracion:"3:12",

portada:"https://cdn-images.dzcdn.net/images/cover/35531ebdd058bfc5c2a8f20871c0c365/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=DpzD48ucsnA",
nota:"Si pasamos mucho tiempo sin hablar, o si te hice enojar, andas medio ratita y me respondes feito😔 (bromita).. esto pasa por mi cabeza jsjs"
},

{
titulo:"Sur (Interludio)",
artista:"Nsqk",
album:"ROY",
fecha:"25 Feb 2026",
duracion:"1:48",

portada:"https://cdn-images.dzcdn.net/images/cover/35531ebdd058bfc5c2a8f20871c0c365/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=hPfFbBJ5zocjj",
nota:"Porque todo vuelve a ti <3."
},

{
titulo:"SUR - EN VIVO",
artista:"Nsqk",
album:"ROY EN VIVO 2023",
fecha:"25 Feb 2026",
duracion:"3:33",

portada:"https://i1.sndcdn.com/artworks-KGaStufvE6A9-0-t500x500.jpg",
youtube:"https://www.youtube.com/watch?v=faFxzVbttGg",
nota:"Esta versión me gusta incluso más que la original, así que la pongo también jujuju"
},

{
titulo:"NADIE MÁS!",
artista:"Nsqk",
album:"SÍSIFO / NADIE MÁS!",
fecha:"25 Feb 2026",
duracion:"4:10",

portada:"https://i.scdn.co/image/ab67616d0000b2732f048b7eb21e7bba37dfdf72",
youtube:"https://www.youtube.com/watch?v=yhuop3GEf-4",
nota:"Una más del nesqui, cuando entró a su fase reguetonera jadgahj. Canción curiosa, al principio no me gustaba nada, pero al final me encantó sjsj porque eres tú y no quiero a nadie más :)"
},

{
titulo:"Globos",
artista:"Technicolor Fabrics",
album:"Bahía Santiago",
fecha:"2 Mar 2026",
duracion:"4:21",

portada:"https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2015/06/Technicolor-Fabrics1.jpg",
youtube:"https://www.youtube.com/watch?v=N-1wkmJ4oRk",
nota:"Soy fan de estas cancioncitas así medio indies jsjs. Esta la descubrí hace años ya, y me reeee gusta. Muy linda, es cómo suena mi cabeza cuando veo tus lindos ojitos :) "
},

{
titulo:"Planet Express",
artista:"Cuco",
album:"Planet Express",
fecha:"6 Mar 2026",
duracion:"4:20",

portada:"https://i.scdn.co/image/ab67616d0000b273a133fa11a513685f3d591afe",
youtube:"https://www.youtube.com/watch?v=qRq3xn_MLdU",
nota:"Si algun día Dios no quiera tenemos que separar caminos, las primeras semanas estaría escuchando esto 24/7😞 Baaasta muy trágico ajdhsja amo esta canción :)"
},

{
titulo:"Aura",
artista:"Cuco",
album:"Fantasy Gateway",
fecha:"6 Mar 2026",
duracion:"3:27",

portada:"https://i.scdn.co/image/ab67616d0000b273be9a3e8a5e535ec7240f8317",
youtube:"https://www.youtube.com/watch?v=-jxGNnILLmA",
nota:"Amo las vibes que me da esta canción, nose que tiene la verdad jajaja y la letra si, me representa."
},

{
titulo:"Ojeras",
artista:"Alkaloides",
album:"Astral Dopamina",
fecha:"10 Mar 2026",
duracion:"4:32",

portada:"https://i.scdn.co/image/ab67616d0000b273b7019f432fad927782351e8c",
youtube:"https://www.youtube.com/watch?v=JV-Bi61BCt8",
nota:"Aunque no tienes muchas ojeras tú, seguramente yo tengo más jsjsjs😞 Pero eso si, tus ojitos hermosos los tengo tatuados en mi cabeza corazón. ¿Y esa mirada cuando estas contenta?, Jesús... esa mirada no se compara con nada <3"
},

{
titulo:"YOKO",
artista:"Alvaro Diaz",
album:"YOKO",
fecha:"15 Mar 2026",
duracion:"3:27",

portada:"https://cdn-images.dzcdn.net/images/cover/0065a08156f9f2b9075d38b4adb49e63/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=T89IqbAF9Ik",
nota:"Okei, otra fase más jsjsj Me encantan las canciones de Alvarito, y esta es de las más lindas que tiene (aunque la hayan quemado un poco 😞jsjs)"
},

{
titulo:"Gatillera",
artista:"Alvaro Diaz",
album:"Felicilandia",
fecha:"15 Mar 2026",
duracion:"3:14",

portada:"https://i.scdn.co/image/ab67616d0000b2734385062efd655ededc0d2caa",
youtube:"https://www.youtube.com/watch?v=16uHDgdQcIQ",
nota:"Pandillera😠🫵"
},

{
titulo:"Reina Peinada",
artista:"Alvaro Diaz",
album:"Diaz Antes: La Ciudad De Los Niños Perdidos",
fecha:"15 Mar 2026",
duracion:"4:04",

portada:"https://m.media-amazon.com/images/I/51IfSfcdpTL._UXNaN_FMjpg_QL85_.jpg",
youtube:"https://www.youtube.com/watch?v=Zn37zIBGv5M",
nota:"Un poquito quemada, pero igual, que linda canción :') "
},

{
titulo:"City Of Stars - From 'La La Land' Soundtrack",
artista:"Ryan Gosling, Emma Stone",
album:"La La Land (Original Motion Picture Soundtrack)",
fecha:"20 Mar 2026",
duracion:"2:30",

portada:"https://i.scdn.co/image/ab67616d0000b2730bdf4dd39843ad48c5b66bc4",
youtube:"https://www.youtube.com/watch?v=8tzd8UlO7nQ",
nota:"Canciones de tu película favorita tenían que estar aquí :p Y como te quiero tanto, te voy a poner la escena :)... omg, no ya, horrible película😭"
},

{
titulo:"A Lovely Night",
artista:"Ryan Gosling, Emma Stone",
album:"La La Land (Original Motion Picture Soundtrack)",
fecha:"20 Mar 2026",
duracion:"3:57",

portada:"https://i.scdn.co/image/ab67616d0000b2730bdf4dd39843ad48c5b66bc4",
youtube:"https://www.youtube.com/watch?v=w5SRH6Ac1LI",
nota:"Mi canción favorita de la película :) tengo una obsesión con ella te juro. "
},

{
titulo:"Like Real People Do",
artista:"Hozier",
album:"Hozier",
fecha:"20 Mar 2026",
duracion:"3:18",

portada:"https://cdn-images.dzcdn.net/images/cover/8442e9ac0227a07b00c9dfd0ec00032d/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=ug9YFr4FaBw",
nota:"Para mi esta canción dice: 'No me importa el pasado, no me importa lo que fuiste, simplemente te acepto por lo que eres ahora'. Aunque quizás no lo diga mucho, pues yo me siento el más afortunado de que me hayas dado otra oportunidad. Se que no debe haber sido fácil para ti, y a veces sigo sin hacerlo fácil.. pero a pesar de todo, siempre buscas la manera de entenderme y mejorar, entonces te agradezco de todo corazón <3 "
},

{
titulo:"2good",
artista:"Balu Brigada",
album:"Find A Way",
fecha:"20 Mar 2026",
duracion:"3:33",

portada:"https://cdn-images.dzcdn.net/images/cover/8b67340e2bb7b2614dfe8975ac40b3b7/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=_yHlVIDTE7k",
nota:"Si hay una canción que me representa por completo a mí, mis inseguridades, y lo que siento por ti.. Es esta. "
},

{
titulo:"Kiss Goodnight",
artista:"I DONT KNOW HOW BUT THEY FOUND ME",
album:"RAZZMATAZZ",
fecha:"20 Mar 2026",
duracion:"3:50",

portada:"https://cdn-images.dzcdn.net/images/cover/24be4170567ca5563bdfe212b0cca45b/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=ybGCOcJO1r0",
nota:" Terraza, noche estrellada, te escucho reír, te veo y en mi cabeza suena esta canción :)"
},

{
titulo:"pensé en ti (feat. Caloncho)",
artista:"Jaze, Caloncho",
album:"Quizá no es para tanto",
fecha:"20 Mar 2026",
duracion:"3:56",

portada:"https://i.scdn.co/image/ab67616d0000b2733fd05b6925b6a830ea8e7091",
youtube:"https://www.youtube.com/watch?v=OByMEa_j6AA",
nota:"Me parece que así me sentía cuando volvimos a hablar :) Después de que te conte todo ese día, creí que la cagué y que se acabó... Pero cuando vi que no, te juro que me prometí que no te volvería a soltar, nunca."
},

{
titulo:"No Me Sueltes Más",
artista:"Sen Senra",
album:"Sensaciones",
fecha:"20 Mar 2026",
duracion:"3:27",

portada:"https://i.scdn.co/image/ab67616d0000b273a4268639fb789e5b44b4ca53",
youtube:"https://www.youtube.com/watch?v=xdE37hKxROM",
nota:"Mira, hablando de no soltar más :)..."
},

{
titulo:"86.400",
artista:"Sen Senra",
album:"Sensaciones",
fecha:"20 Mar 2026",
duracion:"1:09",

portada:"https://i.scdn.co/image/ab67616d0000b273a4268639fb789e5b44b4ca53",
youtube:"https://www.youtube.com/watch?v=_E_PavYa55Y",
nota:"Son 86.400 segundos al día."
},

{
titulo:"Fuego",
artista:"El Mató a un Policía Motorizado",
album:"La Síntesis O'Konor",
fecha:"25 Mar 2026",
duracion:"3:58",

portada:"https://i.scdn.co/image/ab67616d0000b273b952b049193b56a4dc5c449b",
youtube:"https://www.youtube.com/watch?v=L63uqbdoXt4",
nota:"¿Te acuerdas cuando fuimos al centro a ver las luces, un día antes de mi cumple? Bueno, aunque ya íbamos mejor encaminados, yo si sentía (y totalmente entendible) que aún habían ciertas dudas.. quizás cierta desconfianza, o más que desconfianza, incertidumbre, nose.. a pesar de eso, quiero decirte que fue uno de los recuerdos más divertidos y lindos que tengo contigo, sin pensarlo conociste mi casa, y a mis papás ese día JDAHDAJ fue uno de esos días que me hicieron reafirmar mis sentimientos, y creo que esta canción representa perfectamente todo esto que pensé y sentí aquel día :)"
},


{
titulo:"Puente",
artista:"Gustavo Cerati",
album:"Bocanada",
fecha:"20 Mar 2026",
duracion:"4:34",

portada:"https://i.scdn.co/image/ab67616d0000b2731152471596980e1bba03b6ab",
youtube:"https://www.youtube.com/watch?v=87KzIMaSORg",
nota:"Adoro esta canción con todo mi ser, casi tanto como te adoro a tí."
},


{
titulo:"Slide Away",
artista:"Oasis",
album:"Definitely Maybe",
fecha:"20 Mar 2026",
duracion:"6:32",

portada:"https://static.qobuz.com/images/covers/tc/22/mjcpkdobz22tc_600.jpg",
youtube:"https://www.youtube.com/watch?v=3GCSUSwcDwg",
nota:"Okei, los Oasis. Desde chiqui tuve una obsesión con estos muchachos y pues, aunque no tienen tantas canciones digamos 'románticas', si tiene unas cuantas... Esta es una de ellas <3."
},

{
titulo:"Talk Tonight",
artista:"Oasis",
album:"(What's The Story) Morning Glory?",
fecha:"20 Mar 2026",
duracion:"4:24",

portada:"https://www.latercera.com/resizer/v2/R42TIIPHUFDTFCDD7DT3Y6ACGI.jpg?auth=4a1e4f77e3b5e127c87fcb799f9d54c4d6a5d245d0b60374b595077a7187b68a&smart=true&width=800&height=800&quality=70",
youtube:"https://www.youtube.com/watch?v=0GXjzjke__8",
nota:"Esta canción tiene tantas frases lindas, tenía que ponerla :')"
},

{
titulo:"Live Forever",
artista:"Oasis",
album:"Definitely Maybe (Deluxe Edition)",
fecha:"20 Mar 2026",
duracion:"4:37",

portada:"https://static.qobuz.com/images/covers/tc/22/mjcpkdobz22tc_600.jpg",
youtube:"https://www.youtube.com/watch?v=C7utUa5QG4w",
nota:"¿Te han preguntado alguna vez cuál es tu canción favorita, y no sabes que responder? A mi siempre DHJSHSD ¿Quién puede tener una canción favorita? wtf.. En fin, si estoy obligado a responder la pregunta, siempre digo esta canción."
},

{
titulo:"All I Need",
artista:"Radiohead",
album:"In Rainbows",
fecha:"20 Mar 2026",
duracion:"3:49",

portada:"https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9",
youtube:"https://www.youtube.com/watch?v=kbgQFWm-3Jc",
nota:"¿Te acuerdas lo que dije en la anterior canción? Mentí un poquito jdhasjd en realidad esta canción de los cabeza de radio podría considerarse mi canción favorita."
},

{
titulo:"Tratame Suavemente",
artista:"Soda Stereo",
album:"Soda Stereo",
fecha:"20 Mar 2026",
duracion:"3:20",

portada:"https://i.scdn.co/image/ab67616d0000b2738fd9b16eb6bdd20c95717258",
youtube:"https://www.youtube.com/watch?v=xXD_IEcZbMI",
nota:"Cuando estas bravita conmigo, esto pasa por mi cabeza jsjsj 😞"
},

{
titulo:"Los Dioses Ocultos",
artista:"Caifanes",
album:"El Diablito",
fecha:"20 Mar 2026",
duracion:"4:42",

portada:"https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg",
youtube:"https://www.youtube.com/watch?v=lXkijyJUK9U",
nota:"Siento que te gustaria esta cancion :)"
},

{
titulo:"Antes de Que Nos Olviden",
artista:"Caifanes",
album:"El Diablito",
fecha:"20 Mar 2026",
duracion:"4:42",

portada:"https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg",
youtube:"https://www.youtube.com/watch?v=GJ_gHwdaHrw",
nota:"Lo mismo que la anterior juju puede que ya las hayas escuchado no lo sé.. En cualquier caso, ojalá te gusten :)"
},

{
titulo:"Viento",
artista:"Caifanes",
album:"Caifanes",
fecha:"20 Mar 2026",
duracion:"3:56",

portada:"https://i.scdn.co/image/ab67616d0000b27352842eb76a050aa8daec1251",
youtube:"https://www.youtube.com/watch?v=9KIshSBiojI",
nota:"Otra de Caifanes jsjs nose porque siento que te gustarían. Y si, esta te la dedico 100% vida <3."
},


{
titulo:"Yo Quisiera",
artista:"Reik",
album:"Reik",
fecha:"20 Mar 2026",
duracion:"3:37",

portada:"https://cdn-images.dzcdn.net/images/cover/97ce862e951858a9dad0635fbd6fa371/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=QZKrLIoMyxY",
nota:"Okeei, volvamos un poco a mi infancia jeje.. Por alguna razón tenía una obsesión grandisima con estos muchachos cuando era un chiquillo.. Me parece que por eso salí así de cursi y melosillo😔 los escuchaba 24/7, me acuerdo que incluso fui al concierto de ellos DJAHSJJ todo un verdadero fan era yo.. En fin, les guardo mucho cariño, y claro, hay temazos como este, que definitivamente tienen que estar acá :)"
},

{
titulo:"Qué Vida la Mía",
artista:"Reik",
album:"Reik",
fecha:"20 Mar 2026",
duracion:"2:51",

portada:"https://cdn-images.dzcdn.net/images/cover/97ce862e951858a9dad0635fbd6fa371/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=rnjCkcC2jP8",
nota:"Tengo todo este amor y solo es para tí..😔🙏🏻"
},

{
titulo:"Niña",
artista:"Reik",
album:"Reik",
fecha:"20 Mar 2026",
duracion:"2:51",

portada:"https://cdn-images.dzcdn.net/images/cover/97ce862e951858a9dad0635fbd6fa371/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=Z3IOLJypXuc",
nota:"Siento que para este punto debes pensar que esta es la playlist más melosa y cursi del planeta JAHSDJAD, y déjame decirte que si, una disculpita 😔."
},

{
titulo:"Sabes",
artista:"Reik",
album:"Secuencia",
fecha:"20 Mar 2026",
duracion:"3:41",

portada:"https://cdn-images.dzcdn.net/images/cover/75667ab1c526ea6a141480991c3a87c1/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=lBiP5mkp0fM",
nota:"Clásico, pero este si te lo dedico corazón :) Imaginame a mi de chiquito sacando esta canción en la guitarra, disque por si llegaba la muchacha indicada a mi vida, estar listo para dedicarla 🥰 SHJAHDJ bueno, en esa época quizás no llegó.. pero lo bueno se hace esperar :) pero ya no tengo la voz para cantarla amor, es muy aguda esa canción para mi yo adulto 😔 JSDGADHAJGD asi que tendras que conformarte con que te la dedique nomás vida :)"
},

{
titulo:"Déjate Llevar",
artista:"Reik",
album:"Peligro",
fecha:"20 Mar 2026",
duracion:"3:16",

portada:"https://cdn-images.dzcdn.net/images/cover/be31e784bb4b063b32217b4cae11bcd5/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=sNDIm4Z0ISs",
nota:"Esta solo los reales fanses de Reik la conocen 😔🙏🏻 Dios, es que con razón romantizo tanto la vida yo JSHDAHJ"
},

{
titulo:"Todo Cambió",
artista:"Camila",
album:"Todo Cambió",
fecha:"20 Mar 2026",
duracion:"5:14",

portada:"https://i.scdn.co/image/ab67616d0000b2737e0721f90f91d37de250788f",
youtube:"https://www.youtube.com/watch?v=2oooF0_1390",
nota:"Bueno, siguiendo con esta época sdjshja digamos que si el 70% de la música que escuchaba era Reik, el restante escuchaba Camila JHDJSDHAJ mentira, pero si me gustaban mucho también, definitivamente esta canción debía estar acá :)"
},

{
titulo:"Espacio Sideral",
artista:"Jesse & Joy",
album:"Esta Es Mi Vida",
fecha:"20 Mar 2026",
duracion:"3:42",

portada:"https://cdn-images.dzcdn.net/images/cover/d20047edce87ad4c8e1ec7a2a1e3c128/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=sEnMJAGgYz8",
nota:"Mentí con lo anterior, en realidad me parece que tenía una obsesión con los grupos mexicanos de pop de esa época JDSHDAJ Jesse & Joy no era la excepción, y seguramente esta era mi favorita :) "
},

{
titulo:"Entra en Mi Vida",
artista:"Sin Bandera",
album:"Sin Bandera",
fecha:"20 Mar 2026",
duracion:"4:08",

portada:"https://i.scdn.co/image/ab67616d0000b2738318ddaac22cbcf67416c2f7",
youtube:"https://www.youtube.com/watch?v=-hoZpSoKAYE",
nota:"Otro que entra a este grupo, aunque en realidad en esa época no era tan fan ajshdja resulta que, por alguna razón de chiquito tenía la realidad distorsionada, y tenía esta idea de que había una rivalidad entre Reik, Camila y Sin Bandera.. y como obvio yo era el más fan de Reik, decía que no podía escuchar musica de la competencia 😔 AJHDJASDH En fin, superé esa fase, y Sin Bandera diomio, los quiero mucho también jsjs :) Pero que trágicas sus canciones, nono"
},


{
titulo:"Algo Así",
artista:"Fausto Miño",
album:"Yo Soy",
fecha:"20 Mar 2026",
duracion:"3:38",

portada:"https://i.scdn.co/image/ab67616d00001e0200400a9c3a00cb63c86e9811",
youtube:"https://www.youtube.com/watch?v=kpqKgivNmcQ",
nota:"Por esta misma época también se metió este señor, muy infravalorado honestamente, muy buenas canciones tiene dajshdaj😔. ¿Y esta canción? Increíble la verdad, yo soñaba que protagonizaba este video.. pero tu no te lo imagines sí? SDHAJDHJ😔."
},

{
titulo:"If I Ain't Got You",
artista:"Alicia Keys",
album:"The Diary Of Alicia Keys",
fecha:"20 Mar 2026",
duracion:"3:49",

portada:"https://i.scdn.co/image/ab67616d0000b27356ff19308ebeb48e2ba6094b",
youtube:"https://www.youtube.com/watch?v=Ju8Hr50Ckwk",
nota:"Cambiamos el mood totalmente juju. Otra que quizás no repitas mucho, pero te obligo a escucharla por lo menos una vez :) "
},



{
titulo:"Get You (feat. Kali Uchis)",
artista:"Daniel Caesar, Kali Uchis",
album:"Freudian",
fecha:"20 Mar 2026",
duracion:"4:38",

portada:"https://cdn-images.dzcdn.net/images/cover/282e45bef1995c2c6f2901e34c4ab560/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=jGVM3JdzL4Y",
nota:"Ok, pasemos con el Danielito. Yo considero que es mi cantante favorito desde hace ya un tiempo. En realidad no tiene la voz más virtuosa que he escuchado, pero nose, algo tiene que me genera una sensación de paz te juro jsjs. Y bueno, esta canción es la primera que escuché de él, de las canciones más bonitas que tiene, con unas vibes que me hacen volar jsjs, y pues, 100% tenía que estar acá :). Además, me encanta lo directo que es el mensaje: 'Tu eres todo lo que necesito <3'"
},


{
titulo:"Best Part (feat. H.E.R.)",
artista:"Daniel Caesar, H.E.R.",
album:"Freudian",
fecha:"20 Mar 2026",
duracion:"3:30",

portada:"https://cdn-images.dzcdn.net/images/cover/282e45bef1995c2c6f2901e34c4ab560/0x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=hKgl5-lkT8U",
nota:"Si pensé en hacer la playlist, fue básicamente porque estaba escuchando esta canción y dije: 'Cómo me gustaría tener la capacidad de decirle todas estas cosas tan lindas con mis propias palabras'. Yo soy un cero a la izquierda para escribir, canciones mucho menos, es mi mayor frustración en la vida jsdhahdj 😔 peeero si tengo muchas canciones que escucho y digo, ojalá haber escrito esto, porque representan tal cual como me siento, adornado de la forma más elegante y linda posible jsjs. Bueno, esta es una de de esas canciones, y quiero compartirla contigo <3."
},

{
titulo:"Baby Blue (feat. Norwill Simmonds)",
artista:"Daniel Caesar, Norwill Simmonds",
album:"Son of Spergy",
fecha:"20 Mar 2026",
duracion:"4:38",

portada:"https://i.scdn.co/image/ab67616d0000b2732bad6e56e77d5bef0aa3f2dc",
youtube:"https://www.youtube.com/watch?v=5FxoecxkH0o",
nota:"Ok, esta es de las canciones que estoy 90% que no te van a gustar jasdgsah.. pero la letra es muy linda :') me representa.."
},

{
titulo:"My Favorite Part",
artista:"Mac Miller, Ariana Grande",
album:"The Divine Feminine",
fecha:"21 Mar 2026",
duracion:"3:36",

portada:"https://i.scdn.co/image/ab67616d0000b2732e92f776279eaf45d14a33fd",
youtube:"https://www.youtube.com/watch?v=po1YF1p31-A",
nota:"No soy el mayor fan de Mac Miller, pero me gustan las vibes de esta canción, y la letra :')"
},

{
titulo:"You And Me",
artista:"Lifehouse",
album:"Lifehouse",
fecha:"21 Mar 2026",
duracion:"3:15",

portada:"https://upload.wikimedia.org/wikipedia/en/b/b0/Lifehouse_Album.JPG",
youtube:"https://www.youtube.com/watch?v=gTyDzU28-2w",
nota:"Nosé donde escuche esta canción la verdad, pero esta re linda, de esas que suenan en las películas de romance, en la escena de reconciliación bajo la lluvia😔...JSHGDADGJ yaa que decía.."
},


{
titulo:"Last Night on Earth",
artista:"Green Day",
album:"21st Century Breakdown",
fecha:"21 Mar 2026",
duracion:"3:57",

portada:"https://cdn-images.dzcdn.net/images/cover/ebd6fc49c3c87cbd5441424f151c04f2/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=iicPzKXSImg",
nota:"La verdad no escucho Green Day necesariamente por sus canciones de amor, porque básicamente no tienen ajhdsajhd esta es casi que la única, pero me gusta mucho y me representa :)"
},

{
titulo:"I Could Die for You",
artista:"Red Hot Chili Peppers",
album:"By the Way (Deluxe Edition)",
fecha:"21 Mar 2026",
duracion:"3:13",

portada:"https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4",
youtube:"https://www.youtube.com/watch?v=GUsJ9iniuQg",
nota:"La única canción de amor que tienen estos bros y les quedo re buena jsjsjs :')"
},

{
titulo:"Don't Go Away",
artista:"Oasis",
album:"Be Here Now",
fecha:"21 Mar 2026",
duracion:"4:49",

portada:"https://www.sopitas.com/wp-content/uploads/2017/08/5-datos-curiosos-be-here-now-oasis-portada-2-1024x1024.jpg",
youtube:"https://www.youtube.com/watch?v=uYqWFve8gQc",
nota:"Nunca te vayas de mi vida corazón, pofi :("
},

{
titulo:"Ballenas de Ruido",
artista:"Da Pawn",
album:"Verano en Coma",
fecha:"21 Mar 2026",
duracion:"5:30",

portada:"https://i.scdn.co/image/ab67616d0000b27385845543df5cc4ab459c21ef",
youtube:"https://www.youtube.com/watch?v=GPvjaeJB_R8",
nota:"¿Es un temazo? Sí. ¿Tengo la menor idea de a que se refiere la letra? Ni la más remota idea. Pongo esta canción porque es parte de mi fase 'apoyo al arte emergente ecuatoriano✊🏻'AJHAJJAS y pues si, aunque no tengo idea que que hablan en el 80% de canciones que me gustan de este grupo😔, si fueron parte importante para moldear mis gustos jsjs. También me hicieron dar cuenta que no solo la letra es lo que te hace sentir; para mí, la mayoría de veces lo que más me llega en una canción es la instrumental, muy por encima que la letra... pero bueno esa es mi opinión que nadie pidió AJHDJ😔. En fin, esta canción especialmente me transmite unas vibes tan geniales, y la quería compartir contigo :)"
},

{
titulo:"Ficción",
artista:"Les Petits Bâtards",
album:"Inconcluso",
fecha:"21 Mar 2026",
duracion:"4:33",

portada:"https://i.scdn.co/image/ab67616d0000b273bcb315547ed70f74a3236c7c",
youtube:"https://www.youtube.com/watch?v=IFO-oc_npG0",
nota:"Siempre le he admirado a este bro, literal escribió esta canción a los 15, osea ???? cómo???😔 HAJDHAJ En fin, me gusta mucho esta canción, me recuerda a los últimos años del colegio, y al Teo porque con él siempre fue la obsesión por este muchacho AJAJ. Una vez, cantamos esta canción en un programa del colegio, y un profe creyó que era nuestra, y nos dió un super speach sobre que tenemos potencial y así, y nosotros pues, no tuvimos el corazón de decirle que no era nuestra canción JDHASJHDJA😔. En fin, hagamos como mi profe, y pensemos que yo te escribí esta canción, mua JAJA <3"
},

{
titulo:"Krrusel",
artista:"Amantina",
album:"Vivo, Nasty",
fecha:"21 Mar 2026",
duracion:"3:36",

portada:"https://i.scdn.co/image/ab67616d0000b27324d3e68ba083ad092d92de88",
youtube:"https://www.youtube.com/watch?v=heoUtv_g1Tc",
nota:"Del mismo bro de antes, pero 10 años despues AJAJ. Así se siente el peak del enamoramiento x2🙃"
},

{
titulo:"Eros (Claroscuro)",
artista:"La Máquina Camaleón",
album:"Eros (Claroscuro)",
fecha:"21 Mar 2026",
duracion:"2:48",

portada:"https://lastfm.freetls.fastly.net/i/u/300x300/686a3e9f75ace8f847f33934f7ae918e.jpg",
youtube:"https://www.youtube.com/watch?v=fb2DvuwNivc",
nota:"Seguimos con mi lado Indie ecuatoriano jdjahjsh🤓. Cuando la escuché por primera vez la verdad que no me gustó nada ajhdaj pero recientemente le di otra oportunidad y nose porqué no me gustó la primera vez si es mi tipo de canción jahsaj Letra curiosa, pero linda :) "
},

{
titulo:"Lo que Dijimos",
artista:"Mojo Myst",
album:"Limbo",
fecha:"21 Mar 2026",
duracion:"3:56",

portada:"https://i.scdn.co/image/ab67616d00001e02d1e62308d1b844ca3060194d",
youtube:"https://www.youtube.com/watch?v=oAk227xfIVM",
nota:"Creo que no hay canción que describa mejor cómo me sientí esa vez que quería hablar contigo y no me salían las palabras 😭 o más bien, como me sentí después, cuando supe exteriorizar todo por mensaje jsjs. En fin, es de esas canciones que me gustaría haber escrito para tí :') "
},


{
titulo:"Entre Caníbales - MTV Unplugged",
artista:"Soda Stereo",
album:"Confort y Música Para Volar",
fecha:"22 Mar 2026",
duracion:"4:54",

portada:"https://i.discogs.com/xt5IvHHiVylXCFuHR8g7MzfaQUUCdOZB6CVg7IT12QI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzc2/MDIxLTE1OTk1MTQ2/NjctNjE5MC5qcGVn.jpeg",
youtube:"https://www.youtube.com/watch?v=v-n9BCC9J5c",
nota:"Otra de mis canciones favoritas de toda la vida. De chiquito yo soñaba que estaba en esta presentación, y que tocaba el solo de teclado y luego cantaba JADJHDJ En realidad, ahora que me pongo a analizar fríamente, me parece que esta canción habla más de una relación tóxica... troleada JDHAJSDH en fin, amo esta canción con todo mi ser."
},

{
titulo:"Zapatillas",
artista:"El Cómodo Silencio De Los Que Hablan Poco",
album:"Amanda",
fecha:"22 Mar 2026",
duracion:"3:32",

portada:"https://images.genius.com/43597257082bb85b487e5684ea66bde8.1000x1000x1.jpg",
youtube:"https://www.youtube.com/watch?v=3IHB2vaSOtk",
nota:"Nose como llegué a esta canción pero, me hace pensar en tí y tus ojos de gato mi amor :)"
},


{
titulo:"Luna Roja",
artista:"Soda Stereo",
album:"Dynamo (Remastered)",
fecha:"22 Mar 2026",
duracion:"5:31",

portada:"https://i.scdn.co/image/ab67616d0000b2734e44ce650cfb734faca49617",
youtube:"https://www.youtube.com/watch?v=Y6FyYnhxREs",
nota:"Otra de mis canciones favoritas, el problema es que nunca pude comprender del todo la letra JSDHAGDJ en fin, esta canción está aquí también porque, suena de fondo en un video que tenemos juntitos en mi cuarto, ese que no me pasaste y tuve que pasarme yo, ese :)) y pues, me encanta ese video :')"
},

{
titulo:"Es por Ti",
artista:"Cómplices",
album:"La Danza De La Ciudad",
fecha:"25 Mar 2026",
duracion:"4:31",

portada:"https://i.scdn.co/image/ab67616d0000b273c41cbf37dd83c77e98c6639d",
youtube:"https://www.youtube.com/watch?v=yUEOB2BIpN4",
nota:"Ok, todas estas canciones de seguro si las conoces, pero pues, por si ninguna de las que te he enseñado hasta ahora te gustan, con estas me voy a la segura 🥰 JDHJASD mentira, igual me representan mucho y lo que siento por usted mailov, mua :) "
},


{
titulo:"Amor Clandestino",
artista:"Maná",
album:"Drama Y Luz",
fecha:"25 Mar 2026",
duracion:"4:53",

portada:"https://i.scdn.co/image/ab67616d0000b273507bcad8411e6b5ca6add50c",
youtube:"https://www.youtube.com/watch?v=d2YAeSKdJdc",
nota:"Se que te gusta Maná. Tenía que estar esta canción jsjs :)"
},

{
titulo:"Eres Mi Religión",
artista:"Maná",
album:"Revolución de Amor",
fecha:"25 Mar 2026",
duracion:"5:29",

portada:"https://akamai.sscdn.co/uploadfile/letras/albuns/5/b/6/4/234821761673592.jpg",
youtube:"https://www.youtube.com/watch?v=mrhcucasAlw",
nota:"Y esta también, que ya hace falta una cursi jsjs :)"
},

{
titulo:"Te Amo y Más",
artista:"Gustavo Santaolalla, Paul Williams",
album:"The Book of Life (Original Motion Picture Soundtrack)",
fecha:"25 Mar 2026",
duracion:"2:36",

portada:"https://i.scdn.co/image/ab67616d0000b2739856d8e5c90a304e0cbe9209",
youtube:"https://www.youtube.com/watch?v=p_1Osm5xE5Y",
nota:"Si, yo también amo esta película. Sí, yo también me dejaría morder por una serpiente de dos cabezas solo para reencontrarme contigo. Y sí, efectivamente, en algún momento tendré que ir a tu casa vestido de mariachi, y te cantaré esta canción, una disculpita por la verguenza que te haré pasar😔."
},

{
titulo:"Negra",
artista:"Pancho Terán",
album:"Tu Lugar",
fecha:"25 Mar 2026",
duracion:"4:04",

portada:"https://i.scdn.co/image/ab67616d0000b273052d172b74ab4419940a23b0",
youtube:"https://www.youtube.com/watch?v=m1hYh_7i92M",
nota:"negrenegrenegre🥰"
},

{
titulo:"Solo Tu Amor",
artista:"AU-D",
album:"Pequeños, Medianos y Grandes Éxitos",
fecha:"25 Mar 2026",
duracion:"5:16",

portada:"https://i.scdn.co/image/ab67616d0000b273b3b2c12777ba216f2726271e",
youtube:"https://www.youtube.com/watch?v=Fh_nFRsk9YU",
nota:"AU-D otro de mis patrones desde la cuna 🙏🏻 y esta canción es clásico en mi cátalogo de canciones rómanticas 😔AJSHJA "
},


{
titulo:"Ding Dong, Ding Dong, Estas Cosas del Amor",
artista:"Leonardo Favio",
album:"Mis 30 Mejores Canciones",
fecha:"25 Mar 2026",
duracion:"3:32",

portada:"https://cdn-images.dzcdn.net/images/cover/8f500b5ba1ac4bea5ae8f5d03ed08b44/1900x1900-000000-80-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=OAnl3iR9mtk",
nota:"Mi abuelita me enseño esta canción de chiquito, nunca le presté demasiada atención, pero recientemente volví a escucharla y me gusta mucho la verdad :), pero también me da risa porque dhjahdaj, me recuerda un poco a nosotros, no se que piensas DHSAJHDJ :)"
},


{
titulo:"CONTANDO OVEJAS",
artista:"WOS",
album:"OSCURO ÉXTASIS",
fecha:"25 Mar 2026",
duracion:"3:23",

portada:"https://akamai.sscdn.co/uploadfile/letras/albuns/c/0/6/e/1193901637322112.jpg",
youtube:"https://www.youtube.com/watch?v=OGIfoh73RbE",
nota:"Mientras sigo agregando canciones me doy cuenta que si está muy cursi la lista aghdjag así que también quiero ponerte canciones que simplemente me gusten y sus vibes me recuerden a tí juju :) La letra de esta en realidad es algo trágica, pero me da unas vibes muy cool :)"
},

{
titulo:"Te Amaré - Acústico",
artista:"TercerMundo",
album:"Acústico",
fecha:"25 Mar 2026",
duracion:"4:33",

portada:"https://i.scdn.co/image/ab67616d0000b2734aa5fbb7abd5edff9e769d3c",
youtube:"https://www.youtube.com/watch?v=znKXjxFo8Wg",
nota:"Siguiendo con las canciones trágicas jhdajhd no quiero sonar tan migajero, pero.. Dios no quiera algo pasa y nos separamos amor, este sería otro de mis himnos😔"
},

{
titulo:"No Te Apartes de Mí (feat. Valeria Bertuccelli)",
artista:"Vicentico, Valeria Bertuccelli",
album:"Vicentico 5",
fecha:"25 Mar 2026",
duracion:"3:18",

portada:"https://i.scdn.co/image/ab67616d0000b2732f9529f86173e83d12c917cf",
youtube:"https://www.youtube.com/watch?v=tJOu5ukveiQ",
nota:"Siempre quise dedicarle esta canción a alguien, por fin encontré a quién :). Si tuviera que recuperarte cantandote una canción, esta es una de las candidatas sjjsjs"
},

{
titulo:"La Gloria Eres Tú",
artista:"Luis Miguel",
album:"Romances",
fecha:"25 Mar 2026",
duracion:"3:23",

portada:"https://akamai.sscdn.co/tb/next/?url=%2Fuploadfile%2Fletras%2Falbuns%2F1%2F3%2F8%2Ff%2F10578.jpg&w=3840&q=75",
youtube:"https://www.youtube.com/watch?v=h-GSyBwKuGE",
nota:"Una de Luismi, ¿por qué no? La verdad no siento que sea el mayor fan, pero esta canción 😭"
},

{
titulo:"A un minuto de ti",
artista:"Mikel Erentxun",
album:"Naufragios",
fecha:"25 Mar 2026",
duracion:"3:54",

portada:"https://i.scdn.co/image/ab67616d0000b2739f0f39e5d988df4a7cde9e99",
youtube:"https://www.youtube.com/watch?v=zQ2oh3VCnk8",
nota:"A un minuto de ti, te seguiré <3"
},


{
titulo:"Prófugos - Me Verás Volver Gira 2007",
artista:"Soda Stereo",
album:"Gira Me Verás Volver",
fecha:"25 Mar 2026",
duracion:"5:50",

portada:"https://i.scdn.co/image/ab67616d0000b27352cd84d57eb20d5e477a94a9",
youtube:"https://www.youtube.com/watch?v=eguctGjUNLI",
nota:"Creo que ya te has dado cuenta con esta playlist que quizás me gusta un poquito Cerati jeje. Esta de seguro haz escuchado, lo sé; pero la pongo porque primero, como datito que se que nadie preguntó jadgajas😔 uno de mis sueños (ya imposibles tristemente) desde la infancia siempre fue ir a este concierto, no solo a uno de Soda Stereo, sino a este concierto en específico, a esa gira. Claro que era imposible, pero desde que vi los videos de ese concierto me hicieron sentir algo que no te se describir jaja.. ya sé, algo exagerado, pero así fue 😔; y segundo, pues la letra de esta canción en concreto me parece muy bella, para mí, habla de un amor intenso que, a pesar de los problemas, busca la manera de seguir en pie, juntos :) "
},

{
titulo:"Si no te tengo a ti",
artista:"Hombres G",
album:"Las baladas",
fecha:"25 Mar 2026",
duracion:"4:46",

portada:"https://i.scdn.co/image/ab67616d0000b273876ed86b8c7529c564af01bb",
youtube:"https://www.youtube.com/watch?v=3Bcy2jVmgz0",
nota:"Real."
},

{
titulo:"Something",
artista:"The Beatles",
album:"Abbey Road (Remastered)",
fecha:"25 Mar 2026",
duracion:"3:02",

portada:"https://akamai.sscdn.co/uploadfile/letras/albuns/6/0/a/0/262601715606697.jpg",
youtube:"https://www.youtube.com/watch?v=iEpecwXM9Rw",
nota:"Una fase mía más. Antesitos de pandemia yo era de esos especialitos que decían que odiaban el reguetón y así😔JADHAJSHDJ. Entonces, solo escuchaba como rock clásico en inglés JDHAJ y en ese descubrimiento pues llegué a estos muchachos, y se convirtieron en otra de mis obsesiones más grandes. Los amo mucho, me enseñaron inglés, me obligaron a ver cientos de videos y documentales sobre ellos, y me regalaron esta canción tan bella, que no se dedica a cualquiera <3"
},

{
titulo:"Jealous Guy",
artista:"John Lennon",
album:"Imagine (The Ultimate Collection)",
fecha:"25 Mar 2026",
duracion:"4:14",

portada:"https://cdn-images.dzcdn.net/images/cover/68a8b2499e9f658e363f42bbb4b6fa9e/1900x1900-000000-81-0-0.jpg",
youtube:"https://www.youtube.com/watch?v=L5JS3deWggA",
nota:"Emmm jeje, si soy, solo un poquito :')"
},

{
titulo:"Diez Pasos Hacia Ti",
artista:"Daniel, Me Estás Matando",
album:"Suspiros",
fecha:"26 Mar 2026",
duracion:"3:30",

portada:"https://i.scdn.co/image/ab67616d0000b273cf3012e999e2810045f886e4",
youtube:"https://www.youtube.com/watch?v=gJJk7TIRcIo",
nota:"Son fan de los boleros, y sobre todo de estos bros jsjs. Estas canciones suyas me parecen hermosas y todas tienen tu nombre :)"
},

{
titulo:"¿Qué Se Siente Que Me Gustes Tanto?",
artista:"Daniel, Me Estás Matando",
album:"Suspiros",
fecha:"26 Mar 2026",
duracion:"3:05",

portada:"https://i.scdn.co/image/ab67616d0000b273cf3012e999e2810045f886e4",
youtube:"https://www.youtube.com/watch?v=MkZ8MlUO_Dw",
nota:"De verdad, ¿qué se siente? 😔"
},

{
titulo:"Es Verdad",
artista:"Daniel, Me Estás Matando",
album:"Grandes Éxitos del Boleroglam",
fecha:"26 Mar 2026",
duracion:"2:42",

portada:"https://i.scdn.co/image/ab67616d00001e021a63d9b8f6d66e681fec3daa",
youtube:"https://www.youtube.com/watch?v=xV9mqKWBqaw",
nota:"Sé que eres tú, en esta y mil realidades <3."
},

{
titulo:"Tú",
artista:"maye",
album:"Tú",
fecha:"26 Mar 2026",
duracion:"3:27",

portada:"https://i.scdn.co/image/ab67616d0000b273e535e8147235d96bb734ba41",
youtube:"https://www.youtube.com/watch?v=OMusqsMcHkc",
nota:"Amor, eres tú."
},

{
titulo:"Muriendo De Envidia",
artista:"C. Tangana, Eliades Ochoa",
album:"El Madrileño",
fecha:"26 Mar 2026",
duracion:"3:03",

portada:"https://cdn-images.dzcdn.net/images/cover/d1833fd04e46b042583fb0b67ca66013/500x500.jpg",
youtube:"https://www.youtube.com/watch?v=HfkjnAv_uRE",
nota:"Se están muriendo de envidia.. <3 "
},

{
titulo:"Here Comes Your Man",
artista:"Pixies",
album:"Doolittle",
fecha:"27 Mar 2026",
duracion:"3:21",

portada:"https://i.scdn.co/image/ab67616d0000b2730ab3c2a306c614fae36ff1d6",
youtube:"https://www.youtube.com/watch?v=qKP2w50VofE",
nota:"Okei, tu me hiciste ver esa película (500 días), amé el soundtrack (porque ajá, soy literal el muchacho ese😔 DGAJDSA), yyy si, esa es la justificación para poner esta canción acá :)"
},

{
titulo:"Friday I'm In Love",
artista:"The Cure",
album:"Wish",
fecha:"27 Mar 2026",
duracion:"3:35",

portada:"https://i.scdn.co/image/ab67616d0000b273e410fa31e3dfcc7521cde86d",
youtube:"https://www.youtube.com/watch?v=0HXMfPLlqgA",
nota:"Así se siente el peak del enamoramiento :) Además que siento que es una canción que el mansito de 500 días escucharía 100%😔 JSHJADHJSJ"
},

{
titulo:"There She Goes",
artista:"The La's",
album:"The La's",
fecha:"27 Mar 2026",
duracion:"2:42",

portada:"https://i.scdn.co/image/ab67616d0000b2730e42d457a15ef2f133976f6b",
youtube:"https://www.youtube.com/watch?v=DZcjP4tT2ts",
nota:"Otra que me da esa misma vibe :)"
},


{
titulo:"PELÍCULA",
artista:"El Zar",
album:"PELÍCULA",
fecha:"27 Mar 2026",
duracion:"3:13",

portada:"https://indieclubargentina.com/wp-content/uploads/2020/08/20200829_141138_0000.jpg",
youtube:"https://www.youtube.com/watch?v=c0TUf8xQpE8",
nota:"Ayer en mi cuarto quería poner una canción pero no quise cortar el momento.. Bueno, era esta :)"
},

{
titulo:"Japanese Denim",
artista:"Daniel Caesar",
album:"Get You - Single",
fecha:"29 Mar 2026",
duracion:"4:31",

portada:"https://i.scdn.co/image/ab67616d0000b2737465bef53d9e3a27c63c7a1d",
youtube:"https://www.youtube.com/watch?v=QWkzUfLaHlw",
nota:"Otra más del Danielito.. pero es que si hace unas canciones bien bonitas la verdad 😔, y esta no es la excepción juju. ¿Te cuento algo que si te dijera en persona me dirías 'Ay, si claro 😴' ? AJHDSJDAJ.. No sabía lo que se sentía estar así de enamorado de alguien hasta ayer en la casa de Marcus :) <3"
},

{
titulo:"Rearrange My World",
artista:"Daniel Caesar, Rex Orange County",
album:"Rearrange My World / There’s Something About You",
fecha:"30 Mar 2026",
duracion:"3:49",

portada:"https://i.scdn.co/image/ab67616d0000b27312046e0feb232527e09e6d43",
youtube:"https://www.youtube.com/watch?v=vykTSl7MZ4I",
nota:"De las canciones más lindas que escuché recientemente :')"
},

{
titulo:"La Hoguera",
artista:"Rupatrupa",
album:"Directo en Sdma",
fecha:"30 Mar 2026",
duracion:"3:14",

portada:"https://i.scdn.co/image/ab67616d0000b2733ecf25abea9501263e7a0b08",
youtube:"https://www.youtube.com/watch?v=6gke3o_PryE",
nota:"Acampada, media noche, ambos juntitos frente a la hoguera porque hace frío, convenientemente en esta hipotética situación tengo una guitarra AJHDAJ te veo y simplemente te digo ... :)"
},

{
titulo:"Dulce Compañía",
artista:"Julieta Venegas",
album:"Limon Y Sal",
fecha:"30 Mar 2026",
duracion:"3:22",

portada:"https://i.scdn.co/image/ab67616d0000b273f4c7ab5936bb957554aeb2ca",
youtube:"https://www.youtube.com/watch?v=HGVnG9WX5MQ",
nota:"Eres duuulce, compañiiiiia :) <3"
},

{
titulo:"My Jinji",
artista:"Sunset Rollercoaster",
album:"Jinji Kikko",
fecha:"30 Mar 2026",
duracion:"6:41",

portada:"https://i.scdn.co/image/ab67616d0000b2730135d8ffed74e5f3ad8f3b2a",
youtube:"https://www.youtube.com/watch?v=M0UipBVn4kY",
nota:"Descubrí a estos chinitos hace unos años jsjsj. En realidad solo me sé esta canción, pero que bonita canción :')"
},

{
titulo:"bad",
artista:"wave to earth",
album:"0.1 flaws and all.",
fecha:"30 Mar 2026",
duracion:"4:23",

portada:"https://i.scdn.co/image/ab67616d0000b27324f8c3ad20b7c6cfecb5832e",
youtube:"https://www.youtube.com/watch?v=vPTEch32OV8",
nota:"Estos chinitos me gustan más que los anteriores AJDHJA bueno, conozco más canciones de ellos, y esta en específico me representa totalmente y lo que siento cada que salimos :)"
},

{
titulo:"My Kind of Woman",
artista:"Mac DeMarco",
album:"2",
fecha:"30 Mar 2026",
duracion:"3:11",

portada:"https://i.scdn.co/image/ab67616d0000b2739d377496c6bc8724b521222d",
youtube:"https://www.youtube.com/watch?v=VTSCfqHEVbQ",
nota:"Ya tocaba una así, cursilera y gringa, como me gustan🥰 (JDHASDHA)"
},


{
titulo:"Cruzaría el Mar",
artista:"Luca Bocci",
album:"No Pierdas la Simpleza",
fecha:"30 Mar 2026",
duracion:"2:47",

portada:"https://i.scdn.co/image/ab67616d0000b273815817b846ce18637c720202",
youtube:"https://www.youtube.com/watch?v=lGqwivqml6U",
nota:"Yo si cruzaría el mar por tí mi amor <3"
},

{
titulo:"Patient",
artista:"Charlie Puth",
album:"Voicenotes",
fecha:"30 Mar 2026",
duracion:"3:11",

portada:"https://i1.sndcdn.com/artworks-S0LuphvStdIT-0-t500x500.jpg",
youtube:"https://www.youtube.com/watch?v=uosqKR_0jWE",
nota:"Ya se me esta haciendo muy larga la lista lose, me disculpo😔. Otra fase mía (que pesado que soy JSJASJ), el Charlie. Salí de la obsesión de Reik y entre a mi obsesión por el pop en inglés, y este bro era el N1 para mí jadhaja. Ya, mucho me enrollo 😔, cuando te hago enojar, o me porto bobo/inmaduro... cuando se me pasa y reflexiono, piensa que en mi cabecita te quiero pedir esto :')"
},

{
titulo:"Hotel California",
artista:"Joji",
album:"Piss In The Wind",
fecha:"30 Mar 2026",
duracion:"2:09",

portada:"https://images.genius.com/55e4ce0a8c1463b9bf7c1f1c060e3604.999x999x1.png",
youtube:"https://www.youtube.com/watch?v=AoP6rtmZeBo",
nota:"Frase por frase lo que dice esta fokin canción :) (menos la parte trágica, eso no 😔 ajshdja)"
},

{
titulo:"Smithereens",
artista:"Twenty One Pilots",
album:"Trench",
fecha:"30 Mar 2026",
duracion:"2:57",

portada:"https://www.todomusica.org/imagenes/twenty_one_pilots/hq/disco_trench.webp",
youtube:"https://www.youtube.com/watch?v=jY7-hu_UjoE",
nota:"Mentííí..no ha sido la única canción de amor de los veintiún pilotos, recordé que había esta también😭 y si, si, si.   "
},


{
titulo:"Simplemente Pasan",
artista:"Morat, Cami",
album:"¿A Dónde Vamos?",
fecha:"30 Mar 2026",
duracion:"3:01",

portada:"https://i.scdn.co/image/ab67616d0000b27302bf1057986d3d64dec7e66a",
youtube:"https://www.youtube.com/watch?v=i-ZerfMEOv4",
nota:"No quería poner ninguna de Morat porque jeje me iba a sentir un poquis básico 😔JDHAJD. Pero es que esta canción si me parece súper linda :(...Qué suerte la mía que te volví a encontrar mi amor :')"
},




{
titulo:"Lento",
artista:"Bandalos Chinos",
album:"BACH",
fecha:"30 Mar 2026",
duracion:"3:43",

portada:"https://i.scdn.co/image/ab67616d0000b27347bff00892e14344beec353d",
youtube:"https://www.youtube.com/watch?v=cQAVRdw94LE",
nota:"Me gusta mucho esta canción porque siento que me ha ayudado a comprender la importancia de ser paciente en la relación; quizás hubo momentos en los que si desesperaba por esta 'desconexión' que te dije que sentía, y no dejaba de pensar en las cosas que yo quería que pasaran, más no pensé en como te sentías tú al respecto.. Entonces bueno, ahora voy entendiendo que todo lo que tenga que pasar, pasará a su tiempo, sin tratar de apresurar nada.. Lo único que me importa es que te sientas cómoda, feliz y en confianza conmigo amor míio :)"
},


{
titulo:"Corazón de pollo",
artista:"Estamos Perdidos",
album:"Corazón de pollo",
fecha:"30 Mar 2026",
duracion:"3:23",

portada:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2c/82/74/2c827401-a655-ed74-effa-ec1a7f648233/820200052933.jpg/3000x3000bb.jpg",
youtube:"https://www.youtube.com/watch?v=xjNmmqwZ3hw",
nota:"Reciensito descubrí esta canción de unos mansitos de acá, y me gustó jsjs siento que me representa mucho, además, hay que ir al Vulcano Park corazón, confirmar 🫡"
},


{
titulo:"M.A.I",
artista:"Milo j",
album:"111",
fecha:"30 Mar 2026",
duracion:"3:04",

portada:"https://akamai.sscdn.co/uploadfile/letras/albuns/d/7/d/f/1808221732032925.jpg",
youtube:"https://www.youtube.com/watch?v=MldGX_mbS-o",
nota:"Una del Milo joto. La más básica, lo sé, pero es que estando en el concierto me hizo pensar en tí :( Porque de verdad, fuiste una bendición y me toca agradecer <3."
},
];



let indiceActual=0;

let modoAleatorio=false;
let modoFavoritos = false;

let historialAtras = [];
let historialAdelante = [];

let listaActual = canciones;

const lista=document.getElementById("lista");

document.getElementById("cantidad").textContent=canciones.length;

/* cargar playlist */

function cargar(listaCanciones){
    
listaActual = listaCanciones;
lista.innerHTML="";

listaCanciones.forEach((c,i)=>{

let div=document.createElement("div");

div.className="cancion";

div.innerHTML=`

<div>${i+1}</div>

<div class="fav-btn">♡</div>

<img src="${c.portada}">

<div>
${c.titulo}<br>
<span style="opacity:.6">${c.artista}</span>
</div>

<div>${c.album}</div>

<div>${c.fecha}</div>

<div>${c.duracion}</div>

`;

div.onclick=()=>reproducir(c,i);

lista.appendChild(div);

/* FAVORITAS */

const favBtn = div.querySelector(".fav-btn");

if(favoritas.includes(i)){
favBtn.textContent="❤";
favBtn.classList.add("fav-active");
}

favBtn.onclick=(e)=>{

e.stopPropagation();

if(favoritas.includes(i)){

favoritas = favoritas.filter(x=>x!==i);

favBtn.textContent="♡";
favBtn.classList.remove("fav-active");

}else{

favoritas.push(i);

favBtn.textContent="❤";
favBtn.classList.add("fav-active");

}

localStorage.setItem("favoritas",JSON.stringify(favoritas));


};

});

}

cargar(canciones);

/* abrir canción */

function reproducir(c,i){

indiceActual=i;

const player=document.querySelector(".player");

player.classList.remove("change");

void player.offsetWidth;

player.classList.add("change");

document.getElementById("reproductor").classList.remove("oculto");

document.getElementById("coverGrande").src=c.portada;

document.getElementById("tituloGrande").textContent=c.titulo;

document.getElementById("artistaGrande").textContent=c.artista;

document.getElementById("nota").textContent=c.nota;

document.getElementById("youtubeLink").href=c.youtube;

document.querySelector(".overlay").style.backgroundImage=`url(${c.portada})`;

}

/* cerrar con animación */

document.getElementById("cerrar").onclick=()=>{

const reproductor=document.getElementById("reproductor");
const player=document.querySelector(".player");

player.classList.add("cerrar");
reproductor.classList.add("fadeout");

setTimeout(()=>{

reproductor.classList.add("oculto");

player.classList.remove("cerrar");
reproductor.classList.remove("fadeout");

},350);

};

/* siguiente */
document.getElementById("siguiente").onclick=()=>{

if(modoAleatorio){

if(historialAdelante.length>0){

historialAtras.push(indiceActual);
indiceActual = historialAdelante.pop();

}else{

historialAtras.push(indiceActual);

let random;

do{
random=Math.floor(Math.random()*listaActual.length);
}
while(random===indiceActual);

indiceActual=random;

}

}else{

indiceActual++;

if(indiceActual>=canciones.length){
indiceActual=0;
}

}

reproducir(listaActual[indiceActual],indiceActual);

};

/* anterior */

document.getElementById("anterior").onclick=()=>{

if(modoAleatorio){

if(historialAtras.length>0){

historialAdelante.push(indiceActual);
indiceActual = historialAtras.pop();

}

}else{

indiceActual--;

if(indiceActual<0){
indiceActual=canciones.length-1;
}

}

reproducir(canciones[indiceActual],indiceActual);

};

/* buscador */

document.getElementById("buscar").oninput=e=>{

let texto=e.target.value.toLowerCase();

let filtradas=canciones.filter(c=>

c.titulo.toLowerCase().includes(texto) ||
c.artista.toLowerCase().includes(texto)||
c.album.toLowerCase().includes(texto)

);

cargar(filtradas);

};

/* abrir playlist con transición */

document.getElementById("abrir").onclick=()=>{

const intro = document.getElementById("intro");
const app = document.getElementById("app");

/* poner fondo inicial de playlist */

const portadaPlaylist = document.querySelector(".playlist-cover").src;

document.querySelector(".overlay").style.backgroundImage =
`url(${portadaPlaylist})`;

/* transición */

intro.classList.add("oculto");

app.classList.remove("oculto");
app.classList.add("visible");

};



document.getElementById("aleatorio").onclick=()=>{

modoAleatorio=!modoAleatorio;

const btn=document.getElementById("aleatorio");

btn.classList.toggle("activo");

historialAtras=[];
historialAdelante=[];

};


document.getElementById("verFavoritas").onclick=()=>{

modoFavoritos = !modoFavoritos;

const btn = document.getElementById("verFavoritas");

btn.classList.toggle("activo");

historialAtras=[];
historialAdelante=[];

if(modoFavoritos){

let favs = canciones.filter((c,i)=>favoritas.includes(i));

cargar(favs);

}else{

cargar(canciones);

window.addEventListener("DOMContentLoaded", () => {

const portadaPlaylist = document.querySelector(".playlist-cover").src;

document.querySelector(".overlay").style.backgroundImage =
`url(${portadaPlaylist})`;

});

}

};


const reproductor = document.getElementById("reproductor");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");
const cerrar = document.getElementById("cerrar");

document.addEventListener("keydown",(e)=>{

if(!reproductor.classList.contains("oculto")){

if(e.key==="ArrowRight"){
siguiente.click();
}

if(e.key==="ArrowLeft"){
anterior.click();
}

if(e.key==="Escape"){
cerrar.click();
}

}

});

// ========================
// SWIPE EN CELULAR
// ========================

let startX = 0;
let endX = 0;

reproductor.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

reproductor.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    manejarSwipe();
});

function manejarSwipe() {
    let diferencia = startX - endX;

    if (Math.abs(diferencia) > 50) { // sensibilidad

        if (diferencia > 0) {
            // 👉 swipe izquierda → siguiente
            siguiente.click();
        } else {
            // 👉 swipe derecha → anterior
            anterior.click();
        }

    }
}
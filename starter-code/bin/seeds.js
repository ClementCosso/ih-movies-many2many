const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movies')


const celebrities_seeds = [
  {
    "name": "Wood Fitzgerald",
    "occupation": "comedian",
    "catchPhrase": "Qui esse do pariatur anim fugiat id non. Aliquip sit et veniam quis sunt. Sunt ipsum dolor ullamco irure aute aliquip anim elit sint laborum.\r\n"
  },
  {
    "name": "Concepcion Combs",
    "occupation": "unknown",
    "catchPhrase": "Amet cupidatat excepteur amet nisi in culpa adipisicing nulla magna in proident incididunt. Enim eiusmod ipsum quis pariatur velit in exercitation culpa qui sint veniam irure. Laboris enim labore deserunt dolore laboris enim occaecat sint occaecat est ut id deserunt. Ea est mollit anim anim excepteur velit aliqua irure qui commodo reprehenderit cupidatat consectetur. Minim ea consectetur elit eu esse commodo aliqua elit consequat consectetur veniam. Aliquip excepteur mollit proident proident minim qui.\r\n"
  },
  {
    "name": "Margarita Watkins",
    "occupation": "unknown",
    "catchPhrase": "Laboris aliquip reprehenderit adipisicing adipisicing amet enim ullamco cillum. Enim pariatur deserunt velit aliqua do eiusmod enim duis velit adipisicing est nostrud. Laborum officia fugiat sunt aliquip minim ullamco minim elit ex dolor exercitation anim veniam. In incididunt irure mollit ut officia cupidatat in ea.\r\n"
  },
  {
    "name": "Lilly Byers",
    "occupation": "singer",
    "catchPhrase": "Cillum magna exercitation ex aute proident id sit eiusmod mollit. Ad exercitation labore quis eiusmod qui eiusmod dolor aliquip culpa do sint officia fugiat ea. Fugiat eiusmod excepteur est officia cupidatat excepteur. Ex dolore reprehenderit cillum officia velit sint nostrud ut adipisicing consectetur. Quis excepteur pariatur in magna id proident consectetur minim irure minim eiusmod culpa anim veniam. Excepteur proident nostrud dolor non minim eiusmod aute sit id occaecat magna dolor dolore.\r\n"
  },
  {
    "name": "Carmen Mercer",
    "occupation": "actor",
    "catchPhrase": "Eiusmod cupidatat ex consequat quis exercitation labore excepteur reprehenderit. Id excepteur aliqua minim culpa quis exercitation voluptate id consectetur ea. Tempor enim occaecat veniam qui do labore elit. Excepteur velit velit dolor ea quis ut nostrud aliquip reprehenderit nostrud.\r\n"
  },
  {
    "name": "Kidd Jordan",
    "occupation": "actor",
    "catchPhrase": "Id laborum velit culpa qui amet amet nulla sit sunt tempor culpa. Do veniam magna elit quis id nisi consectetur do magna id nostrud adipisicing. Quis irure cupidatat amet irure cupidatat id magna sit incididunt minim esse laborum. Aute fugiat aute eiusmod nulla anim mollit culpa sint sit elit. Proident eiusmod ad tempor ullamco quis ipsum laboris ea tempor occaecat eu velit. Amet minim consectetur et et ex. Reprehenderit consequat ullamco qui consequat id.\r\n"
  },
  {
    "name": "Weber Bird",
    "occupation": "singer",
    "catchPhrase": "Ullamco veniam anim ea aute nisi in enim velit mollit mollit anim. Consequat consectetur Lorem dolore labore ex officia irure labore ullamco Lorem ex fugiat adipisicing et. Officia ea eiusmod excepteur velit cupidatat nostrud.\r\n"
  },
  {
    "name": "Poole Galloway",
    "occupation": "comedian",
    "catchPhrase": "Velit velit incididunt aliqua cupidatat aliquip consectetur voluptate velit commodo sit reprehenderit eiusmod. Adipisicing occaecat minim irure proident ut aliquip in adipisicing consectetur culpa. Laborum velit proident aliqua aliqua consequat magna laborum ipsum veniam eiusmod excepteur in.\r\n"
  },
  {
    "name": "Frank Fuller",
    "occupation": "actor",
    "catchPhrase": "In exercitation incididunt cillum nisi aliqua duis laborum consequat officia ad reprehenderit nisi. Laboris incididunt eu nulla deserunt proident esse sit veniam tempor exercitation et. Reprehenderit laborum in nisi aute. Reprehenderit consectetur ullamco nulla sint. Et tempor tempor cillum amet dolore occaecat aliquip non est exercitation. Do laboris excepteur et pariatur enim pariatur cillum magna velit occaecat velit elit proident aute.\r\n"
  },
  {
    "name": "Black Lyons",
    "occupation": "unknown",
    "catchPhrase": "Sit id anim dolor magna cupidatat voluptate aliquip sit. Dolor commodo consequat proident excepteur exercitation enim ea. Pariatur pariatur incididunt fugiat Lorem occaecat non culpa culpa sit quis sunt cupidatat consectetur. Laborum incididunt exercitation dolore incididunt fugiat quis et magna. Non labore amet velit incididunt incididunt deserunt sint excepteur.\r\n"
  },
  {
    "name": "Wiggins Flowers",
    "occupation": "unknown",
    "catchPhrase": "Dolore occaecat dolore et dolore in qui mollit eu officia eu. Ad magna consequat veniam incididunt adipisicing cillum ad commodo consectetur pariatur laborum mollit irure. Consequat enim mollit proident incididunt ipsum excepteur eu ullamco nostrud Lorem. Est ad non ipsum incididunt velit sunt pariatur eiusmod consectetur deserunt quis ea fugiat. Nostrud officia laborum deserunt tempor elit duis consectetur aute commodo occaecat commodo. Pariatur excepteur id Lorem labore Lorem cillum adipisicing voluptate.\r\n"
  },
  {
    "name": "Kramer Wynn",
    "occupation": "singer",
    "catchPhrase": "Sit cillum aliqua exercitation ad minim id elit minim in irure laboris proident dolore in. Sit occaecat laboris labore nostrud mollit. Mollit est mollit deserunt adipisicing aliquip exercitation. Aliquip reprehenderit ad qui ex id. Aliquip cillum velit duis mollit mollit culpa quis minim mollit.\r\n"
  },
  {
    "name": "Lola Miranda",
    "occupation": "comedian",
    "catchPhrase": "Dolor amet labore esse eu anim. Velit cillum labore id tempor ex commodo consectetur ad. Dolore ex exercitation ad veniam incididunt ea sunt adipisicing anim. Nulla sint dolore pariatur exercitation. Aute ipsum consectetur cillum ut do excepteur exercitation consectetur esse. Consectetur nostrud et commodo pariatur amet incididunt minim aliqua enim non labore. Elit ipsum pariatur in ipsum.\r\n"
  },
  {
    "name": "Patti Carver",
    "occupation": "comedian",
    "catchPhrase": "Duis magna est voluptate et non. Fugiat sunt ipsum veniam minim id minim commodo fugiat. Ex consequat ea magna sint voluptate ad laborum consequat sunt velit cupidatat. Consectetur dolore quis Lorem pariatur incididunt Lorem laborum officia dolor do aliquip aliquip. Aliqua ut nulla et laboris dolor do mollit et excepteur.\r\n"
  },
  {
    "name": "Sherry Hughes",
    "occupation": "unknown",
    "catchPhrase": "Qui ut eu proident duis excepteur minim esse aliquip velit laboris qui ex laborum magna. Voluptate proident labore occaecat excepteur dolor minim. Commodo elit enim proident nisi in aliquip. Mollit incididunt anim velit eu et ea ut culpa minim dolor.\r\n"
  },
  {
    "name": "Keller Dominguez",
    "occupation": "singer",
    "catchPhrase": "Lorem ea anim fugiat ad deserunt enim nisi dolore non. Commodo excepteur ullamco nostrud nisi commodo amet ullamco reprehenderit veniam commodo. Est ex enim proident mollit pariatur reprehenderit sit incididunt. Eiusmod nisi commodo mollit sunt. Ex do non id enim ea velit ad. Esse voluptate occaecat ex dolor id proident nulla do. Dolore ea ullamco dolor proident anim nisi.\r\n"
  },
  {
    "name": "Tillman Pugh",
    "occupation": "singer",
    "catchPhrase": "Incididunt ipsum ut laborum Lorem voluptate eu minim incididunt deserunt pariatur consectetur sunt nostrud. Exercitation id excepteur anim eiusmod. Sunt quis anim do aliquip velit eu elit ullamco eiusmod ad voluptate culpa. Irure fugiat deserunt deserunt Lorem nulla exercitation reprehenderit ipsum exercitation est nulla. Anim magna aliqua aute culpa elit quis voluptate eiusmod.\r\n"
  },
  {
    "name": "Gretchen Mcmillan",
    "occupation": "unknown",
    "catchPhrase": "Esse labore magna Lorem veniam aliquip exercitation deserunt fugiat. Elit veniam dolor incididunt nostrud est occaecat adipisicing. Excepteur occaecat dolore sint non enim Lorem pariatur. Laborum commodo do cillum velit eu consequat quis anim quis pariatur irure et Lorem. Incididunt labore Lorem aliquip anim magna minim aliquip ex non cillum ullamco cupidatat. Id ullamco id proident aliquip occaecat laborum commodo incididunt eiusmod laboris duis.\r\n"
  },
  {
    "name": "Miller Salazar",
    "occupation": "comedian",
    "catchPhrase": "Commodo veniam aliquip aute et ullamco. Deserunt occaecat nulla esse dolore. Ad duis proident anim quis non adipisicing sint et tempor nulla. Nostrud ad aute ex ullamco minim enim. Laboris consequat excepteur culpa ipsum in occaecat qui minim id eiusmod mollit eiusmod.\r\n"
  },
  {
    "name": "Lawrence Drake",
    "occupation": "actor",
    "catchPhrase": "Id voluptate reprehenderit culpa nisi magna cupidatat laborum eu pariatur. Irure est ullamco dolore qui sint enim et ad dolore. Elit et cillum occaecat esse irure occaecat aliquip consectetur.\r\n"
  },
  {
    "name": "Ramos Tyson",
    "occupation": "unknown",
    "catchPhrase": "Tempor pariatur culpa id aute veniam do. Aliquip quis magna enim magna laborum. Proident eu dolore non nisi sint. Velit ad est elit ullamco ad cupidatat enim irure aliqua ad. Sunt excepteur Lorem in eiusmod ullamco pariatur dolore esse anim id officia. Nulla labore sint anim adipisicing culpa excepteur culpa labore sunt adipisicing eu officia anim deserunt. Ea ullamco id exercitation ad aliquip deserunt dolore reprehenderit velit.\r\n"
  },
  {
    "name": "Carlson Johnson",
    "occupation": "comedian",
    "catchPhrase": "Duis aliquip minim minim incididunt est velit duis ad dolor dolore deserunt pariatur. Ullamco mollit ad commodo aute esse quis ut officia irure dolor ullamco. Elit dolor adipisicing exercitation exercitation Lorem sint ea veniam nisi culpa quis ad nisi aliqua. Veniam fugiat sit cupidatat laborum tempor aute consequat sint excepteur minim laboris culpa aliquip magna. Anim ut veniam magna officia in ipsum mollit sit cillum ad. Eiusmod in id quis ut deserunt laboris fugiat sunt occaecat magna voluptate dolore veniam.\r\n"
  },
  {
    "name": "Dominguez Blanchard",
    "occupation": "singer",
    "catchPhrase": "Esse aliqua exercitation mollit consequat laboris in quis. Mollit dolor esse nisi laboris ut dolor qui cupidatat incididunt aliqua. Cillum ut ipsum enim sit culpa ex voluptate. Amet dolor mollit cupidatat incididunt.\r\n"
  },
  {
    "name": "Marci Moran",
    "occupation": "unknown",
    "catchPhrase": "Reprehenderit sunt nostrud do sint incididunt laborum minim sint mollit incididunt enim sunt aliqua nostrud. Duis proident Lorem aliqua reprehenderit aliquip sunt nulla nostrud sunt qui proident. Velit voluptate dolor aliquip tempor pariatur quis. Non ex incididunt nisi id ex qui adipisicing eu eiusmod est velit.\r\n"
  }
]

const movies_seeds = [
  {
    "genre": "blue",
    "title": "consectetur",
    "plot": "Et voluptate qui ea esse pariatur in eiusmod mollit sunt. Veniam et sit exercitation sit aliqua. Irure dolore eu labore sint aliquip labore exercitation dolor enim anim Lorem.\r\n",
    "celebrities": [
      6,
      21,
      14,
      22,
      18,
      4,
      5
    ]
  },
  {
    "genre": "brown",
    "title": "irure",
    "plot": "Aliquip Lorem culpa nulla magna consequat exercitation mollit consequat. Officia ad duis est sit sint est fugiat. Ex fugiat dolor sint officia aute deserunt laborum incididunt id. Pariatur proident occaecat id occaecat mollit amet laboris.\r\n",
    "celebrities": [
      21,
      5,
      16,
      4,
      21,
      12,
      16
    ]
  },
  {
    "genre": "brown",
    "title": "ad",
    "plot": "Ipsum est anim id reprehenderit do est incididunt sunt culpa laborum Lorem proident. Reprehenderit id nostrud dolore ullamco quis veniam. Est minim occaecat sunt eu nulla officia elit adipisicing laboris consequat adipisicing quis.\r\n",
    "celebrities": [
      22,
      12,
      23,
      7,
      16,
      12,
      7
    ]
  },
  {
    "genre": "green",
    "title": "mollit",
    "plot": "Dolor irure eu commodo magna adipisicing deserunt duis officia amet mollit exercitation officia voluptate. Sint esse cillum amet aliqua culpa velit eu culpa ad proident sint consectetur. Ex dolore ad quis non occaecat do culpa sint exercitation cillum sit veniam Lorem occaecat. Adipisicing do eu sunt cillum sit cillum amet nisi et. Sunt fugiat ut exercitation ad deserunt proident et laborum eiusmod. Quis occaecat enim enim nulla.\r\n",
    "celebrities": [
      15,
      6,
      4,
      5,
      8,
      0,
      9
    ]
  },
  {
    "genre": "brown",
    "title": "minim",
    "plot": "Aute consequat labore enim elit eiusmod in commodo adipisicing aliquip Lorem consectetur amet adipisicing mollit. Id excepteur sunt cillum ea proident veniam aliquip Lorem ipsum esse. Dolor ut fugiat aliqua enim adipisicing nostrud et adipisicing fugiat consequat id. Nostrud irure commodo mollit reprehenderit eu nulla reprehenderit anim.\r\n",
    "celebrities": [
      9,
      6,
      23,
      3,
      5,
      12,
      0
    ]
  },
  {
    "genre": "green",
    "title": "qui",
    "plot": "Sit excepteur culpa pariatur ea consectetur est velit cillum. Sit deserunt ad culpa ex esse. Sint eiusmod duis cillum amet ex culpa ipsum anim. Enim anim anim occaecat sint in est eu mollit veniam culpa id. Minim cillum enim pariatur velit sit adipisicing proident reprehenderit velit. Anim sunt adipisicing enim laboris. Anim commodo cupidatat in deserunt nisi elit eiusmod quis in esse.\r\n",
    "celebrities": [
      23,
      19,
      0,
      16,
      0,
      12,
      7
    ]
  },
  {
    "genre": "brown",
    "title": "proident",
    "plot": "Tempor reprehenderit tempor nulla aliquip deserunt do sint dolore eiusmod exercitation nulla nulla. Irure irure esse est laborum quis quis velit aliqua Lorem. Amet anim et laborum in do Lorem veniam consequat laborum occaecat cupidatat ex officia.\r\n",
    "celebrities": [
      17,
      22,
      18,
      12,
      18,
      1,
      4
    ]
  },
  {
    "genre": "brown",
    "title": "voluptate",
    "plot": "Aute ad deserunt nisi aliquip nisi labore. Magna cillum ipsum velit laborum laborum reprehenderit duis in irure Lorem consectetur sint. In veniam non dolor laborum dolore adipisicing. Amet ex laboris cupidatat duis cillum fugiat quis.\r\n",
    "celebrities": [
      0,
      16,
      2,
      3,
      16,
      11,
      3
    ]
  },
  {
    "genre": "blue",
    "title": "occaecat",
    "plot": "Ex cillum duis in est id dolore in amet. Ex consequat non aliquip nisi anim ut. Mollit nisi amet eu amet pariatur fugiat esse incididunt fugiat nulla eiusmod.\r\n",
    "celebrities": [
      3,
      19,
      4,
      16,
      9,
      14,
      16
    ]
  },
  {
    "genre": "green",
    "title": "cupidatat",
    "plot": "Mollit tempor quis minim esse esse ex ad consectetur laboris. Minim non elit laborum tempor quis ex culpa duis consequat ipsum reprehenderit officia ut nisi. Minim reprehenderit eu et proident do dolor non veniam sit consectetur nostrud mollit ullamco. Nulla proident elit commodo reprehenderit proident aliquip. Minim veniam laboris incididunt id cillum proident nostrud consectetur. Ullamco officia adipisicing do qui consectetur esse qui nulla non cupidatat est quis. Incididunt aliquip irure incididunt voluptate eiusmod voluptate labore in nisi mollit.\r\n",
    "celebrities": [
      10,
      2,
      12,
      0,
      1,
      16,
      11
    ]
  },
  {
    "genre": "brown",
    "title": "labore",
    "plot": "Qui ipsum amet cupidatat eiusmod sunt quis. Voluptate dolor adipisicing sint aute laboris est consectetur et minim excepteur nulla. Tempor adipisicing ullamco minim enim sit aliqua non nostrud ipsum minim Lorem in est ut.\r\n",
    "celebrities": [
      11,
      0,
      6,
      0,
      17,
      4,
      4
    ]
  },
  {
    "genre": "blue",
    "title": "commodo",
    "plot": "Commodo non nostrud occaecat cupidatat eu duis sit. Veniam officia voluptate nostrud laborum eiusmod magna voluptate ex dolore cupidatat incididunt incididunt. Enim ea veniam adipisicing ex nulla nostrud id laborum sit nulla velit nisi. Aute culpa officia ipsum adipisicing enim laborum fugiat proident velit laborum officia aliqua pariatur. Sint dolore esse cupidatat fugiat ipsum ipsum.\r\n",
    "celebrities": [
      2,
      11,
      5,
      11,
      1,
      16,
      20
    ]
  },
  {
    "genre": "brown",
    "title": "non",
    "plot": "Ipsum reprehenderit anim anim laboris ipsum dolore ad aute et id labore commodo mollit excepteur. Sunt in duis minim magna. Est tempor est est esse anim magna Lorem tempor occaecat elit aliquip.\r\n",
    "celebrities": [
      16,
      16,
      13,
      22,
      12,
      1,
      1
    ]
  },
  {
    "genre": "green",
    "title": "ipsum",
    "plot": "Labore occaecat labore esse occaecat anim officia culpa minim excepteur consequat dolore veniam eiusmod qui. Do ad laboris irure dolor minim adipisicing. Aliquip voluptate tempor tempor consectetur aliqua consequat quis adipisicing minim dolor aliqua mollit dolore consectetur. Irure in quis sunt eiusmod commodo aliquip veniam nulla laboris labore velit sit commodo laborum. Sit non mollit dolor excepteur dolor magna. Commodo incididunt excepteur velit esse ipsum laboris. Id sunt consequat et consectetur sit.\r\n",
    "celebrities": [
      18,
      18,
      9,
      6,
      2,
      0,
      13
    ]
  },
  {
    "genre": "blue",
    "title": "culpa",
    "plot": "Aliqua in est laborum labore duis id qui ex. Occaecat reprehenderit velit culpa ipsum officia ut excepteur mollit nostrud nulla proident tempor. Pariatur dolor officia consequat Lorem Lorem. Est non consectetur deserunt culpa et minim dolor laborum ad.\r\n",
    "celebrities": [
      17,
      12,
      18,
      8,
      13,
      0,
      18
    ]
  },
  {
    "genre": "green",
    "title": "occaecat",
    "plot": "Minim incididunt irure aliqua nisi occaecat officia irure. Cupidatat ut proident laboris qui Lorem laboris duis proident occaecat. Cillum do ex minim sit consequat eu voluptate amet reprehenderit. Ullamco laboris culpa dolore Lorem elit non ad dolor. Laborum cillum tempor dolore proident quis anim velit excepteur laborum consequat eu minim. Esse anim occaecat laborum mollit.\r\n",
    "celebrities": [
      8,
      18,
      4,
      5,
      17,
      21,
      0
    ]
  },
  {
    "genre": "green",
    "title": "quis",
    "plot": "Tempor in esse elit exercitation culpa anim anim. Eu enim pariatur amet excepteur laborum minim nulla fugiat et magna cillum quis sit. Elit incididunt culpa duis voluptate culpa. Incididunt laboris aliquip proident dolor exercitation sint mollit cillum consectetur excepteur in. Sint consequat est consequat amet sunt reprehenderit dolore.\r\n",
    "celebrities": [
      23,
      21,
      20,
      10,
      0,
      3,
      4
    ]
  },
  {
    "genre": "brown",
    "title": "anim",
    "plot": "Consequat aliqua dolor veniam non eiusmod pariatur eu esse ad. Ea ex proident officia incididunt voluptate enim id tempor magna. Ut cillum nulla nulla tempor ut Lorem tempor in ut. Dolore nostrud duis cillum ullamco qui anim. Dolor sit cillum id cillum elit qui.\r\n",
    "celebrities": [
      17,
      21,
      17,
      0,
      17,
      7,
      21
    ]
  },
  {
    "genre": "brown",
    "title": "excepteur",
    "plot": "Ea exercitation excepteur aute nostrud proident nisi ut do fugiat commodo labore. Non esse cillum culpa magna incididunt elit qui deserunt consectetur. Veniam qui id laborum elit ad dolore minim incididunt deserunt pariatur eu cupidatat.\r\n",
    "celebrities": [
      7,
      8,
      11,
      23,
      10,
      1,
      6
    ]
  },
  {
    "genre": "blue",
    "title": "magna",
    "plot": "Amet reprehenderit ipsum ex incididunt quis. Esse nisi et et excepteur et. Consectetur nostrud tempor id Lorem consectetur cupidatat ut. Laborum fugiat commodo anim reprehenderit reprehenderit ipsum. Irure magna consequat dolor elit minim sint adipisicing quis duis ullamco eiusmod qui. Labore duis non proident aliquip excepteur Lorem cupidatat elit est veniam. Esse occaecat aute deserunt qui.\r\n",
    "celebrities": [
      7,
      7,
      21,
      17,
      14,
      6,
      9
    ]
  },
  {
    "genre": "green",
    "title": "excepteur",
    "plot": "Anim in Lorem aliqua pariatur dolor id. Consectetur dolor excepteur sit in veniam velit officia cupidatat ex. Nostrud exercitation est anim laboris labore. Est duis tempor aute non exercitation reprehenderit nostrud sunt officia. Veniam labore ex aliqua do dolor anim. Non labore do ad in dolore consectetur mollit. Lorem dolore aute culpa nulla duis sunt cupidatat deserunt ea Lorem ea.\r\n",
    "celebrities": [
      8,
      12,
      2,
      21,
      18,
      12,
      6
    ]
  },
  {
    "genre": "green",
    "title": "anim",
    "plot": "Consequat reprehenderit officia consequat veniam nulla pariatur culpa consectetur ullamco sunt commodo culpa. Fugiat minim qui id do aliqua nisi deserunt nostrud. Ad dolor nulla commodo in tempor eu quis ipsum in culpa consequat. Irure excepteur pariatur et tempor nostrud voluptate eiusmod excepteur deserunt pariatur ea et sunt magna. Excepteur irure id est ea esse veniam ex do cillum tempor eiusmod ex nostrud.\r\n",
    "celebrities": [
      3,
      0,
      12,
      10,
      3,
      6,
      11
    ]
  },
  {
    "genre": "blue",
    "title": "veniam",
    "plot": "Lorem qui ut laboris cupidatat. Nostrud nisi pariatur enim ad labore dolore mollit commodo. Lorem culpa irure non esse adipisicing labore tempor minim qui duis dolor dolor aute. Incididunt ullamco esse cillum voluptate irure in voluptate. Deserunt nisi enim voluptate non laboris mollit do enim consectetur proident anim. Lorem commodo excepteur proident dolor ea ea ex ex. Lorem dolore Lorem enim Lorem voluptate cillum magna consequat esse ipsum aute aute.\r\n",
    "celebrities": [
      17,
      8,
      20,
      12,
      7,
      8,
      22
    ]
  },
  {
    "genre": "brown",
    "title": "id",
    "plot": "Pariatur aute est dolore cupidatat quis laboris exercitation consequat. Pariatur culpa dolore cillum id reprehenderit. Irure pariatur irure consequat ex duis ex.\r\n",
    "celebrities": [
      23,
      21,
      6,
      21,
      6,
      14,
      18
    ]
  },
  {
    "genre": "blue",
    "title": "deserunt",
    "plot": "In labore voluptate officia eu id. In consectetur ea adipisicing elit consectetur dolore non irure fugiat nulla occaecat voluptate sit. Quis adipisicing labore magna eu pariatur consequat magna sunt irure Lorem anim anim magna. Ullamco exercitation exercitation cillum duis et magna consectetur anim. Laborum cupidatat ut anim fugiat aliqua veniam id non ullamco. Ad cupidatat ullamco commodo sit tempor veniam consequat cillum excepteur dolor quis aliqua. Laboris magna ut velit voluptate incididunt.\r\n",
    "celebrities": [
      14,
      6,
      5,
      22,
      13,
      13,
      13
    ]
  },
  {
    "genre": "brown",
    "title": "nisi",
    "plot": "Esse magna aliquip commodo adipisicing labore. Eiusmod aliquip enim velit eu fugiat magna est magna duis. Deserunt ea qui minim commodo laboris eu duis aliqua aliqua quis anim ea officia eu. Commodo labore aute non duis ad qui excepteur fugiat velit nisi enim est ullamco aute. Non adipisicing dolor nostrud aliquip in dolor nisi consequat aliqua et do qui commodo.\r\n",
    "celebrities": [
      17,
      4,
      14,
      13,
      5,
      12,
      18
    ]
  },
  {
    "genre": "blue",
    "title": "enim",
    "plot": "Mollit eiusmod enim eiusmod ullamco ea officia cupidatat eiusmod culpa. Laboris anim nisi pariatur ipsum quis exercitation in ad pariatur cillum labore voluptate. Occaecat quis enim excepteur labore elit occaecat dolore. Elit est anim officia deserunt aliqua cillum culpa laboris mollit officia anim irure. Nulla Lorem anim pariatur cillum reprehenderit culpa. Pariatur pariatur laboris mollit nisi magna exercitation.\r\n",
    "celebrities": [
      5,
      16,
      11,
      21,
      1,
      2,
      6
    ]
  },
  {
    "genre": "green",
    "title": "aliquip",
    "plot": "Id sunt incididunt dolor dolor do enim qui esse minim laboris in irure laborum deserunt. Magna ullamco laborum dolore minim nisi voluptate anim est cupidatat tempor Lorem anim occaecat ex. Eiusmod dolore excepteur ex cillum nisi eu in cillum elit laborum in eu. Ex enim labore occaecat eiusmod quis ex irure aliquip. Sit duis ad ut aute reprehenderit ipsum Lorem. Tempor irure culpa magna laboris elit pariatur commodo in consectetur duis.\r\n",
    "celebrities": [
      3,
      17,
      20,
      19,
      21,
      1,
      5
    ]
  },
  {
    "genre": "blue",
    "title": "non",
    "plot": "Dolor excepteur voluptate nostrud id sint enim esse pariatur sit dolore do elit. Consectetur amet nulla eiusmod quis non amet cillum sint labore est incididunt anim amet. Elit aliqua cupidatat est sunt est enim sit.\r\n",
    "celebrities": [
      12,
      10,
      11,
      1,
      20,
      0,
      21
    ]
  },
  {
    "genre": "green",
    "title": "quis",
    "plot": "Quis exercitation cillum dolor proident id culpa est eu ex eiusmod quis ad deserunt proident. Lorem voluptate anim quis sint fugiat aliqua quis. Commodo excepteur officia culpa laborum in quis est quis adipisicing tempor magna excepteur qui aliqua. Exercitation sit eiusmod dolore ut in tempor quis laboris fugiat id labore commodo ex. Tempor cillum culpa ullamco sunt ex eu nisi laboris ullamco adipisicing pariatur cillum dolor est. Cupidatat fugiat id enim quis do minim enim id.\r\n",
    "celebrities": [
      22,
      6,
      13,
      11,
      12,
      0,
      18
    ]
  },
  {
    "genre": "blue",
    "title": "eu",
    "plot": "Tempor mollit proident dolor enim incididunt sit in officia ex tempor minim. Sunt aliqua dolore occaecat ullamco velit dolore. Nisi Lorem minim eiusmod deserunt pariatur irure. Occaecat consequat et id aliquip non laboris cillum aliquip enim non veniam magna culpa sunt.\r\n",
    "celebrities": [
      4,
      16,
      17,
      18,
      9,
      23,
      21
    ]
  },
  {
    "genre": "brown",
    "title": "id",
    "plot": "Nisi occaecat quis occaecat proident labore nisi eiusmod id ea dolore occaecat laborum tempor. In incididunt aliquip aute Lorem pariatur eiusmod. Nulla incididunt tempor cillum occaecat excepteur adipisicing eu.\r\n",
    "celebrities": [
      10,
      18,
      11,
      3,
      17,
      13,
      23
    ]
  },
  {
    "genre": "brown",
    "title": "exercitation",
    "plot": "Officia reprehenderit Lorem occaecat irure ut Lorem laborum Lorem consequat esse eu id. Do proident deserunt aute nisi consequat consectetur occaecat ullamco ea sint ipsum reprehenderit elit. Laborum ipsum reprehenderit aute nulla et dolore. Veniam laborum adipisicing sit est nulla. Sint elit laborum tempor aute ut. Irure occaecat laborum anim aliquip cupidatat deserunt aute mollit do culpa eu cupidatat nisi mollit.\r\n",
    "celebrities": [
      17,
      8,
      10,
      10,
      22,
      8,
      19
    ]
  },
  {
    "genre": "brown",
    "title": "in",
    "plot": "Adipisicing officia ullamco id pariatur. Culpa commodo nulla eu commodo eiusmod sit reprehenderit proident id excepteur culpa exercitation reprehenderit dolore. Et voluptate fugiat deserunt do ut. Qui eu eu sint consectetur. Sint ullamco duis excepteur nulla est nostrud ullamco magna elit. Culpa consequat enim ex et est ipsum incididunt et mollit.\r\n",
    "celebrities": [
      18,
      7,
      4,
      7,
      8,
      15,
      19
    ]
  },
  {
    "genre": "blue",
    "title": "adipisicing",
    "plot": "Quis tempor ex nulla officia est ipsum amet cillum magna nulla et ad nisi occaecat. Enim mollit enim excepteur non. Culpa deserunt amet pariatur esse aliquip est cupidatat. Officia ex duis incididunt aliquip Lorem tempor tempor laboris laboris ad ad.\r\n",
    "celebrities": [
      6,
      0,
      16,
      4,
      5,
      13,
      21
    ]
  },
  {
    "genre": "blue",
    "title": "anim",
    "plot": "Sit quis amet labore fugiat nulla minim ad consequat duis. Labore cillum adipisicing ea sint quis adipisicing. Deserunt ex sunt nostrud consequat anim incididunt ipsum excepteur.\r\n",
    "celebrities": [
      9,
      5,
      6,
      3,
      20,
      0,
      13
    ]
  },
  {
    "genre": "green",
    "title": "laborum",
    "plot": "Ea reprehenderit fugiat sunt mollit eu in occaecat ipsum laborum in laborum aute. Minim nisi et laboris culpa minim veniam excepteur non in minim pariatur sint in elit. Esse adipisicing qui sint incididunt quis ad elit aliqua nostrud ea. Magna cillum excepteur est officia aliqua nostrud dolore tempor eu. Enim deserunt culpa esse consequat ut deserunt minim. Ea culpa aute cupidatat ullamco proident laboris enim.\r\n",
    "celebrities": [
      11,
      3,
      5,
      12,
      21,
      16,
      16
    ]
  },
  {
    "genre": "brown",
    "title": "veniam",
    "plot": "Sunt tempor pariatur commodo eiusmod sint minim sit incididunt ut id proident est. Sit id exercitation exercitation pariatur anim occaecat duis qui anim est eiusmod elit dolore. Tempor exercitation consectetur consectetur laboris amet exercitation culpa commodo aute consequat minim.\r\n",
    "celebrities": [
      1,
      17,
      2,
      5,
      18,
      22,
      21
    ]
  },
  {
    "genre": "green",
    "title": "do",
    "plot": "Adipisicing nisi enim aliquip aliquip magna commodo enim proident nisi irure aliqua irure officia adipisicing. Enim nisi magna qui dolor nulla. Voluptate sunt duis ea nulla eu ex adipisicing dolor enim. Ut proident proident laboris consectetur consectetur ut pariatur laboris aute dolor reprehenderit culpa. In amet Lorem nulla reprehenderit dolore. Adipisicing veniam incididunt laboris incididunt enim quis est amet fugiat non nisi velit qui.\r\n",
    "celebrities": [
      12,
      15,
      18,
      15,
      23,
      18,
      15
    ]
  },
  {
    "genre": "blue",
    "title": "nostrud",
    "plot": "Sint elit duis sint nulla. Nisi cupidatat do nisi occaecat do ullamco Lorem ut et Lorem labore. Commodo exercitation est ad magna. Ipsum velit irure occaecat dolor elit deserunt.\r\n",
    "celebrities": [
      8,
      7,
      10,
      22,
      12,
      2,
      21
    ]
  },
  {
    "genre": "blue",
    "title": "nisi",
    "plot": "Quis nulla cupidatat sit proident elit tempor ullamco tempor occaecat culpa mollit id. Sunt aliquip enim elit tempor magna cupidatat tempor ut nostrud qui reprehenderit sunt. Pariatur ullamco anim velit est ea sit nostrud nulla laborum eiusmod consectetur ad. Ullamco nisi commodo officia non est proident consectetur ea et exercitation ex non sit veniam. Officia excepteur Lorem dolore ad occaecat velit in esse ex in ipsum veniam anim cillum.\r\n",
    "celebrities": [
      3,
      16,
      19,
      2,
      23,
      4,
      13
    ]
  },
  {
    "genre": "green",
    "title": "qui",
    "plot": "Pariatur irure adipisicing fugiat eu dolor aute quis mollit commodo esse dolore. Occaecat id ullamco nulla excepteur est ullamco nostrud nostrud adipisicing. Velit amet enim duis fugiat Lorem sint.\r\n",
    "celebrities": [
      7,
      0,
      16,
      17,
      9,
      9,
      23
    ]
  },
  {
    "genre": "blue",
    "title": "ipsum",
    "plot": "Cupidatat ipsum sit id anim non amet in. Enim aliqua consequat proident amet magna ut excepteur aliquip aliquip Lorem. Ea reprehenderit nisi proident tempor ullamco. Exercitation voluptate cillum nulla excepteur elit magna quis est. Minim nisi dolor qui consectetur occaecat ipsum non et id labore sint. Exercitation id et ipsum nostrud proident. Proident eiusmod ex incididunt officia nostrud sint cupidatat sunt.\r\n",
    "celebrities": [
      17,
      13,
      9,
      11,
      15,
      2,
      3
    ]
  },
  {
    "genre": "blue",
    "title": "amet",
    "plot": "Dolore excepteur nostrud id nulla elit occaecat. Est consectetur occaecat commodo exercitation occaecat cupidatat cupidatat irure do. Ut do consequat aliquip aute fugiat consectetur duis aute velit occaecat ad. Nulla duis et laborum officia incididunt nulla consectetur veniam aliquip deserunt sit reprehenderit deserunt dolore. Minim irure velit amet Lorem reprehenderit mollit. Eu laboris consequat fugiat dolore dolore incididunt irure fugiat magna in et.\r\n",
    "celebrities": [
      3,
      2,
      22,
      9,
      16,
      13,
      20
    ]
  },
  {
    "genre": "green",
    "title": "cupidatat",
    "plot": "Fugiat fugiat eiusmod elit enim. Mollit laboris pariatur ullamco magna ea occaecat minim tempor esse tempor. Commodo tempor cillum exercitation et officia labore in velit do eu cupidatat est officia. Consectetur voluptate dolore ut sit commodo in qui. Tempor veniam mollit nisi sit eiusmod incididunt sint mollit.\r\n",
    "celebrities": [
      9,
      1,
      22,
      17,
      11,
      6,
      19
    ]
  },
  {
    "genre": "green",
    "title": "velit",
    "plot": "Ea consequat sit exercitation deserunt enim velit in veniam velit nisi. Do aliqua qui cupidatat enim nisi consectetur do cupidatat ad do. Veniam cupidatat ut esse proident nostrud. Et anim proident dolor et enim dolore minim est tempor tempor. Cupidatat ea velit laborum dolor dolore esse et deserunt sit dolore commodo cillum laboris magna. Velit id aute est amet reprehenderit aliquip. Officia ut veniam sit reprehenderit magna et tempor culpa sit cupidatat enim.\r\n",
    "celebrities": [
      23,
      19,
      0,
      7,
      17,
      23,
      5
    ]
  },
  {
    "genre": "green",
    "title": "esse",
    "plot": "Ex cillum tempor ullamco incididunt non enim ad aliquip est anim cillum laboris ex. Id Lorem sunt velit esse ea aliqua officia est Lorem proident laboris. Laboris enim in aliquip reprehenderit Lorem ut ipsum Lorem anim sint in veniam incididunt.\r\n",
    "celebrities": [
      14,
      15,
      1,
      12,
      14,
      6,
      14
    ]
  },
  {
    "genre": "blue",
    "title": "laboris",
    "plot": "Proident culpa dolor eu consequat qui eu fugiat aliqua Lorem est velit eu. Do aliqua et enim esse veniam ipsum excepteur officia exercitation tempor et. Ullamco fugiat sunt Lorem sint velit et et eu laborum reprehenderit. Sit Lorem voluptate nostrud sit laborum labore amet fugiat. Officia proident in elit in labore ullamco culpa amet.\r\n",
    "celebrities": [
      7,
      14,
      5,
      18,
      0,
      4,
      10
    ]
  },
  {
    "genre": "green",
    "title": "eiusmod",
    "plot": "Ea fugiat consectetur qui excepteur. Duis qui occaecat amet proident ad sint non occaecat nulla id ea. Ipsum eiusmod consequat veniam occaecat.\r\n",
    "celebrities": [
      17,
      12,
      1,
      22,
      3,
      12,
      1
    ]
  },
  {
    "genre": "brown",
    "title": "laboris",
    "plot": "Occaecat aliquip excepteur nostrud dolor ullamco. Lorem nostrud occaecat voluptate culpa nisi minim reprehenderit. Dolore ea pariatur laboris proident reprehenderit non. Et do laborum aute anim ullamco anim aliquip sint dolore adipisicing ipsum nostrud commodo aliquip. Quis nulla mollit aliquip fugiat aliquip pariatur enim exercitation consequat dolor magna. Occaecat ipsum aute consequat ea aliquip ea eu laborum minim magna pariatur sunt Lorem.\r\n",
    "celebrities": [
      16,
      8,
      1,
      2,
      5,
      13,
      14
    ]
  },
  {
    "genre": "blue",
    "title": "sint",
    "plot": "Ut irure commodo voluptate ea ex tempor et et exercitation deserunt veniam officia pariatur elit. Elit Lorem non dolor dolore anim amet cillum reprehenderit. Reprehenderit voluptate Lorem elit reprehenderit sint mollit ea. Nostrud dolor proident qui eu enim esse et non. Sit amet enim elit ad mollit exercitation anim ut exercitation deserunt proident. Pariatur Lorem aliqua ut nostrud irure enim consequat.\r\n",
    "celebrities": [
      6,
      6,
      8,
      11,
      1,
      19,
      21
    ]
  },
  {
    "genre": "green",
    "title": "cupidatat",
    "plot": "Consequat Lorem elit minim ex. Id ex esse nulla ipsum. Nulla sit fugiat commodo do elit. Enim magna ea ullamco nulla proident. Elit aliqua incididunt ad duis commodo sint occaecat duis do id sit officia dolor incididunt.\r\n",
    "celebrities": [
      10,
      18,
      11,
      16,
      5,
      22,
      12
    ]
  },
  {
    "genre": "brown",
    "title": "mollit",
    "plot": "Exercitation quis nulla adipisicing ex. Aute voluptate elit esse labore. Deserunt sint ad sit elit consectetur ea aliquip.\r\n",
    "celebrities": [
      10,
      6,
      3,
      1,
      18,
      12,
      0
    ]
  },
  {
    "genre": "blue",
    "title": "exercitation",
    "plot": "Occaecat laborum ex elit nostrud deserunt velit aute cillum adipisicing qui anim mollit magna incididunt. Ipsum esse labore non consectetur esse eiusmod cupidatat cupidatat. Excepteur velit deserunt excepteur ea deserunt ea officia nulla consectetur proident. Excepteur ullamco est reprehenderit est adipisicing qui ipsum duis irure qui aute ea nostrud anim.\r\n",
    "celebrities": [
      0,
      12,
      21,
      16,
      0,
      16,
      22
    ]
  },
  {
    "genre": "blue",
    "title": "incididunt",
    "plot": "Amet excepteur incididunt enim aliqua eiusmod pariatur velit exercitation esse duis do est pariatur. Lorem pariatur adipisicing esse velit consequat nisi ex. Ad velit exercitation id eiusmod elit aliquip dolor ullamco tempor magna. Velit id reprehenderit labore ex excepteur do ut. Minim velit pariatur ad duis magna duis veniam exercitation non enim anim consectetur. Elit exercitation id ullamco aliqua officia minim qui veniam aute sunt labore quis sit tempor. Adipisicing pariatur dolore consequat culpa ex commodo aliquip do aute nisi laboris ex sit.\r\n",
    "celebrities": [
      7,
      16,
      6,
      20,
      3,
      15,
      0
    ]
  },
  {
    "genre": "brown",
    "title": "laborum",
    "plot": "Sint ea ut qui aliqua incididunt fugiat adipisicing excepteur minim occaecat aliquip. Deserunt enim incididunt duis ad laboris adipisicing nisi sunt culpa adipisicing proident cillum reprehenderit deserunt. Amet est ipsum velit reprehenderit cupidatat elit sunt do aliqua mollit exercitation cupidatat. Proident duis eu elit est ea anim do culpa anim nulla anim dolor.\r\n",
    "celebrities": [
      0,
      5,
      9,
      8,
      1,
      14,
      15
    ]
  },
  {
    "genre": "blue",
    "title": "dolore",
    "plot": "Officia exercitation voluptate anim occaecat dolore eu. Nostrud officia incididunt elit do. Elit exercitation velit occaecat reprehenderit qui magna id proident magna in deserunt. Aute amet ea ea do officia irure dolore Lorem in tempor.\r\n",
    "celebrities": [
      3,
      17,
      13,
      6,
      3,
      1,
      6
    ]
  },
  {
    "genre": "green",
    "title": "dolor",
    "plot": "Fugiat qui eiusmod exercitation labore cillum exercitation commodo commodo laborum ad consectetur. Sint ea nulla culpa ad dolor minim dolor eu occaecat aliqua et officia irure laboris. Sit voluptate in consequat occaecat tempor nulla velit do consectetur et eu esse. Excepteur sunt tempor aliqua tempor ea cupidatat sunt ipsum nisi veniam quis elit ipsum. Amet mollit culpa duis qui reprehenderit adipisicing voluptate nostrud deserunt fugiat irure magna mollit. Lorem occaecat proident ea non occaecat officia proident esse voluptate.\r\n",
    "celebrities": [
      16,
      9,
      12,
      8,
      3,
      0,
      12
    ]
  },
  {
    "genre": "green",
    "title": "consectetur",
    "plot": "Cillum incididunt eu irure elit ipsum ea sunt magna. Aliqua laboris Lorem nulla do excepteur. Sit ad cillum amet reprehenderit enim excepteur in esse aliqua.\r\n",
    "celebrities": [
      5,
      23,
      15,
      23,
      9,
      1,
      18
    ]
  },
  {
    "genre": "brown",
    "title": "anim",
    "plot": "Reprehenderit exercitation Lorem reprehenderit sint anim nisi id cupidatat dolore laborum amet veniam qui dolor. Eiusmod amet consequat consequat culpa consectetur do quis voluptate ad duis non. Elit proident est occaecat ipsum duis occaecat id pariatur labore quis. Laborum eu cupidatat elit veniam Lorem occaecat duis tempor tempor magna. Adipisicing dolor aliqua sunt fugiat reprehenderit adipisicing cillum sit Lorem excepteur sunt aliqua. Velit laboris commodo esse nisi proident.\r\n",
    "celebrities": [
      10,
      20,
      14,
      20,
      18,
      1,
      18
    ]
  },
  {
    "genre": "green",
    "title": "cillum",
    "plot": "Duis sunt est eu proident id minim officia. Culpa Lorem anim id dolore est enim excepteur cupidatat proident. Cillum do reprehenderit eiusmod proident et pariatur occaecat in. Sint eu anim laboris irure commodo cillum culpa. Consectetur ex irure anim velit quis ut laborum ex proident consequat enim incididunt sunt aliquip.\r\n",
    "celebrities": [
      14,
      15,
      22,
      4,
      20,
      11,
      17
    ]
  },
  {
    "genre": "brown",
    "title": "consectetur",
    "plot": "Quis amet fugiat ullamco occaecat ipsum id commodo esse. Esse ex exercitation ad voluptate Lorem eiusmod ex. Occaecat sint dolore magna do exercitation occaecat mollit ipsum et consequat anim aliqua.\r\n",
    "celebrities": [
      10,
      3,
      13,
      13,
      11,
      19,
      13
    ]
  },
  {
    "genre": "green",
    "title": "proident",
    "plot": "Ipsum qui est incididunt amet culpa excepteur esse laboris do enim quis consectetur incididunt. Ex veniam aliqua laboris nulla amet. Consectetur magna laborum in tempor mollit nulla nulla dolore. Adipisicing nulla dolore excepteur non ipsum labore aliqua consequat voluptate labore.\r\n",
    "celebrities": [
      16,
      20,
      17,
      0,
      7,
      9,
      5
    ]
  },
  {
    "genre": "brown",
    "title": "aute",
    "plot": "Quis minim cillum proident irure. Quis dolore anim exercitation quis aliquip Lorem quis officia qui anim Lorem sunt. Lorem occaecat enim in esse officia ullamco quis magna do dolor officia enim consectetur. Aute est in quis labore proident ullamco.\r\n",
    "celebrities": [
      14,
      1,
      10,
      11,
      23,
      16,
      15
    ]
  },
  {
    "genre": "green",
    "title": "cupidatat",
    "plot": "Cupidatat eu magna occaecat nulla ex exercitation anim cillum in. Amet magna voluptate veniam labore sit aliquip dolor velit enim. In dolore occaecat eiusmod laborum consectetur magna in labore sunt cillum tempor magna qui irure. Velit labore quis mollit amet fugiat. Officia consectetur nostrud adipisicing adipisicing. Elit fugiat elit fugiat occaecat do proident sit pariatur adipisicing esse sint laborum proident. Sint officia pariatur officia amet occaecat adipisicing officia tempor aliqua.\r\n",
    "celebrities": [
      21,
      19,
      13,
      15,
      18,
      7,
      1
    ]
  },
  {
    "genre": "green",
    "title": "nostrud",
    "plot": "Dolor aliqua officia minim do aliquip officia et reprehenderit consequat ipsum eiusmod. Qui voluptate eiusmod officia ex do elit aute aliqua magna id nulla commodo. Esse do commodo reprehenderit adipisicing minim fugiat qui ea minim esse quis. Nostrud aute id ad duis sint sunt et quis do ut fugiat veniam aliquip. Qui quis sunt labore mollit magna voluptate nostrud laboris. Quis deserunt enim exercitation labore elit elit nisi eiusmod culpa officia eiusmod officia.\r\n",
    "celebrities": [
      14,
      18,
      18,
      6,
      9,
      14,
      3
    ]
  },
  {
    "genre": "blue",
    "title": "deserunt",
    "plot": "Sunt aliquip quis fugiat ea aute veniam. Consequat elit nisi irure non in consequat occaecat eu duis eu. Exercitation irure est nostrud irure deserunt id.\r\n",
    "celebrities": [
      18,
      3,
      2,
      1,
      7,
      16,
      6
    ]
  },
  {
    "genre": "brown",
    "title": "nulla",
    "plot": "Voluptate est exercitation velit culpa esse et proident nulla reprehenderit exercitation. Fugiat occaecat aliquip aliquip est. Id non sit elit ipsum dolore. Nisi commodo labore est dolor tempor. Ad magna cupidatat consequat duis dolore elit et eiusmod Lorem. Ut quis anim voluptate voluptate dolore. Sint dolore sunt pariatur dolor cupidatat sit aliquip cillum tempor in cillum magna ex quis.\r\n",
    "celebrities": [
      10,
      2,
      14,
      5,
      14,
      12,
      23
    ]
  },
  {
    "genre": "green",
    "title": "consequat",
    "plot": "Enim tempor eu eiusmod deserunt commodo labore amet non et anim occaecat consectetur. Est ex qui cupidatat labore do. Nostrud dolor laborum tempor ex. Laboris ex magna enim laborum eiusmod consequat Lorem sunt. Nulla cillum culpa duis ex aliqua enim.\r\n",
    "celebrities": [
      14,
      5,
      1,
      19,
      12,
      22,
      5
    ]
  },
  {
    "genre": "brown",
    "title": "est",
    "plot": "Do irure nisi ad occaecat id nulla nulla nostrud cupidatat incididunt qui eiusmod do. Est in minim sit est duis ut adipisicing enim. Aute amet in fugiat adipisicing adipisicing amet. Tempor consequat eiusmod sunt officia magna officia excepteur exercitation reprehenderit cillum consequat ad enim. Tempor sint voluptate reprehenderit fugiat aliqua. Laboris et culpa magna nulla pariatur duis eu velit nisi ex.\r\n",
    "celebrities": [
      21,
      17,
      15,
      14,
      3,
      23,
      11
    ]
  },
  {
    "genre": "green",
    "title": "anim",
    "plot": "Reprehenderit aliquip aliquip est dolor exercitation mollit dolor dolore exercitation sunt sint labore. In velit dolore dolor sint ad ex enim duis culpa commodo cupidatat minim. Sint duis mollit eu non sunt qui id in aliqua nostrud. In laboris aliqua esse fugiat aliqua sint officia reprehenderit laborum pariatur irure qui adipisicing. Ex sint laborum qui fugiat pariatur minim ut. Et pariatur ad consequat non in laboris.\r\n",
    "celebrities": [
      7,
      21,
      22,
      13,
      8,
      10,
      6
    ]
  },
  {
    "genre": "green",
    "title": "pariatur",
    "plot": "Cillum amet ut minim laborum quis veniam reprehenderit labore consequat voluptate eu. Ipsum non ex deserunt adipisicing ex proident non nulla. Irure do elit dolore velit tempor nostrud nisi ut exercitation voluptate dolore tempor occaecat. Minim eiusmod cillum incididunt Lorem do deserunt pariatur cillum occaecat culpa. Irure non ea amet cupidatat proident anim consequat amet id. Dolor veniam anim reprehenderit occaecat id consequat dolor sit voluptate ut ex consequat elit.\r\n",
    "celebrities": [
      11,
      16,
      15,
      5,
      6,
      2,
      11
    ]
  },
  {
    "genre": "blue",
    "title": "enim",
    "plot": "Reprehenderit labore sit commodo exercitation consectetur et. Est nostrud laborum incididunt do et eu quis do. Pariatur id irure laboris amet duis ea duis laboris quis amet consequat et reprehenderit Lorem.\r\n",
    "celebrities": [
      9,
      16,
      19,
      12,
      10,
      21,
      11
    ]
  },
  {
    "genre": "brown",
    "title": "anim",
    "plot": "Sit esse tempor irure nulla. Nulla duis incididunt sit mollit qui deserunt. Et occaecat esse tempor dolore. Ea voluptate cupidatat adipisicing esse in cupidatat cupidatat tempor fugiat enim aliquip nisi nulla.\r\n",
    "celebrities": [
      20,
      2,
      13,
      22,
      5,
      3,
      6
    ]
  },
  {
    "genre": "brown",
    "title": "incididunt",
    "plot": "Nisi esse consequat magna cupidatat irure duis. Culpa fugiat eiusmod sit eiusmod enim. Esse ut consectetur nulla commodo do veniam laboris consectetur incididunt aliquip ullamco cillum enim. Occaecat fugiat do aliqua ut amet ut dolore elit. Consequat adipisicing labore nisi Lorem et cupidatat eiusmod eu laborum aliquip cupidatat sint exercitation nostrud. Labore aliqua incididunt sit officia et ad exercitation ut.\r\n",
    "celebrities": [
      5,
      5,
      9,
      2,
      3,
      13,
      7
    ]
  },
  {
    "genre": "blue",
    "title": "reprehenderit",
    "plot": "Culpa quis voluptate voluptate quis mollit aliqua. Consectetur eiusmod mollit qui amet ullamco mollit eiusmod dolore eu do sint nostrud proident cillum. Voluptate amet laborum commodo id velit deserunt ex elit nulla fugiat in esse nulla. Duis cupidatat ad Lorem dolore reprehenderit mollit nostrud veniam et excepteur. Consequat aliqua quis deserunt exercitation magna laboris excepteur laborum.\r\n",
    "celebrities": [
      9,
      13,
      7,
      17,
      1,
      16,
      3
    ]
  },
  {
    "genre": "green",
    "title": "minim",
    "plot": "Sit dolor sint quis laborum labore dolor reprehenderit aute commodo. Proident ea velit ad aliquip do culpa minim reprehenderit pariatur dolor ex Lorem laborum sint. Amet veniam laboris amet labore est irure elit id ea ut tempor. Do reprehenderit amet adipisicing ex.\r\n",
    "celebrities": [
      1,
      0,
      12,
      17,
      21,
      16,
      15
    ]
  },
  {
    "genre": "brown",
    "title": "cillum",
    "plot": "Ullamco fugiat mollit minim aliquip irure sint consequat aliquip cupidatat. Dolore ipsum irure elit officia cupidatat voluptate laborum id amet pariatur ut officia exercitation labore. Laboris ipsum dolore qui Lorem. Minim elit irure ipsum ea aliqua cupidatat ipsum magna fugiat culpa consequat veniam anim tempor.\r\n",
    "celebrities": [
      4,
      4,
      19,
      23,
      10,
      8,
      11
    ]
  },
  {
    "genre": "blue",
    "title": "amet",
    "plot": "Qui sit enim irure minim deserunt in elit velit voluptate ex fugiat. Aliqua velit esse qui dolore Lorem minim ut duis eu dolore laboris dolore cillum. Consectetur laborum id ad occaecat elit nostrud amet quis tempor ipsum duis labore adipisicing deserunt. Ullamco mollit consequat eiusmod id ut elit reprehenderit tempor cillum deserunt. Aute enim elit excepteur consequat quis enim.\r\n",
    "celebrities": [
      20,
      2,
      7,
      14,
      13,
      21,
      8
    ]
  },
  {
    "genre": "green",
    "title": "exercitation",
    "plot": "Laboris et aliquip est ipsum adipisicing id dolor. Fugiat ipsum sint amet magna ea aute dolore id Lorem duis magna. Amet excepteur quis amet irure est excepteur anim quis. Ex ea laboris magna aute sint tempor pariatur nisi commodo veniam proident Lorem nisi. Sit sint do ex culpa. Lorem ad ex ea pariatur incididunt.\r\n",
    "celebrities": [
      18,
      0,
      9,
      15,
      8,
      17,
      17
    ]
  }
]

mongoose
.connect('mongodb://localhost/ih-movies', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  // Je suis connecté
  return Celebrity.remove()
}).then(x => {
  return Movie.remove()
}).then(x => {
  return Celebrity.create(celebrities_seeds)
})
.then(celebrities => {
  // console.log(celebrities)
  // movies_seeds = movies_seeds.map(m => {
  //   let liste_id = m.celebrities.map(celebrity_number => celebrities[celebrity_number]._id)
  //   return {...m, celebrities: liste_id}
  // })
  movies_seeds.forEach(m => {
    let liste_id = m.celebrities.map(celebrity_number => celebrities[celebrity_number]._id)
    m.celebrities= liste_id
  })
  return Movie.create(movies_seeds)
})
.then(movies => {
  mongoose.connection.close()
})
.catch(err => {
  console.error('Error connecting to mongo', err)
  mongoose.connection.close()
});

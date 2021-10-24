/*
import json from '../json/products.json'; profe no se como importar un json desde esto loko
*/

Vue.component('component-products', {
	data:function(){
		return {
            items: [
                {
                    album_id: 1,
                    album_artista: "A-ha",
                    album_nombre: "Minor Earth Major Sky",
                    album_canciones:
                        [
                            "01. Minor Earth Major Sky", "02. Little Black Heart",
                            "03. Velvet", "04. Summer Moved On",
                            "05. The Sun Never Shone That Day", "06. To Let You Win",
                            "07. The Company Man", "08. Thought That It Was You",
                            "09. I Wish I Cared", "10. Barely Hanging On",
                            "11. You'll Never Get Over Me", "12. Mary Ellen Makes The Moment Count",
                            "13. I Won't Forget Her"
                        ],
                    album_imagen: "aha.png"
                  },
                  {
                      album_id: 2,
                      album_artista: "Babasonicos",
                      album_nombre: "Infame",
                      album_canciones:
                      [
                          "01. Irresponsables", "02. Risa",
                          "03. Pistero", "04. Estertor",
                          "05. Putita", "06. Saturno",
                          "07. Mareo", "08, Sin Mi Diablo",
                          "09. Curtis", "10. Y Que?",
                          "11. La Puntita", "12. Fan De Scorpions",
                          "13. Gratis", "14. Once"
                      ],
                      album_imagen: "babasonicos.png"
              
                  },
                  {
                      album_id: 3,
                      album_artista: "The Beatles",
                      album_nombre: "1",
                      album_canciones:
                      [
                          "01. Love Me Do", "02. From Me to You",
                          "03. She Loves You", "04. I Want to Hold Your Hand",
                          "05. Can't But Me Love", "06. A Hard Day's Night",
                          "07. I Feel Fine", "08. Eight Days a Week",
                          "09. Ticket to Ride", "10. Help!",
                          "11. Yesterday", "12. Day Tripper",
                          "13. We Can Work it Out", "14. Paperback Writer",
                          "15. Yellow Submarine", "16. Eleanor Rigby",
                          "17. Penny Lane", "18. All You Need Is Love",
                          "19. Hello, Goodbye", "20. Lady Madonna",
                          "21. Hey Jude", "22. Get Back",
                          "23. The Ballad of John and Yoko",
                          "24. Something", "25. Come Together",
                          "26. Let it Be", "27. The Long and Winding Road"
                      ],
                      album_imagen: "beatles.png"
                  },
                  {
                      album_id: 4,
                      album_artista: "Bee Gees",
                      album_nombre: "How Can You Mend A Broken Heart",
                      album_canciones:
                      [
                          "01. Stayin' Alive", "02. How Can You Mend a Broken Heart",
                          "03. Spicks and Specks", "04. New York Mining Disaster 1941",
                          "05. To Love Somebody", "06. I Started a Joke",
                          "07. Massachusetts", "08. I've Gotta Get a Message to You",
                          "09. Wind of Change", "10. Jive Talkin'",
                          "11. Nights on Broadway", "12. Fanny (Be Tender With My Love)",
                          "13. You Should be Dancing", "14. Love So Right",
                          "15. Children of the World", "16. Night Fever",
                          "17. More Than a Woman", "18. How Deep is Your Love",
                          "19. Tragedy", "20. Too Much Heaven",
                          "21. Love You Inside Out", "22. For Whom The Bell Tolls",
                          "23. Holiday", "24. Run to Me",
                          "25. Words"
                      ],
                      album_imagen: "beegees.png"
                  },
                  {
                      album_id: 5,
                      album_artista: "Bust-A-Move",
                      album_nombre: "Dance & Rhythm Action",
                      album_canciones:
                      [
                          "01. I luv hamburgers", "02. 2 Bad",
                          "03. The Natural Playboy", "04. Transform",
                          "05. Bust a Groove", "06. I Know",
                          "07. Shorty and the EZ Mouse", "08. Power",
                          "09. CAPOEIRA", "10. Flyin' to Your Soul"
                      ],
                      album_imagen: "bustamove.png"
                  },
                  {
                      album_id: 6,
                      album_artista: "Coldplay",
                      album_nombre: "X & Y",
                      album_canciones:
                      [
                          "01. Square One", "02. What If",
                          "03. White Shadows", "04. Fix You",
                          "05. Talk", "06. X & Y",
                          "07. Speed of Sound", "08. A Message",
                          "09. Swallowed in the Sea", "10. Twisted Logic",
                          "11. Til Kingdom Come"
                      ],
                      album_imagen: "coldplay.png"
                  },
                  {
                      album_id: 7,
                      album_artista: "Electric Light Orchestra",
                      album_nombre: "Discovery",
                      album_canciones:
                      [
                          "01. Shine a Little Love", "02. Confusion",
                          "03. Need Her Love", "04. The Diary of Horace Wimp",
                          "05. Last Train to London", "06. Midnight Blue",
                          "07. On the Run", "08. Wishing",
                          "09. Don't Bring Me Down"
                      ],
                      album_imagen: "elo.png"
                  },
                  {
                      album_id: 8,
                      album_artista: "Duran Duran",
                      album_nombre: "Rio",
                      album_canciones:
                      [
                          "01. Rio", "02. My Own Way",
                          "03. Lonely in Your Nightmare", "04. Hungry Like the Wolf",
                          "05. Hold Back the Rain", "06. New Religion",
                          "07. Last Chance on the Stairway", "08. Save A Prayer",
                          "09. The Chauffeur"
                      ],
                      album_imagen: "rio.png"
                  },
                  {
                      album_id: 9,
                      album_artista: "The Police",
                      album_nombre: "Syncronicity",
                      album_canciones:
                      [
                          "01. Synchronicity I", "02. Walking in Your Footsteps",
                          "03. O My God", "04. Mother",
                          "05. Miss Gradenko", "06. Synchronicity II",
                          "07. Every Breath You Take", "08. King of Pain",
                          "09. Wrapped Around Your Finger", "10. Tea in the Sahara",
                          "11. Murder By Numbers"
                      ],
                      album_imagen: "thepolice.png"
                  }
            ]
        };

	},
    template:`
    
<section class="sectionUnoProducts container pb-5">
<h2 class="pb-5">Productos</h2>
    <div class="albumsList text-center pb-5">
        <ul class="albumsLink row mt-5">
            <li v-for="item in this.items" class="albumsItem col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-5">
                <div>
                    <h3>{{item.album_nombre}}</h3>
                    <h4 class="pb-3">{{item.album_artista}}</h4>
                </div>
                        <picture class="albumsItemImg pb-5">
                            <source media="(min-width:992px)" :srcset="getRutaImg(item.album_imagen)">
                            <img :src="getRutaImgMin(item.album_imagen)" :alt="item.album_nombre">
                        </picture>
            </li>
        </ul>
    </div>
</section>`
,

    
    methods:{
       getRutaImg: function(string){
           return `img/img_albums/${string}`
       },
       getRutaImgMin: function(string){
           return `img/img_albums/min_${string}`
       }
    },
});


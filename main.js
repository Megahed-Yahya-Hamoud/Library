const books = [
  {
    id: 1,
    title: "Atomic habits",
    author: "James Clear",
    category: "normal",
    duration: "",
    image:
      "https://images.squarespace-cdn.com/content/v1/613b5cf167750b42b480da2b/5d9bfc05-abcc-437c-a650-0146b667cfc1/atomic+habits+james+clear.jpeg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 2,
    title: "Ielts",
    author: "Jeremy Taylor",
    category: "normal",
    duration: "",
    image:
      "https://goyalpublisher.com/cdn/shop/products/9789386862570.png?v=1642055891",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 3,
    title: "Confessions Of A Common Reader",
    author: "Anne Fadiman",
    category: "horror",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-90.png",
    language: "english",
    description:
      "is a collection of 18 essays by Anne Fadiman, that were originally published in The Common Reader column of Civilization magazine. The book explores readers relationship with their books. In Never Do That To A Book, she writes about how people love their books in two major ways courtly love,",
  },
  {
    id: 4,
    title: "The Changing World Of Books",
    author: "Tim Parks",
    category: "excited",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-92.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 5,
    title: "Browsings",
    author: "Michael Dirda",
    category: "normal",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-99.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 6,
    title: "The World Between Two Covers",
    author: "Ann Morgan",
    category: "normal",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-89.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 7,
    title: "Howards End Is On The Landing",
    author: "Susan Hill",
    category: "excited",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-101.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 8,
    title: "How Reading Changed My Life",
    author: "Anna Quindlen",
    category: "excited",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-100.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 9,
    title: "The Man Who Loved Books Too Much",
    author: "Allison Hoover Bartlett",
    category: "excited",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-93.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 10,
    title: "My Reading Life",
    author: "Pat Conroy",
    category: "normal",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-103.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 11,
    title: "How To Read A Book",
    author: "Mortimer J. Adler, Charles Van Doren",
    category: "horror",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-91.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 12,
    title: "My Life With Bob",
    author: "Pamela Paul",
    category: "horror",
    duration: "",
    image:
      "https://www.thecuriousreader.in/wp-content/uploads/2018/08/BOOKS-ABout-booksArtboard-102.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 13,
    title: "The Storied Life of A. J. Fikry",
    author: "Gabrielle Zevie",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-storied-life-of-aj-fikry-gabrielle-zevin.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 14,
    title: "The Bookish Life of Nina Hill",
    author: "Abbi Waxman",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-bookish-life-of-nina-hill-abbi-waxman.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 15,
    title: "Mr. Penumbra’s 24-Hour Bookstore",
    author: "Robin Sloan",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/mr-penumbras-24-hour-bookstore-robin-sloan.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 16,
    title: "The Sentence",
    author: "Louise Erdrich",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-sentence-louise-erdrich.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 17,
    title: "American Dirt",
    author: "Jeanine Cummins",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/american-dirt-jeanine-cummins.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 18,
    title: "The Library Book",
    author: "Susan Orlean",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-library-book-susan-orlean.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 19,
    title: "Normal people",
    author: "Sally Rooney",
    category: "normal",
    duration: "",
    image:
      "https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/oYmaeASGLEdictoLIAAnkHIfrCWye8wg1bQpHd~tplv-tej9nj120t-origin.webp",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 20,
    title: "Good company",
    author: "Mark Max",
    category: "normal",
    duration: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLbC4uV6Su_IWD6oy-jBKJx6qaYtNDcHBFjDauSIg3H2Z3X777d15DU_DvLbTKAFNbXE&usqp=CAU",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 21,
    title: "Book thief",
    author: "Markus Zusak",
    category: "horror",
    duration: "",
    image:
      "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1659824881/pro_pbid_825589.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 22,
    title: "Hell of a book",
    author: "jason Mot",
    category: "excited",
    duration: "",
    image: "https://shereads.com/wp-content/uploads/2022/06/81kftIBsgcL.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 23,
    title: "Yoy are what you read",
    author: "Jodie Jackson",
    category: "normal",
    duration: "",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1558115711i/45869086.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 24,
    title: "Char of darkness",
    author: "Kevin Quigley",
    category: "normal",
    duration: "",
    image:
      "https://camelotbooks.com/pub/media/catalog/product/cache/7ac720526a36fcc0086b235f6daeed7a/q/u/quigley_chart_of_darkness.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 25,
    title: "The favorite daughter",
    author: "Kaira Rouda",
    category: "excited",
    duration: "",
    image:
      "https://www.beyondthebookends.com/wp-content/uploads/2019/03/the-favorite-daughter.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 26,
    title: "The good daughter",
    author: "Karin Slaughter",
    category: "excited",
    duration: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBxxCZW4gX5EtgRHm6vlNOZbKp9VP7zwHITu4M1hZZb4MrZ72p4r1M2OO4q1XjVkcREM&usqp=CAU",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 27,
    title: "Daughter of eve",
    author: "Nina D.Campbell",
    category: "excited",
    duration: "",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643868208i/60296293._UX160_.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 28,
    title: "Shadow and bone",
    author: "leigh Bardugo",
    category: "normal",
    duration: "",
    image:
      "https://www.leighbardugo.com/wp-content/uploads/2023/08/lbardugo_3d_shadowandbone-752x1024.png",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 29,
    title: "The taking",
    author: "Jake Livingston",
    category: "horror",
    duration: "",
    image:
      "https://www.mytutor.co.uk/blog/wp-content/uploads/2023/03/jakelivingston-jpg.webp",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 30,
    title: "Hide and seeker",
    author: "Daka Hermon",
    category: "horror",
    duration: "",
    image:
      "https://images-production.bookshop.org/spree/images/attachments/11594060/original/9781338583625.jpg?1587390632",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 31,
    title: "The jumbies",
    author: "Tracey Baptiste",
    category: "horror",
    duration: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzRkxweGGVqD5-69nPmBxaHZDQfm2ptogjLvB8BRfRuC-Z_wp2d7p8Vsh4H_H_blZQYg&usqp=CAU",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 32,
    title: "Story thieves",
    author: "James Riley",
    category: "excited",
    duration: "",
    image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481409209/story-thieves-9781481409209_hr.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 33,
    title: "Where sleeping girls lie",
    author: "Faridah Abike",
    category: "excited",
    duration: "",
    image:
      "https://www.nickelbooks.co.uk/wp-content/uploads/2024/03/9781474967549.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 34,
    title: "The dark half",
    author: "Stephen King",
    category: "horror",
    duration: "",
    image:
      "https://lwcurrey.cdn.bibliopolis.com/pictures/152953.jpg?auto=webp&v=1682009705",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 35,
    title: "The great Gatsby",
    author: "F.Scott Fitzgerald",
    category: "normal",
    duration: "",
    image: "https://miro.medium.com/v2/resize:fit:624/0*NcMtGFC9mBASCeeC.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 36,
    title: "Look for me",
    author: "Lisa Gardner",
    category: "normal",
    duration: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62-TlaMIqKGx0HWqssKtPCwUZ_SM5mY97MVw1KvV-fjydQRrMtIsBSOHYmcza6efnyhA&usqp=CAU",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 37,
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/cloud-cuckoo-land-anthony-doerr-1.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 38,
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-starless-sea-erin-morgenstern.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 39,
    title: "The Giver of Stars",
    author: "Jojo Moyes",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-giver-of-stars-jojo-moyes.jpg",
    language: "english",
    description:
      "is a collection of 18 essays by Anne Fadiman, that were originally published in The Common Reader column of Civilization magazine. The book explores readers relationship with their books. In Never Do That To A Book, she writes about how people love their books in two major ways courtly love,",
  },
  {
    id: 40,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-midnight-library-matt-haig.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 41,
    title: "Hello Beautiful",
    author: "Ann Napolitano",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/hello-beautiful-ann-napolitano.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 42,
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-book-thief-markus-zusak.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 43,
    title: "The Forgotten Garden",
    author: "Kate Morton",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-forgotten-garden-kate-morton.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 44,
    title: "Book of a Thousand Days",
    author: "Shannon Hale",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/book-of-a-thousand-days-shannon-hale.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 45,
    title: "The Library of Legends",
    author: "Janie Chang",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-library-of-legends-janie-chang.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 46,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/fahrenheit-451-ray-bradbury.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 47,
    title: "Hell of a Book",
    author: "Jason Mott",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/hell-of-a-book-jason-mott.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 48,
    title: "Book Lovers",
    author: "Emily Henry",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/book-lovers-emily-henry.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 49,
    title: "The Dead Romantics",
    author: "Ashley Poston",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-dead-romantics-ashley-porter.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 50,
    title: "Misery",
    author: "Stephen King",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/misery-stephen-king.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 51,
    title: "Verity",
    author: "Colleen Hoover",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/verity-colleen-hoover.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 52,
    title: "I'd Rather Be Reading",
    author: "Anne Bogel",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/id-rather-be-reading-anne-bogel.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 53,
    title: "Bibliophile",
    author: "Jane Mount",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/bibliophile-jane-mount.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 54,
    title: "Well-Read Black Girl",
    author: "Glory Edim",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/well-read-black-girl-glory-edim.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 55,
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/all-the-light-we-cannot-see-anthony-doerr.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 56,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/where-the-crawdads-sing-delia-owens.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 57,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-vanishing-half-brit-bennett.jpg",
    language: "english",
    description:
      "is a collection of 18 essays by Anne Fadiman, that were originally published in The Common Reader column of Civilization magazine. The book explores readers relationship with their books. In Never Do That To A Book, she writes about how people love their books in two major ways courtly love,",
  },
  {
    id: 58,
    title: "Hello Beautiful",
    author: "Ann Napolitano",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/hello-beautiful-ann-napolitano.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 59,
    title: "Everything I Never Told You",
    author: "Celeste Ng",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/everything-i-never-told-you-celeste-ng.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 60,
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/a-man-called-ove-fredrik-backman.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 61,
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/demon-copperhead-barbara-kingsolver.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 62,
    title: "Still Alice",
    author: "Lisa Genova",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/still-alice-lisa-genova-2.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 63,
    title: "Ask Again, Yes",
    author: "Mary Beth Keane",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/ask-again-yes-mary-beth-keane.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 64,
    title: "Behold the Dreamers",
    author: "Imbolo Mbue",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/behold-the-dreamers-imbolo-mbue.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 65,
    title: "Me Before You",
    author: "Jojo Moyes",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/me-before-you-jojo-moyes.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 66,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-kite-runner-khaled-hosseini.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 67,
    title: "Code Name Hélène",
    author: "Ariel Lawhon",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/code-name-helene-ariel-lawhon.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 68,
    title: "A Fine Balance",
    author: "Rohinton Mistry",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/a-fine-balance-by-rohinton-mistry.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 69,
    title: "Ordinary Grace",
    author: "William Kent Krueger",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/ordinary-grace-william-kent-krueger.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 70,
    title: "A Time To Kill",
    author: "John Grisham",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/a-time-to-kill-john-grisham.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 71,
    title: "And Then There Were None",
    author: "Agatha Christie",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/and-then-there-were-none-agatha-christie.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 72,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-girl-on-the-train-paula-hawkins.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 73,
    title: "The Great Alone",
    author: "Kristin Hannah",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-great-alone-kristin-hannah.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 74,
    title: "The Martian",
    author: "Andy Weir",
    category: "normal",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/the-martian-andy-weir.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 75,
    title: "World War Z",
    author: "Max Brooks",
    category: "horror",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/world-war-z-max-brooks.jpg",
    language: "english",
    description:
      "is a collection of 18 essays by Anne Fadiman, that were originally published in The Common Reader column of Civilization magazine. The book explores readers relationship with their books. In Never Do That To A Book, she writes about how people love their books in two major ways courtly love,",
  },
  {
    id: 76,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "excited",
    duration: "",
    image:
      "https://www.booklistqueen.com/wp-content/uploads/enders-game-orson-scott-card.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 77,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas ",
    category: "normal",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/1694-1/%7B10600828-95FD-4B77-B578-C6D767C6DA3F%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 78,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "normal",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0305-1/%7B6D6C90C2-5B98-4136-9D53-CCA4CA3B5C2E%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 79,
    title: "Time Quintet",
    author: "Madeleine L'Engle",
    category: "excited",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/1191-1/001/6BA/F3/%7B0016BAF3-03DB-4580-98E1-3E3E01A5CF18%7DImg400.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 80,
    title: "The Heroes of Olympus",
    author: "Rick Riordan",
    category: "excited",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/2508-1/%7BCC264F3F-C02F-4881-BB6A-620DA18195A4%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 81,
    title: "A Song of Ice and Fire",
    author: "George R. R. Martin",
    category: "excited",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/1191-1/DDF/7AE/F4/%7BDDF7AEF4-751D-4301-A612-C7B33A0D51D5%7DImg400.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 82,
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    category: "normal",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0293-1/%7B8C496644-D109-41F8-9C35-BA3A18792858%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 83,
    title: "Six of Crows",
    author: "Leigh Bardugo",
    category: "horror",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/2390-1/%7B9DEC75E6-F795-437C-9897-A6926B466EBA%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 84,
    title: "Inheritance Cycle",
    author: "Christopher Paolini",
    category: "horror",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0111-1/%7B29AA89F8-73DC-434D-A86F-6E7D0658BEC4%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 85,
    title: "The Shining",
    author: "Stephen King ",
    category: "horror",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0111-1/%7B8667DB9C-8D77-4118-9605-02E6EE0DC4A9%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 86,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "excited",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0211-1/75A/ABE/1C/%7B75AABE1C-921F-4A8D-BC17-F6CE6F0D9962%7DImg400.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 87,
    title: "Lizzy & Diesel",
    author: "Janet Evanovich",
    category: "excited",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/1493-1/21F/43A/3E/%7B21F43A3E-CE6F-49F5-B741-C2C5147D689A%7DImg400.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 88,
    title: "The Twilight Saga",
    author: "Stephenie Meyer",
    category: "horror",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0017-1/%7BE4F91BD5-7F81-49C2-98D1-E953EEFFED42%7DIMG400.JPG",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 89,
    title: "Cousins O'Dwyer Trilogy",
    author: "Nora Roberts",
    category: "normal",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/1523-1/AA3/877/B9/%7BAA3877B9-32A3-42FA-A55B-A5027EA0C72D%7DImg400.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
  {
    id: 90,
    title: "A Song of Ice and Fire",
    author: "George R. R. Martin",
    category: "normal",
    duration: "",
    image:
      "https://img1.od-cdn.com/ImageType-400/0111-1/0D8/556/4B/%7B0D85564B-A4B3-43D5-875D-1DF3CA06AE65%7DImg400.jpg",
    language: "english",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis tempore recusandae, natus nesciunt voluptates, iure nam veritatis libero quis eos laboriosam. Quibusdam nihil assumenda iure saepe, dolorem reprehenderit corporis.",
  },
];

// ================  content part one  =====================================

const firstBooks = document.querySelector(".carousel-active");
const partTwoBooks = document.querySelector(".second-carousel");
const partThreeBooks = document.querySelector(".third-carousel");

for (let index = 0; index < 6; index++) {
  firstBooks.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                    <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6  class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 6; index < 12; index++) {
  partTwoBooks.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6   class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                    <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 12; index < 18; index++) {
  partThreeBooks.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                               <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6   class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                   <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

// ================  content part two  =====================================

const partTwoCarousel = document.querySelector(".partTwo-carousel-active ");
const partTwoSecondCarousel = document.querySelector(
  ".partTwo-second-carousel"
);
const partTwoThirdCarousel = document.querySelector(".partTwo-third-carousel");

for (let index = 18; index < 24; index++) {
  partTwoCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 24; index < 30; index++) {
  partTwoSecondCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 30; index < 36; index++) {
  partTwoThirdCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

// ================  content part three  =====================================

const partThreeCarousel = document.querySelector(".partThree-carousel-active");
const partThreeSecondCarousel = document.querySelector(
  ".partThree-second-carousel"
);
const partThreeThirdCarousel = document.querySelector(
  ".partThree-third-carousel"
);

for (let index = 36; index < 42; index++) {
  partThreeCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 42; index < 48; index++) {
  partThreeSecondCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 48; index < 54; index++) {
  partThreeThirdCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

// ================  content part four  =====================================

const parFourCarousel = document.querySelector(".parFour-carousel-active");
const parFourSecondCarousel = document.querySelector(
  ".parFour-second-carousel"
);
const parFourThirdCarousel = document.querySelector(".parFour-third-carousel");

for (let index = 54; index < 60; index++) {
  parFourCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 60; index < 66; index++) {
  parFourSecondCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 66; index < 72; index++) {
  parFourThirdCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

// ================  content part five  =====================================

const parFiveCarousel = document.querySelector(".parFive-carousel-active");
const parFiveSecondCarousel = document.querySelector(
  ".parFive-second-carousel"
);
const parFiveThirdCarousel = document.querySelector(".parFive-third-carousel");

for (let index = 72; index < 78; index++) {
  parFiveCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 78; index < 84; index++) {
  parFiveSecondCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

for (let index = 84; index < 90; index++) {
  parFiveThirdCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book">
                                 <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                  <h6   class="mt-1 titleOfBook">
                                      ${books[index].title}
                                  </h6>
                                     <div class="buttons">
                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                              View details
                                      </button>
                                  </div>
                              </div>`;
}

// ================= category  ====================

const cat = document.querySelectorAll(".category");

cat.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);

    cat.forEach((item) => {
      item.classList.remove("active-category");
    });

    e.currentTarget.classList.add("active-category");
  });
});


// =====================  Search ========================================

document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.querySelector(".inputSearch");
  const searchBtn = document.querySelector(".search-btn");
  const main = document.querySelector(".main");
  const newBooks = document.querySelector(".new-books");

  if (inputSearch && searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (inputSearch.value) {
        console.log(inputSearch.value);

        const oneBook = books.filter(
          (ele) =>
            ele.title.toLocaleLowerCase() ==
            inputSearch.value.toLocaleLowerCase()
        );

        main.innerHTML = ``;
        newBooks.innerHTML = ``;

        oneBook.map((ele) => {
          newBooks.innerHTML += `
        <div id=${ele.id} style="display:inline-block" class="m-2 card-book">
                                <img
                                    class="imgBook"
                                    src=${ele.image}
                                    height="200px" alt="...">
                                <h6   class="mt-1 titleOfBook">
                                    ${ele.title}
                                </h6>
                                   <div class="buttons">
                                    <button id=${ele.id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
        });

        const newCard = document.querySelectorAll(".vieBook");

        newCard.forEach((ele) => {
          ele.addEventListener("click", () => {
            singlemethos(ele.id);
            console.log(ele.id);
          });
        });

        function singlemethos(id) {
          const ind = id - 1;

          modalTitle.innerHTML = `${books[ind].title}`;

          imageBody.innerHTML = `<img class="image-popup" src= ${books[ind].image} width="100%" height="500px" style="border-radius: 10px;"/>`;

          author.innerHTML = `<h5>Author: <span style="font-weight:700 ; color:red">${books[ind].author}</span></h5>`;

          modalBody.innerHTML = `<p>${books[ind].description}</p>`;
        }
      } else {
        newBooks.innerHTML = ``;
        window.location.reload();
      }
    });
  } else {
  }
});

// ====================   new content part one  =============

const newCarousel = document.querySelector(".new-carousel-active");
const newCarouselInner = document.querySelector(".new-carousel-inner");

for (let index = 0; index < 1; index++) {
  newCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                    <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6  class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 1; index < 18; index++) {
  newCarouselInner.innerHTML += `<div class="carousel-item ">
                                    <div class="second-carousel  style-carousel">
                                    <div id=${books[index].id}  class="m-2 card-book ">
                                                                      <div>
                                                                      <img
                                                                          class="imgBook"
                                                                          src=${books[index].image}
                                                                          height="200px" alt="..."/>
                                                                      </div>
                                                                  <h6  class="mt-1 titleOfBook">
                                                                      ${books[index].title}
                                                                  </h6>
                                                                  <div class="buttons">
                                                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                              View details
                                                                      </button>
                                                                  </div>
                                                              </div>
    
                                    </div>
                                </div>
  
                            
                            `;
}

// ====================   new content part two  =============

const newTwoCarousel = document.querySelector(".newTwo-carousel-active");
const newTwoCarouselInner = document.querySelector(".newTwo-carousel-inner");

for (let index = 18; index < 19; index++) {
  newTwoCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                    <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6  class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 19; index < 36; index++) {
  newTwoCarouselInner.innerHTML += `
  
  <div class="carousel-item ">
                                    <div class="newTwo-second-carousel style-carousel">
                                    
                                    <div id=${books[index].id}  class="m-2 card-book ">
                                                                      <div>
                                                                      <img
                                                                          class="imgBook"
                                                                          src=${books[index].image}
                                                                          height="200px" alt="..."/>
                                                                      </div>
                                                                  <h6  class="mt-1 titleOfBook">
                                                                      ${books[index].title}
                                                                  </h6>
                                                                  <div class="buttons">
                                                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                              View details
                                                                      </button>
                                                                  </div>
                                                              </div>
    
                                    </div>
                                </div>
                            
                            `;
}

// ====================   new content part three  =============

const NewThreeCarousel = document.querySelector(".NewThree-carousel-active");
const newThreeCarouselInner = document.querySelector(
  ".newThree-carousel-inner"
);

for (let index = 36; index < 37; index++) {
  NewThreeCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                    <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6  class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 37; index < 54; index++) {
  newThreeCarouselInner.innerHTML += `
  <div class="carousel-item ">
                                    <div class="NewThree-second-carousel style-carousel">
                                    <div id=${books[index].id}  class="m-2 card-book ">
                                                                      <div>
                                                                      <img
                                                                          class="imgBook"
                                                                          src=${books[index].image}
                                                                          height="200px" alt="..."/>
                                                                      </div>
                                                                  <h6  class="mt-1 titleOfBook">
                                                                      ${books[index].title}
                                                                  </h6>
                                                                  <div class="buttons">
                                                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                              View details
                                                                      </button>
                                                                  </div>
                                                              </div>
    
                                    </div>
                                </div>
  
  
                            
                            `;
}

// ====================   new content part four  =============

const NewFourCarousel = document.querySelector(".NewFour-carousel-active");
const newFourCarouselInner = document.querySelector(".newFour-carousel-inner");

for (let index = 54; index < 55; index++) {
  NewFourCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                    <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6  class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 55; index < 72; index++) {
  newFourCarouselInner.innerHTML += `
  
  <div class="carousel-item ">
                                    <div class="NewFour-second-carousel style-carousel">
                                    <div id=${books[index].id}  class="m-2 card-book ">
                                                                      <div>
                                                                      <img
                                                                          class="imgBook"
                                                                          src=${books[index].image}
                                                                          height="200px" alt="..."/>
                                                                      </div>
                                                                  <h6  class="mt-1 titleOfBook">
                                                                      ${books[index].title}
                                                                  </h6>
                                                                  <div class="buttons">
                                                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                              View details
                                                                      </button>
                                                                  </div>
                                                              </div>
    
                                    </div>
                                </div>
  
                            
                            `;
}

// ====================   new content part five  =============

const NewFiveCarousel = document.querySelector(".NewFive-carousel-active");
const newFiveCarouselInner = document.querySelector(".newFive-carousel-inner");

for (let index = 72; index < 73; index++) {
  NewFiveCarousel.innerHTML += `<div id=${books[index].id}  class="m-2 card-book ">
                                    <div>
                                    <img
                                        class="imgBook"
                                        src=${books[index].image}
                                        height="200px" alt="..."/>
                                    </div>
                                <h6  class="mt-1 titleOfBook">
                                    ${books[index].title}
                                </h6>
                                <div class="buttons">
                                    <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View details
                                    </button>
                                </div>
                            </div>`;
}

for (let index = 73; index < 90; index++) {
  newFiveCarouselInner.innerHTML += `
  
         <div class="carousel-item ">
                                    <div class="NewFive-second-carousel style-carousel">
                                    
                                    <div id=${books[index].id}  class="m-2 card-book ">
                                                                      <div>
                                                                      <img
                                                                          class="imgBook"
                                                                          src=${books[index].image}
                                                                          height="200px" alt="..."/>
                                                                      </div>
                                                                  <h6  class="mt-1 titleOfBook">
                                                                      ${books[index].title}
                                                                  </h6>
                                                                  <div class="buttons">
                                                                      <button id=${books[index].id} type="button" class="btn btn-link vieBook" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                              View details
                                                                      </button>
                                                                  </div>
                                                              </div>
    
                                    </div>
                                </div>
                            
                            `;
}


// ===========    newModal =========



// const newCard = document.querySelectorAll(".viewNewBook");

// newCard.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     newMethos(ele.id);

//     console.log(ele.id);
//   });
// });

// const newModalTitle = document.querySelector(".new-modal-title");
// const newImageBody = document.querySelector(".new-image-body");
// const newAuthor = document.querySelector(".new-author");
// const newModalBody = document.querySelector(".new-description");

// function newMethos(id) {
//   const ind = id - 1;

//   newModalTitle.innerHTML = `${books[ind].title}`;

//   newImageBody.innerHTML = `<img src= ${books[ind].image} width="100%" height="500px" style="border-radius: 10px;"/>`;

//   newAuthor.innerHTML = `<h5>Author: <span style="font-weight:700 ; color:red">${books[ind].author}</span></h5>`;

//   newModalBody.innerHTML = `<p>${books[ind].description}</p>`;
// }

const card = document.querySelectorAll(".vieBook");

card.forEach((ele) => {
  ele.addEventListener("click", () => {
    methos(ele.id);

    console.log(ele.id);
  });
});

const modalTitle = document.querySelector(".modal-title");
const imageBody = document.querySelector(".image-body");
const modalBody = document.querySelector(".description");
const author = document.querySelector(".author");

function methos(id) {
  const ind = id - 1;

  modalTitle.innerHTML = `${books[ind].title}`;

  imageBody.innerHTML = `<img class="image-popup" src= ${books[ind].image} width="100%"  style="border-radius: 10px;"/>`;

  author.innerHTML = `<h5>Author: <span style="font-weight:700 ; color:red">${books[ind].author}</span></h5>`;

  modalBody.innerHTML = `<p>${books[ind].description}</p>`;
}
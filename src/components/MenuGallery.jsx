import { Component } from "react";
import { Card, CardContent } from "@/components/ui/card";
import appetizersImage from "@/assets/menu-appetizers.jpg";
import paellaImage from "@/assets/menu-paella.jpg";
import grillImage from "@/assets/menu-grill.jpg";
import seafoodImage from "@/assets/menu-seafood.jpg";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  {
    id: 1,
    title: "Закуски",
    subtitle: "Закуски",
    image: appetizersImage,
    description: "Традиционные испанские тапас и закуски",
  },
  {
  id: 2,
  title: "Горячие блюда",
  subtitle: "Основное меню",
  image: paellaImage,
  description: "Сытные и ароматные блюда"
  },
  {
    id: 3,
    title: "Узбекская еда",
    subtitle: "Домашний уют",
    image: "https://yastatic.net/avatars/get-grocery-goods/2998515/3a9a641d-0751-4301-9ab4-003a6bbdd2d7/300x300?webp=true",
    description: "Традиции Узбекистана в каждой тарелке",
  },
  {
    id: 4,
    title: "Морские Блюда",
    subtitle: "Свежий улов",
    image: seafoodImage,
    description: "Свежие океанские деликатесы",
  },
];

const menuItems = {
  "Закуски": [
    { name: "БРУСКЕТТА", desc: "Хрустящий хлеб с томатами и базиликом", img: "https://avatars.mds.yandex.net/get-vertis-journal/4220003/86608532-47db-4325-b441-54a67c186490.jpg/1600x1600" },
    { name: "КРЕВЕТКИ НА ШПАЖКАХ", desc: "Пикантные креветки на шпажках", img: "https://img.iamcook.ru/2021/upl/recipes/cat/u-2242bf46e46ce5d960e69d02e7581d11.jpg" },
    { name: "СЫРНАЯ ТАРЕЛКА", desc: "Ассорти из европейских сыров", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwB0tc_7AZVVXrY0YvLdXe-nfTaYe-yWOqA&s" },
    { name: "ОЛИВКИ", desc: "Маринованные оливки с пряностями", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoMGdsrt56cc-7Cauciaj2GnXbdkCNygWww&s" },
    { name: "БРУСКЕТТА", desc: "Хрустящий хлеб с томатами и базиликом", img: "https://avatars.mds.yandex.net/get-vertis-journal/4220003/86608532-47db-4325-b441-54a67c186490.jpg/1600x1600" },
    { name: "КРЕВЕТКИ НА ШПАЖКАХ", desc: "Пикантные креветки на шпажках", img: "https://img.iamcook.ru/2021/upl/recipes/cat/u-2242bf46e46ce5d960e69d02e7581d11.jpg" },
    { name: "СЫРНАЯ ТАРЕЛКА", desc: "Ассорти из европейских сыров", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwB0tc_7AZVVXrY0YvLdXe-nfTaYe-yWOqA&s" },
    { name: "ОЛИВКИ", desc: "Маринованные оливки с пряностями", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoMGdsrt56cc-7Cauciaj2GnXbdkCNygWww&s" }
  ],
  "Горячие блюда": [
    { name: "СТЕЙК", desc: "Говядина средней прожарки с соусом", img: "https://images.gastronom.ru/YV_iyjPWKWUNQu9W2FmLEq9yu7PXF7OFBWRxTsDZs7A/pr:article-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzUxZTkwYTNhLTA4ODktNGI4Yi1hOTBlLTA5MzQyYzE5YmMyMC5qcGc.webp" },
    { name: "ПАСТА КАРБОНОРА", desc: "Паста с беконом и сливочным соусом", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA97bQHjHAUGFT46evtuhLTiD-dz-Hp_ugQ&s" },
    { name: "РИЗОТТО С ГРИБАМИ", desc: "Кремовое ризотто с белыми грибами", img: "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzQzOC9jb3ZlcnMvM1YycXBULkpQRw.jpg" },
    { name: "КУРИЦА ПО-АЗИАТСКИ", desc: "Курица в сладко-остром соусе", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8F3mbcg16764fO5tEIx-Jw5Ws231HvWQzw&s" },
    { name: "СТЕЙК", desc: "Говядина средней прожарки с соусом", img: "https://images.gastronom.ru/YV_iyjPWKWUNQu9W2FmLEq9yu7PXF7OFBWRxTsDZs7A/pr:article-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzUxZTkwYTNhLTA4ODktNGI4Yi1hOTBlLTA5MzQyYzE5YmMyMC5qcGc.webp" },
    { name: "ПАСТА КАРБОНОРА", desc: "Паста с беконом и сливочным соусом", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA97bQHjHAUGFT46evtuhLTiD-dz-Hp_ugQ&s" },
    { name: "РИЗОТТО С ГРИБАМИ", desc: "Кремовое ризотто с белыми грибами", img: "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzQzOC9jb3ZlcnMvM1YycXBULkpQRw.jpg" },
    { name: "КУРИЦА ПО-АЗИАТСКИ", desc: "Курица в сладко-остром соусе", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8F3mbcg16764fO5tEIx-Jw5Ws231HvWQzw&s" }
  ],
  "Узбекская еда": [
    { name: "ПЛОВ", desc: "Классический узбекский плов с говядиной", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiIVyyUkAHeac-vENGDjexiVpvp_NOVwuRg&s" },
    { name: "САМСА", desc: "Слоёное тесто с сочной начинкой", img: "https://img.iamcook.ru/2021/upl/recipes/zen/u-906279da5f39acc8d9c27f6fa8295bd4.JPG" },
    { name: "МАНТЫ", desc: "Большие сочные пельмени", img: "https://i.obozrevatel.com/food/recipemain/2019/1/9/125.jpg?size=636x424" },
    { name: "ЛАГМАН", desc: "Домашняя лапша с мясом", img: "https://menunedeli.ru/wp-content/uploads/2022/10/Lagman-retsept-klassicheskiy-500-350-scaled.jpg" },
    { name: "ПЛОВ", desc: "Классический узбекский плов с говядиной", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiIVyyUkAHeac-vENGDjexiVpvp_NOVwuRg&s" },
    { name: "САМСА", desc: "Слоёное тесто с сочной начинкой", img: "https://img.iamcook.ru/2021/upl/recipes/zen/u-906279da5f39acc8d9c27f6fa8295bd4.JPG" },
    { name: "МАНТЫ", desc: "Большие сочные пельмени", img: "https://i.obozrevatel.com/food/recipemain/2019/1/9/125.jpg?size=636x424" },
    { name: "ЛАГМАН", desc: "Домашняя лапша с мясом", img: "https://menunedeli.ru/wp-content/uploads/2022/10/Lagman-retsept-klassicheskiy-500-350-scaled.jpg" }
  ],
  "Морские Блюда": [
    { name: "ДОРАДО НА ГРИЛЕ", desc: "Свежая рыба, запечённая с лимоном", img: "https://images.gastronom.ru/D_ImkSH2ijYA2LvidVFoeezfw2I9mUl0QR9v14CjQNQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzdjYmViMTU0LWQ5MzgtNDhkNC05MjFkLTI3MjE0MDBmOTgwZS5qcGc.webp" },
    { name: "КРЕВЕТКИ В СОУСЕ", desc: "Тигровые креветки в сливочном соусе", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMr5Wim4OgTATemJUcPR2-BvyThm4aMQ9CA&s" },
    { name: "СУП ИЗ МОРЕПРОДУКТОВ", desc: "Ароматный бульон с мидиями и креветками", img: "https://images.gastronom.ru/3vpTfUWYWrmulZoFMnySgS8dkRBEcn2NGbfD-SOjrxc/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2EyYzk0MjgwLTlhYTEtNDQzZS1iNzNkLWIwZjdhYjQzNmI3MC5qcGc.webp" },
    { name: "КАЛЬМАРЫ ПО-АЗИАТСКИ", desc: "Обжаренные кальмары с имбирём", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1G3EkYNK8jmi-LqVg35sfaJmWXphldwS2w&s"},
    { name: "ДОРАДО НА ГРИЛЕ", desc: "Свежая рыба, запечённая с лимоном", img: "https://images.gastronom.ru/D_ImkSH2ijYA2LvidVFoeezfw2I9mUl0QR9v14CjQNQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzdjYmViMTU0LWQ5MzgtNDhkNC05MjFkLTI3MjE0MDBmOTgwZS5qcGc.webp" },
    { name: "КРЕВЕТКИ В СОУСЕ", desc: "Тигровые креветки в сливочном соусе", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMr5Wim4OgTATemJUcPR2-BvyThm4aMQ9CA&s" },
    { name: "СУП ИЗ МОРЕПРОДУКТОВ", desc: "Ароматный бульон с мидиями и креветками", img: "https://images.gastronom.ru/3vpTfUWYWrmulZoFMnySgS8dkRBEcn2NGbfD-SOjrxc/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2EyYzk0MjgwLTlhYTEtNDQzZS1iNzNkLWIwZjdhYjQzNmI3MC5qcGc.webp" },
    { name: "КАЛЬМАРЫ ПО-АЗИАТСКИ", desc: "Обжаренные кальмары с имбирём", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1G3EkYNK8jmi-LqVg35sfaJmWXphldwS2w&s"}
  ]
  };



class MenuGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBludo: null,
    };
  }

  handleClick = (categoryTitle) => {
    this.setState({
      activeBludo: this.state.activeBludo === categoryTitle ? null : categoryTitle,
    });
  };

  render() {
    const { activeBludo } = this.state;

    return (
      <section id="menu" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Наша Галлерея
          </h2>

          {/* Главные карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <Card
                key={index}
                onClick={() => this.handleClick(category.title)}
               className={`group overflow-hidden border border-border transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-[1.02]`}

              >
                <CardContent className="p-0">
                  <div className="relative h-65 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <p className="text-sm uppercase tracking-wider mb-1 opacity-90">
                        {category.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Анимация появления подблюд */}
         <AnimatePresence mode="wait">
  {activeBludo && (
    <motion.div
      key={activeBludo}
      initial={{ opacity: 0, y: -50 }}          // когда появляется — сверху вниз
      animate={{ opacity: 1, y: 0 }}            // плавно встает на место
      exit={{ opacity: 0, y: 50 }}              // уходит вниз при смене
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-10"
    >
      <h3 style={{marginTop: 30}} className="text-3xl font-bold text-center mb-6">{activeBludo}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems[activeBludo]?.map((item, index) => (
          <Card
            key={index}
            className="group overflow-hidden border transition-all duration-500 hover:-translate-y-1"
          >
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </section>
    );
  }
}

export default MenuGallery;

import Link from "next/link";
import React from "react";

// const MenuPage = () => {
//   return (
//     <div className="border-4 border-red-600 p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
//       {menu.map((category) => (
//         <Link
//           href={`/menu/${category.slug}`}
//           key={category.id}
//           className="border-4 border-blue-600 w-full h-1/3 bg-cover p-8 md:h-1/2"
//           style={{ backgroundImage: `url(${category.img})` }}
//         >
//           <div className={`text-${category.color} w-1/2`}>
//             <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
//             <p className="text-sm my-8">{category.desc}</p>
//             <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default MenuPage;



// Assuming menu is imported or defined somewhere
import Image from 'next/image';

const menu = [
  {
    id: 1,
    title: 'Pizzas',
    desc: 'Delicious pizzas with fresh ingredients',
    slug: 'pizzas',
    img: '/m1.png',
    color: 'yellow',
  },
  {
    id: 2,
    title: 'Burgers',
    desc: 'Juicy burgers with premium toppings',
    slug: 'burgers',
    img: '/m2.png',
    color: 'orange',
  },
  {
    id: 3,
    title: 'Salads',
    desc: 'Fresh and healthy salads for a light meal',
    slug: 'salads',
    img: '/m3.png',
    color: 'green',
  },
];

export default function MenuPage() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menu.map((category) => (
          <div
            key={category.id}
            className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <Link href={`/menu/${category.slug}`} className="block h-full">
              <div className="relative h-64">
                <Image
                  src={category.img}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <h2 className={`text-${category.color} font-bold text-3xl`}>
                    {category.title}
                  </h2>
                  <div>
                    <p className="text-white mb-4">{category.desc}</p>
                    <button
                      className={`bg-${category.color} text-black py-2 px-4 rounded-md font-semibold transition-colors duration-300 ease-in-out hover:bg-opacity-90`}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
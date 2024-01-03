import React from "react";

const Foods = () => {
  const items = [
    {
      name: "Burger",
      image:
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    },
    {
      name: "Pizza",
      image:
        "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
    },
    {
      name: "Dosa",
      image:
        "https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg",
    },
    {
      name: "Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg",
    },
    {
      name: "Biryani",
      image:
        "https://www.cookwithnabeela.com/wp-content/uploads/2023/09/ChickenBiryani.webp",
    },
    {
      name: "Cake",
      image:
        "https://stylesweet.com/wp-content/uploads/2022/06/ChocolateCakeForTwo_Featured.jpg",
    },
  ];

  const renderCat = (card) => {
    return (
      <>
        <div className="bg-white rounded-2xl shadow hover:cursor-pointer">
          <div className="w-28 h-24 md:w-44 md:h-32">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full rounded-t-2xl"
            />
          </div>

          <div>
            <h2 className="my-1  text-sm md:text-md md:font-semibold font-medium mx-2">
              {card.name}
            </h2>
          </div>
        </div>
      </>
    );
  };

  return <>{items.map(renderCat)}</>;
};

export default Foods;

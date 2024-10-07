export const soilTypes = {
  sandy: {
    img: "sandySoil.jpeg",
    rive: "sandy.riv",
    characteristics: [
      "Large particles and pore spaces",
      "Drains quickly",
      "Can't retain moisture for long periods"
    ],
    pros: [
      "Warms up quickly in the spring",
      "Easy to cultivate and work with"
    ],
    cons: [
      "Dries out quickly",
      "Low nutrient retention"
    ],
    irrigations: [
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "The most suitable method for frequent, light irrigation. It delivers a slow and steady flow of water directly to the root zone, reducing water loss through evaporation or runoff. This allows the soil to absorb small amounts consistently, maintaining the desired moisture levels."
      },
      {
        title: "Sprinkler Irrigation (With small amounts at frequent intervals)",
        img: "sprinkler.jpg",
        description: "If drip irrigation is not feasible, sprinklers can be adjusted to release water in short, frequent cycles. This method mimics light rainfall and can cover larger areas, though it is less precise compared to drip irrigation."
      }
    ]
  },
  silt: {
    img: "siltSoil.jpeg",
    rive: "silt.riv",
    characteristics: [
      "Small particles",
      "Stable moisture levels",
      "Smooth texture"
    ],
    pros: [
      "Retains moisture longer than sandy soil",
      "Fairly fertile"
    ],
    cons: [
      "Prone to erosion when exposed to wind or rain",
      "May compact easily"
    ],
    irrigations: [
      {
        title: "Sprinkler Irrigation",
        img: "sprinkler.jpg",
        description: "Ideal for silt soils, as it provides an even distribution of water across the surface. This method helps prevent surface crusting and reduces the risk of runoff, ensuring water is absorbed effectively. Setting the sprinklers to moderate, regular intervals keeps moisture balanced without overwhelming the soil."
      },
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "Suitable for maintaining moisture in silt soils by delivering water directly to the root zone. This method reduces water loss through evaporation and runoff, helping maintain the moisture balance that silt soils require. Regular, moderate drip irrigation ensures roots receive sufficient moisture while avoiding waterlogging."
      }
    ]
  },
  clay: {
    img: "claySoil.jpeg",
    rive: "clay.riv",
    characteristics: [
      "Tiny, tightly packed particles",
      "Retains water the best",
      "Poor drainage, leading to slow drying"
    ],
    pros: [
      "Needs less frequent watering",
      "High nutrient retention due to fine particles"
    ],
    cons: [
      "Can get waterlogged",
      "Hard to work with when wet or dry"
    ],
    irrigations: [
      {
        title: "Subsurface Irrigation",
        img: "subsurface.jpg",
        description: "In cases where minimizing surface runoff and evaporation is a priority, subsurface irrigation is effective. It involves placing irrigation lines below the soil surface to deliver water directly to the root zone. This method keeps the surface dry, reduces evaporation, and ensures deep hydration for plants, making it well-suited for clay soils."
      },
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "An excellent method for clay soils as it delivers water slowly and directly to the root zone. This gradual application allows clay to absorb water effectively without becoming oversaturated, preventing surface runoff. By maintaining a deep watering approach, drip irrigation ensures the roots receive the moisture they need."
      },
    ]
  },
  loam: {
    img: "loamSoil.jpeg",
    rive: "loam.riv",
    characteristics: [
      "Balanced mix of sand, silt, and clay",
      "Good drainage while retaining moisture",
      "High fertility"
    ],
    pros: [
      "Ideal for most crops",
      "Retains nutrients well",
      "Easy to cultivate"
    ],
    cons: [
      "May need periodic irrigation adjustments depending on the sand, silt, and clay balance"
    ],
    irrigations: [
      {
        title: "Furrow or Basin Irrigation",
        img: "furrow.jpg",
        description: "Suitable for loamy soils in larger agricultural settings. This method allows water to seep gradually into the soil, taking advantage of loam's good infiltration rate. It helps distribute moisture evenly across the root zone while preventing waterlogging."
      },
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "Ideal for loamy soils as it provides slow, steady water directly to the root zone. Loam's balanced texture allows the water to be absorbed efficiently, minimizing water loss due to drainage while maintaining consistent soil moisture."
      },
      {
        title: "Sprinkler Irrigation",
        img: "sprinkler.jpg",
        description: "Effective for loamy soils, especially in diverse agricultural setups. Sprinklers cover a large area and distribute water evenly, matching loam's capacity to retain water without causing runoff. Adjusting sprinkler intervals ensures optimal moisture levels for various crops."
      },
    ]
  }
};

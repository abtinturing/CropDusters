export const soilTypes = {
  sandy: {
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
        title: "Frequent, Light Irrigation",
        description: "They can't hold in large amounts of water, so they benefit from frequent, light applications of water to maintain consistent moisture levels."
      },
      {
        title: "Drip Irrigation",
        description: "Slow and steady water directly to the root zone minimizes water loss due to drainage."
      },
      {
        title: "Sprinkler Irrigation (Small amount, frequent intervals)",
        description: "If drip irrigation is not feasible, sprinklers that release small amounts of water at frequent intervals can be used."
      }
    ]
  },
  silt: {
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
        title: "Moderate, Regular Irrigation",
        description: "Silt soils retain water longer than sandy soils but drain faster than clay. Regular, moderate irrigation helps maintain consistent moisture without waterlogging."
      },
      {
        title: "Sprinkler Irrigation",
        description: "Effective for silt soils as it provides even distribution of water, helping prevent surface crusting and runoff."
      },
      {
        title: "Drip Irrigation",
        description: "Delivers water directly to the root zone, reducing water loss through evaporation and runoff. Useful for maintaining moisture balance in silt soil."
      }
    ]
  },
  clay: {
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
        title: "Deep Irrigation",
        description: "Clay absorbs water slowly, so it benefits from slow, deep watering to avoid water pooling on the surface. This ensures water penetrates deeply into the soil, reducing the risk of waterlogging."
      },
      {
        title: "Drip Irrigation",
        description: "Delivers water gradually, allowing the soil to absorb it without becoming oversaturated. Prevents surface runoff and ensures water reaches the root zone."
      },
      {
        title: "Subsurface Irrigation",
        description: "Useful in specific cases where reducing surface runoff and evaporation is critical, while directly hydrating plant roots."
      }
    ]
  },
  loam: {
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
        title: "Drip Irrigation",
        description: "Provides slow and steady water directly to the root zone, minimizing water loss due to drainage."
      },
      {
        title: "Sprinkler Irrigation",
        description: "Covers a large area and distributes water evenly, making it effective for various crop types."
      },
      {
        title: "Furrow or Basin Irrigation",
        description: "Useful for loamy soils in larger agricultural settings, allowing water to seep into the soil gradually."
      }
    ]
  }
};

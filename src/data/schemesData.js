// All government schemes data for farmers
export const schemesData = [
  {
    id: 1,
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description:
      "Launched in 2016, PMFBY is India's flagship crop insurance scheme designed to protect farmers against yield losses due to natural calamities like drought, floods, pests, and diseases. It ensures financial stability by compensating farmers for crop loss and promotes risk-free farming.",
    eligibility: [
      "All farmers growing notified crops in notified areas, including tenant and sharecropper farmers.",
      "Farmers with an insurable interest in crops should be registered for the current season."
    ],
    requirements: [
      "Enrollment during the sowing period through bank, CSC, or online portal.",
      "Coverage available for Kharif, Rabi, and commercial/horticultural crops.",
      "Premium: 2% (Kharif), 1.5% (Rabi), 5% (Commercial)."
    ],
    documents: [
      "Aadhaar card",
      "Land ownership or lease proof",
      "Bank passbook copy",
      "Crop sowing certificate (if applicable)"
    ],
    officialLink: "https://pmfby.gov.in/",
    videoUrl: "https://youtu.be/r0nq1Xd2Wts?si=ac8nsDcfuMtkNBe4",
    category: "Insurance"
  },
  {
    id: 2,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description:
      "PM-KISAN, launched in 2019, provides direct income support of ₹6,000 annually to all small and marginal farmer families. The scheme ensures regular financial aid to help with input costs and daily needs, promoting financial inclusion and rural prosperity.",
    eligibility: [
      "All small and marginal landholder farmers with up to 2 hectares of cultivable land.",
      "Excludes institutional landholders and higher-income taxpayers."
    ],
    requirements: [
      "Farmer must have cultivable land registered in their name.",
      "Aadhaar number mandatory for registration."
    ],
    documents: [
      "Aadhaar card",
      "Land ownership record",
      "Bank account details",
      "Income certificate (if required)"
    ],
    officialLink: "https://pmkisan.gov.in/",
    videoUrl: "https://youtu.be/oC3MMuaZjpU?si=cUiMH_Zlw8S9sb99",
    category: "Income Support"
  },
  {
    id: 3,
    title: "Minimum Support Price (MSP)",
    description:
      "The Minimum Support Price is a safety net announced by the government for 23 major crops. It ensures farmers receive fair compensation and protects them from distress sales during market fluctuations. It also supports national food security.",
    eligibility: [
      "All farmers producing MSP-notified crops.",
      "Crops must meet the quality standards defined by FCI/NAFED procurement centers."
    ],
    requirements: [
      "Sale at authorized procurement centers.",
      "Crop registration for procurement season."
    ],
    documents: [
      "Farmer ID or Aadhaar",
      "Land documents",
      "Bank account details",
      "Crop registration proof"
    ],
    officialLink: "https://agricoop.gov.in/",
    videoUrl: "https://youtu.be/qf8lIZTv6KE?si=xv8Yjf0yc-Wopz7R",
    category: "Price Support"
  },
  {
    id: 4,
    title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    description:
      "PMKSY aims to provide irrigation to every farm ('Har Khet Ko Pani') and promote efficient water usage through micro-irrigation systems. The scheme integrates water resource management, watershed development, and rainwater harvesting to ensure productivity and sustainability.",
    eligibility: [
      "All farmers, including individual, group, and community-based irrigation projects.",
      "Priority to water-scarce and drought-prone regions."
    ],
    requirements: [
      "Project proposal submission through State Agriculture Department.",
      "Implementation under various components such as 'Per Drop More Crop'."
    ],
    documents: [
      "Aadhaar card",
      "Land ownership proof",
      "Project details (if applying under community scheme)"
    ],
    officialLink: "https://pmksy.gov.in/",
    videoUrl: "https://youtu.be/FA0CCH1qt74?si=P5r6UgGXMUF6tJCb",
    category: "Irrigation"
  },
  {
    id: 5,
    title: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",
    description:
      "PM-KUSUM promotes solar energy in agriculture by helping farmers install solar pumps and small solar power plants. Farmers can generate electricity for irrigation and sell surplus energy to the grid, ensuring additional income and clean energy adoption.",
    eligibility: [
      "Individual farmers, cooperatives, and panchayats.",
      "Available for grid-connected and off-grid irrigation pumps."
    ],
    requirements: [
      "Applicant must own or lease land suitable for solar installation.",
      "Power distribution company (DISCOM) agreement needed for grid-connected models."
    ],
    documents: [
      "Aadhaar card",
      "Land documents",
      "Electricity bill",
      "Bank account details"
    ],
    officialLink: "https://mnre.gov.in/solar/schemes/#kusum",
    videoUrl: "https://youtu.be/9JMTUiVcwS4?si=GvGqF19FQFNeJ4mg",
    category: "Energy"
  },
  {
    id: 6,
    title: "Soil Health Card Scheme",
    description:
      "This scheme provides farmers with detailed soil health cards containing nutrient status and fertilizer recommendations. It promotes scientific fertilizer use, enhances productivity, and reduces environmental degradation.",
    eligibility: [
      "All farmers practicing agriculture or horticulture.",
      "Soil samples collected from registered farms."
    ],
    requirements: [
      "Farm registration with the Agriculture Department.",
      "Soil sample submission through collection centers."
    ],
    documents: [
      "Aadhaar card",
      "Land ownership proof",
      "Soil sample submission receipt"
    ],
    officialLink: "https://soilhealth.dac.gov.in/",
    videoUrl: "https://youtu.be/SFKz_aEFfZw?si=_q-t-SpdX2LuLun2",
    category: "Sustainability"
  },
  {
    id: 7,
    title: "Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
    description:
      "A voluntary pension scheme providing ₹3,000 per month to small and marginal farmers after 60 years of age. Farmers aged 18–40 contribute monthly, and the government matches the contribution to secure their future.",
    eligibility: [
      "Small and marginal farmers aged 18–40 years.",
      "Landholding up to 2 hectares."
    ],
    requirements: [
      "Monthly contribution based on entry age.",
      "Enrollment through CSC centers."
    ],
    documents: [
      "Aadhaar card",
      "Land records",
      "Bank account details"
    ],
    officialLink: "https://pmkmy.gov.in/",
    videoUrl: "https://youtu.be/-ayVehRuU2k?si=qxRmLyNH3jECeJVj",
    category: "Social Security"
  },
  {
    id: 8,
    title: "Formation and Promotion of 10,000 Farmer Producer Organizations (FPOs)",
    description:
      "This initiative strengthens small farmers by organizing them into collective groups called FPOs. It provides them better access to markets, inputs, and technology, improving income through cooperative strength.",
    eligibility: [
      "Groups of small and marginal farmers (minimum 300 members in plains, 100 in hilly areas).",
      "Registration as legal entities under Co-operative Societies or Companies Act."
    ],
    requirements: [
      "Formation of farmer group or cooperative.",
      "Business plan submission."
    ],
    documents: [
      "FPO registration certificate",
      "List of member farmers",
      "Bank details of organization"
    ],
    officialLink: "https://sfacindia.com/",
    videoUrl: "https://www.youtube.com/embed/r6F9QzSnYkE",
    category: "Collective Farming"
  },
  {
    id: 9,
    title: "National Mission on Sustainable Agriculture (NMSA)",
    description:
      "NMSA promotes climate-resilient agricultural practices through efficient water management, soil health, and integrated farming systems. It aims to enhance productivity and sustainability while adapting to climate change.",
    eligibility: [
      "Farmers engaged in agriculture and allied activities.",
      "Priority to rainfed and drought-prone areas."
    ],
    requirements: [
      "Participation through State Agriculture Departments.",
      "Implementation under approved sustainable agriculture models."
    ],
    documents: [
      "Aadhaar card",
      "Land ownership proof",
      "Project proposal or participation form"
    ],
    officialLink: "https://nmsa.dac.gov.in/",
    videoUrl: "https://youtu.be/ekH9GrsS8t8?si=IgvZ_RCa0Vm9vK-L",
    category: "Sustainability"
  },
  {
    id: 10,
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description:
      "PKVY encourages organic farming through cluster-based approaches. It supports farmers with training, certification, and financial assistance to shift from chemical-based to sustainable organic agriculture.",
    eligibility: [
      "Groups of farmers interested in organic farming.",
      "Minimum 50 farmers per cluster (50 acres total area)."
    ],
    requirements: [
      "Adoption of organic standards under PGS-India.",
      "Participation in training and capacity building."
    ],
    documents: [
      "Aadhaar card",
      "Land documents",
      "Cluster registration proof"
    ],
    officialLink: "https://pgsindia-ncof.gov.in/",
    videoUrl: "https://youtu.be/6YAKr0rYVzE?si=dpTknxcK3QDy1bS6",
    category: "Organic Farming"
  }
];

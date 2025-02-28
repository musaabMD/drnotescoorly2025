// // 'use client'

// // export const subjects = [
// //   "All",
// //   "Malaria",
// //   "Brucellosis",
// //   "Prevention",
// //   "Tuberculosis",
// //   "Meningitis",
// //   "HIV",
// //   "Gastroenteritis"
// // ];

// // export const medicalData = [
// //   {
// //     pathogen: "Plasmodium falciparum",
// //     treatment: "Mefloquine",
// //     subject: "Malaria",
// //     mcq: {
// //       question: "A pregnant lady at 24 weeks gestation presents with uncomplicated falciparum malaria after returning from an African country. Which of the following is the most appropriate medication for her condition?",
// //       choices: [
// //         { id: 'A', text: 'Artesunate', isCorrect: false },
// //         { id: 'B', text: 'Artemthene', isCorrect: false },
// //         { id: 'C', text: 'Doxycycline', isCorrect: false },
// //         { id: 'D', text: 'Mefloquine', isCorrect: true }
// //       ],
// //       explanation: "Mefloquine is considered safe for use in the 2nd and 3rd trimesters for uncomplicated falciparum malaria.",
// //       keyPoints: [
// //         "Recommended antimalarial drug for pregnant women in 2nd/3rd trimester",
// //         "Effective against Plasmodium falciparum",
// //         "Favorable safety profile in pregnancy"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Brucella spp.",
// //     treatment: "Doxycycline + Rifampin",
// //     subject: "Brucellosis",
// //     mcq: {
// //       question: "A patient presents with fatigue and night sweats. Blood cultures reveal Gram-negative coccobacilli. What is the recommended treatment?",
// //       choices: [
// //         { id: 'A', text: 'Doxycycline + Rifampin', isCorrect: true },
// //         { id: 'B', text: 'Amoxicillin', isCorrect: false },
// //         { id: 'C', text: 'Ciprofloxacin', isCorrect: false },
// //         { id: 'D', text: 'Trimethoprim-sulfamethoxazole', isCorrect: false }
// //       ],
// //       explanation: "WHO guidelines recommend Doxycycline 100 mg PO twice daily plus Rifampin 600–900 mg/day for 6 weeks for brucellosis.",
// //       keyPoints: [
// //         "Combination therapy reduces relapse risk",
// //         "Treat for at least 6 weeks",
// //         "Effective against Brucella species"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Plasmodium prophylaxis",
// //     treatment: "Mefloquine",
// //     subject: "Prevention",
// //     mcq: {
// //       question: "A young male patient receives Mefloquine as malaria prophylaxis. This is an example of which level of prevention?",
// //       choices: [
// //         { id: 'A', text: 'Primary prevention', isCorrect: true },
// //         { id: 'B', text: 'Secondary prevention', isCorrect: false },
// //         { id: 'C', text: 'Tertiary prevention', isCorrect: false }
// //       ],
// //       explanation: "Malaria prophylaxis is a form of primary prevention as it is used to prevent the disease before exposure.",
// //       keyPoints: [
// //         "Primary prevention prevents disease occurrence",
// //         "Prophylactic medication is administered before exposure",
// //         "Reduces the risk of acquiring malaria"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Mycobacterium tuberculosis",
// //     treatment: "Chest X-ray then Isoniazid for 6–9 months",
// //     subject: "Tuberculosis",
// //     mcq: {
// //       question: "An Indian nurse has a PPD of 13 mm. What is the appropriate next step in management?",
// //       choices: [
// //         { id: 'A', text: 'Isoniazid for 9 months', isCorrect: false },
// //         { id: 'B', text: 'Isoniazid and Rifampicin', isCorrect: false },
// //         { id: 'C', text: 'Chest X-ray and Isoniazid for 9 months', isCorrect: true },
// //         { id: 'D', text: 'Culture and Isoniazid for 9 months', isCorrect: false }
// //       ],
// //       explanation: "A chest X-ray is necessary to rule out active TB. If the X-ray is clear, treatment with Isoniazid for 6–9 months is recommended for latent TB infection.",
// //       keyPoints: [
// //         "Screen for active TB with a chest X-ray",
// //         "Initiate prophylactic Isoniazid if no active disease is present",
// //         "PPD ≥10 mm is considered positive in high-risk individuals"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Plasmodium prophylaxis",
// //     treatment: "Doxycycline",
// //     subject: "Malaria",
// //     mcq: {
// //       question: "A patient with G6PD deficiency is traveling to Uganda in 7 days. Which malaria prophylactic drug is most appropriate?",
// //       choices: [
// //         { id: 'A', text: 'Primaquine', isCorrect: false },
// //         { id: 'B', text: 'Doxycycline', isCorrect: true },
// //         { id: 'C', text: 'Mefloquine', isCorrect: false },
// //         { id: 'D', text: 'Atovaquone-proguanil', isCorrect: false }
// //       ],
// //       explanation: "Due to the contraindication of primaquine in G6PD deficiency, doxycycline is recommended for malaria prophylaxis.",
// //       keyPoints: [
// //         "G6PD deficiency contraindicates primaquine use",
// //         "Doxycycline is effective and safe in this population",
// //         "Initiate prophylaxis prior to travel"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Neisseria meningitidis",
// //     treatment: "Ceftriaxone",
// //     subject: "Meningitis",
// //     mcq: {
// //       question: "A pregnant woman who is a close contact of a case of Neisseria meningitidis requires prophylaxis. Which antibiotic is most appropriate?",
// //       choices: [
// //         { id: 'A', text: 'Rifampin', isCorrect: false },
// //         { id: 'B', text: 'Ciprofloxacin', isCorrect: false },
// //         { id: 'C', text: 'Ceftriaxone', isCorrect: true },
// //         { id: 'D', text: 'Azithromycin', isCorrect: false }
// //       ],
// //       explanation: "Ceftriaxone is the first-line chemoprophylaxis for meningococcal disease in pregnant and nursing women.",
// //       keyPoints: [
// //         "Safe for use in pregnancy",
// //         "Effective against Neisseria meningitidis",
// //         "Used for close contacts of meningococcal cases"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Pneumocystis jirovecii",
// //     treatment: "Trimethoprim-sulfamethoxazole",
// //     subject: "HIV",
// //     mcq: {
// //       question: "An HIV-positive patient with a low CD4 count requires prophylaxis to prevent opportunistic infections. Which medication is indicated?",
// //       choices: [
// //         { id: 'A', text: 'Trimethoprim-sulfamethoxazole', isCorrect: true },
// //         { id: 'B', text: 'Azithromycin', isCorrect: false },
// //         { id: 'C', text: 'Fluconazole', isCorrect: false },
// //         { id: 'D', text: 'Acyclovir', isCorrect: false }
// //       ],
// //       explanation: "Trimethoprim-sulfamethoxazole is used for prophylaxis against Pneumocystis jirovecii pneumonia in HIV patients with low CD4 counts.",
// //       keyPoints: [
// //         "Used when CD4 count is below the threshold (usually 200 cells/mm³)",
// //         "Prevents Pneumocystis pneumonia",
// //         "Reduces morbidity in HIV patients"
// //       ]
// //     }
// //   },
// //   {
// //     pathogen: "Giardia lamblia",
// //     treatment: "Metronidazole (typical therapy)",
// //     subject: "Gastroenteritis",
// //     mcq: {
// //       question: "A patient presents with diarrhea and foul, greasy (steatorrhea) stools after hiking in Thailand and drinking water from fresh waterfalls. There is no vomiting. Which organism is most likely responsible?",
// //       choices: [
// //         { id: 'A', text: 'Giardia lamblia', isCorrect: true },
// //         { id: 'B', text: 'Cryptosporidium', isCorrect: false }
// //       ],
// //       explanation: "Giardia lamblia is commonly associated with waterborne outbreaks and produces foul, greasy stools due to malabsorption.",
// //       keyPoints: [
// //         "Commonly acquired from contaminated water sources",
// //         "Results in steatorrhea and malabsorption",
// //         "Treatment is typically with metronidazole"
// //       ]
// //     }
// //   }
// // ];
// export const subjects = [
//   "All",
//   "Malaria",
//   "Brucellosis",
//   "Prevention",
//   "Tuberculosis",
//   "Meningitis",
//   "HIV",
//   "Gastroenteritis"
// ];

// export const medicalData = [
//   {
//     pathogen: "Plasmodium falciparum Plasmodium falciparumPlasmodium falciparumPlasmodium falciparumPlasmodium falciparum",
//     treatment: "MefloquinePlasmodium falciparumPlasmodium falciparumPlasmodium falciparumPlasmodium falciparum",
//     subject: "Malaria",
//     mcq: {
//       question:
//         "A pregnant lady at 24 weeks gestation presents with uncomplicated falciparum malaria after returning from an African country. Which of the following is the most appropriate medication for her condition?",
//       choices: [
//         { id: 'A', text: 'Artesunate', isCorrect: false },
//         { id: 'B', text: 'Artemthene', isCorrect: false },
//         { id: 'C', text: 'Doxycycline', isCorrect: false },
//         { id: 'D', text: 'Mefloquine', isCorrect: true }
//       ],
//       explanation:
//         "Mefloquine is considered safe for use in the 2nd and 3rd trimesters for uncomplicated falciparum malaria.",
//       keyPoints: [
//         "Recommended antimalarial drug for pregnant women in 2nd/3rd trimester",
//         "Effective against Plasmodium falciparum",
//         "Favorable safety profile in pregnancy"
//       ]
//     }
//   },
//   {
//     pathogen: "Brucella spp.",
//     treatment: "Doxycycline + Rifampin",
//     subject: "Brucellosis",
//     mcq: {
//       question:
//         "A patient presents with fatigue and night sweats. Blood cultures reveal Gram-negative coccobacilli. What is the recommended treatment?",
//       choices: [
//         { id: 'A', text: 'Doxycycline + Rifampin', isCorrect: true },
//         { id: 'B', text: 'Amoxicillin', isCorrect: false },
//         { id: 'C', text: 'Ciprofloxacin', isCorrect: false },
//         { id: 'D', text: 'Trimethoprim-sulfamethoxazole', isCorrect: false }
//       ],
//       explanation:
//         "WHO guidelines recommend Doxycycline 100 mg PO twice daily plus Rifampin 600–900 mg/day for 6 weeks for brucellosis.",
//       keyPoints: [
//         "Combination therapy reduces relapse risk",
//         "Treat for at least 6 weeks",
//         "Effective against Brucella species"
//       ]
//     }
//   },
//   {
//     pathogen: "Mycobacterium tuberculosis",
//     treatment: "Chest X-ray then Isoniazid for 6–9 months",
//     subject: "Tuberculosis",
//     mcq: {
//       question:
//         "An Indian nurse has a PPD of 13 mm. What is the appropriate next step in management?",
//       choices: [
//         { id: 'A', text: 'Isoniazid for 9 months', isCorrect: false },
//         { id: 'B', text: 'Isoniazid and Rifampicin', isCorrect: false },
//         { id: 'C', text: 'Chest X-ray and Isoniazid for 9 months', isCorrect: true },
//         { id: 'D', text: 'Culture and Isoniazid for 9 months', isCorrect: false }
//       ],
//       explanation:
//         "A chest X-ray is necessary to rule out active TB. If the X-ray is clear, treatment with Isoniazid for 6–9 months is recommended for latent TB infection.",
//       keyPoints: [
//         "Screen for active TB with a chest X-ray",
//         "Initiate prophylactic Isoniazid if no active disease is present",
//         "PPD ≥10 mm is considered positive in high-risk individuals"
//       ]
//     }
//   },
//   {
//     pathogen: "Neisseria meningitidis",
//     treatment: "Ceftriaxone",
//     subject: "Meningitis",
//     mcq: {
//       question:
//         "A pregnant woman who is a close contact of a case of Neisseria meningitidis requires prophylaxis. Which antibiotic is most appropriate?",
//       choices: [
//         { id: 'A', text: 'Rifampin', isCorrect: false },
//         { id: 'B', text: 'Ciprofloxacin', isCorrect: false },
//         { id: 'C', text: 'Ceftriaxone', isCorrect: true },
//         { id: 'D', text: 'Azithromycin', isCorrect: false }
//       ],
//       explanation:
//         "Ceftriaxone is the first-line chemoprophylaxis for meningococcal disease in pregnant and nursing women.",
//       keyPoints: [
//         "Safe for use in pregnancy",
//         "Effective against Neisseria meningitidis",
//         "Used for close contacts of meningococcal cases"
//       ]
//     }
//   },
//   {
//     pathogen: "Giardia lamblia",
//     treatment: "Metronidazole (typical therapy)",
//     subject: "Gastroenteritis",
//     mcq: {
//       question:
//         "A patient presents with diarrhea and foul, greasy (steatorrhea) stools after hiking in Thailand and drinking water from fresh waterfalls. There is no vomiting. Which organism is most likely responsible?",
//       choices: [
//         { id: 'A', text: 'Giardia lamblia', isCorrect: true },
//         { id: 'B', text: 'Cryptosporidium', isCorrect: false }
//       ],
//       explanation:
//         "Giardia lamblia is commonly associated with waterborne outbreaks and produces foul, greasy stools due to malabsorption.",
//       keyPoints: [
//         "Commonly acquired from contaminated water sources",
//         "Results in steatorrhea and malabsorption",
//         "Treatment is typically with metronidazole"
//       ]
//     }
//   }
// ];

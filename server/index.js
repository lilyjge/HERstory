const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const qList = [
    {
      "question": "Who was the African American mathematician and 'human computer' whose calculations were crucial for NASA's early space missions but remained largely unrecognized until the 2016 film *Hidden Figures*?",
      "options": ["Dorothy Vaughan", "Katherine Johnson", "Mary Jackson", "Mae Jemison"],
      "answer": "Katherine Johnson"
    },
    {
      "question": "Rosalind Franklin made a crucial discovery that led to the understanding of DNA’s structure. What was her primary contribution?",
      "options": ["She proposed the double helix model", "She identified the components of DNA", "She took X-ray diffraction images of DNA", "She discovered RNA’s function"],
      "answer": "She took X-ray diffraction images of DNA"
    },
    {
      "question": "Who was the pioneering software engineer who created the first compiler for a computer programming language, a critical advancement in computer science?",
      "options": ["Ada Lovelace", "Grace Hopper", "Jean Sammet", "Margaret Hamilton"],
      "answer": "Grace Hopper"
    },
    {
      "question": "Lise Meitner was instrumental in the discovery of nuclear fission but did not share the Nobel Prize. Who was her collaborator who did receive the prize?",
      "options": ["Max Planck", "Albert Einstein", "Otto Hahn", "Enrico Fermi"],
      "answer": "Otto Hahn"
    },
    {
      "question": "Who was the environmental activist and marine biologist whose 1962 book *Silent Spring* raised public awareness about the dangers of pesticides, but was discredited by many during her lifetime?",
      "options": ["Jane Goodall", "Rachel Carson", "Sylvia Earle", "Dian Fossey"],
      "answer": "Rachel Carson"
    },
    {
      "question": "Hedy Lamarr, a famous actress, also co-invented a frequency-hopping communication system. This invention laid the groundwork for which modern technology?",
      "options": ["Wi-Fi", "Bluetooth", "GPS", "Fiber Optics"],
      "answer": "Wi-Fi"
    },
    {
      "question": "Who was the civil rights activist and journalist who co-founded the National Association for the Advancement of Colored People (NAACP) and worked to end lynching in the U.S.?",
      "options": ["Sojourner Truth", "Ida B. Wells", "Ella Baker", "Harriet Tubman"],
      "answer": "Ida B. Wells"
    },
    {
      "question": "Who was the first woman to receive a medical degree in the United States, and later opened a medical college for women?",
      "options": ["Elizabeth Blackwell", "Clara Barton", "Florence Nightingale", "Margaret Sanger"],
      "answer": "Elizabeth Blackwell"
    },
    {
      "question": "Chien-Shiung Wu, an experimental physicist, helped disprove the conservation of parity in nuclear physics. Despite her contributions, she did not share in the Nobel Prize awarded for this discovery. Which experiment is she known for?",
      "options": ["Manhattan Project", "Wu Experiment", "Rutherford Model", "Bohr’s Atomic Model"],
      "answer": "Wu Experiment"
    },
    {
      "question": "Who was the African American woman whose refusal to give up her seat on a segregated bus in Montgomery, Alabama, sparked the Civil Rights Movement, though often overshadowed by Rosa Parks?",
      "options": ["Claudette Colvin", "Coretta Scott King", "Fannie Lou Hamer", "Ella Baker"],
      "answer": "Claudette Colvin"
    }
]  

app.get("/questions", (req, res) => {
    res.send(qList);
})

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(8000, () => {
    console.log("listening");
});
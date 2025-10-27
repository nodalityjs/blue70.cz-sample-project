import { Des } from "nodality";           

const elements = [
 /* {type: "nav"},

  { type: "h1",
   text: "SLS3"
   },

  {
    type: "p", 
    text: "Americké podkolenky a lýtkové návleky SLS3 už více než 20 let pokračují v dominanci na triatlonových a běžeckých kolbištích na nohou úspěšných běžců, biatlonistů a hokejistů... Prověřeny vítězstvími v tropech, na poušti i na mrazivých pólech. Vyzkoušejte je i Vy...!"
  },

{
  type: "img", 
  url: "https://sls3.weebly.com/uploads/4/0/5/5/40554337/background-images/1178423398.jpg"
},

  {
    type: "a", 
    text: "Prohlédnout podkolenky", 
    url: "#sls", 
    background: "orange",
    block: true,
    width: "200px",
    align: "center"
  },

    {
    type: "a", 
    text: "Neopreny Blue70", 
    url: "#blue70", 
    background: "orange",
    block: true,
    width: "200px",
    align: "center"
  },

    {
    type: "a", 
    text: "petrvabrousek.cz", 
    url: "#sls", 
    background: "orange",
    block: true,
    width: "200px",
    align: "center"
  },

  {
    type: "wrap"
  },

  {
    type: "cards",
    children: ["image", "text", "link"]
  },
*/
  {
   type: "img",
        width: "300px",
        url: "https://picsum.photos/200"
  },

     {
    type: "a", 
    text: "petrvabrousek.cz", 
    url: "#sls", 
    background: "orange",
    block: true,
    width: "200px",
    align: "center"
  },

  {
    type: "ulist"
  },

  {
    type: "h1",
    text: "iPhone 20 Pro"
  }
];

const nodes = [
/* {op: "gradient"},
  {op: "blast"},
  {op: "shadow"}*/
];

new Des()
  .nodes(nodes)
  .add(elements)
  .set({
    mount: "#mount",
    code: true,
  });

  // npm run dev
  // npm i nodality@latest && npm run build
  

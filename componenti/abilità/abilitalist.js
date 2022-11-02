const ABLIST =[
  {
    id:'000011',
    nome:'Conoscenze Tribù',
    descrizione:'accesso alle conoscenze della propria tribu',
    costo:1,
    tipo:'fisico',
      prerequisiti:'nessuno',
      requisiti: 'nessuno',
      checked:false,


},
  {
    id:'00001a',
    nome:'Armature Leggere',
    descrizione:'Puoi indossare le Armature appartenenti alla categoria Leggere',
    costo:1,
    tipo:'fisico',
      prerequisiti:'nessuno',
      requisiti: 'Armature Medie',
      checked:false,


},
{
    id:'00001b',
    nome:'Armature Medie',
    descrizione:'Puoi indossare le Armature appartenenti alla categoria Medie',
    costo:1,
    tipo:'fisico',
      prerequisiti:'Armature Leggere',
      requisiti: 'Armature Pesanti',
      checked:false,


},
{
  id:'00001c',
  nome:'Armature Pesanti',
  descrizione:'Puoi indossare le Armature appartenenti alla categoria Pesanti',
  costo:1,
  tipo:'fisico',
    prerequisiti:'Armature Medie',
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001d',
  nome:'Archi e Balestre',
  descrizione:'Sai utilizzare gli Archi e le Balestre in Battaglia',
  costo:1,
  tipo:'fisico',
    prerequisiti:'nessuno',
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001e',
  nome:'Ambidestria',
  descrizione:'Consideri entrambe le Mani Come Principali',
  costo:1,
  tipo:'fisico',
    prerequisiti:'nessuno',
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001f',
  nome:'Scudo',
  descrizione:'Sai utilizzare uno Scudo in battaglia',
  costo:1,
  tipo:'fisico',
    prerequisiti:'nessuno',
    requisiti: 'Scudo Torre',
    checked:false,


},
{
  id:'00001g',
  nome:'Scudo Torre',
  descrizione:'Sai impugnare e utilizzare uno Scudo Torre in battaglia',
  costo:1,
  tipo:'fisico',
    prerequisiti:'Scudo',
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001i',
  nome:'Duro a Morire',
  descrizione:'Consideri raddoppiati i tempi di Coma',
  costo:1,
  tipo:'fisico',
    prerequisiti:'Costituzione Taurina',
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001h',
  nome:'Costituzione Taurina',
  descrizione:'Consideri i tuoi Pf aumentati di 1 in ogni locazione',
  costo:1,
  tipo:'fisico',
    prerequisiti:'nessuno',
    requisiti: 'Duro a Morire',
    checked:false,


},
{
  id:'00001l',
  nome:'Forzuto',
  descrizione:'il Pg è considerato essere dotato di una forza superiore al normale, considera i suoi P.P. aumentati di 10, puo trasportare piu di una persona alla volta o una correndo',
  costo:1,
  tipo:'fisico',
    prerequisiti:'nessuno',
    requisiti: 'Più Forte',
    checked:false,


},
{
  id:'00001m',
  nome:'Più Forte',
  descrizione:"Puoi Eseguire La chiamata Crash con L'arma impugnata nella mano principale, la suddetta arma subisce lo stesso danno ",
  costo:1,
  tipo:'fisico',
    prerequisiti:'Forzuto',
    requisiti: 'nessuno',
    checked:false,


},

{
  id:'00001n',
  nome:"Marchio dell'Erinni",
  descrizione:"Sei in grado di percepire il paradosso, in tutte le sue manifestazioni",
  costo:1,
  tipo:'mentali',
    prerequisiti:'nessuno',
    requisiti: "ELetto dall'Erinni",
    checked:false,


},
{
  id:'00001o',
  nome:"ELetto dall'Erinni",
  descrizione:"sei in grado di apprendere ed lanciare i poteri concessi da un Erinni",
  costo:1,
  tipo:'mentali',
    prerequisiti:"Marchio dell'Erinni",
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001p',
  nome:'Conoscenza',
  descrizione:"Hai le conoscenze relative a questa materia",
  costo:1,
  tipo:'mentali',
    prerequisiti:'nessuno',
    requisiti: 'Crafting',
    checked:false,
},
{
  id:'00001q',
  nome:'Crafting',
  descrizione:"Puoi Eseguire La chiamata Crash con L'arma impugnata nella mano principale, la suddetta arma subisce lo stesso danno ",
  costo:1,
  tipo:'mentali',
    prerequisiti:'Conoscenza',
    requisiti: 'nessuno',
    checked:false,
},
{
  id:'00001r',
  nome:'Più Forte',
  descrizione:"Puoi Eseguire La chiamata Crash con L'arma impugnata nella mano principale, la suddetta arma subisce lo stesso danno ",
  costo:1,
  tipo:'fisico',
    prerequisiti:'Forzuto',
    requisiti: 'nessuno',
    checked:false,


},
{
  id:'00001s',
  nome:'Più Forte',
  descrizione:"Puoi Eseguire La chiamata Crash con L'arma impugnata nella mano principale, la suddetta arma subisce lo stesso danno ",
  costo:1,
  tipo:'fisico',
    prerequisiti:'Forzuto',
    requisiti: 'nessuno',
    checked:false,


},

]

export {ABLIST};
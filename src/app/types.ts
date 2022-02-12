export interface Poll{
  id: number,   //12
  question: string;   //Which days of week you like most?
  results: number[],    //[0,0,0,0,5,7,2]
  options: string[],    //["Mon","Tue",...]
  thumbnail: string;    //https://image.png
}

export interface Voter{
  id: string;   //0x2JBFJWB23R2FN
  voted: number[];    //[12]
}

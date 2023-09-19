/// <reference types="react-scripts" />

export interface responseApi {
  drinks: drink[];
}
export interface drink {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strInstructionsIT: string;
  strInstructions?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
}

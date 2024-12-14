export interface IDish {
    id: string;
    name: string;
    price: {
        USD: number;
        EUR: number;
        RUB: number
    };
    ingredients: string[]
}
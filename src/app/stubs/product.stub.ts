import { Product } from "../domain/product";


export const PRODUCTS: Product[] = [
    {id: "1", name: "Оборудование", details: [
        {article: "ар98", name: "оборудование флип-чарт", price: 900},
        {article: "ар99", name: "оборудование информационная доска", price: 1800, description: "Приобретено недавно"},
    ]},
    {id: "2", name: "Аренда", details: [
        {article: "ар115", name: "Аренда ГТК", price: 115},
        {article: "ар215", name: "Аренда Пушкарки", price: 215}
    ]},
    {id: "3", name: "Питание"},
    {id: "4", name: "Пакет"},
    {id: "5", name: "Доп. услуги"}
];
import { Component, Vue } from "vue-property-decorator";

import { IDish } from "@/mixins/dishes/index";

@Component
export default class DishesMixin extends Vue {
    dishes: IDish[] = [
        {
            "id": "d75f762a-eadd-49be-8918-ed0daa8dd024",
            "name": "Chicken tikka masala",
            "price": {
                "USD" : 12,
                "EUR": 14,
                "RUB": 120,
            },
            "ingredients": [
                "chicken",
                "rice"
            ]
        },
        {
            "id": "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
            "name": "Naan",
            "price": {
                "USD" : 3,
                "EUR": 5,
                "RUB": 35,
            },
            "ingredients": [
                "bread"
            ]
        },
        {
            "id": "bd129641-c0eb-432b-84b6-8b81d2930358",
            "name": "Samosa",
            "price": {
                "USD" : 8,
                "EUR": 10,
                "RUB": 80,
            },
            "ingredients": [
                "chicken",
                "bread"
            ]
        },
        {
            "id": "25402233-0095-49ea-9939-1e67ed89ffb9",
            "name": "Margarita",
            "price": {
                "USD" : 9,
                "EUR": 11,
                "RUB": 90,
            },
            "ingredients": [
                "bread",
                "cheese",
                "tomatoes"
            ]
        },
        {
            "id": "90902233-0095-49ea-9939-1e67ed89ffb9",
            "name": "Chef pizza",
            "price": {
                "USD" : 10,
                "EUR": 13,
                "RUB": 100,
            },
            "ingredients": [
                "bread",
                "cheese",
                "tomatoes",
                "chicken"
            ]
        },
        {
            "id": "08c9ffa0-d003-4310-9e15-20978743296e",
            "name": "Cinnamon buns",
            "price": {
                "USD" : 5,
                "EUR": 7,
                "RUB": 55,
            },
            "ingredients": [
                "bread"
            ]
        },
        {
            "id": "64a4967c-2080-4a99-9074-4655a4569a95",
            "name": "Semlor",
            "price": {
                "USD" : 2,
                "EUR": 4,
                "RUB": 22,
            },
            "ingredients": [
                "bread",
                "cream"
            ]
        },
        {
            "id": "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
            "name": "Saffron bun",
            "price": {
                "USD" : 4,
                "EUR": 6,
                "RUB": 40,
            },
            "ingredients": [
                "bread"
            ]
        },
        {
            "id": "6c02c2ce-b868-4191-b4a7-8686429f4bac",
            "name": "Flat Iron Steak",
            "price": {
                "USD" : 10,
                "EUR": 12,
                "RUB": 100,
            },
            "ingredients": [
                "beef"
            ]
        },
        {
            "id": "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
            "name": "Flat Iron Burger",
            "price": {
                "USD" : 10,
                "EUR": 12,
                "RUB": 100,
            },
            "ingredients": [
                "bread",
                "beef"
            ]
        }                          
    ]    
}



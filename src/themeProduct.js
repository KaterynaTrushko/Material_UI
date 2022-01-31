import React from "react";
import { createContext } from "react";

export const themeProduct = [
    {
        id:499423,
        name:"Фотоапарат Canon EOS RP body black",
        price:35199,
        photo: '499423.jpg',},
    {
        id:53638-3379,
        name:"Nikon D6 Body",
        price: 230000,
        photo: '208873628809873.jpg',},
    {
        id: 2466330094,
        name:"Фотоапарат Nikon Z 7 + 24-70mm f4 + FTZ Adapter +64Gb XQD Kit",
        price:127571,
        photo: '233462949919425.jpg',},
    {
        id:53903-3379,
        name:"Фотоапарат Canon EOS RP body black",
        price:116695,
        photo: '499423.jpg',},
    {
        id: 168890610365,
        name:"Фотоапарат Canon EOS 5D Mark IV 24-105mm f/4L II IS USM",
        price:35199,
        photo: 'eos-5d-mark-4-ef-24-70-usm-kit_1_xl_1.jpg',},
    {
        id:170314540365,
        name:"Фотоапарат Nikon Z 7 + 24-70mm f4 Kit",
        price:112750,
        photo: '205738848678871.jpg',},
    {
        id:920897 ,
        name:"Фотоапарат Nikon Z 7 + 24-70mm f4 Kit (VOA010K001)",
        price:107599 ,
        photo: '96_4000_2.jpg',},
    {
        id: 70245990365,
        name: "Фотоапарат SONY Alpha a7R III body (ILCE7RM3B.CEC)",
        price: 93952,
        photo: '1_2785_80.jpg',
    },
    {
        id: 20895,
        name: "Фотоапарат Nikon Z 6 II + 24-70mm f4 Kit (VOA060K001)",
        price: 93299,
        photo: "73_4000_2.jpg",
    },
    {
        id: 53540379,
        name: "Фотоапарат Canon EOS R6 24-105mm f/4-7.1 is STM",
        price: 89500,
        photo: "85_1500_3_1_1_1.jpg",
    },
    {
        id: 20007460,
        name: "Фотоапарат Nikon D850 Body",
        price: 77203,
        photo: "1045498_zoom_result.jpg",
    },
    {
        id: 1,
        name: "Фотоапарат Sigma FP L Body",
        price: 70914,
        photo: "221556139370008.jpg",
    },
    {
        id: 2,
        name: "Фотоапарат Nikon Z 7 + FTZ Adapter Kit (VOA010K002)",
        price: 89999,
        photo: "1534993360_img_1052048_1_1_1_1.jpg",
    },
    {
        id: 3,
        name: "Фотоапарат Nikon Z5 + FTZ Adapter Kit (VOA040K002)",
        price: 54600,
        photo: "205738848678871.jpg",
    },
    {
        id: 4,
        name: "Фотоапарат Canon EOS R6 24-105mm f/4-7.1 is STM",
        price: 89000,
        photo: "85_1500_3_1_51_1.jpg",
    },
    {
        id: 5,
        name: "Фотоапарат CANON EOS 6D Mark II 24-105mm F/3.5-5.6 IS STM (1897C030)",
        price: 53000,
        photo: "73_4000_3.jpg",
    },
    {
        id: 6,
        name: "Фотоапарат Fujifilm X-T3 Kit 16-80mm Black",
        price: 49400,
        photo: "fujifilm-x-t3-kit-16-80mm-black-75544982695342.jpg",
    },
    {
        id: 7,
        name: "Фотоапарат Fujifilm X-T3 Kit 18-55mm Silver",
        price: 46500,
        photo: "203967888610896.jpg",
    },
]

export const ThemeContextProduct = React.createContext(themeProduct);
const Obj_Of_An_Arr_Of_Objs = {
    Drinks:[
        {name:'Ballantines', disc:'A range of blended Scotch whiskies produced by Pernod Ricard in Dumbarton', prc:'35000'},
        {name:'Coffee Service', disc:'Includes coffee buffet station with all the accompliments (sugar, cream, syrup)', prc:'18750'},
        {name:'Soft Drinks', disc:'Includes drinks such as Coke, Spirit, 7-Up, Teem, Pepsi, Malt', prc:'30000'},
        {name:'Juice', disc:'Includes Orange juice, apple juice, pineapple juice, cranberry juice', prc:'35000'},
        {name:'Wines', disc:'Includes red wine, white wine, rose wine, sparkling wine', prc:'75000'}
    ],
    Food:[
        {name:'Caesar Salad', disc:'Sun dried tomatoes, parmesan, rustic garlic croutons with a traditional caesar dressing', prc:'30000'},
        {name:'Swedish Meatballs', disc:'Includes button mushrooms, white creamy sauce, natural herbs and fine spices', prc:'71250'},
        {name:'Iced Oysters', disc:'Fresh iced half shell oysters with lemon and pesto, for summer freshness taste', prc:'63750'},
        {name:'Spanikopita', disc:'Filo triangles stuffed with crumbled feta & baby spinach baked to a golden brown', prc:'26250'},
        {name:'Salmon Canape', disc:'Smoked salmon tartines with red onion-caper relish or tender herb mousse', prc:'18750'},
        {name:'Thai Scallops', disc:'Giant pan seared scallops on skewer. Topped with red curry & basil mango relish', prc:'35000'}
    ]
}

const Arr_Of_Objs = [
    {name:'Ballantines', disc:'A range of blended Scotch whiskies produced by Pernod Ricard in Dumbarton', prc:'35000'},
    {name:'Coffee Service', disc:'Includes coffee buffet station with all the accompliments (sugar, cream, syrup)', prc:'18750'},
    {name:'Soft Drinks', disc:'Includes drinks such as Coke, Spirit, 7-Up, Teem, Pepsi, Malt', prc:'30000'},
    {name:'Juice', disc:'Includes Orange juice, apple juice, pineapple juice, cranberry juice', prc:'35000'},
    {name:'Wines', disc:'Includes red wine, white wine, rose wine, sparkling wine', prc:'75000'},
    {name:'Caesar Salad', disc:'Sun dried tomatoes, parmesan, rustic garlic croutons with a traditional caesar dressing', prc:'30000'},
    {name:'Swedish Meatballs', disc:'Includes button mushrooms, white creamy sauce, natural herbs and fine spices', prc:'71250'},
    {name:'Iced Oysters', disc:'Fresh iced half shell oysters with lemon and pesto, for summer freshness taste', prc:'63750'},
    {name:'Spanikopita', disc:'Filo triangles stuffed with crumbled feta & baby spinach baked to a golden brown', prc:'26250'},
    {name:'Salmon Canape', disc:'Smoked salmon tartines with red onion-caper relish or tender herb mousse', prc:'18750'},
    {name:'Thai Scallops', disc:'Giant pan seared scallops on skewer. Topped with red curry & basil mango relish', prc:'35000'}
]

const SEO_API = (DataBase, SearchData) => {
    const SearchResult = []

    if(!DataBase.length){// For Object of an Array of an Object
        for(MainKey in DataBase){
            for (let i = 0; i < DataBase[MainKey].length; i++) {
                for( SubKey in DataBase[MainKey][i]){// Checking for the sub keys in the object
                    if(DataBase[MainKey][i][SubKey].toLocaleLowerCase().includes(SearchData.toLocaleLowerCase()) && SearchData !== ''){
                        let index = SearchResult.findIndex(obj => obj.name === DataBase[MainKey][i].name) // To check if the object is already existing in the searchresult
                        const PushObj = index === -1 ? SearchResult.push(DataBase[MainKey][i]) : '' //If Obj dosen't exist Push it to the Result
                    }
                }
            }

        }
    }else{ //For Array of an Object

        DataBase.forEach(EachElement => {
            for(SubKey in EachElement){
                
                if(EachElement[SubKey].toLocaleLowerCase().includes(SearchData.toLocaleLowerCase()) && SearchData !== ''){
                    let index = SearchResult.findIndex(obj => obj.name === EachElement.name) // To check if the object is already existing in the searchresult
                    const PushObj = index === -1 ? SearchResult.push(EachElement) : '' //If Obj dosen't exist Push it to the Result
                }
            }
        }) 

    }

    return SearchResult
}
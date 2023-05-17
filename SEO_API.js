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

const TestModule = SEO_API(Obj_Of_An_Arr_Of_Objs, '3000')
console.log(TestModule)
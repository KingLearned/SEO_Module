# SEO_API

The `SEO_API` function is designed to perform a search operation on a provided data structure (`DataBase`) based on a search query (`SearchData`). It returns an array of matching search results.

## Usage

```javascript
const SearchResult = SEO_API(DataBase, SearchData);
```

## Parameters
DataBase (required): The data structure to be searched. It can be an object of an array of objects OR an array of objects.
SearchData (required): The search query to match against the data structure.

## Object key identification
```javascript
let index = SearchResult.findIndex(obj => obj.name === DataBase[MainKey][i].name) //Always use the key name in your own databse to compare the 
```
## Return Value
The function returns an array (SearchResult) containing the objects that match the search query.

## Example1
Searching an Object of an Array of Objects:
```javascript
    const DataBase = {
        key1: [
            { name: 'Object 1', description: 'Lorem ipsum' },
            { name: 'Object 2', description: 'Dolor sit amet' }
        ],
        key2: [
            { name: 'Object 3', description: 'Consectetur adipiscing elit' }
        ]
    };

const SearchData = 'lorem';

const SearchResult = SEO_API(DataBase, SearchData);
console.log(SearchResult);
// Output: [{ name: 'Object 1', description: 'Lorem ipsum' }]
```

## Example2
Searching an Array of Objects:
```javascript
    const DataBase = [
        { name: 'Object 1', description: 'Lorem ipsum' },
        { name: 'Object 2', description: 'Dolor sit amet' },
        { name: 'Object 3', description: 'Consectetur adipiscing elit' }
    ];

const SearchData = 'sit';

const SearchResult = SEO_API(DataBase, SearchData);
console.log(SearchResult);
// Output: [{ name: 'Object 2', description: 'Dolor sit amet' }]

```

// // Image :

// let btn = document.querySelector("button");
// btn.addEventListener("click", async() => {
//     let link = await getImg();
//     let img = document.querySelector(".result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// let url = "https://dog.ceo/api/breeds/image/random";
// async function getImg() {
//     try {
//         let responce = await axios.get(url);
//         return(responce.data.message);
//     } catch (e) {
//         console.log("error");
//         return "no img found";
//     }
// }

// // College name using api:

let url2 = "http://universities.hipolabs.com/search?name=";

let btn2 = document.querySelector(".search");
btn2.addEventListener("click", async() => {      //As soon as button has clicked it extracts country 
    const inp6 = document.querySelector("input");
    let country = inp6.value;
    console.log(country);

    inp6.value = ""; //clears input after reading.

    let collArr = await getColleges(country); //then it make call to await getColleges(country)
    show(collArr);
});

function show(collArr) {
    let ul = document.querySelector("#list");

    for(col of collArr) {
        // console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}

async function getColleges(country) {   //then getColleges(country) make call to our API
    try {
        let responce2 = await axios.get(url2 + country);
        return (responce2.data);  //whatever the array will be return here
    } catch (e) {
        console.log("error");
        return [];
    }
}

// //Dictonery api:

// let url3 = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// let btn4 = document.querySelector(".heart");

// // Handler:
// btn4.addEventListener("click", async() => {
//     const input = document.querySelector(".dictInput");
//     let word = input.value.trim();
    
//     if(!word) return;

//     input.value = "";

//     let meanings = await dict(word);
//     showMeanDef(meanings);
// });

// function showMeanDef(meanings) {
//     let ul = document.querySelector(".wordList");
//     // ul.innerText = "";
//     for(const meaning of meanings) {
    
//         // heading for part of speech:
//         const heading = document.createElement("h4");
//         heading.innerText = meaning.partOfSpeech
//         ul.appendChild(heading);
        
//         for(const def of meaning.definitions) {
//             // loop definition:
//             const li = document.createElement("li");
//             li.innerText = def.definition;
//             ul.appendChild(li);
//         }  
//     }
// }   

// async function dict(word) {
//     try {
//         let wordDic = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//         return wordDic.data[0].meanings;
//     } catch (e) {
//         console.log(e);
//         return [];
//     }
// }

// Reddit API :
// function getSubredditName() {  //user input
//     const input = document.querySelector(".subreddit");
//     const value = input.value.trim();

//     if (value === "") {
//         return null;
//     }
//     return value;
// }

// async function fetchPosts(subreddit, filter) {
//     try {
//         const url4 = `https://www.reddit.com/r/${subreddit}/${filter}.json`;  //build url
//         const response = await axios.get(url4);  //fetch/axios -> rsponse.json()
//         return response.data.data.children;  //extract data
//     } catch (error) {
//         console.log(error);
//         return[];
//     }
    
// }
// let selectOpt = document.querySelector("#filter"); //update DOM

// selectOpt.addEventListener("change", async () => {
//     const subreddit = getSubredditName();
//     const filter = selectOpt.value;
    
//     if (!subreddit) return;

//     const posts = await fetchPosts(subreddit, filter);
    
//     showPosts(posts);

//     if(!posts || posts.length === 0) {
//         console.log("no posts found");
//         return;
//     }
// });

// function showPosts(posts){
//     const div = document.querySelector(".post");
//     div.innerHTML = "";

//     const postData = posts[0].data;
    
//     const postEl = document.createElement("div");
//     postEl.innerHTML = `
//         <h3>${postData.title}</h3>
//         <p>Author: ${postData.author}</p>
//         <p>Subreddit: ${postData.subreddit}</p>
//     `;
    
//     div.appendChild(postEl);

// }

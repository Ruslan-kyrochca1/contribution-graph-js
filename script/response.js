

export default async function getResponse(){
    const url = 'https://dpg.gg/test/calendar.json'
    const response = await fetch(url);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


// export default function getResponse(){
//     const url = 'https://dpg.gg/test/calendar.json'
//     return fetch(url)
//             .then((response) => {
//                 return response.json().then((data) => {
//                     console.log(data);
//                     return data;
//                 }).catch((error) => {
//                     console.log(error);
//                 })
//             });
// }
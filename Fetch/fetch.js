console.log("Today we are going to learn fetch method");

// let promise = new Promise((resolve,reject) => {
// setTimeout(() => {
//     console.log("hello")
//     reject("reject")
//     //resolve("success")
// }, 2000)

//})
// console.log(promise);

// promise.then((res)=>{
//     console.log(res)
// }).catch((res)=>{
//     console.log(res)
// })

// asyns :-To create asynchronous block 
// await:-wait current execution time == server-->fetch-->data
//fetch():-it used api
// let getData=async () => {
//     let res =await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data =await res.json()

//     let ul=document.createElement("ul");
// ul.style.cssText="max-width:1024px;margin:auto;background-color:pink;display:flex;flex-wrap:wrap;gap:5px;list-style:none"
// data.forEach((obj)=>{
//     let li =document.createElement("li");

//     li.innerText=obj.title;
//     li.style.cssText="width:200px;height:200px;box-shadow:2px 2px 5px black;display:flex;justify-content:center;align-items:center"
//     ul.append(li)
// })
//     console.log(data);
//     document.body.append(ul)

// }
// getData()

// let createData = async() => {
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method:"POST",
//         body:JSON.stringify({
//             name:"xyz",
//             age:30
//         }),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//     let data=await res.json();
//     console.log(data)
//     console.log("Successfully data saved")
// }
// createData()

// let updateData =async () => {
//     let res =await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "PUT",
//         body: JSON.stringify({
//             title:"this is updated title"
//         }),
//         headers: {
//            "Content-Type":"application/json"
//         }
//     });
//     let data=await res.json();
//     console.log(data)
//     console.log("Successfully data saved")

// }
// updateData()

let deleteData=async()=>{
    let res =await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });
    let data=await res.json();
    console.log(data)
    console.log("Successfully data DELETED")


}
deleteData()
// Notes
// http request
// c-create==post request
// r-read==get request
// u-update==put request
// d-delete==delete request
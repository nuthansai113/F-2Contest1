let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ]
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log


    let developers = arr.map((element) => {
      if (element.profession === "developer") {
        console.log(element)
      }
    })
    
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log


    arr.forEach((element) => {
      if (element.profession === "developer") {
        console.log(element)
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log


    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee)
    console.log(arr)
  }
  function removeAdmin() {

    let noAdmin = arr.filter((element) => {
      if (element.profession !== "admin") {
        console.log(element)
      }
    })
    // console.log(noAdmin)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log


    let anotherArray = [
      { id: 5, name: "jai", age: "31", profession: "developer" },
      { id: 6, name: "sri", age: "28", profession: "tester" },
      { id: 7, name: "ram", age: "26", profession: "manager" },
    ];


    let concatenatedArray = arr.concat(anotherArray)
    console.log(concatenatedArray)
  }
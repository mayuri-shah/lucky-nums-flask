/** processForm: get data from form and make AJAX call to our API. */
//import axios from 'axios';

async function processForm() {

   
    
    /*let data = {
        name: $("#name").val(),
        year: $("#year").val(),
        email: $("#email").val(),
        color: $("#color").val(),
    };*/
    //console.log(data["name"])
    /*let lucky = Math.random() * 50;
   
    let res = await axios.post("http://127.0.0.1:5000/api/get-lucky-num",
    params ={
        name: $("#name").val(),
        year: $("#year").val(),
        email: $("#email").val(),
        color: $("#color").val(),
    })
    //let res_lucky = await axios.post("http://127.0.0.1:5000/api/get-lucky-num",params = lucky)
    console.log(res.data);
    handleResponse(res)*/
    let data = {
        name: $("#name").val(),
        year: $("#year").val(),
        email: $("#email").val(),
        color: $("#color").val(),
    };
    let year = $("#year").val();
    
    
    console.log(data);
    let res = await axios.post("/api/get-lucky-num", (data = data));
      //res = await Promise.all(promise);
    //let res = await axios.post("http://127.0.0.1:5000/api/get-lucky-num", params = {
     //   "year" : year
    //});
    console.log(res.data)
    handleResponse(res);
        
}

/** handleResponse: deal with response from our lucky-num API. */
function handleResponse(resp) {
    $("#lucky-results").append(resp.data);
    
}

$("#lucky-form").on("submit", processForm);

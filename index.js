Selection();

function Selection() {
    let selector = document.getElementById("timezoneSelect");
    try {
        fetch("https://worldtimeapi.org/api/timezone")
            .then(data => data.json())

            .then(data1 => {
                // console.log(data1);
                for (i of data1) {
                    // console.log(i);
                    selector.innerHTML += ` <option>${i}</option>`
                }
            })


    }
    catch (error) {
        console.log(" the error is " + error);
    }
}


function result() {
    value = document.getElementById("timezoneSelect").value;
    result1 = document.getElementById("result1");
    //console.log(value);
    try {
        fetch(`https://worldtimeapi.org/api/timezone/${value}`)
            .then(data => data.json())
            .then(data =>  {
            //    console.log(data.datetime)
               result1.innerHTML =` <h5 id="Cname">Current Date and Time in ${value} :</h5>
                <p id="Dtime"> ${data.datetime} </p>`
             } )
    } catch (error) {
        console.log("error is "+ error);

    }
}
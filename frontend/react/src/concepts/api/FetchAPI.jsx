import axios from "axios";

const Fetch = () => {

    // function getData() {
    //     console.log("Data is here.");
    //     // alert("Wait for 2 sec");
    // }

    async function getData(params) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

        console.log(response);
    }

    const getDataAxios = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        console.log(data);   
    }

    return (
        <div>
            <button onClick={getDataAxios}>Get Data</button>
        </div>
    )
}

export default Fetch;
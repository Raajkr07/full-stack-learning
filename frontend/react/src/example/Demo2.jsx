// in this i learn how to use {} in react

const Parentheses = () => {
    const name = "Raj";
    const nameArray = ["Raj", "Kumar", "Das"];
    

    return (
        <h1 className="font-bold">
            {name}
            <br />
            {nameArray[0]}
        </h1>
    )
}

export default Parentheses;
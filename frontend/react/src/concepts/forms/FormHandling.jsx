const Form = () => {

    const handleSubmit = () => {
        if (input.Form === "") {
            alert('please enter the crediantials');
        }

        
    }
    return (
        <>
            <form action="">
                <div>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Second Name"/>
                    <input type="email" placeholder="example@gmail.com"/>
                    <input type="number" placeholder="contact"/>

                    <button onClick={handleSubmit}>submit</button>
                </div>
            </form>
        </>
    )
}
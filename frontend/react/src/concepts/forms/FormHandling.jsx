const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log("form submited");
    }

    return (
        <>
            <form action="" onSubmit={(e) => {handleSubmit(e)}} className="style">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Second Name"/>
                    <input type="email" placeholder="example@gmail.com"/>
                    <input type="number" placeholder="contact"/>

                    <button>submit</button>
            </form>
        </>
    )
}

export default Form;
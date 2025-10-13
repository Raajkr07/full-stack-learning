const Local = () => {

    const myIntro = {
        'name': 'Raj Kumar',
        'age': 23,
        'concact': '790*******',
        'address': {
            'vill': 'lada',
            'post': 'morwara',
            'ps': 'singhia',
            'dist': 'samastipur',
            'state': 'bihar',
            'pincode': 848209,
        }
    }

    localStorage.setItem('name', 'Raj Kumar')
    localStorage.setItem('bio', JSON.stringify(myIntro))

    return (
        <div>

        </div>
    )
}

export default Local
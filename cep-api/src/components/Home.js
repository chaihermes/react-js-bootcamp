import React, { useState } from 'react';
import AddressForm from './AddressForm';

export default function Home(){
    const [cep, setCep] = useState([]);

    React.useEffect( () => {
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setCep(data)
            })
            .catch(err => console.error(err))
    })

    return (
        <div>
            <AddressForm />
        </div>
    )
}

const url = 'http://127.0.0.1:3000/product.json';
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
        })


        
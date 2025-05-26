function fetchApi (api) {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?%20f=a${api.toString().toLowerCase()}`;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    
}

xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText); 
    }
}


const id = rep.params.id;
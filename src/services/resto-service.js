export default class RestoService { 
    getMenuItems = async () =>  {
        const res = await fetch('http://localhost:3000/menu');
        return await res.json();
    }
}

 
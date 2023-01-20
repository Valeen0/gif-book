export async function getData(url = "", options = {}){

    try {
        
        let res = await fetch(url);

        if(!res.ok)
            throw{
                err: true,
                status: res.status,
                statusText: res.statusText
            }
        
        let data = await res.json();

        return data;

    } catch (error) {
        console.warn( "Problemas!! ", error )
    }

}
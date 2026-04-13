

export function FetchUserData() {

    (async function fetchusers() {
        const response = await fetch("https://fakestoreapi.com/users");
        const data = await response.json();
        console.log(data);
    })();



    return (
        <>
            <h3>Here are the List of all Users</h3>
        </>
    )
}
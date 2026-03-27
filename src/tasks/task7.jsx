import { useEffect, useState } from "react"

export function Task7() {

    const [loading, setLoadingState] = useState(true);
    const [data, setData] = useState();

    async function userData() {

        try {
            const res = await fetch("https://fakestoreapi.com/products/1");
            const dataresponse = await res.json();

            if (loading) {
                setData([dataresponse]);
            }

        }
        catch (error) {
            console.log(error);
        } finally {
            setLoadingState(false);

        }
    }

    useEffect(() => {
        console.log("mount phase")
        userData();

    }, [])

    return (
        <div>

            {
                loading ? (<h2>Loading. . .</h2>) :

                    (
                        data.map((obj) => {
                            return (
                                <>
                                    <p>Title : {obj.title}</p>
                                    <p>Price : {obj.price}</p>
                                    <p>Description : {obj.description}</p>
                                    <img src={obj.image} height ="100" width="100"></img>
                                </>
                            )


                        })
                    )
            }

        </div>


    )
}
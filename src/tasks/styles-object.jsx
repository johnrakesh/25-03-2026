import "./styles.css"

export function Object() {

    const boxStyle = {
        color: "white",
        backgroundColor: "blue",
        padding: "20px",
        borderRadius: "10px"
    };

    const fontStyle = {
        fontFamily : "Arial",
        color: "red"
    };

    return (
        <>
            <div style={{...fontStyle,...boxStyle}}>
                Hello This is Raj Welcome!
            </div>

            <div className="box">Hello! this is external CSS</div>
           
        </>

    );
}
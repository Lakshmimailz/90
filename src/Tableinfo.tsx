type TableinfoProps ={
    name:string,
    info:string,
    playthegame:string,
    multimedia:string,
    guestbook:string
}
const tableStyle: React.CSSProperties ={
    color:"orange",
    textAlign: "center",
    border: "3px solid rgb(0, 0, 0)",
    width: "30% "   
    }
export function Tableinfo(props: TableinfoProps){    
    return<>
    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <h2>{props.name}</h2>
        </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <table style={tableStyle}>
            <tr style={tableStyle}><td style={tableStyle}>{props.info}</td>
                <td style={tableStyle}>{props.playthegame}</td>
            </tr>
            <tr style={tableStyle} ><td style={tableStyle}>{props.multimedia}</td>
                <td style={tableStyle}>{props.guestbook}</td>
            </tr>
        </table>
        </div>
    </>
}
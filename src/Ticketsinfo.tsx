
type TicketProps ={
    name: string,
    person: number
}
const headingStyle: React.CSSProperties ={
    color:"red",
    textAlign: "center"
}
export function Ticketsinfo(props: TicketProps){
    const {name, person} = props; 
return <>


<h4>{name}</h4>
        <dl>
            {person > 0 ? <>
                <dt>Person</dt>
                <dd>{person}</dd>

                <dt>AdmitOne</dt>
                <dd>{name}</dd>
            </>:<h2><p style={headingStyle} >Buy Tickets</p></h2>}
                      
        </dl>
        </>
}
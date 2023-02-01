type ImageinfoProps ={
    src:string,
    alt:string
}
export function Imageinfo(props:ImageinfoProps){
    const {src, alt} = props; 
    let style = {
        width:200,
        height:200,
        align :"center"
    }
    return(
         <img style={style} src={src} alt="Captain Marvel"  />
         
    );
}
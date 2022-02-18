// 'PrecCard.jsx' CONTAINS THE STRUCTURE OF PRECAUTIONS CARD ----------------------------- 

const PrecCard = (props)=>{
    return (
        <div className="conPrec">
            <div className="card">
                <div className="cardimg"><img src={props.img} alt={props.alt} /></div>
                <div className="cardtxt">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                </div>
            </div>
        </div>
    );
}
//  EXPORTING -------------------------------------------
export default PrecCard;
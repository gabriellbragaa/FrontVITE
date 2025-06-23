import "./Agro.css";



interface AgroProps {
    price: number;
    image: string;
    title: string;
}
export function Agro({ price, image, title} : AgroProps) {    
    
    return (
        <div className="AgroBrasil">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>Valor: {price}</p>
        </div>
    )
}
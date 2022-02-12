// IMPORTIND ESSENTIAL DATA AND COMPONENTS -----------------------------------
import PrecData from "./PrecautionsData";
import PrecCard from './PrecCard';


const Precautions = () => {
    return (
        <>
            {PrecData.map((val) => {
                return (
                    <PrecCard
                        key={val.id}
                        img={val.img}
                        heading={val.heading}
                        para={val.para}
                        alt={val.alt}
                    />
                );
            })}
        </>
    );
}
// EXPORTING ----------------------------------------
export default Precautions;

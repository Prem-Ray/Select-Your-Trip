import './Tours.css'
import Card from './Card'

function Tours({tours,removetour}){
    return(
        <div className='container flex justify-center items-center flex-col'> 
            <div>
                <h2 className='title text-[3rem] m-[6vh] border-[7px] border-dashed border-blue-950 rounded-[20px] py-[1vh] px-[5vw] '>Select Your Trip</h2>
            </div>

            <div className='cards flex justify-center flex-wrap max-w-[1300px] my-0 mx-auto'>
                {
                    tours.map((tour)=>{
                        return <Card {...tour} key={tour.id} removetour={removetour}></Card>
                    })
                }
            </div>

        </div>
        
    )
}

export default Tours ;
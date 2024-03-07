import Title from "./Title/Title";


const Titles = ({courseName,timeHour,prices,remaining}) => {

    return (
        <div className="w-1/3 mt-5">
            <div className="bg-white  p-4">
            <p>Credit Hour Remaining {remaining} hr</p> 
            <hr className="my-4 " />
            <div className="">
                {
                    courseName.map((courseNm , idx)=><Title key={idx} courseNm={courseNm}></Title>)
                }
           
            <hr className="my-4 " />
            <p className="text-[16px] font-medium">Total Credit Hour : {timeHour} hr</p>
            <hr className="my-4 " />
            <p className="text-[16px] font-semibold">price: {prices} USD</p>
            </div>
            </div>
            
            
        </div>
    );
};

export default Titles;
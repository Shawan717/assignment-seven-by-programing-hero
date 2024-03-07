

const Title = ({courseNm}) => {
    console.log(courseNm);
    return (
        <div>
            <p className="text-[16px] text-[#1c1b1b99]">{courseNm}</p>
        </div>
    );
};

export default Title;
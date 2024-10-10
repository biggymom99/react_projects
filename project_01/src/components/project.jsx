

const Project = ()=>{
    return(
    <div>
        <img src="/biggy.jpeg" alt="My cat" width={300}/>
        <h1>사용자 정보 입력</h1>
        <h3>NAME</h3>
        <input
            type="text"
            placeholder="이름을 입력해주세요"/>
        <h3>AGE</h3>
        <input
            type="text"
            placeholder="나이를 입력해주세요"/>
        <button style={{display: "flex"}}>사용자 추가</button>
    </div>
);
}

export default Project
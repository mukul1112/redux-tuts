function User(props) {
    
    const {data,data2} =props;
     
    console.log(data2)
    return ( 
        <>
        <h1>hi i am a user component passes prop is : {data.Age}</h1>

        <h1>hi i am a user component passes prop 2is : {data2.Age}</h1>
        
</>
     );
}

export default User;
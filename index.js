
const isValidEmail=(email)=> {
    
    const emailRegex =/^[^s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const submitForm= async(email,password)=>{
    if (!isValidEmail(email)){
        throw new Error("Invalid email format");
    }


const response=await fetch ("/api/signup",{
    method:"POST",
    body: JSON.stringify({email,password}),
});
if(!response.ok){
    throw new Error('Signup failed');
}
return response.json();
};

// function isValidPassword(password){
//     return password && password.trim().length>0;


// }

module.exports={isValidEmail,submitForm};

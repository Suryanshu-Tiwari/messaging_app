import { useState } from "react";
import toast from "react-hot-toast";

const useRegister = () => {
    const[loading,setLoading] = useState(false);

    const Register = async(fullName, username, password, confirmpassword, gender) => {
        const success = handleInputErrors({fullName, username, password, confirmpassword, gender});
        if(!success) return;

        setLoading(true);
        try{
            const res = await fetch("/api/auth/register", {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({ fullName,username,password,confirmpassword,gender})
            })

            const data = await res.json();
            console.log(data);
        }
        catch(err){
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
    };

    return{loading, Register};
};

export default useRegister

function handleInputErrors({fullName,username,password, confirmpassword, gender}){
    if(!fullName || !username || !password || !confirmpassword || !gender){
        toast.error('please fill all the details');
        return false
    }

    if(password.length < 6){
        toast.error('password should be six characters long');
        return false
    }

    if(password !== confirmpassword){
        toast.error('passwords do not match');
        return false
    }

    return true
}

export const registeruser = async (req,res) => {
    try {
        const {fullName , username, password ,confirmpassword ,gender} = req.body;
    }
    catch(err){
        console.log(err.message);
    }
};

export const loginuser= (req,res) => {
    console.log("login user");
};

export const logoutuser = (req, res) => {
    console.log("logout user");
};
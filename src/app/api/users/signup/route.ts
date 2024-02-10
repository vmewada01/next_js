import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";



connect()

export default async function POST(req: NextRequest, res: NextResponse) {
try {
    const reqBody = await req.json();
   const {name, email, password}= reqBody;
   console.log(reqBody) 
   const user  = await User.findOne({ email: email})
 
    if(user){
        return NextResponse.json({error:"User already exists"},{
            status: 400
        })


    }
 const salt = await bcryptjs.genSalt(10);

 const hashedPassword = await bcryptjs.hash(password, salt);

 const newUser = new User({
     name: name,
     email: email,
     password: hashedPassword
 });
 const savedUser = await newUser.save();
 console.log(savedUser) 

 return NextResponse.json({message: "User created successfully",
    success: true,
    savedUser
 });

} catch (error:any) {
    return NextResponse.json({error: error.message},{status: 500})
}
}
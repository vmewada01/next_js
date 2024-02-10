export default function UserProfile({params}: any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <hr />
           <p className="text-3xl">user profile </p>
           <span className="bg-orange-600 text-lg px-3 rounded-md">{params.id}</span>
       
        </div>
    )
}
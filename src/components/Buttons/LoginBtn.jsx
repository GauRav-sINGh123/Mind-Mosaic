'use client';
// import { useAuth } from "@/context/AuthContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
function LoginBtn() {
  const { user,isLoaded} = useUser();

  if(!isLoaded){
    return <div>Loding..</div>
  }
 console.log(user)
  return (
    <>
      {user ? (
        <div className="flex gap-4 flex-row-reverse">
          <p className="text-gray-300 mt-1">{user.username}</p>
          <UserButton afterSignOutUrl="/"   size="large" apperence="secondary"   />
        </div>
        
      ) : (
        <Link href="/signin" >
          <button className="ui-btn rounded-2xl">
            <span>Login</span>
          </button>
        </Link>
      )}
    </>
  );
}

export default LoginBtn;

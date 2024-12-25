// import Header from "./Header";
import SignupForm from "./SignupForm";
import logo from "../../assets/logo.png";
import codeant from "../../assets/codeant.png";
import { useState } from "react";


const SignupMain = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="w-full flex flex-col items-center justify-center px-3">
            <div className=" w-full lg:w-[672px] lg:h-[602px] flex flex-col bg-white rounded-xl border border-[#D5D7DA]">

                {/* Header */}

                <div className="w-full flex flex-col px-6 py-9    space-y-4 border-b">

                    {/* logo name */}
                    <div className="flex flex-col items-center justify-between gap-y-9">

                        <div className="flex items-center justify-center space-x-2">
                            <img src={logo} alt="" width={35.62} height={40} />
                            <img src={codeant} alt="" width={125} height={33} />
                        </div>

                        <p className="font-bold text-2xl">Welcome to CodeAnt AI</p>

                    </div>

                    {/* toggle button */}
                    <div className="flex flex-row items-center justify-center">

                        <button onClick={() => setToggle(!toggle)} className={`w-full h-[60px] rounded-lg ${toggle ? "bg-[#1570EF] text-white" : "bg-[#FAFAFA] text-[#414651]"}`}>SAAS</button>
                        <button onClick={() => setToggle(!toggle)} className={`w-full h-[60px] rounded-lg ${toggle ? "bg-[#FAFAFA] text-[#414651]" : "bg-[#1570EF] text-white"}`}>Self Hosted</button>
                    </div>
                </div>

                {/* signup options */}
                <div className="w-full  py-6">
                    <SignupForm toggle={toggle} />

                </div>
            </div>

            {/* T&C */}
            <div className="pt-[16px]">
                <p>By signing up you agree to the <b>Privacy Policy</b>.</p>
            </div>
        </div>
    )
}

export default SignupMain;
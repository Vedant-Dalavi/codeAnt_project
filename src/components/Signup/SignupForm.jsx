import github from '../../assets/signupoption/github.png';
import bitbucket from '../../assets/signupoption/bitbucket.png';
import azure from '../../assets/signupoption/azure.png';
import gitlabs from '../../assets/signupoption/gitlabs.png';
import sso from '../../assets/signupoption/sso.png'
import { Link } from 'react-router-dom';


const SignupForm = ({ toggle }) => {

    return (
        <div>

            {toggle == true &&

                <div className=" flex flex-col items-center gap-y-4 px-4 md:px-40">

                    <Link to={"/home"} className='flex items-center justify-center gap-4 py-4 w-full rounded-lg border border-[#D8DAE5] hover:bg-[#FAFAFA]'>
                        <img src={github} alt="" height={24} width={24} />
                        <p>Sign in with Github</p>
                    </Link>

                    <Link to={"/home"} className='flex items-center justify-center gap-4 py-4 w-full rounded-lg border border-[#D8DAE5] hover:bg-[#FAFAFA]'>

                        <img src={bitbucket} alt="" height={24} width={24} />
                        <p>Sign in with BitBucket</p>
                    </Link>

                    <Link to={"/home"} className='flex items-center justify-center gap-4 py-4 w-full rounded-lg border border-[#D8DAE5] hover:bg-[#FAFAFA]'>

                        <img src={azure} alt="" height={24} width={24} />
                        <p>Sign in with Azure Devops</p>
                    </Link>

                    <Link to={"/home"} className='flex items-center justify-center gap-4 py-4 w-full rounded-lg border border-[#D8DAE5] hover:bg-[#FAFAFA]'>

                        <img src={gitlabs} alt="" height={24} width={24} />
                        <p>Sign in with GitLab</p>
                    </Link>

                </div>
            }


            {toggle == false &&

                <div className=" flex flex-col items-center gap-y-4 px-4 md:px-40">


                    <Link to={"/home"} className='flex items-center justify-center gap-4 py-4 w-full   rounded-lg border border-[#D8DAE5] hover:bg-[#FAFAFA]'>

                        <img src={gitlabs} alt="" height={24} width={24} />
                        <p>Self Hosted GitLab</p>
                    </Link>
                    <Link to={"/home"} className='flex items-center justify-center gap-4 py-4 w-full rounded-lg border border-[#D8DAE5] hover:bg-[#FAFAFA]'>

                        <img src={sso} alt="" height={24} width={24} />
                        <p>Sign in with SSO</p>
                    </Link>

                </div>
            }

        </div>
    )
}


export default SignupForm;
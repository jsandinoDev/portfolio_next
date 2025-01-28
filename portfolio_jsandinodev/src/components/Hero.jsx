import { SocialPill } from '../components/SocialPill'
import { GithubIcon } from '../components/icons/GithubIcon'
import { TimeLine } from './TimeLine'
import { WorkExperience } from './WorkExperience'
import { LinkedInIcon } from './icons/LinkedInIcon'
import { MailIcon } from './icons/MailIcon'

export const Hero = () => {
    return (
        <div >
            <span>
                <img
                    className="rounded-full w-12 h-12 mb-5"
                    src="https://pbs.twimg.com/profile_images/1808894397200879621/dymtRZEo_400x400.jpg"
                    alt="Logo"
                />

                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Hey, I'm Josue
                    <a
                        href="https://www.linkedin.com/in/josue-sandino-jaen-846381207/"
                        target="_blank"
                        rel="noopener"
                        className="flex justify-center items-center"
                    >
                        {/* <p>Open to Workd</p> */}
                    </a>
                </h1>
            </span>

            <h2 className="text-xl lg:text-2xl text-wrap max-w-[700]">
                <span>+5 years of experience. </span>
                <span className="text-yellow-200/90">
                    Full stack developer && Web3 open source contributor.
                </span>
                
                <span className="text-blue-100/90"> From Barva, Costa Rica 🇨🇷 </span>
                <span className="text-blue-100/90"> </span>
            </h2>

            <nav className="flex gap-4 mt-8 flex-wrap" >
                <SocialPill href="#" >
                    <GithubIcon />
                    Github
                </SocialPill>
                <SocialPill href="#" >
                    <LinkedInIcon />
                    LinkedIn
                </SocialPill>
                <SocialPill href="#" >
                    <MailIcon />
                    Email
                </SocialPill>

            </nav>
        
        <WorkExperience />

        </div>
    )
}

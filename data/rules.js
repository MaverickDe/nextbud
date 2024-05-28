import Link from "next/link"

const { WEBTELEGRAMURL, WEBFACEBOOKPAGEURL, WEBFACEBOOKGROUPURL, WEBINSTAURL } = require("@/components/const")

let Rules = () => {
    

    return <div>

        <h1>
            <b>

        USER ACCOUNT & QUALITY POLICIES 
            </b>

        </h1>
        <ul>
            {

[`1. In order to be an active worker on KUDIVIRAL, you must sign up or create account on various social media sites like: FACEBOOK, INSTAGRAM, THREADS, TWITTER, TIKTOK, WHATSAPP, SNAPCHAT, YOUTUBE (GMAIL ACCOUNT) etc `,

`ii. It is also adviceable to sign up and create accounts on music streaming sites like AUDIOMACK, BOOMPLAY, SPOTIFY, APPLE MUSIC etc because some jobs will be coming in from there `,

`2. You are not allowed to create multiple SHABEETASK accounts on same device (same IP address), but if you have two different devices (phone or laptop) you can create unique accounts on both phones to perform more jobs and increase earnings. But kindly note that the SHABEETASK accounts you are using must have its own unique social media accounts used as submission of job proofs. Any attempt to submit same social media username proofs for multiple jobs will lead to a permanent ban and loss of funds to all SHABEETASK accounts linked to that username `,

`3. Your social media page must not be private but public, incase advertisers wants to review your  profile quality `,

`4. For INSTAGRAM & FACEBOOK accounts you must have at least 3 post/pictures on your account, For TWITTER you must make atleast 5 tweets, and for TIKTOK & SNAPCHAT you must make atleast 1 post, else our monitoring bots may flag your account as a robot account hence leading to a possible ban of your account on our platform `,

`5. Ensure that you don't post or tweet nude pictures, drugs, violence or other contents that are not allowed by each if the social media platforms so as to protect the quality of your account `,

`6. You must ensure that you have uploaded a PROFILE PICTURE on all social media accounts that you intend to use in performing micro jobs on SHABEETASK`,

`7. The profiles pictures that's used on any of your account to perform tasks must clearly represent that of an AFRICAN/BLACK indegene because SHABEESK is aimed at being the biggest platform where advertisers can recruit african/black workers to preform mirco jobs online, so we are very particular about the region a worker is signing up from. `,

`8. So therefore, avoid using pictures of foreign/white celebrities, footballers etc on your profiles else our monitoring bots may flag your account which may possibly lead to permanent ban and loss of earned funds`,

`9. Your profile pictures must represent a real human being, so avoid using pictures of cartoons, motivational quotes, company logo's etc as your profile picture on all social media accounts that you intend to use in performing micro jobs`,

`10. We don't discriminate any race from joining and performing task on our platform, but we are strictly in need of african/black profiles alone. But if you aren't from Africa/black Nation, you can simply rename the username of your current profile to an african/black race native name, change the profile picture to that of an african/black indegene (you can simply find African usernames and images online) OR you simply create a new account with African details `]
.map((e, index) => {
    return <li className="pt-5" key = {index}>{ e}</li>
})
            }
        </ul>
        

        <div className="pt-5">
            <h1 className="font-bold">

TASK EXCECUTION POLICIES 
            </h1>
        <ul>
            {

[`1. You must be active and ready to attempt and perform all listed micro jobs, from very easy jobs to very complex jobs`,

`2. You must be active and ready to attempt and perform micro jobs at any given time of the day (morning, afternoon, evening & even at night hours)`,

`3. You must be active and ready to create more awareness about SHABEETASK and also refer more workers to platform, by so doing you can also increase your earnings through our juicy affiliate program`,

`4. You must exhibit Profesionalism and intelligence while doing the listed jobs by carefully reading the task description and instructions. For example if you are asked to copy and paste a certain write up on a forum, ensure to carefully copy and paste only that write up. Don't go and copy the whole articles on the screen including the task instructions etc`,

`5. Still on professionalism & intelligence: most of our jobs are performed in English, but an advertiser from a french speaking country can request that he needs comments on his instagram post, but wants the comment in FRENCH language. Now all you have do is to go to GOOGLE TRANSLATE and translate your English comment to French and then copy it and paste in the comment section on Instagram`,

`6. If asked to submit or upload a screenshot proof, simply go either www.prnt.sc OR www.snipboard.io to upload your screenshot. After uploading the screenshot you can now copy the link and submit in the proof section`,]
.map((e, index) => {
    return <li className="pt-5" key = {index}>{ e}</li>
})
            }
            
</ul>
        </div>

 

        <div className="pt-5">
            <h1 className="font bold">

SUPPORT & PAYMENT POLICIES 
            </h1>
            <ul>
                {

[`1. Earnings are automatically in Nigerian naira, but you can swap to a preferred currency of choice at point of withdrawal `,

`2. All withdrawals are processed and paid out within 24hrs`,

`3. If you encounter any issues or you have any enquiries, do well to reach out to our customer support on whatsapp or telegram`,]
.map((e, index) => {
    return <li className="pt-5" key = {index}>{ e}</li>
})
                }
</ul>
        </div>




        <div className="pt-5">
            <h1 className="font-bold">

GENERAL INSTRUCTION
            </h1>
            <ul>
                {

[`1. Do not use VPN/PROXY or other type of masking IP address software`,

`2. Do not purposefully submit fake or incomplete proofs`,

`3. Think of your first 20 tasks like a job interview. Please do your work carefully, do not rush, and make sure to focus on achieving a 100% satisfied rating. If your success rate drops below 80% stop working and fix your mistakes before your account is frozen or closed.
Any violation of the above rules will ultimately lead to a ban, and the immediate LOSS OF ALL EARNINGS accrued to your account.`,]
.map((e, index) => {
    return <li className="pt-5" key = {index}>{ e}</li>
})
                }
            </ul>
        </div>

        <div>
            <h1 className="font-bold mt-5">

JOIN OUR COMMUNITIES BELOW:
            </h1>
            <div className="pt-5">
                {

[{"TELEGRAM CHANNEL":
WEBTELEGRAMURL},

{"FACEBOOK PAGE":
WEBFACEBOOKPAGEURL},

{"FACEBOOK GROUP": 
WEBFACEBOOKGROUPURL},

{"INSTAGRAM":
                            WEBINSTAURL
                        }]
                        .map((e, index) => {
                            return <div className="pt-5" key={index}>
                                
                                <Link href={Object.values(e)[0]}>{ Object.keys(e)[0]}</Link>
                               
                            </div>
                        })
                }
            
        </div>
        </div>


        
    </div>
}

export default Rules
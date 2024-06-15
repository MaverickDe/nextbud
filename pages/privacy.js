import RootLayout3 from "@/components/Layout/wrapper/layout3";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="w-full">
      <RootLayout3>
        <div className="w-full flex bg-[#F5EFFB] items-center justify-center px-5 py-5 max-sm:px-1 flex-col">
          {/* <div className="w-full flex items-center justify-center p-5"> */}
          <div className="p-10 flex-col flex justify-center items-center">
            <h1 className="text-[50px] max-md:text-[30px]">Privacy Policy</h1>
            <h2 className="text-[30px] max-md:text-[20px]">App NextBud</h2>
          </div>

          <div className="w-[80%] max-sm:w-[95%] bg-[white] my-5 mb-20 flex flex-col gap-10  py-10 px-10  rounded-[40px] max-w-[1500px] rounded-lg font-nueuthin">
            <div className="flex flex-col gap-5">
              <p>
                Your privacy is important to us. It is NextBud's policy to
                respect your privacy and comply with any applicable law and
                regulation regarding any personal information we may collect
                about you, including via our app, NextBud, and its associated
                services.
              </p>

              <p>
                Personal information is any information about you which can be
                used to identify you. This includes information about you as a
                person (such as name, address, and date of birth), your devices,
                payment details, and even information about how you use an app
                or online service.
              </p>
              <p>
                In the event our app contains links to third-party sites and
                services, please be aware that those sites and services have
                their own privacy policies. After following a link to any
                third-party content, you should read their posted privacy policy
                information about how they collect and use personal information.
                This Privacy Policy does not apply to any of your activities
                after you leave our app.
              </p>

              <div className="flex flex-col gap-5">
                <p>This policy is effective as of June 2, 2024.</p>
                <p>Last updated: June 2, 2024</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Information We Collect</h1>
              <p>
                Information we collect falls into one of two categories:
                'voluntarily provided' information and 'automatically collected'
                information. 'Voluntarily provided' information refers to any
                information you knowingly and actively provide us when using our
                app and its associated services. 'Automatically collected'
                information refers to any information automatically sent by your
                device in the course of accessing our app and its associated
                services.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Log Data</h1>
              <p>
                When you access our servers via our app, we may automatically
                log the standard data provided by your device. It may include
                your device's Internet Protocol (IP) address, your device type
                and version, your activity within the app, time and date, and
                other details about your usage. Additionally, when you encounter
                certain errors while using the app, we automatically collect
                data about the error and the circumstances surrounding its
                occurrence. This data may include technical details about your
                device, what you were trying to do when the error happened, and
                other technical information relating to the problem. You may or
                may not receive notice of such errors, even in the moment they
                occur, that they have occurred, or what the nature of the error
                is. Please be aware that while this information may not be
                personally identifying by itself, it may be possible to combine
                it with other data to personally identify individual persons.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Device Data</h1>
              <div className="flex flex-col gap-5">
                <p>
                  Our app may access and collect data via your device's in-built
                  tools, such as:
                </p>
                <ul className="list-disc	">
                  {[
                    "Your identity",
                    "Location data",
                    "Storage, photos and/or media",
                    "Notifications",
                    "Mobile data",
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
                <p>
                  When you install the app or use your device’s tools within the
                  app, we request permission to access this information. The
                  specific data we collect can depend on the individual settings
                  of your device and the permissions you grant when you install
                  and use the app.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Personal Information</h1>
              <div className="flex flex-col gap-5">
                <p>
                  We may ask for personal information — for example, when you
                  submit content to us or when you contact us — which may
                  include one or more of the following:
                </p>
                <ul className="list-disc	">
                  {["Name", "Email", "Phone/mobile number"].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">User-Generated Content</h1>
              <p>
                {`
                                
                                We consider 'user-generated content' to be materials (text, image and/or video content) voluntarily supplied to us by our users for the purpose of publication on our platform, app or re-publishing on our social media channels. All user-generated content is associated with the account or email address used to submit the materials.
                                Please be aware that any content you submit for the purpose of publication will be public after posting (and subsequent review or vetting process). Once published it may be accessible to third parties not covered under this privacy policy.
                                Legitimate Reasons for Processing Your Personal Information
                                We only collect and use your personal information when we have a legitimate reason for doing so. In which instance we only collect personal information that is reasonably necessary to provide our services to you. 
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Collection and Use of Information
              </h1>
              <div className="flex flex-col gap-5">
                <p>
                  We may collect personal information from you when you do any
                  of the following on our app:
                </p>
                <ul className="list-disc	">
                  {[
                    "Register for an account",
                    "Sign up to receive updates from us via email or social media channels",
                    "Use a mobile device or web browser to access our content",
                    "Contact us via email, social media, or on any similar technologies",
                    "When you mention us on social media",
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <p>
                  We may collect, hold, use and disclose information for the
                  following purposes, and personal information will not be
                  further processed in a manner that is incompatible with these
                  purposes:
                </p>
                <ul className="list-disc	">
                  {[
                    "to provide you with our app and platform's core features and services",
                    "to enable you to customize or personalize your experience of our app",
                    " to contact and communicate with you",
                    "for analytics, market research, and business development, including to operate and improve our app, associated applications, and associated social media platforms",
                    " for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you",
                    " to enable you to access and use our app, associated platforms, and associated social media channels",
                    "for internal record keeping and administrative purposes",
                    "to comply with our legal obligations and resolve any disputes that we may have",
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
                <p>
                  We may combine voluntarily provided and automatically
                  collected personal information with general information or
                  research data we receive from other trusted sources. For
                  example, If you consent to us accessing your social media
                  profiles, we may combine information sourced from those
                  profiles with information received from you directly to
                  provide you with an enhanced experience of our app and
                  services.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Security of Your Personal Information
              </h1>
              <p>
                {`
                                When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                                Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure and no one can guarantee absolute data security.
                                You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. For example, ensuring any passwords associated with accessing your personal information and accounts are secure and confidential. 
                                `}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                How Long We Keep Your Personal Information
              </h1>
              <p>
                {`
                                We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. For example, if you have provided us with personal information as part of creating an account with us, we may retain this information for the duration your account exists on our system. If your personal information is no longer required for this purpose, we will delete it or make it anonymous by removing all details that identify you.
                                However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes. 
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Disclosure of Personal Information to Third Parties
              </h1>
              <div className="flex flex-col gap-5">
                <p>We may disclose personal information to:</p>
                <ul className="list-disc	">
                  {[
                    " a parent, subsidiary or affiliate of our company",
                    " third-party service providers for the purpose of enabling them to provide their services including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers,marketingproviders,professional advisors, and payment systems operators",
                    " our employees, contractors, and/or related entities",
                    " our existing or potential agents or business partners",
                    " credit reporting agencies, courts, tribunals, and regulatory authorities, in the event you fail to pay for goods or services we have provided to you",
                    " courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights",
                    " third parties, including agents or sub-contractors who assist us in providing information, products, services, or direct marketing to you",
                    " third parties to collect and process data",
                    " an entity that buys, or to which we transfer all or substantially all of our assets and business",
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <p>Third parties we currently use include:</p>
                <ul className="list-disc	">
                  {[
                    "     Google Analytics",
                    "Hotjar",
                    "Brevo",
                    "Apple Pay",
                    "RevenueCat",
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Security of Your Personal Information
              </h1>
              <p>
                {`

                                When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                                Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure and no one can guarantee absolute data security.
                                You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. For example, ensuring any passwords associated with accessing your personal information and accounts are secure and confidential.  

                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                International Transfers of Personal Information
              </h1>
              <p>
                {`
                                The personal information we collect is stored and/or processed in United Kingdom, or where we or our partners, affiliates, and third-party providers maintain facilities.
                                The countries to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Your Rights and Controlling Your Personal Information
              </h1>
              <div className="flex flex-col gap-5">
                <ul className="	">
                  {[
                    {
                      heah: "Your choice: ",
                      prg: "By providing personal information to us, you understand we will collect, hold, use, and disclose your personal information in accordance with this privacy policy. You do not have to provide personal information to us, however, if you do not, it may affect your use of our app or the products and/or services offered on or through it.",
                    },

                    {
                      heah: "Information from third parties:",
                      prg: " If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.",
                    },

                    {
                      heah: "Marketing permission:",
                      prg: " If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below.",
                    },

                    {
                      heah: "Access:",
                      prg: " You may request details of the personal information that we hold about you.",
                    },

                    {
                      heah: "Correction:",
                      prg: " If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.",
                    },

                    {
                      heah: "Non-discrimination:",
                      prg: " We will not discriminate against you for exercising any of your rights over your personal information. Unless your personal information is required to provide you with a particular service or offer (for example serving particular content to your device), we will not deny you goods or services and/or charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties, or provide you with a different level or quality of goods or services.",
                    },

                    {
                      heah: "Downloading of Personal Information:",
                      prg: " We provide a means for you to download the personal information you have shared through our app. Please contact us for more information.",
                    },

                    {
                      heah: "Notification of data breaches:",
                      prg: " We will comply with laws applicable to us in respect of any data breach.",
                    },

                    {
                      heah: "Complaints:",
                      prg: " If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.",
                    },

                    {
                      heah: "Unsubscribe:",
                      prg: " To unsubscribe from our email database or opt-out of communications (including marketing communications), please contact us using the details provided in this privacy policy, or opt-out using the opt-out facilities provided in the communication. We may need to request specific information from you to help us confirm your identity. confidential.  ",
                    },
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        <b>{` ${e.heah} `}</b>
                        {e.prg}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Business Transfers</h1>
              <p>
                {`
                                If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data, including your personal information, among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may, to the extent permitted by applicable law, continue to use your personal information according to this policy, which they will be required to assume as it is the basis for any ownership or use rights we have over such information.
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Limits of Our Policy</h1>
              <p>
                {`Our app may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Changes to This Policy </h1>

              <div className="flex flex-col gap-5">
                {[
                  "At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here.",

                  "If the changes are significant, or if required by applicable law, we will contact you (based on your selected preferences for communications from us) and all our registered users with the new details and links to the updated or changed policy.",

                  "If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information. ",
                ].map((e, index) => {
                  return (
                    <p key={index}>
                      {`
                                
                              ${e}

                                `}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="font-nueubig">
                  Additional Disclosures for Australian Privacy Act Compliance
                  (AU){" "}
                </h1>
                <h2>International Transfers of Personal Information</h2>
              </div>
              <p>
                {`
                                
                                
Where the disclosure of your personal information is solely subject to Australian privacy laws, you acknowledge that some third parties may not be regulated by the Privacy Act and the Australian Privacy Principles in the Privacy Act. You acknowledge that if any such third party engages in any act or practice that contravenes the Australian Privacy Principles, it would not be accountable under the Privacy Act, and you will not be able to seek redress under the Privacy Act


                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="font-nueubig">
                  Additional Disclosures for General Data Protection Regulation
                  (GDPR) Compliance (EU){" "}
                </h1>
                <h2>Data Controller / Data Processor </h2>
              </div>
              <p>
                {`
                                
                                
                                The GDPR distinguishes between organisations that process personal information for their own purposes (known as "data controllers") and organisations that process personal information on behalf of other organisations (known as "data processors"). We, NextBud, located at the address provided in our Contact Us section, are a Data Controller with respect to the personal information you provide to us.


                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Legal Bases for Processing Your Personal Information{" "}
              </h1>
              <p>
                We will only collect and use your personal information when we
                have a legal right to do so. In which case, we will collect and
                use your personal information lawfully, fairly, and in a
                transparent manner. If we seek your consent to process your
                personal information, and you are under 16 years of age, we will
                seek your parent or legal guardian’s consent to process your
                personal information for that specific purpose. Our lawful bases
                depend on the services you use and how you use them. This means
                we only collect and use your information on the following
                grounds:
              </p>
              <div className="flex flex-col gap-5">
                <ul className="	">
                  {[
                    {
                      heah: "Consent From You",
                      prg: "Where you give us consent to collect and use your personal information for a specific purpose. You may withdraw your consent at any time using the facilities we provide; however this will not affect any use of your information that has already taken place. You may consent to providing your email address for the purpose of receiving marketing emails from us. While you may unsubscribe at any time, we cannot recall any email we have already sent. If you have any further enquiries about how to withdraw your consent, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.",
                    },

                    {
                      heah: "Performance of a Contract or Transaction",
                      prg: "Where you have entered into a contract or transaction with us, or in order to take preparatory steps prior to our entering into a contract or transaction with you. For example, we need technical information about your device in order to provide the essential features of our app.",
                    },

                    {
                      heah: "Our Legitimate Interests",
                      prg: "Where we assess it is necessary for our legitimate interests, such as for us to provide, operate, improve and communicate our services. For example, we collect technical information about your device in order to improve and personalise your experience of our app. We consider our legitimate interests to include research and development, understanding our audience, marketing and promoting our services, measures taken to operate our services efficiently, marketing analysis, and measures taken to protect our legal rights and interests.",
                    },

                    {
                      heah: "Compliance with Law",
                      prg: "In some cases, we may have a legal obligation to use or keep your personal information. Such cases may include (but are not limited to) court orders, criminal investigations, government requests, and regulatory obligations. If you have any further enquiries about how we retain personal information in order to comply with the law, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.",
                    },
                  ].map((e, index) => {
                    return (
                      <li className="pt-5 " key={index}>
                        <b className="pb-3 ">{` ${e.heah} `}</b>
                        <br />
                        {e.prg}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="font-nueubig">
                  International Transfers Outside of the European Economic Area
                  (EEA){" "}
                </h1>
              </div>
              <p>
                {`
                                We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses approved by the European Commission, or the use of binding corporate rules or other legally accepted means.
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Your Rights and Controlling Your Personal Information{" "}
              </h1>

              <div className="flex flex-col gap-5">
                <ul className="">
                  {[
                    {
                      heah: "Restrict:",
                      prg: " You have the right to request that we restrict the processing of your personal information if (i) you are concerned about the accuracy of your personal information; (ii) you believe your personal information has been unlawfully processed; (iii) you need us to maintain the personal information solely for the purpose of a legal claim; or (iv) we are in the process of considering your objection in relation to processing on the basis of legitimate interests.",
                    },

                    {
                      heah: "Objecting to processing:",
                      prg: " You have the right to object to processing of your personal information that is based on our legitimate interests or public interest. If this is done, we must provide compelling legitimate grounds for the processing which overrides your interests, rights, and freedoms, in order to proceed with the processing of your personal information.",
                    },

                    {
                      heah: "Data portability:",
                      prg: " You may have the right to request a copy of the personal information we hold about you. Where possible, we will provide this information in CSV format or other easily readable machine format. You may also have the right to request that we transfer this personal information to a third party.",
                    },
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        <b>{` ${e.heah} `}</b>
                        {e.prg}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Additional Disclosures for U.S. States Privacy Law Compliance
              </h1>

              <p>
                {`
                                The following section includes provisions that comply with the privacy laws of these states (California, Colorado, Delaware, Florida, Virginia, and Utah) and is applicable only to the residents of those states. Specific references to a particular state (in a heading or in the text) are only a reference to that state's law and applies only to that state's residents. Non-state specific language applies to all of the states listed above.

                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Do Not Track</h1>

              <p>
                {`
                                Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
                                We adhere to the standards outlined in this privacy policy, ensuring we collect and process personal information lawfully, fairly, transparently, and with legitimate, legal reasons for doing so.
                                
                                `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">California Privacy Laws - CPPA</h1>
              <div className="flex flex-col gap-5">
                {[
                  "Under California Civil Code Section 1798.83, if you live in California and your business relationship with us is mainly for personal, family, or household purposes, you may ask us about the information we release to other organizations for their marketing purposes. In accordance with your right to non-discrimination, we may offer you certain financial incentives permitted by the California Consumer Privacy Act, and the California Privacy Rights Act (collectively, CCPA) that can result in different prices, rates, or quality levels for the goods or services we provide. Any CCPA-permitted financial incentive we offer will reasonably relate to the value of your personal information, and we will provide written terms that describe clearly the nature of such an offer. Participation in a financial incentive program requires your prior opt-in consent, which you may revoke at any time.",

                  "Under California Civil Code Section 1798.83, if you live in California and your business relationship with us is mainly for personal, family, or household purposes, you may ask us about the information we release to other organizations for their marketing purposes. To make such a request, please contact us using the details provided in this privacy policy with “Request for California privacy information” in the subject line. You may make this type of request once every calendar year. We will email you a list of categories of personal information we revealed to other organisations for their marketing purposes in the last calendar year, along with their names and addresses. Not all personal information shared in this way is covered by Section 1798.83 of the California Civil Code.",
                ].map((e, index) => {
                  return <p key={index}>{e}</p>;
                })}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">California Notice of Collection</h1>

              <p>
                {`
                       In the past 12 months, we have collected the following categories of personal information enumerated in the CCPA:
Identifiers, such as name, email address, phone number, account name, IP address, and an ID or number assigned to your account.
For more information on information we collect, including the sources we receive information from, review the “Information We Collect” section. We collect and use these categories of personal information for the business purposes described in the “Collection and Use of Information” section, including to provide and manage our Service
                       `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Right to Know and Delete </h1>

              <p>
                {`
                       You have rights to delete your personal information we collected and know certain information about our data practices in the preceding 12 months. In particular, you have the right to request the following from us:
                       `}
              </p>

              <ul className="list-disc	">
                {[
                  "The categories of personal information we have collected about you;",
                  "The categories of sources from which the personal information was collected;",
                  "The categories of personal information about you we disclosed for a business purpose or sold;",
                  "The categories of third parties to whom the personal information was disclosed for a business purpose or sold;",
                  "The business or commercial purpose for collecting or selling the personal information; and",
                  "The specific pieces of personal information we have collected about you.",
                ].map((e, index) => {
                  return (
                    <li className=" " key={index}>
                      {e}
                    </li>
                  );
                })}
              </ul>
              <p>
                {`
                       To exercise any of these rights, please contact us using the details provided in this privacy policy.
                       `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Shine the Light</h1>

              <p>
                {`
                       In the past 12 months, we have collected the following categories of personal information enumerated in the CCPA:
Identifiers, such as name, email address, phone number, account name, IP address, and an ID or number assigned to your account.
For more information on information we collect, including the sources we receive information from, review the “Information We Collect” section. We collect and use these categories of personal information for the business purposes described in the “Collection and Use of Information” section, including to provide and manage our Service
In addition to the rights discussed above, you have the right to request information from us regarding the manner in which we share certain personal information as defined by applicable statute with third parties and affiliates for their own direct marketing purposes.
To receive this information, send us a request using the contact details provided in this privacy policy. Requests must include “Privacy Rights Request” in the first line of the description and include your name, street address, city, state, and ZIP code.
                       `}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Additional Disclosures for UK General Data Protection Regulation
                (UK GDPR) Compliance (UK)
              </h1>
              <div className="flex flex-col gap-5">
                <ul className="	 gap-5 flex flex-col">
                  {[
                    {
                      heah: "Data Controller / Data Processor",
                      prg: "The GDPR distinguishes between organisations that process personal information for their own purposes (known as “data controllers”) and organizations that process personal information on behalf of other organizations (known as “data processors”). For the purposes covered by this Privacy Policy, we are a Data Controller with respect to the personal information you provide to us and remain compliant with our data controller obligations under GDPR.",
                    },

                    {
                      heah: "Third-Party Provided Content",
                      prg: `We may indirectly collect personal information about you from third-parties who have your permission to share it. For example, if you purchase a product or service from a business working with us, and give your permission for us to use your details in order to complete the transaction.
                                    We may also collect publicly available information about you, such as from any social media and messaging platforms you may use. The availability of this information will depend on both the privacy policies and your own privacy settings on such platforms.`,
                    },

                    {
                      heah: "Additional Disclosure for Collection and Use of Personal Information",
                      prg: "In addition to the aforementioned purposes warranting the collection and use of personal information, we may also conduct marketing and market research activities, including how visitors use our site, website improvement opportunities and user experience.",
                    },

                    {
                      heah: "Personal Information No Longer Required for Our Purposes",
                      prg: "If your personal information is no longer required for our stated purposes, or if you instruct us under your Data Subject Rights, we will delete it or make it anonymous by removing all details that identify you (“Anonymisation”). However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.",
                    },

                    {
                      heah: "Legal Bases for Processing Your Personal Information",
                      prg: `Data Protection and Privacy Laws permit us to collect and use your personal data on a limited number of grounds. In which case, we will collect and use your personal information lawfully, fairly and in a transparent manner. We never directly market to any person(s) under 18 years of age.
                                    Our lawful bases depend on the services you use and how you use them. This is a non-exhaustive list of the lawful bases we use:`,
                    },

                    {
                      heah: "Consent From You",
                      prg: `Where you give us consent to collect and use your personal information for a specific purpose. You may withdraw your consent at any time using the facilities we provide; however this will not affect any use of your information that has already taken place. When you contact us, we assume your consent based on your positive action of contact, therefore you consent to your name and email address being used so we can respond to your enquiry.
                                    Where you agree to receive marketing communications from us, we will do so based solely on your indication of consent or until you instruct us not to, which you can do at any time.
                                    While you may request that we delete your contact details at any time, we cannot recall any email we have already sent. If you have any further enquiries about how to withdraw your consent, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.`,
                    },

                    {
                      heah: "Performance of a Contract or Transaction",
                      prg: "Where you have entered into a contract or transaction with us, or in order to take preparatory steps prior to our entering into a contract or transaction with you. For example, if you contact us with an enquiry, we may require personal information such as your name and contact details in order to respond.",
                    },

                    {
                      heah: "Our Legitimate Interests",
                      prg: "Where we assess it is necessary for our legitimate interests, such as for us to provide, operate, improve and communicate our services. We consider our legitimate interests to include research and development, understanding our audience, marketing and promoting our services, measures taken to operate our services efficiently, marketing analysis, and measures taken to protect our legal rights and interests.",
                    },

                    {
                      heah: "Compliance with Law",
                      prg: "In some cases, we may have a legal obligation to use or keep your personal information. Such cases may include (but are not limited to) court orders, criminal investigations, government requests, and regulatory obligations. For example, we are required to keep financial records for a period of 7 years. If you have any further enquiries about how we retain personal information in order to comply with the law, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.",
                    },

                    {
                      heah: "International Transfers of Personal Information",
                      prg: `The personal information we collect is stored and/or processed in the United Kingdom by us. Following an adequacy decision by the EU Commission, the UK has been granted an essentially equivalent level of protection to that guaranteed under UK GDPR.
                                    On some occasions, where we share your data with third parties, they may be based outside of the UK, or the European Economic Area (“EEA”). These countries to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information.`,
                    },
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        <b>{` ${e.heah} `}</b>
                        <br />
                        {e.prg}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p>
                If we transfer your personal information to third parties in
                other countries:
              </p>
              <ul className="list-disc	">
                {[
                  `we will perform those transfers in accordance with the requirements of the UK GDPR (Article 45) and Data Protection Act 2018;`,
                  `we will adopt appropriate safeguards for protecting the transferred data, including in transit, such as standard contractual clauses (“SCCs”) or binding corporate rules`,
                ].map((e, index) => {
                  return (
                    <li className=" " key={index}>
                      {e}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Your Rights and Controlling Your Personal Information
              </h1>
              <div className="flex flex-col gap-5">
                <ul className="	 flex flex-col gap-5">
                  {[
                    {
                      heah: "Right to Restrict Processing:",
                      prg: ` You have the right to request that we restrict the processing of your personal information if (i) you are concerned about the accuracy of your personal information; (ii) you believe your personal information has been unlawfully processed; (iii) you need us to maintain the personal information solely for the purpose of a legal claim; or (iv) we are in the process of considering your objection in relation to processing on the basis of legitimate interests.
                   Right to Object: You have the right to object to processing of your personal information that is based on our legitimate interests or public interest. If this is done, we must provide compelling legitimate grounds for the processing which overrides your interests, rights, and freedoms, in order to proceed with the processing of your personal information.`,
                    },

                    {
                      heah: "Right to be Informed:",
                      prg: " You have the right to be informed with how your data is collected, processed, shared and stored.",
                    },

                    {
                      heah: "Right of Access:",
                      prg: " You may request a copy of the personal information that we hold about you at any time by submitting a Data Subject Access Request (DSAR). The statutory deadline for fulfilling a DSAR request is 30 calendar days from our receipt of your request.",
                    },

                    {
                      heah: "Right to Erasure:",
                      prg: " In certain circumstances, you can ask for your personal data to be erased from the records held by organisations. However this is a qualified right; it is not absolute, and may only apply in certain circumstances.",
                    },
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        <b>{` ${e.heah} `}</b>
                        <br />
                        {e.prg}
                      </li>
                    );
                  })}
                </ul>

                <p>When may the right to erasure apply?</p>
                <ul className="list-disc	">
                  {[
                    "When the personal data is no longer necessary for the purpose for which it was originally collected or processed for.",
                    "If consent was the lawful basis for processing personal data and that consent has been withdrawn. NextBud relies on consent to process personal data in very few circumstances.",
                    "The Company is relying on legitimate interests as a legal basis for processing personal data and an individual has exercised the right to object and it has been determined that the Company has no overriding legitimate grounds to refuse that request.",
                    `Personal data are being processed for direct marketing purposes e.g. a person’s name and email address, and the individual objects to that processing.
                  There is legislation that requires that personal data are to be destroyed.`,
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-col gap-5">
                  <p>
                    <b>Right to Portability</b>
                    Individuals have the right to get some of their personal
                    data from an organisation in a way that is accessible and
                    machine-readable, for example as a csv file. Associated with
                    this, individuals also have the right to ask an organisation
                    to transfer their personal data to another organisation.
                    However, the right to portability:
                  </p>
                  <ul className="list-disc	">
                    {[
                      `only applies to personal data which a person has directly given to NextBud in electronic form; and`,
                      `onward transfer will only be available where this is “technically feasible”.`,
                    ].map((e, index) => {
                      return (
                        <li className=" " key={index}>
                          {e}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col gap-5">
                    <p>
                      <b>Right to Rectification</b>
                      <br />
                       If personal data is inaccurate, out of date, or
                      incomplete, individuals have the right to correct, update
                      or complete that data. Collectively this is referred to as
                      the right to rectification. Rectification may involve
                      filling the gaps i.e. to have to have incomplete personal
                      data completed – although this will depend on the purposes
                      for the processing. This may involve adding a
                      supplementary statement to the incomplete data to
                      highlight any inaccuracy or claim thereof.
                    </p>
                    <p>
                      This right only applies to an individual’s own personal
                      data; a person cannot seek the rectification of another
                      person’s information. Notification of data breaches: Upon
                      discovery of a data breach, we will investigate the
                      incident and report it to the UK’s data protection
                      regulator and yourself, if we deem it appropriate to do
                      so.
                    </p>
                  </div>
                  <p>
                    <b>Complaints</b>
                    <br />
                    You have the right, at any time, to lodge a complaint with
                    the Information Commissioner’s Office (ICO), the UK
                    supervisory authority for data protection issues
                    (www.ico.org.uk). We would, however, appreciate the chance
                    to deal with your concerns before you approach the ICO so
                    please contact us in the first instance using the details
                    below. Please provide us with as much information as you can
                    about the alleged breach. We will promptly investigate your
                    complaint and respond to you, in writing, setting out the
                    outcome of our investigation and the steps we will take to
                    deal with your complaint.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Enquiries, Reports and Escalation
              </h1>
              <div className="flex flex-col gap-5">
                <p>
                  To enquire about NextBud's privacy policy, or to report
                  violations of us information.
                </p>
                <p>
                  To enquire about NextBud's privacy policy, or to report
                  violations of user privacy, you may contact our Data
                  Protection Officer using the details in the Contact us section
                  of this privacy policy.
                </p>
                <p>
                  If we fail to resolve your concern to your satisfaction, you
                  may also contact the Information Commissioner’s Office (ICO),
                  the UK Data Protection regulator: Information Commissioner's
                  Office
                </p>
                <ul className="list-disc	">
                  {[
                    "Wycliffe House",
                    "Water Lane",
                    "Wilmslow ",
                    "Cheshire",
                    "SK9 5AF",
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <p>
                    {`
                          Tel: 0303 123 1113 (local rate)
                          `}
                  </p>
                  <p>
                    {`
                          Website: www.ico.org.uk
                          `}
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="font-nueubig">Contact Us</h1>
              <p>
                {`
                               For any questions or concerns regarding your privacy, you may contact us using the following details:
                                `}
              </p>
              <p>
                {`
                              Pearl Olubolade
                                `}
              </p>
              <Link href="/">
                {`
                             support@nextbudapp.com
                                `}
              </Link>
            </div>
          </div>

          {/* </div> */}
        </div>
      </RootLayout3>
    </div>
  );
}

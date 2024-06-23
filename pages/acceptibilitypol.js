import RootLayout3 from "@/components/Layout/wrapper/layout3";
import Link from "next/link";

export default function Tos() {
  return (
    <div className="w-full">
      <RootLayout3>
        <div className="w-full flex bg-[#F5EFFB] items-center justify-center mt-[100px] px-5 py-5 max-sm:px-3 flex-col">
          {/* <div className="w-full flex items-center justify-center p-5"> */}
          <div className="p-10 flex-col flex justify-center items-center">
            <h1 className="text-[50px] max-md:text-[30px]">
              Acceptable Use Policy
            </h1>
            <h2 className="text-[30px] max-md:text-[20px]">App NextBud</h2>
          </div>

          <div className="w-[80%] max-sm:w-[90%] bg-[white] m-5 flex flex-col mb-20 gap-10  py-10 px-10 max-sm:px-5 rounded-[40px] max-w-[1500px] rounded-lg font-nueuthin">
            <div className="flex flex-col gap-5">
              <p>
                This acceptable use policy covers the products, services, and
                technologies (collectively referred to as the "Products")
                provided by NextBud under any ongoing agreement. It’s designed
                to protect us, our customers and the general Internet community
                from unethical, irresponsible and illegal activity. NextBud
                customers found engaging in activities prohibited by this
                acceptable use policy can be liable for service suspension and
                account termination. In extreme cases, we may be legally obliged
                to report such customers to the relevant authorities.
              </p>

              <div className="flex flex-col gap-5">
                <p>This policy was last reviewed on June 2, 2024.</p>
              </div>
            </div>

            {[
              {
                head: "Affiliate Program for Influencers",
                list: [
                  `We provide our facilities with the assumption your use will be "business as usual", as per our offer schedule. If your use is considered to be excessive, then additional fees may be charged or capacity may be restricted.`,
                  `We are opposed to all forms of abuse, discrimination, rights infringement and/or any action that harms or disadvantages any group, individual or resource. We expect our customers and, where applicable, their users ("end-users") to likewise engage our Products with similar intent.`,
                ],
              },
              {
                head: "Customer accountability",
                list: [
                  `We regard our customers as being responsible for their own actions as well as for the actions of anyone using our Products with the customer’s permission. This responsibility also applies to anyone using our Products on an unauthorised basis as a result of the customer’s failure to put in place reasonable security measures.
                                By accepting Products from us, our customers agree to ensure adherence to this policy on behalf of anyone using the Products as their end users. Complaints regarding the actions of customers or their end-users will be forwarded to the nominated contact for the account in question.`,

                  `If a customer — or their end-user or anyone using our Products as a result of the customer — violates our acceptable use policy, we reserve the right to terminate any Products associated with the offending account or the account itself or take any remedial or preventative action we deem appropriate without notice. To the extent permitted by law, no credit will be available for interruptions of service resulting from any violation of our acceptable use policy.`,
                ],
              },
            ].map((ee, indexx) => {
              return (
                <div key={indexx} className="flex flex-col gap-5">
                  <h1 className="font-nueubig">{ee.head}</h1>
                  <div className="flex flex-col gap-5">
                    <ul className="c_ul flex flex-col gap-5">
                      {ee.list.map((e, index) => {
                        return (
                          <li className=" " key={index}>
                            {e}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Prohibited activity</h1>
              <h2 className="font-nueubig">
                Copyright infringement and access to unauthorised material
              </h2>
              <div className="flex flex-col gap-5">
                <p>
                  Our Products must not be used to transmit, distribute or store
                  any material in violation of any applicable law. This includes
                  but isn’t limited to:
                </p>
                <ol className="  list-roman   flex-col gap-5">
                  {[
                    `any material protected by copyright, trademark, trade secret or other intellectual property right used without proper authorization, and`,
                    `any material that is obscene, defamatory, constitutes an illegal threat or violates export control laws.`,
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ol>
                <p>
                  The customer is solely responsible for all material they
                  input, upload, disseminate, transmit, create or publish
                  through or on our Products, and for obtaining legal permission
                  to use any works included in such material.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                SPAM and unauthorised message activity
              </h1>

              <div className="flex flex-col gap-5">
                <p>
                  Our Products must not be used for the purpose of sending
                  unsolicited bulk or commercial messages in violation of the
                  laws and regulations applicable to your jurisdiction (“spam”).
                  This includes but isn’t limited to sending spam, soliciting
                  customers from spam sent from other service providers, and
                  collecting replies to spam sent from other service providers.
                </p>

                <p>
                  Our Products must not be used for the purpose of running
                  unconfirmed mailing lists or telephone number lists
                  ("messaging lists"). This includes but isn’t limited to
                  subscribing email addresses or telephone numbers to any
                  messaging list without the permission of the email address or
                  telephone number owner, and storing any email addresses or
                  telephone numbers subscribed in this way. All messaging lists
                  run on or hosted by our Products must be "confirmed opt-in".
                  Verification of the address or telephone number owner’s
                  express permission must be available for the lifespan of the
                  messaging list.
                </p>

                <p>
                  We prohibit the use of email lists, telephone number lists or
                  databases purchased from third parties intended for spam or
                  unconfirmed messaging list purposes on our Products.
                </p>

                <p>
                  This spam and unauthorised message activity policy applies to
                  messages sent using our Products, or to messages sent from any
                  network by the customer or any person on the customer’s
                  behalf, that directly or indirectly refer the recipient to a
                  site hosted via our Products.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Unethical, exploitative, and malicious activity
              </h1>

              <div className="flex flex-col gap-5">
                <p>
                  Our Products must not be used for the purpose of advertising,
                  transmitting or otherwise making available any software,
                  program, product or service designed to violate this
                  acceptable use policy, or the acceptable use policy of other
                  service providers. This includes but isn’t limited to
                  facilitating the means to send spam and the initiation of
                  network sniffing, pinging, packet spoofing, flooding,
                  mail-bombing and denial-of-service attacks.
                </p>

                <p>
                  Our Products must not be used to access any account or
                  electronic resource where the group or individual attempting
                  to gain access does not own or is not authorised to access the
                  resource (e.g. "hacking", "cracking", "phreaking", etc.).
                </p>

                <p>
                  Our Products must not be used for the purpose of intentionally
                  or recklessly introducing viruses or malicious code into our
                  Products and systems.
                </p>

                <p>
                  Our Products must not be used for purposely engaging in
                  activities designed to harass another group or individual. Our
                  definition of harassment includes but is not limited to
                  denial-of-service attacks, hate-speech, advocacy of racial or
                  ethnic intolerance, and any activity intended to threaten,
                  abuse, infringe upon the rights of or discriminate against any
                  group or individual.
                </p>

                <p>
                  Other activities considered unethical, exploitative and
                  malicious include:
                </p>
                <ol className="flex flex-col gap-5">
                  {[
                    `  Obtaining (or attempting to obtain) services from us with the intent to avoid payment;`,
                    `   Using our facilities to obtain (or attempt to obtain) services from another provider with the intent to avoid payment;`,
                    `   The unauthorised access, alteration or destruction (or any attempt thereof) of any information about our customers or end-users, by any means or device;`,
                    `  Using our facilities to interfere with the use of our facilities and network by other customers or authorised individuals;`,
                    `  Publishing or transmitting any content of links that incite violence, depict a violent act, depict child pornography or threaten anyone’s health and safety;`,
                    `   Any act or omission in violation of consumer protection laws and regulations;`,
                    `   Any violation of a person’s privacy.`,
                  ].map((e, index) => {
                    return (
                      <li className=" " key={index}>
                        {e}
                      </li>
                    );
                  })}
                </ol>
                <p>
                  Our Products may not be used by any person or entity, which is
                  involved with or suspected of involvement in activities or
                  causes relating to illegal gambling; terrorism; narcotics
                  trafficking; arms trafficking or the proliferation,
                  development, design, manufacture, production, stockpiling, or
                  use of nuclear, chemical or biological weapons, weapons of
                  mass destruction, or missiles; in each case including any
                  affiliation with others whatsoever who support the above such
                  activities or causes.{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">
                Unauthorised use of NextBud property
              </h1>
              <div className="flex flex-col gap-5">
                <p>
                  We prohibit the impersonation of NextBud, the representation
                  of a significant business relationship with NextBud, or
                  ownership of any NextBud property (including our Products and
                  brand) for the purpose of fraudulently gaining service,
                  custom, patronage or user trust.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">About this policy</h1>
              <div className="flex flex-col gap-5">
                <p>
                  This policy outlines a non-exclusive list of activities and
                  intent we deem unacceptable and incompatible with our brand.
                  We reserve the right to modify this policy at any time by
                  publishing the revised version on our app or website. The
                  revised version will be effective from the earlier of:
                </p>
                <ul className="list-disc	">
                  {[
                    `the date the customer uses our Products after we publish the revised version on our app or website; or`,
                    `30 days after we publish the revised version on our app or website. terms. `,
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

            {[
              {
                head: "Automatic Updates",
                list: [
                  ` You give us permission to download and install updates to NextBud on your device in accordance with your privacy preferences. This permission can be revoked at any time by deleting NextBud from your device.`,
                ],
              },
              {
                head: "Accuracy of Materials",
                list: [
                  `NextBud offers a platform for users to discover and participate in events within their local community. While we strive to provide accurate listings, the materials available on NextBud, including event details, are not comprehensive and are for general information purposes only. We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our platform, or otherwise relating to such materials or on any resources linked to NextBud.`,

                  `The information available through NextBud, including but not limited to responses from the "Ask Buddy" feature, is intended for general informational purposes and does not constitute professional legal, medical, financial, or other expert advice. You should not rely solely on this information to make important decisions. We strongly encourage you to consult with qualified professionals in the relevant fields before taking any actions based on information obtained from the platform. Users are advised to take appropriate safety precautions when participating in events and to prioritise their personal safety at all times.`,

                  `NextBud expressly disclaims all liability for the accuracy, completeness, or reliability of any content provided by users of the site. We do not guarantee that material on our site is up-to-date or that access to the site will be uninterrupted. Material on the site is not intended to constitute advice on which you should rely. We exclude all legal responsibility for reliance placed on the site by anyone, as well as for any damage or losses suffered due to reliance on the accuracy, availability, or continuity of the site.`,
                  `We reserve the right to change the information on our app without prior notice. Users are responsible for monitoring these changes to ensure they remain informed about current terms and available information.`,
                ],
              },
              {
                head: "Additional Tools",
                list: [
                  `Please note that our app may include third-party tools which are outside of our control. The access to said tools is provided on an 'as is' basis with no warranties, expressed or implied, and without any endorsement. We are not liable for the use of the third-party tools provided on our app. You are solely responsible for any risks associated with using said tools, we recommend reading the relevant third-party provider’s Terms of Service. NextBud has the right to offer new third-party tools in the future.`,
                ],
              },
              {
                head: "Links",
                list: [
                  `NextBud has not reviewed all of the sites linked to NextBud or on its corresponding website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval or control by NextBud of the site. Use of any such linked website is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.`,
                ],
              },
              {
                head: "Inaccuracies and Mistakes",
                list: [
                  `Please note that any content available on our app may contain typographical errors, inaccuracies, or mistakes related to the service’s description, pricing, promotion, and availability. We have the right to cancel or update any existing services should any information provided by us be proven inaccurate. Said information can be amended at any time without prior notice. Please note that we are not obligated to clarify any of the information related to our service, including pricing information, except as required by law.`,
                ],
              },
              {
                head: "Service Availability",
                list: [
                  `Please be aware that NextBud, while generally accessible, may have periods of unavailability. We reserve the right to disable the service from time to time to perform necessary tasks such as scheduled backups, maintenance, or system upgrades, aimed at enhancing your user experience and ensuring the optimal performance of the app.`,

                  `Although we strive to notify our users in advance of any substantial downtime, please understand that some situations may necessitate urgent maintenance. In such extreme cases, we may need to disable the service immediately and without prior notice. We appreciate your understanding and patience during these periods, as we work diligently to ensure the consistent quality and reliability of NextBud. `,
                ],
              },
              {
                head: "Notice regarding Apple",
                list: [
                  `To the extent that you are using or accessing NextBud on an iOS device, you acknowledge and agree to the terms of this clause. You acknowledge that these Terms of Service are between you and NextBud only, not with Apple Inc. (Apple), and Apple is not responsible for NextBud and any materials available in NextBud.`,
                  `Apple has no obligation to furnish you with any maintenance and support services with respect to NextBud.`,

                  `If NextBud fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price of the mobile application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to NextBud and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be our responsibility.`,

                  `Apple is not responsible for addressing any claims by you or any third party relating to NextBud or your use of NextBud, including but not limited to 
                                (1) product liability claims; 
                                (2) any claim that our mobile application fails to conform to any applicable legal or regulatory requirement; and (3) claims arising under consumer protection or similar legislation.`,

                  `Apple is not responsible for the investigation, defence, settlement and discharge of any third-party claim that our mobile application infringes that third party’s intellectual property rights.`,

                  `You agree to comply with any applicable third-party terms when using NextBud, including any Usage Rules set forth in the Apple App Store Agreement of Service.
                                Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms of Service and, upon your acceptance of these Terms of Service, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms of Service against you as a third-party beneficiary of these Terms of Service.`,

                  `You hereby represent and warrant that (1) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a 'terrorist supporting' country; and (2) you are not listed on any U.S. Government list of prohibited or restricted parties.`,
                ],
              },
              {
                head: "Indemnification",
                list: [
                  `You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your contributions; (2) use of the app; (3) breach of these Terms of Service; (4) any breach of your representations and warranties set forth in these Terms of Service; or (5) your violation of the rights of a third party, including but not limited to intellectual property rights.`,

                  `Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.`,
                ],
              },
              {
                head: "Right to Terminate",
                list: [
                  ` NextBud reserves the right to terminate or suspend your account and access to the platform at any time, without notice, for any reason, including, but not limited to, breach of these Terms of Service. Upon termination, your right to use NextBud ceases immediately, and your account may be deactivated or deleted. You must cease all use of the platform and its services and destroy any materials downloaded or otherwise obtained from NextBud`,
                ],
              },

              {
                head: "Severance",
                list: [
                  `Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.
                               `,
                ],
              },
              {
                head: "Entire Agreement",
                list: [
                  `These Terms of Service and any policies or operating rules posted by us on the website or with respect to the website or app constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.`,

                  ` If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Service or use of the app. You agree that these Terms of Service will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Terms of Service and the lack of signing by the parties hereto to execute these Terms of Service`,
                ],
              },
              {
                head: "Governing Law",
                list: [
                  `These Terms of Service and any non-contractual obligations arising from or connected with them shall be governed by and construed in accordance with the law of England and Wales. This means that any matter or dispute arising out of or in connection with these Terms of Service shall be subject to the jurisdiction of the courts of England and Wales.`,
                ],
              },
              {
                head: "Dispute Resolution",
                list: [
                  `If you have any complaints or issues with the service provided by NextBud, please contact our customer support team first to seek resolution. If the issue cannot be resolved at this level, and if informal negotiations do not yield a solution, you may initiate formal dispute resolution.
                               We encourage the use of mediation to resolve disputes amicably. Either party may request that the dispute be moved to structured negotiations with the assistance of a fully accredited mediator before resorting to litigation. Should mediation fail to resolve the dispute, you have the right to pursue legal action. Detailed procedures and contact information for the mediation body or ombudsman, where applicable, will be provided to assist you in the resolution process.`,
                ],
              },
            ].map((ee, indexx) => {
              return (
                <div key={indexx} className="flex flex-col gap-5">
                  <h1 className="font-nueubig">{ee.head}</h1>
                  <div className="flex flex-col gap-5">
                    <ul className="c_ul flex flex-col gap-5">
                      {ee.list.map((e, index) => {
                        return (
                          <li className=" " key={index}>
                            {e}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col gap-5">
              <h1 className="font-nueubig">Limitations of Use</h1>
              <div className="flex flex-col gap-5">
                <p>
                  By using NextBud and our website, you warrant on behalf of
                  yourself, any entity who you represent who has entered into
                  these Terms of Service, and your users that you will not:
                </p>
                <ul className="list-disc	">
                  {[
                    "modify, copy, prepare derivative works of, decompile, or reverse engineer NextBud or any materials and software contained within NextBud or on our website;",
                    "remove any copyright or other proprietary notations from NextBud or any materials and software contained within NextBud or on our website;",
                    'transfer NextBud or any of its associated materials to another person or "mirror" the materials on any other server;',
                    `knowingly or negligently use NextBud or any of its associated services in a way that abuses or disrupts our networks or any other service NextBud provides;`,
                    "use NextBud or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;",
                    "use NextBud or its associated services in violation of any applicable laws or regulations;",
                    "use NextBud to send unauthorised advertising or spam;",
                    "harvest, collect, or gather user data without the user’s consent; or",
                    "use NextBud or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties",
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
          </div>

          {/* </div> */}
        </div>
      </RootLayout3>
    </div>
  );
}

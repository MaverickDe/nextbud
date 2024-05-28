



// export const ENVIRONMENT = "development"
export const ENVIRONMENT = "production"
export const DOMAIN = ENVIRONMENT =="production"? "https://shabeetask.com": "http://localhost:3000"
export const SERVERDOMAIN = ENVIRONMENT =="production"? "https://shabeetaskbackend.onrender.com": "http://localhost:5000"
// export const SERVERDOMAIN = "http://localhost:5000"
// export const DOMAIN = "https://shabbetaskfrontend.vercel.app/"
// export const SERVERDOMAIN = "https://shabeetaskbackend.onrender.com"
export const SERVERLOGINURL = `${SERVERDOMAIN}/user/login`
export const SERVERLOGINURL2 = `${SERVERDOMAIN}/admin/login`
export const USERPROFILEURL = `${SERVERDOMAIN}/user/profile`
export const GETTASKSURL = `${SERVERDOMAIN}/user/gettask`
export const GETTASKSURL2 = `${SERVERDOMAIN}/admin/gettask`
export const GETWALLETURL = `${SERVERDOMAIN}/user/getwallet`
export const GETCONVERSIONRATEURL = `${SERVERDOMAIN}/conversionrate`
export const GETPLATFORMURL = `${SERVERDOMAIN}/platform`
export const GETTASKURL = `${SERVERDOMAIN}//login`
export const GETUSERSURL = `${SERVERDOMAIN}/admin/users`
export const GETTASKUSERSURL = `${SERVERDOMAIN}/admin/taskusers`
export const GETTASKUSERSFILTERURL = `${SERVERDOMAIN}/admin/taskusersfilter`
export const GETUSERSFILTERURL = `${SERVERDOMAIN}/admin/usersfilter`
export const GETTASK2FILTERURL = `${SERVERDOMAIN}/admin/gettaskfilter`
export const GETTASKFILTERURL = `${SERVERDOMAIN}/user/gettaskfilter`
export const GETUSERURL = `${SERVERDOMAIN}/getuser`
export const GETUSERINFOURL = `${SERVERDOMAIN}/admin/usersprofile`
// export const GETMYUSERINFOURL = `${SERVERDOMAIN}/user/userprofile`
export const GETUSERREFERALCOUNTURL = `${SERVERDOMAIN}/admin/userreferalcount`
export const GETCOUNTUSERSURL = `${SERVERDOMAIN}/admin/countusers`
export const GETCOUNTTASKURL = `${SERVERDOMAIN}/admin/counttask`
export const GETCOUNTTASKURL2 = `${SERVERDOMAIN}/user/counttask`
export const GETCOUNTUSERTASKURL = `${SERVERDOMAIN}/user/counttask`
export const GETUSERTASKURL = `${SERVERDOMAIN}/user/mytask`
export const GETUSERSAVETASKURL = `${SERVERDOMAIN}/user/mysavedtask`
export const GETUSERTASKURL2 = `${SERVERDOMAIN}/admin/getusertask`
export const USERPROFILEURL2 = `${SERVERDOMAIN}/admin/login`
export const DELETEUSERURL = `${SERVERDOMAIN}/admin/deleteuser`
export const RESTRICTUSERURL = `${SERVERDOMAIN}/admin/restrictuser`
export const UNRESTRICTUSERURL = `${SERVERDOMAIN}/admin/unrestrictuser`
export const SERVERSIGNUPURL = `${SERVERDOMAIN}/user/signup`
export const SERVEROTPURL = `${SERVERDOMAIN}/otp`
export const LOGOUTURL = `${SERVERDOMAIN}/logout`
export const DELETETASKURL = (id)=>`${SERVERDOMAIN}/admin/deletetask/?id=${id}`
export const DELETEADMINURL = (id)=>`${SERVERDOMAIN}/admin/deleteadmin/?userId=${id}`
export const GETADMINSURL =`${SERVERDOMAIN}/admin/getadmins`
export const RESTRICTADMINURL = (id)=>`${SERVERDOMAIN}/admin/restrictadmin/?userId=${id}`
export const UNRESTRICTADMINURL = (id)=>`${SERVERDOMAIN}/admin/unrestrictadmin/?userId=${id}`
export const DELETECURRENCYURL = (id)=>`${SERVERDOMAIN}/admin/deletecurrency/?id=${id}`
export const DELETEUSERTASKURL = (userId,taskId)=>`${SERVERDOMAIN}/admin/deleteusertask/?userId=${userId}&taskId=${taskId}`
export const CREATETASKURL = `${SERVERDOMAIN}/admin/createtask`
export const CREATEADMINURL = `${SERVERDOMAIN}/admin/createadmin`
export const EDITTASKURL = (id)=>`${SERVERDOMAIN}/admin/edittask/?id=${id}`
export const GETWITHDRAWALURL = `${SERVERDOMAIN}/admin/withdrawal`
export const GETCOMPLETEDWITHDRAWALURL = `${SERVERDOMAIN}/admin/completedwithdrawal`
export const GETCOMPLETEDWITHDRAWAFILTERLURL = `${SERVERDOMAIN}/admin/completedwithdrawalfilter`
export const GETUSERWITHDRAWALURL = `${SERVERDOMAIN}/admin/userwithdrawal`
export const GETWITHDRAWALCOUNTURL = `${SERVERDOMAIN}/admin/withdrawalcount`
export const GETPAYOUTURL = `${SERVERDOMAIN}/admin/totalpayout`
export const WITHDRAWALURL = `${SERVERDOMAIN}/user/withdraw`
export const SUBMITTASKURL = `${SERVERDOMAIN}/user/submittask`
export const WITHDRAWAL2URL = `${SERVERDOMAIN}/user/refwithdraw`
export const GETREFERALURL = `${SERVERDOMAIN}/user/referalwallet`
export const PROFILESETTINGURL = `${SERVERDOMAIN}/user/profilesetting`
export const WITHDRAWALAPPROVEURL = `${SERVERDOMAIN}/admin/withdrawalapprove`
export const WITHDRAWALREVERSE_FAILEDURL = `${SERVERDOMAIN}/admin/withdrawalreversetofailed`
export const WITHDRAWALREVERSE_PENDINGURL = `${SERVERDOMAIN}/admin/withdrawalreversetopending`
export const WITHDRAWALREVERSE_SUCCESSURL = `${SERVERDOMAIN}/admin/withdrawalreversetosuccess`
export const WITHDRAWALREJECTURL = `${SERVERDOMAIN}/admin/withdrawalreject`
export const SERVERRSETPASSWORDURL = `${SERVERDOMAIN}/resetpassword`
export const ADDCURRENCYURL = `${SERVERDOMAIN}/admin/addcurrency`
export const ADDBANKURL = `${SERVERDOMAIN}/user/addbank`
export const SETUSERBALANCEURL = `${SERVERDOMAIN}/admin/setbalance`

export const UPLOADMEMOURL = `${SERVERDOMAIN}/admin/addmemo`
export const GETMEMOURL = `${SERVERDOMAIN}/admin/getmemo`
export const GETMEMOURL2 = `${SERVERDOMAIN}/user/getmemo`
export const DELETEMEMOURL = `${SERVERDOMAIN}/admin/deletememo`
export const GETUSERREFERALURL = `${SERVERDOMAIN}/admin/userreferal`
export const GETREFERERURL = `${SERVERDOMAIN}/admin/getreferer`


export const MINWITHDRWAL = 2000
export const MINAIRTIMEWITHDRWAL = 500
export const MINWITHDRWALWALLETBALANCE = 3000
// export const MINWITHDRWALWALLETBALANCE = 2000



export const WEBTITLE = "SHABEETASK"
export const WEBCONTACT = "+2347043150165"
export const WEBINSTAURL = `https://www.instagram.com/shabee_task?igsh=MzRlODBiNWFlZA==`
export const WEBFACEBOOKPAGEURL = `https://www.facebook.com/profile.php?id=100086221195436`
export const WEBFACEBOOKGROUPURL = `https://facebook.com/groups/198333706367356/`
export const WEBTELEGRAMURL = `https://t.me/shabeetask`
export const WEBTITLE2 = "SHABEE TASK"
export const GETPASSWORDOTPURL = `${SERVERDOMAIN}/passwordgetotp`
export const RESETPASSWORDURL = `${SERVERDOMAIN}/passwordreset`
export const AIRTIMES = ["MTN","AIRTEL","GLO","ETISALAT"]

export const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, Democratic Republic of the", code: "CD" },
    { name: "Costa Rica", code: "CR" },
    { name: "Côte d'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, Democratic People's Republic of", code: "KP" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People's Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Vatican City", code: "VA" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
  ];
  
  // Example usage:

  

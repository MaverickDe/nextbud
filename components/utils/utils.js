
import  crypto from "crypto";
export let setErrorHelper = (message) => {
    let div = document.querySelector(".err")
    div.querySelector("div").textContent = message
    div.classList.remove("hidden") 
   setTimeout(() => {
                     
        div.classList.add("hidden") 
        div.querySelector("div").textContent = ""
      
    },3000)
 
  
    
}

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}


export function checkScrollBar(element, dir) { 
  dir = (dir === 'vertical') ? 
              'scrollTop' : 'scrollLeft'; 
   
  let res = !! element[dir]; 
   
  if (!res) { 
      element[dir] = 1; 
      res = !!element[dir]; 
      element[dir] = 0; 
  } 
  return res; 
} 

export function checkScrollBar2(element, dir) { 
  return element.scrollHeight > element.clientHeight;
} 

export let fetch_ = (url, options) => {
    let headers ={}
    if (options.headers) {
        headers ={...options.headers}
    }
    return fetch(url, {
        ...options,
        headers: {
           ...headers,
            ...{ Authorization: `Bearer ${getCookie("auth2")}` }
        }
    
    })
    
}


export let splitnum = (b) => {
  
    let c = b.toString().split("").reverse().reduce((total, acc) => {
      if (total[total.length-1]) {
        if (total[total.length - 1].length >= 3) {
          // total[total.length-1] =total[total.length-1].split("").reverse().join("")
         total.push(acc)
       } else {
        total[total.length-1]=total[total.length-1].concat(acc) 
       }
        
      } else {
        total.push(acc)
        
      }
    
      return total
      
    }, [])
    return c.map(e=>e.split("").reverse().join("")).reverse().join(",")
}


export let getdate = (date) => {


  let date_ = new Date(date)
  let now = new Date()


  let year1 =now.getFullYear()
  let year2 = date_.getFullYear()
  
  let y =year1 - year2
  if ( year1 > year2 ) {
      return (`${y} ${y>1?"years":"year"} ago`)
  }
  
  
  let month1 =now.getMonth()
  let month2 = date_.getMonth()
  
  let m =month1 - month2
  if ( month1 > month2 ) {
      return (`${m} ${m>1?"months":"month"} ago`)
  }
  
  let day1 =now.getDate()
  let day2 = date_.getDate()
  let d =day1 - day2
  
  if ( day1 > day2 ) {
      return (`${d} ${d>1?"days":"day"} ago` )
  }
  let hour1 =now.getHours()
  let hour2 = date_.getHours()
  let h = hour1 - hour2
  
  if ( hour1 > hour2 ) {
      return (`${h} ${h>1?"hrs":"hr"} ago` )
  }
  let min1 =now.getMinutes()
  let min2 = date_.getMinutes()
  let mi = min1 - min2
  
  if ( min1 > min2 ) {
      return (`${mi} ${mi>1?"mins":"min"} ago` )
  }
  let sec1 =now.getSeconds()
  let sec2 = date_.getSeconds()
  let s = sec1 - sec2
  if ( sec1 > sec2 ) {
      return (`${s} ${s>1?"secs":"sec"} ago` )
  }

  else {
      
      return date_.toLocaleDateString()

  }
      

  



}

export const randomId = (num = 20) => {
    return crypto.randomBytes(num).toString("hex");
  };
  

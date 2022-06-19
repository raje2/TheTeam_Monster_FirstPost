let getResult  = async (value,api)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${api}`);
    let data = await res.json();
    return data;
}
let append = (data, container, topic)=>{
  data.forEach((el)=>{
      let div2 = document.createElement("div");
      div2.id="box2";
       
      let div1 = document.createElement("div");
      div1.id="box1";

    //   let head_main = document.createElement("h1");
    //   head_main.innerText="TRENDING NEWS";
    //   head_main.id="head_main";


      let A = document.createElement("a");
      A.target='_blank';
      A.href=el.url;

      let img = document.createElement("img");
      img.src=el.urlToImage;
      img.id="poster";
      A.append(img)
      
      let tag = document.createElement("p");
      tag.innerText=topic;
      tag.id="tag";
       
      let line = document.createElement("div");
      line.id="linex";

      let h3 = document.createElement("h3");
      h3.innerText=el.title;
      h3.id="heading"

      let p = document.createElement("p");
      p.innerText=el.description;
      p.id="des";

      container.append(div1, div2);
      div1.append(A);
      div2.append(tag,line, h3,p);
  })
}
let getResult2  = async (value,api)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${api}`);
    let data = await res.json();
    return data;
}
let append3 = (data, container, topic)=>{
  data.forEach((el)=>{
      let div2 = document.createElement("div");
      div2.id="box2";
       
      let div1 = document.createElement("div");
      div1.id="box1";

      let A = document.createElement("a");
      A.target='_blank';
      A.href=el.url;

      let img = document.createElement("img");
      img.src=el.urlToImage;
      img.id="poster";
      A.append(img);
       
      let tag = document.createElement("p");
      tag.innerText=topic;
      tag.id="tag";
       
      let line = document.createElement("div");
      line.id="linex";

      let h3 = document.createElement("h3");
      h3.innerText=el.title;
      h3.id="heading"

      let p = document.createElement("p");
      p.innerText=el.description;
      p.id="des";

      container.append(div1, div2);
      div1.append(A);
      div2.append(tag, line, h3, p);
  })
}


export {getResult,append, getResult2, append3};



let getValue  = async (api)=>{
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`);
    let data = await res.json();
    return data;
}
let append2 = (data, container)=>{
    data.forEach((el)=>{
        let div2 = document.createElement("div");
        div2.id="box2";
         
        let div1 = document.createElement("div");
        div1.id="box1";

        let A = document.createElement("a");
        A.target='_blank';
        A.href=el.url;
  
        let img = document.createElement("img");
        img.src=el.urlToImage;
        img.id="poster";
        A.append(img);
         
        let h3 = document.createElement("h3");
        h3.innerText=el.title;
        h3.id="heading"
  
        let p = document.createElement("p");
        p.innerText=el.description;
        p.id="des";
  
        container.append(div1, div2);
        div1.append(A);
        div2.append(h3,p);
    })
  }
  export {getValue,append2};




let getValue2  = async (api)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=india&pageSize=5&apiKey=${api}`);
    let data = await res.json();
    return data;
}

let append4 = (data, container)=>{
    data.forEach((el)=>{
        let div2 = document.createElement("div");
        div2.id="box_right";
         
        // let div1 = document.createElement("div");
        // div1.id="box1";
//   
        // let img = document.createElement("img");
        // img.src=el.urlToImage;
        // img.id="poster_right";
         
        let A = document.createElement("a");
        A.target='_blank';
        A.href=el.url;
        A.append(div2);

        let h3 = document.createElement("h3");
        h3.innerText=el.title;
        h3.id="heading_right"
        
  
        let p = document.createElement("p");
        p.innerText=el.description;
        p.id="des_right";
  
        container.append( div2);
        // div1.append(img);
        div2.append(h3,p);
    })
  }
export {getValue2, append4};


let slidedata=async(api_key)=>{

  let url=`https://newsapi.org/v2/everything?q=world&apiKey=${api_key}`

  let res=await fetch(url)
     
  let deta= await res.json()
   
   return deta.articles
   
}

export {slidedata};



let getSearch  = async (value,api)=>{
  let res = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${api}`);
  let data = await res.json();
  return data;
}
let appendSearch = (data, container, topic)=>{
data.forEach((el)=>{
    let div2 = document.createElement("div");
    div2.id="box2";
     
    let div1 = document.createElement("div");
    div1.id="box1";

  //   let head_main = document.createElement("h1");
  //   head_main.innerText="TRENDING NEWS";
  //   head_main.id="head_main";


    let A = document.createElement("a");
    A.target='_blank';
    A.href=el.url;

    let img = document.createElement("img");
    img.src=el.urlToImage;
    img.id="poster";
    A.append(img)
    
    let tag = document.createElement("p");
    tag.innerText=topic;
    tag.id="tag";
     
    let line = document.createElement("div");
    line.id="linex";

    let h3 = document.createElement("h3");
    h3.innerText=el.title;
    h3.id="heading"

    let p = document.createElement("p");
    p.innerText=el.description;
    p.id="des";

    container.append(div1, div2);
    div1.append(A);
    div2.append(tag,line, h3,p);
})
}
export {getSearch, appendSearch};




// side bar function start here ..


let sideSearch  = async (value,api)=>{
  let res = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${api}`);
  let data = await res.json();
  return data;
}
let appendSide = (data, container, topic)=>{
data.forEach((el)=>{
    let div2 = document.createElement("div");
    div2.id="box2";
     
    let div1 = document.createElement("div");
    div1.id="box1";

  //   let head_main = document.createElement("h1");
  //   head_main.innerText="TRENDING NEWS";
  //   head_main.id="head_main";


    let A = document.createElement("a");
    A.target='_blank';
    A.href=el.url;

    let img = document.createElement("img");
    img.src=el.urlToImage;
    img.id="poster";
    A.append(img)
    
    let tag = document.createElement("p");
    tag.innerText=topic;
    tag.id="tag";
     
    let line = document.createElement("div");
    line.id="linex";

    let h3 = document.createElement("h3");
    h3.innerText=el.title;
    h3.id="heading"

    let p = document.createElement("p");
    p.innerText=el.description;
    p.id="des";

    container.append(div1, div2);
    div1.append(A);
    div2.append(tag,line, h3,p);
})
}
export {sideSearch, appendSide};
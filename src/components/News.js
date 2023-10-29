import React, { useEffect, useState } from 'react'

export default function News(props) {
  const[data,setData]=useState([]);
  const getData= async()=>{
    let API=`https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
    const response=await fetch(API);
    console.log(response)
    const temp=await response.json();
    setData(temp.articles);
    console.log(data)
  }
  
  
  useEffect(()=>{getData();},[props.category]);
  
  return (
    <div style={{backgroundColor:"#FFFDD0"}}>
    <div className="container">
      <h3 className='pt-5'>Top Headlines</h3>
      
      <div className="row">
      {data.map((currdata)=>{return(
        <div key={currdata.url}  className="col-12 col-md-4 mt-3"> 
      
      
      <div className="card" style={{width: "5 rem"}}>
  <img src={currdata.urlToImage?currdata.urlToImage:"components/images.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{currdata.title&&currdata.title.length>79?currdata.title.slice(0,79)+"...":currdata.title}</h5>
    <p className="card-text">{currdata.description&&currdata.description.length>153?currdata.description.slice(0,153)+"...":currdata.description}</p>
    <a href={currdata.url} className="btn btn-primary">Read more</a>
  </div>
</div>

</div>

)})}
</div>


</div>
    </div>
  )
}


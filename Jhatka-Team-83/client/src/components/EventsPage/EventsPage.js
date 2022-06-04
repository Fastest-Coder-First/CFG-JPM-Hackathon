// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import React, { Component,useState,useEffect } from "react";
import {db} from '../../firebase-config';
import {collection,getDocs} from "firebase/firestore";
const EventsPage = () => {

  

  // const articles = [
  //   {
  //     albumId: 1,
  //     id: 1,
  //     title: "accusamus beatae ad facilis cum similique qui sunt",
  //     url: "https://via.placeholder.com/600/92c952",
  //     thumbnailUrl: "https://via.placeholder.com/150/92c952"
  //   },
  //   {
  //     albumId: 1,
  //     id: 2,
  //     title: "reprehenderit est deserunt velit ipsam",
  //     url: "https://via.placeholder.com/600/771796",
  //     thumbnailUrl: "https://via.placeholder.com/150/771796"
  //   },
  //   {
  //     albumId: 1,
  //     id: 3,
  //     title: "officia porro iure quia iusto qui ipsa ut modi",
  //     url: "https://via.placeholder.com/600/24f355",
  //     thumbnailUrl: "https://via.placeholder.com/150/24f355"
  //   },
  //   {
  //     albumId: 1,
  //     id: 4,
  //     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  //     url: "https://via.placeholder.com/600/d32776",
  //     thumbnailUrl: "https://via.placeholder.com/150/d32776"
  //   },
  //   {
  //     albumId: 1,
  //     id: 5,
  //     title: "natus nisi omnis corporis facere molestiae rerum in",
  //     url: "https://via.placeholder.com/600/f66b97",
  //     thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  //   }
  // ]
  const [articles, setArticles] = useState([]);
  const eventsref=collection(db,"Events");
  useEffect(()=>{
    const getEvents=async()=>{
      const data=await getDocs(eventsref);
      setArticles(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };
    getEvents();
  },[])
  return (
    <Container fluid>
      <h2 className="text-center m-2">Events</h2>
      <Row>
        {
          articles.map(article => (
            <Col sm={12} md={6} lg={4} className="p-2" key={article.id}>
              <div className="card h-100 m-2 shadow mb-5 bg-light rounded">
              <img src={article.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-header fw-bold">
                  {article.title}
                </div>
                <div className="card-body">
                  {article.Summary}
                </div>
                <div>
                  <button className="btn btn-danger m-2">Read more</button>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default EventsPage

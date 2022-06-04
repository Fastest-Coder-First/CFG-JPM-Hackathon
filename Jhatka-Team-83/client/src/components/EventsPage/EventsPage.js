import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const EventsPage = () => {

  // const articles = [
  //   {
  //     source: { id: "news24", name: "News24" },
  //     author: "Sibusiso Mjikeliso",
  //     title:
  //       "Demand Ministry of Social Justice and Empowerment to roll back new revisions to the National Overseas Scholarship scheme",
  //     description:
  //       "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
  //     url: "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
  //     urlToImage:
  //       "https://ps-attachments.s3.amazonaws.com/cc810a17-c903-405a-b914-be7622637dc2/ixTAUT5DNBKQzZaBAixIkA.jpg",
  //     publishedAt: "2021-08-26T11:40:16+00:00",
  //     content:
  //       '<ul><li>Cricket South Africa has committed to "getting to the bottom" of Enoch Nkwe\'s sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]',
  //   },
  //   {
  //     source: { id: "abc-news-au", name: "ABC News (AU)" },
  //     author: "ABC News",
  //     title: "England cricket great Ted Dexter dies aged 86",
  //     description:
  //       'The former England captain, nicknamed "Lord Ted", is fondly remembered as a giant of the game and one of his country\'s greatest players.',
  //     url: "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
  //     urlToImage:
  //       "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
  //     publishedAt: "2021-08-26T09:07:52Z",
  //     content:
  //       "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]",
  //   },
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  const articles = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    }
  ]

  return (
    <Container fluid>
      <h2 className="text-center m-2">Events</h2>
      <Row>
        {
          articles.map(article => (
            <Col sm={12} md={6} lg={4} className="p-2" key={article.id}>
              <div className="card h-100 m-2 shadow mb-5 bg-light rounded">
                <div className="card-header">
                  {article.title}
                </div>
                <div className="card-body">
                  {article.url}
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

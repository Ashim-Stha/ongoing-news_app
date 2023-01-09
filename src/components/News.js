import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
   articles =  [
    {
      "source": { "id": "talksport", "name": "TalkSport" },
      "author": "Jake Lambourne",
      "title": "‘I don’t expect it to be a busy January’ – Manchester United director of football John Murtough reveals clu...",
      "description": "",
      "url": "https://talksport.com/football/1296836/man-uts-quiet-january-transfer-window-john-murtough/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/01/b6731274-3a0a-4557-965f-0f081dd54b3b-1.jpg?strip=all&quality=100&w=758&h=959&crop=1",
      "publishedAt": "2023-01-08T15:32:28Z",
      "content": "Manchester United fans have been told to expect a quiet January transfer window with the club already ‘planning for next summer’.\r\nDirector of football John Murtough says he doesn’t expect the club w… [+2586 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": null,
      "title": "Laura Ingraham abruptly ends interview on football safety after guest criticizes Fox News",
      "description": "When Laura Ingraham interviewed Steve Almond about NFL player safety after Damar Hamlin, he called out for Fox News for fear mongering, scandals.",
      "url": "https://www.usatoday.com/story/entertainment/tv/2023/01/06/laura-ingraham-ends-interview-steve-almond-fox-news/11000765002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2019/04/16/USAT/1165f563-3d8a-4194-8ac2-503e4233ba7c-VPCLIFE_RAP_VS_INGRAHAM_GETTY_WIDE.jpg?crop=1919,1079,x0,y0&width=1919&height=1079&format=pjpg&auto=webp",
      "publishedAt": "2023-01-08T14:32:15+00:00",
      "content": "Fox News' Laura Ingraham abruptly ended an interview on her show with activist and author Steve Almond after he called out the station for fear mongering and other controversial issues.\r\nAlmond, who … [+3120 chars]"
    },
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": "Bryan Fischer",
      "title": "College Football Playoff national championship: Top matchups to watch",
      "description": "These are the individual matchups that will have a crucial impact on Monday's College Football Playoff Championship Game.",
      "url": "http://www.foxsports.com/stories/college-football/college-football-playoff-national-championship-top-matchups-to-watch",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/01/1408/814/01.06.23_Top4MatchupsCFPTitle_Horizontal.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-07T14:54:42Z",
      "content": "LOS ANGELES It all comes down to this. One game, for it all.\r\nIts taken a long slog from August camp, some wild upsets along the way and a pair of incredible semifinals, but we have arrived at the na… [+10177 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": "BR NFL Scouting Department",
      "title": "2023 NFL Draft Big Board: B/R NFL Scouting Dept.'s End-of-Season Top 150",
      "description": "Stars aligned and shone brightly on college football's biggest stage.<br>The likes of Alabama's Bryce Young, Ohio State's C.J. Stroud and TCU's Quentin...",
      "url": "https://bleacherreport.com/articles/10060471-2023-nfl-draft-big-board-br-nfl-scouting-depts-end-of-season-top-150",
      "urlToImage": "https://media.bleacherreport.com/image/upload/x_3,y_99,w_1499,h_998,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/vhedg9xvsbckav1jnsij.jpg",
      "publishedAt": "2023-01-06T13:16:49Z",
      "content": "Ohio State QB C.J. StroudTodd Kirkland/Getty Images\r\nTies in grades were broken through roundtable discussions among the four scouts.\r\n1. Will Anderson Jr., Edge, Alabama (9.6)\r\n2. Jalen Carter, DL, … [+5912 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]
  constructor(){
    super();
    console.log('hello');
    this.state = {
     articles : this.articles,
     loading : false
    }
  }
  render() {
    return (
      <div className='container'>
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-3"> <Newsitem title="mytitle" description="mydesc" imgurl="https://talksport.com/football/1296836/man-uts-quiet-january-transfer-window-john-murtough"/></div>
          <div className="col-md-3"> <Newsitem title="mytitle" description="mydesc"/></div>
          <div className="col-md-3"> <Newsitem title="mytitle" description="mydesc"/></div>
       
       
        </div>
      </div>
    )
  }
}

export default News

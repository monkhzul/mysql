import "../css/info.css";
import "../css/App.css";
import { Container, Col, Row } from "react-bootstrap";

function InfoPanelComponent() {
  return (
    <div className="InfoPanel">
      <Container>
        <div className="infoBox">
          <Row>
            <Col className="info-col" md={4} lg={4}>
              <div className="col-4">
                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.400391"
                    width="60"
                    height="60"
                    rx="10"
                    fill="#FFD7BF"
                    fillOpacity="0.28"
                  />
                  <path
                    d="M30.5 15.6191C22.4727 15.6191 15.9688 22.123 15.9688 30.1504C15.9688 38.1777 22.4727 44.6816 30.5 44.6816C38.5273 44.6816 45.0312 38.1777 45.0312 30.1504C45.0312 22.123 38.5273 15.6191 30.5 15.6191ZM43.1562 30.1504C43.1562 37.123 37.4727 42.8066 30.5 42.8066C23.5273 42.8066 17.8438 37.1816 17.8438 30.1504C17.8438 23.2363 23.4688 17.4941 30.5 17.4941C37.4141 17.4941 43.1562 23.1777 43.1562 30.1504ZM34.4258 35.3652C34.7188 35.5996 35.1875 35.4824 35.3633 35.1895L35.8906 34.5449C36.125 34.1934 36.0078 33.7832 35.7148 33.5488L31.6133 30.5605V21.9473C31.6133 21.5957 31.2617 21.2441 30.9102 21.2441H30.0898C29.6797 21.2441 29.3867 21.5957 29.3867 21.9473V31.3223C29.3867 31.5566 29.4453 31.7324 29.6211 31.9082L34.4258 35.3652Z"
                    fill="#FF7800"
                  />
                </svg>
              </div>
              <div className="info-text col-9">
                <h1>Шуурхай хүргэлт</h1>
                <p>30 минутанд таны гарт.</p>
              </div>
            </Col>
            <Col className="info-col" md={4} lg={4}>
              <div className="col-4 urgun">
                <svg
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.400391"
                    width="60"
                    height="60"
                    rx="10"
                    fill="#FFD7BF"
                    fillOpacity="0.28"
                  />
                  <path
                    d="M44.0039 32.0254H44.2969C44.707 31.2051 44.9414 30.2676 45 29.2129C45 27.2793 44.1211 25.5801 42.7734 24.3496C41.8945 21.2441 39.0234 18.9004 35.625 18.9004C35.3906 18.9004 35.1562 18.959 34.9805 19.0176C33.9258 16.7324 31.6992 15.1504 29.0625 15.1504C26.4258 15.1504 24.1406 16.7324 23.0859 19.0176C22.9102 18.959 22.6758 18.9004 22.5 18.9004C18.3398 18.9004 15 22.2988 15 26.4004C15 28.6855 15.9961 30.6777 17.5781 32.0254H15.9375C15.4102 32.0254 14.9414 32.4941 15 33.0215C15.3516 37.5332 18.3984 41.2246 22.5 42.6309V43.2754C22.5 44.3301 23.3203 45.1504 24.375 45.1504H35.625C36.6797 45.1504 37.5 44.3301 37.5 43.2754V42.6309C41.543 41.166 44.5898 37.4746 44.9414 33.0215C45 32.4941 44.5898 32.0254 44.0039 32.0254ZM43.125 29.2129C43.0664 30.3262 42.7148 31.2637 42.1289 32.0254H34.6875C34.1016 31.2637 33.75 30.3262 33.75 29.2129C33.75 26.6348 35.8008 24.5254 38.4375 24.5254C41.0156 24.5254 43.125 26.6348 43.125 29.2129ZM16.875 26.4004C16.875 24.3496 18.2227 20.3066 24.375 20.7754C25.957 17.084 28.1836 17.0254 29.0625 17.0254C29.8828 17.0254 32.1094 17.0254 33.75 20.7754C35.8008 20.6582 38.2031 20.7168 39.9609 22.8848C39.4336 22.7676 38.9062 22.709 38.4375 22.6504C34.8047 22.709 31.875 25.6387 31.875 29.2129C31.875 30.2676 32.1094 31.2051 32.5195 32.0254H30V21.2441C30 21.0098 29.7656 20.7754 29.5312 20.7754H28.5938C28.3008 20.7754 28.125 21.0098 28.125 21.2441V30.7363L21.6211 24.2324C21.5039 24.1152 21.3867 24.1152 21.2695 24.1152C21.1523 24.1152 21.0352 24.1152 20.918 24.2324L20.2734 24.877C20.1562 24.9941 20.0977 25.1113 20.0977 25.2285C20.0977 25.3457 20.1562 25.4629 20.2734 25.5215L26.7773 32.0254H22.5C19.3945 32.0254 16.875 29.5059 16.875 26.4004ZM36.8555 40.873L35.625 41.2832V43.2754H24.375V41.2832L23.0859 40.873C19.9805 39.7598 17.6367 37.123 16.9922 33.9004H42.9492C42.3047 37.123 40.0195 39.7598 36.8555 40.873Z"
                    fill="#FF7800"
                  />
                </svg>
              </div>
              <div className="info-text col-9">
                <h1>Эрүүл, баталгаат орц</h1>
                <p>Хамгийн чанартайг танд.</p>
              </div>
            </Col>
            <Col className="info-col" md={4} lg={4}>
              <div className="col-4">
                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.400391"
                    width="60"
                    height="60"
                    rx="10"
                    fill="#FFD7BF"
                    fillOpacity="0.28"
                  />
                  <path
                    d="M40.5977 19.0879C39.4258 19.1367 33.5664 19.5273 29.9043 21.4805C29.709 21.5781 29.3672 21.5781 29.1719 21.4805C25.5098 19.5273 19.6504 19.1367 18.4785 19.0879C16.8184 19.0879 15.5 20.4062 15.5 22.0176V36.4707C15.5 38.0332 16.7207 39.2539 18.2832 39.3516C19.9922 39.4492 24.2402 39.7422 27.1699 40.8164C27.4629 40.9141 27.707 40.9629 27.9512 40.9629H31.0762C31.3691 40.9629 31.6133 40.9141 31.9062 40.8164C34.8359 39.7422 39.084 39.4492 40.793 39.3516C42.3555 39.2539 43.5762 38.0332 43.5762 36.4707V22.0176C43.625 20.4062 42.2578 19.0879 40.5977 19.0879ZM28.7812 38.668C28.7812 39.1074 28.3906 39.4492 28 39.4492C27.9023 39.4492 27.8535 39.4004 27.7559 39.4004C24.6797 38.2285 20.4805 37.8867 18.3809 37.7891C17.6484 37.7402 17.0625 37.2031 17.0625 36.4707V22.0176C17.0625 21.2852 17.6973 20.6992 18.4785 20.6992C19.4062 20.6992 24.4355 21.041 27.8535 22.5547C28.3906 22.7988 28.7324 23.3359 28.7324 23.9219L28.7812 28.8047V38.668ZM42.0625 36.4707C42.0625 37.2031 41.4277 37.7402 40.6953 37.7891C38.5957 37.8867 34.3965 38.2285 31.3203 39.4004C31.2227 39.4004 31.1738 39.4492 31.0762 39.4492C30.6855 39.4492 30.2949 39.1074 30.2949 38.668V28.8047L30.3438 23.9219C30.3438 23.3359 30.6855 22.7988 31.2227 22.5547C34.6406 21.041 39.6699 20.6992 40.5977 20.6992C41.3789 20.6992 42.0137 21.2852 42.0137 22.0176V36.4707H42.0625Z"
                    fill="#FF7800"
                  />
                </svg>
              </div>
              <div className="info-text col-9">
                <h1>Өргөн сонголт</h1>
                <p>Хамгийн онцгойг танд.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default InfoPanelComponent;
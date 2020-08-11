import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Layout,
  Navigation,
  Header,
  Drawer,
  Content,
  Button,
  Card,
  CardMenu,
  CardTitle,
  CardText,
  CardActionProps,
  CardActions,
  IconButton,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterDropDownSectionProps,
  FooterLinkList,
  Grid,
  Cell,
} from "react-mdl";

function App() {
  return (
    <Layout>
      <Content>
        <Header class="header-color" title="HomeRoom" scroll>
          <Navigation>
            <a href="#about">About</a>
            <a href="#todo">To Do</a>
            <a href="#classtasks">Class Tasks</a>
            <a href="#pomodoro">Pomodoro Timer</a>
            <a href="#features">Upcoming Features</a>
            <a href="https://github.com/shruthikmusukula/productivity-extension-website">Website Code</a>
            <a href="https://github.com/mchow101/productivity-extension"> Extension Code</a>
          </Navigation>
        </Header>

        <a name="about">
          <Grid scroll>
            <Cell col={12}>
              <Card
                scroll
                style={{
                  width: "77em",
                  margin: "auto",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)",
                  }}
                >
                  HomeRoom
                </CardTitle>
                <CardText>
                  <span>
                    During such a tumultuous time for the world, it can be
                    difficult to manage the seemingly larger workload that we
                    all face.
                    <h3>Enter HomeRoom</h3>A simple
                    productivity extension that can help students of all ages
                    and educators with developing the simple skill of time
                    management. Many existing platforms, such as Trello, contain
                    complex user interfaces. HomeRoom solves this issue by
                    coming in the form of a Chrome Extension, allowing for ease
                    of access. All your data can be connected with your Google
                    account. The extension will be live by Monday, August 17th on
                    the Chrome Extension store. Feel free to explore some of the extensions main
                    features below!
                  </span>
                </CardText>
              </Card>
            </Cell>
          </Grid>
        </a>
        <a name="todo">
          <Grid className="demo-grid-2" scroll>
            <Cell col={12}>
              <Card
                scroll
                style={{
                  width: "77em",
                  margin: "auto",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                  }}
                >
                  Feature 1: Personal To-Do List
              </CardTitle>
              <CardText>
                <span>
                The first feature of the browser extension includes a main homepage which contains a personal to-do list. 
                Users can add entire lists and proper list-items to their task homepage. The homepage also includes lists 
                and items from the following Class List feature.
                </span>
              </CardText>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  height: "300px",
                  width: "400px",
                  background:
                    "url(https://cdn.discordapp.com/attachments/741774580204437589/742552304556834896/unknown.png) center / cover",
                  margin: "auto",
                }}
              ></Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  height: "300px",
                  width: "400px",
                  background:
                    "url(https://cdn.discordapp.com/attachments/741774580204437589/742552777976316024/unknown.png) center / cover",
                  margin: "auto",
                }}
              ></Card>
            </Cell>
          </Grid>
        </a>

        <a name="classtasks">
          <Grid className="demo-grid-2" scroll>
            <Cell col={12}>
              <Card
                scroll
                style={{
                  width: "77em",
                  margin: "auto",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                  }}
                >
                Feature 2: Shared Class Lists
              </CardTitle>
              <CardText>
                <span>
                The second feature of the browser extension contains a set of Class Lists along with their respective list items. What makes
                this feature unique is that users can share entire lists with other users of the extension. Students and educators can
                also save links to calls for their online classes as well -- all in one place.
                </span>
              </CardText>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  height: "300px",
                  width: "400px",
                  background:
                    "url(https://cdn.discordapp.com/attachments/741774580204437589/742552373167259708/unknown.png) center / cover",
                  margin: "auto",
                }}
              ></Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  height: "300px",
                  width: "400px",
                  background:
                    "url(https://cdn.discordapp.com/attachments/741774580204437589/742552866064957460/unknown.png) center / cover",
                  margin: "auto",
                }}
              ></Card>
            </Cell>
          </Grid>
        </a>

        <a name="pomodoro">
          <Grid className="demo-grid-2" scroll>
            <Cell col={12}>
              <Card
                scroll
                style={{
                  width: "77em",
                  margin: "auto",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                  }}
                >
                  Feature 3: Pomodoro Timer
                </CardTitle>
                <CardText>
                  <span>
                  For those of us who struggle with time management, whether it be never completing the things we need to do or working too
                  hard, Francesco Cirillo invented the world-famous Pomodoro technique. HomeRoom gives users access to a personalized Pomodoro
                  timer. Work times and break periods can be customized. Users can also select the task they would like to work on from a
                  simple dropdown list under the timer as shown below.
                  </span>
                </CardText>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  height: "600px",
                  width: "400px",
                  background:
                    "url(https://cdn.discordapp.com/attachments/741774580204437589/742552467853803531/unknown.png) center / cover",
                  margin: "auto",
                }}
              ></Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  height: "600px",
                  width: "400px",
                  background:
                    "url(https://cdn.discordapp.com/attachments/741774580204437589/742552934403014656/unknown.png) center / cover",
                  margin: "auto",
                }}
              ></Card>
            </Cell>
          </Grid>
        </a>
        <a name="features">
          <Grid scroll>
            <Cell col={12}>
              <Card
                scroll
                style={{
                  width: "77em",
                  margin: "auto",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                  }}
                >
                  Upcoming Features:
                </CardTitle>
                <CardText>
                  <span>
                    <dl>
                      <dt>Website Blocker</dt>
                      <dd>
                        Users can block certain websites in their browser while trying to focus
                        to the best of their ability.
                      </dd>
                      <dt>Web RTC Video Chat Integration</dt>
                      <dd>
                        Users will be able to participate in video calls with other users through our extension
                        rather than running larger applications (Zoom, Microsoft Teams, etc.).
                      </dd>
                      <dt>Global Browser Extension Status</dt>
                      <dd>
                        Users will be able to access this extension from the browser of their choice. The
                        extension will not only be accessible for Chrome users, but for those use Firefox 
                        and other common browsers.
                      </dd>
                    </dl>
                    </span>
                </CardText>
              </Card>
            </Cell>
          </Grid>
          </a>
      </Content>
    </Layout>
  );
}

export default App;

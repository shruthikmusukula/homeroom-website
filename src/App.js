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
            <a href="#blocker">Website Blocker</a>
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
                    <h3 class="enter-homeroom">Enter HomeRoom</h3>A simple
                    productivity extension that can help students of all ages
                    and educators with developing the simple skill of time
                    management. Many existing platforms, such as Trello, contain
                    complex user interfaces. HomeRoom solves this issue by
                    coming in the form of a Chrome Extension, allowing for ease
                    of access. All your data can be connected with your Google
                    account Feel free to explore some of the extensions main
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
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)",
                  }}
                >
                  Feature 2: Class List
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
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
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)",
                  }}
                >
                  Feature 2: Class List
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
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
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)",
                  }}
                >
                  Feature 3: Pomodora Timer
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
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
      </Content>
    </Layout>
  );
}

export default App;

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
                <CardText>
                  <h3 class="enter-homeroom">HomeRoom</h3>
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
                    of access and a simple user interface.
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
                    width: "77em",
                    margin: "auto",
                  }}
                >
                  Feature 1: Personal To-Do List
                </CardTitle>
                <CardText>
                  During such a tumultuous time for the world,
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
                    "url(https://media.discordapp.net/attachments/741774580204437589/742552304556834896/unknown.png) center / cover",
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
                    "url(https://media.discordapp.net/attachments/741774580204437589/742552777976316024/unknown.png) center / cover",
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
      </Content>
    </Layout>
  );
}

export default App;

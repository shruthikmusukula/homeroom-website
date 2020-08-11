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
        <Header class="header-color" title="Title" scroll>
          <Navigation>
            <a href="#">To Do</a>
            <a href="#">Class Tasks</a>
            <a href="#">Pomodoro Timer</a>
            <a href="#">Website Blocker</a>
          </Navigation>
        </Header>
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
                To Do List
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
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
                To Do List
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
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
      </Content>
    </Layout>
  );
}

export default App;

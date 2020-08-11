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
      <Header transparent title="Homeroom" class="header-color">
        <Navigation>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Stats</a>
          <a href="#">Team</a>
          <a href="#">Download Now</a>
        </Navigation>
      </Header>
      <Content>
        <Card
          shadow={100}
          style={{
            width: "50em",
            margin: "auto",
            marginTop: "50px",
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
        </Card>
        <Card
          shadow={100}
          style={{
            width: "50em",
            margin: "auto",
            marginTop: "50px",
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
            Keep track of your task list at the tip of your finger tips.{" "}
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card
          shadow={75}
          style={{
            width: "50em",
            margin: "auto",
            marginTop: "50px",
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
            Welcome
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </Content>
    </Layout>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from ".";
import { Callout } from "./components/callout";
import { SVG } from "./components/icons/link";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button variant="secundary">hola</Button>
    <Callout variant="warning">
      <Callout.Header>
        <Callout.Icon>
          <SVG />
        </Callout.Icon>
        <Callout.Title>hola</Callout.Title>
      </Callout.Header>
      <Callout.Content>hola</Callout.Content>
    </Callout>
    <Callout variant="error">
      <Callout.Header>
        <Callout.Icon>
          <SVG />
        </Callout.Icon>
        <Callout.Title>hola</Callout.Title>
      </Callout.Header>
      <Callout.Content>hola</Callout.Content>
    </Callout>
    <Callout variant="themeless">
      <Callout.Header>
        <Callout.Icon>
          <SVG />
        </Callout.Icon>
        <Callout.Title>hola</Callout.Title>
      </Callout.Header>
      <Callout.Content>hola</Callout.Content>
    </Callout>
  </React.StrictMode>
);

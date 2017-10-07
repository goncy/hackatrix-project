import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import { Tutorial } from "../tutorial"
import { ProfessionalsList } from "../professionals-list"
import { ContactsList } from "../contacts-list"
import { Contact } from "../contact"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Tutorial} />
      <Route exact path="/professionals" component={ProfessionalsList} />
      <Route exact path="/contacts" component={ContactsList} />
      <Route exact path="/contacts/:id" component={Contact} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default Router

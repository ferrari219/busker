import React, { Component } from "react";
import EventPresenter from "./EventPresenter";
import { profileApi } from "pages/api/api";
class EventContainer extends Component {
  state = {
    iam: null,
    loading: true,
    error: null,
  };
  async componentDidMount() {
    try {
      const { data: iam } = await profileApi.iam();
      this.setState({
        iam,
      });
    } catch {
      this.setState({ error: "Cant find information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { iam } = this.state;
    console.log(iam);
    return <EventPresenter />;
  }
}

export default EventContainer;

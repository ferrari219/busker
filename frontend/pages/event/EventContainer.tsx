import React, { Component } from "react";
import EventPresenter from "./EventPresenter";
import { eventApi } from "pages/api/api";
class EventContainer extends Component {
  state = {
    event: null,
    loading: true,
    error: null,
  };
  async componentDidMount() {
    try {
      const { data: event } = await eventApi.event();
      this.setState({
        event,
      });
    } catch {
      this.setState({ error: "Cant find information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const data = this.state;
    console.log(data.event);
    return <EventPresenter {...data} />;
  }
}

export default EventContainer;

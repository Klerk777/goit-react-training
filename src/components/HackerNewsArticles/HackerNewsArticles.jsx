import React, { Component } from "react";
import Section from "../ComponentTitle/Section";
import { fetchArticlesWithQuery, fetchHomePageArticles } from "./api/api";
import ArticleList from "./ArticleList/ArticleList";

export default class HackerNewsArticles extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    query: "",
  };

  async componentDidMount() {
    try {
      const articles = await fetchHomePageArticles();
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    console.log("prevState", prevState);

    if (prevState.query === this.state.query) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const articles = await fetchArticlesWithQuery(query);
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { articles, isLoading, error, query } = this.state;

    return (
      <Section title="Articles from Hacker News API">
        <label>
          Enter your request:
          <input
            type="text"
            name="query"
            value={query}
            onChange={this.onChange}
          />
        </label>
        <div>
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {isLoading && <p>Loading...</p>}
          {articles.length > 0 && <ArticleList articles={articles} />}
        </div>
      </Section>
    );
  }
}

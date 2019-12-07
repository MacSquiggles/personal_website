import React from 'react';
import MediaQuery  from 'react-responsive';

class WorkTermOneBlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      sortBy: "ASC",
      darkMode: props.darkMode,
    };

    this.seePosts = this.seePosts.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({darkMode: newProps.darkMode});
}

  async componentDidMount() {
    let response = await getPostData(this.state.sortBy);
    console.log(response);
    await this.setState({ posts: response });
  }

  changeSort = async (e) => {
    console.log(e.target.value);
    await this.setState({sortBy: e.target.value});
    await this.seePosts();
  }

  seePosts = async (e) => {
    let response = await getPostData(this.state.sortBy);
    console.log(response);
    this.setState({ posts: response });
  }

  render() {
    return (
      <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
        <MediaQuery query='(max-width: 1224px)'>
          <h3 className="mobileTitle">
            Jr. Systems Developer
          </h3>
          <p className="mobilePlacement">
            The Co-operators
          </p>
          <select className="mobileSelection" onChange={this.changeSort}>
            <option value="ASC">
              Oldest to Newest
            </option>
            <option value="DESC">
              Newest to Oldest
            </option>
          </select>

          { this.state.posts.length > 0 &&
                this.state.posts.map((item, i) => 
                  <div className="mobilePostDiv" key={i}>
                    <h3 className="mobilePostTitle" >{item.post_title}</h3>
                    <p className="mobileAdded">Added: {item.posted_date}</p>
                    <p className="mobilePostDiv">{item.post_description}</p>
                  </div>
                )
            }
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
          <h3 className="title">
            Jr. Systems Developer
          </h3>
          <p className="placement">
            The Co-operators
          </p>
          <select onChange={this.changeSort}>
            <option value="ASC">
              Oldest to Newest
            </option>
            <option value="DESC">
              Newest to Oldest
            </option>
          </select>
          { this.state.posts.length > 0 &&
                this.state.posts.map((item, i) => 
                  <div className="postDiv" key={i}>
                    <h3 className="postTitle" >{item.post_title}</h3>
                    <p>Added: {item.posted_date}</p>
                    <p className="postDiv">{item.post_description}</p>
                  </div>
                )
            }
        </MediaQuery> 
    </div>
    );
  }
}


async function getPostData(order) {
  let data = {};
  let mySettings = [];
  mySettings.order = order;
  mySettings.timeframe = "";
  console.log(mySettings);

  await (async () => {
    const rawResponse = await fetch('/api/v1/getPosts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mySettings)
    });
    data = await rawResponse.json();
  })();

    return data;
}


export default WorkTermOneBlogForm;

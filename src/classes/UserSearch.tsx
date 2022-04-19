import { Component } from "react";
type User = {
  name: string;
  age: number;
};

type UserSearchProps = {
  users: {
    name: string;
    age: number;
  }[];
};

type UserSearchState = {
  name: string;
  user: User | undefined;
};

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  handleOnClick = () => {
    const foundUser = this.props.users.find((user) => {
      return (user.name = this.state.name);
    });
    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h1>User Search</h1>

        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <button onClick={this.handleOnClick}>Find user</button>
        <div>
          <p>
            {user && user.name} - {user && user.age} year old
          </p>
        </div>
      </div>
    );
  }
}

export default UserSearch;

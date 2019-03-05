import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      colors: [{ name: "" }]
    };
  }
  handleAddColor = () => {
    this.setState({
      colors: this.state.colors.concat([{ name: "" }])
    });
  };

  handleRemoveColor = idx => () => {
    this.setState({
      colors: this.state.colors.filter((s, sidx) => idx !== sidx)
    });
  };

  handleColorNameChange = idx => evt => {
      const newColors = this.state.colors.map((colorHex, sidx) => {
        if (idx !== sidx) return colorHex;
        return { ...colorHex, name: evt.target.value };
      });
      this.setState({ colors: newColors });
  };

  render() {
    return (
      <form>
        <h4 className="title">Colors</h4>
        {this.state.colors.map((colorHex, idx) => (
          <div className="textinput">
            <input
              type="text"
              placeholder={`HEX Color #${idx + 1}`}
              value={colorHex.name}
              onChange={this.handleColorNameChange(idx)}
            />
            <button
              className="small"
              type="button"
              onClick={this.handleRemoveColor(idx)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="small" type="button" onClick={this.handleAddColor}>
          Add color
        </button>
      </form>
    );
  }
}
export default App;

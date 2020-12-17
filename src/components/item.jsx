import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      // TODO to save checked, or tell parent when its changing
    };
  }

  handleChangeCheckbox(event) {
    const title = document.getElementById(this.props.id);
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
    this.state.checked
      ? title.classList.remove('item-done')
      : title.classList.add('item-done');
  }

  render() {
    return (
      <div className="todo-item">
        <div>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChangeCheckbox.bind(this)}
          />
          <span id={this.props.id}>

            {this.props.title}

          </span>
          <br />
          <span>

            {this.props.create_date}

          </span>
        </div>
      </div>
    );
  }
}

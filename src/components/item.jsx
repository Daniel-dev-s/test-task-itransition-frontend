import React from 'react';

export class Item extends React.Component {
  handleChangeCheckbox(event) {
    const title = event.target.nextSibling;
    event.target.checked
      ? title.classList.add('item-done')
      : title.classList.remove('item-done');
  }

  render() {
    return (
      <div className="todo-item">
        <div>
          <input type="checkbox" onChange={this.handleChangeCheckbox.bind(this)} />
          <span>
            {' '}
            {this.props.title}
            {' '}
          </span>
          <br />
          <span>
            {' '}
            {this.props.create_date}
            {' '}
          </span>
        </div>
      </div>
    );
  }
}

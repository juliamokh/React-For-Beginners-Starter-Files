import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    updateFish: PropTypes.func,
    index: PropTypes.string,
    deleteFish: PropTypes.func
  };

  handleChange = ev => {
    const updatedFish = {
      ...this.props.fish,
      [ev.currentTarget.name]: ev.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }
  
  render() {
    const { name, price, status, desc, image } = this.props.fish;

    return (
      <div className='fish-edit'>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={name}
        />
        <input 
          type='text'
          name='price'
          onChange={this.handleChange}
          value={price}
        />
        <select
          name='status'
          onChange={this.handleChange}
          value={status}
        >
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          onChange={this.handleChange}
          value={desc}>
        </textarea>
        <input
          type='text'
          name='image'
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;

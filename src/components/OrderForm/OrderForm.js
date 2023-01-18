import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value })

  }

  handleIngredientChange = e => {
    e.preventDefault()
    const newIngredient = e.target.name
    this.setState({ ingredients: [...this.state.ingredients, newIngredient]})
    this.handleValidation()
  }

  handleValidation = () => {
    if (!this.state.ingredients || !this.state.name) {
      throw new Error('This is a required field')
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    

    // fetch('http://localhost:3001/api/v1/orders', {
    //   method: 'POST',
    //   body: JSON.stringify(),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(res => {
    //   console.log(res)
      
    // })
    //.catch(err => console.log(err))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
          required
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;

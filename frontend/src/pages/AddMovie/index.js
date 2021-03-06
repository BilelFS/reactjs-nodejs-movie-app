import React from "react";
import Joi from "@hapi/joi";
import { connect } from "react-redux";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Select from "../../components/common/Select";
import { addMovie } from "../../actions/moviesAction";
import { getGenres } from "../../actions/genreAction";

class AddMovieForm extends React.Component {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      description: "",
      image: null,
    },
    genres: [],
    errors: {},
  };

  componentDidMount() {
    this.props.getGenres();
  }
  schema = {
    id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).required().label("Number In Stocks"),
    description: Joi.string().required().label("Description"),
    image: Joi.object().allow(null).label("Cover Image"),
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    result.error.details.forEach(
      (element) => (errors[element.path[0]] = element.message)
    );
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.addMovie(this.state.data);
    console.log(this.state.data);
  };

  uploadImage = (e) => {
    if (e.target.files[0]) {
      const data = { ...this.state.data };
      data["image"] = e.target.files[0];
      this.setState({ data });
    }
  };

  render() {
    const { errors, data } = this.state;
    const { title, genre, numberInStock, description } = data;
    const { genres } = this.props;
    return (
      <div className="background-container pt-5">
        <div className="container">
          <h1 className="header">Add a new movie</h1>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <Input
              name="title"
              value={title}
              label="Title"
              onChange={this.handleChange}
              placeholder="Enter the title..."
              error={errors["title"]}
              iconClass="fas fa-film"
              autoFocus
            />
            <Select
              name="genre"
              label="Genre"
              onChange={this.handleChange}
              value={genre}
              error={errors["genre"]}
              options={genres}
              iconClass="fas fa-address-card"
            />
            <Input
              name="numberInStock"
              label="Number In Stock"
              onChange={this.handleChange}
              placeholder="Enter numbers the stock..."
              error={errors["numberInStock"]}
              iconClass="fas fa-hashtag"
              value={numberInStock}
              type="number"
            />
            <Input
              name="image"
              label="Cover Image"
              onChange={this.uploadImage}
              error={errors["coverImage"]}
              iconClass="fas fa-file-image"
              accept="image/*"
              type="file"
            />
            <Input
              name="description"
              label="Description"
              onChange={this.handleChange}
              placeholder="Enter description about this movie..."
              iconClass="fas fa-info"
              error={errors["description"]}
              value={description}
              type="textarea"
            />
            <button type="submit" className="btn special-btn">
              {" "}
              Add{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => dispatch(addMovie(movie)),
    getGenres: () => dispatch(getGenres()),
  };
};

const mapStateToProps = (state) => {
  return {
    genres: state.genre.genres,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddMovieForm);

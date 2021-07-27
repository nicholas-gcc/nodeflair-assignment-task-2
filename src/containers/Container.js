import React, { Component } from 'react'
import FilterButton from '../components/FilterButton'
import ImageList from '../components/ImageList'

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picturesList: this.props.picturesList,
            buttonsList: this.props.buttonsList,
            filteredPictures: [],
            filterName: 'All'
        }
    }

    componentDidMount() {
        this.setState({
            filteredPictures: this.state.picturesList
        })
    }

    handleClick(filterValue) {
        let filteredPictures = [];
        if (filterValue === "All") {
            filteredPictures = this.state.picturesList;
        } else {
            filteredPictures = this.state.picturesList.filter(
                picture => picture.type === filterValue
            );
        }
        this.setState({ 
            filteredPictures,
            filterName: filterValue
         });
    }

    renderButtons() {
        const buttons = this.state.buttonsList.map(({ name, value }) => (
            <FilterButton 
                name={name}
                key={name}
                value={value}
                onClick={this.handleClick.bind(this, name)}
            />
        ));

        return (
            <div>
                {buttons}
            </div>
        )
    }

    render() {
        var buttons = this.renderButtons(this.state.buttonsList);
        return (
            <div className="container">

                <div className="buttons">
                    {buttons}
                    <h2>{this.state.filterName} pictures</h2>
                </div>

                <div className="pictures row">
                    <ImageList 
                        picturesList={this.state.filteredPictures}
                    />
                </div>
            </div>
        )
    }
}

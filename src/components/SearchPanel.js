import { Component } from 'react'

class SearchPanel extends Component {
    state = {
        searchValue: ''
    }

    onSearch = e => {
        const searchValue = e.target.value
        this.setState({searchValue})
        this.props.onSearch(searchValue)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Type to search"
                value={this.state.searchValue}
                onChange={this.onSearch}
            />
        )
    }
}

export default SearchPanel
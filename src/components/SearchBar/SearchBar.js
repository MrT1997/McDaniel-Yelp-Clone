import React from 'react';
import './SearchBar.css';
// Still on #22

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.handleTermChange.bind(this);
        this.handleLocationChange.bind(this);
        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Closest Distance' : 'distance',
            'Most Reviewed' : 'review_count'
        };
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleSearch(event) {
        this.props.searchYelp.bind(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                    {sortByOption}
                </li>
            )
            //return <li key={sortByOptionValue}>{sortByOption}</li>; 
        });
    }

    render() {
        return (
            <div searchYelp={this.searchYelp} className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange="handleTermChange()" placeholder="Search Businesses" />
                    <input onChange="handleLocationChange()" placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick="this.handleSearch" href="##">Let's Go</a>
                </div>
            </div>
        );
    }
}
export default SearchBar;

// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import PropTypes from "prop-types";


// App component (parent)
const App = () => {
  
  const stories = [
    {
      title: 'React',
      url: 'https:/reactjs.org/',
      author: 'Jordan White',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https:/redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]
  // searchTerm respresents the current state value (first entry)
  // setSearchTerm is a function that updates the state (second entry)
  // useState takes an initail state which is a empty string 
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // filter stories by title and in lowercase
  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <h1>My Hacker Stories</h1>
      {/* Search instance / onSearch handles the search */}
      <Search onSearch={handleSearch} />

      <hr />
      {/* List instance / list object */}      
      <List list={searchedStories} /> 

    </div>
    
 
  );
  
};
  // Search component (child)
  const Search = (props) => {
      return (
        <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={props.onSearch}></input>

          <p>
            Search for <strong>{props.searchTerm}</strong>
          </p>
        </div>
      );
    }
  // List component (child)
  const List = (props) => (
      <ul>
        {props.list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
    );
    // Item component (child)
    const Item = (props) => (
      <li>
        <span>
        <a href={props.item.url} target="blank">{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
    );


    Search.propTypes = {
      onSearch: PropTypes.func,
      searchTerm: PropTypes.func
    };

    List.propTypes = {
      list: PropTypes.array,
    
    };
    Item.propTypes = {
      item: PropTypes.objects,
    };
    
  


export default App


/** React Props
 * Communicate with child components using props.
 * Props pass information from one component to another component.
 * Props are immutable, meaning it can't be changed.
 * Props can only pass information down a component tree.
 * Props can only be passed from a parent to a child component and not the other way.
 * 
 */

/** React State
 * State introduces a mutable data structure such as reading stateful values.
 * When a state gets changed, the component with the state and all the child components will re-render.
 * State is used to change information over time.
 * Use useState to have a stateful value which changes overtime.
 * We need both entries to display the current state and to update it.
 * 
 */

/** Callback Handlers
 * Allows us to communicate upwards the component tree.
 * Gets introduced as event handler
 * Passed as function in props to another component.
 * Gets executed as a callback handler.
 * Calls back to the place it was introduced.
 * Event hadnler is passed as props from parent component to its child componenet becomes a callback handler.
 * Functions that are passed down as callback handlers in props can be used to communicate up the component tree.
 * 
 */
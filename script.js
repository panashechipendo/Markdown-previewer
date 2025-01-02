import React from 'react';
import ReactDOM from 'react-dom';

// Functional Component
const FunctionalComponent = () => {
    return (
        <div>
            <h1>This is a Functional Component</h1>
        </div>
    );
};

// Class Component
class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a Class Component</h1>
            </div>
        );
    }
}

const App = () => {
    return (
        <div>
            <FunctionalComponent />
            <ClassComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
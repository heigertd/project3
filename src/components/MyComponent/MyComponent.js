import React from 'react';
import Moment from 'react-moment';


 class MyComponent extends React.Component {
    render() {
        return (
            
            <Moment> format="YYYY/MM/DD">{this.props.dateToFormat}</Moment>
        );
    }
}
// export default MyComponent;
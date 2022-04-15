import React, {Fragment} from 'react';
import Header from '../headerFooter';
import Footer from '../headerFooter/footer';
import SignIn from '../auth/signin';

const WithHeaderFooter = (Component) => {
  return class extends React.Component {
    componentWillMount() {
      alert('HOC');
    }
    render() {
      return (
        <Fragment>
          <Header />
          <SignIn />
          {/* <Component {...this.props} /> */}
          <Footer />
        </Fragment>
        )
    }
  }
}

export default WithHeaderFooter;
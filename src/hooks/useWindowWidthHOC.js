import { Component } from 'react';


function withWindowWidth(InputComponent) {
    class OutputComponent extends Component {
        state = { width: window.innerWidth };

        componentDidMount() {
            this.setState({
                width: window.innerWidth
            });
        }

        onResize = () => {
            this.setState({ width: window.innerHeight });
        };

        componentWillUnmount() {
            window.removeEventListener('resize', this.onResize);
        }

        render() {
            const { width } = this.state;
            return <InputComponent {...this.props} width={width} />
        }
    }
    return OutputComponent;
}


export default withWindowWidth;
